# Types for Aluminum Design

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/TypesForAluminumDesign)*


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


    * **model** (*RSTAB Class, optional*) – Model to be edited



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


    * **model** (*RSTAB Class, optional*) – Model to be edited



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


    * **model** (*RSTAB Class, optional*) – Model to be edited

