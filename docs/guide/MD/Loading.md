# Loading

<a name="DesignSituation"></a>

## DesignSituation
**Kind**: global class  

<a name="new_DesignSituation_new"></a>

### new DesignSituation(no, design_situation_type, params, comment)
Creates design situation object

**Returns**: Created design situation object  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of design situation, can be undefined |
| design_situation_type | <code>String</code> | Design situation type |
| params | <code>Object</code> | Additional parameters, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |

<a name="DesignSituation+GetDesignSituation"></a>

### designSituation.GetDesignSituation() ⇒
Returns internal Design Situation object

**Kind**: instance method of [<code>DesignSituation</code>](#DesignSituation)  
**Returns**: Internal Design Situation object  
<a name="DesignSituation+GetNo"></a>

### designSituation.GetNo() ⇒
Returns number of Design Situation

**Kind**: instance method of [<code>DesignSituation</code>](#DesignSituation)  
**Returns**: Number of Design Situation  
<a name="DesignSituation+SetCombinationWizard"></a>

### designSituation.SetCombinationWizard(combination_wizard_no)
Sets combination wizard

**Kind**: instance method of [<code>DesignSituation</code>](#DesignSituation)  

| Param | Type | Description |
| --- | --- | --- |
| combination_wizard_no | <code>Object</code> | Combination wizard number |

<a name="DesignSituation+SetConsiderInclusiveExclusiveLoadCases"></a>

### designSituation.SetConsiderInclusiveExclusiveLoadCases(relationship_between_load_cases_no)
Sets relationship between load cases

**Kind**: instance method of [<code>DesignSituation</code>](#DesignSituation)  

| Param | Type | Description |
| --- | --- | --- |
| relationship_between_load_cases_no | <code>Object</code> | Relationship between load cases number |

<a name="DesignSituation+SetActive"></a>

### designSituation.SetActive(active)
Enables/disables design situation

**Kind**: instance method of [<code>DesignSituation</code>](#DesignSituation)  

| Param | Type | Description |
| --- | --- | --- |
| active | <code>Boolean</code> | Design situation is enabled or disabled, can be undefined (true as default) |

<a name="LoadCase"></a>

## LoadCase
**Kind**: global class  

<a name="new_LoadCase_new"></a>

### new LoadCase(no, name, comment, params)
Creates load case

**Returns**: Object of LoadCase  

| Param | Type |
| --- | --- |
| no | <code>Number</code> | 
| name | <code>String</code> | 
| comment | <code>String</code> | 
| params | <code>Object</code> | 

<a name="LoadCase+StaticAnalysis"></a>

### loadCase.StaticAnalysis(no, name, staticAnalysisSettingsNo, ActionCategory, selfWeighParams, stabilityAnalysisSettingsNo, comment, params) ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  
**Returns**: Object of LoadCase  

| Param | Type |
| --- | --- |
| no | <code>Number</code> | 
| name | <code>String</code> | 
| staticAnalysisSettingsNo | <code>Number</code> | 
| ActionCategory | <code>String</code> | 
| selfWeighParams | <code>Array</code> | 
| stabilityAnalysisSettingsNo | <code>Number</code> | 
| comment | <code>String</code> | 
| params | <code>Object</code> | 

<a name="LoadCase+ModalAnalysis"></a>

### loadCase.ModalAnalysis(no, name, modalAnalysisSettingsNo, importMassesFrom, selfWeighParams, comment, params) ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  
**Returns**: Object of LoadCase  

| Param | Type |
| --- | --- |
| no | <code>Number</code> | 
| name | <code>String</code> | 
| modalAnalysisSettingsNo | <code>Number</code> | 
| importMassesFrom | <code>Boolean</code> | 
| selfWeighParams | <code>Array</code> | 
| comment | <code>String</code> | 
| params | <code>Object</code> | 

<a name="LoadCase+ResponseSpectrumAnalysis"></a>

### loadCase.ResponseSpectrumAnalysis(no, name, responseSpectrumAnalysisSettingsNo, importModalAnalysisFrom, responseSpectrums, comment, params) ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  
**Returns**: Object of LoadCase  

| Param | Type |
| --- | --- |
| no | <code>Number</code> | 
| name | <code>String</code> | 
| responseSpectrumAnalysisSettingsNo | <code>Number</code> | 
| importModalAnalysisFrom | <code>Number</code> | 
| responseSpectrums | <code>Array</code> | 
| comment | <code>String</code> | 
| params | <code>Object</code> | 

<a name="LoadCase+WindSimulation"></a>

### loadCase.WindSimulation(no, name, staticAnalysisSettingsNo, windAnalysisSettingsNo, windProfileNo, windDirection, terrainOffset, stabilityAnalysisSettingsNo, comment, params) ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  
**Returns**: Object of LoadCase  

| Param | Type |
| --- | --- |
| no | <code>Number</code> | 
| name | <code>String</code> | 
| staticAnalysisSettingsNo | <code>Number</code> | 
| windAnalysisSettingsNo | <code>Number</code> | 
| windProfileNo | <code>Number</code> | 
| windDirection | <code>String</code> | 
| terrainOffset | <code>Number</code> | 
| stabilityAnalysisSettingsNo | <code>Number</code> | 
| comment | <code>String</code> | 
| params | <code>Object</code> | 

<a name="LoadCase+ConsiderImperfection"></a>

### loadCase.ConsiderImperfection(imperfectionCaseNo)
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  

| Param | Type |
| --- | --- |
| imperfectionCaseNo | <code>Number</code> | 

<a name="LoadCase+SetStructureModification"></a>

### loadCase.SetStructureModification(structureModificationNo)
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  

| Param | Type |
| --- | --- |
| structureModificationNo | <code>Number</code> | 

<a name="LoadCase+GetActionCategoryList"></a>

### loadCase.GetActionCategoryList() ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  
**Returns**: List of action categories  
<a name="LoadCase+GetLoadCase"></a>

### loadCase.GetLoadCase() ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  
**Returns**: Load case object  
<a name="LoadCase+GetNo"></a>

### loadCase.GetNo() ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)  
**Returns**: Number of Load case  
<a name="RSectionLoadCase"></a>

## RSectionLoadCase
**Kind**: global class  

<a name="new_RSectionLoadCase_new"></a>

### new RSectionLoadCase(no, action_category, name, to_solve, comment, params)
Create RSection Load case

**Returns**: Load case  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Load case, can be undefined |
| action_category | <code>String</code> | Action category |
| name | <code>String</code> | Name, can be undefined |
| to_solve | <code>Boolean</code> | To solve, can be undefined (true as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLoadCase+GetLoadcase"></a>

### rSectionLoadCase.GetLoadcase()
Returns load case object

**Kind**: instance method of [<code>RSectionLoadCase</code>](#RSectionLoadCase)  
<a name="RSectionLoadCase+GetNo"></a>

### rSectionLoadCase.GetNo()
Returns load case number

**Kind**: instance method of [<code>RSectionLoadCase</code>](#RSectionLoadCase)  
<a name="RSectionLoadCombination"></a>

## RSectionLoadCombination
**Kind**: global class  

<a name="new_RSectionLoadCombination_new"></a>

### new RSectionLoadCombination(no, load_combination_items, name, to_solve, comment, params)
Create RSection Load combination

**Returns**: Load combination  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Load case, can be undefined |
| load_combination_items | <code>Array</code> | Items of load combination - load case index and factor [[LC1no, factor], [LC2no, factor]] |
| name | <code>String</code> | Name, can be undefined |
| to_solve | <code>Boolean</code> | To solve, can be undefined (true as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLoadCombination+AssignLoadCases"></a>

### rSectionLoadCombination.AssignLoadCases(load_combination_items) ⇒
Assigns load cases

**Kind**: instance method of [<code>RSectionLoadCombination</code>](#RSectionLoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| load_combination_items | <code>Array</code> | Load combination itemns [[load case no, factor], .... ] |

<a name="actionCategory_dict"></a>

## actionCategory\_dict
Dictionary

**Kind**: global constant  
<a name="get_design_situation_types"></a>

## get\_design\_situation\_types()
Shows list of all available design situation types

**Kind**: global function  
<a name="createBaseDesignSituation"></a>

## createBaseDesignSituation(no, params, comment) ⇒
Creates base design situation (private)

**Kind**: global function  
**Returns**: Created design situation object  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of design situation, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |

<a name="LoadCombination"></a>

## LoadCombination(no, design_situation_no, load_combination_items, comment, params) ⇒
Creates load combination

**Kind**: global function  
**Returns**: Created load combination  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Load combination index, can be undefined |
| design_situation_no | <code>Object</code> | Index of design situation, can be undefined |
| load_combination_items | <code>Array</code> | Items of load combination - load case index and factor [[LC1no,factor],[LC2no,factor]] |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [LoadCombination(no, design_situation_no, load_combination_items, comment, params)](#LoadCombination) ⇒
    * [.StaticAnalysis(no, static_analysis_settings, design_situation, comment, params)](#LoadCombination+StaticAnalysis) ⇒
    * [.ConsiderImperfection(imperfection_case, enabled)](#LoadCombination+ConsiderImperfection) ⇒
    * [.StructureModification(structure_modification, enabled)](#LoadCombination+StructureModification) ⇒
    * [.ConsiderInitialState(initial_state_case, initial_state_definition_type, enabled)](#LoadCombination+ConsiderInitialState) ⇒
    * [.CriticalLoadForCalculation(stability_analysis_settings, enabled)](#LoadCombination+CriticalLoadForCalculation) ⇒
    * [.CreepCausedByPermanentLoadingCase(creep_caused_by_permanent_loading_case, enabled)](#LoadCombination+CreepCausedByPermanentLoadingCase) ⇒
    * [.ConsiderConstructionStage(construction_stage, enabled)](#LoadCombination+ConsiderConstructionStage) ⇒
    * [.AssignLoadCases(load_combination_items)](#LoadCombination+AssignLoadCases) ⇒
    * [.ToSolve(to_solve)](#LoadCombination+ToSolve) ⇒

<a name="LoadCombination+StaticAnalysis"></a>

### loadCombination.StaticAnalysis(no, static_analysis_settings, design_situation, comment, params) ⇒
Sets analysis type and static analysis settings

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Load combination index, can be undefined |
| static_analysis_settings | <code>Object</code> | Static analysis settings |
| design_situation | <code>Object</code> | Design situation |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="LoadCombination+ConsiderImperfection"></a>

### loadCombination.ConsiderImperfection(imperfection_case, enabled) ⇒
Sets imperfection case

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| imperfection_case | <code>Object</code> | Imperfection case, can be undefined (in case of disabling ) |
| enabled | <code>Boolean</code> | Enable/disable imperfection case, can be undefined (true as default) |

<a name="LoadCombination+StructureModification"></a>

### loadCombination.StructureModification(structure_modification, enabled) ⇒
Sets structure modification

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| structure_modification | <code>Object</code> | Structure modification, can be undefined (in case of disabling) |
| enabled | <code>Boolean</code> | Enable/disable structure modification, can be undefined (true as default) |

<a name="LoadCombination+ConsiderInitialState"></a>

### loadCombination.ConsiderInitialState(initial_state_case, initial_state_definition_type, enabled) ⇒
Sets initial state from

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| initial_state_case | <code>Object</code> | Initial state, can be undefined (in case of disabling) |
| initial_state_definition_type | <code>String</code> | Initial state definition type, can be undefined (DEFINITION_TYPE_FINAL_STATE as default) |
| enabled | <code>Boolean</code> | Enable/disable initial state, can be undefined (true as default) |

<a name="LoadCombination+CriticalLoadForCalculation"></a>

### loadCombination.CriticalLoadForCalculation(stability_analysis_settings, enabled) ⇒
Calculates critical load

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| stability_analysis_settings | <code>Object</code> | Stability analysis settings, can be undefined (in case of disabling) |
| enabled | <code>Boolean</code> | Enable/disable initial state, can be undefined (true as default) |

<a name="LoadCombination+CreepCausedByPermanentLoadingCase"></a>

### loadCombination.CreepCausedByPermanentLoadingCase(creep_caused_by_permanent_loading_case, enabled) ⇒
Creep caused by permanent load from

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| creep_caused_by_permanent_loading_case | <code>Object</code> | Creep caused by permanent loading case, can be undefined (in case of disabling) |
| enabled | <code>Boolean</code> | Enable/disable loading case, can be undefined (true as default) |

<a name="LoadCombination+ConsiderConstructionStage"></a>

### loadCombination.ConsiderConstructionStage(construction_stage, enabled) ⇒
Consider construction stage

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| construction_stage | <code>Object</code> | Construction stage, can be undefined (in case of disabling) |
| enabled | <code>Boolean</code> | Enable/disable construction stage, can be undefined (true as default) |

<a name="LoadCombination+AssignLoadCases"></a>

### loadCombination.AssignLoadCases(load_combination_items) ⇒
Assigns load cases

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| load_combination_items | <code>Array</code> | Load combination itemns [[load case no, factor], .... ] |

<a name="LoadCombination+ToSolve"></a>

### loadCombination.ToSolve(to_solve) ⇒
Sets load combination to solve

**Kind**: instance method of [<code>LoadCombination</code>](#LoadCombination)  
**Returns**: Modified load combination  

| Param | Type | Description |
| --- | --- | --- |
| to_solve | <code>Boolean</code> | Enable/disable load combination to solve, can be undefined (true as default) |

<a name="createBaseLoadCombination"></a>

## createBaseLoadCombination(no, comment, params) ⇒
Creates load combination (private)

**Kind**: global function  
**Returns**: Created load combination  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Load combination index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="get_analysis_types"></a>

## get\_analysis\_types()
Gets all available analysis types strings

**Kind**: global function  
<a name="get_initial_state_definition_types"></a>

## get\_initial\_state\_definition\_types()
Gets all available initial state definition types strings

**Kind**: global function  
<a name="createBaseLoadCase"></a>

## createBaseLoadCase(no, action_category, name, to_solve, comment, params) ⇒
**Kind**: global function  
**Returns**: Load case  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Load case, can be undefined |
| action_category | <code>String</code> | Action category |
| name | <code>String</code> | Name, can be undefined |
| to_solve | <code>Boolean</code> | To solve, can be undefined (true as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="get_action_categories_types"></a>

## get\_action\_categories\_types()
Shows list of all available design situation types

**Kind**: global function  
<a name="createBaseLoadCombinations"></a>

## createBaseLoadCombinations(no, name, to_solve, comment, params) ⇒
Create RSection Load combination

**Kind**: global function  
**Returns**: Load combination  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Load case, can be undefined |
| name | <code>String</code> | Name, can be undefined |
| to_solve | <code>Boolean</code> | To solve, can be undefined (true as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

