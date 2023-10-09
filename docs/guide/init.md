# Initialize Your Model

Here you can find some tips and commands to initalize your connection with RFEM. Detailed information about this section can be found in our [source code](https://github.com/Dlubal-Software/RFEM_Python_Client/blob/main/RFEM/initModel.py).

### Model(new_model, model_name, delete, delete_all)

`Class object representing individual model in RFEM. Class enables to edit multiple models in one session through holding one transport session active by not setting ‘trans’ into Client.`

* **Parameters**


    * **new_model** (*bool**) – Set to True if new model is requested.


    * **model_name** (*str**) – Defaults to “TestModel”.


    * **delete** (*bool**) – Delete results


    * **delete_all** (*bool**) – Delete all objects in Model.

### clearAtributes(obj)

`Clears object atributes. Sets all atributes to None.`

* **Parameters**

    **obj** – object to clear

### closeModel(index_or_name, save_changes)

`Close any model with index or name. Be sure to close the first created model last (2,1, and then 0). 0 index carries whole session.`

* **Parameters**


    * **index_or_name** (*str**) – Name of the model

    * **save_changes** (*bool**) – Save changes option

### insertSpaces(lst)

`Add spaces between list of numbers. Returns list of values.`

* **Parameters**


    * **lst** (*list**) – Specified list


### Calculate_all(generateXmlSolverInput, model)
`Calculates model.`

* **Parameters**


    * **generateXmlSolverInput** (*bool**) – Generate XML solver input
    * **model** (*RFEM Class**) – Model to be edited


### ConvertToDlString(s)
`The function converts strings commonly used in RSTAB / RFEM so that they
can be used In WebServices.
Examples:
‘1,3’       -> ‘1 3’
‘1, 3’      -> ‘1 3’
‘1-3’       -> ‘1 2 3’
‘1,3,5-9’   -> ‘1 3 5 6 7 8 9’
Returns a WS conform string.
`

* **Parameters**

    **string** (*str*) – Works with any string


### ConvertStrToListOfInt(st)
`This function coverts string to list of integers.`

* **Parameters**

    **string** (*str*) – Works with any string


### CheckIfMethodOrTypeExists(modelClient, method_or_type, unitTestMode)
`Check if SOAP method or type is present in your version of RFEM/RSTAB.
Use it only in your examples.
Unit tests except msg from SUDS where this is checked already.`

* **Parameters**


    * **modelClient** (*Model.clientModel*) – RFEM Model Client


    * **method_or_type** (*str*) – Method or type of SOAP client

### GetAddonStatus(modelClient, addOn)
`Check if Add-on is reachable and active.
For some types of objects, specific Add-ons need to be enabled.`


* **Parameters**


    * **modelClient** (*Model.clientModel*) – RFEM model client


    * **addOn** (*enum*) – AddOn enumeration item

### SetAddonStatus(modelClient, addOn, status)
`Activate or deactivate Add-on.
For some types of objects, specific Add-ons need to be ennabled.`

Analysis addOns list:

- material_nonlinear_analysis_active
- structure_stability_active
- construction_stages_active
- time_dependent_active
- form_finding_active
- cutting_patterns_active
- torsional_warping_active
- cost_estimation_active

Design addOns list:

- stress_analysis_active
- concrete_design_active
- steel_design_active
- timber_design_active
- aluminum_design_active
- steel_joints_active
- timber_joints_active
- craneway_design_active

Dynamic addOns list:

- modal_active
- spectral_active
- time_history_active
- pushover_active
- harmonic_response_active

Special addOns list:

- building_model_active
- wind_simulation_active
- geotechnical_analysis_active


* **Parameters**


    * **modelClient** (*Model.clientModel*) – RFEM model client


    * **method_or_type** (*str*) – method or type of SOAP client


    * **status** (*bool*) – in/active

### CalculateSelectedCases(loadCases, designSituations, loadCombinations, model)
`This method calculate just selected objects - load cases, desingSituations, loadCombinations.`

* **Parameters**


    * **loadCases** (*list*) – list of load cases

    * **designSituations** (*list*) – list of design situations

    * **loadCombinations** (*list*) – list of load combinations

    * **model** (*RFEM Class*) – model to be edited

### FirstFreeIdNumber(memType, parent_no, model)
`This method returns the next available Id Number for the selected object type. A geometric object has, in general, a parent_no = 0. The parent_no parameter becomes significant for example with loads.`


* **Parameters**

    * **memType** (*enum*) – object type enumeration item

    * **parent_no** (*int*) – object parent number

    * **model** (*int*) – model to be edited


### SetModelType(model_type, model)
`This method sets the model type. The model type is E_MODEL_TYPE_3D by default.`


* **Parameters**

    **model_type** (*enum*) – model type enumeration item


### GetModelType(model)

`The method returns a string of the current model type.`


* **Parameters**

    **model** (*RFEM Class*) – model to be edited
