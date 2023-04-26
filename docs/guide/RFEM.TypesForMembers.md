# Types for Members

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForMembers)*

## MemberDefinableStiffness


### MemberDefinableStiffness(no, name, members, torsional_stiffness, bending_stiffness_y, bending_stiffness_z, axial_stiffness, shear_stiffness_y, shear_stiffness_z, specific_weight, section_area, rotation, thermal_expansion_alpha, thermal_expansion_width, thermal_expansion_height, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Definable Stiffness Tag


    * **name** (*str*) – User Defined Name


    * **members** (*str*) – Assigned Members


    * **torsional_stiffness** (*float*) – Torsional Stiffness


    * **bending_stiffness_y** (*float*) – Bending Stiffness in Y Direction


    * **bending_stiffness_z** (*float*) – Bendign Stiffness in Z Direction


    * **axial_stiffness** (*float*) – Axial Stiffness


    * **shear_stiffness_y** (*float*) – Shear Stiffness in Y Direction


    * **shear_stiffness_z** (*float*) – Shear Stiffness in Z Direction


    * **specific_weight** (*float*) – Specific Weight


    * **section_area** (*float*) – Section Area


    * **rotation** (*float*) – Rotation


    * **thermal_expansion_alpha** (*float*) – Thermal Expansion Alpha Coefficient


    * **thermal_expansion_width** (*float*) – Thermal Expansion Witdh Coefficient


    * **thermal_expansion_height** (*float*) – Thermal Expansion Height Coefficient


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberEccentricity


### MemberEccentricity(no, name, eccentricity_type, eccentricity_parameters, transverse_offset_type, transverse_offset_parameters, axial_offset_active, hinge_location_at_node, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Eccentricity Tag


    * **name** (*str*) – User Defined Name


    * **eccentricity_type** (*enum*) – Member Eccentricity Specification Type Enumeration


    * **eccentricity_parameters** (*list*) – Eccentricity Parameters List

        > * for eccentricity_type == MemberEccentricitySpecificationType.TYPE_RELATIVE:     
        eccentricity_parameters (list): [horizontal_section_alignment, vertical_section_alignment]

        > * for eccentricity_type == MemberEccentricitySpecificationType.TYPE_ABSOLUTE:     
        eccentricity_parameters (list): [coordinate_system, offset_x, offset_y, offset_z]

        > * for eccentricity_type == MemberEccentricitySpecificationType.TYPE_RELATIVE_AND_ABSOLUTE:    
        eccentricity_parameters (list): [coordinate_system, offset_x, offset_y, offset_z, horizontal_section_alignment, vertical_section_alignment]


    * **transverse_offset_type** (*enum*) – Member Eccentricity Transverse Offset Type Enumeration


    * **transverse_offset_parameters** (*list*) – Transverse Offset Parameters List

        > * for transverse_offset_type == MemberEccentricityTransverseOffsetType.TRANSVERSE_OFFSET_TYPE_NONE:   
        transverse_offset_parameters (list): None

        > * for transverse_offset_type == MemberEccentricityTransverseOffsetType.TRANSVERSE_OFFSET_TYPE_FROM_SURFACE_THICKNESS:     
        transverse_offset_parameters (list): [transverse_offset_reference_surface, transverse_offset_vertical_alignment]

        > * for transverse_offset_type == MemberEccentricityTransverseOffsetType.TRANSVERSE_OFFSET_TYPE_FROM_MEMBER_SECTION:    
        transverse_offset_parameters (list): [transverse_offset_reference_member, transverse_offset_member_reference_node, transverse_offset_horizontal_alignment, transverse_offset_vertical_alignment]


    * **axial_offset_active** (*bool*) – Enable/Disable Axial Offset


    * **hinge_location_at_node** (*bool*) – Enable/Disable Hinge Location at Node


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberHinge


### MemberHinge(no, coordinate_system, member, translational_release_n, translational_release_vy, translational_release_vz, rotational_release_mt, rotational_release_my, rotational_release_mz, translational_release_n_nonlinearity, translational_release_vy_nonlinearity, translational_release_vz_nonlinearity, rotational_release_mt_nonlinearity, rotational_release_my_nonlinearity, rotational_release_mz_nonlinearity, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Hinge Tag


    * **coordinate_system** (*str*) – Coordinate System Selection


    * **member** (*str*) – Assigned Members


    * **translational_release_n** (*float*) – Translational Spring Constant X


    * **translational_release_vy** (*float*) – Translational Spring Constant Y


    * **translational_release_vz** (*float*) – Translational Spring Constant Z


    * **rotational_release_mt** (*float*) – Rotational Spring Constant X


    * **rotational_release_my** (*float*) – Rotational Spring Constant Y


    * **rotational_release_mz** (*float*) – Rotational Spring Constant Z


    * **translational_release_n_nonlinearity** (*list*) – Nonlinearity Options Translational X


    * **translational_release_vy_nonlinearity** (*list*) – Nonlinearity Options Translational Y


    * **translational_release_vz_nonlinearity** (*list*) – Nonlinearity Options Translational Z


    * **rotational_release_mt_nonlinearity** (*list*) – Nonlinearity Options Rotational X


    * **rotational_release_my_nonlinearity** (*list*) – Nonlinearity Options Rotational Y


    * **rotational_release_mz_nonlinearity** (*list*) – Nonlinearity Options Rotational Z


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberNonlinearity


### MemberNonlinearity(no, members, nonlinearity_type, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Nonlinearity Tag


    * **members** (*str*) – Assigned Members


    * **nonlinearity_type** (*enum*) – Member Nonlinearity Type Enumeration Item


    * **parameters** (*list*) – Nonlinearity Parameters


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberResultIntermediatePoints


### MemberResultIntermediatePoint(no, members, point_count, uniform_distribution, distances, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Result Intermediate Point Tag


    * **members** (*str*) – Assigned Members


    * **point_count** (*int*) – Assigned Point Number


    * **uniform_distribution** (*bool*) – Uniform Distrubition Option


    * **distances** (*list of lists*) – Distances Table


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberRotationalRestraint


### MemberRotationalRestraint.Continuous(no, name, member_supports, sheeting_material, sheeting_name, position_of_sheeting, continuous_beam_effect, section_deformation_cdb, modulus_of_elasticity, sheeting_thickness, sheeting_moment_of_inertia, sheeting_distance_of_ribs, width_of_sheeting_flange, spring_stiffness, beam_spacing, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Rotational Restraint Tag

    
    * **name** (*str*) – User Defined Member Rotational Restraint Name

        > * if name == '':  
            user_defined_name_enabled = False (Automatic Name Assignment)

        > * else:   
            user_defined_name_enabled = True    
            name = User Defined Name

    
    * **member_supports** (*str*) – Assigned Member Supports

    
    * **sheeting_material** (*str*) – Sheeting Material

    
    * **sheeting_name** (*str*) – Sheeting Name According to Library

    
    * **position_of_sheeting** (*enum*) – Position of Sheeting Enumeration

    
    * **continuous_beam_effect** (*enum*) – Continous Beam Effect Enumeration

    
    * **section_deformation_cdb** (*bool*) – Section Deformation Cdb Option

    
    * **modulus_of_elasticity** (*float, optional*) – Modulus of Elasticity

    
    * **sheeting_thickness** (*float, optional*) – Sheeting Thickness

    
    * **sheeting_moment_of_inertia** (*float, optional*) – Sheeting Moment of Inertia

    
    * **sheeting_distance_of_ribs** (*float, optional*) – Sheeting Distance of Ribs

    
    * **width_of_sheeting_flange** (*float, optional*) – Width of Sheeting Flange

    
    * **spring_stiffness** (*float*) – Spring Stiffness

    
    * **beam_spacing** (*float*) – Beam Spacing


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



### MemberRotationalRestraint.Discrete(no, name, member_supports, section_material, section_name, rotational_stifness, continous_beam_effect, section_deformation_cdb, modulus_of_elasticity, section_moment_of_inertia, purlin_spacing, beam_spacing, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Rotational Restraint Tag

    
    * **name** (*str*) – User Defined Member Rotational Restraint Name

        > * if name == '':  
            user_defined_name_enabled = False (Automatic Name Assignment)

        > * else:   
            user_defined_name_enabled = True    
            name = User Defined Name

    
    * **member_supports** (*str*) – Assigned Member Supports

    
    * **section_material** (*str*) – Section Material

    
    * **section_name** (*str*) – Section Name

    
    * **rotational_stifness** (*list*) – Rotational Stiffness

        > * if rotational_stiffness[0] == MemberRotationalRestraintRotationalStiffness.ROTATIONAL_STIFFNESS_INFINITELY:     
            pass

        > * elif rotational_stiffness[0] == MemberRotationalRestraintRotationalStiffness.ROTATIONAL_STIFFNESS_MANUALLY:   
            rotational_stiffness[1] (float): Rotational Stiffness Value

    
    * **continous_beam_effect** (*enum*) – Continous Beam Effect Enumeration

    
    * **section_deformation_cdb** (*bool*) – Section Deformation Cdb Option

    
    * **modulus_of_elasticity** (*float, optional*) – Modulus of Elasticity

    
    * **section_moment_of_inertia** (*float, optional*) – Section Moment of Inertia

    
    * **purlin_spacing** (*float*) – Purlin Spacing

    
    * **beam_spacing** (*float*) – Beam Spacing


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



### MemberRotationalRestraint.Manually(no, name, member_supports, rotational_spring_stiffness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Rotational Restraint Tag

    
    * **name** (*str*) – User Defined Member Rotational Restraint Name

        > * if name == '':  
            user_defined_name_enabled = False (Automatic Name Assignment)

        > * else:   
            user_defined_name_enabled = True    
            name = User Defined Name

    
    * **member_supports** (*str*) – Assigned Member Supports

    
    * **rotational_spring_stiffness** (*float*) – Rotational Spring Stiffness


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberShearPanel


### MemberShearPanel.TrapezodialSheeting(no, name, member_supports, position_on_section, girder_length_definition, sheeting_name, fastening_arrangement, panel_length, beam_spacing, coefficient_k1, coefficient_k2, position_on_section_value, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Shear Panel Tag

    
    * **name** (*str*) – User Defined Member Shear Panel Name

        > * if name == '':  
            user_defined_name_enabled = False (Automatic Name Assignment)

        > * else:   
            user_defined_name_enabled = True    
            name = User Defined Name

    
    * **member_supports** (*str*) – Assigned Member Supports

    
    * **position_on_section** (*enum*) – Member Shear Panel Position Enumeration

    
    * **girder_length_definition** (*list*) – Girder Length Definition List

        > girder_length_definition[0] (bool): Activate/Deactivate Automatically Girder Length     
        
        > girder_length_definition[1] (float): Girder Length Value

    
    * **sheeting_name** (*str*) – Sheeting Name According to Library

    
    * **fastening_arrangement** (*enum*) – Fastening Arrangement Enumeration

    
    * **panel_length** (*float*) – Panel Length

    
    * **beam_spacing** (*float*) – Beam Spacing

    
    * **coefficient_k1** (*float, optional*) – Coefficient K1

    
    * **coefficient_k2** (*float, optional*) – Coefficient K2

    
    * **position_on_section_value** (*float*) – Position on Section Value (only for position_on_section == MemberShearPanelPositionOnSection.POSITION_DEFINE)


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



### MemberShearPanel.Bracing(no, name, member_supports, position_on_section, girder_length_definition, material_name, diagonal_section, posts_section, modulus_of_elasticity, panel_length, beam_spacing, posts_spacing, number_of_bracings, diagonals_section_area, posts_section_area, position_on_section_value, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Shear Panel Tag

    
    * **name** (*str*) – User Defined Member Shear Panel Name

        > * if name == '':  
            user_defined_name_enabled = False (Automatic Name Assignment)

        > * else:   
            user_defined_name_enabled = True    
            name = User Defined Name

    
    * **member_supports** (*str*) – Assigned Member Supports

    
    * **position_on_section** (*enum*) – Member Shear Panel Position Enumeration

    
    * **girder_length_definition** (*list*) – Girder Length Definition List

        > girder_length_definition[0] (bool): Activate/Deactivate Automatically Girder Length     
        
        > girder_length_definition[1] (float): Girder Length Value

    
    * **material_name** (*str*) – Material Name

    
    * **diagonal_section** (*str*) – Diagonal Section

    
    * **posts_section** (*str*) – Posts Section

    
    * **modulus_of_elasticity** (*float, optional*) – Modulus of Elasticity

    
    * **panel_length** (*float*) – Panel Length

    
    * **beam_spacing** (*float*) – Beam Spacing

    
    * **posts_spacing** (*float*) – Posts Spacing

    
    * **number_of_bracings** (*int*) – Number of Bracings

    
    * **diagonals_section_area** (*float, optional*) – Diagonals Section Area

    
    * **posts_section_area** (*float, optional*) – Posts Section Area

    
    * **position_on_section_value** (*float*) – Position on Section Value (only for position_on_section == MemberShearPanelPositionOnSection.POSITION_DEFINE)


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



### MemberShearPanel.DefineSProv(no, name, member_supports, position_on_section, girder_length_definition, shear_panel_stiffness, position_on_section_value, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Shear Panel Tag

    
    * **name** (*str*) – User Defined Member Shear Panel Name

        > * if name == '':  
            user_defined_name_enabled = False (Automatic Name Assignment)

        > * else:   
            user_defined_name_enabled = True    
            name = User Defined Name

    
    * **member_supports** (*str*) – Assigned Member Supports

    
    * **position_on_section** (*enum*) – Member Shear Panel Position Enumeration

    
    * **girder_length_definition** (*list*) – Girder Length Definition List

        > girder_length_definition[0] (bool): Activate/Deactivate Automatically Girder Length     
        
        > girder_length_definition[1] (float): Girder Length Value

    
    * **shear_panel_stiffness** (*float*) – Shear Panel Stiffness

    
    * **position_on_section_value** (*float*) – Position on Section Value (only for position_on_section == MemberShearPanelPositionOnSection.POSITION_DEFINE)


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



### MemberShearPanel.TrapeziodalSheetingAndBracing(no, name, member_supports, position_on_section, sheeting_name, material_name, diagonals_section, posts_section, fastening_arrangement, modulus_of_elasticity, panel_length, girder_length_definition, beam_spacing, coefficient_k1, coefficient_k2, post_spacing, number_of_bracing, diagonals_section_area, posts_section_area, position_on_section_value, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Shear Panel Tag

    
    * **name** (*str*) – User Defined Member Shear Panel Name

        > * if name == '':  
            user_defined_name_enabled = False (Automatic Name Assignment)

        > * else:   
            user_defined_name_enabled = True    
            name = User Defined Name

    
    * **member_supports** (*str*) – Assigned Member Supports

    
    * **position_on_section** (*enum*) – Member Shear Panel Position Enumeration

    
    * **sheeting_name** (*str*) – Sheeting Name According to Library

    
    * **material_name** (*str*) – Material Name

    
    * **diagonal_section** (*str*) – Diagonal Section

    
    * **posts_section** (*str*) – Posts Section

    
    * **fastening_arrangement** (*enum*) – Fastening Arrangement Enumeration

    
    * **modulus_of_elasticity** (*float, optional*) – Modulus of Elasticity

    
    * **panel_length** (*float*) – Panel Length

    
    * **girder_length_definition** (*list*) – Girder Length Definition List

        > girder_length_definition[0] (bool): Activate/Deactivate Automatically Girder Length     
        
        > girder_length_definition[1] (float): Girder Length Value

    
    * **beam_spacing** (*float*) – Beam Spacing

    
    * **coefficient_k1** (*float, optional*) – Coefficient K1

    
    * **coefficient_k2** (*float, optional*) – Coefficient K2

    
    * **posts_spacing** (*float*) – Posts Spacing

    
    * **number_of_bracings** (*int*) – Number of Bracings

    
    * **diagonals_section_area** (*float, optional*) – Diagonals Section Area

    
    * **posts_section_area** (*float, optional*) – Posts Section Area

    
    * **position_on_section_value** (*float*) – Position on Section Value (only for position_on_section == MemberShearPanelPositionOnSection.POSITION_DEFINE)


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberStiffnessModification


### MemberStiffnessModification(no, assigned_structure_modification, modification_type, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Modification Tag


    * **assigned_structure_modification** (*str*) – Assigned Structure Modification


    * **modification_type** (*enum*) – Member Stiffness Modification Type Enumeration Item


    * **parameters** (*list*) – Parameters List
    
        > * for modification_type == “TYPE_TOTAL_STIFFNESSES_FACTORS”:  
        parameters = [total_stiffness_factor]

        > * for modification_type == “TYPE_PARTIAL_STIFFNESSES_FACTORS”:    
        parameters = [factor_of_axial_stiffness, factor_of_bending_y_stiffness, factor_of_bending_z_stiffness,partial_stiffness_factor_of_shear_y_stiffness, partial_stiffness_factor_of_shear_z_stiffness,partial_stiffness_factor_of_torsion_stiffness, partial_stiffness_factor_of_weight]

        > * for modification_type == “TYPE_CONCRETE_STRUCTURES_ACI”:    
        parameters = [concrete_structure_component_type, factor_of_axial_stiffness,factor_of_bending_y_stiffness, factor_of_bending_z_stiffness]

        > * for modification_type == “TYPE_CONCRETE_STRUCTURES_CSA”:    
        parameters = [concrete_structure_component_type, factor_of_axial_stiffness,factor_of_bending_y_stiffness, factor_of_bending_z_stiffness]

        > * for modification_type = “TYPE_STEEL_STRUCTURES”:    
        parameters = [steel_structure_determine_tau_b, steel_structure_design_method]

        > * for modification_type = “TYPE_STEEL_STRUCTURES_CSA”:    
        parameters = [steel_structure_csa_determine_tau_b, factor_of_axial_stiffness, factor_of_bending_z_stiffness, steel_structure_csa_stiffness_factor_of_shear_y_stiffness, steel_structure_csa_stiffness_factor_of_shear_z_stiffness,steel_structure_csa_stiffness_factor_of_torsion_stiffness]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



## MemberSupport


### MemberSupport(no, members, spring_translation_x, spring_translation_y, spring_translation_z, spring_rotation, spring_shear_x, spring_shear_y, spring_shear_z, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Support Tag


    * **members** (*str*) – Assigned Members


    * **spring_translation_x** (*float*) – Translational X Spring Constant


    * **spring_translation_y** (*float*) – Translational Y Spring Constant


    * **spring_translation_z** (*list*) – [Translational Z Spring Constant, Nonlinearity Type]


    * **spring_rotation** (*float*) – Rotational Spring Constant


    * **spring_shear_x** (*float*) – Shear X Spring Constant


    * **spring_shear_y** (*float*) – Shear Y Spring Constant


    * **spring_shear_z** (*float*) – Shear Z Spring Constant


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited


## memberTransverseStiffeners


### MemberTransverseStiffeners(no, members, member_sets, components, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Transverse Stiffener Tag


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **components** (*list of components*) – List of components dictionary


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*): Model to be edited



#### component = {'no' : 1, 'stiffener_type' : MemberTransverseStiffenerType.STIFFENER_COMPONENT_TYPE_FLAT, 'position' : 1, 'position_type' : MemberTransverseStiffenerPosition.STIFFENER_COMPONENT_POSITION_DOUBLE_SIDED, 'multiple' : False, 'multiple_number' : 0, 'multiple_offset_definition_type' : MemberTransverseStiffenerOffsetType.OFFSET_DEFINITION_TYPE_ABSOLUTE, 'multiple_offset' : 0, 'material' : 1, 'consider_stiffener' : True, 'thickness' : 0.005, 'width' : 0.02, 'height' : 0, 'non_rigid' : False, 'rigid' : False, 'width_b_u' : 0, 'height_h_u' : 0, 'thickness_t_u' : 0, 'thickness_s_u' : 0, 'width_b' : 0, 'thickness_t' : 0, 'column_section' : 0, 'height_h_m' : 0, 'section' : 0, 'full_warping_restraint' : False, 'user_defined_restraint' : False, 'user_defined_restraint_value' : 0, 'note' : 'comment'}
