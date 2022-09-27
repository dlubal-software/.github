# Loads


## ImposedNodalDeformation


### ImposedNodalDeformation(no, load_case_no, node_no, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **node_no** (*str*) – Assigned node(s)


    * **load_parameter** (*list*) – Load Parameters List

        > load_parameter = [imposed_displacement_x, imposed_displacement_y, imposed_displacement_z, imposed_rotation_x, imposed_rotation_y imposed_rotation_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


## MemberLoad 


### MemberLoad(no, load_case_no, members_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Members


    * **load_direction** (*enum*) – Load Directin Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.AxialDisplacement(no, load_case_no, members_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.AxialStrain(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution Enumeration


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameter List

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [epsilon]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:  
        load_parameter = [epsilon1, epsilon2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TAPERED:  
        load_parameter = [epsilon1, epsilon2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TAPERED:  
        load_parameter = [epsilon1, epsilon2, epsilon3]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_VARYING:  
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – Enable/Disable List Reference Option


    * **load_over_total_length** (*bool*) – Enable/Disable Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.Displacement(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution Enumeration


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameter List

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [magnitude]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_1:   
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_a]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_N:   
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2x2:     
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_c_is_defined_as_relative = False, distance_a, distance_b, distance_c]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2:   
        load_parameter = [magnitude_1, magnitude_2, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_VARYING:     
        load_parameter = [[distance, magnitude], …]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:      
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TAPERED:  
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:    
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_VARYING:  
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – Enable/Disable List Reference Option


    * **load_over_total_length** (*bool*) – Enable/Disable Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.Force(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, force_eccentricity, list_reference, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution Enumeration


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **load_parameter** (*float/list/list of lists*) – Load Parameter List

        > * for load_distribution == LOAD_DISTRIBUTION_UNIFORM:     
        load_parameter = magnitude

        > * for load_distribution == LOAD_DISTRIBUTION_UNIFORM_TOTAL:   
        load_parameter = magnitude

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_1:  
        load_parameter = [relative_distance = False, magnitude, distance_a]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_N:  
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude, count_n, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_2x2:    
        load_parameter = [relative_distance_a = False, relative_distance_b = False, relative_distance_c = False, magnitude, distance_a, distance_b, distance_c]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_2:  
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_VARYING:    
        load_parameter = [[distance, magnitude], …]

        > * for load_distribution == LOAD_DISTRIBUTION_TRAPEZOIDAL:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_TAPERED:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_PARABOLIC:   
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == LOAD_DISTRIBUTION_VARYING:     
        load_parameter = [[distance, magnitude], …]

        > * for load_distribution == LOAD_DISTRIBUTION_VARYING_IN_Z:        
        load_parameter = [[distance, magnitude], …]


    * **force_eccentricity** (*bool*) – Enable/Disable Force Eccentricity Option


    * **list_reference** (*bool*) – Enable/Disable List Reference Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        > for force_eccentricity == True:
        params = {‘eccentricity_horizontal_alignment’: MemberLoadEccentricityHorizontalAlignment.ALIGN_NONE, ‘eccentricity_vertical_alignment’: MemberLoadEccentricityVerticalAlignment.ALIGN_NONE, ‘eccentricity_section_middle’: MemberLoadEccentricitySectionMiddle.LOAD_ECCENTRICITY_SECTION_MIDDLE_CENTER_OF_GRAVITY, ‘is_eccentricity_at_end_different_from_start’: False, ‘eccentricity_y_at_end’: 0.0, ‘eccentricity_y_at_start’: 0.0, ‘eccentricity_z_at_end’: 0.0, ‘eccentricity_z_at_start’: 0.0}


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.InitialPrestress(no, load_case_no, members_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.Mass(no, load_case_no, members_no, individual_mass_components, mass_components, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **individual_mass_components** (*bool*) – Enable/Disable Individual Mass Components Option


    * **mass_components** (*list*) – Mass Components List

        > * if individual_mass_components == False:     
        mass_components = [M]

        > * else:   
        mass_components = [Mx, My, Mz, Ix, Iy, Iz]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.Moment(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Load Distribution Enumeration


    * **load_direction** (*enum*) – Load Direction Enumeration


    * **load_parameter** (*float/list/list of lists*) – Load Parameter List

        > * for load_distribution == LOAD_DISTRIBUTION_UNIFORM:     
        load_parameter = magnitude

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_1:  
        load_parameter = [relative_distance = False, magnitude, distance_a]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_N:      
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude, count_n, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_2x2:        
        load_parameter = [relative_distance_a = False, relative_distance_b = False, relative_distance_c = False, magnitude, distance_a, distance_b, distance_c]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_2:  
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_CONCENTRATED_VARYING:    
        load_parameter = [[distance, magnitude], …]

        > * for load_distribution == LOAD_DISTRIBUTION_TRAPEZOIDAL:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_TAPERED:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_PARABOLIC:   
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == LOAD_DISTRIBUTION_VARYING:     
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – Enable/Disable List Reference Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.PipeContentFull(no, load_case_no, members_no, load_direction_orientation, specific_weight, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_direction_orientation** (*enum*) – Member Load Direction Enumeration


    * **specific_weight** (*float*) – Specific Weight


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.PipeContentPartial(no, load_case_no, members_no, load_direction_orientation, specific_weight, filling_height, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_direction_orientation** (*enum*) – Member Load Direction Enumeration


    * **specific_weight** (*float*) – Specific Weight


    * **filling_height** (*float*) – Filling Height


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.PipeInternalPressure(no, load_case_no, members_no, pressure, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **pressure** (*float*) – Pressure


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.Precamber(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution Enumeration


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameter List

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [magnitude]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:  
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TAPERED:      
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:    
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_VARYING:  
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – Enable/Disable List Reference Option


    * **load_over_total_length** (*bool*) – Enable/Disable Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.RotaryMotion(no, load_case_no, members_no, angular_acceleration, angular_velocity, axis_definition_type, axis_orientation, axis_definition, axis_definition_p1, axis_definition_p2, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **angular_acceleration** (*float*) – Angular Acceleration


    * **angular_velocity** (*float*) – Angular Velocity


    * **axis_definition_type** (*enum*) – Member Load Axis Definition Type Enumeration


    * **axis_orientation** (*enum*) – Member Load Axis Orientation Enumeration


    * **axis_definition** (*enum*) – Member Load Axis Definition Enumeration


    * **axis_definition_p1** (*list*) – P1 List [X, Y, Z]


    * **axis_definition_p2** (*list*) – P2 List [X, Y, Z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.Rotation(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution Enumeration


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameter List

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [magnitude]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_1:   
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_a]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_N:   
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2x2:     
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_c_is_defined_as_relative = False, distance_a, distance_b, distance_c]

        > * for load_distrubition == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2:       
        load_parameter = [magnitude_1, magnitude_2, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_VARYING:     
        load_parameter = [[distance, magnitude], …]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:      
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TAPERED:      
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:    
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_VARYING:  
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – Enable/Disable List Reference Option


    * **load_over_total_length** (*bool*) – Enable/Disable Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.Temperature(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution Enumeration


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameter List

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [tt, tb]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:      
            >> * for load_over_total_length == False:   
            load_parameter = [tt1, tt2, tb1, tb2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]     
            >> * for load_over_total_length == True:    
            load_parameter = [tt1, tt2, tb1, tb2]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TAPERED:  
        load_parameter = [tt1, tt2, tb1, tb2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:    
        load_parameter = [tb1, tb2, tb3, tt1, tt2, tt3]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_VARYING:  
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – List Reference Boolean


    * **load_over_total_length** (*bool*) – Enable/Disable Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberLoad.TemperatureChange(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameter List

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [tc, delta_t]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:  
            >> * for load_over_total_length == False:    
            load_parameter = [delta_t_1, delta_t_2, t_c_1, t_c_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]
            >> * for load_over_total_length == True:     
            load_parameter = [delta_t_1, delta_t_2, t_c_1, t_c_2]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_TAPERED:      
        load_parameter = [delta_t_1, delta_t_2, t_c_1, t_c_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:    
        load_parameter = [delta_t_1, delta_t_2, delta_t_3, t_c_1, t_c_2, t_c_3]

        > * for load_distribution == MemberLoadDistribution.LOAD_DISTRIBUTION_VARYING:      
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – Enable/Disable List Reference Option


    * **load_over_total_length** (*bool*) – Enable/Disable Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## Membersetload 


### MemberSetLoad(no, load_case_no, member_sets, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_direction** (*enum*) – Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.AxialDisplacement(no, load_case_no, member_sets, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Set


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.AxialStrain(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [epsilon]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:    
            >> * for load_over_total_length: bool= False:   
            load_parameter = [epsilon1, epsilon2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]     
            >> * for load_over_total_length: bool= True:    
            load_parameter = [epsilon1, epsilon2]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [epsilon1, epsilon2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [epsilon1, epsilon2, epsilon3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.Displacement(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters
        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [magnitude]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_1:     
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_a]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_N:     
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2x2:   
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_c_is_defined_as_relative = False, distance_a, distance_b, distance_c]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2:     
        load_parameter = [magnitude_1, magnitude_2, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_VARYING:   
        load_parameter = [[distance, delta_distance, magnitude], …]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:  
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.Force(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, force_eccentricity, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameter

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:   
        load_parameter = [magnitude]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM_TOTAL:     
        load_parameter = [magnitude]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_1:    
        load_parameter = [relative_distance = False, magnitude, distance_a]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_N:    
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude, count_n, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2x2:  
        load_parameter = [relative_distance_a = False, relative_distance_b = False, relative_distance_c = False, magnitude, distance_a, distance_b, distance_c]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2:    
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_VARYING:  
        load_parameter = [[distance, delta_distance, magnitude], …]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZOIDAL:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:     
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:   
        load_parameter = [[distance, delta_distance, magnitude], …]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z:  
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **force_eccentricity** (*bool*) – Force Eccentricity Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        > * for force_eccentricity == True:     
        params = {‘eccentricity_horizontal_alignment’: MemberSetLoadEccentricityHorizontalAlignment.ALIGN_NONE, ‘eccentricity_vertical_alignment’: MemberSetLoadEccentricityVerticalAlignment.ALIGN_NONE, ‘eccentricity_section_middle’: MemberSetLoadEccentricitySectionMiddle.LOAD_ECCENTRICITY_SECTION_MIDDLE_CENTER_OF_GRAVITY, ‘is_eccentricity_at_end_different_from_start’: False, ‘eccentricity_y_at_end’: 0.0, ‘eccentricity_y_at_start’: 0.0, ‘eccentricity_z_at_end’: 0.0, ‘eccentricity_z_at_start’: 0.0}


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.InitialPrestress(no, load_case_no, member_sets, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.Mass(no, load_case_no, member_sets, individual_mass_components, mass_components, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **individual_mass_components** (*bool*) – Individiual Mass Components Option


    * **mass_components** (*list*) – Mass Components


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.Moment(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:   
        load_parameter = [magnitude]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_1:    
        load_parameter = [relative_distance = False, magnitude, distance_a]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_N:    
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude, count_n, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2x2:  
        load_parameter = [relative_distance_a = False, relative_distance_b = False, relative_distance_c = False, magnitude, distance_a, distance_b, distance_c]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2:    
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_VARYING:  
        load_parameter = [[distance, delta_distance, magnitude], …]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZOIDAL:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:     
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:   
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.PipeContentFull(no, load_case_no, member_sets, load_direction_orientation, specific_weight, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_direction_orientation** (*enum*) – MemberSet Load Direction Orientation Enumeration


    * **specific_weight** (*float*) – Specific Weight


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.PipeContentPartial(no, load_case_no, member_sets, load_direction_orientation, specific_weight, filling_height, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_direction_orientation** (*enum*) – MemberSet Load Direction Orientation Enumeration


    * **specific_weight** (*float*) – Specific Weight


    * **filling_height** (*float*) – Filling Height


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.PipeInternalPressure(no, load_case_no, member_sets, pressure, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **pressure** (*float*) – Pressure


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.Precamber(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [magnitude]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:    
            >> * for load_over_total_length: bool= False:   
            load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]   
            >> * for load_over_total_length: bool= True:    
            load_parameter = [magnitude_1, magnitude_2]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:  
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Load Over Total Lenth Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.RotaryMotion(no, load_case_no, member_sets, angular_acceleration, angular_velocity, axis_definition_type, axis_orientation, axis_definition, axis_definition_p1, axis_definition_p2, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **angular_acceleration** (*float*) – Angular Acceleration


    * **angular_velocity** (*float*) – Angular Velocity


    * **axis_definition_type** (*enum*) – MemberSet Load Axis Definition Type Enumeration


    * **axis_orientation** (*enum*) – MemberSet Load Axis Orientation Enumeration


    * **axis_definition** (*enum*) – MemberSet Load Axis Definition Enumeration


    * **axis_definition_p1** (*list*) – Axis Definition First Point


    * **axis_definition_p2** (*list*) – Axis Definition Second Point


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.Rotation(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [magnitude]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_1:     
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_a]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_N:     
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2x2:   
        load_parameter = [magnitude, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_c_is_defined_as_relative = False, distance_a, distance_b, distance_c]

        > * for load_distrubition = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_2:     
        load_parameter = [magnitude_1, magnitude_2, distance_a_is_defined_as_relative = False, distance_b_is_defined_as_relative = False, distance_a, distance_b]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_CONCENTRATED_VARYING:   
        load_parameter = [[distance, delta_distance, magnitude], …]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:      
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Load Over Total Length


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.Temperature(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [tt, tb]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:    
            >> * for load_over_total_length: bool= False:    
            load_parameter = [tt1, tt2, tb1, tb2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]     
            >> * for load_over_total_length: bool= True:    
            load_parameter = [tt1, tt2, tb1, tb2]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [tt1, tt2, tb1, tb2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:  
        load_parameter = [tb1, tb2, tb3, tt1, tt2, tt3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Enable/Disable Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSetLoad.TemperatureChange(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [tc, delta_t]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:    
            >> * for load_over_total_length: bool= False:    
            load_parameter = [delta_t_1, delta_t_2, t_c_1, t_c_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]     
            >> * for load_over_total_length: bool= True:    
            load_parameter = [delta_t_1, delta_t_2, t_c_1, t_c_2]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [delta_t_1, delta_t_2, t_c_1, t_c_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:  
        load_parameter = [delta_t_1, delta_t_2, delta_t_3, t_c_1, t_c_2, t_c_3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, delta_distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## NodalLoad 


### NodalLoad(no, load_case_no, nodes_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **nodes_no** (*str*) – Assigned Nodes


    * **load_direction** (*enum*) – Load Direction Enumeration


    * **magnitude** (*float*) – Force Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### NodalLoad.Components(no, load_case_no, nodes_no, components, specific_direction, force_eccentricity, shifted_display, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **nodes_no** (*str*) – Assigned Nodes


    * **components** (*list*) – Component Magnitude List


    * **specific_direction** (*bool*) – Enable/Disable Specific Direction Option


    * **force_eccentricity** (*bool*) – Enable/Disable Force Direction Option


    * **shifted_display** (*bool*) – Enable/Disable Shifted Display Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – 

        > * For specific_direction type DIRECTION_TYPE_ROTATED_VIA_3_ANGLES;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_ROTATED_VIA_3_ANGLES, NodalLoadAxesSequence, angle_1, angle_2, angle_3, angle_x, angle_y, angle_z]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_CS_OF_LINE;  
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_CS_OF_LINE, line_no]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_CS_OF_MEMBER;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_CS_OF_MEMBER, member_no]}

        > * For force_eccentricity;         
        params={‘force_eccentricity’ : [ex, ey, ez]}

        > * For shifted_display;    
        params={‘shifted_display’ : [offset_x, offset_y, offset_y, distance]}


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### NodalLoad.Force(no, load_case_no, nodes_no, load_direction, magnitude, force_eccentricity, specific_direction, shifted_display, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **nodes_no** (*str*) – Assigned Nodes


    * **load_direction** (*enum*) – Load Direction Enumeration


    * **magnitude** (*float*) – Force Magnitude


    * **force_eccentricity** (*bool*) – Enable/Disable Force Eccentricity Option


    * **specific_direction** (*bool*) – Enable/Disable Specific Direction Option


    * **shifted_display** (*bool*) – Enable/Disable Shifted Display Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – 

        > * For specific_direction type DIRECTION_TYPE_ROTATED_VIA_3_ANGLES;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_ROTATED_VIA_3_ANGLES, NodalLoadAxesSequence, angle_1, angle_2, angle_3, angle_x, angle_y, angle_z]}

        > * For specific_direction type DIRECTION_TYPE_DIRECTED_TO_NODE;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_DIRECTED_TO_NODE, nodes_no]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_TWO_NODES;   
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_TWO_NODES, nodes_no]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_CS_OF_LINE;  
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_CS_OF_LINE, line_no]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_CS_OF_MEMBER;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_CS_OF_MEMBER, member_no]}

        > * For force_eccentricity;     
        params={‘force_eccentricity’ : [ex, ey, ez]}

        > * For shifted_display;    
        params={‘shifted_display’ : [offset_x, offset_y, offset_y, distance]}


    * **model** (*RSTAB Class**, **optional*) – Model to be edited



### NodalLoad.Mass(no, load_case_no, nodes_no, individual_mass_components, mass, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Load Case Number


    * **nodes_no** (*str*) – Assigned Nodes


    * **individual_mass_components** (*bool*) – Enable/Disable Mass Component Option


    * **mass** (*list*) – Mass parameter List

        > * if individual_mass_components == False:     
        mass = [M]

        > * elif individual_mass_components == True:    
        mass = [Mx, My, Mz, Ix, Iy, Iz]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class**, **optional*) – Model to be edited



### NodalLoad.Moment(no, load_case_no, nodes_no, load_direction, moment_magnitude, specific_direction, shifted_display, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **nodes_no** (*str*) – Assigned Nodes


    * **load_direction** (*enum*) – Load Direction Enumeration


    * **moment_magnitude** (*float*) – Moment Magnitude


    * **specific_direction** (*bool*) – Enable/Disable Specific Direction Option


    * **shifted_display** (*bool*) – Enable/Disable Shifted Display Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – 

        > * For specific_direction type DIRECTION_TYPE_ROTATED_VIA_3_ANGLES;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_ROTATED_VIA_3_ANGLES, NodalLoadAxesSequence, angle_1, angle_2, angle_3, angle_x, angle_y, angle_z]}

        > * For specific_direction type DIRECTION_TYPE_DIRECTED_TO_NODE;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_DIRECTED_TO_NODE, nodes_no]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_TWO_NODES;   
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_TWO_NODES, nodes_no]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_CS_OF_LINE;  
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_CS_OF_LINE, line_no]}

        > * For specific_direction type DIRECTION_TYPE_PARALLEL_TO_CS_OF_MEMBER;    
        params={‘specific_direction’ : [NodalLoadSpecificDirectionType.DIRECTION_TYPE_PARALLEL_TO_CS_OF_MEMBER, member_no]}

        > * For shifted_display;    
        params={‘shifted_display’ : [offset_x, offset_y, offset_y, distance]}


    * **model** (*RSTAB Class*, *optional*) – Model to be edited

