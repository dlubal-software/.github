# Types for Aluminum Design

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForAluminumDesign)*


## AluminumEffectiveLengths


### AluminumEffectiveLengths(no, members, member_sets, flexural_buckling_about_y, flexural_buckling_about_z, torsional_buckling, lateral_torsional_buckling, principal_section_axes, geometric_section_axes, name, intermediate_nodes, different_properties, factors_definition_absolute, import_from_stability_analysis_enabled, determination_of_mcr, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Aluminum Effective Length Tag


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **flexural_buckling_about_y** (*bool*) – Flexural Buckling About Y Option


    * **flexural_buckling_about_z** (*bool*) – Flexural Buckling About Z Option


    * **torsional_buckling** (*bool*) – Torsional Buckling Option


    * **lateral_torsional_buckling** (*bool*) – Lateral Torsional Buckling Option


    * **principal_section_axes** (*bool*) – Principal Section Axes Option


    * **geometric_section_axes** (*bool*) – Geometric Section Axes Option


    * **name** (*str*) – User Defined Effective Length Name


    * **intermediate_nodes** (*bool*) – Intermediate Nodes Option


    * **different_properties** (*bool*) – Different Properties Option


    * **factors_definition_absolute** (*bool*) – Absolute Factors Definition Option


    * **import_from_stability_analysis_enabled** (*bool*) – Import From Stability Analysis Option


    * **determination_of_mcr** (*enum*) – Aluminum Effective Lengths Determination Mcr Europe Enumeration Item


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## AluminumMemberLocalSectionReduction

### AluminumMemberLocalSectionReduction(no, members, member_sets, components, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Local Section Reduction Tag


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **components** (*list of lists*) – Components Table Definition

        > components[i][0] (enum): Aluminum Member Local Section Reduction Type Enumeration    

        > components[i][1] (float): Position Value  

        > components[i][2] (bool): Enable/Disable Multiple Option 

        > components[i][3] (enum): Fastener Definition Type Enumeration   
                >> * for components[i][3] == FastenerDefinitionType.DEFINITION_TYPE_ABSOLUTE:     
                components[i][4] (float): Reduction Area        
                >> * for components[i][3] == FastenerDefinitionType.DEFINITION_TYPE_RELATIVE:      
                components[i][4] (float): Reduction Area Factor (value must be between 0.0 and 1.0)

        > if components[i][2] == True   
        components[i][5] (int): Multiple Number         
        components[i][6] (enum): Multiple Offset Definition Type Enumeration    
                >> * for components[i][6] == MultipleOffsetDefinitionType.OFFSET_DEFINITION_TYPE_ABSOLUTE:          
                components[i][7] (float): Multiple Offset Value         
                >> * for components[i][6] == MultipleOffsetDefinitionType.OFFSET_DEFINITION_TYPE_RELATIVE:              
                components[i][7] (float): Multiple Offset Value (value must be between 0.0 and 1.0)  


    * **name** (*str*) – User Defined Local Section Reduction Name


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## AluminumMemberRotationalRestraint


### AluminumMemberRotationalRestraint(no, name, definition_type, members, member_sets, categories, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Aluminum Member Rotational Restraint Tag


    * **name** (*str*) – User Defined Member Rotational Restraint Name
    

    * **definition_type** (*enum*) – Aluminum Member Rotational Restraint Type Enumeration


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **categories** (*list*) – Categories List


        > * for definition_type = AluminumMemberRotationalRestraintType.TYPE_CONTINUOUS:   
                categories[0] = Sheeting Material Name      
                categories[1] = Sheeting Name   
                categories[2] = Position of Sheeting    
                categories[3] = Continuous Beam Effect  
                categories[4] = Section Deformation Option  
        
        > * for definition_type = AluminumMemberRotationalRestraintType.TYPE_DISCRETE:     
                categories[0] = Section Material Name   
                categories[1] = Section Name    
                categories[2] = Rotational Stifness     
                categories[3] = Continuous Beam Effect  
                categories[4] = Section Deformation Option  
        
        > * for definition_type = AluminumMemberRotationalRestraintType.TYPE_MANUALLY:     
                categories = None


    * **parameters** (*list*) – Parameters List


        > * for definition_type = AluminumMemberRotationalRestraintType.TYPE_CONTINUOUS:   
                parameters[0] = Modulus of Elasticity   
                parameters[1] = Sheeting Thickness  
                parameters[2] = Sheeting Moment of Inertia  
                parameters[3] = Sheeting Distance of Ribs   
                parameters[4] = Width of Sheeting Flanges   
                parameters[5] = Spring Stiffness    
                parameters[6] = Beam Spacing    

        > * for definition_type = AluminumMemberRotationalRestraintType.TYPE_DISCRETE:     
                parameters[0] = Modulus of Elasticity       
                parameters[1] = Section Moment of Inertia   
                parameters[2] = Purlin Spacing  
                parameters[3] = Beam Spacing    
        
        > * for definition_type = AluminumMemberRotationalRestraintType.TYPE_MANUALLY:     
                parameters[0] = Rotational Spring Stifness      


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited



## AluminumMemberShearPanel


### AluminumMemberShearPanel(no, name, definition_type, members, member_sets, categories, parameters, comment, params)

* **Parameters**

    
    * **no** (*int*) – Aluminum Member Rotational Restraint Tag


    * **name** (*str*) – User Defined Member Shear Panel Name


    * **definition_type** (*enum*) – Aluminum Member Shear Panel Definition Type Enumeration


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **categories** (*list*) – Positional Categories List


        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_TRAPEZOIDAL_SHEETING:    
                categories[0] = Section Position Enumeration Type   
                categories[1] = Sheeting Name   
                categories[2] = Fastening Arrangment Enumeration Type   
                
        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_BRACING:     
                categories[0] = Section Position Enumeration Type   
                categories[1] = Diagonal Section Name   
                categories[2] = Post Section Name       
                
        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_TRAPEZOIDAL_SHEETING_AND_BRACING:    
                categories[0] = Section Position Enumeration Type   
                categories[1] = Sheeting Name   
                categories[2] = Digonal Section Name    
                categories[3] = Post Section Name   
                categories[4] = Fastening Arrangment Enumeration Type   
                
        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_DEFINE_S_PROV:   
                categories[0] = Section Position Enumeration Type   


    * **parameters** (*list*) – Positional Parameters List


        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_TRAPEZOIDAL_SHEETING:    
                parameters[0] = Panel Length    
                parameters[1] = Beam Spacing    
                parameters[2] = K1 Coefficient  
                parameters[3] = K2 Coefficient  
            >> * if categories[0] == "POSITION_DEFINE":  
                    parameters[4] = Position on Section Value   
                
        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_BRACING:     
                parameters[0] = Panel Length    
                parameters[1] = Beam Spacing    
                parameters[2] = Post Spacing    
                parameters[3] = Number of Bracings  
                parameters[4] = Diagonals Section Area  
                parameters[5] = Post Section Area   
            >> * if categories[0] == "POSITION_DEFINE":  
                    parameters[6] = Position on Section Value   
                
        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_TRAPEZOIDAL_SHEETING_AND_BRACING:    
                parameters[0] = Panel Length    
                parameters[1] = Beam Spacing    
                parameters[2] = K1 Coefficient  
                parameters[3] = K2 Coefficient      
                parameters[4] = Post Spacing    
                parameters[5] = Number of Bracing   
                parameters[6] = Diagonals Section Area  
                parameters[7] = Post Section Area   
            >> * if categories[0] == "POSITION_DEFINE":  
                    parameters[8] = Position on Section Value   
                
        > * for definition_type == AluminumMemberShearPanelDefinitionType.DEFINITION_TYPE_DEFINE_S_PROV:   
                parameters[0] = Stifness    
            >> * if categories[0] == "POSITION_DEFINE":  
                    parameters[1] = Position on Section Value   


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary



## AluminumMemberTransverseWeld


#### transverseWeldComponent = {'weld_type', 'position', 'multiple', 'multiple_number', 'multiple_offset_definition_type', 'multiple_offset', 'size', 'method_type', 'number_of_heat_paths', 'welding_temperature'}


### AluminumMemberTransverseWeld(no, name, members, member_sets, component, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Welded Joint Tag


    * **name** (*str*) – Name


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **component** (*list*) – Weld Components


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) – Model to be edited

