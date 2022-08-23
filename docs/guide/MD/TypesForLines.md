# Types For Lines

<a name="LineHinge"></a>

## LineHinge
**Kind**: global class

<a name="new_LineHinge_new"></a>

### new LineHinge(no, surface, lines, comment, params)
Creates line hinge

**Returns**: <code>Object</code> - Created line hinge

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line hinge, can be undefined |
| surface | <code>Integer</code> | Surface id (lines must lie on this surface) |
| lines | <code>Integer</code> \| <code>Array</code> | One or more lines id for line hinge assign |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | line hinge parameters, can be undefined |

<a name="LineHinge+Translation"></a>

### lineHinge.Translation(ux, uy, uz) ⇒ <code>Object</code>
Set translation constants ux, uy, uz to line hinge

**Kind**: instance method of [<code>LineHinge</code>](#LineHinge)
**Returns**: <code>Object</code> - line hinge in parent

| Param | Type | Description |
| --- | --- | --- |
| ux | <code>Boolean</code> \| <code>Float</code> | Translation ux (true, false, number(stiffness [Nm^2])) |
| uy | <code>Boolean</code> \| <code>Float</code> | Translation uy (true, false, number(stiffness [Nm^2])) |
| uz | <code>Boolean</code> \| <code>Float</code> | Translation uz (true, false, number(stiffness [Nm^2])) |

<a name="LineHinge+TranslationX"></a>

### lineHinge.TranslationX(ux) ⇒ <code>Object</code>
Set translation constant ux to line hinge

**Kind**: instance method of [<code>LineHinge</code>](#LineHinge)
**Returns**: <code>Object</code> - line hinge in parent

| Param | Type | Description |
| --- | --- | --- |
| ux | <code>Boolean</code> \| <code>Float</code> | Translation ux (true, false, number(stiffness [Nm^2])) |

<a name="LineHinge+TranslationY"></a>

### lineHinge.TranslationY(uy) ⇒ <code>Object</code>
Set translation constant uy to line hinge

**Kind**: instance method of [<code>LineHinge</code>](#LineHinge)
**Returns**: <code>Object</code> - line hinge in parent

| Param | Type | Description |
| --- | --- | --- |
| uy | <code>Boolean</code> \| <code>Float</code> | Translation uy (true, false, number(stiffness [Nm^2])) |

<a name="LineHinge+TranslationZ"></a>

### lineHinge.TranslationZ(uz) ⇒ <code>Object</code>
Set translation constant uz to line hinge

**Kind**: instance method of [<code>LineHinge</code>](#LineHinge)
**Returns**: <code>Object</code> - line hinge in parent

| Param | Type | Description |
| --- | --- | --- |
| uz | <code>Boolean</code> \| <code>Float</code> | Translation uz (true, false, number(stiffness [Nm^2])) |

<a name="LineHinge+Rotation"></a>

### lineHinge.Rotation(rx) ⇒ <code>Object</code>
Set rotation constant rx to line hinge

**Kind**: instance method of [<code>LineHinge</code>](#LineHinge)
**Returns**: <code>Object</code> - line hinge in parent

| Param | Type | Description |
| --- | --- | --- |
| rx | <code>Boolean</code> \| <code>Float</code> | Rotation rx (true, false, number(stiffness [Nm^2])) |

<a name="LineHinge+AssignTo"></a>

### lineHinge.AssignTo(surface, lines)
Assign line hinge to line and surface (line must be involved in the surface)

**Kind**: instance method of [<code>LineHinge</code>](#LineHinge)

| Param | Type | Description |
| --- | --- | --- |
| surface | <code>Integer</code> | surface id (lines must lie on this surface) |
| lines | <code>Integer</code> \| <code>Array</code> | one or more lines id for line hinge assign |

<a name="LineHinge+WallSlabConnection"></a>

### lineHinge.WallSlabConnection(surface, or)
Assign wall-slab connection to line hinge

**Kind**: instance method of [<code>LineHinge</code>](#LineHinge)

| Param | Type | Description |
| --- | --- | --- |
| surface | <code>Integer</code> | surface id (lines must lie on this surface) |
| or | <code>Integer</code> | {Array}	lines			one or more lines id for line hinge assign |

<a name="LineMeshRefinement"></a>

## LineMeshRefinement
**Kind**: global class

<a name="new_LineMeshRefinement_new"></a>

### new LineMeshRefinement(no, targetFELength, numberOfLayers, lines, comment, params)
Creates line mesh refinement

**Returns**: <code>Object</code> - Created line mesh refinement HLF

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line mesh refinement, can be undefined |
| targetFELength | <code>Number</code> | Length of FEA element side on the line, can be undefined |
| numberOfLayers | <code>Number</code> | Number of layers to be affected by this refinement, can be undefined |
| lines | <code>Number</code> \| <code>Array</code> | Lines assigned to this refinement, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | line mesh refinement parameters, can be undefined |

<a name="LineMeshRefinement+TargetFELength"></a>

### lineMeshRefinement.TargetFELength(targetFELength, numberOfLayers, lines) ⇒ <code>Object</code>
Change line mesh refinement to type based on element length

**Kind**: instance method of [<code>LineMeshRefinement</code>](#LineMeshRefinement)
**Returns**: <code>Object</code> - Created line mesh refinement

| Param | Type | Description |
| --- | --- | --- |
| targetFELength | <code>Number</code> | Length of FEA element side on the line, can be undefined |
| numberOfLayers | <code>Number</code> | Number of layers to be affected by this refinement, can be undefined |
| lines | <code>Number</code> \| <code>Array</code> | Lines assigned to this refinement, can be undefined |

<a name="LineMeshRefinement+NumberFiniteElements"></a>

### lineMeshRefinement.NumberFiniteElements(numberOfFiniteElements, numberOfLayers, lines) ⇒ <code>Object</code>
Change line mesh refinement to type based on number of elements on line

**Kind**: instance method of [<code>LineMeshRefinement</code>](#LineMeshRefinement)
**Returns**: <code>Object</code> - Created line mesh refinement

| Param | Type | Description |
| --- | --- | --- |
| numberOfFiniteElements | <code>Number</code> | Number of FEA elements on the line, can be undefined |
| numberOfLayers | <code>Number</code> | Number of layers to be affected by this refinement, can be undefined |
| lines | <code>Number</code> \| <code>Array</code> | Lines assigned to this refinement, can be undefined |

<a name="LineMeshRefinement+Gradual"></a>

### lineMeshRefinement.Gradual(gradual_rows, numberOfLayers, lines) ⇒ <code>Object</code>
Change line mesh refinement to type gradually changed due to distance from the line

**Kind**: instance method of [<code>LineMeshRefinement</code>](#LineMeshRefinement)
**Returns**: <code>Object</code> - Created line mesh refinement

| Param | Type | Description |
| --- | --- | --- |
| gradual_rows | <code>Number</code> | Number gradual rows of FEA elements, can be undefined |
| numberOfLayers | <code>Number</code> | Number of layers to be affected by this refinement, can be undefined |
| lines | <code>Number</code> \| <code>Array</code> | Lines assigned to this refinement, can be undefined |

<a name="LineMeshRefinement+SetLines"></a>

### lineMeshRefinement.SetLines(gradual_rows, lines) ⇒ <code>Object</code>
Function for assign lines to line mesh refinement

**Kind**: instance method of [<code>LineMeshRefinement</code>](#LineMeshRefinement)
**Returns**: <code>Object</code> - Created line mesh refinement

| Param | Type | Description |
| --- | --- | --- |
| gradual_rows | <code>Number</code> | Number gradual rows of FEA elements, can be undefined |
| lines | <code>Number</code> \| <code>Array</code> | Lines assigned to this refinement, can be undefined |

<a name="createLineHinge"></a>
