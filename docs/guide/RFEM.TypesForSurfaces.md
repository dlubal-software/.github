# Types for Surfaces

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForSurfaces)*

## SurfaceEccentricity


### SurfaceEccentricity(no, offset, assigned_to_surfaces, thickness_alignment, transverse_offset_object, transverse_offset_object_no, transverse_offset_alignment, comment, params, model)

Surfase Eccentricity


* **Parameters**

    
    * **no** (*int*) – Surface Eccentricity Tag


    * **offset** (*float*) – Offset value


    * **assigned_to_surfaces** (*str*) – Eccentricity Assignmet to Surfaces


    * **thickness_alignment** (*enum*) – Surface Eccentricity Alignment Enumeration


    * **transverse_offset_object** (*enum*) – Transverse Offset Object Enumeration (member, surface or None)


    * **transverse_offset_object_no** (*int*) – Transverse offset reference number


    * **transverse_offset_alignment** (*enum*) – Surface Eccentricity Alignment Enumeration


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## SurfaceMeshRefinements


### SurfaceMeshRefinement(no, surfaces, target_length, comment, params, model)

Surface Mesh Refinement


* **Parameters**

    
    * **no** (*int*) – Surface Mesh Refinement Tag


    * **surfaces** (*str*) – Assigned to Surfaces


    * **target_length** (*float*) – Target FE Length


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited


## SurfaceStiffnessModification


### SurfaceStiffnessModification(no, type, factors, comment, params, model)

Surface Stiffeness Modification


* **Parameters**

    
    * **no** (*int*) – Surface Stiffness Modification Tag


    * **type** (*enum*) – Surface Stiffness Modification Type Enumeration


    * **factors** (*list*) – Stiffeness Modification Factors

        > * for type == SurfaceStiffnessModificationType.TYPE_TOTAL_STIFFNESS_FACTOR:   
        factors = [factor_of_total_stiffness]
                
        > * for type == SurfaceStiffnessModificationType.TYPE_PARTIAL_STIFFNESSES_FACTORS:  
        factors = [factor_of_bending_stiffness, factor_of_shear_stiffness, factor_of_membrane_stiffness, factor_of_eccentric_effects, and factor_of_weight]
        
        > * for type == SurfaceStiffnessModificationType.TYPE_STIFFNESS_MATRIX_ELEMENTS_FACTORS:    
        factors = list of all 21 factors from kd11 to kd38


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited


## SurfaceSupport


### SurfaceSupport(no, surfaces_no, c_ux, c_uy, c_uz, c_vxz, c_vyz, comment, params, model)

Surface Support


* **Parameters**

    
    * **no** (*int*) – Surface Support Tag


    * **surfaces_no** (*str*) – Assigned to Surfaces


    * **c_ux** (*float*) – Translational Support in X direction


    * **c_uy** (*float*) – Translational Support in Y direction


    * **c_uz** (*float*) – Translational Support in Z direction


    * **c_vxz** (*float*) – Shear Support in XZ direction


    * **c_vyz** (*float*) – Shear Support in YZ direction


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited


