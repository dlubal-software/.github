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

<a name="DesignSituation+DesignSituation"></a>

### designSituation.DesignSituation() ⇒
Returns internal Design Situation object

**Kind**: instance method of [<code>DesignSituation</code>](#DesignSituation)
**Returns**: Internal Design Situation object
<a name="DesignSituation+No"></a>

### designSituation.No() ⇒
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
| no | <code>\*</code> |
| name | <code>\*</code> |
| comment | <code>\*</code> |
| params | <code>\*</code> |

<a name="LoadCase+StaticAnalysis"></a>

### loadCase.StaticAnalysis(no, name, staticAnalysisSettingsNo, ActionCategory, selfWeighParams, stabilityAnalysisSettingsNo, comment, params) ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)
**Returns**: Object of LoadCase

| Param | Type |
| --- | --- |
| no | <code>\*</code> |
| name | <code>\*</code> |
| staticAnalysisSettingsNo | <code>\*</code> |
| ActionCategory | <code>\*</code> |
| selfWeighParams | <code>\*</code> |
| stabilityAnalysisSettingsNo | <code>\*</code> |
| comment | <code>\*</code> |
| params | <code>\*</code> |

<a name="LoadCase+ModalAnalysis"></a>

### loadCase.ModalAnalysis(no, name, modalAnalysisSettingsNo, importMassesFrom, selfWeighParams, comment, params) ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)
**Returns**: Object of LoadCase

| Param | Type |
| --- | --- |
| no | <code>\*</code> |
| name | <code>\*</code> |
| modalAnalysisSettingsNo | <code>\*</code> |
| importMassesFrom | <code>\*</code> |
| selfWeighParams | <code>\*</code> |
| comment | <code>\*</code> |
| params | <code>\*</code> |

<a name="LoadCase+ResponseSpectrumAnalysis"></a>

### loadCase.ResponseSpectrumAnalysis(no, name, responseSpectrumAnalysisSettingsNo, importModalAnalysisFrom, responseSpectrums, comment, params) ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)
**Returns**: Object of LoadCase

| Param | Type |
| --- | --- |
| no | <code>\*</code> |
| name | <code>\*</code> |
| responseSpectrumAnalysisSettingsNo | <code>\*</code> |
| importModalAnalysisFrom | <code>\*</code> |
| responseSpectrums | <code>\*</code> |
| comment | <code>\*</code> |
| params | <code>\*</code> |

<a name="LoadCase+ConsiderImperfection"></a>

### loadCase.ConsiderImperfection(imperfectionCaseNo)
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)

| Param | Type |
| --- | --- |
| imperfectionCaseNo | <code>\*</code> |

<a name="LoadCase+SetStructureModification"></a>

### loadCase.SetStructureModification(structureModificationNo)
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)

| Param | Type |
| --- | --- |
| structureModificationNo | <code>\*</code> |

<a name="LoadCase+GetActionCategoryList"></a>

### loadCase.GetActionCategoryList() ⇒
**Kind**: instance method of [<code>LoadCase</code>](#LoadCase)
**Returns**: List of action categories
<a name="actionCategory_dict"></a>

