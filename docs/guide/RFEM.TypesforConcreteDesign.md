# Types for Concrete Design

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesforConcreteDesign)*

## ConcreteDurability


### ConcreteDurability(no, name, members_no, member_sets_no, surfaces_no, exposure_classes_reinforcement, exposure_classes_reinforcement_types, exposure_classes_concrete, exposure_classes_concrete_types, structural_class, stainless_steel_reduction, additional_protection_reduction, allowance_deviation, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Concrete Durability Tag


    * **name** (*str*) – User Defined Name


    * **members_no** (*str*) – Assigned Members


    * **member_sets_no** (*str*) – Assigned Member Sets


    * **surfaces_no** (*str*) – Assigned Surfaces


    * **exposure_classes_reinforcement** (*list*) – Exposure Classes Reinforcement Parameters


    * **exposure_classes_reinforcement_types** (*list of enum*) – Exposure Classes Reinforcement Parameters


    * **exposure_classes_concrete** (*list*) – Exposure Classes Concrete Parameters


    * **exposure_classes_concrete_types** (*list of enum*) – Exposure Classes Concrete Parameters


    * **structural_class** (*list*) – Structural Class Parameters


    * **stainless_steel_reduction** (*list*) – Stainless Steel Reduction Parameters


    * **additional_protection_reduction** (*list*) – Additional Protection Reduction


    * **allowance_deviation** (*list*) – Allowance Deviation Parameters


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## ConcreteEffectiveLength


### ConcreteEffectiveLength(no, name, members_no, member_sets_no, flexural_buckling_about_y, flexural_buckling_about_z, nodal_supports, factors, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Concrete Effective Length Tag


    * **name** (*str*) – User Defined Name


    * **members_no** (*str*) – Assigned Members


    * **member_sets_no** (*str*) – Assigned Member Sets


    * **flexural_buckling_about_y** (*list*) – Flexural Buckling About Y Option


    * **flexural_buckling_about_z** (*list*) – Flexural Buckling About Z Option


    * **nodal_supports** (*list of lists*) – Nodal Support Table

        > nodal_supports = [[support_type, support_in_z, support_spring_in_y, eccentricity_type, eccentricity_ez, restraint_spring_about_x, restraint_spring_about_z, restraint_spring_warping, support_in_y_type, restraint_about_x_type, restraint_about_z_type, restraint_warping_type, nodes], …]


    * **factors** (*list of lists*) – Factors Table

        > factors = [[flexural_buckling_y, flexural_buckling_z]]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## ConcreteReinforcementDirections


### ConcreteReinforcementDirection(no, name, surfaces, reinforcement_direction_type, rotation_parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Concrete Reinforcement Direction Tag


    * **name** (*str*) – User Defined Name


    * **surfaces** (*str*) – Assigned Surfaces


    * **reinforcement_direction_type** (*enum*) – Reinforcement Direction Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters List


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## ConcreteSurfaceReinforcements


### ConcreteSurfaceReinforcements(no, name, surfaces, material, location_type, reinforcement_type, reinforcement_type_parameters, cover_offset, reinforcement_direction, reinforcement_direction_parameters, reinforcement_location, reinforcement_acting_region, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Concrete Surface Reinforcement Tag


    * **name** (*str*) – User Defined Name


    * **surfaces** (*str*) – Assigned Surfaces


    * **material** (*str*) – Reinforcement Material


    * **location_type** (*enum*) – Surface Reinforcement Location Type Enumeration


    * **reinforcement_type** (*enum*) – Surface Reinforcement Type Enumeration


    * **reinforcement_type_parameters** (*list*) – Reinforcement Type Parameters List

        > * for reinforcement_type = SurfaceReinforcementType.REINFORCEMENT_TYPE_REBARS:    
        reinforcement_type_parameters = [rebar_diameter, rebar_spacing, additional_transverse_reinforcement_enabled]
            >> * if additional_transverse_reinforcement_enabled == True:    
            reinforcement_type_parameters = [rebar_diameter, rebar_spacing, additional_transverse_reinforcement_enabled, additional_rebar_diameter, additional_rebar_spacing]
        
        > * for reinforcement_type = SurfaceReinforcementType.REINFORCEMENT_TYPE_STIRRUPS:  
        reinforcement_type_parameters = [stirrup_diameter, stirrup_spacing]
        
        > * for reinforcement_type = SurfaceReinforcementType.REINFORCEMENT_TYPE_MESH:  
        reinforcement_type_parameters = [mesh_product_range, mesh_shape, mesh_name]


    * **cover_offset** (*list*) – Cover Offset Parameters List

        > cover_offset = [alignment_top_enabled, alignment_bottom_enabled, additional_offset_to_concrete_cover_top, additional_offset_to_concrete_cover_bottom]            


    * **reinforcement_direction** (*enum*) – Surface Reinforcement Direction Enumeration


    * **reinforcement_direction_parameters** (*list*) – Reinforcement Direction Parameters


    * **reinforcement_location** (*list*) – Reinforcement Location Parameters


    * **reinforcement_acting_region** (*list*) – Reinforcement Acting Region Parameters


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited


