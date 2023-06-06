# Basic Objects 

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/BasicObjects)*


## Line


### Line(no, nodes_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **nodes_no** (*str*) – Nodes Defining Line


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.Arc(no, nodes_no, control_point, alpha_adjustment_target, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **nodes_no** (*list*) – Node Tags Defining Arc; [first_node, second_node]


    * **control_point** (*list*) – Control Point for Arc in [X, Y, Z]


    * **alpha_adjustment_target** (*enum*) – Line Arc Alpha Adjustment Target Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.Circle(no=, center_of_cirle, circle_radius, point_of_normal_to_circle_plane, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **center_of_circle** (*list*) – Cartesian Co-Ordinates of Circle Centre [X, Y, Z]


    * **circle_radius** (*float*) – Magnitude of Circle Radius


    * **point_of_normal_to_circle_plane** (*list*) – Vector from Circle Centre to this Point [X, Y, Z] defines Vector Normal to Circle Plane


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.DeleteLine(lines_no, model)

* **Parameters**

    * **lines_no** (*str*) – Numbers of Lines to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.Ellipse(no, nodes_no, ellipse_control_point, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **nodes_no** (*list*) – Node Tags on Line of Ellipse


    * **ellipse_control_point** (*list*) – Ellipse Control Point [X, Y, Z]


    * **comment** (*str**, **optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.EllipticalArc(no, p1_control_point, p2_control_point, p3_control_point, arc_angle_alpha, arc_angle_beta, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **p1_control_point** (*list*) – Control Point 1 [X, Y, Z]


    * **p2_control_point** (*list*) – Control Point 2 [X, Y, Z]


    * **p3_control_point** (*list*) – Control Point 3 [X, Y, Z]


    * **arc_angle_alpha** (*float*) – Alpha Arc Angle (in Radians)


    * **arc_angle_beta** (*float*) – Beta Arc Angle (in Radians)


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.NURBS(no, nodes_no, control_points, weights, order, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **nodes_no** (*str*) – Nodes creating the curve. By default these are taken as control points.


    * **control_points** (*list of lists*, *optional*) – Nested List of Respective Control Point’s Cartesian Co-Ordinates


        > control_points = [[start_point_x, start_point_y, start_point_z], [control_point_x, control_point_y, control_point_z],...., [end_point_x, end_point_y, end_point_z]]


    * **weights** (*list**, **optional*) – Control points weights e.g. [1,1,1] (Length of list must be same as length of list of control_points)


    * **order** (*int**, **optional*) – Nurbs order (for nurbs order must define control_points)


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.Parabola(no, nodes_no, parabola_control_point, parabola_alpha, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **nodes_no** (*list*) – Node Tags on Line of Parabola


    * **parabola_control_point** (*list*) – Parabola Control Point [X, Y, Z]


    * **parabola_alpha** (*float*) – Alpha Angle (in Radians)


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.Polyline(no, nodes_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **nodes_no** (*str*) – Nodes Defining Polyline


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.Spline(no, nodes_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **nodes_no** (*str*) – Node Tags on Line of Spline


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Line.GetLine(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Line Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## LineSet


### LineSet(no, lines_no, line_set_type, comment, params, model)


* **Parameters**

    
    * **no** (*int*) – Line Set Tag


    * **lines_no** (*str*) – Numbers of Lines Contained Within Line Set


    * **line_set_type** (*enum*) – Line Set Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


### LineSet.ContinuousLines(no, lines_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Set Tag


    * **lines_no** (*str*) – Numbers of Lines Contained Within Continuous Line Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineSet.GroupOfLines(no, lines_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Set Tag


    * **lines_no** (*str*) – Numbers of Lines Contained Within Group of Lines Line Set


    * **comment** (*str**, **optional*) – Comments


    * **params** (*dict**, **optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LineSet.GetLineSet(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - LineSet Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Material


### Material(no, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Material Tag


    * **name** (*str*) – Name of Desired Material (As Named in RFEM Database)


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict**, **optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


### Material.DeleteMaterial(materials_no, model)

* **Parameters**

    * **materials_no** (*str*) – Numbers of Materials to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Material.GetMaterial(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Material Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Member


### Member(no, start_node_no, end_node_no, rotation_angle, start_section_no, end_section_no, start_member_hinge_no, end_member_hinge_no, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_angle** (*float*) – Member Rotation Angle


    * **start_section_no** (*int*) – Tag of Start Section


    * **end_section_no** (*int*) – Tag of End Section


    * **start_member_hinge_no** (*int*) – Tag of Start Member Hinge


    * **end_member_hinge_no** (*int*) – Tag of End Member Hinge


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Beam(no, start_node_no, end_node_no, section_distribution_type, rotation_specification_type, rotation_parameters, start_section_no, end_section_no, distribution_parameters, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **section_distribution_type** (*enum*) – Section Distribution Type Enumeration


        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_LINEAR:    
        distribution_parameters = [section_alignment]
        
        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_TAPERED_AT_BOTH_SIDES:   
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_end_is_defined_as_relative,section_distance_from_start_relative/absolute, section_distance_from_end_relative/absolute, section_alignment, section_internal]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_TAPERED_AT_START_OF_MEMBER:  
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_TAPERED_AT_END_OF_MEMBER:    
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_SADDLE:  
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment, section_internal]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_OFFSET_AT_BOTH_SIDES:  
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_end_is_defined_as_relative,section_distance_from_start_relative/absolute, section_distance_from_end_relative/absolute, section_alignment, section_internal]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_OFFSET_AT_START_OF_MEMBER:     
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_OFFSET_AT_END_OF_MEMBER:   
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters; 1 or 2 params
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **start_section_no** (*int*) – Tag of Start Section


    * **end_section_no** (*int*) – End of End Section


    * **distribution_parameters** (*list*) – Distribution Parameters


    * **line** (*int**, **optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_hinge_start':, 'member_hinge_end': , 'member_eccentricity_start': , 'member_eccentricity_end': , 'support':, 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'member_result_intermediate_point' : , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Buckling(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **section_no** (*int*) – Section Tag


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Cable(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **section_no** (*int*) – Section Tag


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Compression(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **section_no** (*int*) – Section Tag


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.CouplingHingeHinge(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'is_deactivated_for_calculation': }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.CouplingHingeRigid(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'is_deactivated_for_calculation': }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.CouplingRigidHinge(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]



    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'is_deactivated_for_calculation': }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.CouplingRigidRigid(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'is_deactivated_for_calculation': }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.DefinableStiffness(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, definable_stiffness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **definable_stiffness** (*int*) – Definable Stiffness Tag


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_hinge_start':, 'member_hinge_end': , 'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'member_result_intermediate_point' : , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.DeleteMember(members_no, model)

* **Parameters**

    * **members_no** (*str*) – Numbers of Members to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.ResultBeam(no, start_node_no, end_node_no, section_distribution_type, rotation_specification_type, result_beam_integrate_stresses_and_forces, rotation_parameters, start_section_no, end_section_no, distribution_parameters, integration_parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int**,*) – Tag of End Node


    * **section_distribution_type** (*enum*) – Section Distribution Type Enumeration


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **result_beam_integrate_stresses_and_forces** (*enum*) – Member Result Beam Integration Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **start_section_no** (*int*) – Tag of Start Section


    * **end_section_no** (*int*) – Tag of End Section


    * **distribution_parameters** (*list*) – Distribution Parameters
    
        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_LINEAR:    
        distribution_parameters = [section_alignment]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_TAPERED_AT_BOTH_SIDES: 
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_end_is_defined_as_relative, section_distance_from_start_relative/absolute, section_distance_from_end_relative/absolute, section_alignment, section_internal]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_TAPERED_AT_START_OF_MEMBER:    
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_TAPERED_AT_END_OF_MEMBER:  
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_SADDLE:    
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment, section_internal]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_OFFSET_AT_BOTH_SIDES:  
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_end_is_defined_as_relative, section_distance_from_start_relative/absolute, section_distance_from_end_relative/absolute, section_alignment, section_internal]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_OFFSET_AT_START_OF_MEMBER: 
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]

        > * for section_distribution_type == MemberSectionDistributionType.SECTION_DISTRIBUTION_TYPE_OFFSET_AT_END_OF_MEMBER:   
        distribution_parameters = [section_distance_from_start_is_defined_as_relative, section_distance_from_start_relative/absolute, section_alignment]


    * **integration_parameters** (*list*) – Integration Parameters
    
        > * for result_beam_integrate_stresses_and_forces.name == “INTEGRATE_WITHIN_CUBOID_QUADRATIC”:  
        integration_parameters = [result_beam_y_z]

        > * for result_beam_integrate_stresses_and_forces.name == “INTEGRATE_WITHIN_CUBOID_GENERAL”:    
        integration_parameters = [result_beam_y_plus, result_beam_z_plus, result_beam_y_minus, result_beam_z_minus]

        > * for result_beam_integrate_stresses_and_forces.name == “INTEGRATE_WITHIN_CYLINDER”:  
        integration_parameters = [result_beam_radius]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'member_result_intermediate_point' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Rib(no, start_node_no, end_node_no, section_distribution_type, start_section_no, end_section_no, rib_surfaces_no, rib_alignment, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **section_distribution_type** (*enum*) – Section Distribution Type Enuemration


    * **start_section_no** (*int*) – Tag of Start Section


    * **end_section_no** (*int*) – Tag of End Section


    * **rib_surfaces_no** (*list*) – Surfaces Tags Assigned to Rib


    * **rib_alignment** (*enum*) – Rib Alignment Enumeration


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_hinge_start':, 'member_hinge_end': , 'support':, 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'member_result_intermediate_point' : , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Rigid(no=1, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str**, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_hinge_start':, 'member_hinge_end': , 'member_eccentricity_start': , 'member_eccentricity_end': , 'support':, 'member_nonlinearity': , 'member_result_intermediate_point' : , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Tension(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **section_no** (*int*) – Section Tag


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.Truss(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **section_no** (*int*) – Section Tag


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.TrussOnlyN(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, line, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_specification_type** (*enum*) – Rotation Specification Type Enumeration


    * **rotation_parameters** (*list*) – Rotation Parameters
    
        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_ANGLE:    
        rotation_parameters = [rotation_angle]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_HELP_NODE:    
        rotation_parameters = [rotation_help_node, rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_INSIDE_NODE:  
        rotation_parameters = [rotation_plane_type]

        > * for rotation_specification_type == MemberRotationSpecificationType.COORDINATE_SYSTEM_ROTATION_VIA_SURFACE:  
        rotation_parameters = [rotation_surface, rotation_surface_plane_type]


    * **section_no** (*int*) – Section Tag


    * **line** (*int*, *optional*) – Assigned Line


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RFEM Class, optional*) - Model to be edited



### Member.GetMember(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Member Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## MemberSet


### MemberSet(no, members_no, member_set_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Set Tag


    * **members_no** (*str*) – Numbers of Members Contained Within Member Set


    * **member_set_type** (*enum*) – Member Set Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSet.ContinuousMembers(no, members_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Set Tag


    * **members_no** (*str*) – Numbers of Members Contained Within Continuous Member Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSet.GroupOfmembers(no, members_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Set Tag


    * **members_no** (*str*) – Numbers of Members Contained Within Group of Members Member Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### MemberSet.GetMemberSet(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - MemberSet Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Node


### Node(no, coordinate_X, coordinate_Y, coordinate_Z, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **coordinate_X** (*float*) – X-Coordinate


    * **coordinate_Y** (*float*) – Y-Coordinate


    * **coordinate_Z** (*float*) – Z-Coordinate


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


### Node.BetweenTwoNodes(no, start_node_no, end_node_no, node_reference, length_between_i_and_j, parameters, offset_y, offset_z, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **start_node_no** (*int*) – Start Node


    * **end_node_no** (*int*) – End Node


    * **node_reference** (*enum*) – Node Reference Enumeration


    * **length_between_i_and_j** (*float*) – Length between 2 Nodes


    * **parameters** (*list*) – 
    
        > * if distance_from_start_relative:    
        parameters = [True, %]

        > * if distance_from_start_absolute:    
        parameters = [False, magnitude]


    * **offset_y** (*float*) – Offset in Y-Direction


    * **offset_z** (*float*) – Offset in Z-Direction


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Node.BetweenTwoPoints(no, start_point_x, start_point_y, start_point_z, end_point_x, end_point_y, end_point_z, node_reference, parameters, offset_y, offset_z, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **start_point_x** (*float*) – Start Point in X-Coordinate


    * **start_point_y** (*float*) – Start Point in Y-Coordinate


    * **start_point_z** (*float*) – Start Point in Z-Coordinate


    * **end_point_x** (*float*) – End Point in X-Coordinate


    * **end_point_y** (*float*) – End Point in Y-Coordinate


    * **end_point_z** (*float*) – End Point in Z-Coordinate


    * **node_reference** (*enum*) – Node Reference Enumeration


    * **parameters** (*list*) – 
    
        > * if distance_from_start_relative:    
        parameters = [True, %]

        > * if distance_from_start_absolute:    
        parameters = [False, magnitude]


    * **offset_y** (*float*) – Offset in Y-Direction


    * **offset_z** (*float*) – Offset in Z-Direction


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Node.DeleteNode(nodes_no, model)

* **Parameters**

    * **nodes_no** (*str*) – Numbers of Nodes to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Node.OnLine(no, line_number, node_reference, length_between_i_and_j, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag

    
    * **line_number** (*int*) – Line Tag


    * **node_reference** (*enum*) – Node Reference Enumeration


    * **length_between_i_and_j** (*float*) – Length between 2 Nodes


    * **parameters** (*list*) – 
    
        > * if distance_from_start_relative:    
        parameters = [True, %]

        > * if distance_from_start_absolute:    
        parameters = [False, magnitude]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Node.OnMember(no, member_number, node_reference, length_between_i_and_j, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **member_number** (*int*) – Member Tag


    * **node_reference** (*enum*) – Node Reference Enumeration


    * **length_between_i_and_j** (*float*) – Length between 2 Nodes


    * **parameters** (*list*) – 
    
        > * if distance_from_start_relative:    
        parameters = [True, %]

        > * if distance_from_start_absolute:    
        parameters = [False, magnitude]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Node.Standard(no, coordinate_system, coordinate_system_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **coordinate_system** (*list*) – Coordinate System

        > * for coordinate_system_type == NodeCoordinateSystemType.COORDINATE_SYSTEM_CARTESIAN; 
        coordinate_system = [X, Y, Z]

        > * for coordinate_system_type == NodeCoordinateSystemType.COORDINATE_SYSTEM_X_CYLINDRICAL; 
        coordinate_system = [X, R, θ]

        > * for coordinate_system_type == NodeCoordinateSystemType.COORDINATE_SYSTEM_Y_CYLINDRICAL; 
        coordinate_system = [R, Ύ, θ]

        > * for coordinate_system_type == NodeCoordinateSystemType.COORDINATE_SYSTEM_Z_CYLINDRICAL; 
        coordinate_system = [R, θ, Z]

        > * for coordinate_system_type == NodeCoordinateSystemType.COORDINATE_SYSTEM_POLAR: 
        coordinate_system = [R, θ, φ]


    * **coordinate_system_type** (*enum*) – Coordinate System Type Enumeration


    * **comment** (*str**, **optional*) – Comments


    * **params** (*dict**, **optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Node.GetNode(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Node Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Opening


### Opening(no, lines_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Opening Tag


    * **lines_no** (*str*) – Numbers of Lines defining Opening


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Opening.DeleteOpening(openings_no, model)

* **Parameters**

    * **openings_no** (*str*) – Numbers of Openings to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Opening.GetOpening(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Opening Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Section


### Section(no, name, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Section Tag


    * **name** (*str*) – Name of Desired Section (As Named in RFEM Database)


    * **material_no** (*int*) – Tag of Material assigned to Section


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Section.DeleteSection(sections_no='1 2', model=<class 'RFEM.initModel.Model'>)

* **Parameters**

    * **sections_no** (*str*) – Numbers of Sections to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Section.GetSection(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Section Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Solid


### Solid(no, boundary_surfaces_no, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Tag


    * **boundary_surfaces_no** (*str*) – Numbers of Surfaces defining Solid


    * **material_no** (*int*) – Tag of Material assigned to Solid


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Solid.Contact(no, boundary_surfaces_no, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Tag


    * **boundary_surfaces_no** (*str*) – Numbers of Surfaces defining Contact


    * **material_no** (*int*) – Tag of Material assigned to Solid


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Solid.DeleteSolid(solids_no, model)

* **Parameters**

    * **solids_no** (*str*) – Numbers of Solids to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Solid.Gas(no, boundary_surfaces_no, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Tag


    * **boundary_surfaces_no** (*str*) – Numbers of Surfaces defining Gas


    * **material_no** (*int*) – Tag of Material assigned to Solid


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Solid.Soil(no, boundary_surfaces_no, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Tag


    * **boundary_surfaces_no** (*str*) – Numbers of Surfaces defining Soil


    * **material_no** (*int*) – Tag of Material assigned to Solid


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Solid.Standard(no, boundary_surfaces_no, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Tag


    * **boundary_surfaces_no** (*str*) – Numbers of Surfaces defining Solid


    * **material_no** (*int*) – Tag of Material assigned to Solid


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Solid.GetSolid(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Solid Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## SolidSet


### SolidSet(no, solids_no, solid_set_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Set Tag


    * **solids_no** (*str*) – Numbers of Solids Contained Within Solid Set


    * **solid_set_type** (*enum*) – Solid Set Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidSet.ContinuousSolids(no, solids_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Set Tag


    * **solids_no** (*str*) – Numbers of Solids Contained Within Continuous Solid Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidSet.GroupOfSolids(no, solids_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Solid Set Tag


    * **solids_no** (*str*) – Numbers of Solids Contained Within Group of Solids Solid Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SolidSet.GetSolidSet(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - SolidSet Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Surface


### CreateGeometryAndSetToModel(no, surface_type, boundary_lines_no, geometry_type, geometry_type_parameters, thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **surface_type** (*enum*) – Surface Type Enumeration


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Standard Surface


    * **geometry_type** (*enum*) – Geometry Type Enumeration


    * **geometry_type_parameters** (*list*) – Geometry Type Parameters
    
        > * for geometry_type == SurfaceGeometry.GEOMETRY_NURBS:    
        geometry_type_parameters = [nurbs_control_point_count_in_direction_u, nurbs_control_point_count_in_direction_v, nurbs_order_in_direction_u, nurbs_order_in_direction_v]

        > * for geometry_type == SurfaceGeometry.GEOMETRY_PLANE:    
        geometry_type_parameters = None

        > * for geometry_type == SurfaceGeometry.GEOMETRY_QUADRANGLE:   
        geometry_type_parameters = [quadrangle_corner_node_1, quadrangle_corner_node_2, quadrangle_corner_node_3, quadrangle_corner_node_4]

        > * for geometry_type == SurfaceGeometry.GEOMETRY_ROTATED:  
        geometry_type_parameters = [rotated_angle_of_rotation, [rotated_point_p_x, rotated_point_p_y, rotated_point_p_z], [rotated_point_r_x, rotated_point_r_y, rotated_point_r_z], rotated_boundary_line]


    * **thickness** (*int*) – Tag of Thickness assigned to Standard Surface


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface(no, boundary_lines_no, thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Surface


    * **thickness** (*int*) – Tag of Thickness assigned to Surface


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.DeleteSurface(surfaces_no, model)

* **Parameters**

    * **surfaces_no** (*str*) – Numbers of Surfaces to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.LoadDistribution(no, boundary_lines_no, load_transfer_direction, surface_weight_enabled, surface_weight, excluded_members, excluded_parallel_to_members, excluded_lines, excluded_parallel_to_lines, loaded_members, loaded_lines, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Load Distribution Surface


    * **load_transfer_direction** (*enum*) – Surface Load Transfer Direction Enumeration


    * **surface_weight_enabled** (*bool*) – Activate/De-Activate Surface Weight


    * **surface_weight** (*float*) – Magnitude of Surface Weight


    * **excluded_members** (*str*) – Tag of Members to be excluded from Load Distribution


    * **excluded_parallel_to_members** (*str*) – Tag of Members to which parallel Members are excluded from Load Distribution


    * **excluded_lines** (*str*) – Tag of Lines to be excluded from Load Distribution


    * **excluded_parallel_to_lines** (*str*) – Tag of Lines to which parallel Lines are excluded from Load Distribution


    * **loaded_members** (*str*) – Tag of Loaded Members


    * **loaded_lines** (*str*) – Tag of Loaded Lines


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.Membrane(no, geometry_type, geometry_type_parameters, boundary_lines_no, thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **geometry_type** (*enum*) – Surface Geometry Type Enumeration


    * **geometry_type_parameters** (*list*) – Geometry Type Parameters
    
        > * for geometry_type == SurfaceGeometry.GEOMETRY_NURBS:    
        geometry_type_parameters = [nurbs_control_point_count_in_direction_u, nurbs_control_point_count_in_direction_v, nurbs_order_in_direction_u, nurbs_order_in_direction_v]

        > * for geometry_type == SurfaceGeometry.GEOMETRY_PLANE:    
        geometry_type_parameters = None

        > * for geometry_type == SurfaceGeometry.GEOMETRY_QUADRANGLE:   
        geometry_type_parameters = [quadrangle_corner_node_1, quadrangle_corner_node_2, quadrangle_corner_node_3, quadrangle_corner_node_4]


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Membrane Surface


    * **thickness** (*int*) – Tag of Thickness assigned to Membrane Surface


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.Rigid(no, geometry_type, geometry_type_parameters, boundary_lines_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **geometry_type** (*enum*) – Surface Geometry Type Enumeration


    * **geometry_type_parameters** (*list*) – Geometry Type Parameters
    
        > * for geometry_type == SurfaceGeometry.GEOMETRY_NURBS:    
        geometry_type_parameters = [nurbs_control_point_count_in_direction_u, nurbs_control_point_count_in_direction_v, nurbs_order_in_direction_u, nurbs_order_in_direction_v]

        > * for geometry_type == SurfaceGeometry.GEOMETRY_PLANE:    
        geometry_type_parameters = None

        > * for geometry_type == SurfaceGeometry.GEOMETRY_QUADRANGLE:   
        geometry_type_parameters = [quadrangle_corner_node_1, quadrangle_corner_node_2, quadrangle_corner_node_3, quadrangle_corner_node_4]


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Rigid Surface


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.Standard(no, geometry_type, geometry_type_parameters, boundary_lines_no, thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **geometry_type** (*enum*) – Surface Geometry Type Enumeration


    * **geometry_type_parameters** (*list*) – Geometry Type Parameters
    
        > * for geometry_type == SurfaceGeometry.GEOMETRY_NURBS:    
        geometry_type_parameters = [nurbs_control_point_count_in_direction_u,     > * nurbs_control_point_count_in_direction_v, nurbs_order_in_direction_u, nurbs_order_in_direction_v]

        > * for geometry_type == SurfaceGeometry.GEOMETRY_PLANE:    
        geometry_type_parameters = None

        > * for geometry_type == SurfaceGeometry.GEOMETRY_QUADRANGLE:   
        geometry_type_parameters = [quadrangle_corner_node_1, quadrangle_corner_node_2, quadrangle_corner_node_3, quadrangle_corner_node_4]


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Standard Surface


    * **thickness** (*int*) – Tag of Thickness assigned to Standard Surface


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.WithoutMemberaneTension(no, geometry_type, geometry_type_parameters, boundary_lines_no, thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **geometry_type** (*enum*) – Surface Geometry Type Enumeration


    * **geometry_type_parameters** (*list*) – Geometry Type Parameters
    
        > * for geometry_type == SurfaceGeometry.GEOMETRY_NURBS:    
        geometry_type_parameters = [nurbs_control_point_count_in_direction_u, nurbs_control_point_count_in_direction_v, nurbs_order_in_direction_u, nurbs_order_in_direction_v]

        > * for geometry_type == SurfaceGeometry.GEOMETRY_PLANE:    
        geometry_type_parameters = None

        > * for geometry_type == SurfaceGeometry.GEOMETRY_QUADRANGLE:   
        geometry_type_parameters = [quadrangle_corner_node_1, quadrangle_corner_node_2, quadrangle_corner_node_3, quadrangle_corner_node_4]


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Without Membrane Tension Surface


    * **thickness** (*int*) – Tag of Thickness assigned to Without Membrane Tension Surface


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.WithoutThickness(no, geometry_type, geometry_type_parameters, boundary_lines_no, comment='', params, model)

* **Parameters**

    
    * **no** (*int*) – Surface Tag


    * **geometry_type** (*enum*) – Surface Geometry Type Enumeration


    * **geometry_type_parameters** (*list*) – Geometry Type Parameters
    
        > * for geometry_type == SurfaceGeometry.GEOMETRY_NURBS:    
        geometry_type_parameters = [nurbs_control_point_count_in_direction_u, nurbs_control_point_count_in_direction_v, nurbs_order_in_direction_u, nurbs_order_in_direction_v]

        > * for geometry_type == SurfaceGeometry.GEOMETRY_PLANE:    
        geometry_type_parameters = None

        > * for geometry_type == SurfaceGeometry.GEOMETRY_QUADRANGLE:   
        geometry_type_parameters = [quadrangle_corner_node_1, quadrangle_corner_node_2, quadrangle_corner_node_3, quadrangle_corner_node_4]


    * **boundary_lines_no** (*str*) – Numbers of Lines defining Without Thickness Surface


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Surface.GetSurface(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Surface Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## SurfaceSet


### SurfaceSet(no, surfaces_no, surface_set_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surfaces Set Tag


    * **surfaces_no** (*str*) – Numbers of Surfaces Contained Within Surface Set


    * **surfaces_set_type** (*enum*) – Surface Set Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited




### SurfaceSet.ContinuousSurfaces(no, surfaces_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surfaces Set Tag


    * **surfaces_no** (*str*) – Numbers of Surfaces Contained Within Continuous Surface Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSet.GroupOfSurfaces(no, surfaces_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Surfaces Set Tag


    * **surfaces_no** (*str*) – Numbers of Surfaces Contained Within Group of Surfaces Surface Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### SurfaceSet.GetSurfaceSet(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - SurfaceSet Index


    * **model** (*RFEM Class, optional*) - Model to be edited



## Thickness


### Thickness(no, name, material_no, uniform_thickness_d, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **uniform_thickness_d** (*float*) – Magnitude of Thickness


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


### Thickness.DeleteThickness(thickness_no, model)

* **Parameters**

    * **thickness_no** (*str*) – Numbers of Thickness to be deleted


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.Layers(no, name, layers, stiffness_reduction, stiffness_modification, specify_integration, integration_type, clt_options, comment, params, model)

--> NOTE: Available only for Special Solution Add-on Multilayer Surfaces.

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **layers** (*list of lists*) - Layers Table as an Array. Angle of the material will be set if material model is orthotropic.


        > layers = [[thickness_type, material, thickness, angle], ...]


    * **stiffness_reduction** (*bool, optional*) – Enable/disable Stiffness Reduction


    * **stiffness_modification** (*list of lists, optional*) – Stiffness Modification Table (Entries K33, K44, K55, K88 with notes, respectivly)


        > stiffness_modification = [[K33, K33 notes], ...]


    * **specify_integration** (*bool, optional*) – Enable/disable Specify Integration


    * **integration_type** (*enum*) – Specify which Integration should be used


    * **clt_options** (*list of lists, optional*) – List that allows to set options for CLT


        > clt_options = [[False, 100, 100], [False, 0, 0]]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.ShapeOrthotropy(no, name, material_no, orthotropy_type, rotation_beta, consideration_of_self_weight, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **orthotropy_type** (*enum*) – Thickness Orthotropy Type


    * **rotation_beta** (*float*) – Rotation


    * **consideration_of_self_weight** (*list*) – Consideration of Self-Weight Parameters
    
        > * for consideration_of_self_weight == ‘parameter defined’     
        consideration_of_self_weight = [ThicknessShapeOrthotropySelfWeightDefinitionType.SELF_WEIGHT_COMPUTED_FROM_PARAMETERS, fictitious_thickness]

        > * for consideration_of_self_weight == ‘user-defined fictitious thickness’     
        consideration_of_self_weight = [ThicknessShapeOrthotropySelfWeightDefinitionType.SELF_WEIGHT_DEFINED_VIA_FICTITIOUS_THICKNESS, fictitious_thickness]

        > * for consideration_of_self_weight == ‘user-defined’      
        consideration_of_self_weight = [ThicknessShapeOrthotropySelfWeightDefinitionType.SELF_WEIGHT_DEFINED_VIA_WEIGHT, self_weight]


    * **parameters** (*list*) – Parameters List of chosen Orthotropy Type
    
        > * for orthotropy_type == ThicknessOrthotropyType.EFFECTIVE_THICKNESS:     
        parameters = [effective_thickness_x, effective_thickness_y]

        > * for orthotropy_type == ThicknessOrthotropyType.COUPLING:    
        parameters = [coupling_thickness, coupling_spacing, coupling_width]

        > * for orthotropy_type == ThicknessOrthotropyType.UNIDIRECTIONAL_RIBBED_PLATE:     
        parameters = [slab_thickness, rib_height, rib_spacing, rib_width]

        > * for orthotropy_type == ThicknessOrthotropyType.BIDIRECTIONAL_RIBBED_PLATE:  
        parameters = [slab_thickness, rib_height_x, rib_height_y, rib_spacing_x, rib_spacing_y, rib_width_x, rib_width_y]

        > * for orthotropy_type == ThicknessOrthotropyType.TRAPEZOIDAL_SHEET:   
        parameters = [sheet_thickness, total_profile_height, rib_spacing, top_flange_width, bottom_flange_width]

        > * for orthotropy_type == ThicknessOrthotropyType.HOLLOW_CORE_SLAB:    
        parameters = [slab_thickness, void_spacing, void_diameter]

        > * for orthotropy_type == ThicknessOrthotropyType.GRILLAGE:    
        parameters = [slab_thickness, rib_spacing_x, rib_spacing_y, rib_width_x, rib_width_y]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.StiffnessMatrix(no, name, material_no, rotation_beta, consideration_of_self_weight, coefficient_of_thermal_expansion, stiffness_matrix, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **rotation_beta** (*float*) – Rotation


    * **consideration_of_self_weight** (*list*) – Self-Weight Consideration Parameters
    
        > * for consideration_of_self_weight == ‘fictitious thickness and bulk density’ 
        consideration_of_self_weight = [ThicknessStiffnessMatrixSelfWeightDefinitionType.SELF_WEIGHT_DEFINITION_TYPE_DEFINED_VIA_FICTITIOUS_THICKNESS_AND_BULK_DENSITY, fictitious_thickness, stiffness_matrix_bulk_density]

        > * for consideration_of_self_weight == ‘fictitious thickness and area density’ 
        consideration_of_self_weight = [ThicknessStiffnessMatrixSelfWeightDefinitionType.SELF_WEIGHT_DEFINITION_TYPE_DEFINED_VIA_FICTITIOUS_THICKNESS_AND_AREA_DENSITY, stiffness_matrix_bulk_density, stiffness_matrix_area_density]

        > * for consideration_of_self_weight == ‘bulk density and area density’ 
        consideration_of_self_weight = [ThicknessStiffnessMatrixSelfWeightDefinitionType.SELF_WEIGHT_DEFINITION_TYPE_DEFINED_VIA_BULK_DENSITY_AND_AREA_DENSITY, fictitious_thickness, stiffness_matrix_area_density]


    * **coefficient_of_thermal_expansion** (*float*) – Coefficient of Thermal Expansion


    * **stiffness_matrix** (*list*) – Nested List of Stiffness Matrix Entries (See Below)
    
        > * Element entry overview : [  
            [Bending/Torsional Stiffness Elements (Nm)],    
            [Shear Stiffness Elements (N/m)],   
            [Membrane Stiffness Elements (N/m)],    
            [Eccentric Stiffness Elements (Nm/m)]   
            ]

        > * Detailed element entry      
            [[D44, D45, D55],   
            [D66, D67, D68, D77, D78, D88],     
            [D16, D17, D18, D27, D28, D38]]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.Uniform(no, name, material_no, properties, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **properties** (*list*) – Magnitude of Thickness [Thickness]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.Variable_2NodesAndDirection(no, name, material_no, properties, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **properties** (*list*) – Properties for 2 Nodes and Direction Variable Thickness Definition
    properties = [thickness_d1, node_no_1, thickness_d2, node_no_2, direction]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.Variable_3Nodes(no, name, material_no, properties, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **properties** (*list*) – Properties for 3 Nodes Variable Thickness Definition
    
        > * properties = [thickness_d1, node_no_1, thickness_d2, node_no_2, thickness_d3, node_no_3]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.Variable_4SurfaceCorners(no, name, material_no, properties, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **properties** (*list*) – Properties for 4 Surface Corners Variable Definition
    
        > * properties = [thickness_d1, node_no_1, thickness_d2, node_no_2, thickness_d3, node_no_3, thickness_d4, node_no_4]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.Variable_Circle(no, name, material_no, properties, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Thickness Tag


    * **name** (*str*) – Thickness Name


    * **material_no** (*int*) – Tag of Material assigned to Thickness


    * **properties** (*list*) – Properties for Circular Thickness Definition
    
        > * properties = [thickness_circle_center_dC, thickness_circle_line_dR]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### Thickness.GetThickness(object_index, model)

* **Parameters**


    * **obejct_index** (*int*) - Thickness Index


    * **model** (*RFEM Class, optional*) - Model to be edited


