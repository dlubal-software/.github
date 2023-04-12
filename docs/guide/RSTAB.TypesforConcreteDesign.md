# Types for Concrete Design

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/TypesforConcreteDesign)*

## ConcreteDurability 


### ConcreteDurability(no, name, members_no, member_sets_no, surfaces_no, exposure_classes_reinforcement, exposure_classes_reinforcement_types, exposure_classes_concrete, exposure_classes_concrete_types, structural_class, stainless_steel_reduction, additional_protection_reduction, allowance_deviation, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Concrete Durability Tag


    * **name** (*str*) – User Defined Name


    * **members_no** (*str*) – Assigned Members


    * **member_sets_no** (*str*) – Assigned Member Sets


    * **surfaces_no** (*str*) – Assigned Surfaces


    * **exposure_classes_reinforcement** (*list*) – Exposure Classes Reinforcement Parameters


    * **exposure_classes_reinforcement_types** (*list of enum*) – Exposure Classes Reinforcement Type List of Enumeration


    * **exposure_classes_concrete** (*list*) – Exposure Classes Concrete Parameters


    * **exposure_classes_concrete_types** (*list of enum*) – Exposure Classes Concrete Type List of Enumeration


    * **structural_class** (*list*) – Structural Class Parameters


    * **stainless_steel_reduction** (*list*) – Stainless Steel Reduction Parameters


    * **additional_protection_reduction** (*list*) – Additional Protection Reduction


    * **allowance_deviation** (*list*) – Allowance Deviation Parameters


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



## ConcreteEffectiveLength


### ConcreteEffectiveLength(no, name, members_no, member_sets_no, flexural_buckling_about_y, flexural_buckling_about_z, nodal_supports, factors, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Concrete Effective Length Tag


    * **name** (*str*) – User Defined Name


    * **members_no** (*str*) – Assigned Members


    * **member_sets_no** (*str*) – Assigned Member Sets


    * **flexural_buckling_about_y** (*list*) – Flexural Buckling About Y Option


    * **flexural_buckling_about_z** (*list*) – Flexural Buckling About Z Option


    * **nodal_supports** (*list of lists*) – Nodal Support Table

        > nodal_supports = [[support_type, support_in_z, eccentricity_type, support_in_y_type, restraint_about_x_type, restraint_about_z_type, restraint_warping_type, nodes], …]


    * **factors** (*list of lists*) – Factors Table

        > factors = [[flexural_buckling_y, flexural_buckling_z]]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


