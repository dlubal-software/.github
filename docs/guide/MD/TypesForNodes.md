# Types For Nodes

<a name="NodalSupport"></a>

## NodalSupport
**Kind**: global class  

<a name="new_NodalSupport_new"></a>

### new NodalSupport(no, nodes, comment, params)
Creates nodal support hight level function

**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of nodal support, empty by default |
| nodes | <code>Array</code> | List of nodes |
| comment | <code>String</code> | Comment, empty by default |
| params | <code>Object</code> | Nodal support parameters, empty by default |

<a name="NodalSupport+Status"></a>

### nodalSupport.Status()
Nodal support brief report

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
<a name="NodalSupport+SetNodes"></a>

### nodalSupport.SetNodes(nodes) ⇒
Set nodes to nodal supports

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| nodes | <code>Array</code> | List of nodes |

<a name="NodalSupport+SetComment"></a>

### nodalSupport.SetComment(comment) ⇒
Set comment to nodal support

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| comment | <code>String</code> | Content of comment |

<a name="NodalSupport+SetNo"></a>

### nodalSupport.SetNo(no)
Set identification number to nodal support

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | identification number of nodal support |

<a name="NodalSupport+Fixed"></a>

### nodalSupport.Fixed() ⇒
Set nodal support as fixed

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  
<a name="NodalSupport+Hinged"></a>

### nodalSupport.Hinged() ⇒
Set nodal support as hinged

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  
<a name="NodalSupport+Roller"></a>

### nodalSupport.Roller() ⇒
Set nodal support as roller

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  
<a name="NodalSupport+RollerX"></a>

### nodalSupport.RollerX() ⇒
Set nodal support as roller in X direction

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  
<a name="NodalSupport+RollerY"></a>

### nodalSupport.RollerY() ⇒
Set nodal support as roller in Y direction

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  
<a name="NodalSupport+RollerZ"></a>

### nodalSupport.RollerZ() ⇒
Set nodal support as roller in Z direction

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  
<a name="NodalSupport+Free"></a>

### nodalSupport.Free() ⇒
Sets nodal support free

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  
<a name="NodalSupport+Translation"></a>

### nodalSupport.Translation(x, y, z) ⇒
Sets flexible stiffness for translations

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Stiffness in X direction |
| y | <code>Number</code> | Stiffness in Y direction |
| z | <code>Number</code> | Stiffness in Z direction |

<a name="NodalSupport+TranslationX"></a>

### nodalSupport.TranslationX(x) ⇒
Sets flexible stiffness in X direction for translation

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Stiffness in X direction |

<a name="NodalSupport+TranslationY"></a>

### nodalSupport.TranslationY(y) ⇒
Sets flexible stiffness in Y direction for translation

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>Number</code> | Stiffness in Y direction |

<a name="NodalSupport+TranslationZ"></a>

### nodalSupport.TranslationZ(z) ⇒
Sets flexible stiffness in Z direction for translation

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| z | <code>Number</code> | Stiffness in Z direction |

<a name="NodalSupport+Rotation"></a>

### nodalSupport.Rotation(x, y, z) ⇒
Sets flexible stiffness for rotations

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Stiffness around X direction |
| y | <code>Number</code> | Stiffness around Y direction |
| z | <code>Number</code> | Stiffness around Z direction |

<a name="NodalSupport+RotationX"></a>

### nodalSupport.RotationX(x) ⇒
Sets flexible stiffness around X direction for rotation

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Stiffness around x direction |

<a name="NodalSupport+RotationY"></a>

### nodalSupport.RotationY(y) ⇒
Sets flexible stiffness around Y direction for rotation

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>Number</code> | Stiffness around y direction |

<a name="NodalSupport+RotationZ"></a>

### nodalSupport.RotationZ(z) ⇒
Sets flexible stiffness around Z direction for rotation

**Kind**: instance method of [<code>NodalSupport</code>](#NodalSupport)  
**Returns**: Nodal support object  

| Param | Type | Description |
| --- | --- | --- |
| z | <code>Number</code> | Stiffness around z direction |

<a name="NodalMeshRefinement"></a>

## NodalMeshRefinement(no, assigned_nodes, comment, params)
Creates default nodal node refinement

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of rectangular nodal mesh refinement, can be undefined |
| assigned_nodes | <code>Array</code> | Assigned nodes |
| comment | <code>String</code> | Comment |
| params | <code>Object</code> | Additional parameters |

<a name="NodalMeshRefinement+Circular"></a>

### nodalMeshRefinement.Circular(no, assigned_nodes, radius, inner_target_fe_length, outer_target_fe_length, fe_length_arrangement, comment, params)
Creates circular nodal mesh refinement

**Kind**: instance method of [<code>NodalMeshRefinement</code>](#NodalMeshRefinement)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of circular nodal mesh refinement, can be undefined |
| assigned_nodes | <code>Array</code> | Assigned nodes |
| radius | <code>Number</code> | Circular radius, can be undefined (2.5 m by default) |
| inner_target_fe_length | <code>Number</code> | Inner target FE length, can be undefined (0.1 m by default) |
| outer_target_fe_length | <code>Number</code> | Outer target FE length, can be undefined (0.5 m by default) |
| fe_length_arrangement | <code>String</code> | FE length arrangement ("Radial", "Gradually", "Combined"), can be undefined (Radial as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="NodalMeshRefinement+Rectangular"></a>

### nodalMeshRefinement.Rectangular(no, assigned_nodes, side_length, inner_target_fe_length, comment, params)
Creates rectangular nodal mesh refinement

**Kind**: instance method of [<code>NodalMeshRefinement</code>](#NodalMeshRefinement)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of rectangular nodal mesh refinement, can be undefined |
| assigned_nodes | <code>Array</code> | Assigned nodes |
| side_length | <code>Number</code> | Side length, can be undefined (0.5 m by default) |
| inner_target_fe_length | <code>Number</code> | Inner target FE length, can be undefined (0.1 m by default) |
| comment | <code>String</code> | Comment |
| params | <code>Object</code> | Additional parameters |

<a name="NodalMeshRefinement+ApplyToSurfaces"></a>

### nodalMeshRefinement.ApplyToSurfaces(indexes)
Apply only to selected surfaces

**Kind**: instance method of [<code>NodalMeshRefinement</code>](#NodalMeshRefinement)  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array</code> | Apply only on surfaces with indexes, can be undefined (no surfaces are selected) |

<a name="createNodalMeshRefinement"></a>

## createNodalMeshRefinement(no, assigned_nodes, comment, params) ⇒
Creates default nodal node refinement

**Kind**: global function  
**Returns**: Created default nodal mesh refinement  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of rectangular nodal mesh refinement, can be undefined |
| assigned_nodes | <code>Array</code> | Assigned nodes |
| comment | <code>String</code> | Comment |
| params | <code>Object</code> | Additional parameters |

