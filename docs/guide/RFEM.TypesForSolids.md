# Types for Solids

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForSolids)*

## SolidContact


### SolidContact(no, perpendicular_contact, parallel_contact, contact_parameters, solids, comment, params, model)

Solid Contact


* **Parameters**

    
    * **no** (*int*) – Solid Contact Tag


    * **perpendicular_contact** (*enum*) – Solid Contact Perpendicular Type Enumeration


    * **parallel_contact** (*enum*) – Solid Contact Parallel Type Enumeration


    * **contact_parameters** (*list*) – Contact Parameters List

        > * for parallel_contact == SolidContactParallelType.RIGID_FRICTION:    
        contact_parameters = [friction_coefficient]
        
        > * for parallel_contact == SolidContactParallelType.RIGID_FRICTION_LIMIT:  
        contact_parameters = [limit_stress]

        > * for parallel_contact == SolidContactParallelType.ELASTIC_FRICTION:  
        contact_parameters = [shear_stiffness, friction_coefficient]

        > * for parallel_contact == SolidContactParallelType.ELASTIC_FRICTION_LIMIT:    
        contact_parameters = [shear_stiffness, limit_stress]

        > * for parallel_contact == SolidContactParallelType.ELASTIC_SOLID:     
        contact_parameters = [shear_stiffness]


    * **solids** (*str*) – Assigned to Solids


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited


* **Raises**

    **ValueError** : There are no parameters for given parallel contact.



## SolidGas


### SolidGas(no, pressure, temperature, solids, comment, params, model)

Gas Solids


* **Parameters**

    
    * **no** (*int*) – Solid Contact Tag


    * **pressure** (*float*) – Preassure in Pascals


    * **temperature** (*float*) – Temperature in Kelvins


    * **solids** (*str*) – Assigned to Solids


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## SolidMeshRefinement


### SolidMeshRefinement(no, target_length, solids, comment, params, model)

Solids Mesh Refinemet


* **Parameters**

    
    * **no** (*int*) – Solid Contact Tag


    * **target_length** (*float*) – Target FE Length


    * **solids** (*str*) – Assigned to Solids


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited


