# Load Cases and Combinations

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/LoadCasesAndCombinations)*

## CombinationWizard


### CombinationWizard(no, name, static_analysis_settings, stability_analysis_setting, consider_imperfection_case, generate_same_CO_without_IC, initial_state_case, initial_state_definition_type, structure_modification, user_defined_action_combinations, favorable_permanent_actions, reduce_number_of_generated_combinations, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Combination Wizard Tag


    * **name** (*str*, *optional*) – User-Defined Name


    * **static_analysis_settings** (*int*) – Assign Static Analysis Settings


    * **stability_analysis_setting** (*int*) – Assign Stability Analysis Setting


    * **consider_imperfection_case** (*bool*) – Enable/disable Inferpaction Case


    * **generate_same_CO_without_IC** (*bool*) – Enable/disable Generate same CO without IC


    * **initial_state_case** (*int*) – Assign Initial State Case


    * **initial_state_definition_type** (*enum*) – Initial State Defintion Type Enumeration


    * **structure_modification** (*int*) – Structure Modification to be considered


    * **user_defined_action_combinations** (*bool*) – Enable/disable User defined Combinations


    * **favorable_permanent_actions** (*bool*) – Enable/diable Favourable Permanent Actions


    * **reduce_number_of_generated_combinations** (*bool*) – Enable/disable Reduce Number of Generated Combinations


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### CombinationWizard.SetResultCombination(no, name, stability_analysis_setting, consider_imperfection_case, generate_same_CO_without_IC, user_defined_action_combinations, favorable_permanent_actions, generate_subcombinations_of_type_superposition, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Result Combination Wizard Tag


    * **name** (*str*, *optional*) – User-Defined Name


    * **stability_analysis_setting** (*int*) – Assign Stability Analysis Settings


    * **consider_imperfection_case** (*bool*) – Enable/disable Imperfection Case


    * **generate_same_CO_without_IC** (*bool*) – Enable/disable Generate same CO without IC


    * **user_defined_action_combinations** (*bool*) – Enable/disable User Defined Action Combinations


    * **favorable_permanent_actions** (*bool*) – Enable/disable Favorable Permanent Actions


    * **generate_subcombinations_of_type_superposition** (*bool*) – Enable/disable Subcombinations of Type Superposition


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## DesignSituation


### DesignSituation(no, design_situation_type, active, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Design Situation Tag


    * **design_situation_type** (*enum*) – Design Situation Type Enumeration


    * **active** (*bool*) – Enable/Disable Design Situation Activity


    * **name** (*str*, *optional*) – User-Defined Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## LoadCase


### LoadCase(no, name, self_weight, action_category, imperfection_case, structure_modification, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Case Tag


    * **name** (*str*) – Load Case Name


    * **self_weight** (*list*) – Self-Weight Parameters
        > self_weight = [self_weight_active, self_weight_factor_x, self_weight_factor_y, self_weight_factor_z]


    * **action_category** (*enum*) – Action Category Type Enumeration


    * **imperfection_case** (*int*, *optional*) - Assign Imperfection Case


    * **structure_modification** (*int*, *optional*) - Assign Structure Modification


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LoadCase.StaticAnalysis(no, name, to_solve, analysis_settings_no, action_category, self_weight, imperfection_case, structure_modification, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Case Tag


    * **name** (*str*) – Load Case Name


    * **to_solve** (*bool*) – Enable/Disbale Load Case Solver Status


    * **analysis_settings_no** (*int*) – Analysis Settings Number


    * **action_category** (*enum*) – Action Category Enumeration


    * **self_weight** (*list*) – Self-weight Considerations
    
        > * for self-weight considerations;     
        self_weight = [True, self_weight_factor_x, self_weight_factor_y, self_weight_factor_z]

        > * for no self-weight considerations;  
        self_weight = [False]


    * **imperfection_case** (*int*, *optional*) - Assign Imperfection Case


    * **structure_modification** (*int*, *optional*) - Assign Structure Modification


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


## LoadCasesAndCombinations 


### LoadCasesAndCombinations(params, model)

* **Parameters**


    * **params** (*dict*, *optional*) – Combination Wizard Parameters

        > params = {"current_standard_for_combination_wizard":, "activate_combination_wizard_and_classification":, "activate_combination_wizard":, "result_combinations_active":, "result_combinations_parentheses_active":,"result_combinations_consider_sub_results":, "combination_name_according_to_action_category":}


    * **model** (*RFEM Class, optional*) - Model to be edited



## LoadCombination


### LoadCombination(no, analysis_type, design_situation, name, static_analysis_settings, consider_imperfection, consider_initial_state, structure_modification, to_solve, combination_items, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Combination Tag


    * **analysis_type** (*enum*) – Analysis Type Enumeration


    * **design_situation** (*int*) – Design Situation


    * **name** (*str*) – User defined Combination Name


    * **static_analysis_settings** (*int*) – Static Analysis Settings Number


    * **consider_imperfection** (*bool*) – Consider Imperfection Options


    * **consider_initial_state** (*bool*) – Consider Initial State


    * **structure_modification** (*bool*) – Enable/Disable Structure Modification


    * **to_solve** (*bool*) – Decide to solve


    * **no** (*int*) – Load Combination Tag


    * **combination_items** (*list of list*) – Combination Items

        > * for Combination Items;      
        combination_items = [[factor, load_case, action, is_leading],...]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## ModalAnalysisSettings


### ModalAnalysisSettings(no, name, solution_method, mass_conversion_type, mass_matrix_type, number_of_modes, acting_masses, neglect_masses, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Setting Tag


    * **name** (*str*) – Setting Name


    * **solution_method** (*enum*) – Modal Solution Method Enumeration


    * **mass_conversion_type** (*enum*) – Modal Mass Conversion Type Enumeration


    * **mass_matrix_type** (*enum*) – Modal Mass Matrix Type Enumeration


    * **number_of_modes** (*int*) – Number of Modes


    * **acting_masses** (*list*) – Acting Masses Directions List


    * **neglect_masses** (*enum*) – Modal Neglect Masses Enumeration


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## ResultCombination


### ResultCombination(no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Result Combination Tag


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


## SpectralAnalysisSettings


### SpectralAnalysisSettings(no, name, periodic_combination, directional_combination, equivalent_linear_combination, save_mode_results, signed_dominant_mode_results, directional_component_scale_value, damping_for_cqc_rule, constant_d_for_each_mode, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Sprectral Analysis Settings Tag


    * **name** (*str*) – Sprectral Analysis Settings Name


    * **periodic_combination** (*enum*) – Periodic Combination Rule Enumeration


    * **directional_combination** (*enum*) – Directional Component Combination Rule Enumeration


    * **equivalent_linear_combination** (*bool*) – Equivalent Linear Combination Boolean


    * **save_mode_results** (*bool*) – Save Mode Results Boolean


    * **signed_dominant_mode_results** (*bool*) – Signed Dominant Mode Results Boolean


    * **directional_component_scale_value** (*float*) – Directional Component Scale Value


    * **damping_for_cqc_rule** (*enum*) – Cqs Damping Rule Enumeration


    * **constant_d_for_each_mode** (*float*) – Constant d for Each Mode


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


## StabilityAnalysisSettings


### StabilityAnalysisSettings(no, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Stability Analysis Setting Tag


    * **name** (*str*) – Stability Analysis Setting Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### StabilityAnalysisSettings.EigenvalueMethod(no, name, number_of_lowest_eigenvalues, considered_favored_effect, critical_load_factor, minimum_initial_strain, local_torsional_rotations, eigenvalue_method, matrix_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Stability Analysis Setting Tag


    * **name** (*str*, *optional*) – Stability Analysis Setting Name


    * **number_of_lowest_eigenvalues** (*int*) – Number of Lowest Eigenvalues


    * **considered_favored_effect** (*bool*) – Considered Favored Effect


    * **critical_load_factor** (*int*, *optional*) – Critical Load Factor
    
        > * for find_eigenvectors_beyond_critical_load_factor == False:     
        critical_load_factor = None

        > * for find_eigenvectors_beyond_critical_load_factor == True:  
        critical_load_factor = int


    * **minimum_initial_strain** (*optional*) – Minimum Initial Strain
    
        > * for minimum initial strain application:     
        minimum_initial_strain != 0 or minimum_initial_strain is not None

        > * for no minimum initial strain application:  
        minimum_initial_strain == 0 or minimum_initial_strain is None


    * **local_torsional_rotations** (*optional*) – Local Torsional Rotations
    
        > * for no local torsional rotations display:   
        local_torsional_rotations = None

        > * for local torsional rotations display:  
        local_torsional_rotations = double


    * **eigenvalue_method** (*enum*) – StabilityAnalysisSettings Eigenvalue Method Enumeration


    * **matrix_type** (*enum*) – StabilityAnalysisSettings Matrix Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### StabilityAnalysisSettings.IncrementalyMethodWithEigenvalue(no, name, number_of_lowest_eigenvalues, considered_favored_effect, critical_load_factor, minimum_initial_strain, local_torsional_rotations, incrementally_increasing_loading, stopping_of_load_increasing, save_results_of_all_increments, eigenvalue_method, matrix_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Stability Analysis Setting Tag


    * **name** (*str*, *optional*) – Stability Analysis Setting Name


    * **number_of_lowest_eigenvalues** (*int*) – Number of Lowest Eigenvalues


    * **considered_favored_effect** (*bool*) – Considered Favored Effect


    * **critical_load_factor** (*int*, *optional*) – Critical Load Factor
    
        > * for find_eigenvectors_beyond_critical_load_factor == False:     
        critical_load_factor = None

        > * for find_eigenvectors_beyond_critical_load_factor == True:  
        critical_load_factor = int


    * **minimum_initial_strain** (*optional*) – Minimum Initial Strain
    
        > * for minimum initial strain application:     
        minimum_initial_strain != 0 or minimum_initial_strain is not None

        > * for no minimum initial strain application:  
        minimum_initial_strain is None


    * **local_torsional_rotations** (*optional*) – Local Torsional Rotations
    
        > * for no local torsional rotations display:   
        local_torsional_rotations = None

        > * for local torsional rotations display:  
        local_torsional_rotations = double


    * **incrementally_increasing_loading** (*list*) – Incrementally Increasing Loading

        > incrementally_increasing_loading = [initial_load_factor, load_factor_increment, refinement_of_the_last_load_increment, maximum_number_of_load_increments]


    * **stopping_of_load_increasing** (*list*, *optional*) – Stopping of Load Increasing
    
        > * for stopping of load increasing deactivated:    
        stopping_of_load_increasing = None

        > * for result u:   
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U, limit_result_displacement, limit_node]

        > * for result uX:  
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U_X, limit_result_displacement, limit_node]

        > * for result uY:  
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U_Y, limit_result_displacement, limit_node]

        > * for result uZ:  
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U_Z, limit_result_displacement, limit_node]

        > * for result phi:     
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI, limit_result_rotation, limit_node]

        > * for result phiX:    
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI_X, limit_result_rotation, limit_node]

        > * for result phiY:    
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI_Y, limit_result_rotation, limit_node]

        > * for result phiZ:    
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI_Z, limit_result_rotation, limit_node]


    * **save_results_of_all_increments** (*bool*, *optional*) – Save Results of All Increments


    * **eigenvalue_method** (*enum*) – StabilityAnalysisSettings Eigenvalue Method Enumeration


    * **matrix_type** (*enum*) – StabilityAnalysisSettings Matrix Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### StabilityAnalysisSettings.IncrementalyMethodWithoutEigenvalue(no, name, minimum_initial_strain, local_torsional_rotations, incrementally_increasing_loading, stopping_of_load_increasing, save_results_of_all_increments, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Stability Analysis Setting Tag


    * **name** (*str*, *optional*) – Stability Analysis Setting Name


    * **minimum_initial_strain** (*optional*) – Minimum Initial Strain
    
        > * for minimum initial strain application:     
        minimum_initial_strain != 0 or minimum_initial_strain is not None

        > * for no minimum initial strain application:  
        minimum_initial_strain == 0 or minimum_initial_strain is None


    * **local_torsional_rotations** (*optional*) – Local Torsional Rotations
    
        > * for no local torsional rotations display:   
        local_torsional_rotations = None

        > * for local torsional rotations display:      
        local_torsional_rotations = double


    * **incrementally_increasing_loading** (*list*) – Incrementally Increasing Loading
    
        > incrementally_increasing_loading = [initial_load_factor, load_factor_increment, refinement_of_the_last_load_increment, maximum_number_of_load_increments]


    * **stopping_of_load_increasing** (*list*, *optional*) – Stopping of Load Increasing
    
        > * for stopping of load increasing deactivated:    
        stopping_of_load_increasing = None

        > * for result u:   
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U, limit_result_displacement, limit_node]

        > * for result uX:  
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U_X, limit_result_displacement, limit_node]

        > * for result uY:  
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U_Y, limit_result_displacement, limit_node]

        > * for result uZ:  
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_DISPLACEMENT_U_Z, limit_result_displacement, limit_node]

        > * for result phi:     
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI, limit_result_rotation, limit_node]

        > * for result phiX:    
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI_X, limit_result_rotation, limit_node]

        > * for result phiY:    
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI_Y, limit_result_rotation, limit_node]

        > * for result phiZ:    
        stopping_of_load_increasing = [StabilityAnalysisSettingsStoppingOfLoadIncreasingResult.RESULT_TYPE_ROTATION_PHI_Z, limit_result_rotation, limit_node]


    * **save_results_of_all_increments** (*bool*, *optional*) – Save Results of All Increments


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## StaticAnalysisSettings


### StaticAnalysisSettings(no, name, analysis_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Static Analysis Setting Tag


    * **name** (*str*) – Static Analysis Setting Name


    * **analysis_type** (*enum*) – Static Analysis Type Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### StaticAnalysisSettings.GeometricallyLinear(no, name, load_modification, bourdon_effect, nonsymmetric_direct_solver, method_of_equation_system, plate_bending_theory, mass_conversion, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Static Analysis Setting Tag


    * **name** (*str*, *optional*) – Static Analysis Setting Name


    * **load_modification** (*list*, *optional*) – Load Modification Parameters
        
        > load_modification = [loading_by_multiplier_factor, multiplier_factor, dividing_results]


    * **bourdon_effect** (*bool*, *optional*) – Bourdon Effect Boolean


    * **nonsymmetric_direct_solver** (*bool*, *optional*) – Nonsymmetric Direct Solver Boolean


    * **method_of_equation_system** (*enum*) – Static Analysis Settings Method of Equation System Enumeration


    * **plate_bending_theory** (*enum*) – Static Analysis Settings Plate Bending Theory Enumeration


    * **mass_conversion** (*list*, *optional*) – Mass Conversion Parameters
    
        > mass_conversion = [mass_conversion_enabled, mass_conversion_factor_in_direction_x, mass_conversion_factor_in_direction_y, mass_conversion_factor_in_direction_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary

    * **model** (*RFEM Class, optional*) - Model to be edited



### StaticAnalysisSettings.LargeDeformation(no, name, iterative_method, standard_precision_and_tolerance_settings, control_nonlinear_analysis, load_modification, instabil_structure_calculation, bourdon_effect, nonsymmetric_direct_solver, method_of_equation_system, plate_bending_theory, mass_conversion, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Static Analysis Setting Tag


    * **name** (*str*, *optional*) – Static Analysis Setting Name


    * **iterative_method** (*enum*) – Static Analysis Settings Iterative Method for Non-linear Analysis Enumeration


    * **standard_precision_and_tolerance_settings** (*list*, *optional*) – Standard Precision and Tolerance Settings List

        > standard_precision_and_tolerance_settings = [standard_precision_and_tolerance_settings_enabled, precision_of_convergence_criteria_for_nonlinear_calculation, tolerance_for_detection_of_instability, robustness_of_iterative_calculation]


    * **control_nonlinear_analysis** (*list*) – Nonlinear Analysis Control Parameters

        > control_nonlinear_analysis = [max_number_of_iterations, number_of_load_increments]

        > * for iterative_method == “NEWTON_RAPHSON” or iterative_method.name == “NEWTON_RAPHSON_COMBINED_WITH_PICARD” or iterative_method.name == “PICARD” or iterative_method.name == “NEWTON_RAPHSON_WITH_POSTCRITICAL_ANALYSIS”:    
        control_nonlinear_analysis = [max_number_of_iterations = int, number_of_load_increments = int]

        > * for iterative_method == “DYNAMIC_RELAXATION”:   
        control_nonlinear_analysis = [max_number_of_iterations = None, number_of_load_increments = None]



    * **load_modification** (*list*, *optional*) – Load Modification Parameters

        > load_modification = [loading_by_multiplier_factor, multiplier_factor, dividing_results]


    * **instabil_structure_calculation** (*bool*, *optional*) – Instabil Structure Calculation Boolean


    * **bourdon_effect** (*bool*, *optional*) – Bourdon Effect Boolean


    * **nonsymmetric_direct_solver** (*bool*, *optional*) – Nonsymmetric Direct Solver Boolean


    * **method_of_equation_system** (*enum*) – Static Analysis Settings Method of Equation System Enumeration


    * **plate_bending_theory** (*enum*) – Static Analysis Settings Plate Bending Theory Enumeration


    * **mass_conversion** (*list*, *optional*) – Mass Conversion Parameters

        > mass_conversion = [mass_conversion_enabled, mass_conversion_factor_in_direction_x, mass_conversion_factor_in_direction_y, mass_conversion_factor_in_direction_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### StaticAnalysisSettings.SecondOrderPDelta(no, name, iterative_method, standard_precision_and_tolerance_settings, control_nonlinear_analysis, load_modification, favorable_effect_due_to_tension_in_members, bourdon_effect, nonsymmetric_direct_solver, internal_forces_to_deformed_structure, method_of_equation_system, plate_bending_theory, mass_conversion, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Static Analysis Setting Tag


    * **name** (*str*, *optional*) – Static Analysis Setting Name


    * **iterative_method** (*enum*) – Static Analysis Settings Iterative Method for Non-linear Analysis Enumeration


    * **standard_precision_and_tolerance_settings** (*list*, *optional*) – Standard Precision and Tolerance Settings List
    
        > standard_precision_and_tolerance_settings = [standard_precision_and_tolerance_settings_enabled, precision_of_convergence_criteria_for_nonlinear_calculation, tolerance_for_detection_of_instability, robustness_of_iterative_calculation]


    * **control_nonlinear_analysis** (*list*) – Nonlinear Analysis Control Parameters

        > control_nonlinear_analysis = [max_number_of_iterations, number_of_load_increments]


    * **load_modification** (*list*) - Modify Loading by Multiplier Factor
                
        > load_modification = [modify_loading_by_multiplier_factor, loading_multiplier_factor, divide_results_by_loading_factor]


    * **favorable_effect_due_to_tension_in_members** (*bool*, *optional*) – Favorable Effect due to Tension In Members Boolean


    * **bourdon_effect** (*bool*, *optional*) – Bourdon Effect Boolean


    * **nonsymmetric_direct_solver** (*bool*, *optional*) – Nonsymmetric Direct Solver Boolean


    * **internal_forces_to_deformed_structure** (*list*, *optional*) – Internal Forces to Deformed Structure List

        > internal_forces_to_deformed_structure = [refer_internal_forces_to_deformed_structure, internal_forces_to_deformed_structure_for_moments, internal_forces_to_deformed_structure_for_normal_forces, internal_forces_to_deformed_structure_for_shear_forces]


    * **method_of_equation_system** (*enum*) – Static Analysis Settings Method of Equation System Enumeration


    * **plate_bending_theory** (*enum*) – Static Analysis Settings Plate Bending Theory Enumeration


    * **mass_conversion** (*list*, *optional*) – Mass Conversion Parameters

        > mass_conversion = [mass_conversion_enabled, mass_conversion_factor_in_direction_x, mass_conversion_factor_in_direction_y, mass_conversion_factor_in_direction_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## WindSimulationAnalysisSettings


### WindSimulationAnalysisSettings(no, name, density, kinematic_viscosity, member_load_distribution, finite_volume_mesh_density, snap_to_model_edges, calculation_parameters, options, advanced_options, residual_pressure, boundary_layers_checked, boundary_layers_value, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Wind Simulation Analysis Setting Tag


    * **name** (*str*) – User Defined Name


    * **density** (*float*) – Density


    * **kinematic_viscosity** (*float*) – Kinematic Viscosity


    * **member_load_distribution** (*enum*) – Wind Simulation Analysis Settings Member Load Distribution Enumeration


    * **finite_volume_mesh_density** (*float*) – Finite Volume Mesh Density


    * **snap_to_model_edges** (*bool*) – Enable/disable Snap to Model Edges


    * **calculation_parameters** (*list*) – Calculation Parameters List

        > calculation_parameters = [Use Potential Flow to calculate initial Condition, Use Second Order numerical Scheme, Maximum number of Iterations, Turbulence Model]


    * **options** (*list*) – Options List

        > options = [Consider Turbulence, Slip Boundary on Bottom Boundary, User Defined Dimensions of Wind Tunnel, Save Solver Data To Continue Calculation]


    * **advanced_options** (*list*) – Relaxation Factors

        > advanced_options = [Pressure Field, Velocity field, Turbulence Kinetic Energy, Turbulence dissipation Rate, Specific Turbulence Dissipation Rate, Modified Turbulence kinetic Viscosity, Turbulence Intermittency, Momentum Thickness Reynolds Number]


    * **residual_pressure** (*float*) – Residual Pressure


    * **boundary_layers_checked** (*bool*) – Enable/disable Boundary Layers Checked


    * **boundary_layers_value** (*float*) – Boundary Layers Value


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited

 
      
### WindSimulationAnalysisSettings.SurfaceRoughness(no, name, consider_surface_roughness, sand_grain_roughness_height, roughness_constant, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Wind Simulation Analysis Setting Tag


    * **name** (*str*) – User Defined Name


    * **consider_surface_roughness** (*bool*) – Enable/disable Surface Roughness


    * **nasand_grain_roughness_heightme** (*float*) – Sand Grain Roughness Height


    * **roughness_constant** (*float*) – Roughness Constant


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### WindSimulationAnalysisSettings.TransientFlow(no, name, calculation_parameters, user_defined_simulation_time, simulation_time, start_time_for_saving_transient_result, turbulence_model_type, saving_results, user_defined_in_domain_for_flow_animation, user_defined_in_point_probes, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Wind Simulation Analysis Setting Tag


    * **name** (*str*) – User Defined Name


    * **calculation_parameters** (*list*) – Calculation Parameters List

        > calculation_parameters = [Use Steady Flow Solver To Calculate Initial Condition, Maximum Number Of Iterations Of Steady Flow Solver, Turbulence Type For Initial Condition, Error Tolerance for Data Compression]


    * **user_defined_simulation_time** (*bool*) – Enable/disable User defined simulation time and time steps


    * **simulation_time** (*flaot*) – Simulation Time


    * **start_time_for_saving_transient_result** (*flaot*) – Start Time For Saving Transient Result


    * **turbulence_model_type** (*enums*) – Wind Simulation Analysis Settings Turbulence Model Type


    * **saving_results** (*list*) – Saving Results

        > saving_results = [Transient Flow Time Step For Animation, Transient Flow Number Of Time Layers, Transient Flow Time Step Probes, Transient Flow Number Of Time Layers Probes]


    * **user_defined_in_domain_for_flow_animation** (*bool*) – Enable/disable User Defined In Domain For Flow Animation


    * **user_defined_in_point_probes** (*bool*) – Enable/disable User Defined In Point Probes


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


