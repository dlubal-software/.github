# Types for Special Objects

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForSpecialObjects)*

## SurfaceContactType


### SurfaceContactType(no, perpendicular_contact, parallel_contact, contact_parameters, comment, params, model)

Surface Contact Type


* **Parameters**

    
    * **no** (*int*) – Surface Contact Type Tag


    * **perpendicular_contact** (*enum*) – Surface Contact Perpendicular Type Enumeration


    * **parallel_contact** (*enum*) – Surface Contact Parallel Type Enumeration


    * **contact_parameters** (*list*) – Contact Parameters List

        > * for parallel_contact == SurfaceContactParallelType.RIGID_FRICTION:  
        contact_parameters = [enum rigid_friction_type, rigid_friction_coefficient or rigid_friction_limit_stress]
        
        > * for parallel_contact == SurfaceContactParallelType.ELASTIC_FRICTION:    
        contact_parameters = [elastic_friction_shear_stiffness, enum elastic_friction_type, elastic_friction_coefficient or elastic_friction_limit_stress]
        
        > * for parallel_contact == SurfaceContactParallelType.ELASTIC_SURFACE:     
        contact_parameters = [elastic_behavior_shear_stiffness]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited


* **Raises**

    **ValueError** : There are no paramters for given parallel contact.



### SurfaceContactType.ElasticFriction(no, perpendicular_contact, shear_stiffness, elastic_friction_type, elastic_friction_value, comment, params, model)

Elastic Friction Surface Contact Type


* **Parameters**

    
    * **no** (*int*) – Surface Contact Type Tag


    * **perpendicular_contact** (*enum*) – Surface Contact Perpendicular Type Enumeration


    * **shear_stiffness** (*float*) – Shear Stiffness Value


    * **elastic_friction_type** (*enum*) – Surface Contact Friction Type Enumeration


    * **elastic_friction_value** (*float*) – Value of elastic_friction_coefficient or elastic_friction_limit_stress


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



### SurfaceContactType.ElasticSurface(no, perpendicular_contact, shear_stiffness, comment, params, model)

Elastic Friction Surface Contact Type


* **Parameters**

    
    * **no** (*int*) – Surface Contact Type Tag


    * **perpendicular_contact** (*enum*) – Surface Contact Perpendicular Type Enumeration


    * **shear_stiffness** (*float*) – Shear Stiffness Value


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



### SurfaceContactType.FullForce(no, perpendicular_contact, comment, params, model)

Full Force Transmission Surface Contact Type


* **Parameters**

    
    * **no** (*int*) – Surface Contact Type Tag


    * **perpendicular_contact** (*enum*) – Surface Contact Perpendicular Type Enumeration


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



### SurfaceContactType.RigidFriction(no, perpendicular_contact, rigid_friction_type, rigid_friction_value, comment, params, model)

Rigid Friction Surface Contact Type


* **Parameters**

    
    * **no** (*int*) – Surface Contact Type Tag


    * **perpendicular_contact** (*enum*) – Surface Contact Perpendicular Type Enumeration


    * **rigid_friction_type** (*enum*) – Surface Contact Friction Type Enumeration


    * **rigid_friction_value** (*float*) – Value of rigid_friction_coefficient or rigid_friction_limit_stress


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited


