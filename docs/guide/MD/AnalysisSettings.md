# AnalysisSettings


## ModalAnalysisSettings
Modal analysis settings high level function

**Kind**: global class  


### new ModalAnalysisSettings(no, solverMethod, beyondFrequency, maximalFrequency, comment, params)
Creates modal analysis settings high level function

**Returns**: Object ModalAnalysisSettings  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | unique ID of modal analysis settings |
| solverMethod | <code>String</code> | solver method() |
| beyondFrequency | <code>String</code> | Setting of eigenvectors beyond frequency |
| maximalFrequency | <code>String</code> | Setting of eigenvectors maximal frequency |
| comment | <code>String</code> | Comment, empty by default |
| params | <code>Object</code> | Modal analysis settings parameters, empty by default |

**Example**  
```js
// returns 2
globalNS.method1(5, 10);
```
<a name="ModalAnalysisSettings+UserDefinedNumberOfModes"></a>

### modalAnalysisSettings.UserDefinedNumberOfModes(no, name, numberOfModes, solverMethod, typeOfMassMatrix, massConversion, actingMasses, comment, params) ⇒
Creates modal analysis settings

**Kind**: instance method of [<code>ModalAnalysisSettings</code>](#ModalAnalysisSettings)  
**Returns**: Object ModalAnalysisSettings  

| Param | Type |
| --- | --- |
| no | <code>int</code> | 
| name | <code>string</code> | 
| numberOfModes | <code>int</code> | 
| solverMethod | <code>string</code> | 
| typeOfMassMatrix | <code>string</code> | 
| massConversion | <code>string</code> | 
| actingMasses | <code>array</code> | 
| comment | <code>string</code> | 
| params | <code>dictionary</code> | 

<a name="ModalAnalysisSettings+AutomaticNumberOfModesToReachEffMass"></a>

### modalAnalysisSettings.AutomaticNumberOfModesToReachEffMass(no, name, effectiveModalMassFactor, solverMethod, typeOfMassMatrix, massConversion, actingMasses, comment, params) ⇒
**Kind**: instance method of [<code>ModalAnalysisSettings</code>](#ModalAnalysisSettings)  
**Returns**: Object ModalAnalysisSettings  

| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| name | <code>\*</code> | 
| effectiveModalMassFactor | <code>\*</code> | 
| solverMethod | <code>\*</code> | 
| typeOfMassMatrix | <code>\*</code> | 
| massConversion | <code>\*</code> | 
| actingMasses | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

<a name="ModalAnalysisSettings+AutomaticNumberOfModesToReachMaxFreq"></a>

### modalAnalysisSettings.AutomaticNumberOfModesToReachMaxFreq(no, name, maxNaturalFrequency, solverMethod, typeOfMassMatrix, massConversion, actingMasses, comment, params) ⇒
**Kind**: instance method of [<code>ModalAnalysisSettings</code>](#ModalAnalysisSettings)  
**Returns**: Object ModalAnalysisSettings  

| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| name | <code>\*</code> | 
| maxNaturalFrequency | <code>\*</code> | 
| solverMethod | <code>\*</code> | 
| typeOfMassMatrix | <code>\*</code> | 
| massConversion | <code>\*</code> | 
| actingMasses | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

<a name="SpectralAnalysisSettings"></a>

## SpectralAnalysisSettings
Class for setting up the spectral analysis settings.

**Kind**: global class  
**@returns**: Object SpectralAnalysisSettings  


### new SpectralAnalysisSettings(no, name, combinationRulePeriodic, combinationRuleDirectional, scaledSumDirectionalComponentValue, useEquivalentLinearCombination, signedResultsUsingDominantMode, saveResultsOfAllSelectedModes, comment, params)
Constructor creates basic spectral analysis settings


| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| name | <code>\*</code> | 
| combinationRulePeriodic | <code>\*</code> | 
| combinationRuleDirectional | <code>\*</code> | 
| scaledSumDirectionalComponentValue | <code>\*</code> | 
| useEquivalentLinearCombination | <code>\*</code> | 
| signedResultsUsingDominantMode | <code>\*</code> | 
| saveResultsOfAllSelectedModes | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

<a name="SpectralAnalysisSettings+SetDampingRuleForCQC"></a>

### spectralAnalysisSettings.SetDampingRuleForCQC(dampingRule, dampingConstantForEachMode)
**Kind**: instance method of [<code>SpectralAnalysisSettings</code>](#SpectralAnalysisSettings)  

| Param | Type |
| --- | --- |
| dampingRule | <code>\*</code> | 
| dampingConstantForEachMode | <code>\*</code> | 

<a name="SpectralAnalysisSettings+IncludeMissingMasses"></a>

### spectralAnalysisSettings.IncludeMissingMasses(ruleForMasses, zeroPeriodicAccelerationType, userDefinedValue)
**Kind**: instance method of [<code>SpectralAnalysisSettings</code>](#SpectralAnalysisSettings)  

| Param | Type |
| --- | --- |
| ruleForMasses | <code>\*</code> | 
| zeroPeriodicAccelerationType | <code>\*</code> | 
| userDefinedValue | <code>\*</code> | 

<a name="SpectralAnalysisSettings+GetNo"></a>

### spectralAnalysisSettings.GetNo() ⇒
**Kind**: instance method of [<code>SpectralAnalysisSettings</code>](#SpectralAnalysisSettings)  
**Returns**: No  
<a name="StabilityAnalysisSettings"></a>

## StabilityAnalysisSettings
StabilityAnalysisSettings is a class that represents a stability analysis settings.

**Kind**: global class  
<a name="new_StabilityAnalysisSettings_new"></a>

### new StabilityAnalysisSettings(no, isEigenvalueSolver, isIncremental, eigenvalueMethod, numberOfLowestEigenvalues, comment, params)
Constructor creates a new object of type StabilityAnalysisSettings

**Returns**: object Stability Analysis Settings  

| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| isEigenvalueSolver | <code>\*</code> | 
| isIncremental | <code>\*</code> | 
| eigenvalueMethod | <code>\*</code> | 
| numberOfLowestEigenvalues | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

<a name="StaticAnalysisSettings"></a>

## StaticAnalysisSettings
**Kind**: global class  


### new StaticAnalysisSettings(no, analysisType, equationSolver, nonlinearMethod, comment, params)
Creates static analysis settings high level function

**Returns**: Static Analysis object  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Integer</code> | unique ID of SAS |
| analysisType | <code>String</code> | Analysis setting type ("GEOMETRICALLY_LINEAR", "SECOND_ORDER_P_DELTA", "LARGE_DEFORMATIONS") |
| equationSolver | <code>String</code> | Equation solver ("METHOD_OF_EQUATION_SYSTEM_DIRECT", "METHOD_OF_EQUATION_SYSTEM_ITERATIVE") |
| nonlinearMethod | <code>String</code> | Nonlinear method ("NEWTON_RAPHSON", "NEWTON_RAPHSON_COMBINED_WITH_PICARD", "PICARD", "NEWTON_RAPHSON_WITH_POSTCRITICAL_ANALYSIS", "NEWTON_RAPHSON_WITH_CONSTANT_STIFFNESS", "DYNAMIC_RELAXATION" ) |
| comment | <code>String</code> | Comment, empty by default |
| params | <code>Object</code> | Static analysis settings parameters, empty by default |

<a name="StaticAnalysisSettings+GetNo"></a>

### staticAnalysisSettings.GetNo() ⇒
**Kind**: instance method of [<code>StaticAnalysisSettings</code>](#StaticAnalysisSettings)  
**Returns**: Number of Static analysis setting  
<a name="StaticAnalysisSettings+GetStaticAnalysisSettings"></a>

### staticAnalysisSettings.GetStaticAnalysisSettings() ⇒
**Kind**: instance method of [<code>StaticAnalysisSettings</code>](#StaticAnalysisSettings)  
**Returns**: Static analysis settings object  
<a name="StaticAnalysisSettings+GeometricallyLinear"></a>

### staticAnalysisSettings.GeometricallyLinear(no, name, equationSolver, plateBendingTheory, activeMass, modifyLoading, comment, params) ⇒
**Kind**: instance method of [<code>StaticAnalysisSettings</code>](#StaticAnalysisSettings)  
**Returns**: Object Static Analysis Settings  

| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| name | <code>\*</code> | 
| equationSolver | <code>\*</code> | 
| plateBendingTheory | <code>\*</code> | 
| activeMass | <code>\*</code> | 
| modifyLoading | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

<a name="StaticAnalysisSettings+SecondOrder"></a>

### staticAnalysisSettings.SecondOrder(no, name, equationSolver, nonlinearMethod, maxNumberOfIterations, numberOfLoadIncrements, plateBendingTheory, activeMass, modifyLoading, comment, params) ⇒
**Kind**: instance method of [<code>StaticAnalysisSettings</code>](#StaticAnalysisSettings)  
**Returns**: Object Static Analysis Settings  

| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| name | <code>\*</code> | 
| equationSolver | <code>\*</code> | 
| nonlinearMethod | <code>\*</code> | 
| maxNumberOfIterations | <code>\*</code> | 
| numberOfLoadIncrements | <code>\*</code> | 
| plateBendingTheory | <code>\*</code> | 
| activeMass | <code>\*</code> | 
| modifyLoading | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

<a name="StaticAnalysisSettings+LargeDeformations"></a>

### staticAnalysisSettings.LargeDeformations(no, name, equationSolver, nonlinearMethod, maxNumberOfIterations, numberOfLoadIncrements, percentageOfIterations, plateBendingTheory, activeMass, modifyLoading, comment, params) ⇒
**Kind**: instance method of [<code>StaticAnalysisSettings</code>](#StaticAnalysisSettings)  
**Returns**: Object Static Analysis Settings  

| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| name | <code>\*</code> | 
| equationSolver | <code>\*</code> | 
| nonlinearMethod | <code>\*</code> | 
| maxNumberOfIterations | <code>\*</code> | 
| numberOfLoadIncrements | <code>\*</code> | 
| percentageOfIterations | <code>\*</code> | 
| plateBendingTheory | <code>\*</code> | 
| activeMass | <code>\*</code> | 
| modifyLoading | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

<a name="WindSimulationSettings"></a>

## WindSimulationSettings
Class creates WindSimulationSettings object

**Kind**: global class  
<a name="new_WindSimulationSettings_new"></a>

### new WindSimulationSettings(no, name, density, kinematicViscosity, consider_turbulence, turbulenceModel, memberLoadDistribution, comment, params)
Basic constuctor

**Returns**: Object WindSimulationSettings  

| Param | Type |
| --- | --- |
| no | <code>\*</code> | 
| name | <code>\*</code> | 
| density | <code>\*</code> | 
| kinematicViscosity | <code>\*</code> | 
| consider_turbulence | <code>\*</code> | 
| turbulenceModel | <code>\*</code> | 
| memberLoadDistribution | <code>\*</code> | 
| comment | <code>\*</code> | 
| params | <code>\*</code> | 

