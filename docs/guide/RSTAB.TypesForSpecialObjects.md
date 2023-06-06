# Types For Special Objects

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/TypesForSpecialObjects)*

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


    * **model** (*RSTAB Class, optional*) - Model to be edited


