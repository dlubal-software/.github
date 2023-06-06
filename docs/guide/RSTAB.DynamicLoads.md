# Dynamic Loads

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/DynamicLoads)*

## ResponseSpectrum


### ResponseSpectrum(no, name, constant_period_step, sort_table, user_defined_spectrum, comment, params, model)

* **Parameters**


    * **no** (*int*) – Response Spectrum Tag


    * **name** (*str*) – User Defined Name


    * **constant_period_step** (*float*) – Enables Constant Period Step


    * **sort_table** (*bool*) – Sort Table Option


    * **user_defined_spectrum** (*list of lists*) – User Defined Spectrum

        > user_defined_spectrum = [[period, acceleration], [period, acceleration], ...]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited



### ResponseSpectrum.UserDefinedGFactor(no, name, constant_period_step, sort_table, user_defined_spectrum, comment, params, model)

* **Parameters**


    * **no** (*int*) – Response Spectrum Tag


    * **name** (*str*) – User Defined Name


    * **constant_period_step** (*float*) – Enables Constant Period Step


    * **sort_table** (*bool*) – Sort Table Option


    * **user_defined_spectrum** (*list of lists*) – User Defined Spectrum

        > user_defined_spectrum = [[period, acceleration], [period, acceleration], ...]


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited
