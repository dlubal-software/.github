# Types For Surfaces

<a name="SurfaceEccentricity"></a>

## SurfaceEccentricity
**Kind**: global class  

<a name="new_SurfaceEccentricity_new"></a>

### new SurfaceEccentricity(no, surfaces_list, comment, params)
Creates surface eccentricity

**Returns**: Created surface eccentricity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface eccentricity, can be undefined |
| surfaces_list | <code>Array</code> | List of surfaces indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface eccentricity's parameters, can be undefined |

<a name="SurfaceEccentricity+OffsetAndThicknessAssignment"></a>

### surfaceEccentricity.OffsetAndThicknessAssignment(no, surfaces_list, offset, thickness_alignment, comment, params)
Sets offset or/and thickness alignment

**Kind**: instance method of [<code>SurfaceEccentricity</code>](#SurfaceEccentricity)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface eccentricity, can be undefined |
| surfaces_list | <code>Array</code> | List of surfaces indexes |
| offset | <code>Number</code> | Absolute ordinate (value has tu be set with this way: for example 20 mm), can be undefined |
| thickness_alignment | <code>String</code> | Thickness assignment (THICKNESS_ALIGNMENT_TOP, THICKNESS_ALIGNMENT_MIDDLE, THICKNESS_ALIGNMENT_BOTTOM), can be undefined (middle as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface eccentricity's parameters, can be undefined |

<a name="SurfaceEccentricity+TransverseOffset"></a>

### surfaceEccentricity.TransverseOffset(reference_type, reference_no, offset_alignment)
Sets transverse offset

**Kind**: instance method of [<code>SurfaceEccentricity</code>](#SurfaceEccentricity)  

| Param | Type | Description |
| --- | --- | --- |
| reference_type | <code>String</code> | Reference object type (REFERENCE_TYPE_MEMBER, REFERENCE_TYPE_SURFACE) |
| reference_no | <code>Number</code> | Member or surface Number |
| offset_alignment | <code>String</code> | Axial offset (TRANSVERSE_OFFSET_TOP, TRANSVERSE_OFFSET_MIDDLE, TRANSVERSE_OFFSET_BOTTOM), can be undefined (middle as default) |

<a name="SurfaceMeshRefinement"></a>

## SurfaceMeshRefinement
**Kind**: global class  
<a name="new_SurfaceMeshRefinement_new"></a>

### new SurfaceMeshRefinement(no, surface_list, target_length, comment, params)
Creates surface mesh refinement

**Returns**: Created surface mesh refinement  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface mesh refinement, can be undefined |
| surface_list | <code>Array</code> | List of surface indexes, can be undefined |
| target_length | <code>Number</code> | Target FE length, can be undefined (0.05 m by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="SurfaceStiffnessModification"></a>

## SurfaceStiffnessModification
**Kind**: global class  

<a name="new_SurfaceStiffnessModification_new"></a>

### new SurfaceStiffnessModification(no, structural_modification, comment, params)
Creates surface stiffness modification

**Returns**: Created surface stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification |
| structural_modification | <code>Number</code> | Structural modification index |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="SurfaceStiffnessModification+TotalStiffnessFactor"></a>

### surfaceStiffnessModification.TotalStiffnessFactor(no, structural_modification, total_stiffness, comment, params) ⇒
Creates total stiffness factor type of surface stiffness modification

**Kind**: instance method of [<code>SurfaceStiffnessModification</code>](#SurfaceStiffnessModification)  
**Returns**: Created surface stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification |
| structural_modification | <code>Number</code> | Structural modification index |
| total_stiffness | <code>Number</code> | Total stiffness |
| comment | <code>String</code> | Comment, can be undefined, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="SurfaceStiffnessModification+PartialStiffnessesFactors"></a>

### surfaceStiffnessModification.PartialStiffnessesFactors(no, structural_modification, bending_stiffness_factor, shear_stiffness, membrane_stiffness, eccentric_effects, weight, comment, params) ⇒
Creates partial stiffnesses factors type of surface stiffness modification

**Kind**: instance method of [<code>SurfaceStiffnessModification</code>](#SurfaceStiffnessModification)  
**Returns**: Created surface stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification |
| structural_modification | <code>Number</code> | Structural modification index, can be undefined |
| bending_stiffness_factor | <code>Number</code> | Bending and torsional factors, can be undefined (1.00 by default) |
| shear_stiffness | <code>Number</code> | Shear stiffness, can be undefined (1.00 by default) |
| membrane_stiffness | <code>Number</code> | Membrane stiffness, can be undefined (1.00 by default) |
| eccentric_effects | <code>Number</code> | Eccentric stiffness, can be undefined (1.00 by default) |
| weight | <code>Number</code> | Weight, can be undefined (1.00 by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="SurfaceStiffnessModification+StiffnessMatrixElementsFactors"></a>

### surfaceStiffnessModification.StiffnessMatrixElementsFactors(no, structural_modification, bending_torsional_stiffness_elements, shear_stiffness_elements, membrane_stiffness_elements, eccentric_stiffness_elements, comment, params) ⇒
Creates stiffness matrix elements factors type of surface stiffness modification

**Kind**: instance method of [<code>SurfaceStiffnessModification</code>](#SurfaceStiffnessModification)  
**Returns**: Created surface stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification |
| structural_modification | <code>Number</code> | Structural modification index, can be undefined |
| bending_torsional_stiffness_elements | <code>Array</code> | Bending torsional stiffness elements values ([kD11, kD12, kD13, kD22, kD23, kD33, kD11 note, kD12 note, kD13 note, kD22 note, kD23 note, kD33 note]), can be undefined (all values 1.0 by default) |
| shear_stiffness_elements | <code>Array</code> | Shear stiffness elements values ([kD44, kD45, kD55, kD44  note, kD45 note, kD55 note]), can be undefined (all values 1.0 by default) |
| membrane_stiffness_elements | <code>Array</code> | Membrane stiffness elements values ([kD66, kD67, kD68, kD77, kD78, kD88, kD66 note, kD67 note, kD68 note, kD77 note, kD78 note, kD88 note]), can be undefined (all values 1.0 by default) |
| eccentric_stiffness_elements | <code>Array</code> | Eccentric stiffness elements values ([kD16, kD17, kD18, kD27, kD28, kD38, kD16 note, kD17 note, kD18 note, kD27 note, kD28 note, kD38 note]), can be undefined (all values 1.0 by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="SurfaceStiffnessModification+ConcreteStructuresACI"></a>

### surfaceStiffnessModification.ConcreteStructuresACI(no, structural_modification, component_type, comment, params) ⇒
Creates concrete structure ACI type of surface stiffness modification

**Kind**: instance method of [<code>SurfaceStiffnessModification</code>](#SurfaceStiffnessModification)  
**Returns**: Created surface stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification |
| structural_modification | <code>Number</code> | Structural modification index, can be undefined |
| component_type | <code>Number</code> | Component type (1 - Columns, 2 - Walls uncracked, 3 - Walls cracked, 4 - Beams, 5 - Flat plates and flat slabs), can be undefined (Columns type as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="SurfaceStiffnessModification+ConcreteStructuresCSA"></a>

### surfaceStiffnessModification.ConcreteStructuresCSA(no, structural_modification, component_type, comment, params) ⇒
Creates concrete structure CSA type of surface stiffness modification

**Kind**: instance method of [<code>SurfaceStiffnessModification</code>](#SurfaceStiffnessModification)  
**Returns**: Created surface stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification |
| structural_modification | <code>Number</code> | Structural modification index, can be undefined |
| component_type | <code>Number</code> | Component type (1 - Columns, 2 - Walls uncracked, 3 - Walls cracked, 4 - Beams, 5 - Flat plates and flat slabs), can be undefined (Columns type as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="createSurfaceEccentricity"></a>

## createSurfaceEccentricity(no, surfaces_list, comment, params) ⇒
Creates base surface eccentricity

**Kind**: global function  
**Returns**: Surface eccentricity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface eccentricity, can be undefined |
| surfaces_list | <code>Array</code> | List of surfaces indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface eccentricity's parameters, can be undefined |

<a name="getAlignment"></a>

## getAlignment(alignment) ⇒
Convert string representation of alignment (private)

**Kind**: global function  
**Returns**: Surface eccentricity alignment  

| Param | Type | Description |
| --- | --- | --- |
| alignment | <code>String</code> | Surface eccentricity alignment |

<a name="createSurfaceMeshRefinement"></a>

## createSurfaceMeshRefinement(no, surface_list, comment, params) ⇒
Creates surface mesh refinement (private)

**Kind**: global function  
**Returns**: Created surface mesh refinement  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification, can be undefined |
| surface_list | <code>Array</code> | List of surface indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="setConcreteStructures"></a>

## setConcreteStructures(surface_stiffness_modification, stiffness_modification_type, component_type)
Modifies concrete structures surface stiffness modification (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| surface_stiffness_modification | <code>Object</code> | Surface stiffness modification to be set |
| stiffness_modification_type | <code>String</code> | Stiffness modification type |
| component_type | <code>Number</code> | Component type (1 - Columns, 2 - Walls uncracked, 3 - Walls cracked, 4 - Beams, 5 - Flat plates and flat slabs), can be undefined (Columns type as default) |

<a name="createSurfaceStiffnessModification"></a>

## createSurfaceStiffnessModification(no, structural_modification, comment, params) ⇒
Creates surface stiffness modification

**Kind**: global function  
**Returns**: Created surface stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface stiffness modification |
| structural_modification | <code>Number</code> | Structural modification index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface stiffness modification's parameters, can be undefined |

<a name="setParameter"></a>

## setParameter(surface_stiffness_modification, parameter_name, parameter_value)
Sets parameter to surface stiffness modification object (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| surface_stiffness_modification | <code>Object</code> | Surface stiffness modification to be set |
| parameter_name | <code>String</code> | Name of parameter |
| parameter_value | <code>Number</code> | Value to be set |

<a name="setStiffnessMatrixValues"></a>

## setStiffnessMatrixValues(arguments)
Set load parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arguments | <code>Array</code> | Arguments: arg[0] - surface stiffness modification, arg[1] - array of stiffness matrix values to set, arg[2, 3 ... n] - stiffness matrix parameters to be set |

