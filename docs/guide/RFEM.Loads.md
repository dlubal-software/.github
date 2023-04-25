# Loads

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/Loads)*

## FreeLoad

### FreeLoad.CircularLoad(no, load_case_no, surfaces_no, load_distribution, load_projection, load_direction, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surfaces_no** (*str*) – Assigned Surface(s)


    * **load_distribution** (*enum*) – Free Circular Load Load Distribution Enumeration


    * **load_projection** (*enum*) – Free Load Load Projection Enumeration


    * **load_direction** (*enum*) – Free Circular Load Load Direction Enumeration


    * **load_parameter** (*list*) – Load Parameter

        > * for load_distribution == FreeCircularLoadLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [magnitude_uniform, load_location_x, load_location_y, load_location_radius]

        > * for load_distribution == FreeCircularLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR:     
        load_parameter = [magnitude_center, magnitude_radius, load_location_x, load_location_y, load_location_radius]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### FreeLoad.ConcentratedLoad(no, load_case_no, surfaces_no, load_type, load_projection, load_direction, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surfaces_no** (*str*) – Assigned Surface(s)


    * **load_type** (*enum*) – Free Concentrated Load Load Type Enumeration


    * **load_projection** (*enum*) – Free Load Load Projection Enumeration


    * **load_direction** (*enum*) – Free Concentrated Load Load Direction Enumeration


    * **load_parameter** (*list*) – Load Parameter List

        > * for load_projection == FreeLoadLoadProjection.LOAD_PROJECTION_XY_OR_UV:     
        load_parameter = [magnitude, X, Y]

        > * for load_projection == FreeLoadLoadProjection.LOAD_PROJECTION_YZ_OR_VW:     
        load_parameter = [magnitude, Y, Z]

        > * for load_projection == FreeLoadLoadProjection.LOAD_PROJECTION_XZ_OR_UW:     
        load_parameter = [magnitude, X, Z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### FreeLoad.LineLoad(no, load_case_no, surfaces_no, load_distribution, load_projection, load_direction, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surfaces_no** (*str*) – Assigned Surface(s)


    * **load_distribution** (*enum*) – Free Line Load Load Distribution Enumeration


    * **load_projection** (*enum*) – Free Load Load Projection Enumeration


    * **load_direction** (*enum*) – Free Line Load Load Direction Enumeration


    * **load_parameter** (*list*) – Load Parameter List
    
        > * for load_distribution == FreeLineLoadLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [magnitude_uniform, load_location_first_x, load_location_first_y, load_location_second_x, load_location_second_y]

        > * for load_distribution == FreeLineLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR:     
        load_parameter = [magnitude_first, magnitude_second, load_location_first_x, load_location_first_y, load_location_second_x, load_location_second_y]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### FreeLoad.PolygonLoad(no, load_case_no, surfaces_no, load_distribution, load_projection, load_direction, load_location, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surfaces_no** (*str*) – Assigned Surface(s)


    * **load_distribution** (*enum*) – Free Polygon Load Load Distribution Enumeration


    * **load_projection** (*enum*) – Free Load Load Projection Enumeration


    * **load_direction** (*enum*) – Free Polygon Load Load Direction Enumeration


    * **load_location** (*list of lists*) – Load Location Parameter


    * **load_parameter** (*list*) – Load Parameter
    
        > * for load_distribution == FreePolygonLoadLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:     
        load_location = [[first_coordinate, second_coordinate], …]  
        load_parameter = [magnitude_uniform]

        > * for load_distribution == FreePolygonLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR:      
        load_location = [[first_coordinate, second_coordinate], …]  
        load_parameter = [magnitude_linear_1, magnitude_linear_2, magnitude_linear_3, magnitude_linear_location_1, magnitude_linear_location_2, magnitude_linear_location_3]

        > * for load_distribution == FreePolygonLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_FIRST:    
        load_location = [[first_coordinate, second_coordinate], …]  
        load_parameter = [magnitude_linear_1, magnitude_linear_2, magnitude_linear_location_1, magnitude_linear_location_2]

        > * for load_distribution == FreePolygonLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_SECOND:   
        load_location = [[first_coordinate, second_coordinate], …]  
        load_parameter = [magnitude_linear_1, magnitude_linear_2, magnitude_linear_location_1, magnitude_linear_location_2]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### FreeLoad.RectangularLoad(no, load_case_no, surfaces_no, load_distribution, load_projection, load_direction, load_magnitude_parameter, load_location, load_location_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surfaces_no** (*str*) – Assigned Surface(s)


    * **load_distribution** (*enum*) – Free Rectangular Load Load Distribution Enumeration


    * **load_projection** (*enum*) – Free Load Load Projection Enumeration


    * **load_direction** (*enum*) – Free Rectangular Load Load Direction Enumeration


    * **load_magnitude_parameter** (*list*) – Load Magnitude Parameter
    
        > * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:     
        load_magnitude_parameter = [magnitude_uniform]

        > * for load_distribution == FreeLineLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_FIRST or FreeLineLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_SECOND:   
        load_magnitude_parameter = [magnitude_linear_first, magnitude_linear_second]


    * **load_location** (*enum*) – Free Rectangular Load Load Rectangle Enumeration


    * **load_location_parameter** (*list*) – Load Location Parameters

        > * for load_location == FreeRectangularLoadLoadLocationRectangle.LOAD_LOCATION_RECTANGLE_CORNER_POINTS:   
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_UNIFORM or FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_FIRST or FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_SECOND:    
            load_location_parameter = [load_location_first_x, load_location_first_y, load_location_second_x, load_location_second_y, axis_start_angle]
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z:    
            load_location_parameter = [load_location_first_x, load_location_first_y, load_location_second_x, load_location_second_y, [[distance, factor], …]
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_VARYING_ALONG_PERIMETER:    
            load_location_parameter = [load_location_first_x, load_location_first_y, load_location_second_x, load_location_second_y, [axis_definition_p1_x, axis_definition_p1_y, axis_definition_p1_z], [axis_definition_p2_x, axis_definition_p2_y, axis_definition_p2_z], axis_start_angle,[[alpha, factor], …]
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z_AND_ALONG_PERIMETER:    
            load_location_parameter = [load_location_first_x, load_location_first_y, load_location_second_x, load_location_second_y, [[distance, factor], …], [axis_definition_p1_x, axis_definition_p1_y, axis_definition_p1_z], [axis_definition_p2_x, axis_definition_p2_y, axis_definition_p2_z], axis_start_angle,[[alpha, factor], …]

        > * for load_location == FreeRectangularLoadLoadLocationRectangle.LOAD_LOCATION_RECTANGLE_CENTER_AND_SIDES:
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_UNIFORM or FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_FIRST or FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_LINEAR_SECOND:    
            load_location_parameter = [load_location_center_x, load_location_center_y, load_location_center_side_a, load_location_center_side_b, axis_start_angle]
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z:    
            load_location_parameter = [load_location_center_x, load_location_center_y, load_location_center_side_a, load_location_center_side_b, [[distance, factor], …]
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_VARYING_ALONG_PERIMETER:    
            load_location_parameter = [load_location_center_x, load_location_center_y, load_location_center_side_a, load_location_center_side_b, [axis_definition_p1_x, axis_definition_p1_y, axis_definition_p1_z], [axis_definition_p2_x, axis_definition_p2_y, axis_definition_p2_z], axis_start_angle,[[alpha, factor], …]
            >> * for load_distribution == FreeRectangularLoadLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z_AND_ALONG_PERIMETER:    
            load_location_parameter = [load_location_center_x, load_location_center_y, load_location_center_side_a, load_location_center_side_b, [[distance, factor], …], [axis_definition_p1_x, axis_definition_p1_y, axis_definition_p1_z], [axis_definition_p2_x, axis_definition_p2_y, axis_definition_p2_z], axis_start_angle,[[alpha, factor], …]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


## ImposedLineDeformation


### ImposedLineDeformation(no, load_case_no, line_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **line_no** (*str*) – Assigned Line(s)


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary, Here params = LineDeformationParams


    * **model** (*RFEM Class, optional*) - Model to be edited


#### LineDeformationParams

* LineDeformationParams = {'imposed_displacement_line_start_x' : , 'imposed_displacement_line_start_y' : , 'imposed_displacement_line_start_z': , 'imposed_rotation_line_start' : , 'imposed_displacement_line_end_x': , 'imposed_displacement_line_end_y': , 'imposed_displacement_line_end_z': , 'imposed_rotation_line_end': }



## ImposedNodalDeformation


### ImposedNodalDeformation(no, load_case_no, node_no, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **node_no** (*str*) – Assigned Node(s)


    * **load_parameter** (*list*) – Load Parameters List

        > load_parameter = [imposed_displacement_x, imposed_displacement_y, imposed_displacement_z, imposed_rotation_x, imposed_rotation_y imposed_rotation_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## LineLoad


### LineLoad(no, load_case_no, lines_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **lines_no** (*str*) – Assigned Line(s)


    * **load_direction** (*enum*) – Load Direction Enumeration


    * **magnitude** (*float*) – Magnitude of Line Load


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


### LineLoad.Force(no, load_case_no, lines_no, load_distribution, load_direction, load_parameter, list_reference, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **lines_no** (*str*) – Assigned Line(s)


    * **load_distribution** (*enum*) – Line Load Distribution Enumeration


    * **load_direction** (*enum*) – Line Load Direction Enumeration


    * **load_parameter** (*float/list/list of lists*) – Load Parameter
    
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
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_TAPERED:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == LOAD_DISTRIBUTION_PARABOLIC:   
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == LOAD_DISTRIBUTION_VARYING:     
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – List Reference Bool


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineLoad.Mass(no, load_case_no, lines_no, individual_mass_components, mass_components, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **lines_no** (*str*) – Assigned Line(s)


    * **individual_mass_components** (*bool*) – Individual Mass Components Boolean


    * **mass_components** (*list*) – Mass Components

        > * for individual_mass_components == False:    
        mass_components = [mass_global]

        > * for individual_mass_components == True:     
        mass_components = [mass_x, mass_y, mass_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineLoad.Moment(no, load_case_no, lines_no, load_distribution, load_direction, load_parameter, list_reference, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **lines_no** (*str*) – Assigned Line(s)


    * **load_distribution** (*enum*) – Line Load Distribution Enumeration


    * **load_direction** (*enum*) – Line Load Direction Enumeration


    * **load_parameter** (*float/list/list of lists*) – Load Parameter
    
        > * for load_parameter == LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = magnitude

        > * for load_parameter == LOAD_DISTRIBUTION_CONCENTRATED_1:     
        load_parameter = [relative_distance = False, magnitude, distance_a]

        > * for load_parameter == LOAD_DISTRIBUTION_CONCENTRATED_N:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude, count_n, distance_a, distance_b]

        > * for load_parameter == LOAD_DISTRIBUTION_CONCENTRATED_2x2:       
        load_parameter = [relative_distance_a = False, relative_distance_b = False, relative_distance_c = False, magnitude, distance_a, distance_b, distance_c]

        > * for load_parameter == LOAD_DISTRIBUTION_CONCENTRATED_2:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_parameter == LOAD_DISTRIBUTION_CONCENTRATED_VARYING:   
        load_parameter = [[distance, magnitude], …]

        > * for load_parameter == LOAD_DISTRIBUTION_TRAPEZOIDAL:    
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_parameter == LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_parameter == LOAD_DISTRIBUTION_PARABOLIC:  
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_parameter == LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, magnitude], …]


    * **list_reference** (*bool*) – List Reference Bool


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## LinesetLoad


### LineSetLoad(no, load_case_no, linesets_no, load_direction, magnitude, comment, params, model)

Assigns lineset load without any further options.
Load type is Force by default.
Load distribution is Uniform by default.

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **linesets_no** (*str*) – Assigned Lineset(s)


    * **load_direction** (*enum*) – LineSet Load Direction Enumeration


    * **magnitude** (*float*) – Magnitude of Line Load


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineSetLoad.Force(no, load_case_no, linesets_no, load_distribution, load_direction, load_parameter, list_reference, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **linesets_no** (*str*) – Assigned Lineset(s)


    * **load_distribution** (*enum*) – LineSet Load Distribution Enumeration


    * **load_direction** (*enum*) – LineSet Load Direction Enumeration


    * **load_parameter** (*float/list/list of lists*) – Load Parameter

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
        load_parameter = [[distance, magnitude], ...]
        > * for load_distribution == LOAD_DISTRIBUTION_TRAPEZOIDAL:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]
        > * for load_distribution == LOAD_DISTRIBUTION_TAPERED:     
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]
        > * for load_distribution == LOAD_DISTRIBUTION_PARABOLIC:   
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]
        > * for load_distribution == LOAD_DISTRIBUTION_VARYING:     
        load_parameter = [[distance, magnitude], ...]
        
        
    * **list_reference** (*bool*) – List Reference Bool


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineSetLoad.Mass(no, load_case_no, linesets_no, individual_mass_components, mass_components, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **linesets_no** (*str*) – Assigned Lineset(s)


    * **individual_mass_components** (*bool*) – Individual Mass Components


    * **mass_components** (*list*) – Magnitude of Line Load

        > * if individual_mass_components == False:     
        mass_components = [mass_global]
        > * if individual_mass_components == True:  
        mass_components = [mass_x, mass_y, mass_z]

    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineSetLoad.Moment(no, load_case_no, linesets_no, load_distribution, load_direction, load_parameter, list_reference, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **linesets_no** (*str*) – Assigned Lineset(s)


    * **load_distribution** (*enum*) – LineSet Load Distribution Enumeration


    * **load_direction** (*enum*) – LineSet Load Direction Enumeration


    * **load_parameter** (*float/list/list of lists*) – Load Parameter

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
        load_parameter = [[distance, magnitude], ...]
        > * for load_distribution == LOAD_DISTRIBUTION_TRAPEZOIDAL:
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]
        > * for load_distribution == LOAD_DISTRIBUTION_TAPERED:
        load_parameter = [relative_distance_a = False, relative_distance_b = False, magnitude_1, magnitude_2, distance_a, distance_b]
        > * for load_distribution == LOAD_DISTRIBUTION_PARABOLIC:
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]
        > * for load_distribution == LOAD_DISTRIBUTION_VARYING:
        load_parameter = [[distance, magnitude], ...]
        
        
    * **list_reference** (*bool*) – List Reference Bool


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberLoad.AxialDisplacement(no, load_case_no, members_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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
    
        > * for force_eccentricity == True:     
        params = {‘eccentricity_horizontal_alignment’: MemberLoadEccentricityHorizontalAlignment.ALIGN_NONE, ‘eccentricity_vertical_alignment’: MemberLoadEccentricityVerticalAlignment.ALIGN_NONE, ‘eccentricity_section_middle’: MemberLoadEccentricitySectionMiddle.LOAD_ECCENTRICITY_SECTION_MIDDLE_CENTER_OF_GRAVITY, ‘is_eccentricity_at_end_different_from_start’: False, ‘eccentricity_y_at_end’: 0.0, ‘eccentricity_y_at_start’: 0.0, ‘eccentricity_z_at_end’: 0.0, ‘eccentricity_z_at_start’: 0.0}


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberLoad.InitialPrestress(no, load_case_no, members_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_direction** (*enum*) – Member Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberLoad.Moment(no, load_case_no, members_no, load_distribution, load_direction, load_parameter, list_reference, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_distribution** (*enum*) – Member Load Distribution Enumeration


    * **load_direction** (*enum*) – Member Load Direction Enumeration


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


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberLoad.PipeContentFull(no, load_case_no, members_no, load_direction_orientation, specific_weight, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **load_direction_orientation** (*enum*) – Member Load Direction Enumeration


    * **specific_weight** (*float*) – Specific Weight


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberLoad.PipeInternalPressure(no, load_case_no, members_no, pressure, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **members_no** (*str*) – Assigned Member(s)


    * **pressure** (*float*) – Pressure


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited


### MemberSetLoad.AxialDisplacement(no, load_case_no, member_sets, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Set


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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
        load_parameter = [epsilon1, epsilon2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [epsilon1, epsilon2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [epsilon1, epsilon2, epsilon3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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
        load_parameter = [[distance, magnitude], …]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:      
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, magnitude], …]


    * **load_over_total_length** (*bool*) – Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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
        load_parameter = [[distance, magnitude], ...]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZOIDAL:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:     
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:   
        load_parameter = [[distance, magnitude], ...]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z:      
        load_parameter = [[distance, magnitude], ...]


    * **force_eccentricity** (*bool*) – Force Eccentricity Option


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        > * for force_eccentricity == True:     
        params = {‘eccentricity_horizontal_alignment’: MemberSetLoadEccentricityHorizontalAlignment.ALIGN_NONE, ‘eccentricity_vertical_alignment’: MemberSetLoadEccentricityVerticalAlignment.ALIGN_NONE, ‘eccentricity_section_middle’: MemberSetLoadEccentricitySectionMiddle.LOAD_ECCENTRICITY_SECTION_MIDDLE_CENTER_OF_GRAVITY, ‘is_eccentricity_at_end_different_from_start’: False, ‘eccentricity_y_at_end’: 0.0, ‘eccentricity_y_at_start’: 0.0, ‘eccentricity_z_at_end’: 0.0, ‘eccentricity_z_at_start’: 0.0}


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSetLoad.InitialPrestress(no, load_case_no, member_sets, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSetLoad.Mass(no, load_case_no, member_sets, individual_mass_components, mass_components, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **individual_mass_components** (*bool*) – Individiual Mass Components Option


    * **mass_components** (*list*) – Mass Components


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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
        load_parameter = [[distance, magnitude], ...]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZOIDAL:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:   
        load_parameter = [relative_distance_a = False, relative_distance_b = False,magnitude_1, magnitude_2, distance_a, distance_b]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:     
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution == MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:   
        load_parameter = [[distance, magnitude], ...]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSetLoad.PipeContentFull(no, load_case_no, member_sets, load_direction_orientation, specific_weight, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_direction_orientation** (*enum*) – MemberSet Load Direction Orientation Enumeration


    * **specific_weight** (*float*) – Specific Weight


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSetLoad.PipeInternalPressure(no, load_case_no, member_sets, pressure, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **pressure** (*float*) – Pressure


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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
        load_parameter = [[distance, magnitude], ...]


    * **load_over_total_length** (*bool*) – Load Over Total Lenth Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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
        load_parameter = [[distance, magnitude], ...]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TRAPEZIODAL:        
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_TAPERED:    
        load_parameter = [magnitude_1, magnitude_2, distance_a_relative = False, distance_a_relative = False, a_distance, b_distance]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_PARABOLIC:  
        load_parameter = [magnitude_1, magnitude_2, magnitude_3]

        > * for load_distribution = MemberSetLoadDistribution.LOAD_DISTRIBUTION_VARYING:    
        load_parameter = [[distance, magnitude], ...]


    * **load_over_total_length** (*bool*) – Load Over Total Length


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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
        load_parameter = [[distance, magnitude], ...]


    * **load_over_total_length** (*bool*) – Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSetLoad.TemperatureChange(no, load_case_no, member_sets, load_distribution, load_direction, load_parameter, load_over_total_length, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **member_sets** (*str*) – Assigned Member Sets


    * **load_distribution** (*enum*) – MemberSet Load Distribution Enumeration


    * **load_direction** (*enum*) – MemberSet Load Direction Enumeration

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
        load_parameter = [[distance, magnitude], ...]


    * **load_parameter** (*list/list of lists*) – Load Parameters


    * **load_over_total_length** (*bool*) – Load Over Total Length Option


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



### NodalLoad.Mass(no, load_case_no, nodes_no, individual_mass_components, mass, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Load Case Number


    * **nodes_no** (*str*) – Assigned Nodes


    * **individual_mass_components** (*bool*) – Enable/Disable Mass Component Option


    * **mass** (*list*) – 

        > * if individual_mass_components == False:     
        mass = [M]

        > * elif individual_mass_components == True:    
        mass = [Mx, My, Mz, Ix, Iy, Iz]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



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


    * **model** (*RFEM Class, optional*) - Model to be edited



## OpeningLoad


### OpeningLoad(no, load_case_no, openings, load_distribution, load_direction, load_parameter, comment, params)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **openings** (*str*) – Assigned Openings


    * **load_distribution** (*enum*) – Opening Load Distribution Enumeration


    * **load_direction** (*enum*) – Opening Load Direction Enumeration


    * **load_parameter** (*list*) – Load Parameter List

        > * for OpeningLoadDistribution.LOAD_DISTRIBUTION_UNIFORM_TRAPEZOIDAL:  
        load_parameter = [magnitude]

        > * for OpeningLoadDistribution.LOAD_DISTRIBUTION_LINEAR_TRAPEZOIDAL:   
        load_parameter = [magnitude_1, magnitude_2, magnitude_3, node_1, node_2, node_3]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

           

## SolidLoad


### SolidLoad(no, load_case_no, solids_no, load_type, load_distribution, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solids_no** (*str*) – Assigned Solids


    * **load_type** (*enum*) – Solid Load Type Enumeration


    * **load_distribution** (*enum*) – Solid Load Distribution Enumeration


    * **load_direction** (*enum*) – Solid Load Direction Enumeration


    * **magnitude** (*float*) – Uniform Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidLoad.Force(no, load_case_no, solids_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solids_no** (*str*) – Assigned Solids


    * **load_direction** (*enum*) – Solid Load Direction Enumeration


    * **magnitude** (*float*) – Uniform Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidLoad.Motion(no, load_case_no, solids_no, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solids_no** (*str*) – Assigned Solids


    * **load_parameter** (*list*) – Load Parameter List     

        > load_parameter = [angular_velocity, angular_acceleration, axis_definition_p1_x, axis_definition_p1_y, axis_definition_p1_z, axis_definition_p2_x, axis_definition_p2_y, axis_definition_p2_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidLoad.Strain(no, load_case_no, solids_no, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solids_no** (*str*) – Assigned Solids


    * **load_distribution** (*enum*) – Solid Load Distribution Enumeration


    * **load_parameter** (*list*) – Load Parameter List

        > * for load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:   
        load_parameter = [strain_uniform_magnitude_x, strain_uniform_magnitude_y, strain_uniform_magnitude_z]

        > * for load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_X:   
        load_parameter = [strain_magnitude_x1, strain_magnitude_y1, strain_magnitude_z1, strain_magnitude_x2, strain_magnitude_y2, strain_magnitude_z2, node_1, node_2]

        > * for load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Y:   
        load_parameter = [strain_magnitude_x1, strain_magnitude_y1, strain_magnitude_z1, strain_magnitude_x2, strain_magnitude_y2, strain_magnitude_z2, node_1, node_2]

        > * for load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Z:   
        load_parameter = [strain_magnitude_x1, strain_magnitude_y1, strain_magnitude_z1, strain_magnitude_x2, strain_magnitude_y2, strain_magnitude_z2, node_1, node_2]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidLoad.Temperature(no, load_case_no, solids_no, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solids_no** (*str*) – Assigned Solids


    * **load_distribution** (*enum*) – Solid Load Distribution Enumeration


    * **load_parameter** (*float/list*) – Load Parameter List

        > * for load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:   
        load_parameter = magnitude

        > * for load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_X:   
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]

        > * for load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Y:   
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]

        > * or load_distribution == SolidLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Z:    
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## SolidSetLoad


### SolidSetLoad(no, load_case_no, solid_sets_no, load_type, load_distribution, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solid_sets_no** (*str*) – Assigned Solid Sets


    * **load_type** (*enum*) – Solid Set Load Type Enumeration


    * **load_distribution** (*enum*) – Solid Set Load Distribution Enumeration


    * **load_direction** (*enum*) – Solid Set Load Direction Enumeration


    * **magnitude** (*float*) – Uniform Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidSetLoad.Force(no, load_case_no, solid_sets_no, load_direction, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solid_sets_no** (*str*) – Assigned Solid Sets


    * **load_direction** (*enum*) – Solid Set Load Direction Enumeration


    * **magnitude** (*float*) – Uniform Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidSetLoad.Motion(no, load_case_no, solid_sets_no, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solid_sets_no** (*str*) – Assigned Solid Sets


    * **load_parameter** (*list*) – Load Parameter List     
    
        > load_parameter = [angular_velocity, angular_acceleration, axis_definition_p1_x, axis_definition_p1_y, axis_definition_p1_z, axis_definition_p2_x, axis_definition_p2_y, axis_definition_p2_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidSetLoad.Strain(no, load_case_no, solid_sets_no, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solid_sets_no** (*str*) – Assigned Solid Sets


    * **load_distribution** (*enum*) – Solid Set Load Distribution Enumeration


    * **load_parameter** (*list*) – Load Parameter List

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = [strain_uniform_magnitude_x, strain_uniform_magnitude_y, strain_uniform_magnitude_z]

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_X:    
        load_parameter = [strain_magnitude_x1, strain_magnitude_y1, strain_magnitude_z1, strain_magnitude_x2, strain_magnitude_y2, strain_magnitude_z2, node_1, node_2]

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Y:    
        load_parameter = [strain_magnitude_x1, strain_magnitude_y1, strain_magnitude_z1, strain_magnitude_x2, strain_magnitude_y2, strain_magnitude_z2, node_1, node_2]

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Z:    
        load_parameter = [strain_magnitude_x1, strain_magnitude_y1, strain_magnitude_z1, strain_magnitude_x2, strain_magnitude_y2, strain_magnitude_z2, node_1, node_2]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidSetLoad.Temperature(no, load_case_no, solid_sets_no, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **solid_sets_no** (*str*) – Assigned Solid Sets


    * **load_distribution** (*enum*) – Solid Set Load Distribution Enumeration


    * **load_parameter** (*float/list*) – Load Parameter List

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:    
        load_parameter = magnitude

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_X:    
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Y:    
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]

        > * for load_distribution == SolidSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_IN_Z:    
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## SurfaceLoad


### SurfaceLoad(no, load_case_no, surface_no, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_no** (*str*) – Assigend Surfaces


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceLoad.AxialStrain(no, load_case_no, surface_no, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_no** (*str*) – Assigned Surfaces


    * **load_distribution** (*enum*) – Surface Load Distribution Enumeration


    * **load_parameter** (*list*) – Load Parameter List
    
        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:     
        load_parameter = [axial_strain_x, axial_strain_y]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR:  
        load_parameter = [magnitude_axial_strain_1x, magnitude_axial_strain_1y, magnitude_axial_strain_2x, magnitude_axial_strain_2y, magnitude_axial_strain_3x, magnitude_axial_strain_3y, node_1, node_2, node_3]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_X: /SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Y: /SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Z:  
        load_parameter = [magnitude_axial_strain_1x, magnitude_axial_strain_1y, magnitude_axial_strain_2x, magnitude_axial_strain_2y, node_1, node_2]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceLoad.Force(no, load_case_no, surface_no, load_direction, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_no** (*str*) – Assigned Surfaces


    * **load_direction** (*enum*) – Surface Load Direction Enumeration


    * **load_distribution** (*enum*) – Surface Load Distribution Enumeration


    * **load_parameter** (*list*) – Load Parameter List
    
        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:     
        load_parameter = [magnitude]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR:      
        load_parameter = [magnitude_1, magnitude_2, magnitude_3, node_1, node_2, node_3]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_X: /SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Y: /SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Z:      
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_RADIAL:      
            >> * if SurfaceLoadAxisDefinitionType == AXIS_DEFINITION_TWO_POINTS:    
            load_parameter = [magnitude_1, magnitude_2, node_1, node_2, SurfaceLoadAxisDefinitionType, axis_definition_p1, axis_definition_p2]  
            >> * if SurfaceLoadAxisDefinitionType == AXIS_DEFINITION_POINT_AND_AXIS:    
            load_parameter = [magnitude_1, magnitude_2, node_1, node_2, SurfaceLoadAxisDefinitionType, SurfaceLoadAxisDefinitionAxis, axis_definition_p1]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z:    
        load_parameter = [[distance_1, magnitude_1], [distance_2, magnitude_2]…]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceLoad.Mass(no, load_case_no, surface_no, individual_mass_components, mass_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_no** (*str*) – Assigned Surfaces


    * **individual_mass_components** (*bool*) – Enable/Disable Individual Mass Components Option


    * **mass_parameter** (*list*) – Mass Parameter List
    
        > * if individual_mass_components == True:  
        mass_parameter = [mass_global]

        > * elif individual_mass_components == False:   
        mass_parameter = [mass_x, mass_y, mass_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceLoad.Precamber(no, load_case_no, surface_no, uniform_magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_no** (*str*) – Assigned Surfaces


    * **uniform_magnitude** (*float*) – Magnitude


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceLoad.RotaryMotion(no, load_case_no, surface_no, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_no** (*str*) – Assigned Surfaces


    * **load_parameter** (*list*) – Load Parameter List

        > * for axis_definition_type = SurfaceLoadAxisDefinitionType.AXIS_DEFINITION_TWO_POINTS:    
        load_parameter = [angular_velocity, angular_acceleration, SurfaceLoadAxisDefinitionType, [x1, y1, z1], [x2, y2, z2]]

        > * for axis_definition_type = SurfaceLoadAxisDefinitionType.AXIS_DEFINITION_POINT_AND_AXIS:    
        load_parameter = [angular_velocity, angular_acceleration, SurfaceLoadAxisDefinitionType, SurfaceLoadAxisDefinitionAxis, SurfaceLoadAxisDirectionType; [x1, y1, z1]]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceLoad.Temperature(no, load_case_no, surface_no, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_no** (*str*) – Assigned Surfaces


    * **load_distribution** (*enum*) – Surface Load Distribution Enumeration


    * **load_parameter** (*list*) – Load Parameter List
    
        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:     
        load_parameter = [t_c, delta_t]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR:  
        load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, t_c_3, delta_t_3, node_1, node_2, node_3]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_X: /SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Y: /SurfaceLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Z:  
        load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, node_1, node_2]

        > * for load_distribution == SurfaceLoadDistribution.LOAD_DISTRIBUTION_RADIAL:      
            >> * if SurfaceLoadAxisDefinitionType == AXIS_DEFINITION_TWO_POINTS:    
            load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, node_1, node_2, SurfaceLoadAxisDefinitionType, axis_definition_p1, axis_definition_p2]    
            >> * if SurfaceLoadAxisDefinitionType == AXIS_DEFINITION_POINT_AND_AXIS:    
            load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, node_1, node_2, SurfaceLoadAxisDefinitionType, SurfaceLoadAxisDefinitionAxis, axis_definition_p1]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## Surfacesetload


### SurfaceSetLoad(no, load_case_no, surface_sets, magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_sets** (*str*) – Assigned Surface Sets


    * **magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSetLoad.AxialStrain(no, load_case_no, surface_sets, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_sets** (*str*) – Assigned Surface Sets


    * **load_distribution** (*enum*) – Surface Set Load Distribution Enumeration


    * **load_parameter** (*list*) – Load Parameter

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [axial_strain_x, axial_strain_y]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR:   
        load_parameter = [magnitude_axial_strain_1x, magnitude_axial_strain_1y, magnitude_axial_strain_2x, magnitude_axial_strain_2y, magnitude_axial_strain_3x, magnitude_axial_strain_3y, node_1, node_2, node_3]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_X: /SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Y: /SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Z:     
        load_parameter = [magnitude_axial_strain_1x, magnitude_axial_strain_1y, magnitude_axial_strain_2x, magnitude_axial_strain_2y, node_1, node_2]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSetLoad.Force(no, load_case_no, surface_sets, load_direction, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_sets** (*str*) – Assigned Surface Sets


    * **load_direction** (*enum*) – Surface Set Load Direction Enumeration


    * **load_distribution** (*enum*) – Surface Set Load Distribution Enumeration


    * **load_parameter** (*list/list of lists*) – Load Parameters List

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [magnitude]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR:   
        load_parameter = [magnitude_1, magnitude_2, magnitude_3, node_1, node_2, node_3]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_X: /SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Y: /SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Z:     
        load_parameter = [magnitude_1, magnitude_2, node_1, node_2]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_RADIAL:   
            >> * if SurfaceSetLoadAxisDefinitionType == AXIS_DEFINITION_TWO_POINTS:     
            load_parameter = [magnitude_1, magnitude_2, node_1, node_2, SurfaceLoadAxisDefinitionType, axis_definition_p1, axis_definition_p2]  
            >> * if SurfaceSetLoadAxisDefinitionType == AXIS_DEFINITION_POINT_AND_AXIS:     
            load_parameter = [magnitude_1, magnitude_2, node_1, node_2, SurfaceLoadAxisDefinitionType, SurfaceLoadAxisDefinitionAxis, axis_definition_p1]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_VARYING_IN_Z:     
        load_parameter = [[distance_1, magnitude_1], [distance_2, magnitude_2]…]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSetLoad.Mass(no, load_case_no, surface_sets, individual_mass_components, mass_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_sets** (*str*) – Assigned Surface Sets


    * **individual_mass_components** (*bool*) – Individiual Mass Components Option


    * **mass_parameter** (*list*) – Mass Parameters List

        > * for individual_mass_components == True:     
        mass_parameter = [mass_global]

        > * for individual_mass_components == False:    
        mass_parameter = [mass_x, mass_y, mass_z]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSetLoad.Precamber(no, load_case_no, surface_sets, uniform_magnitude, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_sets** (*str*) – Assigned Surface Sets


    * **uniform_magnitude** (*float*) – Load Magnitude


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSetLoad.RotaryMotion(no, load_case_no, surface_sets, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_sets** (*str*) – Assigned Surface Sets


    * **load_parameter** (*list*) – Load Parameters

        > * for axis_definition_type = SurfaceSetLoadAxisDefinitionType.AXIS_DEFINITION_TWO_POINTS:     
        load_parameter = [angular_velocity, angular_acceleration, SurfaceLoadAxisDefinitionType, [x1, y1, z1], [x2, y2, z2]]

        > * for axis_definition_type = SurfaceSetLoadAxisDefinitionType.AXIS_DEFINITION_POINT_AND_AXIS:     
        load_parameter = [angular_velocity, angular_acceleration, SurfaceLoadAxisDefinitionType, SurfaceLoadAxisDefinitionAxis, SurfaceLoadAxisDirectionType; [x1, y1, z1]]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSetLoad.Temperature(no, load_case_no, surface_sets, load_distribution, load_parameter, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Tag


    * **load_case_no** (*int*) – Assigned Load Case


    * **surface_sets** (*str*) – Assigned Surface Sets


    * **load_distribution** (*enum*) – Surface Set Load Distribution Enumeration


    * **load_parameter** (*list*) – Load Parameter List

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_UNIFORM:  
        load_parameter = [t_c, delta_t]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR:   
        load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, t_c_3, delta_t_3, node_1, node_2, node_3]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_X: /SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Y: /SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_LINEAR_Z:     
        load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, node_1, node_2]

        > * for load_distribution == SurfaceSetLoadDistribution.LOAD_DISTRIBUTION_RADIAL:   
            >> * if SurfaceSetLoadAxisDefinitionType == AXIS_DEFINITION_TWO_POINTS:     
            load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, node_1, node_2, SurfaceLoadAxisDefinitionType, axis_definition_p1, axis_definition_p2]    
            >> * if SurfaceSetLoadAxisDefinitionType == AXIS_DEFINITION_POINT_AND_AXIS:     
            load_parameter = [t_c_1, delta_t_1, t_c_2, delta_t_2, node_1, node_2, SurfaceLoadAxisDefinitionType, SurfaceLoadAxisDefinitionAxis, axis_definition_p1]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited




