# Types for Lines

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForLines)*

## LineHinge


### LineHinge(no, assigned_to, translational_release, rotational_release_phi, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Hinge Tag


    * **assigned_to** (*str*) – Assigned to


    * **translational_release** (*list*) – Translation Release List


    * **rotational_release_phi** (*int*) – Rotational Release phi


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



#### slabWallConnection = {'slab_wall_connection': , 'slab_wall_with_slab_edge_block': , 'slab_wall_connection_offset': , 'slab_edge_block_width': }



## LineMeshRefinements


### LineMeshRefinements(no, lines, type, number_of_layers, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Mesh Refinements Tag


    * **lines** (*str*) – Assigned Lines


    * **type** (*enum*) – Line Mesh Refinements Enumeration


    * **number_of_layers** (*int*) – Number of Layers


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineMeshRefinements.Gradually(no, lines, gradual_rows, number_of_layers, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Mesh Refinements Tag


    * **lines** (*str*) – Assigned Lines


    * **gradual_rows** (*int*) – Gradual Rows


    * **number_of_layers** (*int*) – Number of Layers


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineMeshRefinements.NumberFiniteElements(no, lines, elements_finite_elements, number_of_layers, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Mesh Refinements Tag


    * **lines** (*str*) – Assigned Lines


    * **elements_finite_elements** (*int*) – Elements Finite Elements


    * **number_of_layers** (*int*) – Number of Layers


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineMeshRefinements.TargetFELength(no, lines, target_length, number_of_layers, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Mesh Refinements Tag


    * **lines** (*str*) – Assigned Lines


    * **target_length** (*float*) – Target Length


    * **number_of_layers** (*int*) – Number of Layers


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



#### TypeSpecificParams = {'target_length': , 'elements_finite_elements': , 'gradual_rows': }



## LineSupport


### setLineSupportConditions(clientObject, C_u_X, C_u_Y, C_u_Z, C_phi_X, C_phi_Y, C_phi_Z)

Sets Line Support Conditions

* **Parameters**

    
    * **clientObject** – Client Model Object | Line Support


    * **C_u_X,Y,Z** (*float*) – Translational Support Conditions in Respected Direction


    * **C_phi_X,Y,Z** (*float*) – Rotational Support Conditions about Respected Axis


* **Returns**

    Initialized Client Model Object | Line Support



### LineSupport(no, lines_no, support_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Support Tag


    * **lines_no** (*str*) – Assigned Lines


    * **support_type** (*enum*) – Line Support Type Enumeration


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## LineWeldedJoint


### LineWeldedJoint(no, lines, surfaces, joint_type, weld_type, weld_size_a1, longitudinal_arrangement, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Support Tag


    * **lines** (*str*) – Assigned Lines


    * **surfaces** (*str*) – Assigned Surfaces


    * **joint_type** (*enum*) – Line Welded Joint Type Enumeration


    * **weld_type** (*enum*) – Weld Type Enumeration


    * **weld_size_a1** (*float*) – Weld Size


    * **longitudinal_arrangement** (*enum*) – Weld Longitudal Arrangement Enumeration


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited

