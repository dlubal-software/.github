# Basic Objects

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/BasicObjects)*

## Material


### Material(no, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Material Tag


    * **name** (*str*) – Name of Desired Material (As Named in RSTAB Database)


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


### Material.DeleteMaterial(materials_no, model)

* **Parameters**

    
    * **materials_no** (*str*) – Numbers of Materials to be deleted


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## Member


### Member(no, start_node_no, end_node_no, rotation_angle, start_section_no, end_section_no, start_member_hinge_no, end_member_hinge_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **rotation_angle** (*float*) – Member Rotation Angle


    * **start_section_no** (*int*) – Tag of Start Section


    * **end_section_no** (*int*) – Tag of End Section


    * **start_member_hinge_no** (*int*) – Tag of Start Member Hinge


    * **end_member_hinge_no** (*int*) – Tag of End Member Hinge


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.Beam(no, start_node_no, end_node_no, section_distribution_type, rotation_specification_type, rotation_parameters, start_section_no, end_section_no, distribution_parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Tag


    * **start_node_no** (*int*) – Tag of Start Node


    * **end_node_no** (*int*) – Tag of End Node


    * **section_distribution_type** (*enum*) – Section Distribution Type Enumeration


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


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_hinge_start':, 'member_hinge_end': , 'member_eccentricity_start': , 'member_eccentricity_end': , 'support':, 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'member_result_intermediate_point' : , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.Buckling(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, comment, params, model)

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


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.Cable(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, comment, params, model)

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


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.Compression(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, comment, params, model)

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


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



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


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



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


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



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


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



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


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



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


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.DeleteMember(members_no, model)

* **Parameters**

    
    * **members_no** (*str*) – Numbers of Members to be deleted


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.Rigid(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, comment, params, model)

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

        params = {'member_hinge_start':, 'member_hinge_end': , 'member_eccentricity_start': , 'member_eccentricity_end': , 'support':, 'member_nonlinearity': , 'member_result_intermediate_point' : , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.Tension(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, comment, params, model)

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


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.Truss(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, comment, params, model)

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


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Member.TrussOnlyN(no, start_node_no, end_node_no, rotation_specification_type, rotation_parameters, section_no, comment, params, model)

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


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

        params = {'member_eccentricity_start': , 'member_eccentricity_end': , 'member_nonlinearity': , 'end_modifications_member_start_extension': , 'end_modifications_member_start_slope_y': , 'end_modifications_member_start_slope_z': , 'end_modifications_member_end_extension': , 'end_modifications_member_end_slope_y': , 'end_modifications_member_end_slope_z': , 'is_deactivated_for_calculation' : }


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## MemberSet


### MemberSet(no, members_no, member_set_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Set Tag


    * **members_no** (*str*) – Numbers of Members Contained Within Member Set


    * **member_set_type** (*enum*) – Member Set Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSet.ContinuousMembers(no, members_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Set Tag


    * **members_no** (*str*) – Numbers of Members Contained Within Continuous Member Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### MemberSet.GroupOfmembers(no, members_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Set Tag


    * **members_no** (*str*) – Numbers of Members Contained Within Group of Members Member Set


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## Node 


### Node(no, coordinate_X, coordinate_Y, coordinate_Z, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **coordinate_X** (*float*) – X-Coordinate


    * **coordinate_Y** (*float*) – Y-Coordinate


    * **coordinate_Z** (*float*) – Z-Coordinate


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


### Node.BetweenTwoNodes(no, start_node_no, end_node_no, node_reference, length_between_i_and_j, parameters, offset_y, offset_z, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **start_node_no** (*int*) – Start Node


    * **end_node_no** (*int*) – End Node


    * **node_reference** (*enum*) – Node Reference Enumeration


    * **length_between_i_and_j** (*float*) – Length between 2 Nodes


    * **parameters** (*list*) – Parameter List

        > * if distance_from_start_relative:    
        parameters = [True, %]

        > * if distance_from_start_absolute:    
        parameters = [False, magnitude]


    * **offset_y** (*float*) – Offset in Y-Direction


    * **offset_z** (*float*) – Offset in Z-Direction


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



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


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Node.DeleteNode(nodes_no, model)

* **Parameters**

    
    * **nodes_no** (*str*) – Numbers of Nodes to be deleted


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### Node.OnMember(no, member_number, node_reference, length_between_i_and_j, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Node Tag


    * **member_number** (*int*) – Member Tag


    * **node_reference** (*enum*) – Node Reference Enumeration


    * **length_between_i_and_j** (*int*) – Length between 2 Nodes


    * **parameters** (*list*) – 

        > * if distance_from_start_relative:    
        parameters = [True, %]

        > * if distance_from_start_absolute:    
        parameters = [False, magnitude]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



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


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## Section


### Section(no, name, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Section Tag


    * **name** (*str*) – Name of Desired Section (As Named in RSTAB Database)


    * **material_no** (*int*) – Tag of Material assigned to Section


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


### Section.DeleteSection(sections_no, model)

* **Parameters**

    
    * **sections_no** (*str*) – Numbers of Sections to be deleted


    * **model** (*RSTAB Class*, *optional*) – Model to be edited

