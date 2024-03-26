# AddOns

## Classes

<dl>
<dt><a href="#ConcreteDesignStrengthConfigurationACI">ConcreteDesignStrengthConfigurationACI</a></dt>
<dd></dd>
<dt><a href="#ConcreteDesignUltimateConfigurationCSA">ConcreteDesignUltimateConfigurationCSA</a></dt>
<dd></dd>
<dt><a href="#ConcreteDesignUltimateConfigurationEN">ConcreteDesignUltimateConfigurationEN</a></dt>
<dd></dd>
<dt><a href="#ConcreteDesignUltimateConfigurationSP">ConcreteDesignUltimateConfigurationSP</a></dt>
<dd></dd>
</dl>

<a name="ConcreteDesignStrengthConfigurationACI"></a>

## ConcreteDesignStrengthConfigurationACI
**Kind**: global class  

* [ConcreteDesignStrengthConfigurationACI](#ConcreteDesignStrengthConfigurationACI)
    * [new ConcreteDesignStrengthConfigurationACI(no, surfaces_no, members_no, nodes_no, comment, params)](#new_ConcreteDesignStrengthConfigurationACI_new)
    * [.GetNo()](#ConcreteDesignStrengthConfigurationACI+GetNo) ⇒
    * [.GetUltimateConfiguration()](#ConcreteDesignStrengthConfigurationACI+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#ConcreteDesignStrengthConfigurationACI+SetName)
    * [.SetMembers_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)](#ConcreteDesignStrengthConfigurationACI+SetMembers_ConsiderInternalForces)
    * [.SetMembers_InternalForceReductionZ(property_member_redistribution_of_moments_in_continuous_flexural_members, property_member_reduction_of_shear_at_support)](#ConcreteDesignStrengthConfigurationACI+SetMembers_InternalForceReductionZ)
    * [.SetMembers_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design, property_member_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement)](#ConcreteDesignStrengthConfigurationACI+SetMembers_RequiredLongitudinalReinforcement)
    * [.SetMembers_ProvidedLongitudinalReinforcement(property_member_design_check_for_tensile_force_in_longitudinal_reinforcement, property_member_embedment_length_of_continuing_flexural_tension_reinforcement, property_member_termination_of_reinforcement)](#ConcreteDesignStrengthConfigurationACI+SetMembers_ProvidedLongitudinalReinforcement)
    * [.SetMembers_MinimumReinforcement(property_member_minimum_longitudinal_reinforcement, property_member_minimum_shear_reinforcement, property_member_minimum_construction_reinforcement)](#ConcreteDesignStrengthConfigurationACI+SetMembers_MinimumReinforcement)
    * [.SetMembers_RequiredShearReinforcement(shear_reinforcement)](#ConcreteDesignStrengthConfigurationACI+SetMembers_RequiredShearReinforcement)
    * [.SetMembers_TorsionCapacity(property_member_type_of_torsion)](#ConcreteDesignStrengthConfigurationACI+SetMembers_TorsionCapacity)
    * [.SetMembers_ShearAndTorsionReinforcement(property_member_nominal_shear_strength_vc, property_member_inclination_of_concrete_strut)](#ConcreteDesignStrengthConfigurationACI+SetMembers_ShearAndTorsionReinforcement)
    * [.SetMembers_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)](#ConcreteDesignStrengthConfigurationACI+SetMembers_NeutralAxisDepthLimitation)
    * [.SetMembers_CalculationSetting(property_member_nett_concrete_area)](#ConcreteDesignStrengthConfigurationACI+SetMembers_CalculationSetting)
    * [.SetMembers_EpoxyFactor(epoxy_factor_type)](#ConcreteDesignStrengthConfigurationACI+SetMembers_EpoxyFactor)
    * [.SetStability_UnbracedColumn(property_stability_index_qy, property_stability_index_qz)](#ConcreteDesignStrengthConfigurationACI+SetStability_UnbracedColumn)
    * [.SetStability_StiffnessReductionCoefficientToConsiderCreep(property_beta_dns, property_beta_ds_y, property_beta_ds_z)](#ConcreteDesignStrengthConfigurationACI+SetStability_StiffnessReductionCoefficientToConsiderCreep)
    * [.SetStability_MomentMagnification(property_sway_moment_magnifier_method)](#ConcreteDesignStrengthConfigurationACI+SetStability_MomentMagnification)
    * [.SetStability_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)](#ConcreteDesignStrengthConfigurationACI+SetStability_RequiredReinforcement)
    * [.SetSurfaces_DesignMethod(optimization_type)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_DesignMethod)
    * [.SetSurfaces_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_InternalForcesDiagramUsedForDesign)
    * [.SetSurfaces_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi, property_surface_ratio_b_div_h)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_MinimumLongitudinalReinforcement)
    * [.SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_MinimumShearReinforcement(property_minimum_shear_reinforcement)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_MinimumShearReinforcement)
    * [.SetSurfaces_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage)
    * [.SetSurfaces_RequiredShearReinforcement(required_shear_reinforcement)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_RequiredShearReinforcement)
    * [.SetSurfaces_ShearAndTorsionReinforcement(property_surface_nominal_shear_strength_vc, property_surface_inclination_of_concrete_strut)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_ShearAndTorsionReinforcement)
    * [.SetSurfaces_NeutralAxisDepthLimitation(property_surface_consider_neutral_axis_depth_limitation, property_surface_value_of_neutral_axis_depth_limitation)](#ConcreteDesignStrengthConfigurationACI+SetSurfaces_NeutralAxisDepthLimitation)
    * [.SetPunching_PunchingLoad(property_node_used_punching_load_for_columns, property_node_used_punching_load_for_walls, property_node_distance_to_perimeter_used_for_integration_for_columns, property_node_distance_to_perimeter_used_for_integration_for_walls)](#ConcreteDesignStrengthConfigurationACI+SetPunching_PunchingLoad)
    * [.SetPunching_AdditionalParameters(property_node_minimum_spacing_of_reinforcement_perimeters)](#ConcreteDesignStrengthConfigurationACI+SetPunching_AdditionalParameters)
    * [.SetPunching_Factors(property_node_strength_reduction_factor_tensile, property_node_strength_reduction_factor_shear_and_torsion)](#ConcreteDesignStrengthConfigurationACI+SetPunching_Factors)

<a name="new_ConcreteDesignStrengthConfigurationACI_new"></a>

### new ConcreteDesignStrengthConfigurationACI(no, surfaces_no, members_no, nodes_no, comment, params)
Creates Concrete design strength configuration (ACI standard)


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Strength configuration number, can be undefined |
| surfaces_no | <code>Array</code> | Assigned surfaces numbers, can be undefined |
| members_no | <code>Array</code> | Assigned members numbers, can be undefined |
| nodes_no | <code>Array</code> | Assigned nodes numbers, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="ConcreteDesignStrengthConfigurationACI+GetNo"></a>

### concreteDesignStrengthConfigurationACI.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  
**Returns**: Strength configuration index  
<a name="ConcreteDesignStrengthConfigurationACI+GetUltimateConfiguration"></a>

### concreteDesignStrengthConfigurationACI.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  
**Returns**: Strength configuration object  
<a name="ConcreteDesignStrengthConfigurationACI+SetName"></a>

### concreteDesignStrengthConfigurationACI.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Strength configuration name, can be undefined |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_ConsiderInternalForces"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)
Sets Consider internal forces for concrete design

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_axial_forces | <code>Boolean</code> | Axial forces, can be undefined (is not set, true as default) |
| property_member_bending_moments_my | <code>Boolean</code> | Bending moment in Y, can be undefined (is not set, true as default) |
| property_member_bending_moments_mz | <code>Boolean</code> | Bending moment in Z, can be undefined (is not set, true as default) |
| property_member_torsional_moments | <code>Boolean</code> | Torsional moments, can be undefined (is not set, true as default) |
| property_member_shear_forces_vy | <code>Boolean</code> | Shear forces in Y, can be undefined (is not set, true as default) |
| property_member_shear_forces_vz | <code>Boolean</code> | Shear forces in Z, can be undefined (is not set, true as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_InternalForceReductionZ"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_InternalForceReductionZ(property_member_redistribution_of_moments_in_continuous_flexural_members, property_member_reduction_of_shear_at_support)
Sets Internal Force Reduction in z-Direction

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_redistribution_of_moments_in_continuous_flexural_members | <code>Boolean</code> | Redistribution of moments in continuous flexural members acc. to 6.6.5, can be undefined (is not set, false as default) |
| property_member_reduction_of_shear_at_support | <code>Boolean</code> | Reduction of shear at the support acc. to 9.4.3.2, can be undefined (is not set, true as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_RequiredLongitudinalReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design, property_member_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement)
Sets Required longitudinal reinforcement

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_OPTIMIZED_DISTRIBUTION, TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT, OPTIMIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, OPTIMIZED_PROVIDED_REINFORCEMENT as default) |
| property_member_reinforcement_diameter_for_preliminary_design | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user-defined value), can be undefined (is not set as default, otherwise MAX_OF_ALL as default) |
| property_member_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement | <code>Boolean</code> | Include tensile force due to shear in required longitudinal reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_ProvidedLongitudinalReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_ProvidedLongitudinalReinforcement(property_member_design_check_for_tensile_force_in_longitudinal_reinforcement, property_member_embedment_length_of_continuing_flexural_tension_reinforcement, property_member_termination_of_reinforcement)
Sets Provided Longitudinal Reinforcement

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_design_check_for_tensile_force_in_longitudinal_reinforcement | <code>Boolean</code> | Design check for tensile force in longitudinal reinforcement, including tension due to shear acc. to 9.7.3, can be undefined (is not set, true as default) |
| property_member_embedment_length_of_continuing_flexural_tension_reinforcement | <code>Boolean</code> | Embedment length of continuous flexural tension reinforcement acc. to 9.7.3.4, can be undefined (is not set, false as default) |
| property_member_termination_of_reinforcement | <code>Boolean</code> | Termination of flexural tension reinforcement acc. to 9.7.3.5, can be undefined (is not set, false as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_MinimumReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_MinimumReinforcement(property_member_minimum_longitudinal_reinforcement, property_member_minimum_shear_reinforcement, property_member_minimum_construction_reinforcement)
Sets Minimum Reinforcement Acc. to Standard

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_minimum_longitudinal_reinforcement | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| property_member_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement acc. to standard, can be undefined (is not set, true as default) |
| property_member_minimum_construction_reinforcement | <code>Boolean</code> | Minimum construction reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_RequiredShearReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_RequiredShearReinforcement(shear_reinforcement)
Sets Required Shear Reinforcement - Shear Capacity

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| shear_reinforcement | <code>String</code> | Use required longitudinal reinforcement (REQUIRED)                                      Use provided longitudinal reinforcement (PROVIDED) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_TorsionCapacity"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_TorsionCapacity(property_member_type_of_torsion)
Sets Torsion Capacity

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_type_of_torsion | <code>String</code> | Type of torsion acc. to 22.7.1.1 and 22.7.3.1 (TORSION_EQUILIBRIUM, TORSION_COMPATIBILITY), can be undefined (TORSION_EQUILIBRIUM as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_ShearAndTorsionReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_ShearAndTorsionReinforcement(property_member_nominal_shear_strength_vc, property_member_inclination_of_concrete_strut)
Sets Shear and Torsion Reinforcement

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_nominal_shear_strength_vc | <code>String</code> | Nominal shear strength Vc acc. to Table 22.5.5.1, can be undefined (is not set, TORSION_EQUILIBRIUM as default) |
| property_member_inclination_of_concrete_strut | <code>Number</code> | Inclination of concrete strut acc. to 22.7.6.1, can be undefined (is not set, 45.0 as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_NeutralAxisDepthLimitation"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)
Sets Sets Depth Limitation of Neutral Axis

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider depth limitation of neutral axis acc. to 9.3.3.1, can be undefined (is not set, false as default) |
| property_member_value_of_neutral_axis_depth_limitation_user_value | <code>String/Number</code> | Value of neutral axis depth limitation (AUTOMATICALLY or user number value), can be undefined (is not set, AUTOMATICALLY as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_CalculationSetting"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_CalculationSetting(property_member_nett_concrete_area)
Sets Calculation setting

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_nett_concrete_area | <code>Boolean</code> | Net concrete area, can be undefined (true as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetMembers_EpoxyFactor"></a>

### concreteDesignStrengthConfigurationACI.SetMembers\_EpoxyFactor(epoxy_factor_type)
Sets Epoxy factor

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| epoxy_factor_type | <code>String</code> | Epoxy factor type, can be undefined (is not set, UNCOATED_OR_ZINC_COATED as default)                                      - Epoxy-coated or zinc and epoxy dual-coated reinforcement (EPOXY_COATED_OR_ZINC)                                      - Uncoated or zinc-coated (galvanized) reinforcement (UNCOATED_OR_ZINC_COATED) |

<a name="ConcreteDesignStrengthConfigurationACI+SetStability_UnbracedColumn"></a>

### concreteDesignStrengthConfigurationACI.SetStability\_UnbracedColumn(property_stability_index_qy, property_stability_index_qz)
Sets Unbraced Column

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_index_qy | <code>Number</code> | Stability index for story in y-direction, can be undefined (is not set, 0.05 as default) |
| property_stability_index_qz | <code>Number</code> | Stability index for story in z-direction, can be undefined (is not set, 0.05 as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetStability_StiffnessReductionCoefficientToConsiderCreep"></a>

### concreteDesignStrengthConfigurationACI.SetStability\_StiffnessReductionCoefficientToConsiderCreep(property_beta_dns, property_beta_ds_y, property_beta_ds_z)
Sets Stiffness Reduction Coefficient to Consider Creep due to Sustained Load

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_beta_dns | <code>String/Number</code> | Ratio of sustained axial load to factored axial load (SIMPLIFIED, CALCULATED or user value), can be undefined (is not set, SIMPLIFIED as default) |
| property_beta_ds_y | <code>String/Number</code> | Ratio of sustained shear load to factored shear load in y-direction (CALCULATED or user value), can be undefined (is not set, CALCULATED as default) |
| property_beta_ds_z | <code>String/Number</code> | Ratio of sustained shear load to factored shear load in z-direction (CALCULATED or user value), can be undefined (is not set, CALCULATED as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetStability_MomentMagnification"></a>

### concreteDesignStrengthConfigurationACI.SetStability\_MomentMagnification(property_sway_moment_magnifier_method)
Sets Moment Magnification

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_sway_moment_magnifier_method | <code>String</code> | Sway moment magnifier δs method (Q_METHOD, P_METHOD), can be undefined (is not set, Q_METHOD as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetStability_RequiredReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetStability\_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)
Sets Required Reinforcement

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, UNIFORMLY_SURROUNDING as default) |
| reinforcement_diameter_for_preliminary_design_user_value | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user number value), can be undefined (is not set, MAX_OF_ALL as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_DesignMethod"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_DesignMethod(optimization_type)
Sets Design method

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| optimization_type | <code>String</code> | Design method optimization type, can be undefined (is not set, YES as default)                                      - No optimization of design internal forces (NO)                                      - Optimization of design internal forces (YES) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_InternalForcesDiagramUsedForDesign"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)
Sets Internal Forces Diagram Used for Design

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_subtraction_of_rib_components | <code>Boolean</code> | Subtraction of rib components for the ULS calculation and for the analytic method of SLS calculation, can be undefined (true as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_MinimumLongitudinalReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi, property_surface_ratio_b_div_h)
Sets Minimum longitudinal reinforcement acc. to standard

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_longitudinal_reinforcement_acc_to_standard | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| reinforcement_type | <code>String</code> | Minimum longitudinal reinforcement acc. to standard type, can be undefined (is not set, PLATES as default)                                                                                  - Minimum longitudinal reinforcement for plates acc. to Table 7.6.1.1, 8.6.1.1 (PLATES)                                                                                     - Minimum longitudinal reinforcement for walls acc. to Chapter 11 (WALLS) |
| min_reinforcement_direction | <code>String</code> | Direction of minimum reinforcement, can be undefined (is not set, MAIN_TENSION_ELEMENT as default)                                                                                     - On main tension side (MAIN_TENSION_ELEMENT)                                                                                     - In tension direction (MAIN_TENSION_SURFACE)                                                                                     - Defined (DEFINED) |
| min_reinforcement_direction_user_values | <code>Array</code> | User-defined direction of minimum reinforcement ([φ1(-z), φ2(-z), φ1(+z), φ2(+z)]), can be undefined (if not set, all values are true by default) |
| main_compression_reinforcement_direction | <code>String</code> | Direction of main compression reinforcement, can be undefined (is not set, WITH_MAIN_COMPRESSION_FORCE as default)                                                                                  - Reinforcement direction with the main compression force (WITH_MAIN_COMPRESSION_FORCE)                                                                                  - Defined in reinforcement direction (DEFINED_IN_REINFORCEMENT_DIRECTION) |
| property_surface_reinforcement_defined_direction_phi | <code>String</code> | Reinforcement direction (PHI_1, PHI_2) |
| property_surface_ratio_b_div_h | <code>Number</code> | Ratio b/h acc. to 11.6.2, can be undefined (is not set, 2.5 as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)
Sets User-defined minimum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined minimum longitudinal reinforcement percentage, can be undefined (is not set, false as default) |
| property_minimum_reinforcement | <code>Number</code> | Minimum reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_secondary_reinforcement | <code>Number</code> | Minimum secondary reinforcement from main reinforcement direction, can be undefined (is not set, 20% as default) |
| property_minimum_tension_reinforcement | <code>Number</code> | Minimum tension reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_compression_reinforcement | <code>Number</code> | Minimum compression reinforcement, can be undefined (is not set, 0% as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)
Sets User-defined maximum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_maximum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined maximum longitudinal reinforcement percentage, can be undefined (is not set, true as default) |
| property_user_defined_maximum_longitudinal_reinforcement_percentage_value | <code>Number</code> | Maximum reinforcement, can be undefined (is not set, 4% as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_MinimumShearReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_MinimumShearReinforcement(property_minimum_shear_reinforcement)
Sets Minimum shear reinforcement acc. to 9.3.2

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)
Sets User-defined minimum shear reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_shear_reinforcement_percentage | <code>Boolean</code> | Minimum shear reinforcement percentage, can be undefined (is not set, false as default) |
| property_user_defined_minimum_shear_reinforcement_percentage_value | <code>Number</code> | Minimum reinforcement, can be undefined, (is not set, 0% as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_RequiredShearReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_RequiredShearReinforcement(required_shear_reinforcement)
Sets Required Shear Reinforcement - Shear Capacity

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| required_shear_reinforcement | <code>String</code> | Required Shear Reinforcement value, can be undefined (is not set, REQUIRED as default)                                                  - Use required longitudinal reinforcement (REQUIRED)                                                  - Use provided longitudinal reinforcement (PROVIDED)                                                  - Automatically increase required longitudinal reinf. to avoid shear reinf. (AUTOMATICALLY) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_ShearAndTorsionReinforcement"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_ShearAndTorsionReinforcement(property_surface_nominal_shear_strength_vc, property_surface_inclination_of_concrete_strut)
Sets Shear and torsion reinforcement

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_surface_nominal_shear_strength_vc | <code>String</code> | Nominal shear strength Vc acc. to Table 22.5.5.1 (EQUATION_A, EQUATION_B, MAX_OF_A_B), can be undefined (EQUATION_A as default) |
| property_surface_inclination_of_concrete_strut | <code>Number</code> | Inclination of concrete strut acc. to 22.7.6.1, can be undefined (is not set, 36.0 deg as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetSurfaces_NeutralAxisDepthLimitation"></a>

### concreteDesignStrengthConfigurationACI.SetSurfaces\_NeutralAxisDepthLimitation(property_surface_consider_neutral_axis_depth_limitation, property_surface_value_of_neutral_axis_depth_limitation)
Sets Neutral Axis Depth Limitation

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_surface_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider depth limitation of neutral axis acc. to 9.3.3.1, can be undefined (true as default) |
| property_surface_value_of_neutral_axis_depth_limitation | <code>Number</code> | Value of neutral axis depth limitation, can be undefined (is not set, 0.45 as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetPunching_PunchingLoad"></a>

### concreteDesignStrengthConfigurationACI.SetPunching\_PunchingLoad(property_node_used_punching_load_for_columns, property_node_used_punching_load_for_walls, property_node_distance_to_perimeter_used_for_integration_for_columns, property_node_distance_to_perimeter_used_for_integration_for_walls)
Sets Punching Load

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_used_punching_load_for_columns | <code>String/Number</code> | Used punching load for columns (SINGLE_FORCE, SMOOTHED_SHEAR_FORCE or user-defined value), can be undefined (is not set, SINGLE_FORCE as default)                                                                                          - Single force from column / load / nodal support (SINGLE_FORCE)                                                                                          - Smoothed shear force over the defined perimeter (SMOOTHED_SHEAR_FORCE) |
| property_node_used_punching_load_for_walls | <code>String/Number</code> | Used punching load for walls (SMOOTHED_SHEAR_FORCE or user-defined value), can be undefined (is not set, SMOOTHED_SHEAR_FORCE as default)                                                                                               - Smoothed shear force over the defined perimeter (SMOOTHED_SHEAR_FORCE) |
| property_node_distance_to_perimeter_used_for_integration_for_columns | <code>Number</code> | Distance to perimeter used for integration (k * d), can be undefined (is not set, 2.0 as default) |
| property_node_distance_to_perimeter_used_for_integration_for_walls | <code>Number</code> | Distance to perimeter used for integration (k * d), can be undefined (is not set, 2.0 as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetPunching_AdditionalParameters"></a>

### concreteDesignStrengthConfigurationACI.SetPunching\_AdditionalParameters(property_node_minimum_spacing_of_reinforcement_perimeters)
Sets Additional Parameters

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_minimum_spacing_of_reinforcement_perimeters | <code>Number</code> | Minimum spacing of reinforcement perimeters, can be undefined (is not set, 0.1 as default) |

<a name="ConcreteDesignStrengthConfigurationACI+SetPunching_Factors"></a>

### concreteDesignStrengthConfigurationACI.SetPunching\_Factors(property_node_strength_reduction_factor_tensile, property_node_strength_reduction_factor_shear_and_torsion)
Sets Factors

**Kind**: instance method of [<code>ConcreteDesignStrengthConfigurationACI</code>](#ConcreteDesignStrengthConfigurationACI)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_strength_reduction_factor_tensile | <code>Number</code> | Strength reduction factors according to 21.2.1 - Tensile strength, can be undefined (is not set, 0.9 as default) |
| property_node_strength_reduction_factor_shear_and_torsion | <code>Number</code> | Strength reduction factors according to 21.2.1 - Shear and torsion, can be undefined (is not set, 0.75 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA"></a>

## ConcreteDesignUltimateConfigurationCSA
**Kind**: global class  

* [ConcreteDesignUltimateConfigurationCSA](#ConcreteDesignUltimateConfigurationCSA)
    * [new ConcreteDesignUltimateConfigurationCSA(no, surfaces_no, members_no, nodes_no, comment, params)](#new_ConcreteDesignUltimateConfigurationCSA_new)
    * [.GetNo()](#ConcreteDesignUltimateConfigurationCSA+GetNo) ⇒
    * [.GetUltimateConfiguration()](#ConcreteDesignUltimateConfigurationCSA+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#ConcreteDesignUltimateConfigurationCSA+SetName)
    * [.SetMembers_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_ConsiderInternalForces)
    * [.SetMembers_InternalForceReductionZ(property_member_redistribution_of_moments_in_continuous_flexural_members, property_member_reduction_of_moments_or_dimensioning_for_moments_at_face_of_monolithic_support, property_member_reduction_of_shear_at_support)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_InternalForceReductionZ)
    * [.SetMembers_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design, property_member_increase_of_tension_required_reinforcement_due_to_shear)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_RequiredLongitudinalReinforcement)
    * [.SetMembers_Factors(property_member_strength_reduction_factor_concrete, property_member_strength_reduction_factor_reinforcing, property_member_strength_reduction_factor_concrete_stress_strain_relationship)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_Factors)
    * [.SetMembers_MinimumReinforcement(property_member_minimum_longitudinal_reinforcement, property_member_minimum_shear_reinforcement, property_member_minimum_construction_reinforcement)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_MinimumReinforcement)
    * [.SetMembers_RequiredShearReinforcement(shear_reinforcement)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_RequiredShearReinforcement)
    * [.SetMembers_ShearAndTorsionReinforcement(determination_type, property_member_beta, property_member_theta)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_ShearAndTorsionReinforcement)
    * [.SetMembers_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_NeutralAxisDepthLimitation)
    * [.SetMembers_CalculationSetting(property_member_nett_concrete_area)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_CalculationSetting)
    * [.SetMembers_EpoxyFactor(epoxy_factor_type)](#ConcreteDesignUltimateConfigurationCSA+SetMembers_EpoxyFactor)
    * [.SetStability_UnbracedColumn(property_stability_index_qy, property_stability_index_qz)](#ConcreteDesignUltimateConfigurationCSA+SetStability_UnbracedColumn)
    * [.SetStability_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)](#ConcreteDesignUltimateConfigurationCSA+SetStability_RequiredReinforcement)
    * [.SetSurfaces_DesignMethod(optimization_type)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_DesignMethod)
    * [.SetSurfaces_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_InternalForcesDiagramUsedForDesign)
    * [.SetSurfaces_Factors(property_surface_strength_reduction_factor_concrete, property_surface_strength_reduction_factor_reinforcing, property_surface_strength_reduction_factor_concrete_stress_strain_relationship)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_Factors)
    * [.SetSurfaces_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_MinimumLongitudinalReinforcement)
    * [.SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_MinimumShearReinforcement(property_minimum_shear_reinforcement)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_MinimumShearReinforcement)
    * [.SetSurfaces_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage)
    * [.SetSurfaces_RequiredShearReinforcement(required_shear_reinforcement)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_RequiredShearReinforcement)
    * [.SetSurfaces_ShearReinforcement(determination_method, property_surface_beta, property_surface_theta)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_ShearReinforcement)
    * [.SetSurfaces_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)](#ConcreteDesignUltimateConfigurationCSA+SetSurfaces_NeutralAxisDepthLimitation)
    * [.SetPunching_PunchingLoad(property_node_used_punching_load_for_columns, property_node_used_punching_load_for_walls, property_node_distance_to_perimeter_used_for_integration_for_columns, property_node_distance_to_perimeter_used_for_integration_for_walls)](#ConcreteDesignUltimateConfigurationCSA+SetPunching_PunchingLoad)
    * [.SetPunching_AdditionalParameters(property_node_minimum_spacing_of_reinforcement_perometers)](#ConcreteDesignUltimateConfigurationCSA+SetPunching_AdditionalParameters)
    * [.SetPunching_Factors(property_node_strength_reduction_factor_concrete, property_node_strength_reduction_factor_reinforcing)](#ConcreteDesignUltimateConfigurationCSA+SetPunching_Factors)

<a name="new_ConcreteDesignUltimateConfigurationCSA_new"></a>

### new ConcreteDesignUltimateConfigurationCSA(no, surfaces_no, members_no, nodes_no, comment, params)
Creates Concrete design ultimate configuration (CSA standard)


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate configuration number, can be undefined |
| surfaces_no | <code>Array</code> | Assigned surfaces numbers, can be undefined |
| members_no | <code>Array</code> | Assigned members numbers, can be undefined |
| nodes_no | <code>Array</code> | Assigned nodes numbers, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="ConcreteDesignUltimateConfigurationCSA+GetNo"></a>

### concreteDesignUltimateConfigurationCSA.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  
**Returns**: Ultimate configuration index  
<a name="ConcreteDesignUltimateConfigurationCSA+GetUltimateConfiguration"></a>

### concreteDesignUltimateConfigurationCSA.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  
**Returns**: Ultimate configuration object  
<a name="ConcreteDesignUltimateConfigurationCSA+SetName"></a>

### concreteDesignUltimateConfigurationCSA.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Ultimate configuration name, can be undefined |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_ConsiderInternalForces"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)
Sets Consider internal forces for concrete design

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_axial_forces | <code>Boolean</code> | Axial forces, can be undefined (is not set, true as default) |
| property_member_bending_moments_my | <code>Boolean</code> | Bending moment in Y, can be undefined (is not set, true as default) |
| property_member_bending_moments_mz | <code>Boolean</code> | Bending moment in Z, can be undefined (is not set, true as default) |
| property_member_torsional_moments | <code>Boolean</code> | Torsional moments, can be undefined (is not set, true as default) |
| property_member_shear_forces_vy | <code>Boolean</code> | Shear forces in Y, can be undefined (is not set, true as default) |
| property_member_shear_forces_vz | <code>Boolean</code> | Shear forces in Z, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_InternalForceReductionZ"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_InternalForceReductionZ(property_member_redistribution_of_moments_in_continuous_flexural_members, property_member_reduction_of_moments_or_dimensioning_for_moments_at_face_of_monolithic_support, property_member_reduction_of_shear_at_support)
Sets Internal Force Reduction in z-Direction

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_redistribution_of_moments_in_continuous_flexural_members | <code>Boolean</code> | Redistribution of moments in continuous flexural members acc. to 9.2.4, can be undefined (is not set, false as default) |
| property_member_reduction_of_moments_or_dimensioning_for_moments_at_face_of_monolithic_support | <code>Boolean</code> | Reduction of moments or dimensioning for moments at face of a monolithic support, can be undefined (is not set, false as default) |
| property_member_reduction_of_shear_at_support | <code>Boolean</code> | Reduction of shear at the support acc. to 11.3.2, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_RequiredLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design, property_member_increase_of_tension_required_reinforcement_due_to_shear)
Sets Required longitudinal reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_OPTIMIZED_DISTRIBUTION, TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT, OPTIMIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, OPTIMIZED_PROVIDED_REINFORCEMENT as default) |
| property_member_reinforcement_diameter_for_preliminary_design | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user-defined value), can be undefined (is not set as default, otherwise MAX_OF_ALL as default) |
| property_member_increase_of_tension_required_reinforcement_due_to_shear | <code>Boolean</code> | Increase of required tension reinforcement due to shear acc. to 11.3.9.2, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_Factors"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_Factors(property_member_strength_reduction_factor_concrete, property_member_strength_reduction_factor_reinforcing, property_member_strength_reduction_factor_concrete_stress_strain_relationship)
Sets Factors

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_strength_reduction_factor_concrete | <code>Number</code> | Strength reduction factors acc. to 8.4 - Concrete factor, van be undefined (is not set, 0.65 as default) |
| property_member_strength_reduction_factor_reinforcing | <code>Number</code> | Strength reduction factors acc. to 8.4 - Reinforcing factor, can be undefined (is not set, 0.85 as default) |
| property_member_strength_reduction_factor_concrete_stress_strain_relationship | <code>Number</code> | Strength reduction factors acc. to 8.4 - Concrete stress-strain relationship factor acc. to 10.1.6, can be undefined (is not set, 0.9 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_MinimumReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_MinimumReinforcement(property_member_minimum_longitudinal_reinforcement, property_member_minimum_shear_reinforcement, property_member_minimum_construction_reinforcement)
Sets Minimum Reinforcement Acc. to Standard

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_minimum_longitudinal_reinforcement | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| property_member_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement acc. to standard, can be undefined (is not set, true as default) |
| property_member_minimum_construction_reinforcement | <code>Boolean</code> | Minimum construction reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_RequiredShearReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_RequiredShearReinforcement(shear_reinforcement)
Sets Required Shear Reinforcement - Shear Capacity

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| shear_reinforcement | <code>String</code> | Use required longitudinal reinforcement (REQUIRED)                                      Use provided longitudinal reinforcement (PROVIDED) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_ShearAndTorsionReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_ShearAndTorsionReinforcement(determination_type, property_member_beta, property_member_theta)
Sets Shear and Torsion Reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| determination_type | <code>String</code> | Determination of β and θ acc. to 11.3.6, can be undefined (is not set, GENERAL_METHOD as default)                                          - General method acc. to 11.3.6.4 (GENERAL_METHOD)                                          - Values for special members acc. to 11.3.6.2 (SPECIAL_MEMBERS) |
| property_member_beta | <code>Number</code> | Factor accounting for shear resistance of cracked concrete, can be undefined (is not set, 0.21 as default) |
| property_member_theta | <code>Number</code> | Angle of inclination of diagonal compressive stresses to longitudinal axis of member, can be undefined (is not set, 0.42 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_NeutralAxisDepthLimitation"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)
Sets Sets Depth Limitation of Neutral Axis

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider depth limitation of neutral axis acc. to 10.5.2, can be undefined (is not set, false as default) |
| property_member_value_of_neutral_axis_depth_limitation_user_value | <code>String/Number</code> | Value of neutral axis depth limitation (AUTOMATICALLY or user number value), can be undefined (is not set, AUTOMATICALLY as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_CalculationSetting"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_CalculationSetting(property_member_nett_concrete_area)
Sets Calculation setting

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_nett_concrete_area | <code>Boolean</code> | Net concrete area, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetMembers_EpoxyFactor"></a>

### concreteDesignUltimateConfigurationCSA.SetMembers\_EpoxyFactor(epoxy_factor_type)
Sets Epoxy factor

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| epoxy_factor_type | <code>String</code> | Epoxy factor type, can be undefined (is not set, UNCOATED_OR_ZINC_COATED as default)                                      - Epoxy-coated reinforcement (EPOXY_COATED_OR_ZINC)                                      - Uncoated reinforcement (UNCOATED_OR_ZINC_COATED) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetStability_UnbracedColumn"></a>

### concreteDesignUltimateConfigurationCSA.SetStability\_UnbracedColumn(property_stability_index_qy, property_stability_index_qz)
Sets Unbraced Column

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_index_qy | <code>Number</code> | Stability index for story in y-direction, can be undefined (is not set, 0.05 as default) |
| property_stability_index_qz | <code>Number</code> | Stability index for story in z-direction, can be undefined (is not set, 0.05 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetStability_RequiredReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetStability\_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)
Sets Required Reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, UNIFORMLY_SURROUNDING as default) |
| reinforcement_diameter_for_preliminary_design_user_value | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user number value), can be undefined (is not set, MAX_OF_ALL as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_DesignMethod"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_DesignMethod(optimization_type)
Sets Design method

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| optimization_type | <code>String</code> | Design method optimization type, can be undefined (is not set, YES as default)                                      - No optimization of design internal forces (NO)                                      - Optimization of design internal forces (YES) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_InternalForcesDiagramUsedForDesign"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)
Sets Internal Forces Diagram Used for Design

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_subtraction_of_rib_components | <code>Boolean</code> | Subtraction of rib components for the ULS calculation and for the analytic method of SLS calculation, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_Factors"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_Factors(property_surface_strength_reduction_factor_concrete, property_surface_strength_reduction_factor_reinforcing, property_surface_strength_reduction_factor_concrete_stress_strain_relationship)
Sets Factors

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_surface_strength_reduction_factor_concrete | <code>Number</code> | Strength reduction factors acc. to 8.4 - Concrete factor, can be undefined (is not set, 0.65 as default) |
| property_surface_strength_reduction_factor_reinforcing | <code>Number</code> | Strength reduction factors acc. to 8.4 - Reinforcing factor, can be undefined (is not set, 0.85 as default) |
| property_surface_strength_reduction_factor_concrete_stress_strain_relationship | <code>Number</code> | Strength reduction factors acc. to 8.4 - Concrete stress-strain relationship factor acc. to 10.1.6, can be undefined (is not set, 0.90 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_MinimumLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi)
Sets Minimum longitudinal reinforcement acc. to standard

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_longitudinal_reinforcement_acc_to_standard | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| reinforcement_type | <code>String</code> | Minimum longitudinal reinforcement acc. to standard type, can be undefined (is not set, PLATES as default)                                                                                  - Minimum longitudinal reinforcement for plates acc. to 7.8.1 (PLATES)                                                                                     - Minimum longitudinal reinforcement for walls acc. to 14.1.8.5 and 14.1.8.6 (WALLS) |
| min_reinforcement_direction | <code>String</code> | Direction of minimum reinforcement, can be undefined (is not set, MAIN_TENSION_ELEMENT as default)                                                                                     - On main tension side (MAIN_TENSION_ELEMENT)                                                                                     - In tension direction (MAIN_TENSION_SURFACE)                                                                                     - Defined (DEFINED) |
| min_reinforcement_direction_user_values | <code>Array</code> | User-defined direction of minimum reinforcement ([φ1(-z), φ2(-z), φ1(+z), φ2(+z)]), can be undefined (if not set, all values are true by default) |
| main_compression_reinforcement_direction | <code>String</code> | Direction of main compression reinforcement, can be undefined (is not set, WITH_MAIN_COMPRESSION_FORCE as default)                                                                                  - Reinforcement direction with the main compression force (WITH_MAIN_COMPRESSION_FORCE)                                                                                  - Defined in reinforcement direction (DEFINED_IN_REINFORCEMENT_DIRECTION) |
| property_surface_reinforcement_defined_direction_phi | <code>String</code> | Reinforcement direction (PHI_1, PHI_2) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)
Sets User-defined minimum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined minimum longitudinal reinforcement percentage, can be undefined (is not set, false as default) |
| property_minimum_reinforcement | <code>Number</code> | Minimum reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_secondary_reinforcement | <code>Number</code> | Minimum secondary reinforcement from main reinforcement direction, can be undefined (is not set, 20% as default) |
| property_minimum_tension_reinforcement | <code>Number</code> | Minimum tension reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_compression_reinforcement | <code>Number</code> | Minimum compression reinforcement, can be undefined (is not set, 0% as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)
Sets User-defined maximum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_maximum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined maximum longitudinal reinforcement percentage, can be undefined (is not set, true as default) |
| property_user_defined_maximum_longitudinal_reinforcement_percentage_value | <code>Number</code> | Maximum reinforcement, can be undefined (is not set, 4% as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_MinimumShearReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_MinimumShearReinforcement(property_minimum_shear_reinforcement)
Sets Minimum shear reinforcement acc. to 11.2.8.1

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)
Sets User-defined minimum shear reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_shear_reinforcement_percentage | <code>Boolean</code> | Minimum shear reinforcement percentage, can be undefined (is not set, false as default) |
| property_user_defined_minimum_shear_reinforcement_percentage_value | <code>Number</code> | Minimum reinforcement, can be undefined, (is not set, 0% as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_RequiredShearReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_RequiredShearReinforcement(required_shear_reinforcement)
Sets Required Shear Reinforcement - Shear Capacity

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| required_shear_reinforcement | <code>String</code> | Required Shear Reinforcement value, can be undefined (is not set, REQUIRED as default)                                                  - Use required longitudinal reinforcement (REQUIRED)                                                  - Use provided longitudinal reinforcement (PROVIDED)                                                  - Automatically increase required longitudinal reinf. to avoid shear reinf. (AUTOMATICALLY) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_ShearReinforcement"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_ShearReinforcement(determination_method, property_surface_beta, property_surface_theta)
Set Shear reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| determination_method | <code>String</code> | Determination of β and θ acc. to 11.3.6, can be undefined (is not set, GENERAL_METHOD as default)                                          - General method acc. to 11.3.6.4 (GENERAL_METHOD)                                          - Values for special surfaces acc. to 11.3.6.2 (SPECIAL_SURFACES) |
| property_surface_beta | <code>Number</code> | β, can be undefined (is not set, 0.21 as default) |
| property_surface_theta | <code>Number</code> | θ, can be undefined (is not set, 42 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetSurfaces_NeutralAxisDepthLimitation"></a>

### concreteDesignUltimateConfigurationCSA.SetSurfaces\_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)
Sets Depth Limitation of Neutral Axis

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider depth limitation of neutral axis acc. to 10.5.2, can be undefined (is not set, false as default) |
| property_member_value_of_neutral_axis_depth_limitation_user_value | <code>String/Number</code> | Value of neutral axis depth limitation (AUTOMATICALLY or user number value), can be undefined (is not set, AUTOMATICALLY as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetPunching_PunchingLoad"></a>

### concreteDesignUltimateConfigurationCSA.SetPunching\_PunchingLoad(property_node_used_punching_load_for_columns, property_node_used_punching_load_for_walls, property_node_distance_to_perimeter_used_for_integration_for_columns, property_node_distance_to_perimeter_used_for_integration_for_walls)
Sets Punching Load

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_used_punching_load_for_columns | <code>String/Number</code> | Used punching load for columns (SINGLE_FORCE, SMOOTHED_SHEAR_FORCE or user-defined value), can be undefined (is not set, SINGLE_FORCE as default)                                                                                          - Single force from column / load / nodal support (SINGLE_FORCE)                                                                                          - Smoothed shear force over the defined perimeter (SMOOTHED_SHEAR_FORCE) |
| property_node_used_punching_load_for_walls | <code>String/Number</code> | Used punching load for walls (SMOOTHED_SHEAR_FORCE or user-defined value), can be undefined (is not set, SMOOTHED_SHEAR_FORCE as default)                                                                                               - Smoothed shear force over the defined perimeter (SMOOTHED_SHEAR_FORCE) |
| property_node_distance_to_perimeter_used_for_integration_for_columns | <code>Number</code> | Distance to perimeter used for integration (k * d), can be undefined (is not set, 2.0 as default) |
| property_node_distance_to_perimeter_used_for_integration_for_walls | <code>Number</code> | Distance to perimeter used for integration (k * d), can be undefined (is not set, 2.0 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetPunching_AdditionalParameters"></a>

### concreteDesignUltimateConfigurationCSA.SetPunching\_AdditionalParameters(property_node_minimum_spacing_of_reinforcement_perometers)
Sets Additional Parameters

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_minimum_spacing_of_reinforcement_perometers | <code>Number</code> | Minimum spacing of reinforcement perimeters, can be undefined (is not set, 0.1 as default) |

<a name="ConcreteDesignUltimateConfigurationCSA+SetPunching_Factors"></a>

### concreteDesignUltimateConfigurationCSA.SetPunching\_Factors(property_node_strength_reduction_factor_concrete, property_node_strength_reduction_factor_reinforcing)
Sets Factors

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationCSA</code>](#ConcreteDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_strength_reduction_factor_concrete | <code>Number</code> | Strength reduction factors acc. to 8.4 - Concrete factor, can be undefined (is not set, 0.65 as default) |
| property_node_strength_reduction_factor_reinforcing | <code>Number</code> | Strength reduction factors acc. to 8.4 - Shear and torsion, can be undefined (is not set, 0.85 as default) |

<a name="ConcreteDesignUltimateConfigurationEN"></a>

## ConcreteDesignUltimateConfigurationEN
**Kind**: global class  

* [ConcreteDesignUltimateConfigurationEN](#ConcreteDesignUltimateConfigurationEN)
    * [new ConcreteDesignUltimateConfigurationEN(no, surfaces_no, members_no, nodes_no, comment, params)](#new_ConcreteDesignUltimateConfigurationEN_new)
    * [.GetNo()](#ConcreteDesignUltimateConfigurationEN+GetNo) ⇒
    * [.GetUltimateConfiguration()](#ConcreteDesignUltimateConfigurationEN+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#ConcreteDesignUltimateConfigurationEN+SetName)
    * [.SetMembers_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)](#ConcreteDesignUltimateConfigurationEN+SetMembers_ConsiderInternalForces)
    * [.SetMembers_ReductionsOfInternalForcesInZ(property_member_consideration_of_limited_moment_redistribution_of_the_supporting_moments, property_member_reduction_of_the_moments_or_dimensioning_for_the_moments_at_the_face_of_a_monolithic_support, property_member_reduction_of_the_shear_forces_in_the_support_face_and_distance, property_member_reduction_of_the_shear_forces_with_concentrated_load, property_member_consideration_of_minimum_eccentricity)](#ConcreteDesignUltimateConfigurationEN+SetMembers_ReductionsOfInternalForcesInZ)
    * [.SetMembers_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design, property_member_reinforcement_distribute_over_slab, property_member_reinforcement_distribute_over_slab_reduced_width, property_member_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetMembers_RequiredLongitudinalReinforcement)
    * [.SetMembers_DetailingAndParticularRules(property_member_minimum_longitudinal_reinforcement, property_member_user_defined_minimum_longitudinal_reinforcement_area, property_member_minimum_reinforcement_area, property_member_top_minimum_reinforcement_area, property_member_bottom_minimum_reinforcement_area, property_member_total_minimum_reinforcement_area, property_member_minimum_reinforcement_percentage, property_member_total_minimum_percentage_reinforcement_area, property_member_minimum_shear_reinforcement, property_member_use_compression_longitudinal_reinforcement_for_maximum_stirrup_spacing, property_member_compression_longitudinal_reinforcement_for_maximum_stirrup_spacing, property_member_minimum_construction_reinforcement, property_member_design_check_for_tensile_force_in_longitudinal_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetMembers_DetailingAndParticularRules)
    * [.SetMembers_RequiredShearReinforcement(shear_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetMembers_RequiredShearReinforcement)
    * [.SetMembers_ShearJoint(property_member_shear_joint_design, analysis_method, property_member_shear_joint_fatigue_or_dynamic_loads, property_member_shear_joint_normal_stress_across_joint_surfaces, property_member_shear_joint_design_of_flange_connections_on_segmented_cross_sections)](#ConcreteDesignUltimateConfigurationEN+SetMembers_ShearJoint)
    * [.SetMembers_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation)](#ConcreteDesignUltimateConfigurationEN+SetMembers_NeutralAxisDepthLimitation)
    * [.SetMembers_CalculationSetting(property_member_net_concrete_area)](#ConcreteDesignUltimateConfigurationEN+SetMembers_CalculationSetting)
    * [.SetMembers_FiberConcrete(fiber_concrete_effect, property_member_fiber_concrete_material_model_for_tension_strains, property_member_fiber_concrete_size_factor_kfg_calculate_from_tension_area)](#ConcreteDesignUltimateConfigurationEN+SetMembers_FiberConcrete)
    * [.SetStability_SlendernessAboutY(property_stability_determine_factor_ay, property_stability_determined_factor_ay, property_stability_determine_factor_by, property_stability_determined_factor_by, property_stability_determine_factor_cy, property_stability_determined_factor_cy)](#ConcreteDesignUltimateConfigurationEN+SetStability_SlendernessAboutY)
    * [.SetStability_SlendernessAboutZ(property_stability_determine_factor_az, property_stability_determined_factor_az, property_stability_determine_factor_bz, property_stability_determined_factor_bz, property_stability_determine_factor_cz, property_stability_determined_factor_cz)](#ConcreteDesignUltimateConfigurationEN+SetStability_SlendernessAboutZ)
    * [.SetStability_LoadDistribution(property_stability_structural_system_of_isolated_columns, property_stability_number_of_effective_columns)](#ConcreteDesignUltimateConfigurationEN+SetStability_LoadDistribution)
    * [.SetStability_BiaxialBending(property_stability_separate_design_in_each_principal_direction_acc_5_8_9, property_stability_use_simplified_criterion_acc_5_39)](#ConcreteDesignUltimateConfigurationEN+SetStability_BiaxialBending)
    * [.SetStability_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)](#ConcreteDesignUltimateConfigurationEN+SetStability_RequiredReinforcement)
    * [.SetSurfaces_DesignMethod(optimization_type)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_DesignMethod)
    * [.SetSurfaces_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_InternalForcesDiagramUsedForDesign)
    * [.SetSurfaces_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_MinimumLongitudinalReinforcement)
    * [.SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_MaximumLongitudinalReinforcement(property_maximum_longitudinal_reinforcement_acc_to_standard, reinforcement_type)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_MaximumLongitudinalReinforcement)
    * [.SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_MinimumShearReinforcement(property_minimum_shear_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_MinimumShearReinforcement)
    * [.SetSurfaces_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage)
    * [.SetSurfaces_RequiredLongitudinalReinforcement(property_surface_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_RequiredLongitudinalReinforcement)
    * [.SetSurfaces_RequiredShearReinforcement(required_shear_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_RequiredShearReinforcement)
    * [.SetSurfaces_NeutralAxisDepthLimitation(property_surface_consider_neutral_axis_depth_limitation, property_surface_value_of_neutral_axis_depth_limitation)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_NeutralAxisDepthLimitation)
    * [.SetSurfaces_FiberConcrete(property_surface_fiber_concrete_material_model_for_tension_strains, property_surface_fiber_concrete_model_for_compression, property_surface_fiber_concrete_material_model)](#ConcreteDesignUltimateConfigurationEN+SetSurfaces_FiberConcrete)
    * [.SetPunching_StructuralElement(property_node_structure_element_type)](#ConcreteDesignUltimateConfigurationEN+SetPunching_StructuralElement)
    * [.SetPunching_PunchingLoadForColumns(property_node_used_punching_load_for_columns, property_node_used_defined_value_of_punching_force, property_node_direction_of_punching_force, property_node_used_punching_load_inside_critical_perimeter_for_columns, property_user_defined_load_inside_critical_perimeter_factor_for_columns, property_node_load_inside_critical_perimeter_factor_for_columns)](#ConcreteDesignUltimateConfigurationEN+SetPunching_PunchingLoadForColumns)
    * [.SetPunching_PunchingLoadForWalls(property_node_used_punching_load_for_walls, property_node_used_punching_load_inside_critical_perimeter_for_walls, property_user_defined_load_inside_critical_perimeter_factor_for_walls, property_node_load_inside_critical_perimeter_factor_for_walls)](#ConcreteDesignUltimateConfigurationEN+SetPunching_PunchingLoadForWalls)
    * [.SetPunching_DeductibleSurfaceLoadForSlab(property_node_deductible_surface_load_for_slab, surface_load_for_slab_type, property_node_deductible_portion_for_slab, property_node_deductible_portion_for_slab_user_defined_value, property_node_distance_deductible_surface, property_node_multiple_static_depth_for_slab)](#ConcreteDesignUltimateConfigurationEN+SetPunching_DeductibleSurfaceLoadForSlab)
    * [.SetPunching_LoadedAreaOfPunchingNode(property_node_define_loaded_area_for_punching_node_type_column, property_node_shape_of_loaded_area, shape_parameters, property_node_define_wall_thicknesses_for_punching_node_type_wall, property_node_wall_thickness_1, property_node_wall_thickness_2)](#ConcreteDesignUltimateConfigurationEN+SetPunching_LoadedAreaOfPunchingNode)
    * [.SetPunching_BasicControlPerimeter(property_node_define_critical_section_for_slab, property_node_distance)](#ConcreteDesignUltimateConfigurationEN+SetPunching_BasicControlPerimeter)
    * [.SetPunching_MeanEffectiveDepth(property_node_define_region_of_detection_of_effective_depth, property_node_distance_from_loading_area, property_node_column_penetration, property_node_penetration_on_top_side, property_node_penetration_on_bottom_side)](#ConcreteDesignUltimateConfigurationEN+SetPunching_MeanEffectiveDepth)
    * [.SetPunching_PunchingShearReinforcement(property_node_punch_s_r_min, property_node_define_perimeter, property_node_define_sections_for_analysis_of_punching_shear_reinforcement, property_node_number_of_inner_control_perimeters, property_node_define_distance_to_loaded_area, property_node_first_distance, property_node_radial_spacing, property_node_define_outer_control_perimeter, property_node_distance_of_outer_control_perimeter_to_loaded_area)](#ConcreteDesignUltimateConfigurationEN+SetPunching_PunchingShearReinforcement)
    * [.SetPunching_AdditionalParameters(property_node_variable_thickness_definition, property_node_reference_surfaces_thickness, property_node_reference_surface_no)](#ConcreteDesignUltimateConfigurationEN+SetPunching_AdditionalParameters)
    * [.SetPunching_AxialForceDefinition(property_node_axial_force)](#ConcreteDesignUltimateConfigurationEN+SetPunching_AxialForceDefinition)
    * [.SetPunching_RequiredPunchingReinforcement_PunchingShareCapacity(reinforcement_type)](#ConcreteDesignUltimateConfigurationEN+SetPunching_RequiredPunchingReinforcement_PunchingShareCapacity)
    * [.SetPunching_MinimumReinforcement(property_node_minimum_punching_reinforcement)](#ConcreteDesignUltimateConfigurationEN+SetPunching_MinimumReinforcement)

<a name="new_ConcreteDesignUltimateConfigurationEN_new"></a>

### new ConcreteDesignUltimateConfigurationEN(no, surfaces_no, members_no, nodes_no, comment, params)
Creates Concrete design ultimate configuration (EN standard)


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate configuration number, can be undefined |
| surfaces_no | <code>Array</code> | Assigned surfaces numbers, can be undefined |
| members_no | <code>Array</code> | Assigned members numbers, can be undefined |
| nodes_no | <code>Array</code> | Assigned nodes numbers, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="ConcreteDesignUltimateConfigurationEN+GetNo"></a>

### concreteDesignUltimateConfigurationEN.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  
**Returns**: Ultimate Configuration index  
<a name="ConcreteDesignUltimateConfigurationEN+GetUltimateConfiguration"></a>

### concreteDesignUltimateConfigurationEN.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  
**Returns**: Ultimate Configuration object  
<a name="ConcreteDesignUltimateConfigurationEN+SetName"></a>

### concreteDesignUltimateConfigurationEN.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Ultimate configuration name, can be undefined |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_ConsiderInternalForces"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)
Sets Consider internal forces for concrete design

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_axial_forces | <code>Boolean</code> | Axial forces, can be undefined (is not set, true as default) |
| property_member_bending_moments_my | <code>Boolean</code> | Bending moment in Y, can be undefined (is not set, true as default) |
| property_member_bending_moments_mz | <code>Boolean</code> | Bending moment in Z, can be undefined (is not set, true as default) |
| property_member_torsional_moments | <code>Boolean</code> | Torsional moments, can be undefined (is not set, true as default) |
| property_member_shear_forces_vy | <code>Boolean</code> | Shear forces in Y, can be undefined (is not set, true as default) |
| property_member_shear_forces_vz | <code>Boolean</code> | Shear forces in Z, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_ReductionsOfInternalForcesInZ"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_ReductionsOfInternalForcesInZ(property_member_consideration_of_limited_moment_redistribution_of_the_supporting_moments, property_member_reduction_of_the_moments_or_dimensioning_for_the_moments_at_the_face_of_a_monolithic_support, property_member_reduction_of_the_shear_forces_in_the_support_face_and_distance, property_member_reduction_of_the_shear_forces_with_concentrated_load, property_member_consideration_of_minimum_eccentricity)
Sets Reduction of internal forces in z-direction

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_consideration_of_limited_moment_redistribution_of_the_supporting_moments | <code>Boolean</code> | Consideration of limited moment redistribution of the supporting moments according to 5.5, can be undefined (is not set, false as default) |
| property_member_reduction_of_the_moments_or_dimensioning_for_the_moments_at_the_face_of_a_monolithic_support | <code>Boolean</code> | Reduction of the moments or dimensioning for the moments at the face of a monolithic support according to 5.3.2.2, can be undefined (is not set, false as default) |
| property_member_reduction_of_the_shear_forces_in_the_support_face_and_distance | <code>Boolean</code> | Reduction of the shear forces in the support face and distance d acc. to 6.2.1(8), can be undefined (is not set, true as default) |
| property_member_reduction_of_the_shear_forces_with_concentrated_load | <code>Boolean</code> | Reduction of the shear forces with concentrated load acc. to 6.2.2(6) and 6.2.3(8), can be undefined (is not set, false as default) |
| property_member_consideration_of_minimum_eccentricity | <code>Boolean</code> | Consideration of minimum eccentricity acc. to 6.1(4), can be undefined (is not set, false as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_RequiredLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design, property_member_reinforcement_distribute_over_slab, property_member_reinforcement_distribute_over_slab_reduced_width, property_member_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement)
Sets Required longitudinal reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_OPTIMIZED_DISTRIBUTION, TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT, OPTIMIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, OPTIMIZED_PROVIDED_REINFORCEMENT as default) |
| property_member_reinforcement_diameter_for_preliminary_design | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user-defined value), can be undefined (is not set as default, otherwise MAX_OF_ALL as default) |
| property_member_reinforcement_distribute_over_slab | <code>Boolean</code> | Distribute reinforcement evenly over complete slab width, can be undefined (is not set, false as default) |
| property_member_reinforcement_distribute_over_slab_reduced_width | <code>Number</code> | Distribute reinforcement evenly over complete slab width - Distribute the tensile reinforcement in the slab over a width of, can be undefined (is not set, 100% as default) |
| property_member_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement | <code>Boolean</code> | Include tensile force due to shear in required longitudinal reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_DetailingAndParticularRules"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_DetailingAndParticularRules(property_member_minimum_longitudinal_reinforcement, property_member_user_defined_minimum_longitudinal_reinforcement_area, property_member_minimum_reinforcement_area, property_member_top_minimum_reinforcement_area, property_member_bottom_minimum_reinforcement_area, property_member_total_minimum_reinforcement_area, property_member_minimum_reinforcement_percentage, property_member_total_minimum_percentage_reinforcement_area, property_member_minimum_shear_reinforcement, property_member_use_compression_longitudinal_reinforcement_for_maximum_stirrup_spacing, property_member_compression_longitudinal_reinforcement_for_maximum_stirrup_spacing, property_member_minimum_construction_reinforcement, property_member_design_check_for_tensile_force_in_longitudinal_reinforcement)
Sets Detailing and particular rules

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_minimum_longitudinal_reinforcement | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| property_member_user_defined_minimum_longitudinal_reinforcement_area | <code>Boolean</code> | User-defined minimum longitudinal reinforcement area, can be undefined (is not set, true as default) |
| property_member_minimum_reinforcement_area | <code>Boolean</code> | Minimum reinforcement area, can be undefined (is not set, true as default) |
| property_member_top_minimum_reinforcement_area | <code>Number</code> | Top reinforcement area, can be undefined (is not set, 0.0 as default) |
| property_member_bottom_minimum_reinforcement_area | <code>Number</code> | Bottom reinforcement area, can be undefined (is not set, 0.0 as default) |
| property_member_total_minimum_reinforcement_area | <code>Number</code> | Total reinforcement area, can be undefined (is not set, 0.0 as default) |
| property_member_minimum_reinforcement_percentage | <code>Boolean</code> | Minimum reinforcement percentage |
| property_member_total_minimum_percentage_reinforcement_area | <code>Number</code> | Total reinforcement area, can be undefined (is not set, 0.0 as default) |
| property_member_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement acc. to standard, can be undefined (is not set, true as default) |
| property_member_use_compression_longitudinal_reinforcement_for_maximum_stirrup_spacing | <code>Boolean</code> | Compression longitudinal reinforcement for maximum stirrup spacing acc. to 9.2.1.2(3), can be undefined (is not set, false as default) |
| property_member_compression_longitudinal_reinforcement_for_maximum_stirrup_spacing | <code>String</code> | Considered longitudinal reinforcement (MAXIMUM_STIRRUP_SPACING_REQUIRED, MAXIMUM_STIRRUP_SPACING_PROVIDED), can be undefined (is not set, MAXIMUM_STIRRUP_SPACING_REQUIRED as default) |
| property_member_minimum_construction_reinforcement | <code>Boolean</code> | Minimum construction reinforcement acc. to 9.2.1.2(1), 9.2.1.4(1). Requires design support of the type ‘Concrete’ with a monolithic connection to calculate the design check. Can be undefined (is not set, true as default) |
| property_member_design_check_for_tensile_force_in_longitudinal_reinforcement | <code>Boolean</code> | Design check for tensile force in longitudinal reinforcement, including tension due to shear acc. to 9.2.1.3(2), can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_RequiredShearReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_RequiredShearReinforcement(shear_reinforcement)
Sets Required Shear Reinforcement - Shear Capacity

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| shear_reinforcement | <code>String</code> | Use required longitudinal reinforcement (REQUIRED)                                       Use provided longitudinal reinforcement (PROVIDED)                                      Automatically increase required longitudinal reinf. to avoid shear reinf. (AUTOMATICALLY) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_ShearJoint"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_ShearJoint(property_member_shear_joint_design, analysis_method, property_member_shear_joint_fatigue_or_dynamic_loads, property_member_shear_joint_normal_stress_across_joint_surfaces, property_member_shear_joint_design_of_flange_connections_on_segmented_cross_sections)
Sets Shear Joint

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_shear_joint_design | <code>Boolean</code> | Design of shear joint, can be undefined (is not set, true as default) |
| analysis_method | <code>String</code> | Analytical with shear force Vz,Ed and β-factor acc. to Eq. 6.24 (Mz,Ed not considered) (ANALYTICAL_WITH_SHEAR_FORCE) or                                                                                                          General integration of axial stresses into section parts (GENERAL_INTEGRATION_OF_AXIAL_STRESSES) |
| property_member_shear_joint_fatigue_or_dynamic_loads | <code>Boolean</code> | Fatigue or dynamic loads acc. to 6.2.5 (5), can be undefined (is not set, false as default) |
| property_member_shear_joint_normal_stress_across_joint_surfaces | <code>Number</code> | Normal stress across joint surfaces (tension negative), can be undefined (0.0 as default) |
| property_member_shear_joint_design_of_flange_connections_on_segmented_cross_sections | <code>Boolean</code> | Design of flange connections on segmented cross-sections, can be undefined (false as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_NeutralAxisDepthLimitation"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation)
Sets Neutral Axis Depth Limitation

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider neutral axis depth limitation acc. to 5.6.2(2), 5.6.3(2), can be undefined (is not set, false as default) |
| property_member_value_of_neutral_axis_depth_limitation | <code>Number</code> | Value of neutral axis depth limitation, can be undefined (is not set, 0.45 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_CalculationSetting"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_CalculationSetting(property_member_net_concrete_area)
Sets Calculation setting

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_net_concrete_area | <code>Boolean</code> | Net concrete area, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetMembers_FiberConcrete"></a>

### concreteDesignUltimateConfigurationEN.SetMembers\_FiberConcrete(fiber_concrete_effect, property_member_fiber_concrete_material_model_for_tension_strains, property_member_fiber_concrete_size_factor_kfg_calculate_from_tension_area)
Sets Fiber Concrete

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| fiber_concrete_effect | <code>String</code> | Fiber concrete effect, can be undefined (is not set, BENDING_AND_SHEAR_DESIGN as default)                                                                                          - In bending and shear design (BENDING_AND_SHEAR_DESIGN)                                                                                          - In torsion design (TORSION_DESIGN) |
| property_member_fiber_concrete_material_model_for_tension_strains | <code>\*</code> | Material model for tension strains (SDL1, SDL2, SDL3), can be undefined (is not set, SDL1 as default) |
| property_member_fiber_concrete_size_factor_kfg_calculate_from_tension_area | <code>\*</code> | Size factor κfG calculated from tension area Afct, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetStability_SlendernessAboutY"></a>

### concreteDesignUltimateConfigurationEN.SetStability\_SlendernessAboutY(property_stability_determine_factor_ay, property_stability_determined_factor_ay, property_stability_determine_factor_by, property_stability_determined_factor_by, property_stability_determine_factor_cy, property_stability_determined_factor_cy)
Sets Limiting slenderness about y-axis

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_determine_factor_ay | <code>Boolean</code> | Determine factor Ay, can be undefined (is not set, false as default) |
| property_stability_determined_factor_ay | <code>Number</code> | Determined factor Ay, can be undefined (is not set, 0.7 as default) |
| property_stability_determine_factor_by | <code>Boolean</code> | Determine factor By, can be undefined (is not set, false as default) |
| property_stability_determined_factor_by | <code>Number</code> | Determined factor By, can be undefined (is not set, 1.1 as default) |
| property_stability_determine_factor_cy | <code>Boolean</code> | Determine factor Cy, can be undefined (is not set, false as default) |
| property_stability_determined_factor_cy | <code>Number</code> | Determined factor Cy, can be undefined (is not set, 0.7 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetStability_SlendernessAboutZ"></a>

### concreteDesignUltimateConfigurationEN.SetStability\_SlendernessAboutZ(property_stability_determine_factor_az, property_stability_determined_factor_az, property_stability_determine_factor_bz, property_stability_determined_factor_bz, property_stability_determine_factor_cz, property_stability_determined_factor_cz)
Sets Limiting slenderness about z-axis

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_determine_factor_az | <code>Boolean</code> | Determine factor Az, can be undefined (is not set, false as default) |
| property_stability_determined_factor_az | <code>Number</code> | Determined factor Az, can be undefined (is not set, 0.7 as default) |
| property_stability_determine_factor_bz | <code>Boolean</code> | Determine factor Bz, can be undefined (is not set, false as default) |
| property_stability_determined_factor_bz | <code>Number</code> | Determined factor Bz, can be undefined (is not set, 1.1 as default) |
| property_stability_determine_factor_cz | <code>Boolean</code> | Determine factor Cz, can be undefined (is not set, false as default) |
| property_stability_determined_factor_cz | <code>Number</code> | Determined factor Cz, can be undefined (is not set, 0.7 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetStability_LoadDistribution"></a>

### concreteDesignUltimateConfigurationEN.SetStability\_LoadDistribution(property_stability_structural_system_of_isolated_columns, property_stability_number_of_effective_columns)
Sets Load Distribution

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_structural_system_of_isolated_columns | <code>Boolean</code> | Structural system of isolated columns, can be undefined (is not set, true as default) |
| property_stability_number_of_effective_columns | <code>Boolean</code> | Number of effective columns, can be undefined (is not set, 2 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetStability_BiaxialBending"></a>

### concreteDesignUltimateConfigurationEN.SetStability\_BiaxialBending(property_stability_separate_design_in_each_principal_direction_acc_5_8_9, property_stability_use_simplified_criterion_acc_5_39)
Sets Biaxial Bending

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_separate_design_in_each_principal_direction_acc_5_8_9 | <code>Boolean</code> | Separate design in each principal direction acc. to 5.8.9, can be undefined (is not set, false as default) |
| property_stability_use_simplified_criterion_acc_5_39 | <code>Boolean</code> | Use simplified criterion acc. to Equation 5.39, can be undefined (is not set, false as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetStability_RequiredReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetStability\_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)
Sets Required Reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, UNIFORMLY_SURROUNDING as default) |
| reinforcement_diameter_for_preliminary_design_user_value | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user number value), can be undefined (is not set, MAX_OF_ALL as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_DesignMethod"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_DesignMethod(optimization_type)
Sets Design method

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| optimization_type | <code>String</code> | Design method optimization type, can be undefined (is not set, YES as default)                                      - No optimization of design internal forces (NO)                                      - Optimization of design internal forces (YES) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_InternalForcesDiagramUsedForDesign"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)
Sets Internal Forces Diagram Used for Design

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_subtraction_of_rib_components | <code>Boolean</code> | Subtraction of rib components for the ULS calculation and for the analytic method of SLS calculation, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_MinimumLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi)
Sets Minimum longitudinal reinforcement acc. to standard

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_longitudinal_reinforcement_acc_to_standard | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| reinforcement_type | <code>String</code> | Minimum longitudinal reinforcement acc. to standard type, can be undefined (is not set, PLATES as default)                                                                                  - Minimum longitudinal reinforcement for plates acc. to 9.3.1 (PLATES)                                                                                     - Minimum longitudinal reinforcement for walls acc. to 9.6 (WALLS) |
| min_reinforcement_direction | <code>String</code> | Direction of minimum reinforcement, can be undefined (is not set, MAIN_TENSION_ELEMENT as default)                                                                                     - Direction with main tension in the element (MAIN_TENSION_ELEMENT)                                                                                     - Direction with main tension in the surface (MAIN_TENSION_SURFACE)                                                                                     - Defined (DEFINED) |
| min_reinforcement_direction_user_values | <code>Array</code> | User-defined direction of minimum reinforcement ([φ1(-z), φ2(-z), φ1(+z), φ2(+z)]), can be undefined (if not set, all values are true by default) |
| main_compression_reinforcement_direction | <code>String</code> | Direction of main compression reinforcement, can be undefined (is not set, WITH_MAIN_COMPRESSION_FORCE as default)                                                                                  - Reinforcement direction with the main compression force (WITH_MAIN_COMPRESSION_FORCE)                                                                                  - Defined in reinforcement direction (DEFINED_IN_REINFORCEMENT_DIRECTION) |
| property_surface_reinforcement_defined_direction_phi | <code>String</code> | Reinforcement direction (PHI_1, PHI_2) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)
Sets User-defined minimum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined minimum longitudinal reinforcement percentage, can be undefined (is not set, false as default) |
| property_minimum_reinforcement | <code>Number</code> | Minimum reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_secondary_reinforcement | <code>Number</code> | Minimum secondary reinforcement from main reinforcement direction, can be undefined (is not set, 20% as default) |
| property_minimum_tension_reinforcement | <code>Number</code> | Minimum tension reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_compression_reinforcement | <code>Number</code> | Minimum compression reinforcement, can be undefined (is not set, 0% as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_MaximumLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_MaximumLongitudinalReinforcement(property_maximum_longitudinal_reinforcement_acc_to_standard, reinforcement_type)
Sets Maximum longitudinal reinforcement acc. to standard

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_maximum_longitudinal_reinforcement_acc_to_standard | <code>Boolean</code> | Maximum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| reinforcement_type | <code>String</code> | Maximum longitudinal reinforcement type, can be undefined (is not set, PLATES as default)                                                                                  - Maximum longitudinal reinforcement for plates acc. to 9.3.1 (PLATES)                                                                                  - Maximum longitudinal reinforcement for walls acc. to 9.6 (WALLS) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)
Sets User-defined maximum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_maximum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined maximum longitudinal reinforcement percentage, can be undefined (is not set, true as default) |
| property_user_defined_maximum_longitudinal_reinforcement_percentage_value | <code>Number</code> | Maximum reinforcement, can be undefined (is not set, 4% as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_MinimumShearReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_MinimumShearReinforcement(property_minimum_shear_reinforcement)
Sets Minimum shear reinforcement acc. to 9.3.2

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)
Sets User-defined minimum shear reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_shear_reinforcement_percentage | <code>Boolean</code> | Minimum shear reinforcement percentage, can be undefined (is not set, false as default) |
| property_user_defined_minimum_shear_reinforcement_percentage_value | <code>Number</code> | Minimum reinforcement, can be undefined, can be undefined (is not set, 0% as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_RequiredLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_RequiredLongitudinalReinforcement(property_surface_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement)
Sets Required Longitudinal Reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_surface_include_tensile_force_due_to_shear_in_required_longitudinal_reinforcement | <code>Boolean</code> | Include tensile force due to shear in required longitudinal reinforcement, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_RequiredShearReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_RequiredShearReinforcement(required_shear_reinforcement)
Sets Required Shear Reinforcement - Shear Capacity

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| required_shear_reinforcement | <code>String</code> | Required Shear Reinforcement value, can be undefined (is not set, REQUIRED as default)                                                  - Use required longitudinal reinforcement (REQUIRED)                                                  - Use provided longitudinal reinforcement (PROVIDED)                                                  - Automatically increase required longitudinal reinf. to avoid shear reinf. (AUTOMATICALLY) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_NeutralAxisDepthLimitation"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_NeutralAxisDepthLimitation(property_surface_consider_neutral_axis_depth_limitation, property_surface_value_of_neutral_axis_depth_limitation)
Sets Neutral Axis Depth Limitation

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_surface_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider neutral axis depth limitation acc. to 5.6.2(2), 5.6.3(2), can be undefined (true as default) |
| property_surface_value_of_neutral_axis_depth_limitation | <code>Number</code> | Value of neutral axis depth limitation, can be undefined (is not set, 0.45 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetSurfaces_FiberConcrete"></a>

### concreteDesignUltimateConfigurationEN.SetSurfaces\_FiberConcrete(property_surface_fiber_concrete_material_model_for_tension_strains, property_surface_fiber_concrete_model_for_compression, property_surface_fiber_concrete_material_model)
Sets Fiber Concrete

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_surface_fiber_concrete_material_model_for_tension_strains | <code>String</code> | Concrete - Material model for tension strains (SDL1, SDL2, SDL3), can be undefined (is not set, SDL1 as default) |
| property_surface_fiber_concrete_model_for_compression | <code>String</code> | Concrete - Model for compression (PARABOLIC_RECTANGULAR, MODEL_PARABOLIC), can be undefined (is not set, PARABOLIC_RECTANGULAR as default) |
| property_surface_fiber_concrete_material_model | <code>String</code> | Reinforcement - Material model (BILINEAR_HARDENING, BILINEAR_YIELDING), can be undefined (is not set, BILINEAR_HARDENING as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_StructuralElement"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_StructuralElement(property_node_structure_element_type)
Sets Structural Element

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_structure_element_type | <code>String</code> | Structural element type (AUTO, SLAB, FOUNDATION), can be undefined (is not set, AUTO as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_PunchingLoadForColumns"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_PunchingLoadForColumns(property_node_used_punching_load_for_columns, property_node_used_defined_value_of_punching_force, property_node_direction_of_punching_force, property_node_used_punching_load_inside_critical_perimeter_for_columns, property_user_defined_load_inside_critical_perimeter_factor_for_columns, property_node_load_inside_critical_perimeter_factor_for_columns)
Sets Punching Load - Columns

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_used_punching_load_for_columns | <code>String</code> | Used punching load for columns (SINGLE_FORCE, SMOOTHED_SHEAR_FORCE, UNSMOOTHED_SHEAR_FORCE, USER_DEFINED), can be undefined (is not set, SINGLE_FORCE as default) |
| property_node_used_defined_value_of_punching_force | <code>Number</code> | User defined value of punching force, can be undefined (is not set, 100 kN as default) |
| property_node_direction_of_punching_force | <code>String</code> | Direction of punching force (DETERMINE, PLUS_Z, MINUS_Z), can be undefined (is not set, DETERMINE as default) |
| property_node_used_punching_load_inside_critical_perimeter_for_columns | <code>Boolean</code> | Consider surface load inside critical perimeter, can be undefined (is not set, false as default) |
| property_user_defined_load_inside_critical_perimeter_factor_for_columns | <code>Boolean</code> | User-defined surface load inside critical perimeter, can be undefined (is not set, false as default) |
| property_node_load_inside_critical_perimeter_factor_for_columns | <code>Number</code> | User-defined Load inside critical perimeter factor for columns, can be undefined (is not set, 10 kn/m2 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_PunchingLoadForWalls"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_PunchingLoadForWalls(property_node_used_punching_load_for_walls, property_node_used_punching_load_inside_critical_perimeter_for_walls, property_user_defined_load_inside_critical_perimeter_factor_for_walls, property_node_load_inside_critical_perimeter_factor_for_walls)
Sets Punching Load - Walls

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_used_punching_load_for_walls | <code>String</code> | Used punching load for walls, can be undefined (is not set, SMOOTHED_SHEAR_FORCE as default) |
| property_node_used_punching_load_inside_critical_perimeter_for_walls | <code>Boolean</code> | Consider surface load inside critical perimeter, can be undefined (is not set, false as default) |
| property_user_defined_load_inside_critical_perimeter_factor_for_walls | <code>Boolean</code> | User-defined surface load inside critical perimeter, can be undefined (is not set, false as default) |
| property_node_load_inside_critical_perimeter_factor_for_walls | <code>Number</code> | User-defined load inside critical perimeter factor for walls, can be undefined (is not set, 12 kN/m2 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_DeductibleSurfaceLoadForSlab"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_DeductibleSurfaceLoadForSlab(property_node_deductible_surface_load_for_slab, surface_load_for_slab_type, property_node_deductible_portion_for_slab, property_node_deductible_portion_for_slab_user_defined_value, property_node_distance_deductible_surface, property_node_multiple_static_depth_for_slab)
Sets Punching load - Deductible surface load for slab

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_deductible_surface_load_for_slab | <code>Boolean</code> | Deductible surface load for slab, can be undefined (is not set, false as default) |
| surface_load_for_slab_type | <code>String</code> | Used punching load for walls (AUTOMATICALLY, USER_DEFINED), can be undefined (is not set, AUTOMATICALLY as default) |
| property_node_deductible_portion_for_slab | <code>Number</code> | Deductible portion, can be undefined (is not set, 100% as default) |
| property_node_deductible_portion_for_slab_user_defined_value | <code>Number</code> | User-defined deductible portion for slab value, can be undefined (is not set, 10 kN/m2 as default) |
| property_node_distance_deductible_surface | <code>String</code> | Distance of deductible surface (L_W_OUT, K_D), can be undefined (is not set, L_W_OUT as default) |
| property_node_multiple_static_depth_for_slab | <code>String</code> | Multiple static depth (k * d), can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_LoadedAreaOfPunchingNode"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_LoadedAreaOfPunchingNode(property_node_define_loaded_area_for_punching_node_type_column, property_node_shape_of_loaded_area, shape_parameters, property_node_define_wall_thicknesses_for_punching_node_type_wall, property_node_wall_thickness_1, property_node_wall_thickness_2)
Sets Loaded Area of Punching Node

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_define_loaded_area_for_punching_node_type_column | <code>Boolean</code> | Define loaded area for punching node type "Column", can be undefined (is not set, false as default) |
| property_node_shape_of_loaded_area | <code>String</code> | Shape of loaded area (RECTANGULAR, CIRCULAR), can be undefined (is not set, RECTANGULAR as default) |
| shape_parameters | <code>Array</code> | [Width in direction x, Width in direction y, Rotation] array for RECTANGULAR shape of loaded area                                                                                      - [Diameter] array for CIRCULAR shape of loaded area |
| property_node_define_wall_thicknesses_for_punching_node_type_wall | <code>Boolean</code> | Define wall thicknesses for punching node type "Wall", can be undefined (is not set, false as default) |
| property_node_wall_thickness_1 | <code>Number</code> | Wall thickness 1 (Wall End, Wall Corner), can be undefined (is not set, 0.24 m as default) |
| property_node_wall_thickness_2 | <code>Number</code> | Wall thickness 2 (Wall Corner), can be undefined (is not set, 0.2 m as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_BasicControlPerimeter"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_BasicControlPerimeter(property_node_define_critical_section_for_slab, property_node_distance)
Sets Basic control perimeter

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_define_critical_section_for_slab | <code>Boolean</code> | Define critical section for slab, can be undefined (is not set, false as default) |
| property_node_distance | <code>Number</code> | Distance, can be undefined (is not set, 0.29 m as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_MeanEffectiveDepth"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_MeanEffectiveDepth(property_node_define_region_of_detection_of_effective_depth, property_node_distance_from_loading_area, property_node_column_penetration, property_node_penetration_on_top_side, property_node_penetration_on_bottom_side)
Sets Mean effective depth

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_define_region_of_detection_of_effective_depth | <code>Boolean</code> | The minimum effective depth is used for the calculation in this area, can be undefined (is not set, false as default) |
| property_node_distance_from_loading_area | <code>Number</code> | Distance from loading area, can be undefined (is not set, 0.5 m as default) |
| property_node_column_penetration | <code>Boolean</code> | Column penetration reduces mean effective depth, can be undefined (is not set, false as default) |
| property_node_penetration_on_top_side | <code>Number</code> | Penetration on top side (-z), can be undefined (is not set, 0.02 m as default) |
| property_node_penetration_on_bottom_side | <code>Number</code> | Penetration on bottom side (+z), can be undefined (is not set, 0.02 m as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_PunchingShearReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_PunchingShearReinforcement(property_node_punch_s_r_min, property_node_define_perimeter, property_node_define_sections_for_analysis_of_punching_shear_reinforcement, property_node_number_of_inner_control_perimeters, property_node_define_distance_to_loaded_area, property_node_first_distance, property_node_radial_spacing, property_node_define_outer_control_perimeter, property_node_distance_of_outer_control_perimeter_to_loaded_area)
Sets Punching shear reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_punch_s_r_min | <code>Number</code> | Minimum Spacing of Reinforcement Perimeters, can be undefined (is not set, 0.1 m as default) |
| property_node_define_perimeter | <code>Boolean</code> | Define perimeter, can be undefined (is not set, false as default) |
| property_node_define_sections_for_analysis_of_punching_shear_reinforcement | <code>Boolean</code> | Define sections for analysis of punching shear reinforcement, can be undefined (is not set, false as default) |
| property_node_number_of_inner_control_perimeters | <code>Number</code> | Number of inner control perimeter, can be undefined (is not set, 2 as default) |
| property_node_define_distance_to_loaded_area | <code>Boolean</code> | Distance to load area, can be undefined (is not set, false as default) |
| property_node_first_distance | <code>Number</code> | 1st distance, can be undefined (is not set, 0.3 m as default) |
| property_node_radial_spacing | <code>Number</code> | Radial spacing, can be undefined (is not set, 0.2 m as default) |
| property_node_define_outer_control_perimeter | <code>Boolean</code> | Define outer control perimeter, can be undefined (is not set, false as default) |
| property_node_distance_of_outer_control_perimeter_to_loaded_area | <code>Number</code> | Distance to load area, can be undefined (is not set, 2 m as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_AdditionalParameters"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_AdditionalParameters(property_node_variable_thickness_definition, property_node_reference_surfaces_thickness, property_node_reference_surface_no)
Sets Additional Parameters

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_variable_thickness_definition | <code>String/Number</code> | Definition of variable thickness (AUTO or user-defined number), can be undefined (is not set, AUTO as default) |
| property_node_reference_surfaces_thickness | <code>String/Number</code> | Thickness of reference surfaces (MINIMUM_THICKNESS, MAXIMUM_THICKNESS, SELECTED or user-defined value), can be undefined (is not set, MINIMUM_THICKNESS as default) |
| property_node_reference_surface_no | <code>Number</code> | Reference surface No., can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_AxialForceDefinition"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_AxialForceDefinition(property_node_axial_force)
Sets Axial Force Definition

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_axial_force | <code>String/Number</code> | Axial force (DETERMINE or user-value magnitude), can be undefined (is not set, DETERMINE as default) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_RequiredPunchingReinforcement_PunchingShareCapacity"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_RequiredPunchingReinforcement\_PunchingShareCapacity(reinforcement_type)
Sets Required Punching Reinforcement - Punching Shear Capacity

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| reinforcement_type | <code>String</code> | Required Punching Reinforcement - Punching Shear Capacity (REQUIRED, PROVIDED, CALCULATED), can be undefined (is not set, CALCULATED as default)                                      - Use required longitudinal reinforcement (REQUIRED)                                      - Use provided longitudinal reinforcement (PROVIDED)                                      - Calculate required longitudinal reinforcement to avoid punching reinforcement or fulfill Eq. 6.52 (CALCULATED) |

<a name="ConcreteDesignUltimateConfigurationEN+SetPunching_MinimumReinforcement"></a>

### concreteDesignUltimateConfigurationEN.SetPunching\_MinimumReinforcement(property_node_minimum_punching_reinforcement)
Sets Minimum Reinforcement Acc. to Standard

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationEN</code>](#ConcreteDesignUltimateConfigurationEN)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_minimum_punching_reinforcement | <code>Boolean</code> | Minimum punching reinforcement acc. to 9.4.3(2), can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationSP"></a>

## ConcreteDesignUltimateConfigurationSP
**Kind**: global class  

* [ConcreteDesignUltimateConfigurationSP](#ConcreteDesignUltimateConfigurationSP)
    * [new ConcreteDesignUltimateConfigurationSP(no, surfaces_no, members_no, nodes_no, comment, params)](#new_ConcreteDesignUltimateConfigurationSP_new)
    * [.GetNo()](#ConcreteDesignUltimateConfigurationSP+GetNo) ⇒
    * [.GetUltimateConfiguration()](#ConcreteDesignUltimateConfigurationSP+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#ConcreteDesignUltimateConfigurationSP+SetName)
    * [.SetMembers_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)](#ConcreteDesignUltimateConfigurationSP+SetMembers_ConsiderInternalForces)
    * [.SetMembers_FactorsOfConcreteServiceConditions(property_member_effect_of_loading_duration, property_member_placing_concrete_in_vertical_position, property_member_cellular_concretes_in_dependence_on_moisture_content, property_member_alternate_of_freezing_and_thawing)](#ConcreteDesignUltimateConfigurationSP+SetMembers_FactorsOfConcreteServiceConditions)
    * [.SetMembers_InternalForceReductionZ(property_member_reduction_of_the_shear_forces_in_the_support_face_and_distance, property_member_consideration_of_minimum_eccentricity)](#ConcreteDesignUltimateConfigurationSP+SetMembers_InternalForceReductionZ)
    * [.SetMembers_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design)](#ConcreteDesignUltimateConfigurationSP+SetMembers_RequiredLongitudinalReinforcement)
    * [.SetMembers_DesignSectionsTypesForShearAndTorsionDesignChecks(section_type)](#ConcreteDesignUltimateConfigurationSP+SetMembers_DesignSectionsTypesForShearAndTorsionDesignChecks)
    * [.SetMembers_RequiredReinforcementMomentInInclinedSection(property_member_designed_type_of_reinforcement, property_member_used_reinforcement_for_moment_resistance)](#ConcreteDesignUltimateConfigurationSP+SetMembers_RequiredReinforcementMomentInInclinedSection)
    * [.SetMembers_MinimumReinforcement(property_member_minimum_longitudinal_reinforcement, property_member_minimum_shear_reinforcement)](#ConcreteDesignUltimateConfigurationSP+SetMembers_MinimumReinforcement)
    * [.SetMembers_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)](#ConcreteDesignUltimateConfigurationSP+SetMembers_NeutralAxisDepthLimitation)
    * [.SetMembers_CalculationSetting(property_member_nett_concrete_area)](#ConcreteDesignUltimateConfigurationSP+SetMembers_CalculationSetting)
    * [.SetStability_Slenderness(property_stability_limiting_slenderness_y, property_stability_limiting_slenderness_z)](#ConcreteDesignUltimateConfigurationSP+SetStability_Slenderness)
    * [.SetStability_MembersWithRectangularSectionAndLowSlenderness(property_stability_limit_value_of_inner_normal_force)](#ConcreteDesignUltimateConfigurationSP+SetStability_MembersWithRectangularSectionAndLowSlenderness)
    * [.SetStability_BiaxialBending(property_stability_separate_design_in_each_principal_direction, property_stability_use_simplified_criterion_for_biaxial_bending, property_stability_use_interaction_curves_method)](#ConcreteDesignUltimateConfigurationSP+SetStability_BiaxialBending)
    * [.SetStability_LoadDirections(property_stability_vertical_load_horizontal_load_ratio_in_y_direction, property_stability_vertical_load_horizontal_load_ratio_in_z_direction)](#ConcreteDesignUltimateConfigurationSP+SetStability_LoadDirections)
    * [.SetStability_LongTermLoadComponent(property_stability_ratio_long_term_total_load_in_y_direction, property_stability_ratio_long_term_total_load_in_z_direction)](#ConcreteDesignUltimateConfigurationSP+SetStability_LongTermLoadComponent)
    * [.SetStability_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)](#ConcreteDesignUltimateConfigurationSP+SetStability_RequiredReinforcement)
    * [.SetSurfaces_DesignMethod(optimization_type)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_DesignMethod)
    * [.SetSurfaces_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_InternalForcesDiagramUsedForDesign)
    * [.SetSurfaces_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_MinimumLongitudinalReinforcement)
    * [.SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage)
    * [.SetSurfaces_MinimumShearReinforcement(property_minimum_shear_reinforcement)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_MinimumShearReinforcement)
    * [.SetSurfaces_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage)
    * [.SetSurfaces_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)](#ConcreteDesignUltimateConfigurationSP+SetSurfaces_NeutralAxisDepthLimitation)
    * [.SetPunching_PunchingLoad(property_node_used_punching_load_for_columns, property_node_direction_of_punching_force_for_columns, property_node_used_punching_load_for_walls, property_node_direction_of_punching_force_for_walls, property_node_distance_to_perimeter_used_for_integration_for_columns, property_node_distance_to_perimeter_used_for_integration_for_walls)](#ConcreteDesignUltimateConfigurationSP+SetPunching_PunchingLoad)
    * [.SetPunching_AdditionalParameters_Perimeter(property_node_define_perimeter, property_node_distance, property_node_define_iterative_critical_section_for_foundation, property_node_distance_of_iterative_critical_section_for_foundation_to_loaded_area, property_node_define_sections_for_analysis_of_punching_shear_reinforcement, property_node_number_of_inner_control_perimeters, property_node_define_distance_to_loaded_area, property_node_first_distance, property_node_radial_spacing, property_node_define_outer_control_perimeter, property_node_distance_of_outer_control_perimeter_to_loaded_area)](#ConcreteDesignUltimateConfigurationSP+SetPunching_AdditionalParameters_Perimeter)
    * [.SetPunching_AdditionalParameters_Thickness(property_node_variable_thickness_definition, property_node_reference_surfaces_thickness, property_node_reference_surface_no)](#ConcreteDesignUltimateConfigurationSP+SetPunching_AdditionalParameters_Thickness)
    * [.SetPunching_NeutralAxisDepthLimitation(property_node_consider_neutral_axis_depth_limitation, property_node_value_of_neutral_axis_depth_limitation)](#ConcreteDesignUltimateConfigurationSP+SetPunching_NeutralAxisDepthLimitation)

<a name="new_ConcreteDesignUltimateConfigurationSP_new"></a>

### new ConcreteDesignUltimateConfigurationSP(no, surfaces_no, members_no, nodes_no, comment, params)
Creates Concrete design ultimate configuration (SP standard)


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate configuration number, can be undefined |
| surfaces_no | <code>Array</code> | Assigned surfaces numbers, can be undefined |
| members_no | <code>Array</code> | Assigned members numbers, can be undefined |
| nodes_no | <code>Array</code> | Assigned nodes numbers, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="ConcreteDesignUltimateConfigurationSP+GetNo"></a>

### concreteDesignUltimateConfigurationSP.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  
**Returns**: Ultimate Configuration index  
<a name="ConcreteDesignUltimateConfigurationSP+GetUltimateConfiguration"></a>

### concreteDesignUltimateConfigurationSP.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  
**Returns**: Ultimate Configuration object  
<a name="ConcreteDesignUltimateConfigurationSP+SetName"></a>

### concreteDesignUltimateConfigurationSP.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Ultimate configuration name, can be undefined |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_ConsiderInternalForces"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_ConsiderInternalForces(property_member_axial_forces, property_member_bending_moments_my, property_member_bending_moments_mz, property_member_torsional_moments, property_member_shear_forces_vy, property_member_shear_forces_vz)
Sets Consider internal forces for concrete design

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_axial_forces | <code>Boolean</code> | Axial forces, can be undefined (is not set, true as default) |
| property_member_bending_moments_my | <code>Boolean</code> | Bending moment in Y, can be undefined (is not set, true as default) |
| property_member_bending_moments_mz | <code>Boolean</code> | Bending moment in Z, can be undefined (is not set, true as default) |
| property_member_torsional_moments | <code>Boolean</code> | Torsional moments, can be undefined (is not set, true as default) |
| property_member_shear_forces_vy | <code>Boolean</code> | Shear forces in Y, can be undefined (is not set, true as default) |
| property_member_shear_forces_vz | <code>Boolean</code> | Shear forces in Z, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_FactorsOfConcreteServiceConditions"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_FactorsOfConcreteServiceConditions(property_member_effect_of_loading_duration, property_member_placing_concrete_in_vertical_position, property_member_cellular_concretes_in_dependence_on_moisture_content, property_member_alternate_of_freezing_and_thawing)
Sets Factors of Concrete Service Conditions Acc. to 6.1.12

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_effect_of_loading_duration | <code>Boolean</code> | a) effect of loading duration | γb1, can be undefined (is not set, false as default) |
| property_member_placing_concrete_in_vertical_position | <code>Boolean</code> | c) placing concrete in vertical position (depth of layer 1.5m) | γb3, can be undefined (is not set, false as default) |
| property_member_cellular_concretes_in_dependence_on_moisture_content | <code>Boolean</code> | d) cellular concretes in dependence on moisture content | γb4, can be undefined (is not set, false as default) |
| property_member_alternate_of_freezing_and_thawing | <code>Boolean</code> | e) alternate of freezing and thawing | γb5, can be undefined (is not set, false as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_InternalForceReductionZ"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_InternalForceReductionZ(property_member_reduction_of_the_shear_forces_in_the_support_face_and_distance, property_member_consideration_of_minimum_eccentricity)
Sets Reductions of Internal Forces in z-Direction

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_reduction_of_the_shear_forces_in_the_support_face_and_distance | <code>Boolean</code> | Reduction of the shear forces in the support face and distance ccrit, can be undefined (is not set, true as default) |
| property_member_consideration_of_minimum_eccentricity | <code>Boolean</code> | Consideration of minimum eccentricity acc. to 7.1.7, can be undefined (is not set, false as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_RequiredLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_RequiredLongitudinalReinforcement(property_member_reinforcement_layout, property_member_reinforcement_diameter_for_preliminary_design)
Sets Required longitudinal reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_OPTIMIZED_DISTRIBUTION, TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT, OPTIMIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, OPTIMIZED_PROVIDED_REINFORCEMENT as default) |
| property_member_reinforcement_diameter_for_preliminary_design | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user-defined value), can be undefined (is not set as default, otherwise MAX_OF_ALL as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_DesignSectionsTypesForShearAndTorsionDesignChecks"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_DesignSectionsTypesForShearAndTorsionDesignChecks(section_type)
Sets Types of Design Sections for Shear and Torsion Design Checks

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| section_type | <code>String</code> | Type of Design Sections for Shear and Torsion Design Checks, can be undefined (is not set, INCLINED_SECTION as default)                                  - Inclined section acc. to Eq. 8.56 / Spatial section acc. to Eq. 8.67 (INCLINED_SECTION)                                  - Normal section acc. to Eq. 8.60 / Simplified criterium acc. to Eq. 8.75 (NORMAL_SECTION) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_RequiredReinforcementMomentInInclinedSection"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_RequiredReinforcementMomentInInclinedSection(property_member_designed_type_of_reinforcement, property_member_used_reinforcement_for_moment_resistance)
Sets Required Reinforcement - Moment in Inclined Section Acc. to 8.1.35

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_designed_type_of_reinforcement | <code>String</code> | Designed type of reinforcement (LONGITUDINAL, TRANSVERSE), can be undefined (is not set, LONGITUDINAL as default) |
| property_member_used_reinforcement_for_moment_resistance | <code>String</code> | Used reinforcement for moment resistance (REQUIRED, PROVIDED), can be undefined (is not set, REQUIRED as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_MinimumReinforcement"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_MinimumReinforcement(property_member_minimum_longitudinal_reinforcement, property_member_minimum_shear_reinforcement)
Sets Minimum Reinforcement Acc. to Standard

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_minimum_longitudinal_reinforcement | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| property_member_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement acc. to standard, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_NeutralAxisDepthLimitation"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)
Sets Sets Depth Limitation of Neutral Axis

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider depth limitation of neutral axis acc. to 8.1.5, 8.1.6, can be undefined (is not set, false as default) |
| property_member_value_of_neutral_axis_depth_limitation_user_value | <code>String/Number</code> | Value of neutral axis depth limitation (AUTOMATICALLY or user number value), can be undefined (is not set, AUTOMATICALLY / 0.800 as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetMembers_CalculationSetting"></a>

### concreteDesignUltimateConfigurationSP.SetMembers\_CalculationSetting(property_member_nett_concrete_area)
Sets Calculation setting

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_nett_concrete_area | <code>Boolean</code> | Net concrete area, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetStability_Slenderness"></a>

### concreteDesignUltimateConfigurationSP.SetStability\_Slenderness(property_stability_limiting_slenderness_y, property_stability_limiting_slenderness_z)
Sets Slenderness

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_limiting_slenderness_y | <code>String/Number</code> | Limiting slenderness about y-axis (DEFINED_AS_STANDARD or user-defined value), can be undefined (is not set, DEFINED_AS_STANDARD as default) |
| property_stability_limiting_slenderness_z | <code>String/Number</code> | Limiting slenderness about z-axis (DEFINED_AS_STANDARD or user-defined value), can be undefined (is not set, DEFINED_AS_STANDARD as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetStability_MembersWithRectangularSectionAndLowSlenderness"></a>

### concreteDesignUltimateConfigurationSP.SetStability\_MembersWithRectangularSectionAndLowSlenderness(property_stability_limit_value_of_inner_normal_force)
Sets Members with Rectangular Section and Low Slenderness

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_limit_value_of_inner_normal_force | <code>Boolean</code> | Limit value of inner normal force acc. to 8.1.16, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetStability_BiaxialBending"></a>

### concreteDesignUltimateConfigurationSP.SetStability\_BiaxialBending(property_stability_separate_design_in_each_principal_direction, property_stability_use_simplified_criterion_for_biaxial_bending, property_stability_use_interaction_curves_method)
Sets Biaxial Bending

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_separate_design_in_each_principal_direction | <code>Boolean</code> | Separate design in each principal direction, can be undefined (is not set, false as default) |
| property_stability_use_simplified_criterion_for_biaxial_bending | <code>Boolean</code> | Use simplified criterion for biaxial bending, can be undefined (is not set, false as default) |
| property_stability_use_interaction_curves_method | <code>Boolean</code> | Use interaction curve method, can be undefined (is not set, false as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetStability_LoadDirections"></a>

### concreteDesignUltimateConfigurationSP.SetStability\_LoadDirections(property_stability_vertical_load_horizontal_load_ratio_in_y_direction, property_stability_vertical_load_horizontal_load_ratio_in_z_direction)
Sets Load directions

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_vertical_load_horizontal_load_ratio_in_y_direction | <code>Number</code> | Vertical load / horizontal load ratio in y-direction, can be undefined (is not set, 0.50 as default) |
| property_stability_vertical_load_horizontal_load_ratio_in_z_direction | <code>Number</code> | Vertical load / horizontal load ratio in z-direction, can be undefined (is not set, 0.50 as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetStability_LongTermLoadComponent"></a>

### concreteDesignUltimateConfigurationSP.SetStability\_LongTermLoadComponent(property_stability_ratio_long_term_total_load_in_y_direction, property_stability_ratio_long_term_total_load_in_z_direction)
Sets Long-term load component

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_ratio_long_term_total_load_in_y_direction | <code>Number</code> | Ratio long-term / total load in y-direction, can be undefined (is not set, 0.50 as default) |
| property_stability_ratio_long_term_total_load_in_z_direction | <code>Number</code> | Ratio long-term / total load in z-direction, can be undefined (is not set, 0.50 as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetStability_RequiredReinforcement"></a>

### concreteDesignUltimateConfigurationSP.SetStability\_RequiredReinforcement(property_stability_reinforcement_layout, reinforcement_diameter_for_preliminary_design_user_value)
Sets Required Reinforcement

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_reinforcement_layout | <code>String</code> | Reinforcement layout (TOP_BOTTOM_SYMMETRICAL_DISTRIBUTION, IN_CORNERS_SYMMETRICAL_DISTRIBUTION, UNIFORMLY_SURROUNDING, FACTORIZED_PROVIDED_REINFORCEMENT), can be undefined (is not set, UNIFORMLY_SURROUNDING as default) |
| reinforcement_diameter_for_preliminary_design_user_value | <code>String/Number</code> | Reinforcement diameter for preliminary design (MAX_OF_ALL or user number value), can be undefined (is not set, MAX_OF_ALL as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_DesignMethod"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_DesignMethod(optimization_type)
Sets Design method

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| optimization_type | <code>String</code> | Design method optimization type, can be undefined (is not set, YES as default)                                      - No optimization of design internal forces (NO)                                      - Optimization of design internal forces (YES) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_InternalForcesDiagramUsedForDesign"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_InternalForcesDiagramUsedForDesign(property_subtraction_of_rib_components)
Sets Internal Forces Diagram Used for Design

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_subtraction_of_rib_components | <code>Boolean</code> | Subtraction of rib components for the ULS calculation and for the analytic method of SLS calculation, can be undefined (true as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_MinimumLongitudinalReinforcement"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_MinimumLongitudinalReinforcement(property_minimum_longitudinal_reinforcement_acc_to_standard, reinforcement_type, min_reinforcement_direction, min_reinforcement_direction_user_values, main_compression_reinforcement_direction, property_surface_reinforcement_defined_direction_phi)
Sets Minimum longitudinal reinforcement acc. to standard

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_longitudinal_reinforcement_acc_to_standard | <code>Boolean</code> | Minimum longitudinal reinforcement acc. to standard, can be undefined (is not set, true as default) |
| reinforcement_type | <code>String</code> | Minimum longitudinal reinforcement acc. to standard type, can be undefined (is not set, PLATES as default)                                                                                  - Minimum longitudinal reinforcement for plates acc. to 10.3.5, 10.3.6 (PLATES)                                                                                     - Minimum longitudinal reinforcement for walls acc. to 10.3.5, 10.3.6 (WALLS) |
| min_reinforcement_direction | <code>String</code> | Direction of minimum reinforcement, can be undefined (is not set, MAIN_TENSION_ELEMENT as default)                                                                                     - Direction with main tension in the element (MAIN_TENSION_ELEMENT)                                                                                     - Direction with main tension in the surface (MAIN_TENSION_SURFACE)                                                                                     - Defined (DEFINED) |
| min_reinforcement_direction_user_values | <code>Array</code> | User-defined direction of minimum reinforcement ([φ1(-z), φ2(-z), φ1(+z), φ2(+z)]), can be undefined (if not set, all values are true by default) |
| main_compression_reinforcement_direction | <code>String</code> | Direction of main compression reinforcement, can be undefined (is not set, WITH_MAIN_COMPRESSION_FORCE as default)                                                                                  - Reinforcement direction with the main compression force (WITH_MAIN_COMPRESSION_FORCE)                                                                                  - Defined in reinforcement direction (DEFINED_IN_REINFORCEMENT_DIRECTION) |
| property_surface_reinforcement_defined_direction_phi | <code>String</code> | Reinforcement direction (PHI_1, PHI_2) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_UserDefinedMinimumLongitudinalReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_UserDefinedMinimumLongitudinalReinforcementPercentage(property_user_defined_minimum_longitudinal_reinforcement_percentage, property_minimum_reinforcement, property_minimum_secondary_reinforcement, property_minimum_tension_reinforcement, property_minimum_compression_reinforcement)
Sets User-defined minimum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined minimum longitudinal reinforcement percentage, can be undefined (is not set, false as default) |
| property_minimum_reinforcement | <code>Number</code> | Minimum reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_secondary_reinforcement | <code>Number</code> | Minimum secondary reinforcement from main reinforcement direction, can be undefined (is not set, 20% as default) |
| property_minimum_tension_reinforcement | <code>Number</code> | Minimum tension reinforcement, can be undefined (is not set, 0% as default) |
| property_minimum_compression_reinforcement | <code>Number</code> | Minimum compression reinforcement, can be undefined (is not set, 0% as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_UserDefinedMaximumLongitudinalReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_UserDefinedMaximumLongitudinalReinforcementPercentage(property_user_defined_maximum_longitudinal_reinforcement_percentage, property_user_defined_maximum_longitudinal_reinforcement_percentage_value)
Sets User-defined maximum longitudinal reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_maximum_longitudinal_reinforcement_percentage | <code>Boolean</code> | User-defined maximum longitudinal reinforcement percentage, can be undefined (is not set, true as default) |
| property_user_defined_maximum_longitudinal_reinforcement_percentage_value | <code>Number</code> | Maximum reinforcement, can be undefined (is not set, 4% as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_MinimumShearReinforcement"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_MinimumShearReinforcement(property_minimum_shear_reinforcement)
Sets Minimum shear reinforcement acc. to 10.3.13

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_minimum_shear_reinforcement | <code>Boolean</code> | Minimum shear reinforcement, can be undefined (is not set, true as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_UserDefinedMinimumShearReinforcementPercentage"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_UserDefinedMinimumShearReinforcementPercentage(property_user_defined_minimum_shear_reinforcement_percentage, property_user_defined_minimum_shear_reinforcement_percentage_value)
Sets User-defined minimum shear reinforcement percentage

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_user_defined_minimum_shear_reinforcement_percentage | <code>Boolean</code> | Minimum shear reinforcement percentage, can be undefined (is not set, false as default) |
| property_user_defined_minimum_shear_reinforcement_percentage_value | <code>Number</code> | Minimum reinforcement, can be undefined, (is not set, 0% as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetSurfaces_NeutralAxisDepthLimitation"></a>

### concreteDesignUltimateConfigurationSP.SetSurfaces\_NeutralAxisDepthLimitation(property_member_consider_neutral_axis_depth_limitation, property_member_value_of_neutral_axis_depth_limitation_user_value)
Sets Neutral Axis Depth Limitation

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_member_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider depth limitation of neutral axis acc. to 8.1.5, 8.1.6, can be undefined (is not set, false as default) |
| property_member_value_of_neutral_axis_depth_limitation_user_value | <code>String/Number</code> | Value of neutral axis depth limitation (AUTOMATICALLY or user number value), can be undefined (is not set, AUTOMATICALLY as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetPunching_PunchingLoad"></a>

### concreteDesignUltimateConfigurationSP.SetPunching\_PunchingLoad(property_node_used_punching_load_for_columns, property_node_direction_of_punching_force_for_columns, property_node_used_punching_load_for_walls, property_node_direction_of_punching_force_for_walls, property_node_distance_to_perimeter_used_for_integration_for_columns, property_node_distance_to_perimeter_used_for_integration_for_walls)
Sets Punching Load

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_used_punching_load_for_columns | <code>String/Number</code> | Used punching load for columns (SINGLE_FORCE, SMOOTHED_SHEAR_FORCE or user-defined value), can be undefined (is not set, SINGLE_FORCE as default) |
| property_node_direction_of_punching_force_for_columns | <code>String</code> | Direction of punching force (DETERMINE, PLUS_Z, MINUS_Z), can be undefined (is not set, DETERMINE as default) |
| property_node_used_punching_load_for_walls | <code>String/Number</code> | Used punching load for walls (SMOOTHED_SHEAR_FORCE or user defined value), can be undefined (is not set, SMOOTHED_SHEAR_FORCE as default) |
| property_node_direction_of_punching_force_for_walls | <code>String</code> | Direction of punching force (DETERMINE, PLUS_Z, MINUS_Z), can be undefined (is not set, DETERMINE as default) |
| property_node_distance_to_perimeter_used_for_integration_for_columns | <code>Number</code> | Distance to perimeter used for integration (k * d), can be undefined (is not set, 2.0 as default) |
| property_node_distance_to_perimeter_used_for_integration_for_walls | <code>Number</code> | Distance to perimeter used for integration (k * d), can be undefined (is not set, 2.0 as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetPunching_AdditionalParameters_Perimeter"></a>

### concreteDesignUltimateConfigurationSP.SetPunching\_AdditionalParameters\_Perimeter(property_node_define_perimeter, property_node_distance, property_node_define_iterative_critical_section_for_foundation, property_node_distance_of_iterative_critical_section_for_foundation_to_loaded_area, property_node_define_sections_for_analysis_of_punching_shear_reinforcement, property_node_number_of_inner_control_perimeters, property_node_define_distance_to_loaded_area, property_node_first_distance, property_node_radial_spacing, property_node_define_outer_control_perimeter, property_node_distance_of_outer_control_perimeter_to_loaded_area)
Sets Additional Parameters - Perimeter

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_define_perimeter | <code>Boolean</code> | Perimeter defined, can be undefined (is not set, false as default) |
| property_node_distance | <code>Number</code> | Distance, can be undefined (is not set, 0.29 as default) |
| property_node_define_iterative_critical_section_for_foundation | <code>Boolean</code> | Define iterative critical section for foundation, can be undefined (is not set, false as default) |
| property_node_distance_of_iterative_critical_section_for_foundation_to_loaded_area | <code>Number</code> | Distance to load area, can be undefined (is not set, 0.29 as default) |
| property_node_define_sections_for_analysis_of_punching_shear_reinforcement | <code>Boolean</code> | Define sections for analysis of punching shear reinforcement, can be undefined (is not set, false as default) |
| property_node_number_of_inner_control_perimeters | <code>Number</code> | Number, can be undefined (is not set, 2 as default) |
| property_node_define_distance_to_loaded_area | <code>Boolean</code> | Distance to load area, can be undefined (is not set, false as default) |
| property_node_first_distance | <code>Number</code> | 1st distance, can be undefined (is not set, 0.3 as default) |
| property_node_radial_spacing | <code>Number</code> | Radial spacing, can be undefined (is not set, 0.2 as default) |
| property_node_define_outer_control_perimeter | <code>Boolean</code> | Define outer control perimeter, can be undefined (is not set, false as default) |
| property_node_distance_of_outer_control_perimeter_to_loaded_area | <code>Number</code> | Distance to load area, can be undefined (2 as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetPunching_AdditionalParameters_Thickness"></a>

### concreteDesignUltimateConfigurationSP.SetPunching\_AdditionalParameters\_Thickness(property_node_variable_thickness_definition, property_node_reference_surfaces_thickness, property_node_reference_surface_no)
Sets Additional Parameters - Thickness

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_variable_thickness_definition | <code>String/Number</code> | Definition of variable thickness (AUTO or user-defined value), can be undefined (is not set, AUTO as default) |
| property_node_reference_surfaces_thickness | <code>String/Number</code> | Thickness of reference surfaces (MINIMUM_THICKNESS, MAXIMUM_THICKNESS, SELECTED or user-defined value), can be undefined (is not set, MINIMUM_THICKNESS as default) |
| property_node_reference_surface_no | <code>Number</code> | Reference surface No., can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignUltimateConfigurationSP+SetPunching_NeutralAxisDepthLimitation"></a>

### concreteDesignUltimateConfigurationSP.SetPunching\_NeutralAxisDepthLimitation(property_node_consider_neutral_axis_depth_limitation, property_node_value_of_neutral_axis_depth_limitation)
Sets Neutral Axis Depth Limitation

**Kind**: instance method of [<code>ConcreteDesignUltimateConfigurationSP</code>](#ConcreteDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_node_consider_neutral_axis_depth_limitation | <code>Boolean</code> | Consider depth limitation of neutral axis acc. to 8.1.5, 8.1.6, can be undefined (is not set, false as default) |
| property_node_value_of_neutral_axis_depth_limitation | <code>String/Number</code> | Value of neutral axis depth limitation (AUTOMATICALLY or user-defined value), can be undefined (is not set, AUTOMATICALLY/0.8 as default) |



## Functions

<dl>
<dt><a href="#SteelDesignFireResistanceConfiguration">SteelDesignFireResistanceConfiguration(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Fire resistance Configuration</p>
</dd>
<dt><a href="#SteelDesignServiceabilityConfiguration">SteelDesignServiceabilityConfiguration(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Serviceability Configuration</p>
</dd>
<dt><a href="#SteelDesignStrengthConfigurationAISC">SteelDesignStrengthConfigurationAISC(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Strength Configuration for AISC code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationAS">SteelDesignUltimateConfigurationAS(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for AS code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationBS">SteelDesignUltimateConfigurationBS(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for BS code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationCSA">SteelDesignUltimateConfigurationCSA(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for CSA code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationEC3">SteelDesignUltimateConfigurationEC3(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for EN code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationGB">SteelDesignUltimateConfigurationGB(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for GB code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationIS">SteelDesignUltimateConfigurationIS(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for IS code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationNBR">SteelDesignUltimateConfigurationNBR(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for NBR code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationNTC">SteelDesignUltimateConfigurationNTC(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for NTC code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationSIA">SteelDesignUltimateConfigurationSIA(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration for SIA code of standard</p>
</dd>
<dt><a href="#SteelDesignUltimateConfigurationSP">SteelDesignUltimateConfigurationSP(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel Design Ultimate Configuration</p>
</dd>
</dl>

<a name="SteelDesignFireResistanceConfiguration"></a>

## SteelDesignFireResistanceConfiguration(no, members_no, member_sets_no, comment, params)
Creates Steel Design Fire resistance Configuration

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Fire resistance Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignFireResistanceConfiguration(no, members_no, member_sets_no, comment, params)](#SteelDesignFireResistanceConfiguration)
    * [.GetNo()](#SteelDesignFireResistanceConfiguration+GetNo) ⇒
    * [.GetFireResistanceConfiguration()](#SteelDesignFireResistanceConfiguration+GetFireResistanceConfiguration) ⇒
    * [.SetName(name)](#SteelDesignFireResistanceConfiguration+SetName)
    * [.SetFinalTemperature(property_define_final_temperature)](#SteelDesignFireResistanceConfiguration+SetFinalTemperature)
    * [.SetAnalyticallyDesignSettings(property_required_time_of_fire_resistance, property_time_interval_of_analysis, property_fire_exposure, property_fire_exposure_3_sides_covered_width_calculated, property_fire_exposure_3_sides_covered_width_user_defined, property_fire_exposure_3_sides_covered_width_user_defined_value)](#SteelDesignFireResistanceConfiguration+SetAnalyticallyDesignSettings)
    * [.SetAnalyticallyFireProtection(property_protection_type, property_unit_mass, property_thermal_conductivity, property_specific_heat, property_thickness)](#SteelDesignFireResistanceConfiguration+SetAnalyticallyFireProtection)
    * [.SetAnalyticallyTemperatureCurve(property_standard_temperature_time_curve, property_external_fire_curve, property_hydrocarbon_curve, property_coefficient_of_heat_transfer_by_convention)](#SteelDesignFireResistanceConfiguration+SetAnalyticallyTemperatureCurve)
    * [.SetAnalyticallyThermalActions(property_configuration_factor, property_surface_emissivity_of_carbon_steel_member, property_surface_emissivity_of_stainless_steel_member, property_emissivity_of_fire, property_temperature_limit_of_galvanization_effect, property_surface_emissivity_of_carbon_steel_member_with_temperature_below_limit)](#SteelDesignFireResistanceConfiguration+SetAnalyticallyThermalActions)
    * [.SetManuallyFinalTemperature(property_material_final_temperature, property_fire_exposure, property_member_with_fire_protection)](#SteelDesignFireResistanceConfiguration+SetManuallyFinalTemperature)

<a name="SteelDesignFireResistanceConfiguration+GetNo"></a>

### steelDesignFireResistanceConfiguration.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  
**Returns**: Fire resistance Configuration index  
<a name="SteelDesignFireResistanceConfiguration+GetFireResistanceConfiguration"></a>

### steelDesignFireResistanceConfiguration.GetFireResistanceConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  
**Returns**: Fire resistance Configuration object  
<a name="SteelDesignFireResistanceConfiguration+SetName"></a>

### steelDesignFireResistanceConfiguration.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignFireResistanceConfiguration+SetFinalTemperature"></a>

### steelDesignFireResistanceConfiguration.SetFinalTemperature(property_define_final_temperature)
Defines final temperature

**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_define_final_temperature | <code>String</code> | Final temperature (MANUALLY, ANALYTICALLY), can be undefined (is not set, ANALYTICALLY as default) |

<a name="SteelDesignFireResistanceConfiguration+SetAnalyticallyDesignSettings"></a>

### steelDesignFireResistanceConfiguration.SetAnalyticallyDesignSettings(property_required_time_of_fire_resistance, property_time_interval_of_analysis, property_fire_exposure, property_fire_exposure_3_sides_covered_width_calculated, property_fire_exposure_3_sides_covered_width_user_defined, property_fire_exposure_3_sides_covered_width_user_defined_value)
Sets Fire design settings (Analytically final temperature must be set)

**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_required_time_of_fire_resistance | <code>Number</code> | Required time of fire resistance, can be undefined (is not set, 15 min. by default) |
| property_time_interval_of_analysis | <code>Number</code> | Time interval of analysis, can be undefined (is not set, 5.000 s. by default) |
| property_fire_exposure | <code>String</code> | Fire exposure (3_SIDES, ALL_SIDES), can be undefined (is not set, ALL_SIDES by default) |
| property_fire_exposure_3_sides_covered_width_calculated | <code>Boolean</code> | Assume total width of section as covered, can be undefined (is not set, true as default) |
| property_fire_exposure_3_sides_covered_width_user_defined | <code>Boolean</code> | Assume user-defined width of section as covered, can be undefined (is not set, false as default) |
| property_fire_exposure_3_sides_covered_width_user_defined_value | <code>Number</code> | User-defined width, can be undefined (is not set, 0 s. as default) |

<a name="SteelDesignFireResistanceConfiguration+SetAnalyticallyFireProtection"></a>

### steelDesignFireResistanceConfiguration.SetAnalyticallyFireProtection(property_protection_type, property_unit_mass, property_thermal_conductivity, property_specific_heat, property_thickness)
Sets Fire protection (Analytically final temperature must be set)

**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_protection_type | <code>String</code> | Protection type (CONTOUR, HOLLOW), can be undefined (is not set, CONTOUR as default) |
| property_unit_mass | <code>Number</code> | Unit mass, can be undefined (is not set, 300.00 as default) |
| property_thermal_conductivity | <code>Number</code> | Thermal conductivity, can be undefined (is not set, 0.120 as default) |
| property_specific_heat | <code>Number</code> | Specific heat, can be undefined (is not set, 1200.0 as default) |
| property_thickness | <code>Number</code> | Thickness, can be undefined (is not set, 10.0 as default) |

<a name="SteelDesignFireResistanceConfiguration+SetAnalyticallyTemperatureCurve"></a>

### steelDesignFireResistanceConfiguration.SetAnalyticallyTemperatureCurve(property_standard_temperature_time_curve, property_external_fire_curve, property_hydrocarbon_curve, property_coefficient_of_heat_transfer_by_convention)
Temperature curve for determination of temperature of gases (Analytically final temperature must be set)

**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_standard_temperature_time_curve | <code>Boolean</code> | Standard temperature-time curve, can be undefined (is not set, true as default) |
| property_external_fire_curve | <code>Boolean</code> | External fire curve, can be undefined (is not set, false as default) |
| property_hydrocarbon_curve | <code>Boolean</code> | Hydrocarbon curve, can be undefined (is not set, false as default) |
| property_coefficient_of_heat_transfer_by_convention | <code>Number</code> | Coefficient of heat transfer by convection, can be undefined (is not set, 25 as default) |

<a name="SteelDesignFireResistanceConfiguration+SetAnalyticallyThermalActions"></a>

### steelDesignFireResistanceConfiguration.SetAnalyticallyThermalActions(property_configuration_factor, property_surface_emissivity_of_carbon_steel_member, property_surface_emissivity_of_stainless_steel_member, property_emissivity_of_fire, property_temperature_limit_of_galvanization_effect, property_surface_emissivity_of_carbon_steel_member_with_temperature_below_limit)
Sets Thermal actions for temperature analysis (Analytically final temperature must be set)

**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_configuration_factor | <code>Number</code> | Configuration factor, can be undefined (is not set, 1.000 as default) |
| property_surface_emissivity_of_carbon_steel_member | <code>Number</code> | Surface emissivity of carbon steel member, can be undefined (is not set, 0.700 as default) |
| property_surface_emissivity_of_stainless_steel_member | <code>Number</code> | Surface emissivity of stainless steel member, can be undefined (is not set, 0.400 as default) |
| property_emissivity_of_fire | <code>Number</code> | Emissivity of fire, can be undefined (is not set, 1.000 as default) |
| property_temperature_limit_of_galvanization_effect | <code>Number</code> | Galvanized surface of carbon steel member, Temperature limit of galvanization effect, can be undefined (is not set, 500 as default) |
| property_surface_emissivity_of_carbon_steel_member_with_temperature_below_limit | <code>Number</code> | Galvanized surface of carbon steel member, Surface emissivity of carbon steel member with temperature below, can be undefined (is not set, 0.350 as default) |

<a name="SteelDesignFireResistanceConfiguration+SetManuallyFinalTemperature"></a>

### steelDesignFireResistanceConfiguration.SetManuallyFinalTemperature(property_material_final_temperature, property_fire_exposure, property_member_with_fire_protection)
Sets Manually final temperature

**Kind**: instance method of [<code>SteelDesignFireResistanceConfiguration</code>](#SteelDesignFireResistanceConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_material_final_temperature | <code>Number</code> | Material final temperature, can be undefined (is not set, 300 as default) |
| property_fire_exposure | <code>String</code> | Fire exposure (3_SIDES, ALL_SIDES), can be undefined (is not set, ALL_SIDES as default) |
| property_member_with_fire_protection | <code>Boolean</code> | Member with fire protection, can be undefined (is not set, false as default) |

<a name="SteelDesignServiceabilityConfiguration"></a>

## SteelDesignServiceabilityConfiguration(no, members_no, member_sets_no, comment, params)
Creates Steel Design Serviceability Configuration

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Serviceability configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignServiceabilityConfiguration(no, members_no, member_sets_no, comment, params)](#SteelDesignServiceabilityConfiguration)
    * [.GetNo()](#SteelDesignServiceabilityConfiguration+GetNo) ⇒
    * [.GetServiceabilityConfiguration()](#SteelDesignServiceabilityConfiguration+GetServiceabilityConfiguration) ⇒
    * [.SetName(name)](#SteelDesignServiceabilityConfiguration+SetName)
    * [.SetDesignParametersEC3(property_sl_beam_limit_characteristic, property_sl_beam_limit_frequent, property_sl_beam_limit_quasi_permanent, property_sl_cantilever_limit_characteristic, property_sl_cantilever_limit_frequent, property_sl_cantilever_limit_quasi_permanent, property_vibration_design, property_lowb_design_of_steel_structure, property_lowb_road_bridge, property_lowb_railway_bridge)](#SteelDesignServiceabilityConfiguration+SetDesignParametersEC3)
    * [.SetDesignParametersAISC(property_sl_beam_limit, property_sl_cantilever_limit)](#SteelDesignServiceabilityConfiguration+SetDesignParametersAISC)
    * [.SetDesignParametersIS(property_sl_beam_limit, property_sl_cantilever_limit)](#SteelDesignServiceabilityConfiguration+SetDesignParametersIS)
    * [.SetDesignParametersBS(property_sl_beam_limit_value, property_sl_cantilever_limit_value, property_vibration_design)](#SteelDesignServiceabilityConfiguration+SetDesignParametersBS)
    * [.SetDesignParametersGB(property_sl_beam_limit_characteristic_permanent_and_variable, property_sl_beam_limit_characteristic_variable, property_sl_cantilever_limit_characteristic_permanent_and_variable, property_sl_cantilever_limit_characteristic_variable)](#SteelDesignServiceabilityConfiguration+SetDesignParametersGB)
    * [.SetDesignParametersCSA(property_sl_beam_limit, property_sl_cantilever_limit)](#SteelDesignServiceabilityConfiguration+SetDesignParametersCSA)
    * [.SetDesignParametersAS(property_sl_beam_limit_short_term_effects, property_sl_beam_limit_long_term_effects, property_sl_cantilever_limit_short_term_effects, property_sl_cantilever_limit_long_term_effects)](#SteelDesignServiceabilityConfiguration+SetDesignParametersAS)
    * [.SetDesignParametersSP(property_sl_beam_limit, property_sl_cantilever_limit)](#SteelDesignServiceabilityConfiguration+SetDesignParametersSP)

<a name="SteelDesignServiceabilityConfiguration+GetNo"></a>

### steelDesignServiceabilityConfiguration.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  
**Returns**: Serviceability configuration index  
<a name="SteelDesignServiceabilityConfiguration+GetServiceabilityConfiguration"></a>

### steelDesignServiceabilityConfiguration.GetServiceabilityConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  
**Returns**: Serviceability configuration object  
<a name="SteelDesignServiceabilityConfiguration+SetName"></a>

### steelDesignServiceabilityConfiguration.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Serviceability configuration name, can be undefined |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersEC3"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersEC3(property_sl_beam_limit_characteristic, property_sl_beam_limit_frequent, property_sl_beam_limit_quasi_permanent, property_sl_cantilever_limit_characteristic, property_sl_cantilever_limit_frequent, property_sl_cantilever_limit_quasi_permanent, property_vibration_design, property_lowb_design_of_steel_structure, property_lowb_road_bridge, property_lowb_railway_bridge)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit_characteristic | <code>Number</code> | Beam limits - action combination, characteristic, can be undefined (is not set, 300 as default) |
| property_sl_beam_limit_frequent | <code>Number</code> | Beam limits - action combination, frequent, can be undefined (is not set, 200 as default) |
| property_sl_beam_limit_quasi_permanent | <code>Number</code> | Beam limits - action combination, quasi-permanent, can be undefined (is not set, 200 as default) |
| property_sl_cantilever_limit_characteristic | <code>Number</code> | Cantilever limits - action combination, characteristic, can be undefined (is not set, 150 as default) |
| property_sl_cantilever_limit_frequent | <code>Number</code> | Cantilever limits - action combination, frequent, can be undefined (is not set, 100 as default) |
| property_sl_cantilever_limit_quasi_permanent | <code>Number</code> | Cantilever limits - action combination, quasi-permanent, can be undefined (is not set, 100 as default) |
| property_vibration_design | <code>Number</code> | Vibration design, can be undefined (is not set, 5 mm as default) |
| property_lowb_design_of_steel_structure | <code>Boolean</code> | Limitation of web breathing, Design as steel bridge structure acc. to EN 1993-2, 7.4, can be undefined (is not set, false as default) |
| property_lowb_road_bridge | <code>Boolean</code> | Limitation of web breathing, Road bridge, can be undefined (is not set, true as default) |
| property_lowb_railway_bridge | <code>Boolean</code> | Limitation of web breathing, Railway bridge, can be undefined (is not set, false as default) |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersAISC"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersAISC(property_sl_beam_limit, property_sl_cantilever_limit)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit | <code>Number</code> | Beam limits, can be undefined (is not set, 360 as default) |
| property_sl_cantilever_limit | <code>Number</code> | Cantilever limits, can be undefined (is not set, 180 as default) |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersIS"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersIS(property_sl_beam_limit, property_sl_cantilever_limit)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit | <code>Number</code> | Beam limits, can be undefined (is not set, 360 as default) |
| property_sl_cantilever_limit | <code>Number</code> | Cantilever limits, can be undefined (is not set, 180 as default) |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersBS"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersBS(property_sl_beam_limit_value, property_sl_cantilever_limit_value, property_vibration_design)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit_value | <code>Number</code> | Beam limits, can be undefined (is not set, 360 as default) |
| property_sl_cantilever_limit_value | <code>Number</code> | Cantilever limits, can be undefined (is not set, 180 as default) |
| property_vibration_design | <code>Number</code> | Vibration design, can be undefined (is not set, 5 mm as default) |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersGB"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersGB(property_sl_beam_limit_characteristic_permanent_and_variable, property_sl_beam_limit_characteristic_variable, property_sl_cantilever_limit_characteristic_permanent_and_variable, property_sl_cantilever_limit_characteristic_variable)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit_characteristic_permanent_and_variable | <code>Number</code> | Beam limits acc. to GB 50017, Annex B, permanent and variable, can be undefined (is not set, 1000 as default) |
| property_sl_beam_limit_characteristic_variable | <code>Number</code> | Beam limits acc. to GB 50017, Annex B, variable, can be undefined (is not set, 1000 as default) |
| property_sl_cantilever_limit_characteristic_permanent_and_variable | <code>Number</code> | Cantilever limits acc. to GB 50017, Annex B, permanent and variable, can be undefined (is not set, 500 as default) |
| property_sl_cantilever_limit_characteristic_variable | <code>Number</code> | Cantilever limits acc. to GB 50017, Annex B, variable, can be undefined (is not set, 500 as default) |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersCSA"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersCSA(property_sl_beam_limit, property_sl_cantilever_limit)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit | <code>Number</code> | Beam limits, can be undefined (is not set, 360 as default) |
| property_sl_cantilever_limit | <code>Number</code> | Cantilever limits, can be undefined (is not set, 180 as default) |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersAS"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersAS(property_sl_beam_limit_short_term_effects, property_sl_beam_limit_long_term_effects, property_sl_cantilever_limit_short_term_effects, property_sl_cantilever_limit_long_term_effects)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit_short_term_effects | <code>Number</code> | Beam limits, short-term effects, can be undefined (is not set, 500 as default) |
| property_sl_beam_limit_long_term_effects | <code>Number</code> | Beam limits, long-term effects, can be undefined (is not set, 250 as default) |
| property_sl_cantilever_limit_short_term_effects | <code>Number</code> | Cantilever limits, short-term effects, can be undefined (is not set, 250 as default) |
| property_sl_cantilever_limit_long_term_effects | <code>Number</code> | Cantilever effects, long-term effects, can be undefined (is not set, 125 as default) |

<a name="SteelDesignServiceabilityConfiguration+SetDesignParametersSP"></a>

### steelDesignServiceabilityConfiguration.SetDesignParametersSP(property_sl_beam_limit, property_sl_cantilever_limit)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignServiceabilityConfiguration</code>](#SteelDesignServiceabilityConfiguration)  

| Param | Type | Description |
| --- | --- | --- |
| property_sl_beam_limit | <code>Number</code> | Beam limits, can be undefined (is not set, 360 as default) |
| property_sl_cantilever_limit | <code>Number</code> | Cantilever limits, can be undefined (is not set, 180 as default) |

<a name="SteelDesignStrengthConfigurationAISC"></a>

## SteelDesignStrengthConfigurationAISC(no, members_no, member_sets_no, comment, params)
Creates Steel Design Strength Configuration for AISC code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Strength Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignStrengthConfigurationAISC(no, members_no, member_sets_no, comment, params)](#SteelDesignStrengthConfigurationAISC)
    * [.GetNo()](#SteelDesignStrengthConfigurationAISC+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignStrengthConfigurationAISC+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignStrengthConfigurationAISC+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignStrengthConfigurationAISC+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignStrengthConfigurationAISC+SetLimitValues)
    * [.SetLocalBuckling(property_check_width_thickness_ratio_of_elements_not_defined_in_tab_b4_1b, property_unstiffened_elements, property_stiffened_elements)](#SteelDesignStrengthConfigurationAISC+SetLocalBuckling)
    * [.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)](#SteelDesignStrengthConfigurationAISC+SetPositionOfPositiveTransverse)

<a name="SteelDesignStrengthConfigurationAISC+GetNo"></a>

### steelDesignStrengthConfigurationAISC.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignStrengthConfigurationAISC</code>](#SteelDesignStrengthConfigurationAISC)  
**Returns**: Strength Configuration index  
<a name="SteelDesignStrengthConfigurationAISC+GetUltimateConfiguration"></a>

### steelDesignStrengthConfigurationAISC.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignStrengthConfigurationAISC</code>](#SteelDesignStrengthConfigurationAISC)  
**Returns**: Strength Configuration object  
<a name="SteelDesignStrengthConfigurationAISC+SetName"></a>

### steelDesignStrengthConfigurationAISC.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignStrengthConfigurationAISC</code>](#SteelDesignStrengthConfigurationAISC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignStrengthConfigurationAISC+SetGeneral"></a>

### steelDesignStrengthConfigurationAISC.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignStrengthConfigurationAISC</code>](#SteelDesignStrengthConfigurationAISC)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignStrengthConfigurationAISC+SetLimitValues"></a>

### steelDesignStrengthConfigurationAISC.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignStrengthConfigurationAISC</code>](#SteelDesignStrengthConfigurationAISC)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignStrengthConfigurationAISC+SetLocalBuckling"></a>

### steelDesignStrengthConfigurationAISC.SetLocalBuckling(property_check_width_thickness_ratio_of_elements_not_defined_in_tab_b4_1b, property_unstiffened_elements, property_stiffened_elements)
Sets local buckling

**Kind**: instance method of [<code>SteelDesignStrengthConfigurationAISC</code>](#SteelDesignStrengthConfigurationAISC)  

| Param | Type | Description |
| --- | --- | --- |
| property_check_width_thickness_ratio_of_elements_not_defined_in_tab_b4_1b | <code>Boolean</code> | Check of the width-to-thickness ratio of elements not defined in Tab. B4.1b, can be undefined (is not set, false as default) |
| property_unstiffened_elements | <code>Number</code> | Unstiffened elements, can be undefined (is not set, 12.500) |
| property_stiffened_elements | <code>Number</code> | Stiffened elements, can be undefined (is not set, 42.000 as default) |

<a name="SteelDesignStrengthConfigurationAISC+SetPositionOfPositiveTransverse"></a>

### steelDesignStrengthConfigurationAISC.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)
Sets position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignStrengthConfigurationAISC</code>](#SteelDesignStrengthConfigurationAISC)  

| Param | Type | Description |
| --- | --- | --- |
| property_load_acts_vp_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_load_acts_vp_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_load_acts_vp_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_load_acts_vp_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (stabilizing effect) |

<a name="SteelDesignUltimateConfigurationAS"></a>

## SteelDesignUltimateConfigurationAS(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for AS code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationAS(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationAS)
    * [.GetNo()](#SteelDesignUltimateConfigurationAS+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationAS+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationAS+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationAS+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationAS+SetLimitValues)
    * [.SetOptions(property_options_plastic_design_acc_to_45_and_843, property_options_use_proportioning_method, property_options_use_alternative_calculation)](#SteelDesignUltimateConfigurationAS+SetOptions)
    * [.SetSectionManufacture(property_residual_stresses_user_defined, property_residual_stresses_type)](#SteelDesignUltimateConfigurationAS+SetSectionManufacture)
    * [.SetPositionOfPositiveTransverse(property_vertical_position_downwards_on_top_flange, property_vertical_position_at_shear_point, property_vertical_position_at_center_point, property_vertical_position_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationAS+SetPositionOfPositiveTransverse)
    * [.SetFabricationOfWeldedSections(property_welded_sections_rolled_flange, property_welded_sections_flame_cut_flange)](#SteelDesignUltimateConfigurationAS+SetFabricationOfWeldedSections)

<a name="SteelDesignUltimateConfigurationAS+GetNo"></a>

### steelDesignUltimateConfigurationAS.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationAS+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationAS.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationAS+SetName"></a>

### steelDesignUltimateConfigurationAS.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationAS+SetGeneral"></a>

### steelDesignUltimateConfigurationAS.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationAS+SetLimitValues"></a>

### steelDesignUltimateConfigurationAS.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationAS+SetOptions"></a>

### steelDesignUltimateConfigurationAS.SetOptions(property_options_plastic_design_acc_to_45_and_843, property_options_use_proportioning_method, property_options_use_alternative_calculation)
Sets Options

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  

| Param | Type | Description |
| --- | --- | --- |
| property_options_plastic_design_acc_to_45_and_843 | <code>Boolean</code> | Plastic design acc. to 4.5 and 8.4.3, can be undefined (is not set, false as default) |
| property_options_use_proportioning_method | <code>Boolean</code> | Use proportioning method acc. to 5.12.2, can be undefined (is not set, false as default) |
| property_options_use_alternative_calculation | <code>Boolean</code> | Use alternative calculation acc. to 8.3 and 8.4, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationAS+SetSectionManufacture"></a>

### steelDesignUltimateConfigurationAS.SetSectionManufacture(property_residual_stresses_user_defined, property_residual_stresses_type)
Sets Section manufacture

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  

| Param | Type | Description |
| --- | --- | --- |
| property_residual_stresses_user_defined | <code>Boolean</code> | User-defined residual stresses to calculate slenderness limits acc. to tab. 5.2 or tab. 6.2.4, can be undefined (is not set, false as default) |
| property_residual_stresses_type | <code>String</code> | Residual stress (SR - stress relieved, HR - hot-rolled or hot -finished, CF - cold-formed, LW - lightly welded longitudinally, HW - heavily welded longitudinally), can be undefined (is not set, Sr as default) |

<a name="SteelDesignUltimateConfigurationAS+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationAS.SetPositionOfPositiveTransverse(property_vertical_position_downwards_on_top_flange, property_vertical_position_at_shear_point, property_vertical_position_at_center_point, property_vertical_position_downwards_on_bottom_flange)
Sets position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  

| Param | Type | Description |
| --- | --- | --- |
| property_vertical_position_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_vertical_position_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_vertical_position_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_vertical_position_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (stabilizing effect) |

<a name="SteelDesignUltimateConfigurationAS+SetFabricationOfWeldedSections"></a>

### steelDesignUltimateConfigurationAS.SetFabricationOfWeldedSections(property_welded_sections_rolled_flange, property_welded_sections_flame_cut_flange)
Sets Fabrication of welded sections acc. to tab. 6.3.3 (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationAS</code>](#SteelDesignUltimateConfigurationAS)  

| Param | Type | Description |
| --- | --- | --- |
| property_welded_sections_rolled_flange | <code>Boolean</code> | Rolled flange edges, can be undefined (is not set, true as default) |
| property_welded_sections_flame_cut_flange | <code>Boolean</code> | Flame-cut flange edges, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationBS"></a>

## SteelDesignUltimateConfigurationBS(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for BS code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationBS(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationBS)
    * [.GetNo()](#SteelDesignUltimateConfigurationBS+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationBS+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationBS+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationBS+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion_shear_stress, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationBS+SetLimitValues)
    * [.SetOptions(property_options_forced_semi_compact_design, property_options_more_exact_method_for_shear_buckling)](#SteelDesignUltimateConfigurationBS+SetOptions)
    * [.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationBS+SetPositionOfPositiveTransverse)
    * [.SetEquivalentUniformMomentFactors(property_moment_factors_lateral_torsional_buckling_calculated, property_moment_factors_lateral_torsional_buckling_user_defined, property_moment_factors_lateral_torsional_buckling_user_defined_value, property_moment_factors_flexural_buckling_major_calculated, property_moment_factors_flexural_buckling_major_user_defined, property_moment_factors_flexural_buckling_major_user_defined_value, property_moment_factors_flexural_buckling_minor_calculated, property_moment_factors_flexural_buckling_minor_user_defined, property_moment_factors_flexural_buckling_minor_user_defined_value)](#SteelDesignUltimateConfigurationBS+SetEquivalentUniformMomentFactors)

<a name="SteelDesignUltimateConfigurationBS+GetNo"></a>

### steelDesignUltimateConfigurationBS.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationBS+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationBS.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationBS+SetName"></a>

### steelDesignUltimateConfigurationBS.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationBS+SetGeneral"></a>

### steelDesignUltimateConfigurationBS.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationBS+SetLimitValues"></a>

### steelDesignUltimateConfigurationBS.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion_shear_stress, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets Limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion_shear_stress | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationBS+SetOptions"></a>

### steelDesignUltimateConfigurationBS.SetOptions(property_options_forced_semi_compact_design, property_options_more_exact_method_for_shear_buckling)
Sets Options

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  

| Param | Type | Description |
| --- | --- | --- |
| property_options_forced_semi_compact_design | <code>Boolean</code> | Forced semi-compact design, can be undefined (is not set, false as default) |
| property_options_more_exact_method_for_shear_buckling | <code>Boolean</code> | More exact method for shear buckling resistance, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationBS+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationBS.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)
Sets position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  

| Param | Type | Description |
| --- | --- | --- |
| property_load_acts_vp_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_load_acts_vp_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_load_acts_vp_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_load_acts_vp_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (stabilizing effect) |

<a name="SteelDesignUltimateConfigurationBS+SetEquivalentUniformMomentFactors"></a>

### steelDesignUltimateConfigurationBS.SetEquivalentUniformMomentFactors(property_moment_factors_lateral_torsional_buckling_calculated, property_moment_factors_lateral_torsional_buckling_user_defined, property_moment_factors_lateral_torsional_buckling_user_defined_value, property_moment_factors_flexural_buckling_major_calculated, property_moment_factors_flexural_buckling_major_user_defined, property_moment_factors_flexural_buckling_major_user_defined_value, property_moment_factors_flexural_buckling_minor_calculated, property_moment_factors_flexural_buckling_minor_user_defined, property_moment_factors_flexural_buckling_minor_user_defined_value)
Sets Equivalent uniform moment factors

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationBS</code>](#SteelDesignUltimateConfigurationBS)  

| Param | Type | Description |
| --- | --- | --- |
| property_moment_factors_lateral_torsional_buckling_calculated | <code>Boolean</code> | Factor mLT (acc. to equation from tab. 18), can be undefined (is not set, false as default), must be undefined if property_moment_factors_lateral_torsional_buckling_user_defined is defined |
| property_moment_factors_lateral_torsional_buckling_user_defined | <code>Boolean</code> | Factor mLT (user-defined), can be undefined (is not set, true as default), must be undefined if property_moment_factors_lateral_torsional_buckling_calculated is defined |
| property_moment_factors_lateral_torsional_buckling_user_defined_value | <code>Number</code> | User-defined factor mLT, can be undefined (is not set, 1.000 as default) |
| property_moment_factors_flexural_buckling_major_calculated | <code>Boolean</code> | Factor my (acc. to equation from tab. 26), can be undefined (is not set, false as default), must be undefined if property_moment_factors_flexural_buckling_major_user_defined is defined |
| property_moment_factors_flexural_buckling_major_user_defined | <code>Boolean</code> | Factor my (user-defined), can be undefined (is not set, true as default), must be undefined if property_moment_factors_flexural_buckling_major_calculated is defined |
| property_moment_factors_flexural_buckling_major_user_defined_value | <code>Number</code> | User-defined factor my, can be undefined (is not set, 1.000 as default) |
| property_moment_factors_flexural_buckling_minor_calculated | <code>Boolean</code> | Factor mz (acc. to equation from tab. 26), can be undefined (is not set, false as default), must be undefined if property_moment_factors_flexural_buckling_minor_user_defined is defined |
| property_moment_factors_flexural_buckling_minor_user_defined | <code>Boolean</code> | Factor mz (user-defined), can be undefined (is not set, true as default), must be undefined if property_moment_factors_flexural_buckling_minor_calculated is defined |
| property_moment_factors_flexural_buckling_minor_user_defined_value | <code>Number</code> | User-defined factor mz, can be undefined (is not set, 1.000 as default) |

<a name="SteelDesignUltimateConfigurationCSA"></a>

## SteelDesignUltimateConfigurationCSA(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for CSA code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationCSA(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationCSA)
    * [.GetNo()](#SteelDesignUltimateConfigurationCSA+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationCSA+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationCSA+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationCSA+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationCSA+SetLimitValues)
    * [.SetOptions(property_options_elastic_design, property_options_consider_n_equal_to_1_34, property_options_consider_n_equal_to_2_24, property_options_calculate_omega_1_according_to_13_8_6, property_options_set_omega_1_manually, property_options_omega_1_xu_user_defined_value, property_options_omega_1_yv_user_defined_value)](#SteelDesignUltimateConfigurationCSA+SetOptions)
    * [.SetStructureType(property_structure_type_unbraced_frame_y_direction, property_structure_type_unbraced_frame_z_direction)](#SteelDesignUltimateConfigurationCSA+SetStructureType)
    * [.SetPositionOfPositiveTransverse(property_load_act_vp_downwards_on_top_flange, property_load_act_vp_at_shear_point, property_load_act_vp_at_center_point, property_load_act_vp_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationCSA+SetPositionOfPositiveTransverse)

<a name="SteelDesignUltimateConfigurationCSA+GetNo"></a>

### steelDesignUltimateConfigurationCSA.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationCSA+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationCSA.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationCSA+SetName"></a>

### steelDesignUltimateConfigurationCSA.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationCSA+SetGeneral"></a>

### steelDesignUltimateConfigurationCSA.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationCSA+SetLimitValues"></a>

### steelDesignUltimateConfigurationCSA.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationCSA+SetOptions"></a>

### steelDesignUltimateConfigurationCSA.SetOptions(property_options_elastic_design, property_options_consider_n_equal_to_1_34, property_options_consider_n_equal_to_2_24, property_options_calculate_omega_1_according_to_13_8_6, property_options_set_omega_1_manually, property_options_omega_1_xu_user_defined_value, property_options_omega_1_yv_user_defined_value)
Sets Options

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_options_elastic_design | <code>Boolean</code> | Elastic design also for section class 1 or 2, can be undefined (is not set, false as default) |
| property_options_consider_n_equal_to_1_34 | <code>Boolean</code> | Parameter for compressive resistance acc. to 13.3.1, Consider n = 1.34, can be undefined (is not set, true as default) |
| property_options_consider_n_equal_to_2_24 | <code>Boolean</code> | Parameter for compressive resistance acc. to 13.3.1, Consider n = 2.24, can be undefined (is not set, true as default) |
| property_options_calculate_omega_1_according_to_13_8_6 | <code>Boolean</code> | Coefficient of uniform bending effect, automatically acc. to 13.8.6, can be undefined (is not set, true as default) |
| property_options_set_omega_1_manually | <code>Boolean</code> | Coefficient of uniform bending effect, user-defined value, can be undefined (is not set, false as default) |
| property_options_omega_1_xu_user_defined_value | <code>Number</code> | Value of omega1 in y-direction, can be undefined (is not set, 1.00 as default) |
| property_options_omega_1_yv_user_defined_value | <code>Number</code> | Value of omega1 in z-direction, can be undefined (is not set, 1.00 as default) |

<a name="SteelDesignUltimateConfigurationCSA+SetStructureType"></a>

### steelDesignUltimateConfigurationCSA.SetStructureType(property_structure_type_unbraced_frame_y_direction, property_structure_type_unbraced_frame_z_direction)
Sets Structure type

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_structure_type_unbraced_frame_y_direction | <code>Boolean</code> | Unbraced frame in y-direction, can be undefined (is not set, false as default) |
| property_structure_type_unbraced_frame_z_direction | <code>Boolean</code> | Unbraced frame in z-direction, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationCSA+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationCSA.SetPositionOfPositiveTransverse(property_load_act_vp_downwards_on_top_flange, property_load_act_vp_at_shear_point, property_load_act_vp_at_center_point, property_load_act_vp_downwards_on_bottom_flange)
Sets position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationCSA</code>](#SteelDesignUltimateConfigurationCSA)  

| Param | Type | Description |
| --- | --- | --- |
| property_load_act_vp_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_load_act_vp_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_load_act_vp_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_load_act_vp_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (stabilizing effect) |

<a name="SteelDesignUltimateConfigurationEC3"></a>

## SteelDesignUltimateConfigurationEC3(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for EN code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationEC3(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationEC3)
    * [.GetNo()](#SteelDesignUltimateConfigurationEC3+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationEC3+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationEC3+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationEC3+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationEC3+SetLimitValues)
    * [.SetThinWalledAnalysis(property_thin_walled_analysis_maximum_number_of_iterations, property_thin_walled_analysis_maximum_difference_between_iterations, property_thin_walled_analysis_neglect_bending_moments_due_to_shift, property_thin_walled_analysis_consider_annex_e, property_thin_walled_analysis_increase_material_factor)](#SteelDesignUltimateConfigurationEC3+SetThinWalledAnalysis)
    * [.SetOptions(property_options_elastic_design, property_options_use_verification_for_elastic_design, property_options_use_linear_interaction)](#SteelDesignUltimateConfigurationEC3+SetOptions)
    * [.SetDesignOfColdFormedSection(property_design_of_cold_formed_sections_activate, property_forming_factor_k)](#SteelDesignUltimateConfigurationEC3+SetDesignOfColdFormedSection)
    * [.SetDesignOfShearBuckling(property_design_of_shear_buckling_activate)](#SteelDesignUltimateConfigurationEC3+SetDesignOfShearBuckling)
    * [.SetStabilityAnalyses(property_use_gamma_m1)](#SteelDesignUltimateConfigurationEC3+SetStabilityAnalyses)
    * [.SetCalculationMethod(property_structure_type_sway_yy, property_structure_type_sway_zz, property_gm_enable_also_for_non_i_sections, property_extensional_methods, property_interpolation_acc_to_eq_666, property_european_lateral_torsional_buckling_curves, property_adapted_method)](#SteelDesignUltimateConfigurationEC3+SetCalculationMethod)
    * [.SetSecondOrderEffects(property_soe_major_y_axis, property_soe_major_y_axis_increasing_factor, property_soe_minor_z_axis, property_soe_minor_z_axis_increasing_factor)](#SteelDesignUltimateConfigurationEC3+SetSecondOrderEffects)
    * [.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationEC3+SetPositionOfPositiveTransverse)
    * [.SetLateralTorsionalBuckling(property_determine_lateral_torsion_eq_6_56, property_determine_lateral_torsion_eq_6_56_or_6_57, property_determine_lateral_torsion_f_factor, property_perform_design_for_doubly_symmetric_hollow_sections)](#SteelDesignUltimateConfigurationEC3+SetLateralTorsionalBuckling)
    * [.SetParameters(property_param_k_annex_a, property_param_k_annex_b)](#SteelDesignUltimateConfigurationEC3+SetParameters)

<a name="SteelDesignUltimateConfigurationEC3+GetNo"></a>

### steelDesignUltimateConfigurationEC3.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationEC3+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationEC3.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationEC3+SetName"></a>

### steelDesignUltimateConfigurationEC3.SetName(name)
Sets name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Ultimate Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationEC3+SetGeneral"></a>

### steelDesignUltimateConfigurationEC3.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetLimitValues"></a>

### steelDesignUltimateConfigurationEC3.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetThinWalledAnalysis"></a>

### steelDesignUltimateConfigurationEC3.SetThinWalledAnalysis(property_thin_walled_analysis_maximum_number_of_iterations, property_thin_walled_analysis_maximum_difference_between_iterations, property_thin_walled_analysis_neglect_bending_moments_due_to_shift, property_thin_walled_analysis_consider_annex_e, property_thin_walled_analysis_increase_material_factor)
Sets thin-walled analysis design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_thin_walled_analysis_maximum_number_of_iterations | <code>Number</code> | Maximum number of iterations, can be undefined (is not set, 3 as default) |
| property_thin_walled_analysis_maximum_difference_between_iterations | <code>Number</code> | Maximum difference between iterations, can be undefined (is not set, 1.00% as default) |
| property_thin_walled_analysis_neglect_bending_moments_due_to_shift | <code>Boolean</code> | Neglect bending moments due to the shift of the centroid, can be undefined (is not set, false as default) |
| property_thin_walled_analysis_consider_annex_e | <code>Boolean</code> | Consider effective widths according to EN 1993-1-5, Annex E, can be undefined (is not set, false as default) |
| property_thin_walled_analysis_increase_material_factor | <code>Boolean</code> | For limit c/t of class 3, increase material factor epsilon acc. to 5.5.2(9), can be undefined (is not set, true as default), only when Perform stability design is on |

<a name="SteelDesignUltimateConfigurationEC3+SetOptions"></a>

### steelDesignUltimateConfigurationEC3.SetOptions(property_options_elastic_design, property_options_use_verification_for_elastic_design, property_options_use_linear_interaction)
Sets design parameters options

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_options_elastic_design | <code>Boolean</code> | Elastic design (also for class 1 and class 2 sections), can be undefined (is not set, false as default) |
| property_options_use_verification_for_elastic_design | <code>Boolean</code> | Use verification acc. to equation 6.1 for elastic design, can be undefined (is not set, false as default) |
| property_options_use_linear_interaction | <code>Boolean</code> | Use linear interaction acc. to 6.2.1(7) for section check for M+N, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetDesignOfColdFormedSection"></a>

### steelDesignUltimateConfigurationEC3.SetDesignOfColdFormedSection(property_design_of_cold_formed_sections_activate, property_forming_factor_k)
Sets design of cold-formed sections acc. to EN 1993-1-3

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_design_of_cold_formed_sections_activate | <code>Boolean</code> | Perform design of cold-formed sections, can be undefined (is not set, true as default) |
| property_forming_factor_k | <code>String</code> | Forming factor k acc. to 3.2.2(3) (ROLL_FORMING, OTHER_METHODS_OF_FORMING), can be undefined (is not set, ROLL_FORMING as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetDesignOfShearBuckling"></a>

### steelDesignUltimateConfigurationEC3.SetDesignOfShearBuckling(property_design_of_shear_buckling_activate)
Sets design of share buckling Acc. to EN 1993-1-5

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_design_of_shear_buckling_activate | <code>Boolean</code> | Perform design of shear buckling, can be undefined (is not set, true as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetStabilityAnalyses"></a>

### steelDesignUltimateConfigurationEC3.SetStabilityAnalyses(property_use_gamma_m1)
Sets stability analyses with second-order internal forces

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_use_gamma_m1 | <code>Boolean</code> | Use gama M1 for determination of the section resistance, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetCalculationMethod"></a>

### steelDesignUltimateConfigurationEC3.SetCalculationMethod(property_structure_type_sway_yy, property_structure_type_sway_zz, property_gm_enable_also_for_non_i_sections, property_extensional_methods, property_interpolation_acc_to_eq_666, property_european_lateral_torsional_buckling_curves, property_adapted_method)
Sets calculation method (Perform stability design is on)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_structure_type_sway_yy | <code>Boolean</code> | Sway y-y, can be undefined (is not set, false as default) |
| property_structure_type_sway_zz | <code>Boolean</code> | Sway z-z, can be undefined (is not set, false as default) |
| property_gm_enable_also_for_non_i_sections | <code>Boolean</code> | Enable also for non-l-sections, can be undefined (is not set, true as default) |
| property_extensional_methods | <code>Boolean</code> | Extension methods, can be undefined (is not set, false as default) |
| property_interpolation_acc_to_eq_666 | <code>Boolean</code> | Interpolation acc. to Eq. 6.66, Extension method must be on (in case european lateral-torsional buckling curve is defined must be undefined) |
| property_european_lateral_torsional_buckling_curves | <code>Boolean</code> | European lateral-torsional buckling curve, Extension method must be on (in case interpolation is defined must be undefined) |
| property_adapted_method | <code>Boolean</code> | Adapted method (enable double bending), European lateral-torsional buckling curve must be on, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetSecondOrderEffects"></a>

### steelDesignUltimateConfigurationEC3.SetSecondOrderEffects(property_soe_major_y_axis, property_soe_major_y_axis_increasing_factor, property_soe_minor_z_axis, property_soe_minor_z_axis_increasing_factor)
Include second-order effects Acc. to 5.2.2(4) by increasing bending moment about

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_soe_major_y_axis | <code>Boolean</code> | Major x-axis, can be undefined (is not set, false as default) |
| property_soe_major_y_axis_increasing_factor | <code>Number</code> | Increasing factor for major x-axis, Major x-axis must be on, can be undefined (is not set, 1.150 as default) |
| property_soe_minor_z_axis | <code>String</code> | Major z-axis, can be undefined (is not set, false as default) |
| property_soe_minor_z_axis_increasing_factor | <code>Number</code> | Increasing factor for major z-axis, Major z-axis must be on, can be undefined (is not set, 1.150 as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationEC3.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)
Sets position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_load_acts_vp_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_load_acts_vp_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_load_acts_vp_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_load_acts_vp_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (is not set, stabilizing effect) |

<a name="SteelDesignUltimateConfigurationEC3+SetLateralTorsionalBuckling"></a>

### steelDesignUltimateConfigurationEC3.SetLateralTorsionalBuckling(property_determine_lateral_torsion_eq_6_56, property_determine_lateral_torsion_eq_6_56_or_6_57, property_determine_lateral_torsion_f_factor, property_perform_design_for_doubly_symmetric_hollow_sections)
Sets parameters for lateral-torsional buckling

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_determine_lateral_torsion_eq_6_56 | <code>Boolean</code> | Always according to Eq. 6.56 general case (conservative), can be undefined (is not set, false as default) |
| property_determine_lateral_torsion_eq_6_56_or_6_57 | <code>Boolean</code> | If possible, according to Eq. 6.57, otherwise according to Eq. 6.56, can be undefined (is not set, true as default) |
| property_determine_lateral_torsion_f_factor | <code>Boolean</code> | Use factor f for modification of chi L, T acc. to 6.3.2.3(2), can be undefined (is not set, true as default) |
| property_perform_design_for_doubly_symmetric_hollow_sections | <code>Boolean</code> | Perform design for non-circular doubly symmetric hollow sections, can be undefined (is not set, true as default) |

<a name="SteelDesignUltimateConfigurationEC3+SetParameters"></a>

### steelDesignUltimateConfigurationEC3.SetParameters(property_param_k_annex_a, property_param_k_annex_b)
Sets Parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationEC3</code>](#SteelDesignUltimateConfigurationEC3)  

| Param | Type | Description |
| --- | --- | --- |
| property_param_k_annex_a | <code>Boolean</code> | Method 1 acc. to Annex A, can be undefined (is not set, false as default) |
| property_param_k_annex_b | <code>Boolean</code> | Method 2 acc. to Annex B, can be undefined (is not set, true as default) |

<a name="SteelDesignUltimateConfigurationGB"></a>

## SteelDesignUltimateConfigurationGB(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for GB code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationGB(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationGB)
    * [.GetNo()](#SteelDesignUltimateConfigurationGB+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationGB+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationGB+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationGB+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationGB+SetLimitValues)
    * [.SetOptions(property_options_elastic_or_fatigue_design, property_options_take_post_buckling_strength_of_web, property_options_plastic_design)](#SteelDesignUltimateConfigurationGB+SetOptions)
    * [.SetImportanceFactorOfStructure(property_importance_factor_is_used, property_importance_factor_value)](#SteelDesignUltimateConfigurationGB+SetImportanceFactorOfStructure)
    * [.SetAnotherStandard(property_partial_safety_factor_is_user_defined, property_partial_safety_factor_value)](#SteelDesignUltimateConfigurationGB+SetAnotherStandard)
    * [.SetStabilityAnalysis(property_stability_analysis_equivalent_member, property_stability_analysis_p_delta_second_order, property_stability_analysis_direct_method)](#SteelDesignUltimateConfigurationGB+SetStabilityAnalysis)
    * [.SetOverallStabilityFactor(property_determination_of_overall_stability_use_approximate_calculation, property_tolerance_of_ltb_support_distribution)](#SteelDesignUltimateConfigurationGB+SetOverallStabilityFactor)
    * [.SetDistorsionalBucklingOfBeams(property_check_compression_flange)](#SteelDesignUltimateConfigurationGB+SetDistorsionalBucklingOfBeams)
    * [.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationGB+SetPositionOfPositiveTransverse)
    * [.SetLocalStability(property_is_compression_flange_torsionally_restrained)](#SteelDesignUltimateConfigurationGB+SetLocalStability)
    * [.SetWeldedSection(property_welded_cross_sections_classification_rolled, property_welded_cross_sections_classification_flame_cut, property_welded_cross_sections_classification_sheared)](#SteelDesignUltimateConfigurationGB+SetWeldedSection)
    * [.SetGeneralSections(property_general_cross_sections_buckling_about_y_u, property_general_cross_sections_buckling_about_z_v)](#SteelDesignUltimateConfigurationGB+SetGeneralSections)
    * [.SetImaginaryAxis(property_effective_length_of_built_up_part_l1)](#SteelDesignUltimateConfigurationGB+SetImaginaryAxis)
    * [.SetEquivalentMomentFactors(property_frame_column_y_u, property_frame_column_y_u_unbraced, property_unbraced_frame_column_beta_m_y_u, property_frame_column_y_u_braced, property_frame_column_z_v, property_frame_column_z_v_unbraced, property_unbraced_frame_column_beta_m_z_v, property_frame_column_z_v_braced, property_cantilever_beta_m_y_u, property_cantilever_beta_m_z_v)](#SteelDesignUltimateConfigurationGB+SetEquivalentMomentFactors)

<a name="SteelDesignUltimateConfigurationGB+GetNo"></a>

### steelDesignUltimateConfigurationGB.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationGB+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationGB.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationGB+SetName"></a>

### steelDesignUltimateConfigurationGB.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationGB+SetGeneral"></a>

### steelDesignUltimateConfigurationGB.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationGB+SetLimitValues"></a>

### steelDesignUltimateConfigurationGB.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationGB+SetOptions"></a>

### steelDesignUltimateConfigurationGB.SetOptions(property_options_elastic_or_fatigue_design, property_options_take_post_buckling_strength_of_web, property_options_plastic_design)
Sets Options

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_options_elastic_or_fatigue_design | <code>Boolean</code> | Elastic of fatigue design acc. to 6.1.2 and 8.1.1, can be undefined (is not set, false as default) |
| property_options_take_post_buckling_strength_of_web | <code>Boolean</code> | Post-buckling strength of web for l-shape section acc. to 6.4.1, can be undefined (is not set, false as default) |
| property_options_plastic_design | <code>Boolean</code> | Plastic resistance of section acc. to 10.1, 10.3 and 10.4, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationGB+SetImportanceFactorOfStructure"></a>

### steelDesignUltimateConfigurationGB.SetImportanceFactorOfStructure(property_importance_factor_is_used, property_importance_factor_value)
Sets Importance factor of structure

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_importance_factor_is_used | <code>Boolean</code> | Use the importance factor of structure for all load combinations, can be undefined (is not set, true as default) |
| property_importance_factor_value | <code>Number</code> | Importance factor acc. to 3.1.9, can be undefined (is not set, 1.000 as default) |

<a name="SteelDesignUltimateConfigurationGB+SetAnotherStandard"></a>

### steelDesignUltimateConfigurationGB.SetAnotherStandard(property_partial_safety_factor_is_user_defined, property_partial_safety_factor_value)
Sets Partial safety factor of materials from another standard

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_partial_safety_factor_is_user_defined | <code>Boolean</code> | User-defined factor, can be undefined (is not set, false as default) |
| property_partial_safety_factor_value | <code>Number</code> | Partial safety factor, can be undefined (is not set, 1.000 as default) |

<a name="SteelDesignUltimateConfigurationGB+SetStabilityAnalysis"></a>

### steelDesignUltimateConfigurationGB.SetStabilityAnalysis(property_stability_analysis_equivalent_member, property_stability_analysis_p_delta_second_order, property_stability_analysis_direct_method)
Sets Stability analysis (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_stability_analysis_equivalent_member | <code>Boolean</code> | Equivalent member method acc. to 5.3, can be undefined (is not set, true as default) |
| property_stability_analysis_p_delta_second_order | <code>Boolean</code> | Elastic second-order P-Delta method acc. to 5.4, can be undefined (is not set, false as default) |
| property_stability_analysis_direct_method | <code>Boolean</code> | Direct method acc. to 5.5, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationGB+SetOverallStabilityFactor"></a>

### steelDesignUltimateConfigurationGB.SetOverallStabilityFactor(property_determination_of_overall_stability_use_approximate_calculation, property_tolerance_of_ltb_support_distribution)
Sets Determination of overall stability factor of beams acc. to annex C

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_determination_of_overall_stability_use_approximate_calculation | <code>Boolean</code> | Use approximate calculation acc. to C.0.5 for I- and H-sections, can be undefined (is not set, false as default) |
| property_tolerance_of_ltb_support_distribution | <code>Number</code> | Tolerance for uniform distribution of side supports for tab. C.0.1, can be undefined (is not set, 0.05 as default) |

<a name="SteelDesignUltimateConfigurationGB+SetDistorsionalBucklingOfBeams"></a>

### steelDesignUltimateConfigurationGB.SetDistorsionalBucklingOfBeams(property_check_compression_flange)
Sets Distorsional buckling of beams acc. to 6.2.7

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_check_compression_flange | <code>Boolean</code> | Check compression of flange acc. to 6.2.7 for I-sections, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationGB+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationGB.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)
Sets position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_load_acts_vp_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_load_acts_vp_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_load_acts_vp_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_load_acts_vp_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (stabilizing effect) |

<a name="SteelDesignUltimateConfigurationGB+SetLocalStability"></a>

### steelDesignUltimateConfigurationGB.SetLocalStability(property_is_compression_flange_torsionally_restrained)
Sets Local stability acc. to 6.3

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_is_compression_flange_torsionally_restrained | <code>Boolean</code> | Torsion of compression flange is restrained, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationGB+SetWeldedSection"></a>

### steelDesignUltimateConfigurationGB.SetWeldedSection(property_welded_cross_sections_classification_rolled, property_welded_cross_sections_classification_flame_cut, property_welded_cross_sections_classification_sheared)
Sets Classification of welded sections acc. to tab. 7.2.1 (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_welded_cross_sections_classification_rolled | <code>Boolean</code> | Rolled flange edges, can be undefined (is not set, true as default) |
| property_welded_cross_sections_classification_flame_cut | <code>Boolean</code> | Flame-cut flange edge, can be undefined (is not set, false as default) |
| property_welded_cross_sections_classification_sheared | <code>Boolean</code> | Shared flange edges, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationGB+SetGeneralSections"></a>

### steelDesignUltimateConfigurationGB.SetGeneralSections(property_general_cross_sections_buckling_about_y_u, property_general_cross_sections_buckling_about_z_v)
Sets Classification of general sections acc. to tyb 7.2.1

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_general_cross_sections_buckling_about_y_u | <code>String</code> | Buckling about y/u axis, can be undefined (is not set, C as default) |
| property_general_cross_sections_buckling_about_z_v | <code>String</code> | Buckling about z/v axis, can be undefined (is not set, D as default) |

<a name="SteelDesignUltimateConfigurationGB+SetImaginaryAxis"></a>

### steelDesignUltimateConfigurationGB.SetImaginaryAxis(property_effective_length_of_built_up_part_l1)
Sets Connections of Built-up sections with imaginary axes acc. to 7.2.3

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_effective_length_of_built_up_part_l1 | <code>Number</code> | Longitudinal distance of built-up sections joints, can be undefined (is not set, 0.200 as default) |

<a name="SteelDesignUltimateConfigurationGB+SetEquivalentMomentFactors"></a>

### steelDesignUltimateConfigurationGB.SetEquivalentMomentFactors(property_frame_column_y_u, property_frame_column_y_u_unbraced, property_unbraced_frame_column_beta_m_y_u, property_frame_column_y_u_braced, property_frame_column_z_v, property_frame_column_z_v_unbraced, property_unbraced_frame_column_beta_m_z_v, property_frame_column_z_v_braced, property_cantilever_beta_m_y_u, property_cantilever_beta_m_z_v)
Sets Equivalent Moment Factors Acc. to 8.2

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationGB</code>](#SteelDesignUltimateConfigurationGB)  

| Param | Type | Description |
| --- | --- | --- |
| property_frame_column_y_u | <code>Boolean</code> | Equivalent Moment Factors Acc. to 8.2, can be undefined (is not set, false as default) |
| property_frame_column_y_u_unbraced | <code>Boolean</code> | The member is considered an unbraced frame column for the calculation of equivalent moment factors acc. to 8.2, can be undefined (is nit set, true as default) |
| property_unbraced_frame_column_beta_m_y_u | <code>NUmber</code> | The user-defined value of the factor is used for the calculation, can be undefined (is not set, 1.0 as default) |
| property_frame_column_y_u_braced | <code>Boolean</code> | The member is considered a braced frame column for the calculation of equivalent moment factors acc. to 8.2, can be undefined (is not set, false as default) |
| property_frame_column_z_v | <code>Boolean</code> | Equivalent Moment Factors Acc. to 8.2, can be undefined (is not set, false as default) |
| property_frame_column_z_v_unbraced | <code>Boolean</code> | The member is considered an unbraced frame column for the calculation of equivalent moment factors acc. to 8.2, can be undefined (is not set, true as default) |
| property_unbraced_frame_column_beta_m_z_v | <code>Number</code> | The user-defined value of the factor set here is used for the calculation, the recommended value is 1.0, can be undefined (is not set, 1.0 as default) |
| property_frame_column_z_v_braced | <code>Boolean</code> | The member is considered a braced frame column for the calculation of equivalent moment factors acc. to 8.2, can be undefined (is not set, false as default) |
| property_cantilever_beta_m_y_u | <code>Number</code> | The equivalent moment factor acc. to 8.2 for calculation of cantilever (settings in effective lengths, βmy), can be undefined (is not set, 1.0 as default) |
| property_cantilever_beta_m_z_v | <code>Number</code> | The equivalent moment factor acc. to 8.2 for calculation of cantilever (settings in effective lengths, βmz), can be undefined (is not set, 1.0 as default) |

<a name="SteelDesignUltimateConfigurationIS"></a>

## SteelDesignUltimateConfigurationIS(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for IS code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationIS(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationIS)
    * [.GetNo()](#SteelDesignUltimateConfigurationIS+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationIS+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationIS+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationIS+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationIS+SetLimitValues)
    * [.SetElasticDesign(property_elastic_design)](#SteelDesignUltimateConfigurationIS+SetElasticDesign)
    * [.SetDesignOfShearBuckling(property_activate_shear_buckling, property_design_of_shear_buckling_method_a, property_design_of_shear_buckling_method_b)](#SteelDesignUltimateConfigurationIS+SetDesignOfShearBuckling)
    * [.SetCombined(property_use_conservative_equation)](#SteelDesignUltimateConfigurationIS+SetCombined)
    * [.SetCalculationMethod(property_structure_type_sway_yy, property_structure_type_sway_zz)](#SteelDesignUltimateConfigurationIS+SetCalculationMethod)
    * [.SetPositionOfPositiveTransverse(property_vertical_position_downwards_on_top_flange, property_vertical_position_at_shear_point, property_vertical_position_at_center_point, property_vertical_position_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationIS+SetPositionOfPositiveTransverse)

<a name="SteelDesignUltimateConfigurationIS+GetNo"></a>

### steelDesignUltimateConfigurationIS.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationIS+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationIS.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationIS+SetName"></a>

### steelDesignUltimateConfigurationIS.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationIS+SetGeneral"></a>

### steelDesignUltimateConfigurationIS.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationIS+SetLimitValues"></a>

### steelDesignUltimateConfigurationIS.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets Limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationIS+SetElasticDesign"></a>

### steelDesignUltimateConfigurationIS.SetElasticDesign(property_elastic_design)
Sets Elastic design

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| property_elastic_design | <code>Boolean</code> | Elastic design (also for class 1 and class 2 sections), can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationIS+SetDesignOfShearBuckling"></a>

### steelDesignUltimateConfigurationIS.SetDesignOfShearBuckling(property_activate_shear_buckling, property_design_of_shear_buckling_method_a, property_design_of_shear_buckling_method_b)
Sets Design of shear buckling acc. to 8.4.2

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| property_activate_shear_buckling | <code>Boolean</code> | Active, can be undefined (is not set, true as default) |
| property_design_of_shear_buckling_method_a | <code>Boolean</code> | Design of shear buckling acc. to 8.4.2.2(a), can be undefined (is not set, true as default) |
| property_design_of_shear_buckling_method_b | <code>Boolean</code> | If possible, design of shear buckling acc. to 8.4.2.2(b), otherwise acc. to 8.4.2.2(a), can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationIS+SetCombined"></a>

### steelDesignUltimateConfigurationIS.SetCombined(property_use_conservative_equation)
Sets Combined axial force and bending moment acc. to 9.3.1.1

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| property_use_conservative_equation | <code>Boolean</code> | Use conservative equation, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationIS+SetCalculationMethod"></a>

### steelDesignUltimateConfigurationIS.SetCalculationMethod(property_structure_type_sway_yy, property_structure_type_sway_zz)
Sets Calculation method (Perform stability design is on)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| property_structure_type_sway_yy | <code>Boolean</code> | Sway y-y, can be undefined (is not set, false as default) |
| property_structure_type_sway_zz | <code>Boolean</code> | Sway z-z, can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationIS+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationIS.SetPositionOfPositiveTransverse(property_vertical_position_downwards_on_top_flange, property_vertical_position_at_shear_point, property_vertical_position_at_center_point, property_vertical_position_downwards_on_bottom_flange)
Sets Position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationIS</code>](#SteelDesignUltimateConfigurationIS)  

| Param | Type | Description |
| --- | --- | --- |
| property_vertical_position_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_vertical_position_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_vertical_position_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_vertical_position_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (stabilizing effect) |

<a name="SteelDesignUltimateConfigurationNBR"></a>

## SteelDesignUltimateConfigurationNBR(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for NBR code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationNBR(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationNBR)
    * [.GetNo()](#SteelDesignUltimateConfigurationNBR+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationNBR+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationNBR+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationNBR+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_torsion_shear_stress, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationNBR+SetLimitValues)
    * [.SetOptions(property_reduction_coefficient_c_t, property_wall_thickness_reduction)](#SteelDesignUltimateConfigurationNBR+SetOptions)
    * [.SetPositionOfPositiveTransverse(property_vertical_position_downwards_on_top_flange, property_vertical_position_at_shear_point, property_vertical_position_at_center_point, property_vertical_position_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationNBR+SetPositionOfPositiveTransverse)

<a name="SteelDesignUltimateConfigurationNBR+GetNo"></a>

### steelDesignUltimateConfigurationNBR.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNBR</code>](#SteelDesignUltimateConfigurationNBR)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationNBR+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationNBR.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNBR</code>](#SteelDesignUltimateConfigurationNBR)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationNBR+SetName"></a>

### steelDesignUltimateConfigurationNBR.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNBR</code>](#SteelDesignUltimateConfigurationNBR)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Ultimate Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationNBR+SetGeneral"></a>

### steelDesignUltimateConfigurationNBR.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNBR</code>](#SteelDesignUltimateConfigurationNBR)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationNBR+SetLimitValues"></a>

### steelDesignUltimateConfigurationNBR.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_torsion_shear_stress, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNBR</code>](#SteelDesignUltimateConfigurationNBR)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion_shear_stress | <code>Number</code> | Shear stress due to torsion (is not set, 0.01 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationNBR+SetOptions"></a>

### steelDesignUltimateConfigurationNBR.SetOptions(property_reduction_coefficient_c_t, property_wall_thickness_reduction)
Sets Options for Design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNBR</code>](#SteelDesignUltimateConfigurationNBR)  

| Param | Type | Description |
| --- | --- | --- |
| property_reduction_coefficient_c_t | <code>Number</code> | Net area reduction coefficient, can be undefined (is not set, 1.0 as default) |
| property_wall_thickness_reduction | <code>Boolean</code> | Use reduced wall thickness for circular pipes in shear acc. to 5.4.3.6, can be undefined (is not set, true as default) |

<a name="SteelDesignUltimateConfigurationNBR+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationNBR.SetPositionOfPositiveTransverse(property_vertical_position_downwards_on_top_flange, property_vertical_position_at_shear_point, property_vertical_position_at_center_point, property_vertical_position_downwards_on_bottom_flange)
Sets Position of positive Transverse load application

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNBR</code>](#SteelDesignUltimateConfigurationNBR)  

| Param | Type | Description |
| --- | --- | --- |
| property_vertical_position_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_vertical_position_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_vertical_position_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_vertical_position_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (stabilizing effect), can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationNTC"></a>

## SteelDesignUltimateConfigurationNTC(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for NTC code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationNTC(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationNTC)
    * [.GetNo()](#SteelDesignUltimateConfigurationNTC+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationNTC+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationNTC+SetName)

<a name="SteelDesignUltimateConfigurationNTC+GetNo"></a>

### steelDesignUltimateConfigurationNTC.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNTC</code>](#SteelDesignUltimateConfigurationNTC)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationNTC+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationNTC.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNTC</code>](#SteelDesignUltimateConfigurationNTC)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationNTC+SetName"></a>

### steelDesignUltimateConfigurationNTC.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationNTC</code>](#SteelDesignUltimateConfigurationNTC)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationSIA"></a>

## SteelDesignUltimateConfigurationSIA(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration for SIA code of standard

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationSIA(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationSIA)
    * [.GetNo()](#SteelDesignUltimateConfigurationSIA+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationSIA+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationSIA+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationSIA+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)](#SteelDesignUltimateConfigurationSIA+SetLimitValues)
    * [.SetOptions(property_options_consider_shear_area_acc_to_5_2_4, property_options_consider_shear_buckling)](#SteelDesignUltimateConfigurationSIA+SetOptions)
    * [.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationSIA+SetPositionOfPositiveTransverse)

<a name="SteelDesignUltimateConfigurationSIA+GetNo"></a>

### steelDesignUltimateConfigurationSIA.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSIA</code>](#SteelDesignUltimateConfigurationSIA)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationSIA+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationSIA.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSIA</code>](#SteelDesignUltimateConfigurationSIA)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationSIA+SetName"></a>

### steelDesignUltimateConfigurationSIA.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSIA</code>](#SteelDesignUltimateConfigurationSIA)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Ultimate Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationSIA+SetGeneral"></a>

### steelDesignUltimateConfigurationSIA.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSIA</code>](#SteelDesignUltimateConfigurationSIA)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (true as default) |

<a name="SteelDesignUltimateConfigurationSIA+SetLimitValues"></a>

### steelDesignUltimateConfigurationSIA.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_y, property_limit_values_shear_z, property_limit_values_torsion, property_limit_values_bending_about_major_axis_y, property_limit_values_bending_about_minor_axis_z)
Sets limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSIA</code>](#SteelDesignUltimateConfigurationSIA)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_y | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_z | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_y | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_z | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationSIA+SetOptions"></a>

### steelDesignUltimateConfigurationSIA.SetOptions(property_options_consider_shear_area_acc_to_5_2_4, property_options_consider_shear_buckling)
Sets Design parameters options

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSIA</code>](#SteelDesignUltimateConfigurationSIA)  

| Param | Type | Description |
| --- | --- | --- |
| property_options_consider_shear_area_acc_to_5_2_4 | <code>Boolean</code> | Consider shear area acc. to 5.2.4, can be undefined (is not set, false as default) |
| property_options_consider_shear_buckling | <code>Boolean</code> | Consider shear buckling design, can be undefined (is not set, true as default) |

<a name="SteelDesignUltimateConfigurationSIA+SetPositionOfPositiveTransverse"></a>

### steelDesignUltimateConfigurationSIA.SetPositionOfPositiveTransverse(property_load_acts_vp_downwards_on_top_flange, property_load_acts_vp_at_shear_point, property_load_acts_vp_at_center_point, property_load_acts_vp_downwards_on_bottom_flange)
Sets position of positive transverse load application (only one option can be set)

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSIA</code>](#SteelDesignUltimateConfigurationSIA)  

| Param | Type | Description |
| --- | --- | --- |
| property_load_acts_vp_downwards_on_top_flange | <code>Boolean</code> | On profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_load_acts_vp_at_shear_point | <code>Boolean</code> | At shear point, can be undefined (is not set, false as default) |
| property_load_acts_vp_at_center_point | <code>Boolean</code> | At center point, can be undefined (is not set, false as default) |
| property_load_acts_vp_downwards_on_bottom_flange | <code>Boolean</code> | On profile edge (is not set, stabilizing effect) |

<a name="SteelDesignUltimateConfigurationSP"></a>

## SteelDesignUltimateConfigurationSP(no, members_no, member_sets_no, comment, params)
Creates Steel Design Ultimate Configuration

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Ultimate Configuration index, can be undefined |
| members_no | <code>Array</code> | List of members assigned, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets assigned, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignUltimateConfigurationSP(no, members_no, member_sets_no, comment, params)](#SteelDesignUltimateConfigurationSP)
    * [.GetNo()](#SteelDesignUltimateConfigurationSP+GetNo) ⇒
    * [.GetUltimateConfiguration()](#SteelDesignUltimateConfigurationSP+GetUltimateConfiguration) ⇒
    * [.SetName(name)](#SteelDesignUltimateConfigurationSP+SetName)
    * [.SetGeneral(property_perform_stability_analysis)](#SteelDesignUltimateConfigurationSP+SetGeneral)
    * [.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_perpendicular_to_axis_yu, property_limit_values_shear_perpendicular_to_axis_zv, property_limit_values_torsion, property_limit_values_bending_about_major_axis_yu, property_limit_values_bending_about_minor_axis_zv)](#SteelDesignUltimateConfigurationSP+SetLimitValues)
    * [.SetServiceFactor(property_service_factor_acc_to_table_1)](#SteelDesignUltimateConfigurationSP+SetServiceFactor)
    * [.SetPartialSafetyFactor(property_partial_safety_factor_acc_to_table_3)](#SteelDesignUltimateConfigurationSP+SetPartialSafetyFactor)
    * [.SetOptions(property_options_plastic_design)](#SteelDesignUltimateConfigurationSP+SetOptions)
    * [.SetLoadSafetyCoefficient(property_load_safety_coefficient_is_used, property_load_safety_coefficient_value)](#SteelDesignUltimateConfigurationSP+SetLoadSafetyCoefficient)
    * [.SetDesignParameters(property_tolerance_of_ltb_support_distribution, property_tolerance_of_concentrated_load_position, property_vertical_position_downwards_on_top_flange, property_vertical_position_downwards_on_bottom_flange)](#SteelDesignUltimateConfigurationSP+SetDesignParameters)

<a name="SteelDesignUltimateConfigurationSP+GetNo"></a>

### steelDesignUltimateConfigurationSP.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  
**Returns**: Ultimate Configuration index  
<a name="SteelDesignUltimateConfigurationSP+GetUltimateConfiguration"></a>

### steelDesignUltimateConfigurationSP.GetUltimateConfiguration() ⇒
**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  
**Returns**: Ultimate Configuration object  
<a name="SteelDesignUltimateConfigurationSP+SetName"></a>

### steelDesignUltimateConfigurationSP.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Fire resistance Configuration name, can be undefined |

<a name="SteelDesignUltimateConfigurationSP+SetGeneral"></a>

### steelDesignUltimateConfigurationSP.SetGeneral(property_perform_stability_analysis)
Sets general design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_perform_stability_analysis | <code>Boolean</code> | Perform stability design, can be undefined (is not set, true as default) |

<a name="SteelDesignUltimateConfigurationSP+SetLimitValues"></a>

### steelDesignUltimateConfigurationSP.SetLimitValues(property_limit_values_tension, property_limit_values_compression, property_limit_values_shear_perpendicular_to_axis_yu, property_limit_values_shear_perpendicular_to_axis_zv, property_limit_values_torsion, property_limit_values_bending_about_major_axis_yu, property_limit_values_bending_about_minor_axis_zv)
Sets Limit values for special cases design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_limit_values_tension | <code>Number</code> | Tension, can be undefined (is not set, 0.001 as default) |
| property_limit_values_compression | <code>Number</code> | Compression, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_perpendicular_to_axis_yu | <code>Number</code> | Shear Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_shear_perpendicular_to_axis_zv | <code>Number</code> | Shear Z, can be undefined (is not set, 0.001 as default) |
| property_limit_values_torsion | <code>Number</code> | Shear stress due to torsion, can be undefined (is not set, 0.010 as default) |
| property_limit_values_bending_about_major_axis_yu | <code>Number</code> | Bending about major axis Y, can be undefined (is not set, 0.001 as default) |
| property_limit_values_bending_about_minor_axis_zv | <code>Number</code> | Bending about minor axis Z, can be undefined (is not set, 0.001 as default) |

<a name="SteelDesignUltimateConfigurationSP+SetServiceFactor"></a>

### steelDesignUltimateConfigurationSP.SetServiceFactor(property_service_factor_acc_to_table_1)
Sets Service factor

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_service_factor_acc_to_table_1 | <code>Number</code> | Factor acc. to table 1, can be undefined (is not set, 0.90 as default) |

<a name="SteelDesignUltimateConfigurationSP+SetPartialSafetyFactor"></a>

### steelDesignUltimateConfigurationSP.SetPartialSafetyFactor(property_partial_safety_factor_acc_to_table_3)
Sets Partial safety factor for material

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_partial_safety_factor_acc_to_table_3 | <code>Number</code> | Factor acc. to table 3, can be undefined (is not set, 1.02 as default) |

<a name="SteelDesignUltimateConfigurationSP+SetOptions"></a>

### steelDesignUltimateConfigurationSP.SetOptions(property_options_plastic_design)
Sets Options

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_options_plastic_design | <code>Boolean</code> | Plastic design (class 2 and 3 acc. to SNIP II-23-81), can be undefined (is not set, false as default) |

<a name="SteelDesignUltimateConfigurationSP+SetLoadSafetyCoefficient"></a>

### steelDesignUltimateConfigurationSP.SetLoadSafetyCoefficient(property_load_safety_coefficient_is_used, property_load_safety_coefficient_value)
Sets Load safety coefficient

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_load_safety_coefficient_is_used | <code>Boolean</code> | Use load safety coefficient gama-f as limit for coefficients cy and cz from tab. E.1, can be undefined (is not set, true as default) |
| property_load_safety_coefficient_value | <code>Number</code> | Load safety coefficient gama-f used in tab. E.1, can be undefined (is not set, 1.100 as default) |

<a name="SteelDesignUltimateConfigurationSP+SetDesignParameters"></a>

### steelDesignUltimateConfigurationSP.SetDesignParameters(property_tolerance_of_ltb_support_distribution, property_tolerance_of_concentrated_load_position, property_vertical_position_downwards_on_top_flange, property_vertical_position_downwards_on_bottom_flange)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignUltimateConfigurationSP</code>](#SteelDesignUltimateConfigurationSP)  

| Param | Type | Description |
| --- | --- | --- |
| property_tolerance_of_ltb_support_distribution | <code>Number</code> | Tolerance for uniform distribution of side supports for tab. Z.1, can be undefined (is not set, 0.05 as default) |
| property_tolerance_of_concentrated_load_position | <code>Number</code> | Tolerance for position of concentrated load for tab. Z.1, can be undefined (is not set, 0.05 as default) |
| property_vertical_position_downwards_on_top_flange | <code>Boolean</code> | Vertical position on profile edge (destabilizing effect), can be undefined (is not set, true as default) |
| property_vertical_position_downwards_on_bottom_flange | <code>Boolean</code> | Vertical position on profile edge (stabilizing effect), can be undefined (false as default) |



## Functions

<dl>
<dt><a href="#ConcreteDesignConcreteDurability">ConcreteDesignConcreteDurability(no, members_no, surfaces_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Concrete design Concrete durability</p>
</dd>
<dt><a href="#ConcreteDesignEffectiveLength">ConcreteDesignEffectiveLength(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Concrete design effective length</p>
</dd>
<dt><a href="#ConcreteDesignPunchingReinforcement">ConcreteDesignPunchingReinforcement(no, nodes_no, material_no, comment, params)</a></dt>
<dd><p>Creates Concrete design punching reinforcement</p>
</dd>
<dt><a href="#ConcreteDesignReinforcementDirection">ConcreteDesignReinforcementDirection(no, surfaces_no, comment, params)</a></dt>
<dd><p>Creates Concrete design reinforcement direction</p>
</dd>
<dt><a href="#ConcreteDesignSurfaceReinforcement">ConcreteDesignSurfaceReinforcement(no, surfaces_no, material_no, reinforcement_type, comment, params)</a></dt>
<dd><p>Creates Concrete design surface reinforcement</p>
</dd>
</dl>

<a name="ConcreteDesignConcreteDurability"></a>

## ConcreteDesignConcreteDurability(no, members_no, surfaces_no, member_sets_no, comment, params)
Creates Concrete design Concrete durability

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Concrete durability index, can be undefined |
| members_no | <code>Array</code> | List of members indexes, can be undefined |
| surfaces_no | <code>Array</code> | List of surfaces indexes, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [ConcreteDesignConcreteDurability(no, members_no, surfaces_no, member_sets_no, comment, params)](#ConcreteDesignConcreteDurability)
    * [.GetNo()](#ConcreteDesignConcreteDurability+GetNo) ⇒
    * [.GetConcreteDurability()](#ConcreteDesignConcreteDurability+GetConcreteDurability) ⇒
    * [.SetName(name)](#ConcreteDesignConcreteDurability+SetName)
    * [.SetNoRiskOfCorrosionOrAttack(no_risk_of_corrosion_or_attack, no_risk_of_corrosion_or_attack_enabled)](#ConcreteDesignConcreteDurability+SetNoRiskOfCorrosionOrAttack)
    * [.SetCorrosionInducedByCarbonation(corrosion_induced_by_carbonation, corrosion_induced_by_carbonation_enabled)](#ConcreteDesignConcreteDurability+SetCorrosionInducedByCarbonation)
    * [.SetCorrosionInducedByChlorides(corrosion_induced_by_chlorides, corrosion_induced_by_chlorides_enabled)](#ConcreteDesignConcreteDurability+SetCorrosionInducedByChlorides)
    * [.SetCorrosionInducedByChloridesFromSeaWater(corrosion_induced_by_chlorides_from_sea_water, corrosion_induced_by_chlorides_from_sea_water_enabled)](#ConcreteDesignConcreteDurability+SetCorrosionInducedByChloridesFromSeaWater)
    * [.SetFreezeThawAttack(freeze_thaw_attack, freeze_thaw_attack_enabled)](#ConcreteDesignConcreteDurability+SetFreezeThawAttack)
    * [.SetChemicalAttack(chemical_attack, chemical_attack_enabled)](#ConcreteDesignConcreteDurability+SetChemicalAttack)
    * [.SetConcreteCorrosionInducedByWear(concrete_corrosion_induced_by_wear, concrete_corrosion_induced_by_wear_enabled)](#ConcreteDesignConcreteDurability+SetConcreteCorrosionInducedByWear)
    * [.SetStructuralClassAccordingTo4_4_1_2(increase_design_working_life_from_50_to_100_years_enabled, position_of_reinforcement_not_affected_by_construction_process_enabled, special_quality_control_of_production_enabled, air_entrainment_of_more_than_4_percent_enabled)](#ConcreteDesignConcreteDurability+SetStructuralClassAccordingTo4_4_1_2)
    * [.SetStructuralClassUserDefined(userdefined_structural_class)](#ConcreteDesignConcreteDurability+SetStructuralClassUserDefined)
    * [.SetStainlessSteel(stainless_steel, stainless_steel_enabled)](#ConcreteDesignConcreteDurability+SetStainlessSteel)
    * [.SetAdditionalProtection(additional_protection, additional_protection_enabled)](#ConcreteDesignConcreteDurability+SetAdditionalProtection)
    * [.SetAllowanceForDeviation(allowance_of_deviation_type, concrete_cast_enabled, concrete_cast, userdefined_allowance_of_deviation_factor)](#ConcreteDesignConcreteDurability+SetAllowanceForDeviation)

<a name="ConcreteDesignConcreteDurability+GetNo"></a>

### concreteDesignConcreteDurability.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  
**Returns**: Concrete durability number  
<a name="ConcreteDesignConcreteDurability+GetConcreteDurability"></a>

### concreteDesignConcreteDurability.GetConcreteDurability() ⇒
**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  
**Returns**: Concrete durability object  
<a name="ConcreteDesignConcreteDurability+SetName"></a>

### concreteDesignConcreteDurability.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="ConcreteDesignConcreteDurability+SetNoRiskOfCorrosionOrAttack"></a>

### concreteDesignConcreteDurability.SetNoRiskOfCorrosionOrAttack(no_risk_of_corrosion_or_attack, no_risk_of_corrosion_or_attack_enabled)
Sets no risk of corrosion or attack

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| no_risk_of_corrosion_or_attack | <code>String</code> | No risk of corrosion or attack type (VERY_DRY), can be undefined (is not set, VERY_DRY as default) |
| no_risk_of_corrosion_or_attack_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetCorrosionInducedByCarbonation"></a>

### concreteDesignConcreteDurability.SetCorrosionInducedByCarbonation(corrosion_induced_by_carbonation, corrosion_induced_by_carbonation_enabled)
Sets Corrosion induced by carbonation

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| corrosion_induced_by_carbonation | <code>String</code> | Corrosion induced by carbonation type (DRY_OR_PERMANENTLY_WET, WET_RARELY_DRY, MODERATE_HUMIDITY, CYCLIC_WET_AND_DRY), can be undefined (is not set, DRY_OR_PERMANENTLY_WET as default) |
| corrosion_induced_by_carbonation_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetCorrosionInducedByChlorides"></a>

### concreteDesignConcreteDurability.SetCorrosionInducedByChlorides(corrosion_induced_by_chlorides, corrosion_induced_by_chlorides_enabled)
Sets Corrosion induced by chlorides

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| corrosion_induced_by_chlorides | <code>String</code> | Corrosion induced by chlorides (MODERATE_HUMIDITY, WET_RARELY_DRY, CYCLIC_WET_AND_DRY), can be undefined (is not set, MODERATE_HUMIDITY as default) |
| corrosion_induced_by_chlorides_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetCorrosionInducedByChloridesFromSeaWater"></a>

### concreteDesignConcreteDurability.SetCorrosionInducedByChloridesFromSeaWater(corrosion_induced_by_chlorides_from_sea_water, corrosion_induced_by_chlorides_from_sea_water_enabled)
Sets Corrosion induced by chlorides from sea water

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| corrosion_induced_by_chlorides_from_sea_water | <code>String</code> | Corrosion induced by chlorides from sea water (AIRBORNE_SALT, PERMANENTLY_SUBMERGED, SPLASH_AND_SPRAY_ZONES), can be undefined (is not set, AIRBORNE_SALT as default) |
| corrosion_induced_by_chlorides_from_sea_water_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetFreezeThawAttack"></a>

### concreteDesignConcreteDurability.SetFreezeThawAttack(freeze_thaw_attack, freeze_thaw_attack_enabled)
Sets Freeze/Thaw attack

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| freeze_thaw_attack | <code>String</code> | Freeze/thaw attack (MODERATE_SATURATION_NO_DEICING, MODERATE_SATURATION_DEICING, HIGH_SATURATION_NO_DEICING, HIGH_SATURATION_DEICING), can be undefined (is not set, MODERATE_SATURATION_NO_DEICING as default) |
| freeze_thaw_attack_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetChemicalAttack"></a>

### concreteDesignConcreteDurability.SetChemicalAttack(chemical_attack, chemical_attack_enabled)
Sets Chemical attack

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| chemical_attack | <code>String</code> | Chemical attack (SLIGHTLY_AGGRESSIVE, MODERATELY_AGGRESSIVE, HIGHLY_AGGRESSIVE), can be undefined (is not set, SLIGHTLY_AGGRESSIVE as default) |
| chemical_attack_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetConcreteCorrosionInducedByWear"></a>

### concreteDesignConcreteDurability.SetConcreteCorrosionInducedByWear(concrete_corrosion_induced_by_wear, concrete_corrosion_induced_by_wear_enabled)
Sets Concrete corrosion induced by wear

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| concrete_corrosion_induced_by_wear | <code>String</code> | Concrete corrosion induced ba wear (MODERATE, HIGH, VERY_HIGH), can be undefined (is not set, MODERATE as default) |
| concrete_corrosion_induced_by_wear_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetStructuralClassAccordingTo4_4_1_2"></a>

### concreteDesignConcreteDurability.SetStructuralClassAccordingTo4\_4\_1\_2(increase_design_working_life_from_50_to_100_years_enabled, position_of_reinforcement_not_affected_by_construction_process_enabled, special_quality_control_of_production_enabled, air_entrainment_of_more_than_4_percent_enabled)
Sets Structural class according to 4.4.1.2(5)

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| increase_design_working_life_from_50_to_100_years_enabled | <code>Boolean</code> | Increase design working life from 50 to 100 years, can be undefined (is not set, false as default) |
| position_of_reinforcement_not_affected_by_construction_process_enabled | <code>Boolean</code> | Position of reinforcement not affected by construction process (slab geometry), can be undefined (is not set, false as default) |
| special_quality_control_of_production_enabled | <code>Boolean</code> | Special quality control of the concrete production, can be undefined (is not set, false as default) |
| air_entrainment_of_more_than_4_percent_enabled | <code>Boolean</code> | Air entrainment of more then 4% according to 4.4.1.2(5), can be undefined (is not set, false as default) |

<a name="ConcreteDesignConcreteDurability+SetStructuralClassUserDefined"></a>

### concreteDesignConcreteDurability.SetStructuralClassUserDefined(userdefined_structural_class)
Sets User-defined structural class

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| userdefined_structural_class | <code>String</code> | User-defined structural class (S1, S2, S3, S4, S5, S6), can be undefined  (is not set, S4 as default) |

<a name="ConcreteDesignConcreteDurability+SetStainlessSteel"></a>

### concreteDesignConcreteDurability.SetStainlessSteel(stainless_steel, stainless_steel_enabled)
Sets Reduction of concrete cover for durability - Stainless steel

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| stainless_steel | <code>String/Number</code> | Stainless steel (STANDARD - According to standard, or user-defined value), can be undefined (is not set, STANDARD as default) |
| stainless_steel_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetAdditionalProtection"></a>

### concreteDesignConcreteDurability.SetAdditionalProtection(additional_protection, additional_protection_enabled)
Sets Reduction of concrete cover for durability - Additional protection

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| additional_protection | <code>String/Number</code> | Additional protection (STANDARD - According to standard, or user-defined value), can be undefined (is not set, STANDARD as default) |
| additional_protection_enabled | <code>Boolean</code> | Enable/disable, can be undefined (true as default) |

<a name="ConcreteDesignConcreteDurability+SetAllowanceForDeviation"></a>

### concreteDesignConcreteDurability.SetAllowanceForDeviation(allowance_of_deviation_type, concrete_cast_enabled, concrete_cast, userdefined_allowance_of_deviation_factor)
Sets Allowance for deviation

**Kind**: instance method of [<code>ConcreteDesignConcreteDurability</code>](#ConcreteDesignConcreteDurability)  

| Param | Type | Description |
| --- | --- | --- |
| allowance_of_deviation_type | <code>String</code> | Allowance for deviation (STANDARD, DEFINED) |
| concrete_cast_enabled | <code>Boolean</code> | Concrete cast against uneven surfaces according to 4.4.1.3(4), can be undefined (is not set, false as default) |
| concrete_cast | <code>String</code> | Concrete cast (AGAINST_PREPARED_GROUND, DIRECTLY_AGAINST_SOIL), can be undefined (is not set, AGAINST_PREPARED_GROUND as default) |
| userdefined_allowance_of_deviation_factor | <code>Number</code> | User-defined allowance of deviation factor, can be undefined (is not set, 10 mm as default) |

<a name="ConcreteDesignEffectiveLength"></a>

## ConcreteDesignEffectiveLength(no, members_no, member_sets_no, comment, params)
Creates Concrete design effective length

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Concrete design effective length index, can be undefined |
| members_no | <code>Array</code> | List of members indexes, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [ConcreteDesignEffectiveLength(no, members_no, member_sets_no, comment, params)](#ConcreteDesignEffectiveLength)
    * [.GetNo()](#ConcreteDesignEffectiveLength+GetNo) ⇒
    * [.GetEffectiveLength()](#ConcreteDesignEffectiveLength+GetEffectiveLength) ⇒
    * [.SetName(name)](#ConcreteDesignEffectiveLength+SetName)
    * [.SetDeterminationType(flexural_buckling_about_y, flexural_buckling_about_z)](#ConcreteDesignEffectiveLength+SetDeterminationType)
    * [.SetStructureType(structure_type_about_axis_y, structure_type_about_axis_z)](#ConcreteDesignEffectiveLength+SetStructureType)
    * [.SetNodalSupportsStartWithSupportType(support_type)](#ConcreteDesignEffectiveLength+SetNodalSupportsStartWithSupportType)
    * [.SetNodalSupportsEndWithSupportType(support_type)](#ConcreteDesignEffectiveLength+SetNodalSupportsEndWithSupportType)
    * [.DifferentPropertiesForNodalSupports(different_properties)](#ConcreteDesignEffectiveLength+DifferentPropertiesForNodalSupports)
    * [.InsertNodalSupportIntermediateNodeWithSupportType(support_type)](#ConcreteDesignEffectiveLength+InsertNodalSupportIntermediateNodeWithSupportType)
    * [.SetEffectiveLengthFactors(row, flexural_buckling_y, flexural_buckling_z, braced_flexural_buckling_y, braced_flexural_buckling_z, unbraced_flexural_buckling_y, unbraced_flexural_buckling_z)](#ConcreteDesignEffectiveLength+SetEffectiveLengthFactors)
    * [.SetOverwriteEffectiveLengths(row, flexural_buckling_y, flexural_buckling_z, braced_flexural_buckling_y, braced_flexural_buckling_z, unbraced_flexural_buckling_y, unbraced_flexural_buckling_z)](#ConcreteDesignEffectiveLength+SetOverwriteEffectiveLengths)

<a name="ConcreteDesignEffectiveLength+GetNo"></a>

### concreteDesignEffectiveLength.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  
**Returns**: Effective length number  
<a name="ConcreteDesignEffectiveLength+GetEffectiveLength"></a>

### concreteDesignEffectiveLength.GetEffectiveLength() ⇒
**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  
**Returns**: Effective length object  
<a name="ConcreteDesignEffectiveLength+SetName"></a>

### concreteDesignEffectiveLength.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="ConcreteDesignEffectiveLength+SetDeterminationType"></a>

### concreteDesignEffectiveLength.SetDeterminationType(flexural_buckling_about_y, flexural_buckling_about_z)
Sets Determination type

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| flexural_buckling_about_y | <code>Boolean</code> | Consider effective length for flexural buckling about y (major axis), can be undefined (is not set, true as default) |
| flexural_buckling_about_z | <code>Boolean</code> | Consider effective length for flexural buckling about z (minor axis), can be undefined (is not set, true as default) |

<a name="ConcreteDesignEffectiveLength+SetStructureType"></a>

### concreteDesignEffectiveLength.SetStructureType(structure_type_about_axis_y, structure_type_about_axis_z)
Sets Structure type

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| structure_type_about_axis_y | <code>String</code> | About y-axis (UNBRACED, BRACED, COMBINED (only SP)), can be undefined (is not set, UNBRACED as default) |
| structure_type_about_axis_z | <code>String</code> | About z-axis (UNBRACED, BRACED, COMBINED (only SP)), can be undefined (is not set, UNBRACED as default) |

<a name="ConcreteDesignEffectiveLength+SetNodalSupportsStartWithSupportType"></a>

### concreteDesignEffectiveLength.SetNodalSupportsStartWithSupportType(support_type)
Sets Nodal supports type for start sequence node

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Z, FIXED_IN_Y, FIXED_ALL), can be undefined (if not set, FIXED_IN_Z as default) |

<a name="ConcreteDesignEffectiveLength+SetNodalSupportsEndWithSupportType"></a>

### concreteDesignEffectiveLength.SetNodalSupportsEndWithSupportType(support_type)
Sets Nodal supports type for end sequence node

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Z, FIXED_IN_Y, FIXED_ALL), can be undefined (if not set, FIXED_IN_Z as default) |

<a name="ConcreteDesignEffectiveLength+DifferentPropertiesForNodalSupports"></a>

### concreteDesignEffectiveLength.DifferentPropertiesForNodalSupports(different_properties)
Sets Different properties state for nodal supports

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| different_properties | <code>Boolean</code> | Different properties, can be undefined (true as default) |

<a name="ConcreteDesignEffectiveLength+InsertNodalSupportIntermediateNodeWithSupportType"></a>

### concreteDesignEffectiveLength.InsertNodalSupportIntermediateNodeWithSupportType(support_type)
Inserts Intermediate node with support type

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Z, FIXED_IN_Y, FIXED_ALL), can be undefined (if not set, FIXED_IN_Z as default) |

<a name="ConcreteDesignEffectiveLength+SetEffectiveLengthFactors"></a>

### concreteDesignEffectiveLength.SetEffectiveLengthFactors(row, flexural_buckling_y, flexural_buckling_z, braced_flexural_buckling_y, braced_flexural_buckling_z, unbraced_flexural_buckling_y, unbraced_flexural_buckling_z)
Sets Effective length factors for segment sequence

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Segment sequence row |
| flexural_buckling_y | <code>Number</code> | Flexural buckling y, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_z | <code>Number</code> | Flexural axes z, can be undefined (1.00 as default if it's enabled) |
| braced_flexural_buckling_y | <code>Number</code> | Braced flexural axes y, can be undefined (1.00 as default if it's enabled) |
| braced_flexural_buckling_z | <code>Number</code> | Braced flexural axes z, can be undefined (1.00 as default if it's enabled) |
| unbraced_flexural_buckling_y | <code>Number</code> | Unbraced flexural axes y, can be undefined (1.00 as default if it's enabled) |
| unbraced_flexural_buckling_z | <code>Number</code> | Unbraced flexural axes z, can be undefined (1.00 as default if it's enabled) |

<a name="ConcreteDesignEffectiveLength+SetOverwriteEffectiveLengths"></a>

### concreteDesignEffectiveLength.SetOverwriteEffectiveLengths(row, flexural_buckling_y, flexural_buckling_z, braced_flexural_buckling_y, braced_flexural_buckling_z, unbraced_flexural_buckling_y, unbraced_flexural_buckling_z)
Sets Overwrite effective length for segment sequence

**Kind**: instance method of [<code>ConcreteDesignEffectiveLength</code>](#ConcreteDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Segment sequence row |
| flexural_buckling_y | <code>Number</code> | Flexural buckling y, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_z | <code>Number</code> | Flexural axes z, can be undefined (1.00 as default if it's enabled) |
| braced_flexural_buckling_y | <code>Number</code> | Braced flexural axes y, can be undefined (1.00 as default if it's enabled) |
| braced_flexural_buckling_z | <code>Number</code> | Braced flexural axes z, can be undefined (1.00 as default if it's enabled) |
| unbraced_flexural_buckling_y | <code>Number</code> | Unbraced flexural axes y, can be undefined (1.00 as default if it's enabled) |
| unbraced_flexural_buckling_z | <code>Number</code> | Unbraced flexural axes z, can be undefined (1.00 as default if it's enabled) |

<a name="ConcreteDesignPunchingReinforcement"></a>

## ConcreteDesignPunchingReinforcement(no, nodes_no, material_no, comment, params)
Creates Concrete design punching reinforcement

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Concrete design punching reinforcement index, can be undefined |
| nodes_no | <code>Array</code> | List of nodes indexes, can be undefined |
| material_no | <code>Array</code> | Material number, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [ConcreteDesignPunchingReinforcement(no, nodes_no, material_no, comment, params)](#ConcreteDesignPunchingReinforcement)
    * [.GetNo()](#ConcreteDesignPunchingReinforcement+GetNo) ⇒
    * [.GetSurfaceReinforcement()](#ConcreteDesignPunchingReinforcement+GetSurfaceReinforcement) ⇒
    * [.SetName(name)](#ConcreteDesignPunchingReinforcement+SetName)
    * [.SetType(type)](#ConcreteDesignPunchingReinforcement+SetType)
    * [.SetPlacement(placement_type)](#ConcreteDesignPunchingReinforcement+SetPlacement)
    * [.SetOptions(loading_area_for_single_forces_enabled, longitudinal_reinforcement_from_surface_enabled)](#ConcreteDesignPunchingReinforcement+SetOptions)

<a name="ConcreteDesignPunchingReinforcement+GetNo"></a>

### concreteDesignPunchingReinforcement.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignPunchingReinforcement</code>](#ConcreteDesignPunchingReinforcement)  
**Returns**: Punching reinforcement number  
<a name="ConcreteDesignPunchingReinforcement+GetSurfaceReinforcement"></a>

### concreteDesignPunchingReinforcement.GetSurfaceReinforcement() ⇒
**Kind**: instance method of [<code>ConcreteDesignPunchingReinforcement</code>](#ConcreteDesignPunchingReinforcement)  
**Returns**: Punching reinforcement object  
<a name="ConcreteDesignPunchingReinforcement+SetName"></a>

### concreteDesignPunchingReinforcement.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignPunchingReinforcement</code>](#ConcreteDesignPunchingReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="ConcreteDesignPunchingReinforcement+SetType"></a>

### concreteDesignPunchingReinforcement.SetType(type)
Sets type

**Kind**: instance method of [<code>ConcreteDesignPunchingReinforcement</code>](#ConcreteDesignPunchingReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | Type (VERTICAL) |

<a name="ConcreteDesignPunchingReinforcement+SetPlacement"></a>

### concreteDesignPunchingReinforcement.SetPlacement(placement_type)
Sets Placement

**Kind**: instance method of [<code>ConcreteDesignPunchingReinforcement</code>](#ConcreteDesignPunchingReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| placement_type | <code>String</code> | Placement (UNIFORM, AUTOMATICALLY) |

<a name="ConcreteDesignPunchingReinforcement+SetOptions"></a>

### concreteDesignPunchingReinforcement.SetOptions(loading_area_for_single_forces_enabled, longitudinal_reinforcement_from_surface_enabled)
sets Options

**Kind**: instance method of [<code>ConcreteDesignPunchingReinforcement</code>](#ConcreteDesignPunchingReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| loading_area_for_single_forces_enabled | <code>Boolean</code> | Load area for single forces, can be undefined (is not set, false as default) |
| longitudinal_reinforcement_from_surface_enabled | <code>Boolean</code> | Longitudinal reinforcement from surface, can be undefined (is not set, true as default) |

<a name="ConcreteDesignReinforcementDirection"></a>

## ConcreteDesignReinforcementDirection(no, surfaces_no, comment, params)
Creates Concrete design reinforcement direction

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Concrete design reinforcement direction index, can be undefined |
| surfaces_no | <code>Array</code> | List of surfaces indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [ConcreteDesignReinforcementDirection(no, surfaces_no, comment, params)](#ConcreteDesignReinforcementDirection)
    * [.GetNo()](#ConcreteDesignReinforcementDirection+GetNo) ⇒
    * [.GetReinforcementDirection()](#ConcreteDesignReinforcementDirection+GetReinforcementDirection) ⇒
    * [.SetName(name)](#ConcreteDesignReinforcementDirection+SetName)
    * [.SetDirectionType(reinforcement_direction_type)](#ConcreteDesignReinforcementDirection+SetDirectionType)
    * [.SetDirectionRotations(first_reinforcement_angle, second_reinforcement_angle)](#ConcreteDesignReinforcementDirection+SetDirectionRotations)

<a name="ConcreteDesignReinforcementDirection+GetNo"></a>

### concreteDesignReinforcementDirection.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignReinforcementDirection</code>](#ConcreteDesignReinforcementDirection)  
**Returns**: Reinforcement direction number  
<a name="ConcreteDesignReinforcementDirection+GetReinforcementDirection"></a>

### concreteDesignReinforcementDirection.GetReinforcementDirection() ⇒
**Kind**: instance method of [<code>ConcreteDesignReinforcementDirection</code>](#ConcreteDesignReinforcementDirection)  
**Returns**: Reinforcement direction object  
<a name="ConcreteDesignReinforcementDirection+SetName"></a>

### concreteDesignReinforcementDirection.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignReinforcementDirection</code>](#ConcreteDesignReinforcementDirection)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="ConcreteDesignReinforcementDirection+SetDirectionType"></a>

### concreteDesignReinforcementDirection.SetDirectionType(reinforcement_direction_type)
Sets Direction type

**Kind**: instance method of [<code>ConcreteDesignReinforcementDirection</code>](#ConcreteDesignReinforcementDirection)  

| Param | Type | Description |
| --- | --- | --- |
| reinforcement_direction_type | <code>String</code> | Direction type (FIRST_REINFORCEMENT_IN_X, FIRST_REINFORCEMENT_IN_Y, ROTATED) |

<a name="ConcreteDesignReinforcementDirection+SetDirectionRotations"></a>

### concreteDesignReinforcementDirection.SetDirectionRotations(first_reinforcement_angle, second_reinforcement_angle)
Sets Reinforcement direction rotations about z related to x

**Kind**: instance method of [<code>ConcreteDesignReinforcementDirection</code>](#ConcreteDesignReinforcementDirection)  

| Param | Type | Description |
| --- | --- | --- |
| first_reinforcement_angle | <code>Number</code> | First reinforcement angle |
| second_reinforcement_angle | <code>Number</code> | Second reinforcement angle |

<a name="ConcreteDesignSurfaceReinforcement"></a>

## ConcreteDesignSurfaceReinforcement(no, surfaces_no, material_no, reinforcement_type, comment, params)
Creates Concrete design surface reinforcement

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Concrete design surface reinforcement index, can be undefined |
| surfaces_no | <code>Array</code> | List of surfaces indexes, can be undefined |
| material_no | <code>Array</code> | Material number, can be undefined |
| reinforcement_type | <code>String</code> | Reinforcement type (MESH, REBAR, STIRRUPS), can be undefined (is not set, REBAR as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [ConcreteDesignSurfaceReinforcement(no, surfaces_no, material_no, reinforcement_type, comment, params)](#ConcreteDesignSurfaceReinforcement)
    * [.GetNo()](#ConcreteDesignSurfaceReinforcement+GetNo) ⇒
    * [.GetSurfaceReinforcement()](#ConcreteDesignSurfaceReinforcement+GetSurfaceReinforcement) ⇒
    * [.SetName(name)](#ConcreteDesignSurfaceReinforcement+SetName)
    * [.SetLocationType(location_type)](#ConcreteDesignSurfaceReinforcement+SetLocationType)
    * [.SetRebarDiameter(rebar_diameter)](#ConcreteDesignSurfaceReinforcement+SetRebarDiameter)
    * [.SetRebarSpacing(rebar_spacing)](#ConcreteDesignSurfaceReinforcement+SetRebarSpacing)
    * [.SetRebarDiameterAuto(rebar_diameter_auto_minimum, rebar_diameter_auto_maximum, rebar_diameter_auto_diameters, rebar_diameter_auto_priority)](#ConcreteDesignSurfaceReinforcement+SetRebarDiameterAuto)
    * [.SetRebarSpacingAuto(rebar_spacing_auto_minimum, rebar_spacing_auto_maximum, rebar_spacing_auto_increment, rebar_spacing_auto_priority)](#ConcreteDesignSurfaceReinforcement+SetRebarSpacingAuto)
    * [.SetAdditionalTransverseReinforcement(additional_transverse_reinforcement_enabled)](#ConcreteDesignSurfaceReinforcement+SetAdditionalTransverseReinforcement)
    * [.SetAdditionalRebarDiameter(additional_rebar_diameter)](#ConcreteDesignSurfaceReinforcement+SetAdditionalRebarDiameter)
    * [.SetAdditionalRebarSpacing(additional_rebar_spacing)](#ConcreteDesignSurfaceReinforcement+SetAdditionalRebarSpacing)
    * [.SetAdditionalRebarDiameterAuto(additional_rebar_diameter_auto_minimum, additional_rebar_diameter_auto_maximum, additional_rebar_diameter_auto_diameters, additional_rebar_diameter_auto_priority)](#ConcreteDesignSurfaceReinforcement+SetAdditionalRebarDiameterAuto)
    * [.SetAdditionalRebarSpacingAuto(additional_rebar_spacing_auto_minimum, additional_rebar_spacing_auto_maximum, additional_rebar_spacing_auto_increment, additional_rebar_spacing_auto_priority)](#ConcreteDesignSurfaceReinforcement+SetAdditionalRebarSpacingAuto)
    * [.SetStirrupsDiameter(stirrup_diameter)](#ConcreteDesignSurfaceReinforcement+SetStirrupsDiameter)
    * [.SetStirrupsSpacing(stirrup_spacing)](#ConcreteDesignSurfaceReinforcement+SetStirrupsSpacing)
    * [.SetStirrupsDiameterAuto(stirrup_diameter_auto_minimum, stirrup_diameter_auto_maximum, stirrup_diameter_auto_diameters, stirrup_diameter_auto_priority)](#ConcreteDesignSurfaceReinforcement+SetStirrupsDiameterAuto)
    * [.SetStirrupsSpacingAuto(stirrup_spacing_auto_minimum, stirrup_spacing_auto_maximum, stirrup_spacing_auto_increment, stirrup_spacing_auto_priority)](#ConcreteDesignSurfaceReinforcement+SetStirrupsSpacingAuto)
    * [.SetAssignment(additional_offset_to_concrete_cover_top, additional_offset_to_concrete_cover_bottom)](#ConcreteDesignSurfaceReinforcement+SetAssignment)
    * [.SetReinforcementDirection(reinforcement_direction_type, design_reinforcement_direction, first_direction_point_1, first_direction_point_2, second_direction_point_1, second_direction_point_2)](#ConcreteDesignSurfaceReinforcement+SetReinforcementDirection)
    * [.SetProjection(projection_coordinate_system, projection_plane)](#ConcreteDesignSurfaceReinforcement+SetProjection)
    * [.SetReinforcementLocationFreeRectangular(location_rectangle_type, value_1, value_2, value_3, value_4, location_rotation)](#ConcreteDesignSurfaceReinforcement+SetReinforcementLocationFreeRectangular)
    * [.SetReinforcementActionRegion(acting_region_from, acting_region_to)](#ConcreteDesignSurfaceReinforcement+SetReinforcementActionRegion)
    * [.SetReinforcementLocationFreePolygon(polygon_points)](#ConcreteDesignSurfaceReinforcement+SetReinforcementLocationFreePolygon)

<a name="ConcreteDesignSurfaceReinforcement+GetNo"></a>

### concreteDesignSurfaceReinforcement.GetNo() ⇒
**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  
**Returns**: Surface reinforcement number  
<a name="ConcreteDesignSurfaceReinforcement+GetSurfaceReinforcement"></a>

### concreteDesignSurfaceReinforcement.GetSurfaceReinforcement() ⇒
**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  
**Returns**: Surface reinforcement object  
<a name="ConcreteDesignSurfaceReinforcement+SetName"></a>

### concreteDesignSurfaceReinforcement.SetName(name)
Sets Name

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="ConcreteDesignSurfaceReinforcement+SetLocationType"></a>

### concreteDesignSurfaceReinforcement.SetLocationType(location_type)
Sets location type

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| location_type | <code>String</code> | Location type (ON_SURFACE, FREE_RECTANGULAR, FREE_CIRCULAR, FREE_POLYGON) |

<a name="ConcreteDesignSurfaceReinforcement+SetRebarDiameter"></a>

### concreteDesignSurfaceReinforcement.SetRebarDiameter(rebar_diameter)
Sets Rebar diameter

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| rebar_diameter | <code>Number/String</code> | Rebar diameter |

<a name="ConcreteDesignSurfaceReinforcement+SetRebarSpacing"></a>

### concreteDesignSurfaceReinforcement.SetRebarSpacing(rebar_spacing)
Sets Rebar diameter

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| rebar_spacing | <code>Number</code> | Rebar spacing |

<a name="ConcreteDesignSurfaceReinforcement+SetRebarDiameterAuto"></a>

### concreteDesignSurfaceReinforcement.SetRebarDiameterAuto(rebar_diameter_auto_minimum, rebar_diameter_auto_maximum, rebar_diameter_auto_diameters, rebar_diameter_auto_priority)
Sets Rebar auto diameter (geometry, settings)

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| rebar_diameter_auto_minimum | <code>Number</code> | Minimum diameter, can be undefined (is not set, 10 mm as default) |
| rebar_diameter_auto_maximum | <code>Number</code> | Maximum diameter, can be undefined (is not set, 20 mm as default) |
| rebar_diameter_auto_diameters | <code>String</code> | Diameters for reinforcement (e.g. '8.0, 10.0, 12.0 ...'), can be undefined |
| rebar_diameter_auto_priority | <code>Number</code> | Priority, can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetRebarSpacingAuto"></a>

### concreteDesignSurfaceReinforcement.SetRebarSpacingAuto(rebar_spacing_auto_minimum, rebar_spacing_auto_maximum, rebar_spacing_auto_increment, rebar_spacing_auto_priority)
Sets Rebar auto diameter (geometry, settings)

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| rebar_spacing_auto_minimum | <code>Number</code> | Minimum spacing, can be undefined (is not set, 0.1 m as default) |
| rebar_spacing_auto_maximum | <code>Number</code> | Maximum spacing, can be undefined (is not set, 0.3 m as default) |
| rebar_spacing_auto_increment | <code>Number</code> | Increment, can be undefined (is not set, 0.1 m as default) |
| rebar_spacing_auto_priority | <code>Number</code> | Priority, can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetAdditionalTransverseReinforcement"></a>

### concreteDesignSurfaceReinforcement.SetAdditionalTransverseReinforcement(additional_transverse_reinforcement_enabled)
Enabled/disabled Additional transverse reinforcement

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| additional_transverse_reinforcement_enabled | <code>Boolean</code> | Enabled/disabled, can be undefined (true as default); |

<a name="ConcreteDesignSurfaceReinforcement+SetAdditionalRebarDiameter"></a>

### concreteDesignSurfaceReinforcement.SetAdditionalRebarDiameter(additional_rebar_diameter)
Sets Additional rebar diameter

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| additional_rebar_diameter | <code>Number</code> | Additional rebar diameter |

<a name="ConcreteDesignSurfaceReinforcement+SetAdditionalRebarSpacing"></a>

### concreteDesignSurfaceReinforcement.SetAdditionalRebarSpacing(additional_rebar_spacing)
Sets Additional rebar spacing

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| additional_rebar_spacing | <code>Number</code> | Additional rebar spacing |

<a name="ConcreteDesignSurfaceReinforcement+SetAdditionalRebarDiameterAuto"></a>

### concreteDesignSurfaceReinforcement.SetAdditionalRebarDiameterAuto(additional_rebar_diameter_auto_minimum, additional_rebar_diameter_auto_maximum, additional_rebar_diameter_auto_diameters, additional_rebar_diameter_auto_priority)
Sets Additional rebar auto diameter (geometry, settings)

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| additional_rebar_diameter_auto_minimum | <code>Number</code> | Minimum diameter, can be undefined (is not set, 10 mm as default) |
| additional_rebar_diameter_auto_maximum | <code>Number</code> | Maximum diameter, can be undefined (is not set, 20 mm as default) |
| additional_rebar_diameter_auto_diameters | <code>String</code> | Diameters for reinforcement (e.g. '8.0, 10.0, 12.0, 14.0') |
| additional_rebar_diameter_auto_priority | <code>Number</code> | Priority, can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetAdditionalRebarSpacingAuto"></a>

### concreteDesignSurfaceReinforcement.SetAdditionalRebarSpacingAuto(additional_rebar_spacing_auto_minimum, additional_rebar_spacing_auto_maximum, additional_rebar_spacing_auto_increment, additional_rebar_spacing_auto_priority)
Sets Additional rebar auto spacing (geometry, settings)

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| additional_rebar_spacing_auto_minimum | <code>Number</code> | Minimum spacing, can be undefined (is not set, 0.1 m as default) |
| additional_rebar_spacing_auto_maximum | <code>Number</code> | Maximum diameter, can be undefined (is not set, 0.3 m as default) |
| additional_rebar_spacing_auto_increment | <code>Number</code> | Increment, can be undefined (is not set, 0.010 m as default) |
| additional_rebar_spacing_auto_priority | <code>Number</code> | Priority, can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetStirrupsDiameter"></a>

### concreteDesignSurfaceReinforcement.SetStirrupsDiameter(stirrup_diameter)
Sets Stirrups diameter

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| stirrup_diameter | <code>Number</code> | Stirrups diameter |

<a name="ConcreteDesignSurfaceReinforcement+SetStirrupsSpacing"></a>

### concreteDesignSurfaceReinforcement.SetStirrupsSpacing(stirrup_spacing)
Sets Stirrups spacing

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| stirrup_spacing | <code>Number</code> | Stirrups spacing |

<a name="ConcreteDesignSurfaceReinforcement+SetStirrupsDiameterAuto"></a>

### concreteDesignSurfaceReinforcement.SetStirrupsDiameterAuto(stirrup_diameter_auto_minimum, stirrup_diameter_auto_maximum, stirrup_diameter_auto_diameters, stirrup_diameter_auto_priority)
Sets Stirrups auto diameter (geometry, settings)

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| stirrup_diameter_auto_minimum | <code>Number</code> | Minimum diameter, can be undefined (is not set, 10 mm as default) |
| stirrup_diameter_auto_maximum | <code>Number</code> | Maximum diameter, can be undefined (is not set, 20 mm as default) |
| stirrup_diameter_auto_diameters | <code>String</code> | Diameters for reinforcement (e.g. '8.0, 10.0, 12.0 ...'), can be undefined |
| stirrup_diameter_auto_priority | <code>Number</code> | Priority, can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetStirrupsSpacingAuto"></a>

### concreteDesignSurfaceReinforcement.SetStirrupsSpacingAuto(stirrup_spacing_auto_minimum, stirrup_spacing_auto_maximum, stirrup_spacing_auto_increment, stirrup_spacing_auto_priority)
Sets Stirrups auto spacing (geometry, settings)

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| stirrup_spacing_auto_minimum | <code>Number</code> | Minimum spacing, can be undefined (is not set, 0.1 m as default) |
| stirrup_spacing_auto_maximum | <code>Number</code> | Maximum spacing, can be undefined (is not set, 0.3 m as default) |
| stirrup_spacing_auto_increment | <code>Number</code> | Increment, can be undefined (is not set, 0.01 m as default) |
| stirrup_spacing_auto_priority | <code>Number</code> | Priority, can be undefined (is not set, 1 as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetAssignment"></a>

### concreteDesignSurfaceReinforcement.SetAssignment(additional_offset_to_concrete_cover_top, additional_offset_to_concrete_cover_bottom)
Sets Assignments

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| additional_offset_to_concrete_cover_top | <code>Number</code> | Additional offset to concrete cover, Top (-z), can be undefined (if not set, top (-z) and 0.0 mm are set) |
| additional_offset_to_concrete_cover_bottom | <code>Number</code> | Additional offset to concrete cover, Top (-z), can be undefined (if not set, top (-z) and 0.0 mm are set) |

<a name="ConcreteDesignSurfaceReinforcement+SetReinforcementDirection"></a>

### concreteDesignSurfaceReinforcement.SetReinforcementDirection(reinforcement_direction_type, design_reinforcement_direction, first_direction_point_1, first_direction_point_2, second_direction_point_1, second_direction_point_2)
Sets Reinforcement direction

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| reinforcement_direction_type | <code>String</code> | Reinforcement direction (IN_DESIGN_REINFORCEMENT_DIRECTION, PARALLEL_TO_TWO_POINTS), can be undefined (is not set, IN_DESIGN_REINFORCEMENT_DIRECTION as default) |
| design_reinforcement_direction | <code>String</code> | In reinforcement direction of design (A_S_1, A_S_2), can be undefined (if direction type IN_DESIGN_REINFORCEMENT_DIRECTION and direction of design is not set, A_S_1 as default) |
| first_direction_point_1 | <code>Number</code> | Parallel to two points - AX, can be undefined |
| first_direction_point_2 | <code>Number</code> | Parallel to two points - AY, can be undefined |
| second_direction_point_1 | <code>Number</code> | Parallel to two points - BX, can be undefined |
| second_direction_point_2 | <code>Number</code> | Parallel to two points - BY, can be undefined |

<a name="ConcreteDesignSurfaceReinforcement+SetProjection"></a>

### concreteDesignSurfaceReinforcement.SetProjection(projection_coordinate_system, projection_plane)
Sets Projection

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| projection_coordinate_system | <code>Number</code> | Coordination system, can be undefined (is not set, 1 as default - if any) |
| projection_plane | <code>String</code> | Projection (XY_OR_UV, YZ_OR_VW, XZ_OR_UW), can be undefined (is ot set, XY_OR_UV as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetReinforcementLocationFreeRectangular"></a>

### concreteDesignSurfaceReinforcement.SetReinforcementLocationFreeRectangular(location_rectangle_type, value_1, value_2, value_3, value_4, location_rotation)
Sets Reinforcement location

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| location_rectangle_type | <code>String</code> | Location rectangle type (CORNER_POINTS, CENTER_AND_SIDES), can be undefined (is not set, CORNER_POINTS as default) |
| value_1 | <code>Number</code> | X1 (CORNER_POINTS) / CX (CENTER_AND_SIDES) |
| value_2 | <code>Number</code> | Y1 (CORNER_POINTS) / CY (CENTER_AND_SIDES) |
| value_3 | <code>Number</code> | X2 (CORNER_POINTS) / center side a (CENTER_AND_SIDES) |
| value_4 | <code>Number</code> | Y2 (CORNER_POINTS) / center side b (CENTER_AND_SIDES) |
| location_rotation | <code>Number</code> | Rectangle rotation about Z |

<a name="ConcreteDesignSurfaceReinforcement+SetReinforcementActionRegion"></a>

### concreteDesignSurfaceReinforcement.SetReinforcementActionRegion(acting_region_from, acting_region_to)
Sets Reinforcement action region

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| acting_region_from | <code>Number</code> | From, can be undefined (is not set, infinity as default) |
| acting_region_to | <code>Number</code> | To, can be undefined (is not set, infinity as default) |

<a name="ConcreteDesignSurfaceReinforcement+SetReinforcementLocationFreePolygon"></a>

### concreteDesignSurfaceReinforcement.SetReinforcementLocationFreePolygon(polygon_points)
Sets Reinforcement location

**Kind**: instance method of [<code>ConcreteDesignSurfaceReinforcement</code>](#ConcreteDesignSurfaceReinforcement)  

| Param | Type | Description |
| --- | --- | --- |
| polygon_points | <code>Array</code> | Polygon points ([[X1, Y1, (Comment1)], [X2, Y2, (Comment2)], ... [Xn, Yn, (Comment)]]), at least coordinations must be specified |



## Functions

<dl>
<dt><a href="#SteelDesignBoundaryCondition">SteelDesignBoundaryCondition(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel design boundary condition</p>
</dd>
<dt><a href="#SteelDesignEffectiveLength">SteelDesignEffectiveLength(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel design effective length</p>
</dd>
<dt><a href="#SteelDesignMemberLocalSectionReduction">SteelDesignMemberLocalSectionReduction(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Steel design Member local section reduction</p>
</dd>
</dl>

<a name="SteelDesignBoundaryCondition"></a>

## SteelDesignBoundaryCondition(no, members_no, member_sets_no, comment, params)
Creates Steel design boundary condition

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Steel design boundary condition index, can be undefined |
| members_no | <code>Array</code> | List of members indexes, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignBoundaryCondition(no, members_no, member_sets_no, comment, params)](#SteelDesignBoundaryCondition)
    * [.GetNo()](#SteelDesignBoundaryCondition+GetNo) ⇒
    * [.GetBoundaryCondition()](#SteelDesignBoundaryCondition+GetBoundaryCondition) ⇒
    * [.SetName(name)](#SteelDesignBoundaryCondition+SetName)
    * [.SetNodalSupportsStartWithSupportType(support_type)](#SteelDesignBoundaryCondition+SetNodalSupportsStartWithSupportType)
    * [.SetNodalSupportsEndWithSupportType(support_type)](#SteelDesignBoundaryCondition+SetNodalSupportsEndWithSupportType)
    * [.SetNodalSupportsStartWithIndividuallySupportType(support_in_y, restraint_about_x, restraint_about_z, restraint_warping)](#SteelDesignBoundaryCondition+SetNodalSupportsStartWithIndividuallySupportType)
    * [.SetNodalSupportsEndWithIndividuallySupportType(support_in_y, restraint_about_x, restraint_about_z, restraint_warping)](#SteelDesignBoundaryCondition+SetNodalSupportsEndWithIndividuallySupportType)
    * [.InsertNodalSupportIntermediateNode(support_in_y, restraint_about_x, restraint_about_z, restraint_warping)](#SteelDesignBoundaryCondition+InsertNodalSupportIntermediateNode)
    * [.SetAdditionalParametersForStart(rotation, eccentricity_type_z, eccentricity_x, eccentricity_z)](#SteelDesignBoundaryCondition+SetAdditionalParametersForStart)
    * [.SetAdditionalParametersForEnd(rotation, eccentricity_type_z, eccentricity_x, eccentricity_z)](#SteelDesignBoundaryCondition+SetAdditionalParametersForEnd)
    * [.SetAdditionalParametersForIntermediateRow(row, rotation, eccentricity_type_z, eccentricity_x, eccentricity_z)](#SteelDesignBoundaryCondition+SetAdditionalParametersForIntermediateRow)
    * [.SetIntermediateNodes(intermediate_nodes)](#SteelDesignBoundaryCondition+SetIntermediateNodes)
    * [.SetDifferentPropertiesForNodalSupports(different_properties_supports)](#SteelDesignBoundaryCondition+SetDifferentPropertiesForNodalSupports)
    * [.SetMemberHingesForStart(release_in_y, release_about_x, release_about_z, release_warping)](#SteelDesignBoundaryCondition+SetMemberHingesForStart)
    * [.SetMemberHingesForEnd(release_in_y, release_about_x, release_about_z, release_warping)](#SteelDesignBoundaryCondition+SetMemberHingesForEnd)
    * [.SetMemberHingeIntermediateNode(row, release_in_y, release_about_x, release_about_z, release_warping)](#SteelDesignBoundaryCondition+SetMemberHingeIntermediateNode)
    * [.SetDifferentPropertiesForMemberHinges(different_properties_hinges)](#SteelDesignBoundaryCondition+SetDifferentPropertiesForMemberHinges)
    * [.IsNodalSupportsEndEdit()](#SteelDesignBoundaryCondition+IsNodalSupportsEndEdit) ⇒

<a name="SteelDesignBoundaryCondition+GetNo"></a>

### steelDesignBoundaryCondition.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  
**Returns**: Steel design boundary condition number  
<a name="SteelDesignBoundaryCondition+GetBoundaryCondition"></a>

### steelDesignBoundaryCondition.GetBoundaryCondition() ⇒
**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  
**Returns**: Boundary condition internal object  
<a name="SteelDesignBoundaryCondition+SetName"></a>

### steelDesignBoundaryCondition.SetName(name)
Sets name

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="SteelDesignBoundaryCondition+SetNodalSupportsStartWithSupportType"></a>

### steelDesignBoundaryCondition.SetNodalSupportsStartWithSupportType(support_type)
Sets Nodal supports for start node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Y, TORSION, FIXED_IN_Y_AND_TORSION, FIXED_IN_Y_AND_WARPING, TORSION_AND_WARPING, FIXED_IN_Y_AND_TORSION_AND_WARPING, FIXED_ALL), can be undefined (FIXED_IN_Y_AND_TORSION as default) |

<a name="SteelDesignBoundaryCondition+SetNodalSupportsEndWithSupportType"></a>

### steelDesignBoundaryCondition.SetNodalSupportsEndWithSupportType(support_type)
Sets Nodal supports for end node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Y, TORSION, FIXED_IN_Y_AND_TORSION, FIXED_IN_Y_AND_WARPING, TORSION_AND_WARPING, FIXED_IN_Y_AND_TORSION_AND_WARPING, FIXED_ALL), can be undefined (FIXED_IN_Y_AND_TORSION as default) |

<a name="SteelDesignBoundaryCondition+SetNodalSupportsStartWithIndividuallySupportType"></a>

### steelDesignBoundaryCondition.SetNodalSupportsStartWithIndividuallySupportType(support_in_y, restraint_about_x, restraint_about_z, restraint_warping)
Sets individually values for start node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| support_in_y | <code>Boolean</code> | Support in y', can be undefined (is not set, false as default) |
| restraint_about_x | <code>Boolean</code> | Restraint about x', can be undefined (is not set, false as default) |
| restraint_about_z | <code>Boolean</code> | Restraint about z', can be undefined (is not set, false as default) |
| restraint_warping | <code>Boolean</code> | Warping, can be undefined (is not set, false as default) |

<a name="SteelDesignBoundaryCondition+SetNodalSupportsEndWithIndividuallySupportType"></a>

### steelDesignBoundaryCondition.SetNodalSupportsEndWithIndividuallySupportType(support_in_y, restraint_about_x, restraint_about_z, restraint_warping)
Sets individually values for end node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| support_in_y | <code>Boolean</code> | Support in y', can be undefined (is not set, false as default) |
| restraint_about_x | <code>Boolean</code> | Restraint about x', can be undefined (is not set, false as default) |
| restraint_about_z | <code>Boolean</code> | Restraint about z', can be undefined (is not set, false as default) |
| restraint_warping | <code>Boolean</code> | Warping, can be undefined (is not set, false as default) |

<a name="SteelDesignBoundaryCondition+InsertNodalSupportIntermediateNode"></a>

### steelDesignBoundaryCondition.InsertNodalSupportIntermediateNode(support_in_y, restraint_about_x, restraint_about_z, restraint_warping)
Inserts Nodal support intermediate node

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| support_in_y | <code>Boolean</code> | Support in y', can be undefined (is not set, false as default) |
| restraint_about_x | <code>Boolean</code> | Restraint about x', can be undefined (is not set, false as default) |
| restraint_about_z | <code>Boolean</code> | Restraint about z', can be undefined (is not set, false as default) |
| restraint_warping | <code>Boolean</code> | Warping, can be undefined (is not set, false as default) |

<a name="SteelDesignBoundaryCondition+SetAdditionalParametersForStart"></a>

### steelDesignBoundaryCondition.SetAdditionalParametersForStart(rotation, eccentricity_type_z, eccentricity_x, eccentricity_z)
Sets Additional parameters for start node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| rotation | <code>Number</code> | Rotation, can be undefined (is not set, 0.00 as default) |
| eccentricity_type_z | <code>String</code> | Type of eccentricity in z-axis (NONE, AT_UPPER_FLANGE, AT_LOWER_FLANGE, USER_VALUE), can be undefined (is not set, USER_VALUE as default) |
| eccentricity_x | <code>Number</code> | Eccentricity in x'-axis, can be undefined (is not set, 0.0 as default) |
| eccentricity_z | <code>Number</code> | Eccentricity in z'-axis, can be undefined (is not set, 0.0 as default) |

<a name="SteelDesignBoundaryCondition+SetAdditionalParametersForEnd"></a>

### steelDesignBoundaryCondition.SetAdditionalParametersForEnd(rotation, eccentricity_type_z, eccentricity_x, eccentricity_z)
Sets Additional parameters for end node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| rotation | <code>Number</code> | Rotation, can be undefined (is not set, 0.00 as default) |
| eccentricity_type_z | <code>String</code> | Type of eccentricity in z-axis (NONE, AT_UPPER_FLANGE, AT_LOWER_FLANGE, USER_VALUE), can be undefined (is not set, USER_VALUE as default) |
| eccentricity_x | <code>Number</code> | Eccentricity in x'-axis, can be undefined (is not set, 0.0 as default) |
| eccentricity_z | <code>Number</code> | Eccentricity in z'-axis, can be undefined (is not set, 0.0 as default) |

<a name="SteelDesignBoundaryCondition+SetAdditionalParametersForIntermediateRow"></a>

### steelDesignBoundaryCondition.SetAdditionalParametersForIntermediateRow(row, rotation, eccentricity_type_z, eccentricity_x, eccentricity_z)
Sets Additional parameters for intermediate node

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Row, first intermediate row begins on index 2 |
| rotation | <code>Number</code> | Rotation, can be undefined (is not set, 0.00 as default) |
| eccentricity_type_z | <code>String</code> | Type of eccentricity in z-axis (NONE, AT_UPPER_FLANGE, AT_LOWER_FLANGE, USER_VALUE), can be undefined (is not set, USER_VALUE as default) |
| eccentricity_x | <code>Number</code> | Eccentricity in x'-axis, can be undefined (is not set, 0.0 as default) |
| eccentricity_z | <code>Number</code> | Eccentricity in z'-axis, can be undefined (is not set, 0.0 as default) |

<a name="SteelDesignBoundaryCondition+SetIntermediateNodes"></a>

### steelDesignBoundaryCondition.SetIntermediateNodes(intermediate_nodes)
Sets Intermediate nodes state

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| intermediate_nodes | <code>Boolean</code> | Intermediate nodes, can be undefined (true as default) |

<a name="SteelDesignBoundaryCondition+SetDifferentPropertiesForNodalSupports"></a>

### steelDesignBoundaryCondition.SetDifferentPropertiesForNodalSupports(different_properties_supports)
Sets Different properties state for nodal supports

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| different_properties_supports | <code>Boolean</code> | Different properties, can be undefined (true as default) |

<a name="SteelDesignBoundaryCondition+SetMemberHingesForStart"></a>

### steelDesignBoundaryCondition.SetMemberHingesForStart(release_in_y, release_about_x, release_about_z, release_warping)
Sets Hinge releases for start node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| release_in_y | <code>Number</code> | Release in y, can be undefined (is not set, false as default) |
| release_about_x | <code>Number</code> | Release about x, can be undefined (is not set, false as default) |
| release_about_z | <code>Number</code> | Release about z, can be undefined (is not set, false as default) |
| release_warping | <code>Number</code> | Release of warping, can be undefined (is not set, false as default) |

<a name="SteelDesignBoundaryCondition+SetMemberHingesForEnd"></a>

### steelDesignBoundaryCondition.SetMemberHingesForEnd(release_in_y, release_about_x, release_about_z, release_warping)
Sets Hinge releases for end node sequence

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| release_in_y | <code>Number</code> | Release in y, can be undefined (is not set, false as default) |
| release_about_x | <code>Number</code> | Release about x, can be undefined (is not set, false as default) |
| release_about_z | <code>Number</code> | Release about z, can be undefined (is not set, false as default) |
| release_warping | <code>Number</code> | Release of warping, can be undefined (is not set, false as default) |

<a name="SteelDesignBoundaryCondition+SetMemberHingeIntermediateNode"></a>

### steelDesignBoundaryCondition.SetMemberHingeIntermediateNode(row, release_in_y, release_about_x, release_about_z, release_warping)
Sets member hinge intermediate node

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Row (intermediate node begins on index 2) |
| release_in_y | <code>Number</code> | Release in y, can be undefined (is not set, false as default) |
| release_about_x | <code>Number</code> | Release about x, can be undefined (is not set, false as default) |
| release_about_z | <code>Number</code> | Release about z, can be undefined (is not set, false as default) |
| release_warping | <code>Number</code> | Release of warping, can be undefined (is not set, false as default) |

<a name="SteelDesignBoundaryCondition+SetDifferentPropertiesForMemberHinges"></a>

### steelDesignBoundaryCondition.SetDifferentPropertiesForMemberHinges(different_properties_hinges)
Sets Different properties state for member hinges

**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  

| Param | Type | Description |
| --- | --- | --- |
| different_properties_hinges | <code>Boolean</code> | Different properties, can be undefined (true as default) |

<a name="SteelDesignBoundaryCondition+IsNodalSupportsEndEdit"></a>

### steelDesignBoundaryCondition.IsNodalSupportsEndEdit() ⇒
**Kind**: instance method of [<code>SteelDesignBoundaryCondition</code>](#SteelDesignBoundaryCondition)  
**Returns**: Nodal supports are set correctly  
<a name="SteelDesignEffectiveLength"></a>

## SteelDesignEffectiveLength(no, members_no, member_sets_no, comment, params)
Creates Steel design effective length

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Steel design effective length index, can be undefined |
| members_no | <code>Array</code> | List of members indexes, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignEffectiveLength(no, members_no, member_sets_no, comment, params)](#SteelDesignEffectiveLength)
    * [.GetNo()](#SteelDesignEffectiveLength+GetNo) ⇒
    * [.GetEffectiveLength()](#SteelDesignEffectiveLength+GetEffectiveLength) ⇒
    * [.SetName(name)](#SteelDesignEffectiveLength+SetName)
    * [.SetDeterminationType(flexural_buckling_about_y, flexural_buckling_about_z, torsional_buckling, lateral_torsional_buckling, determination_mcr)](#SteelDesignEffectiveLength+SetDeterminationType)
    * [.SetBucklingAxes(principal_section_axes, geometric_section_axes)](#SteelDesignEffectiveLength+SetBucklingAxes)
    * [.SetBucklingFactorType(buckling_factor_type)](#SteelDesignEffectiveLength+SetBucklingFactorType)
    * [.SetMemberType(member_type, member_type_yy, member_type_zz)](#SteelDesignEffectiveLength+SetMemberType)
    * [.SetEffectiveLengthsAccToStandard(standard_of_effective_lengths)](#SteelDesignEffectiveLength+SetEffectiveLengthsAccToStandard)
    * [.SetSegmentsRestrainedBothEnds(moment_modification_restrained_segments_as, modification_factor_alpha_restrained_segments_as, slenderness_reduction_restrained_segments_as)](#SteelDesignEffectiveLength+SetSegmentsRestrainedBothEnds)
    * [.SetSegmentsUnrestrainedOneEnd(moment_modification_unrestrained_segments_as, modification_factor_alpha_unrestrained_segments_as, slenderness_reduction_unrestrained_segments_as)](#SteelDesignEffectiveLength+SetSegmentsUnrestrainedOneEnd)
    * [.SetModificationFactor(modification_factor_cb_aisi, modification_factor_cb_aisi_user_defined_value)](#SteelDesignEffectiveLength+SetModificationFactor)
    * [.SetNodalSupportsStartWithSupportType(support_type)](#SteelDesignEffectiveLength+SetNodalSupportsStartWithSupportType)
    * [.SetNodalSupportsEndWithSupportType(support_type)](#SteelDesignEffectiveLength+SetNodalSupportsEndWithSupportType)
    * [.SetNodalSupportsStartWithIndividuallySupportType(support_in_y, support_in_z, restraint_about_x, restraint_about_z, restraint_warping)](#SteelDesignEffectiveLength+SetNodalSupportsStartWithIndividuallySupportType)
    * [.SetNodalSupportsEndWithIndividuallySupportType(support_in_y, support_in_z, restraint_about_x, restraint_about_z, restraint_warping)](#SteelDesignEffectiveLength+SetNodalSupportsEndWithIndividuallySupportType)
    * [.InsertNodalSupportIntermediateNodeWithSupportType(support_type)](#SteelDesignEffectiveLength+InsertNodalSupportIntermediateNodeWithSupportType)
    * [.InsertNodalIndividuallySupportIntermediateNode(support_in_y, support_in_z, restraint_about_x, restraint_about_z, restraint_warping)](#SteelDesignEffectiveLength+InsertNodalIndividuallySupportIntermediateNode)
    * [.SetDifferentPropertiesForNodalSupports(different_properties)](#SteelDesignEffectiveLength+SetDifferentPropertiesForNodalSupports)
    * [.SetEffectiveLengthFactors(row, flexural_buckling_u, flexural_buckling_v, flexural_buckling_y, flexural_buckling_z, torsional_buckling, lateral_torsional_buckling, critical_moment, lateral_torsional_buckling_top, lateral_torsional_buckling_bottom)](#SteelDesignEffectiveLength+SetEffectiveLengthFactors)
    * [.SetOverwriteEffectiveLengths(row, flexural_buckling_u, flexural_buckling_v, flexural_buckling_y, flexural_buckling_z, torsional_buckling, lateral_torsional_buckling, critical_moment, lateral_torsional_buckling_top, lateral_torsional_buckling_bottom)](#SteelDesignEffectiveLength+SetOverwriteEffectiveLengths)
    * [.SetEccentricity(row, eccentricity_type, eccentricity_ez)](#SteelDesignEffectiveLength+SetEccentricity)

<a name="SteelDesignEffectiveLength+GetNo"></a>

### steelDesignEffectiveLength.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  
**Returns**: Effective length number  
<a name="SteelDesignEffectiveLength+GetEffectiveLength"></a>

### steelDesignEffectiveLength.GetEffectiveLength() ⇒
**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  
**Returns**: Effective length object  
<a name="SteelDesignEffectiveLength+SetName"></a>

### steelDesignEffectiveLength.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="SteelDesignEffectiveLength+SetDeterminationType"></a>

### steelDesignEffectiveLength.SetDeterminationType(flexural_buckling_about_y, flexural_buckling_about_z, torsional_buckling, lateral_torsional_buckling, determination_mcr)
Sets Determination Type

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| flexural_buckling_about_y | <code>Boolean</code> | Consider effective lengths for flexural buckling about y/u, can be undefined (if not set, true as default) |
| flexural_buckling_about_z | <code>Boolean</code> | Consider effective lengths for flexural buckling about z/v, can be undefined (if not set, true as default) |
| torsional_buckling | <code>Boolean</code> | Consider effective lengths for torsional buckling (for all standards except IS, BS and SP ones), can be undefined (if not set, true as default) |
| lateral_torsional_buckling | <code>Boolean</code> | Consider effective lengths for lateral-torsional buckling, can be undefined (if not set, true as default) |
| determination_mcr | <code>String</code> | Determination of elastic critical moment Mcr (for all standards except SP one), values are different along to current code for standard, can be undefined |

<a name="SteelDesignEffectiveLength+SetBucklingAxes"></a>

### steelDesignEffectiveLength.SetBucklingAxes(principal_section_axes, geometric_section_axes)
Sets Buckling axes

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| principal_section_axes | <code>Boolean</code> | Principal section axes y/u and z/v, can be undefined (if not set, true as default) |
| geometric_section_axes | <code>Boolean</code> | Geometric section axes y and z, can be undefined (if not set, false as default) |

<a name="SteelDesignEffectiveLength+SetBucklingFactorType"></a>

### steelDesignEffectiveLength.SetBucklingFactorType(buckling_factor_type)
Sets Buckling factor type

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| buckling_factor_type | <code>String</code> | Buckling factor type (THEORETICAL, RECOMMENDED), can be undefined (if not set, THEORETICAL as default) |

<a name="SteelDesignEffectiveLength+SetMemberType"></a>

### steelDesignEffectiveLength.SetMemberType(member_type, member_type_yy, member_type_zz)
Sets Member type

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| member_type | <code>String</code> | Member type (BEAM, CANTILEVER), can be undefined (if not set, BEAM as default) |
| member_type_yy | <code>String</code> | Member type y-y (BEAM, CANTILEVER), can be undefined (if not set, BEAM as default) |
| member_type_zz | <code>String</code> | Member type z-z (BEAM, CANTILEVER), can be undefined (if not set, BEAM as default) |

<a name="SteelDesignEffectiveLength+SetEffectiveLengthsAccToStandard"></a>

### steelDesignEffectiveLength.SetEffectiveLengthsAccToStandard(standard_of_effective_lengths)
Sets Effective lengths acc. to standard

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| standard_of_effective_lengths | <code>String</code> | Standard (AISC_360, AISI_S100), can be undefined (if not set, AISC_360 as default) |

<a name="SteelDesignEffectiveLength+SetSegmentsRestrainedBothEnds"></a>

### steelDesignEffectiveLength.SetSegmentsRestrainedBothEnds(moment_modification_restrained_segments_as, modification_factor_alpha_restrained_segments_as, slenderness_reduction_restrained_segments_as)
Sets Segments fully or partially restrained at both ends

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| moment_modification_restrained_segments_as | <code>String</code> | Moment modification factor αm acc. to 5.6.1.1(a) (BASIC_VALUE, ACC_TO_5611_II, ACC_TO_5611_III, EIGENVALUE_METHOD, USER_DEFINED), can be undefined (if not set, BASIC_VALUE as default) |
| modification_factor_alpha_restrained_segments_as | <code>Number</code> | User defined αm, can be undefined (if not set, 1.00 as default) |
| slenderness_reduction_restrained_segments_as | <code>String</code> | Slenderness reduction factor αs acc. to Eq. 5.6.1.1(2) (ACC_TO_5611, EIGENVALUE_METHOD), can be undefined (if not set, ACC_TO_5611 as default) |

<a name="SteelDesignEffectiveLength+SetSegmentsUnrestrainedOneEnd"></a>

### steelDesignEffectiveLength.SetSegmentsUnrestrainedOneEnd(moment_modification_unrestrained_segments_as, modification_factor_alpha_unrestrained_segments_as, slenderness_reduction_unrestrained_segments_as)
Sets Segments unrestrained at one end

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| moment_modification_unrestrained_segments_as | <code>String</code> | Moment modification factor αm acc. to 5.6.1.1(a) (BASIC_VALUE, ACC_TO_5611_II, USER_DEFINED), can be undefined (if not set, BASIC_VALUE as default) |
| modification_factor_alpha_unrestrained_segments_as | <code>Number</code> | User defined αm, can be undefined (if not set, 1.00 as default) |
| slenderness_reduction_unrestrained_segments_as | <code>String</code> | Slenderness reduction factor αs acc. to 5.6.2 (ACC_TO_5611, EIGENVALUE_METHOD), can be undefined (if not set, ACC_TO_5611 as default) |

<a name="SteelDesignEffectiveLength+SetModificationFactor"></a>

### steelDesignEffectiveLength.SetModificationFactor(modification_factor_cb_aisi, modification_factor_cb_aisi_user_defined_value)
Sets Modification factor Cb/ω2 (only for CSA/AISI S100, NBR, CSA standards)

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| modification_factor_cb_aisi | <code>String</code> | Factor type (CB_BASIC_VALUE, AUTOMATICALLY_ACC_TO_EQ_F2112, CB_USER_DEFINED), can be undefined (if not set, CB_BASIC_VALUE as default) |
| modification_factor_cb_aisi_user_defined_value | <code>Number</code> | User-defined value, can be undefined (if not set, 1.5 (Cb), 1.0 (ω2) as default) |

<a name="SteelDesignEffectiveLength+SetNodalSupportsStartWithSupportType"></a>

### steelDesignEffectiveLength.SetNodalSupportsStartWithSupportType(support_type)
Sets Nodal supports type for start sequence node

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Z, FIXED_IN_Y, RESTRAINT_ABOUT_X, FIXED_IN_Z_AND_TORSION, FIXED_IN_Z_Y_AND_TORSION, FIXED_IN_Z_AND_TORSION_AND_WARPING, FIXED_IN_Z_Y_AND_TORSION_AND_WARPING, FIXED_ALL, INDIVIDUALLY), can be undefined (if not set, FIXED_IN_Z_Y_AND_TORSION as default) |

<a name="SteelDesignEffectiveLength+SetNodalSupportsEndWithSupportType"></a>

### steelDesignEffectiveLength.SetNodalSupportsEndWithSupportType(support_type)
Sets Nodal supports type for end sequence node

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Z, FIXED_IN_Y, RESTRAINT_ABOUT_X, FIXED_IN_Z_AND_TORSION, FIXED_IN_Z_Y_AND_TORSION, FIXED_IN_Z_AND_TORSION_AND_WARPING, FIXED_IN_Z_Y_AND_TORSION_AND_WARPING, FIXED_ALL, INDIVIDUALLY), can be undefined (if not set, FIXED_IN_Z_Y_AND_TORSION as default) |

<a name="SteelDesignEffectiveLength+SetNodalSupportsStartWithIndividuallySupportType"></a>

### steelDesignEffectiveLength.SetNodalSupportsStartWithIndividuallySupportType(support_in_y, support_in_z, restraint_about_x, restraint_about_z, restraint_warping)
Sets Nodal supports individually values for start sequence node

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_in_y | <code>Boolean</code> | Fixed support in y/u, can be undefined (if not set, true as default) |
| support_in_z | <code>Boolean</code> | Fixed support in z/v, can be undefined (if not set, true as default) |
| restraint_about_x | <code>Boolean</code> | Restraint about x, can be undefined (if not set, true as default) |
| restraint_about_z | <code>Boolean</code> | Restraint about z, can be undefined (if not set, false as default) |
| restraint_warping | <code>Boolean</code> | Warping ω, can be undefined (if not set, false as default) |

<a name="SteelDesignEffectiveLength+SetNodalSupportsEndWithIndividuallySupportType"></a>

### steelDesignEffectiveLength.SetNodalSupportsEndWithIndividuallySupportType(support_in_y, support_in_z, restraint_about_x, restraint_about_z, restraint_warping)
Sets Nodal supports individually values for end sequence node

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_in_y | <code>Boolean</code> | Fixed support in y/u, can be undefined (if not set, true as default) |
| support_in_z | <code>Boolean</code> | Fixed support in z/v, can be undefined (if not set, true as default) |
| restraint_about_x | <code>Boolean</code> | Restraint about x, can be undefined (if not set, true as default) |
| restraint_about_z | <code>Boolean</code> | Restraint about z, can be undefined (if not set, false as default) |
| restraint_warping | <code>Boolean</code> | Warping ω, can be undefined (if not set, false as default) |

<a name="SteelDesignEffectiveLength+InsertNodalSupportIntermediateNodeWithSupportType"></a>

### steelDesignEffectiveLength.InsertNodalSupportIntermediateNodeWithSupportType(support_type)
Inserts Intermediate node with support type

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_type | <code>String</code> | Support type (NONE, FIXED_IN_Z, FIXED_IN_Y, RESTRAINT_ABOUT_X, FIXED_IN_Z_AND_TORSION, FIXED_IN_Z_Y_AND_TORSION, FIXED_IN_Z_AND_TORSION_AND_WARPING, FIXED_IN_Z_Y_AND_TORSION_AND_WARPING, FIXED_ALL, INDIVIDUALLY), can be undefined (if not set, FIXED_IN_Z_Y_AND_TORSION as default) |

<a name="SteelDesignEffectiveLength+InsertNodalIndividuallySupportIntermediateNode"></a>

### steelDesignEffectiveLength.InsertNodalIndividuallySupportIntermediateNode(support_in_y, support_in_z, restraint_about_x, restraint_about_z, restraint_warping)
Insert Intermediate node with individually support values

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| support_in_y | <code>Boolean</code> | Fixed support in y/u, can be undefined (if not set, true as default) |
| support_in_z | <code>Boolean</code> | Fixed support in z/v, can be undefined (if not set, true as default) |
| restraint_about_x | <code>Boolean</code> | Restraint about x, can be undefined (if not set, true as default) |
| restraint_about_z | <code>Boolean</code> | Restraint about z, can be undefined (if not set, false as default) |
| restraint_warping | <code>Boolean</code> | Warping ω, can be undefined (if not set, false as default) |

<a name="SteelDesignEffectiveLength+SetDifferentPropertiesForNodalSupports"></a>

### steelDesignEffectiveLength.SetDifferentPropertiesForNodalSupports(different_properties)
Sets Different properties state for nodal supports

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| different_properties | <code>Boolean</code> | Different properties, can be undefined (true as default) |

<a name="SteelDesignEffectiveLength+SetEffectiveLengthFactors"></a>

### steelDesignEffectiveLength.SetEffectiveLengthFactors(row, flexural_buckling_u, flexural_buckling_v, flexural_buckling_y, flexural_buckling_z, torsional_buckling, lateral_torsional_buckling, critical_moment, lateral_torsional_buckling_top, lateral_torsional_buckling_bottom)
Sets Effective length factors for segment sequence

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Segment sequence row |
| flexural_buckling_u | <code>Number</code> | Principal axes u, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_v | <code>Number</code> | Principal axes v, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_y | <code>Number</code> | Geometrical axes y, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_z | <code>Number</code> | Geometrical axes z, can be undefined (1.00 as default if it's enabled) |
| torsional_buckling | <code>Number</code> | Torsional, can be undefined (1.00 as default if it's enabled) |
| lateral_torsional_buckling | <code>Number</code> | Lateral-torsional buckling, can be undefined (1.00 as default if it's enabled) |
| critical_moment | <code>Number</code> | Critical moment, can be undefined (1.00 as default if it's enabled) |
| lateral_torsional_buckling_top | <code>Number</code> | Lateral-torsional buckling top, can be undefined (1.00 as default if it's enabled) |
| lateral_torsional_buckling_bottom | <code>Number</code> | Lateral-torsional buckling bottom, can be undefined (1.00 as default if it's enabled) |

<a name="SteelDesignEffectiveLength+SetOverwriteEffectiveLengths"></a>

### steelDesignEffectiveLength.SetOverwriteEffectiveLengths(row, flexural_buckling_u, flexural_buckling_v, flexural_buckling_y, flexural_buckling_z, torsional_buckling, lateral_torsional_buckling, critical_moment, lateral_torsional_buckling_top, lateral_torsional_buckling_bottom)
Sets Overwrite effective length for segment sequence

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Segment sequence row |
| flexural_buckling_u | <code>Number</code> | Principal axes u, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_v | <code>Number</code> | Principal axes v, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_y | <code>Number</code> | Geometrical axes y, can be undefined (1.00 as default if it's enabled) |
| flexural_buckling_z | <code>Number</code> | Geometrical axes z, can be undefined (1.00 as default if it's enabled) |
| torsional_buckling | <code>Number</code> | Torsional, can be undefined (1.00 as default if it's enabled) |
| lateral_torsional_buckling | <code>Number</code> | Lateral-torsional buckling, can be undefined (1.00 as default if it's enabled) |
| critical_moment | <code>Number</code> | Critical moment, can be undefined (1.00 as default if it's enabled) |
| lateral_torsional_buckling_top | <code>Number</code> | Lateral-torsional buckling top, can be undefined (1.00 as default if it's enabled) |
| lateral_torsional_buckling_bottom | <code>Number</code> | Lateral-torsional buckling bottom, can be undefined (1.00 as default if it's enabled) |

<a name="SteelDesignEffectiveLength+SetEccentricity"></a>

### steelDesignEffectiveLength.SetEccentricity(row, eccentricity_type, eccentricity_ez)
Sets Eccentricity

**Kind**: instance method of [<code>SteelDesignEffectiveLength</code>](#SteelDesignEffectiveLength)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Segment sequence row |
| eccentricity_type | <code>String</code> | Eccentricity type (NONE, AT_UPPER_FLANGE, AT_LOWER_FLANGE, USER_VALUE), can be undefined (if not set, NONE as default) |
| eccentricity_ez | <code>Number</code> | User-defined eccentricity value |

<a name="SteelDesignMemberLocalSectionReduction"></a>

## SteelDesignMemberLocalSectionReduction(no, members_no, member_sets_no, comment, params)
Creates Steel design Member local section reduction

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Steel design member local section reduction index, can be undefined |
| members_no | <code>Array</code> | List of members indexes, can be undefined |
| member_sets_no | <code>Array</code> | List of member sets indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [SteelDesignMemberLocalSectionReduction(no, members_no, member_sets_no, comment, params)](#SteelDesignMemberLocalSectionReduction)
    * [.GetNo()](#SteelDesignMemberLocalSectionReduction+GetNo) ⇒
    * [.GetMemberLocalSectionReduction()](#SteelDesignMemberLocalSectionReduction+GetMemberLocalSectionReduction) ⇒
    * [.SetName(name)](#SteelDesignMemberLocalSectionReduction+SetName)
    * [.AddReductionType(reduction_type, position, multiple)](#SteelDesignMemberLocalSectionReduction+AddReductionType)
    * [.SetDesignParameters(row, definition_type, reduction_area)](#SteelDesignMemberLocalSectionReduction+SetDesignParameters)
    * [.SetSectionValues(row, definition_type, sectional_area, shear_area_y, shear_area_z, moment_of_inertia_y, moment_of_inertia_z, torsional_constant)](#SteelDesignMemberLocalSectionReduction+SetSectionValues)
    * [.SetMultipleDefinition(row, multiple_number, multiple_offset_definition_type, multiple_offset)](#SteelDesignMemberLocalSectionReduction+SetMultipleDefinition)

<a name="SteelDesignMemberLocalSectionReduction+GetNo"></a>

### steelDesignMemberLocalSectionReduction.GetNo() ⇒
**Kind**: instance method of [<code>SteelDesignMemberLocalSectionReduction</code>](#SteelDesignMemberLocalSectionReduction)  
**Returns**: Member local section reduction number  
<a name="SteelDesignMemberLocalSectionReduction+GetMemberLocalSectionReduction"></a>

### steelDesignMemberLocalSectionReduction.GetMemberLocalSectionReduction() ⇒
**Kind**: instance method of [<code>SteelDesignMemberLocalSectionReduction</code>](#SteelDesignMemberLocalSectionReduction)  
**Returns**: Member local section reduction object  
<a name="SteelDesignMemberLocalSectionReduction+SetName"></a>

### steelDesignMemberLocalSectionReduction.SetName(name)
Sets Name

**Kind**: instance method of [<code>SteelDesignMemberLocalSectionReduction</code>](#SteelDesignMemberLocalSectionReduction)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name, can be undefined (when undefined, generated name is used) |

<a name="SteelDesignMemberLocalSectionReduction+AddReductionType"></a>

### steelDesignMemberLocalSectionReduction.AddReductionType(reduction_type, position, multiple)
Adds reduction type and location

**Kind**: instance method of [<code>SteelDesignMemberLocalSectionReduction</code>](#SteelDesignMemberLocalSectionReduction)  

| Param | Type | Description |
| --- | --- | --- |
| reduction_type | <code>String</code> | Reduction type (DESIGN_PARAMETERS, SECTION_VALUES), can be undefined (DESIGN_PARAMETERS as default) |
| position | <code>Number</code> | Position |
| multiple | <code>Boolean</code> | Multiple, can be undefined (false as default) |

<a name="SteelDesignMemberLocalSectionReduction+SetDesignParameters"></a>

### steelDesignMemberLocalSectionReduction.SetDesignParameters(row, definition_type, reduction_area)
Sets Design parameters

**Kind**: instance method of [<code>SteelDesignMemberLocalSectionReduction</code>](#SteelDesignMemberLocalSectionReduction)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Row |
| definition_type | <code>String</code> | Definition type (ABSOLUTE, RELATIVE), can be undefined (ABSOLUTE as default) |
| reduction_area | <code>Number</code> | Area of reduction |

<a name="SteelDesignMemberLocalSectionReduction+SetSectionValues"></a>

### steelDesignMemberLocalSectionReduction.SetSectionValues(row, definition_type, sectional_area, shear_area_y, shear_area_z, moment_of_inertia_y, moment_of_inertia_z, torsional_constant)
Sets Section values

**Kind**: instance method of [<code>SteelDesignMemberLocalSectionReduction</code>](#SteelDesignMemberLocalSectionReduction)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Row |
| definition_type | <code>String</code> | Definition type (ABSOLUTE, RELATIVE), can be undefined (ABSOLUTE as default) |
| sectional_area | <code>Number</code> | Net sectional area / Sectional area factor, can be undefined (is not set, 0.1 / 100 as default) |
| shear_area_y | <code>Number</code> | Net shear area y / Shear area y factor, can be undefined (is not set, 0.1 / 100 as default) |
| shear_area_z | <code>Number</code> | Net shear area z / Shear area z factor, can be undefined (is not set, 0.1 / 100 as default) |
| moment_of_inertia_y | <code>Number</code> | Net moment of inertia y / Moment of inertia y factor, can be undefined (is not set, 0.1 / 100 as default) |
| moment_of_inertia_z | <code>Number</code> | Net moment of inertia z / Moment of inertia z factor, can be undefined (is not set, 0.1 / 100 as default) |
| torsional_constant | <code>Number</code> | Net torsional constant / Torsional constant factor, can be undefined (is not set, 0.1 / 100 as default) |

<a name="SteelDesignMemberLocalSectionReduction+SetMultipleDefinition"></a>

### steelDesignMemberLocalSectionReduction.SetMultipleDefinition(row, multiple_number, multiple_offset_definition_type, multiple_offset)
Sets multiple definition

**Kind**: instance method of [<code>SteelDesignMemberLocalSectionReduction</code>](#SteelDesignMemberLocalSectionReduction)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Number</code> | Row |
| multiple_number | <code>Number</code> | Number, can be undefined (is not set, 2 as default) |
| multiple_offset_definition_type | <code>String</code> | Offset definition type (ABSOLUTE, RELATIVE), can be undefined (is not set, ABSOLUTE as default) |
| multiple_offset | <code>Number</code> | Offset |

