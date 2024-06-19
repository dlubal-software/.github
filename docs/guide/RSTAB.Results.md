# Results

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/Results)*

## ResultTables


### ResultTables.staticmethod(parameters)

List of all staticmethods are given below with associated parameters.

#### List 1 

**Static Methods**

```py
BuildingStoriesForcesInShearWalls()
BuildingStoriesCentresMassRigidity()
BuildingStoriesInterstoryDrifts()
BuildingStoriesStoryActions()
CalculationDiagrams()
CriticalLoadFactors()
EffectiveLengthsAndCriticalLoadsByEigenvector()
EffectiveLengthsAndCriticalLoadsByMember()
EigenvectorsByMember()
EigenvectorsByNode()
Errors()
MembersByEigenvector()
MembersContactForces()
MembersGlobalDeformations()
MembersHingeDeformations()
MembersHingeForces()
MembersInternalForces()
MembersInternalForcesByMemberSet()
MembersInternalForcesBySection()
MembersLocalDeformations()
MembersStrains()
ModalAnalysisEffectiveModalMasses()
ModalAnalysisMassesInLocations()
ModalAnalysisMembersByModeShape()
ModalAnalysisModeShapesByMember()
ModalAnalysisModeShapesByNode()
ModalAnalysisNaturalFrequencies()
ModalAnalysisNodesByModeShape()
ModalAnalysisParticipationFactors()
NodesByEigenvector()
NodesDeformations()
NodesSupportForces()
SpectralAnalysisBuildingStoriesCentresMassRigidity()
SpectralAnalysisBuildingStoriesForcesInShearWalls()
SpectralAnalysisBuildingStoriesInterstoryDrifts()
SpectralAnalysisBuildingStoriesStoryActions()
SpectralAnalysisMembersContactForces()
SpectralAnalysisMembersGlobalDeformations()
SpectralAnalysisMembersHingeDeformations()
SpectralAnalysisMembersHingeForces()
SpectralAnalysisMembersInternalForces()
SpectralAnalysisMembersInternalForcesByMemberSet()
SpectralAnalysisMembersInternalForcesBySection()
SpectralAnalysisMembersLocalDeformations()
SpectralAnalysisMembersStrains()
SpectralAnalysisNodesDeformations()
SpectralAnalysisNodesPseudoAccelerations()
SpectralAnalysisNodesPseudoVelocities()
SpectralAnalysisNodesSupportForces()
SpectralAnalysisSummary()
StabilityIncrementalAnalysisBuildingStoriesCentresMassRigidity()
StabilityIncrementalAnalysisBuildingStoriesForcesInShearWalls()
StabilityIncrementalAnalysisBuildingStoriesInterstoryDrifts()
StabilityIncrementalAnalysisBuildingStoriesStoryActions()
StabilityIncrementalAnalysisCalculationDiagrams()
StabilityIncrementalAnalysisMembersContactForces()
StabilityIncrementalAnalysisMembersGlobalDeformations()
StabilityIncrementalAnalysisMembersHingeDeformations()
StabilityIncrementalAnalysisMembersHingeForces()
StabilityIncrementalAnalysisMembersInternalForces()
StabilityIncrementalAnalysisMembersInternalForcesByMemberSet()
StabilityIncrementalAnalysisMembersInternalForcesBySection()
StabilityIncrementalAnalysisMembersLocalDeformations()
StabilityIncrementalAnalysisMembersStrains()
StabilityIncrementalAnalysisNodesDeformations()
StabilityIncrementalAnalysisNodesSupportForces()
StabilityIncrementalAnalysisSummary()
TimeHistoryAnalysisBuildingStoriesCentresMassRigidity()
TimeHistoryAnalysisBuildingStoriesForcesInShearWalls()
TimeHistoryAnalysisBuildingStoriesInterstoryDrifts()
TimeHistoryAnalysisBuildingStoriesStoryActions()
TimeHistoryAnalysisMembersContactForces()
TimeHistoryAnalysisMembersGlobalDeformations()
TimeHistoryAnalysisMembersHingeDeformations()
TimeHistoryAnalysisMembersHingeForces()
TimeHistoryAnalysisMembersInternalForces()
TimeHistoryAnalysisMembersInternalForcesByMemberSet()
TimeHistoryAnalysisMembersInternalForcesBySection()
TimeHistoryAnalysisMembersLocalDeformations()
TimeHistoryAnalysisMembersStrains()
TimeHistoryAnalysisNodesAccelerations()
TimeHistoryAnalysisNodesDeformations()
TimeHistoryAnalysisNodesSupportForces()
TimeHistoryAnalysisNodesVelocities()
TimeHistoryAnalysisSummary()
```

* **Parameters** - (loading_type, loading_no, object_no, include_base, model)

    
    * **loading_type** (*emun*) – Loading type


    * **loading_no** (*int*) – Loading Number


    * **object_no** (*int*) – Object number


    * **include_base** (*bool*) – Include Base


    * **model** (*class, optional*) – Model instance



For example:

> ResultTables.BuildingStoriesForcesInShearWalls(loading_type = CaseObjectType.E_OBJECT_TYPE_LOAD_CASE, loading_no = 1, object_no = 0, include_base = False, model = Model)



#### List 2

**Static Methods**

```py
AluminumDesignDesignRatiosMemberRepresentativesByConstructionStage()
AluminumDesignDesignRatiosMemberRepresentativesByDesignSituation()
AluminumDesignDesignRatiosMemberRepresentativesByLoading()
AluminumDesignDesignRatiosMemberRepresentativesByLocation()
AluminumDesignDesignRatiosMemberRepresentativesByMaterial()
AluminumDesignDesignRatiosMemberRepresentativesByMemberRepresentative()
AluminumDesignDesignRatiosMemberRepresentativesBySection()
AluminumDesignDesignRatiosMemberSetRepresentativesByConstructionStage()
AluminumDesignDesignRatiosMemberSetRepresentativesByDesignSituation()
AluminumDesignDesignRatiosMemberSetRepresentativesByLoading()
AluminumDesignDesignRatiosMemberSetRepresentativesByLocation()
AluminumDesignDesignRatiosMemberSetRepresentativesByMaterial()
AluminumDesignDesignRatiosMemberSetRepresentativesByMemberSetRepresentative()
AluminumDesignDesignRatiosMemberSetRepresentativesBySection()
AluminumDesignDesignRatiosMembersByConstructionStage()
AluminumDesignDesignRatiosMembersByDesignSituation()
AluminumDesignDesignRatiosMembersByLoading()
AluminumDesignDesignRatiosMembersByLocation()
AluminumDesignDesignRatiosMembersByMaterial()
AluminumDesignDesignRatiosMembersByMember()
AluminumDesignDesignRatiosMembersByMemberSet()
AluminumDesignDesignRatiosMembersBySection()
AluminumDesignGoverningInternalForcesByMember()
AluminumDesignGoverningInternalForcesByMemberEnds()
AluminumDesignGoverningInternalForcesByMemberRepresentative()
AluminumDesignGoverningInternalForcesByMemberRepresentativeEnds()
AluminumDesignGoverningInternalForcesByMemberSet()
AluminumDesignGoverningInternalForcesByMemberSetEnds()
AluminumDesignGoverningInternalForcesByMemberSetRepresentative()
AluminumDesignGoverningInternalForcesByMemberSetRepresentativeEnds()
AluminumDesignGoverningLoading()
AluminumDesignOverviewErrorsAndWarnings()
AluminumDesignOverviewNotValidDeactivated()
AluminumDesignSlendernessByMember()
AluminumDesignSlendernessByMemberRepresentative()
AluminumDesignSlendernessByMemberSet()
AluminumDesignSlendernessByMemberSetRepresentative()
```

* **Parameters** - (include_base, model)


    * **include_base** (*bool*) – Include Base


    * **model** (*class, optional*) – Model instance


For example:

> ResultTables.AluminumDesignDesignRatiosMemberRepresentativesByConstructionStage(include_base = False, model = Model)
 


### **Additional Result Table Static Methods**


### ResultTables.HasAnyResults(model)

* **Parameters**


    * **model** (*class, optional*) – Model instance


### ResultTables.HasResults(loading_type, loading_no, model)

* **Parameters**

    
    * **loading_type** (*emun*) – Loading type


    * **loading_no** (*int*) – Loading Number


    * **model** (*class, optional*) – Model instance


### ResultTables.Summary(loading_type, loading_no, model)

* **Parameters**

    
    * **loading_type** (*emun*) – Loading type


    * **loading_no** (*int*) – Loading Number


    * **model** (*class, optional*) – Model instance


