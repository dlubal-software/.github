# Types For Timber Design

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/TypesForTimberDesign)*


## TimberEffectiveLengths


### TimberEffectiveLengths(no, members, member_sets, flexural_buckling_about_y, flexural_buckling_about_z, lateral_torsional_buckling, name, nodal_supports, factors, intermediate_nodes, different_properties, factors_definition_absolute, fire_design_different_buckling_factors, import_from_stability_analysis_enabled, determination_type, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Timber Effective Length Tag


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **flexural_buckling_about_y** (*bool*) – Flexural Buckling About Y Option


    * **flexural_buckling_about_z** (*bool*) – Flexural Buckling About Z Option


    * **lateral_torsional_buckling** (*bool*) – Lateral Torsional Buckling Option


    * **name** (*str*) – User Defined Effective Length Name


    * **nodal_supports** (*list of lists*) – Nodal Supports Table Definition

        > nodal_supports[i][0] (*enum*): Support Type Enumeration Type    
        nodal_supports[i][1] (*bool*): Support in Z Option    
        nodal_supports[i][2] (*enum*): Eccentricity Type Enumeration    
        nodal_supports[i][3] (*enum*): Support Type in Y Enumeration    
        nodal_supports[i][4] (*enum*): Restraint Type in X Enumeration      
        nodal_supports[i][5] (*str*): Assigned Nodes     


    * **factors** (*list of lists*) – Effective Length Factors

        > factors[i][0] (*float*): Flexural Buckling in U Coefficient     
        factors[i][1] (*float*): Flexural Buckling in V Coefficient     
        factors[i][2] (*float*): Critical Moment     


    * **intermediate_nodes** (*bool*) – Intermediate Nodes Option


    * **different_properties** (*bool*) – Different Properties Option


    * **factors_definition_absolute** (*bool*) – Absolute Factors Definition Option


    * **fire_design_different_buckling_factors** (*bool*) – Different Fire Design Buckling Factors


    * **import_from_stability_analysis_enabled** (*bool*) – Import From Stability Analysis Option


    * **determination_type** (*enum*) – Timber Effective Lengths Determination Type


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class, optional*) – Model to be edited



## TimberMemberLocalSectionReduction


### Components(reduction_type)

* **Parameters**

    
    * **reduction_type** (*enum*) – Timber Member Local Section Reduction Type Enumeration



### TimberMemberLocalSectionReduction(no, members, member_sets, components, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Member Local Section Reduction Tag


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **components** (*list*) – List of Component Classes


    * **name** (*str*) – User Defined Member Local Section Reduction Name


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class, optional*) – Model to be edited



## TimberServiceClass


### TimberServiceClass(no, name, members, member_sets, service_class, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Timber Service Class Tag


    * **name** (*str*) – User Defined Timber Service Class Name


    * **members** (*str*) – Assigned Members


    * **member_sets** (*str*) – Assigned Member Sets


    * **service_class** (*enum*) – Timber Service Class Service Class Enumeration


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class, optional*) – Model to be edited


