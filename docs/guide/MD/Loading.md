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
<a name="ResultCombination"></a>

## ResultCombination
**Kind**: global class  

<a name="new_ResultCombination_new"></a>

### new ResultCombination(no, design_situation_no, load_case_items, load_combination_items, combination_type, comment, params)
Creates Result combination object


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Result combination, can be undefined |
| design_situation_no | <code>Number</code> | Design situation number |
| load_case_items | <code>Array</code> | Array of load cases, can be undefined                                            At least one load case must be specified:                                              - combination type 'General': [[load_case, factor, load_type, operator], [load_case, factor, load_type, load_operator], ...]                                              - other combination types: [[load_case], [load_case], ...] |
| load_combination_items | <code>Array</code> | Array of load combinations, can be undefined                                            At least one load combination must be specified:                                              - combination type 'General': [[load_combination, factor, load_type, operator], [load_combination, factor, load_type, load_operator], ...]                                              - other combination types: [[load_combination], [load_combination], ...] |
| combination_type | <code>String</code> | Combination type, can be one of these types: GENERAL, ENVELOPE_PERMANENT, ENVELOPE_TRANSIENT, SUPERPOSITION. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Additional parameters, can be undefined |

<a name="ResultCombination+General"></a>

### resultCombination.General(no, design_situation_no, load_case_items, load_combination_items, comment, params)
Creates General Result combination object

**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Result combination, can be undefined |
| design_situation_no | <code>Number</code> | Design situation number |
| load_case_items | <code>Array</code> | Array of load cases, can be undefined                                            At least one load case must be specified:                                              - combination type 'General': [[load_case, factor, load_type, operator], [load_case, factor, load_type, load_operator], ...]                                              - other combination types: [[load_case], [load_case], ...] |
| load_combination_items | <code>Array</code> | Array of load combinations, can be undefined                                            At least one load combination must be specified:                                              - combination type 'General': [[load_combination, factor, load_type, operator], [load_combination, factor, load_type, load_operator], ...]                                              - other combination types: [[load_combination], [load_combination], ...] |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Additional parameters, can be undefined |

<a name="ResultCombination+EnvelopePermanent"></a>

### resultCombination.EnvelopePermanent(no, design_situation_no, load_case_items, load_combination_items, comment, params)
Creates Envelope permanent Result combination object

**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Result combination, can be undefined |
| design_situation_no | <code>Number</code> | Design situation number |
| load_case_items | <code>Array</code> | Array of load cases, can be undefined                                            At least one load case must be specified:                                              - combination type 'General': [[load_case, factor, load_type, operator], [load_case, factor, load_type, load_operator], ...]                                              - other combination types: [[load_case], [load_case], ...] |
| load_combination_items | <code>Array</code> | Array of load combinations, can be undefined                                            At least one load combination must be specified:                                              - combination type 'General': [[load_combination, factor, load_type, operator], [load_combination, factor, load_type, load_operator], ...]                                              - other combination types: [[load_combination], [load_combination], ...] |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Additional parameters, can be undefined |

<a name="ResultCombination+EnvelopeTransient"></a>

### resultCombination.EnvelopeTransient(no, design_situation_no, load_case_items, load_combination_items, comment, params)
Creates Envelope transient Result combination object

**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Result combination, can be undefined |
| design_situation_no | <code>Number</code> | Design situation number |
| load_case_items | <code>Array</code> | Array of load cases, can be undefined                                            At least one load case must be specified:                                              - combination type 'General': [[load_case, factor, load_type, operator], [load_case, factor, load_type, load_operator], ...]                                              - other combination types: [[load_case], [load_case], ...] |
| load_combination_items | <code>Array</code> | Array of load combinations, can be undefined                                            At least one load combination must be specified:                                              - combination type 'General': [[load_combination, factor, load_type, operator], [load_combination, factor, load_type, load_operator], ...]                                              - other combination types: [[load_combination], [load_combination], ...] |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Additional parameters, can be undefined |

<a name="ResultCombination+Superposition"></a>

### resultCombination.Superposition(no, design_situation_no, load_case_items, load_combination_items, comment, params)
Creates Superposition Result combination object

**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Result combination, can be undefined |
| design_situation_no | <code>Number</code> | Design situation number |
| load_case_items | <code>Array</code> | Array of load cases, can be undefined (in case the load combinations are specified).                                            At least one load case must be specified:                                              - combination type 'General': [[load_case, factor, load_type, operator], [load_case, factor, load_type, load_operator], ...]                                              - other combination types: [[load_case], [load_case], ...] |
| load_combination_items | <code>Array</code> | Array of load combinations, can be undefined                                            At least one load combination must be specified:                                              - combination type 'General': [[load_combination, factor, load_type, operator], [load_combination, factor, load_type, load_operator], ...]                                              - other combination types: [[load_combination], [load_combination], ...] |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Additional parameters, can be undefined |

<a name="ResultCombination+SRSSCombination"></a>

### resultCombination.SRSSCombination(use_equivalent_linear_combination, extreme_value_sign, according_load_case_or_combination)
Sets SRSS combination

**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  

| Param | Type | Description |
| --- | --- | --- |
| use_equivalent_linear_combination | <code>Boolean</code> | Use equivalent linear combination, can be undefined (false as default) |
| extreme_value_sign | <code>String</code> | Extreme value sign, can be undefined ('SIGN_POSITIVE_OR_NEGATIVE' as default) |
| according_load_case_or_combination | <code>Object</code> | According load case or combination, can be undefined in case extreme_value_sign is not 'SIGN_ACCORDING_TO_LC_CO'; otherwise must be specified |

<a name="ResultCombination+ToSolve"></a>

### resultCombination.ToSolve(to_solve)
Sets to solve

**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  

| Param | Type | Description |
| --- | --- | --- |
| to_solve | <code>Boolean</code> | To solve state, can be undefined (true as default) |

<a name="ResultCombination+GenerateSubCombinations"></a>

### resultCombination.GenerateSubCombinations(generate)
Sets Generate sub-combinations of type 'Superposition'

**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  

| Param | Type | Description |
| --- | --- | --- |
| generate | <code>Boolean</code> | Generate sub-combinations of 'Superposition' combination type, can be undefined (true as default) |

<a name="ResultCombination+GetNo"></a>

### resultCombination.GetNo() ⇒
**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  
**Returns**: Number of Result combination  
<a name="ResultCombination+GetResultCombination"></a>

### resultCombination.GetResultCombination() ⇒
**Kind**: instance method of [<code>ResultCombination</code>](#ResultCombination)  
**Returns**: Result combination object  
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
| load_combination_items | <code>Array</code> | Load combination items [[load case no, factor], .... ] |

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
| load_combination_items | <code>Array</code> | Load combination items [[load case no, factor], .... ] |

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

