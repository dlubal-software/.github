# Types for Special Objects

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForSpecialObjects)*

## LineReleaseType


### LineReleaseType(no, spring_constant, translational_release_ux_nonlinearity, translational_release_uy_nonlinearity, translational_release_uz_nonlinearity, rotational_release_phi_x_nonlinearity, local_axis_system, system_para, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Release Type Tag


    * **spring_constant** (*list*) – Spring Constant List

        > spring_constant = [translational_release_u_x, translational_release_u_y, translational_release_u_z, rotational_release_phi_x]


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
            >> * for negative/positive zone[0] == PartialActivityAroundType.PARTIAL_ACTIVITY_TYPE_COMPLETE:     
            negative/positive zone = [negative/positive zone type, slippage]   
            >> * for negative/positive zone[0] == PartialActivityAroundType.PARTIAL_ACTIVITY_TYPE_FIXED:    
            negative/positive zone = [negative/positive zone type, slippage, rotation]      
            >> * for negative/positive zone[0] == PartialActivityAroundType.PARTIAL_ACTIVITY_TYPE_FAILURE_FROM_MOMENT/PARTIAL_ACTIVITY_TYPE_YIELDING_FROM_MOMENT:   
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


    * **name** (*str, optional*) – User Defined Line Release Type Name


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## NodalReleaseType


### NodalReleaseType(no, coordinate_system, translational_release_n, translational_release_vy, translational_release_vz, rotational_release_mt, rotational_release_my, rotational_release_mz, translational_release_n_nonlinearity, translational_release_vy_nonlinearity, translational_release_vz_nonlinearity, rotational_release_mt_nonlinearity,  rotational_release_my_nonlinearity, rotational_release_mz_nonlinearity, local_axis_system, local_axis_system_reference_object, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Nodal Release Type Tag


    * **coordinate_system** (*str/int*) – Coordinate System Selection


    * **translational_release_n** (*float*) – Spring Constant for Translation Release along X Direction


    * **translational_release_vy** (*float*) – Spring Constant for Translation Release along Y Direction


    * **translational_release_vz** (*float*) – Spring Constant for Translation Release along Z Direction


    * **rotational_release_mt** (*float*) – Spring Constant for Rotational Release around X Direction


    * **rotational_release_my** (*float*) – Spring Constant for Rotational Release around Y Direction


    * **rotational_release_mz** (*float*) – Spring Constant for Rotational Release around Z Direction


    * **translational_release_n_nonlinearity** (*list/list of lists*) – Nonlinearity Parameter for Translation Release along X Direction


    * **translational_release_vy_nonlinearity** (*list/list of lists*) – Nonlinearity Parameter for Translation Release along Y Direction


    * **translational_release_vz_nonlinearity** (*list/list of lists*) – Nonlinearity Parameter for Translation Release along Z Direction

        > * for translational_release_n/vy/vz_nonlinearity[0] == NodalReleaseTypeReleaseNonlinearity.NONLINEARITY_TYPE_PARTIAL_ACTIVITY:    
        translational_release_n/vy/vz_nonlinearity = [nonlinearity type Partial_Activity, negative zone, positive zone]   
            >> * for negative/positive zone[0] == NodalReleaseTypePartialActivityAlong.PARTIAL_ACTIVITY_TYPE_COMPLETE:  
            negative/positive zone = [negative/positive zone type, slippage]    
            >> * for negative/positive zone[0] == NodalReleaseTypePartialActivityAlong.PARTIAL_ACTIVITY_TYPE_FIXED:   
            negative/positive zone = [negative/positive zone type, displacement, slippage]  (Note: Displacement must be greater than slippage)  
            >> * for negative/positive zone[0] == NodalReleaseTypePartialActivityAlong.PARTIAL_ACTIVITY_TYPE_FAILURE_FROM_FORCE/PARTIAL_ACTIVITY_TYPE_YIELDING_FROM_FORCE:  
            negative/positive zone = [negative/positive zone type, force, slippage]     

        > * for translational_release_n/vy/vz_nonlinearity[0] == NodalReleaseTypeReleaseNonlinearity.NONLINEARITY_TYPE_DIAGRAM:     
        translational_release_n/vy/vz_nonlinearity = [nonlinearity type Diagram, [symmetric(bool), NodalReleaseTypeDiagram Enumeration(start), NodalReleaseTypeDiagram Enumeration(end)], [[displacement, force],...]]

        > * for translational_release_n/vy/vz_nonlinearity[0] == NodalReleaseTypeReleaseNonlinearity.NONLINEARITY_TYPE_FRICTION_DIRECTION_1/NONLINEARITY_TYPE_FRICTION_DIRECTION_2/NONLINEARITY_TYPE_FRICTION_DIRECTION_1_2:     
        translational_release_n/vy/vz_nonlinearity = [nonlinearity type Diagram, [friction coefficient(float)]]

        > * for translational_release_n/vy/vz_nonlinearity[0] == NodalReleaseTypeReleaseNonlinearity.NONLINEARITY_TYPE_FRICTION_DIRECTION_1_PLUS_2:     
        translational_release_n/vy/vz_nonlinearity = [nonlinearity type Diagram, [friction coefficient 1(float), friction coefficient 2(float)]]


    * **rotational_release_mt_nonlinearity** (*list/list of lists*) – Nonlinearity Parameter for Rotational Release around X Direction


    * **rotational_release_my_nonlinearity** (*list/list of lists*) – Nonlinearity Parameter for Rotational Release around Y Direction


    * **rotational_release_mz_nonlinearity** (*list/list of lists*) – Nonlinearity Parameter for Rotational Release around Z Direction


        > * for rotational_release_mt/my/mz_nonlinearity[0] == NodalReleaseTypeReleaseNonlinearity.NONLINEARITY_TYPE_PARTIAL_ACTIVITY:   
        rotational_release_mt/my/mz_nonlinearity = [nonlinearity type Partial_Activity, negative zone, positive zone]      
            >> * for negative/positive zone[0] == NodalReleaseTypePartialActivityAround.PARTIAL_ACTIVITY_TYPE_COMPLETE:     
            negative/positive zone = [negative/positive zone type, slippage]   
            >> * for negative/positive zone[0] == NodalReleaseTypePartialActivityAround.PARTIAL_ACTIVITY_TYPE_FIXED:    
            negative/positive zone = [negative/positive zone type, rotation, slippage]      
            >> * for negative/positive zone[0] == NodalReleaseTypePartialActivityAround.PARTIAL_ACTIVITY_TYPE_FAILURE_FROM_MOMENT/PARTIAL_ACTIVITY_TYPE_YIELDING_FROM_MOMENT:   
            negative/positive zone = [negative/positive zone type, moment, slippage]    

        > * for rotational_release_mt/my/mz_nonlinearity[0] == NodalReleaseTypeReleaseNonlinearity.NONLINEARITY_TYPE_DIAGRAM:    
        rotational_release_mt/my/mz_nonlinearity = [nonlinearity type Diagram, [symmetric(bool), NodalReleaseTypeDiagram Enumeration(start), NodalReleaseTypeDiagram Enumeration(end)], [[rotation, moment],...]]


    * **local_axis_system** (*enum*) – Nodal Release Local Axis System Enumeration


    * **local_axis_system_reference_object** (*int*) – Nodal Release Local Axis System Reference Object Number


    * **name** (*str, optional*) – User Defined Nodal Release Type Name


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


