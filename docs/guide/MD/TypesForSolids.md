# Types For Solids

<a name="ContactSolid"></a>

## ContactSolid
**Kind**: global class

<a name="new_ContactSolid_new"></a>

### new ContactSolid(no, perpendicular_to_surface, parallel_to_surface, values, comment, params)
Creates contact solid

**Returns**: Created contact solid

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of contact solid |
| perpendicular_to_surface | <code>Number</code> | Contact perpendicular to surfaces, can be undefined ("Failure force transmission" by default) 														1 - Full force transmission 														2 - Failure under compression 														3 - Failure under tension |
| parallel_to_surface | <code>Number</code> | Contact parallel to surfaces, can be undefined ("Failure if contact perpendicular to surfaces failed" by default) 														1 - Full force transmission 														2 - Rigid friction 														3 - Rigid friction with limit 														4 - Elastic friction 														5 - Elastic friction with limit 														6 - Elastic solid behavior 														7 - Failure if contact perpendicular to surfaces failed (only for failure perpendicular - 2 and 3) |
| values | <code>Array</code> | Values depends on contact parallel to surface type, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Contact solid's parameters, can be undefined |

<a name="ContactSolid+AssignTo"></a>

### contactSolid.AssignTo(solid_list)
Assigns solids to contact solid

**Kind**: instance method of [<code>ContactSolid</code>](#ContactSolid)

| Param | Type | Description |
| --- | --- | --- |
| solid_list | <code>Array</code> | List of solid's indexes |

<a name="GasSolid"></a>

## GasSolid
**Kind**: global class

<a name="new_GasSolid_new"></a>

### new GasSolid(no, pressure, temperature, comment, params)
Creates gas solid

**Returns**: Created gas solid

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of gas solid |
| pressure | <code>Number</code> | Pressure, can be empty (0.0 by default) |
| temperature | <code>Number</code> | Temperature, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Gas solid's parameters, can be undefined |

<a name="GasSolid+AssignTo"></a>

### gasSolid.AssignTo(solid_list)
Assigns solids to gas solid

**Kind**: instance method of [<code>GasSolid</code>](#GasSolid)

| Param | Type | Description |
| --- | --- | --- |
| solid_list | <code>Array</code> | List of solid's indexes |

<a name="SolidMeshRefinement"></a>

## SolidMeshRefinement
**Kind**: global class

<a name="new_SolidMeshRefinement_new"></a>

### new SolidMeshRefinement(no, solid_list, comment, params)
Creates solid mesh refinement

**Returns**: Created solid mesh refinement

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid mesh refinement, can be undefined |
| solid_list | <code>Array</code> | List of solid indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Solid mesh refinement's parameters, can be undefined |

<a name="SolidMeshRefinement+TargetLength"></a>

### solidMeshRefinement.TargetLength(no, solid_list, target_length, comment, params)
Creates solid mesh refinement

**Kind**: instance method of [<code>SolidMeshRefinement</code>](#SolidMeshRefinement)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid mesh refinement, can be undefined |
| solid_list | <code>Array</code> | List of solid indexes |
| target_length | <code>Number</code> | Target FE length |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Solid mesh refinement's parameters, can be undefined |

<a name="createContactSolid"></a>
