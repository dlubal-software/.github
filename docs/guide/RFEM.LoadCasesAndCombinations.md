# Load Cases and Combinations

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/LoadCasesAndCombinations)*

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


### LoadCase(no, name, self_weight, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Case Tag


    * **name** (*str*) – Load Case Name


    * **self_weight** (*list*) – Self-Weight Parameters
        > self_weight = [self_weight_active, self_weight_factor_x, self_weight_factor_y, self_weight_factor_z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### LoadCase.StaticAnalysis(no, name, to_solve, analysis_settings_no, action_category, self_weight, comment, params, model)

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


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



## LoadCombination


### LoadCombination(no, analysis_type, design_situation, user_defined_name, static_analysis_settings, consider_imperfection, consider_initial_state, structure_modification, to_solve, combination_items, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Load Combination Tag


    * **analysis_type** (*enum*) – Analysis Type Enumeration


    * **design_situation** (*int*) – Design Situation


    * **user_defined_name** (*list*) – User defined Combination Name


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






