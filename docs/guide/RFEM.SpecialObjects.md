# Special Objects

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/SpecialObjects)*

## Intersection


### Instersection(no, surface_1, surface_2, comment, params, model)

Intersection


* **Parameters**

    
    * **no** (*int*) – Intersection Tag


    * **surface_1** (*int*) – Surface number 1


    * **surface_2** (*int*) – Surface number 2


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## LineRelease


### LineRelease(no, lines, line_release_type, release_location, released_members, released_surfaces, released_solids, use_nodes_as_definition_nodes, deactivated, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Release Tag


    * **lines** (*str*) – Assigned Lines


    * **line_release_type** (*int*) – Line Release Type Number


    * **release_location** (*enum*) – Line Release Release Location Enumeration


    * **released_members** (*str*) – Assigned Release Members


    * **released_surfaces** (*str*) – Assigned Release Surfaces


    * **released_solids** (*str*) – Assigned Release Solids


    * **use_nodes_as_definition_nodes** (*str*) – Assigned Definition Nodes


    * **deactivated** (*bool*) – Activate/Deactivate Line Release


    * **name** (*str*) – User Defined Name


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## LineReleaseType


### LineReleaseType(no, spring_constant, translational_release_ux_nonlinearity, translational_release_uy_nonlinearity, translational_release_uz_nonlinearity, rotational_release_phi_x_nonlinearity, local_axis_system, system_para, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Release Type Tag


    * **spring_constant** (*list*) – Spring Constant List


    * **translational_release_ux_nonlinearity** (*list of lists*) – Nonlinearity Parameter for Translation Release along X Direction


    * **translational_release_uy_nonlinearity** (*list of lists*) – Nonlinearity Parameter for Translation Release along Y Direction


    * **translational_release_uz_nonlinearity** (*list of lists*) – Nonlinearity Parameter for Translation Release along Z Direction

        > * for translational_release_ux/y/z_nonlinearity[0] == TranslationalReleaseNonlinearity.NONLINEARITY_TYPE_PARTIAL_ACTIVITY:    
        translational_release_ux/y/z_nonlinearity = [nonlinearity type Partial_Activity, negative zone, positive zone]   
            >> * for negative/positive zone[0] == PartialActivityAlongType.PARTIAL_ACTIVITY_TYPE_COMPLETE:  
            negative/positive zone = [negative/positive zone type, slippage]    
            >> * for negative/positive zone[0] == PartialActivityAlongType.PARTIAL_ACTIVITY_TYPE_FIXED:   
            negative/positive zone = [negative/positive zone type, slippage, displacement]  (Note: Displacement must be greater than slippage)  
            >> * for negative/positive zone[0] == PartialActivityAlongType.PARTIAL_ACTIVITY_TYPE_FAILURE_FROM_FORCE/PARTIAL_ACTIVITY_TYPE_YIELDING_FROM_FORCE:  
            negative/positive zone = [negative/positive zone type, slippage, force]     

        > * for translational_release_ux/y/z_nonlinearity[0] == TranslationalReleaseNonlinearity.NONLINEARITY_TYPE_DIAGRAM:     
        translational_release_ux/y/z_nonlinearity = [nonlinearity type Diagram, [symmetric(bool), LineReleaseDiagram Enumeration(start), LineReleaseDiagram Enumeration(end)], [[displacement, force],...]]


    * **rotational_release_phi_x_nonlinearity** (*list of lists*) – Nonlinearity Parameter for Rotational Release around X Direction


        > * for rotational_release_phi_x_nonlinearity[0] == RotationalReleaseNonlinearity.NONLINEARITY_TYPE_PARTIAL_ACTIVITY:   
        rotational_release_phi_x_nonlinearity = [nonlinearity type Partial_Activity, negative zone, positive zone]      
            >> * for negative/positive zone[0] == RotationalReleaseNonlinearity.PARTIAL_ACTIVITY_TYPE_COMPLETE:     
            negative/positive zone = [negative/positive zone type, slippage]   
            >> * for negative/positive zone[0] == RotationalReleaseNonlinearity.PARTIAL_ACTIVITY_TYPE_FIXED:    
            negative/positive zone = [negative/positive zone type, slippage, rotation] 
            >> * for negative/positive zone[0] == RotationalReleaseNonlinearity.PARTIAL_ACTIVITY_TYPE_FAILURE_FROM_MOMENT/PARTIAL_ACTIVITY_TYPE_YIELDING_FROM_MOMENT:   
            negative/positive zone = [negative/positive zone type, slippage, moment]

        > * for rotational_release_phi_x_nonlinearity[0] == RotationalReleaseNonlinearity.NONLINEARITY_TYPE_DIAGRAM:    
        rotational_release_phi_x_nonlinearity = [nonlinearity type Diagram, [symmetric(bool), LineReleaseDiagram Enumeration(start), LineReleaseDiagram Enumeration(end)], [[rotation, moment],...]]

        > * for rotational_release_phi_x_nonlinearity[0] == RotationalReleaseNonlinearity.NONLINEARITY_TYPE_FORCE_MOMENT_DIAGRAM:   
        rotational_release_phi_x_nonlinearity = [nonlinearity type Force_Moment_Diagram, [symmetric(bool), LineReleaseForceMomentDiagram Enumeration(end), LineReleaseForceMomentDepend Enumeration], [[force, max_moment, min_moment(if not symetric)],...]]


    * **local_axis_system** (*enum*) – Line Release Local Axis System Enumeration


    * **system_para** (*list*) – System Parameters


        > * for local_axis_system ==LineReleaseLocalAxisSystem.LOCAL_AXIS_SYSTEM_TYPE_ORIGINAL_LINE:    
        system_para = [rotational_angle]    

        > * for local_axis_system ==LineReleaseLocalAxisSystem.LOCAL_AXIS_SYSTEM_TYPE_Z_AXIS_PERPENDICULAR_TO_SURFACE:  
        system_para = [rotational_angle, surface_tag]

        > * for local_axis_system ==LineReleaseLocalAxisSystem.E_LOCAL_AXIS_SYSTEM_TYPE_HELP_NODE:  
        system_para = [rotational_angle, node_tag, local_axis_system_object_in_plane]



    * **name** (*str*) – User Defined Name


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## ResultSection


### ResultSection(no, type, show_section_in_direction, show_values_on_isolines, parameters, assigned_to_surfaces, assigned_to_solids, params, model)

Result Section


* **Parameters**

    
    * **no** (*int*) – Result Section Tag


    * **type** (*enum*) – Result Section Type Enumeration


    * **show_section_in_direction** (*enum*) – Result Section Result Direction Enumeration


    * **show_values_on_isolines** (*bool*) – Show values on Isolines


    * **parameters** (*list*) – Variable Parameters

        > * if type == ResultSectionType.TYPE_LINE:     
        parameters = [lines] ; example : ['1 2']

        > * if type == ResultSectionType.TYPE_2_POINTS_AND_VECTOR:  
        parameters = [coordinate_system, first_point_coordinates, second_point_coordinates, projection, vector]; exapmle : [1, [1,0,0], [0,2,0], ResultSectionProjection.PROJECTION_IN_VECTOR, [1,1,1]]


    * **assigned_to_surfaces** (*str*, *optional*) – Assigned to Surfaces


    * **assigned_to_solids** (*str*, *optional*) – Assigned to Solids


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### ResultSection.Line(no, type, show_section_in_direction, show_values_on_isolines, lines, assigned_to_surfaces, assigned_to_solids, comment, params, model)

Result Section defined by line


* **Parameters**

    
    * **no** (*int*) – Result Section Tag


    * **type** (*enum*) –Result Section Type Enumeration (Defaults to ResultSectionType.TYPE_2_POINTS_AND_VECTOR)


    * **show_section_in_direction** (*enum*) – Result Section Result Direction Enumeration


    * **show_values_on_isolines** (*bool*) – Enable/Disable Show Values on Isolines Option


    * **lines** (*int*) – Lines


    * **assigned_to_surfaces** (*str*, *optional*) – Assigned to Surfaces


    * **assigned_to_solids** (*str*, *optional*) – Assigned to Solids


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### ResultSection.TwoPointsAndVector(no, coordinate_system, show_section_in_direction, show_values_on_isolines, first_point_coordinates, second_point_coordinates, projection, vector=None, assigned_to_surfaces, assigned_to_solids, comment, params, model)

Result Section defined by 2 points and vector


* **Parameters**

    
    * **no** (*int*) – Result Section Tag


    * **coordinate_system** (*int*) – Coordinate System Number


    * **show_section_in_direction** (*enum*) – Result Section Result Direction Enumeration


    * **show_values_on_isolines** (*bool*) – Enable/Disable Show values on Isolines Option


    * **first_point_coordinates** (*list*) – First Point Coordinates


    * **second_point_coordinates** (*list*) – Second Point Coordinates


    * **projection** (*enum*) – Result Section Projection Enumeration


    * **vector** (*list*, *optional*) – Vector if projection is VECTOR


    * **assigned_to_surfaces** (*str*, *optional*) – Assigned to Surfaces


    * **assigned_to_solids** (*str*, *optional*) – Assigned to Solids


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## RigidLink


### RigidLink(no, line_1, line_2, ignore_relative_position, comment, params, model)

Rigid Link

* **Parameters**

    
    * **no** (*int*) – Rigid Link Tag


    * **line_1** (*int*) – Assigned Line Number


    * **line_2** (*int*) – Assigned Line Number


    * **ignore_relative_position** (*bool*) – Enable/Disable Ignore Relative Position


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### RigidLink.Diapragm(no, nodes, lines, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Rigid Link Tag


    * **nodes** (*str*) – Assigned Nodes Number


    * **lines** (*str*) – Assigned Lines Number


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### RigidLink.LineToLine(no, line_1, line_2, ignore_relative_position, comment, params, model)

Rigid Link Line to Line


* **Parameters**

    
    * **no** (*int*) – Rigid Link Tag


    * **line_1** (*int*) – Assigned Line Number


    * **line_2** (*int*) – Assigned Line Number


    * **ignore_relative_position** (*bool*) – Enable/Disable Ignore Relative Position


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### RigidLink.LineToSurface(no, line_1, surface, ignore_relative_position, comment, params, model)

Rigid Link Line to Surface

* **Parameters**

    
    * **no** (*int*) – Rigid Link Tag


    * **line_1** (*int*) – Assigned Line Number


    * **surface** (*int*) – Assigned Surface Number


    * **ignore_relative_position** (*bool*) – Enable/Disable Ignore Relative Position


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## StructureModification


### StructureModification(no, modify_stiffnesses, modify_stiffnesses_materials_list, modify_stiffnesses_sections_list, modify_stiffnesses_members_list, modify_stiffnesses_surfaces_list, modify_stiffnesses_member_hinges_list, modify_stiffnesses_line_hinges_list, modify_stiffnesses_nodal_supports_list, modify_stiffnesses_line_supports_list, modify_stiffnesses_member_supports_list, modify_stiffnesses_surface_supports_list, comment, params, model)

Structural Modification     
Modify only objects allready existing and used/assigned in the model.   
TODO: US-9960 Deactivate objects requires Object Selection object.

* **Parameters**

    
    * **no** (*int*, *optional*) – Structure Modification Tag


    * **modify_stiffnesses** (*dict*, *optional*) – Modify Stiffnesses


    * **modify_stiffnesses_materials_list** (*list*, *optional*) – Modify Stiffnesses Materials List


    * **modify_stiffnesses_sections_list** (*list*, *optional*) – Modify Stiffnesses Sections List


    * **modify_stiffnesses_members_list** (*list*, *optional*) – Modify Stiffnesses Members List


    * **modify_stiffnesses_surfaces_list** (*list*, *optional*) – Modify Stiffnesses Surfaces List


    * **modify_stiffnesses_member_hinges_list** (*list*, *optional*) – Modify Stiffnesses Member Hinges List


    * **modify_stiffnesses_line_hinges_list** (*list*, *optional*) – Modify Stiffnesses Line Hinges List


    * **modify_stiffnesses_nodal_supports_list** (*list*, *optional*) – Modify Stiffnesses Nodal Supports List


    * **modify_stiffnesses_line_supports_list** (*list*, *optional*) – Modify Stiffnesses Line Support List


    * **modify_stiffnesses_member_supports_list** (*list*, *optional*) – Modify Stiffnesses Member Suppoorts List


    * **modify_stiffnesses_surface_supports_list** (*list*, *optional*) – Modify Stiffnesses Surface Supports List


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


    >  material_item = {'no': 1, 'material_name': 1, 'modification_type': 'DIVISION_FACTOR', 'E_and_G': 1.5, 'comment': 'comment'} 

    > section_item = {'no': 1, 'section_name': 'IPN 300', 'A': 1.0, 'A_y':1.0, 'A_z': 1.0, 'J': 1.0, 'I_y': 1.0, 'I_z': 1.0}  

    > member_item = {'no': 2, 'member_modification': 1, 'members':'11', 'comment': ''}   

    > surface_item = {'no': 1, 'surface_modification': 1, 'surfaces':'2', 'comment': ''}  
    
    > member_hinge_item = {'no': 1, 'member_side': 'Start', 'C_u_x': 1, 'C_u_y': 0, 'C_u_z': 0, 'C_phi_x': 0, 'C_phi_y': 0, 'C_phi_z': 0}     
    
    > line_hinge_item = {'no': 1, 'C_u_x': 1, 'C_u_y': 0, 'C_u_z': 0, 'C_phi_x': 0, 'C_phi_y': 0, 'C_phi_z': 0}   
    
    > nodal_support_item = {'C_u_X': 1, 'C_u_Y': 0, 'C_u_Z': 0, 'C_phi_X': 0, 'C_phi_Y': 0, 'C_phi_Z': 0}     
    
    > line_support_item = {'C_u_X': 1, 'C_u_Y': 0, 'C_u_Z': 0, 'C_phi_X': 0, 'C_phi_Y': 0, 'C_phi_Z': 0}      
    
    > member_support_item = {'C_u_x': 1, 'C_u_y': 0, 'C_u_z': 0, 'C_s_x': 0, 'C_s_y': 0, 'C_s_z': 0, 'C_phi_x': 0}        
    
    > surface_support_item = {'C_u_X': 1, 'C_u_Y': 0, 'C_u_Z': 0, 'C_v_xz': 0, 'C_v_yz': 0}   
    
    > modify_stiffness = {'modify_stiffnesses_gamma_m': False, 'modify_stiffnesses_materials': False, 'modify_stiffnesses_sections': False, 'modify_stiffnesses_members': False, 'modify_stiffnesses_surfaces': False, 'modify_stiffnesses_member_hinges': False, 'modify_stiffnesses_line_hinges': False, 'modify_stiffnesses_nodal_supports': False, 'modify_stiffnesses_line_supports': False, 'modify_stiffnesses_member_supports': False, 'modify_stiffnesses_surface_supports': False, 'modify_stiffness_member_reinforcement': False, 'modify_stiffness_surface_reinforcement': False, 'modify_stiffness_timber_members_due_moisture_class': False, 'nonlinearities_disabled_material_nonlinearity_models': False, 'nonlinearities_disabled_material_temperature_nonlinearities': False, 'nonlinearities_disabled_line_hinges': False, 'nonlinearities_disabled_member_types': False, 'nonlinearities_disabled_member_nonlinearities': False, 'nonlinearities_disabled_solid_types_contact_or_surfaces_contact': False, 'nonlinearities_disabled_member_hinges': False, 'nonlinearities_disabled_nodal_supports': False, 'nonlinearities_disabled_line_supports': False, 'nonlinearities_disabled_member_supports': False, 'nonlinearities_disabled_surface_supports': False, 'deactivate_members_enabled': False}



## SurfaceContact


### SurfaceContact(no, surfaces_contact_type, surfaces_group_1, surfaces_group_2, comment, params, model)

Surface Contact


* **Parameters**

    
    * **no** (*int*, *optional*) – Surface Conatct Tag


    * **surfaces_contact_type** (*int*, *optional*) – Surface Contact Type Number


    * **surface_group_1** (*str*, *optional*) – Surfaces Group 1


    * **surface_group_2** (*str*, *optional*) – Surfaces Group 2


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


## SurfaceResultAdjustment


### SurfaceResultsAdjustment(no, shape, dimensions, center_position, adjustment_type_in_direction_u, adjustment_type_in_direction_v, projection, projection_vector, surfaces, comment, params, model)

Surface Results Adjustment


* **Parameters**

    
    * **no** (*int*) – Surface Results Adjustment Tag


    * **shape** (*enum*) – Surface Results Adjustment Shape Enumeration


    * **dimensions** (*list*) – Dimensions and Angular Rotation List


    * **center_position** (*list*, *optional*) – Center Position List


    * **adjustment_type_in_direction_u** (*enum*, *optional*) – Surface Results Adjustment Type Enumeration


    * **adjustment_type_in_direction_v** (*enum*, *optional*) – Surface Results Adjustment Type Enumeration


    * **projection** (*enum*, *optional*) – Surface Results Adjustment Projection Enumeration


    * **projection_vector** (*list*, *optional*) – Projection vector List in case projection == VECTOR


    * **surfaces** (*str*, *optional*) – Assigned to surfaces


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


