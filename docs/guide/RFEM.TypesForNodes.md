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









