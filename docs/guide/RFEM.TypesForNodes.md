# Types for Nodes

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForNodes)*

## NodalMeshRefinement


### NodalMeshRefinement(no, assigned_nodes, type, mesh_parameters, apply_on_selected_surfaces, comment, params, model)

Nodal Mesh Refinement


* **Parameters**

    
    * **no** (*int*) – Nodal Mesh Refinement Tag


    * **assigned_nodes** (*str*) – Assigned Nodes


    * **type** (*enum*) – Nodal Mesh Refinement Type Enumeration


    * **mesh_parameters** (*list*) –Mesh Parameters List
    
        > * for type == NodalMeshRefinementType.TYPE_CIRCULAR:      
        mesh_parameters = [circular_radius, circular_target_inner_length, circular_target_outer_length, circular_length_arrangement]; example: [2.5, 0.1, 0.5, FElengthArrangement.LENGTH_ARRANGEMENT_RADIAL]
        
        > * for type == NodalMeshRefinementType.TYPE_RECTANGULAR:       
        mesh_parameters = [rectangular_side, rectangular_target_inner_length]; example: [0.5, 0.1]


    * **apply_on_selected_surfaces** (*bool*) – Enable/Disable Apply on Selected Surfaces


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



### NodalMeshRefinement.Circular(no, assigned_nodes, circular_radius, circular_target_inner_length, circular_target_outer_length, circular_length_arrangement, apply_on_selected_surfaces, comment, params, model)

Circular Nodal Mesh Refinement


* **Parameters**

    
    * **no** (*int*) – Nodal Mesh Refinement Tag


    * **assigned_nodes** (*str*) – Assigned Nodes


    * **circular_radius** (*float*) – Radius


    * **circular_target_inner_length** (*float*) – Inner Target FE Length


    * **circular_target_outer_length** (*float*) – Outer Target FE Length


    * **circular_length_arrangement** (*enum*) – FE Length Arrangenemt Enumeration


    * **apply_on_selected_surfaces** (*bool*) – Enable/Disable Apply on Selected Surfaces


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



### NodalMeshRefinement.Rectangular(no, assigned_nodes, rectangular_side, rectangular_target_inner_length, apply_on_selected_surfaces, comment, params, model)

Rectangular Nodal Mesh Refinement


* **Parameters**

    
    * **no** (*int*) – Nodal Mesh Refinement Tag


    * **assigned_nodes** (*str*) – Assigned Nodes


    * **rectangular_side** (*float*) – Side Length


    * **rectangular_target_inner_length** (*float*) – Inner Target FE Length


    * **apply_on_selected_surfaces** (*bool*) – Enable/Disable Apply on Selected Surfaces


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## NodalSupport


### setNodalSupportConditions(clientObject, C_u_X, C_u_Y, C_u_Z, C_phi_X, C_phi_Y, C_phi_Z)

Sets nodal support conditions

* **Parameters**

    
    * **clientObject** – Client model object | Nodal Support


    * **C_u_X,Y,Z** (*float*) – Translational Support Conditions in Respected Direction


    * **C_phi_X,Y,Z** (*float*) – Rotational Support Conditions about Respected Axis


* **Returns**

    Initialized Client Model Object | Nodal Support



### NodalSupport(no, nodes_no, support, comment, params, model)

Nodal Support


* **Parameters**

    
    * **no** (*int*) – Nodal Support Tag


    * **nodes_no** (*str*) – Assigned to Nodes


    * **support** (*enum or list*) – Support Definition List


    * **comment** (*str*, *optional*) – Commment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



* **Raises**

    ValueError: ‘Support parameter can be enum or list with 6 items.’



### NodalSupport.Nonlinearity(no, nodes, coordinate_system, spring_constant, spring_x_nonlinearity, spring_y_nonlinearity, spring_z_nonlinearity, rotational_x_nonlinearity, rotational_y_nonlinearity, rotational_z_nonlinearity, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Nodal Support Tag

    
    * **nodes** (*str*) – Assigned Nodes

    
    * **coordinate_system** (*int*) – Assigned Coordinate System

    
    * **spring_constant** (*list*) – Spring Constant List

        > spring_constant = [spring_x, spring_y, spring_z, rotational_restraint_x, rotational_restraint_y, rotational_restraint_z]

    
    * **spring_x_nonlinearity** (*list/list of lists*) – Nonlinearity Parameters for Nodal Support along X direction

    
    * **spring_y_nonlinearity** (*list/list of lists*) – Nonlinearity Parameters for Nodal Support along Y direction

    
    * **spring_z_nonlinearity** (*list/list of lists*) – Nonlinearity Parameters for Nodal Support along Z direction

        > * for spring_x/y/z_nonlinearity[0] == NodalSupportNonlinearity.NONLINEARITY_TYPE_PARTIAL_ACTIVITY:  
        spring_x/y/z_nonlinearity = [Nodal Support nonlinearity Partial_Activity, negative zone, positive zone]  
            >> * for negative/positive zone[0] == SupportPartialActivityAlongType.PARTIAL_ACTIVITY_TYPE_COMPLETE:  
            negative/positive zone = [negative/positive zone type, slippage]  
            >> * for negative/positive zone[0] == SupportPartialActivityAlongType.PARTIAL_ACTIVITY_TYPE_FIXED:  
            negative/positive zone = [negative/positive zone type, slippage, displacement]  (Note: Displacement must be greater than slippage)  
            >> * for negative/positive zone[0] == SupportPartialActivityAlongType.PARTIAL_ACTIVITY_TYPE_FAILURE_FROM_FORCE/PARTIAL_ACTIVITY_TYPE_YIELDING_FROM_FORCE:  
            negative/positive zone = [negative/positive zone type, slippage, force]  

        > * for spring_x/y/z_nonlinearity[0] == NodalSupportNonlinearity.NONLINEARITY_TYPE_DIAGRAM:  
        spring_x/y/z_nonlinearity = [nonlinearity_type_diagram, [symmetric(bool), diagram_type_enumeration(start), diagram_type_enumeration(end)], [[displacement, force],...]]

        > * for spring_x/y/z_nonlinearity[0] == NodalSupportNonlinearity.NONLINEARITY_TYPE_FRICTION_DIRECTION_1/NONLINEARITY_TYPE_FRICTION_DIRECTION_2/NONLINEARITY_TYPE_FRICTION_DIRECTION_1_2:  
        spring_x/y/z_nonlinearity = [nonlinearity_type_friction, friction_coefficient]

        > * for spring_x/y/z_nonlinearity[0] == NodalSupportNonlinearity.NONLINEARITY_TYPE_FRICTION_DIRECTION_1_PLUS_2:  
        spring_x/y/z_nonlinearity = [nonlinearity_type_friction, friction_coefficient_1, friction_coefficient_2]

    
    * **rotational_x_nonlinearity** (*list of lists*) – Nonlinearity Parameters for Nodal Support around X direction

    
    * **rotational_y_nonlinearity** (*list of lists*) – Nonlinearity Parameters for Nodal Support around Y direction

    
    * **rotational_z_nonlinearity** (*list of lists*) – Nonlinearity Parameters for Nodal Support around Z direction

        > * for rotational_x/y/z_nonlinearity[0] == NodalSupportNonlinearity.NONLINEARITY_TYPE_PARTIAL_ACTIVITY:  
        rotational_x/y/z_nonlinearity = [Nodal Support nonlinearity Partial_Activity, negative zone, positive zone]  
            >> * for negative/positive zone[0] == SupportPartialActivityAroundType.PARTIAL_ACTIVITY_TYPE_COMPLETE:  
            negative/positive zone = [negative/positive zone type, slippage]  
            >> * for negative/positive zone[0] == SupportPartialActivityAroundType.PARTIAL_ACTIVITY_TYPE_FIXED:  
            negative/positive zone = [negative/positive zone type, slippage, rotation]  
            >> * for negative/positive zone[0] == SupportPartialActivityAroundType.PARTIAL_ACTIVITY_TYPE_FAILURE_FROM_MOMENT/PARTIAL_ACTIVITY_TYPE_YIELDING_FROM_MOMENT:  
            negative/positive zone = [negative/positive zone type, slippage, moment]

        > * for rotational_x/y/z_nonlinearity[0] == NodalSupportNonlinearity.NONLINEARITY_TYPE_DIAGRAM:  
        rotational_x/y/z_nonlinearity = [nonlinearity_type_diagram, [symmetric(bool), diagram_type_enumeration(start), diagram_type_enumeration(end)], [[rotation, moment],...]]

        > * for rotational_x/y/z_nonlinearity[0] == NodalSupportNonlinearity.NONLINEARITY_TYPE_STIFFNESS_DIAGRAM:  
        rotational_x/y/z_nonlinearity = [nonlinearity_type_stiffness_diagram, [stiffness_diagram_around_depends_on, symmetric(bool), diagram_type_enumeration(start), diagram_type_enumeration(end)], [[force, spring],...]]    
            (note: for stiffness_diagram_around_depends_on == SupportStiffnessDiagramDependOn.STIFFNESS_DIAGRAM_DEPENDS_ON_P: symmetric must be True.)

    
    * **name** (*str, optional*) – User Defined Nodal Support Name

    
    * **comment** (*str, optional*) – Comment

    
    * **params** (*dict, optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

    
    * **model** (*RFEM Class, optional*) - Model to be edited


