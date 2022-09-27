# Imperfections

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/Imperfections)*

## imperfectionCase 

#### imperfection_case_item = {'no': ,'name': ,'factor': ,'operator_type': ,'comment': }

#### level_imperfection_item = {'no': ,'level': ,'e_1': ,'theta_1': ,'e_2': ,'theta_2': ,'comment': }



### ImperfectionCase(no, type, assigned_to_load_cases, assigned_to_load_combinations, assign_to_combinations_without_assigned_imperfection_case, active, comment, params, model)

Imperfection Case


* **Parameters**

    
    * **no** (*int*) – Imperfection Case Tag


    * **type** (*enum*) – Imperfection Type


    * **assigned_to_load_cases** (*str**, **optional*) – Assigned to Load Case


    * **assigned_to_load_combinations** (*str**, **optional*) – Assigned to Load Combinations


    * **assign_to_combinations_without_assigned_imperfection_case** (*bool*) – Assign to all Load Combinations without Assigned Imperfection Case


    * **active** (*bool*) – Active


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


### ImperfectionCase.Group(no, assigned_to_load_cases, assigned_to_load_combinations, assign_to_combinations_without_assigned_imperfection_case, imperfection_cases, active, comment, params, model)

Imperfection Case


* **Parameters**

    
    * **no** (*int*) – Imperfection Case Tag


    * **assigned_to_load_cases** (*str*, *optional*) – Assigned to Load Case


    * **assigned_to_load_combinations** (*str*, *optional*) – Assigned to Load Combinations


    * **assign_to_combinations_without_assigned_imperfection_case** (*bool*) – Assign to all Load Combinations without assigned Imperfection Case


    * **imperfection_cases** (*list*) – Imperfection Cases items


    * **active** (*bool*) – Active


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### ImperfectionCase.InitialSwayViaTable(no, assigned_to_load_cases, assigned_to_load_combinations, assign_to_combinations_without_assigned_imperfection_case, direction, direction_for_level_direction, coordinate_system, sway_coefficients_reciprocal, level_imperfections, active, comment, params, model)

Imperfection Case Initial Sway via Table


* **Parameters**

    
    * **no** (*int*) – Imperfection Case Tag


    * **assigned_to_load_cases** (*str*, *optional*) – Assigned to Load Case


    * **assigned_to_load_combinations** (*str*, *optional*) – Assigned to Load Combinations


    * **assign_to_combinations_without_assigned_imperfection_case** (*bool*) – Assign to all Load Combinations without assigned Imperfection Case


    * **direction** (*enum*) – Imperfection Case Direction Enumeration


    * **direction_for_level_direction** (*enum*) – Direction For Level Direction Enumeration


    * **coordinate_system** (*int*) – Coordinate system


    * **sway_coefficients_reciprocal** (*bool*) – Sway Coefficient as reciprocal of 1


    * **level_imperfections** (*list*) – Level Imperfections


    * **active** (*bool*) – Active


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### ImperfectionCase.Local(no, assigned_to_load_combinations, assigned_to_load_cases, comment, params, model)

Imperfection Case Local Imperfections


* **Parameters**

    
    * **no** (*int*) – Imperfection Case Tag


    * **assigned_to_load_combinations** (*str*, *optional*) – Assigned Load Combinations


    * **assigned_to_load_cases** (*str*, *optional*) – Assigned Load Cases


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### ImperfectionCase.NotionalLoads(no, assigned_to_load_cases, assigned_to_load_combinations, assign_to_combinations_without_assigned_imperfection_case, load_case_for_notional_loads, active, comment, params, model)

Imperfection Case


* **Parameters**

    
    * **no** (*int*) – Imperfection Case Tag


    * **assigned_to_load_cases** (*str*, *optional*) – Assigned to Load Case


    * **assigned_to_load_combinations** (*str*, *optional*) – Assigned to Load Combinations


    * **assign_to_combinations_without_assigned_imperfection_case** (*bool*) – Assign to all Load Combinations without assigned Imperfection Case


    * **load_case_for_notional_loads** (*int*) – Load Case for Notional Loads


    * **active** (*bool*) – Active


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### ImperfectionCase.StaticDeformation(no, assigned_to_load_cases, assigned_to_load_combinations, assign_to_combinations_without_assigned_imperfection_case, direction, coordinate_system, source, imperfection_shape_from, imperfection_magnitude, magnitude_assignment_type, reference_node, active, comment, params, model)

Static Deformation Type


* **Parameters**

    
    * **no** (*int*) – Imperfection Case Tag


    * **assigned_to_load_cases** (*str*, *optional*) – Assigned to Load Case


    * **assigned_to_load_combinations** (*str*, *optional*) – Assigned to Load Combinations


    * **assign_to_combinations_without_assigned_imperfection_case** (*bool*) – Assign to all Load Combinations without assigned Imperfection Case


    * **direction** (*enum*) – Imperfection Case Direction Enumeration


    * **coordinate_system** (*int*) – Coordinate System


    * **source** (*enum*) – Imperfection Case Source Type Enumeration


    * **imperfection_shape_from** (*int*) – Imperfection Shape From


    * **imperfection_magnitude** (*float*) – Imperfection Magnitude


    * **magnitude_assignment_type** (*enum*) – Imperfection Case Assignment Type Enumeration


    * **reference_node** (*int*) – Reference Node


    * **active** (*bool*) – Active


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## MemberImperfection 


### MemberImperfection(no, imperfection_case, members, imperfection_type, definition_type, imperfection_direction, parameters, comment, params, model)

Member Imperfection
An imperfection case must be created before.


* **Parameters**

    
    * **no** (*int*) – Member Imperfection Tag


    * **imperfection_case** (*int*) – Imperfection Case Number


    * **members** (*str*) – Assigned to Members


    * **imperfection_type** (*enum*) – Member Imperfection Type Enumeration


    * **definition_type** (*enum*) – Member Imperfection Definition Type Enumeration


    * **imperfection_direction** (*enum*) – Imperfection Direction Enumeration


    * **parameters** (*list*) – Parameters depending on Imperfection and Definition type


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


## MembersetImperfection


### MemberSetImperfection(no, imperfection_case, member_sets, imperfection_type, definition_type, imperfection_direction, parameters, comment, params, model)

Member Imperfection
An imperfection case must be created before.


* **Parameters**

    
    * **no** (*int*) – Member Set Imperfection Tag


    * **imperfection_case** (*int*) – Imperfection Case Number


    * **member_sets** (*str*) – Assigned to Member Sets


    * **imperfection_type** (*enum*) – Member Imperfection Type Enumeration


    * **definition_type** (*enum*) – Member Imperfection Definition Type Enumeration


    * **imperfection_direction** (*enum*) – Imperfection Direction Enumeration


    * **parameters** (*list*) – Parameters depending on Imperfection and Definition type


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited

