
## WebService Tool for Ponding Water in C# 

The example represents the calculation of a water load applied to a beam, which increases due to the beam's deflection. To be more flexible, the user should be able to select the beam(s). Furthermore, additional loads acting on the roof, which are applied to the same load case irrespective of the water load, should not be modified. The following boundary conditions are known/applied:

* Water level above the undeformed system
* Feed zone width of member for area load
* Load case number of load case for which the load is to be applied
* Area load of water per m of water level (10000 N/m³)
* An identifier used to identify the area loads

The following variables are therefore created in the program:
```csharp
double h_water = 0.1;   //  height of water over undeformed system in [m]
double w_ref = 2;       //  reference width for surface load in [m]
int load_case_no = 1;   //  number of load case where the load is applied
string water_accu_comment = "water accumulation";  //  identification string
double std_magnitude = 10000;   //  surface load per water height in [N/m^3]
```

With regard to the implementation, the program must include the following elements:

1. Filtering out selected members
2. Deleting water loads from previous runs
3. Creating new loads
4. Start calculation
5. Determining deflection
6. Going back to step 3 and creating new loads from deformations
7. Repeating iterations until a limit value is reached

In addition to these functions, the connection to the program and model, various try-catch blocks, and other standard elements are required, but are not described in more detail here. These elements are then included in the source code, which can be downloaded below this article.

### 1. Filtering out selected members

First, we get information about all selected objects using the get_all_selected_objects function. The received array contains elements of the object_location type, containing e.g. the type, the number, and the higher-order "parent" object number. In the following loop, the numbers of all objects of the E_OBJECT_TYPE_MEMBER type (i.e. all member numbers) are extracted and saved in the mem_noes_sel array.

```csharp
//  get selected objects
object_location[] obj_locs = model.get_all_selected_objects();

//  extract members
int[] mem_noes_sel = new int[0];
foreach(object_location obj_loc in obj_locs)
{
	if(obj_loc.type == object_types.E_OBJECT_TYPE_MEMBER)
	{
		Array.Resize(ref mem_noes_sel, mem_noes_sel.Length + 1);
		mem_noes_sel[mem_noes_sel.Length-1] = obj_loc.no;
	}
}
```

### 2. Deleting water loads from previous runs

By means of member numbers, it is now possible to filter out the associated member loads from all member loads. A loop put over the member load numbers is used. Within this loop, we get the data for the member load, check its member numbers for accordance with the selected member numbers and, if there is a match, the corresponding member load is deleted:

![Filtering](../img/netPondingWater2.png)

```csharp
//  delete all water_accu loads
//  get all memberload numbers
int[] mem_load_noes = model.get_all_object_numbers(object_types.E_OBJECT_TYPE_MEMBER_LOAD, load_case_no);

//  loop through all member loads of the load case
foreach(int mem_load_no in mem_load_noes)
{
	//  get member load
	member_load mem_load = model.get_member_load(mem_load_no, load_case_no);

	if(mem_load.comment == water_accu_comment)
	{
		//  loop through the members of the member load
		for(int i= 0; i < mem_load.members.Length; i++)
		{
			//  loop through the members of the member load
			for (int j = 0; j < mem_noes_sel.Length; j++)
			{
				if(mem_load.members[i] == mem_noes_sel[j])
				{
					//  delete member load
					model.delete_object(object_types.E_OBJECT_TYPE_MEMBER_LOAD, mem_load_no, load_case_no);
				}
			}
		}		
	}
}
```
Now, the next step is to create the new member loads, which is already part of the do-while iteration loop. This loop is built as follows:

```csharp
do
{
	//  reset delta deformation
	delta_def = 0;
	
	//  apply load
	model.begin_modification("Loads");
	
    //  create member loads for each member
	...
    
    model.finish_modification();
    ...
    
	//  calculate load case
	...


	//  get member end deformations
	...

//  check criterion
} while (delta_def > 0.0001);
```
 
For stopping the iteration loop, the change of the deformation, which is determined when filtering the results, was selected. If all deformations deviate from the deformation in the previous run by less than 0.0001 m (i.e. 0.1 mm), the loop is stopped.

### 3. Creating new loads

A trapezoidal load acting in the global z-direction is selected as the load type, which may have different values at the start and end of the member. Please note that the associated "Specified" variable must be set to "true" for all parameters to be transferred. This is necessary in order not to transfer all parameters of a class and to keep this way the amount of data to be transferred rather low. The load's value is calculated from the initial height "h_water" (was specified) and the additional nodal deformation on this location. The height given in [m] is multiplied by "std_magnitude" in [N/m3] and the feed zone width given in [m], resulting in a line load given in [N/m]:

```csharp
//  create member loads for each member
for (int i = 0; i < mem_noes_sel.Length; ++i)
{
	member_load mem_load = new member_load();
	mem_load.no = no_offset + i;
	mem_load.comment = water_accu_comment;
	mem_load.members = new int[] { mem_noes_sel[i] };

	mem_load.distance_a_is_defined_as_relative = true;
	mem_load.distance_a_is_defined_as_relativeSpecified = true;
	mem_load.distance_a_relative = 0.0;
	mem_load.distance_a_relativeSpecified = true;

	mem_load.distance_b_is_defined_as_relative = true;
	mem_load.distance_b_is_defined_as_relativeSpecified = true;
	mem_load.distance_b_relative = 1.0;
	mem_load.distance_b_relativeSpecified = true;

	mem_load.load_direction = member_load_load_direction.LOAD_DIRECTION_GLOBAL_Z_OR_USER_DEFINED_W_TRUE;
	mem_load.load_directionSpecified = true;

	mem_load.load_type = member_load_load_type.LOAD_TYPE_FORCE;
	mem_load.load_typeSpecified = true;
	mem_load.load_distribution = member_load_load_distribution.LOAD_DISTRIBUTION_TRAPEZOIDAL;
	mem_load.load_distributionSpecified = true;
	
    mem_load.magnitude_1 = std_magnitude * ((h_water + mem_end_defs[i,0]) * w_ref);
	mem_load.magnitude_1Specified = true;
	mem_load.magnitude_2 = std_magnitude * ((h_water + mem_end_defs[i,1]) * w_ref);
	mem_load.magnitude_2Specified = true;

	model.set_member_load(load_case_no, mem_load);    
}
```
The set_member_load function is used to transfer the load. In order to assign the loads, the water_accu_comment string is used as a comment. In the following iterations, the loads are no longer deleted; instead, by specifying the load number, they are overwritten when they are transferred again. The comment is therefore only required for filtering and deleting the loads when the application is restarted. Furthermore, a relative reference was chosen for the specifying the load, which, however, ranges from 0-100%.

The next step is to initiate the calculation. First, a field is created with objects of the calculate_specific_loading type. This field contains all load cases/combinations to be calculated. In the present case, only one element of the load case type is created with the specified load case number load_case_no:

```csharp
//  calculate load case
calculate_specific_loading[] csl = new calculate_specific_loading[1];
csl[0] = new calculate_specific_loading();
csl[0].no = load_case_no;
csl[0].type = case_object_types.E_OBJECT_TYPE_LOAD_CASE;

model.calculate_specific(csl, true);
```

Now that the results are available, the global deformations at the beginning and the end of each member must be filtered out. The get_results_for_members_global_deformations function is used to get all global member deformations of the specified load case and the selected members. The structure of the results is the same as in the corresponding table in RFEM 6. One variant is reading out the member length and comparing the x position of the result. Another variant uses the given description and the fact that the extremes follow after all x-locations. The second variant was chosen, and when "Extremes" appears in the description for the first time, the previous index is used to find the last x-location of the member. Since the first location of the member also affects the first entry, no further filtering is necessary here:

```csharp
//  get member end deformations
for (int i = 0; i < mem_noes_sel.Length; ++i)
{
    members_global_deformations_row[] mem_defs_glbl = model.get_results_for_members_global_deformations(case_object_types.E_OBJECT_TYPE_LOAD_CASE, load_case_no, mem_noes_sel[i]);

    //  take start point
    //  calculate delta deformation
    if (Math.Abs(mem_end_defs[i, 0] - mem_defs_glbl[0].row.displacement_z) > delta_def)
        delta_def = Math.Abs(mem_end_defs[i, 0] - mem_defs_glbl[0].row.displacement_z);

    mem_end_defs[i, 0] = mem_defs_glbl[0].row.displacement_z;
    
    //  get deformation on end point
    for (int j = 0; j < mem_defs_glbl.Length; ++j)
    {
        if (mem_defs_glbl[j].description == "Extremes")
        {
            //  calculate delta deformation
            if (Math.Abs(mem_end_defs[i, 1] - mem_defs_glbl[j - 1].row.displacement_z) > delta_def)
                delta_def = Math.Abs(mem_end_defs[i, 1] - mem_defs_glbl[j - 1].row.displacement_z);

            mem_end_defs[i, 1] = mem_defs_glbl[j - 1].row.displacement_z;
            break;
        }
    }
}
```
In addition to determining the deformations, the "delta_def" variable is also calculated, which is used for the stop criterion. First, the difference from the deformation value of the previous iteration (zero at the beginning) and the current value is calculated. The absolute value is taken from the difference and then the maximum is found. As already shown in the description of the iteration loop, we stop at a value smaller than 0.0001 m (i.e. 0.1 mm).

In the video attached to this article, you can see the load filter on the one hand and the iteration steps up to the stop on the other. At the end, the load found is displayed.

![ResultingLoad](../img/netPondingWater3.png)

The WebService interface offers countless options for modifying elements in RFEM 6/RSTAB 9, but also for reading out results. Many different projects can be realized with it. The program shown here in this article includes only a first step of many different elements:

1. Get selected elements
2. Create loads
3. Get and filter results
4. Filter elements by comment
5. Delete elements

![Summary](../img/netPondingWater1.png)

Due to this variety, the program is also intended to serve as a template for other projects.