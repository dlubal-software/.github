# Loads

<a name="FreeCircularLoad"></a>

## FreeCircularLoad
**Kind**: global class  

<a name="new_FreeCircularLoad_new"></a>

### new FreeCircularLoad(no, load_case, surfaces, comment, params)
Creates free circular load

**Returns**: <code>Object</code> - Created free circular load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free circular load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeCircularLoad+Uniform"></a>

### freeCircularLoad.Uniform(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free circular uniform load

**Kind**: instance method of [<code>FreeCircularLoad</code>](#FreeCircularLoad)  
**Returns**: <code>Object</code> - Created free circular uniform load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free circular uniform load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeCircularLoad+Linear"></a>

### freeCircularLoad.Linear(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free circular linear load

**Kind**: instance method of [<code>FreeCircularLoad</code>](#FreeCircularLoad)  
**Returns**: <code>Object</code> - Created free linear uniform load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free circular linear load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeConcentratedLoad"></a>

## FreeConcentratedLoad
**Kind**: global class  

<a name="new_FreeConcentratedLoad_new"></a>

### new FreeConcentratedLoad(no, load_case, surfaces, comment, params)
Creates free concentrated load

**Returns**: <code>Object</code> - Created free concentrated load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free concentrated load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeConcentratedLoad+Force"></a>

### freeConcentratedLoad.Force(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free concentrated force load

**Kind**: instance method of [<code>FreeConcentratedLoad</code>](#FreeConcentratedLoad)  
**Returns**: <code>Object</code> - Created free concentrated force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free concentrated force load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeConcentratedLoad+Moment"></a>

### freeConcentratedLoad.Moment(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free concentrated moment load

**Kind**: instance method of [<code>FreeConcentratedLoad</code>](#FreeConcentratedLoad)  
**Returns**: <code>Object</code> - Created free concentrated moment load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free concentrated moment load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeLineLoad"></a>

## FreeLineLoad
**Kind**: global class  

<a name="new_FreeLineLoad_new"></a>

### new FreeLineLoad(no, load_case, surfaces, comment, params)
Creates free line load

**Returns**: <code>Object</code> - Created free line load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free line load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeLineLoad+Uniform"></a>

### freeLineLoad.Uniform(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free line uniform load

**Kind**: instance method of [<code>FreeLineLoad</code>](#FreeLineLoad)  
**Returns**: <code>Object</code> - Created free line uniform load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free line uniform load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeLineLoad+Linear"></a>

### freeLineLoad.Linear(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free line linear load

**Kind**: instance method of [<code>FreeLineLoad</code>](#FreeLineLoad)  
**Returns**: <code>Object</code> - Created free line linear load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free line linear load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreePolygonLoad"></a>

## FreePolygonLoad
**Kind**: global class  

<a name="new_FreePolygonLoad_new"></a>

### new FreePolygonLoad(no, load_case, surfaces, comment, params)
Creates free polygon load

**Returns**: <code>Object</code> - Created free polygon load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free polygon load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreePolygonLoad+Uniform"></a>

### freePolygonLoad.Uniform(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free polygon uniform load

**Kind**: instance method of [<code>FreePolygonLoad</code>](#FreePolygonLoad)  
**Returns**: <code>Object</code> - Created free polygon uniform load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free polygon uniform load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreePolygonLoad+Linear"></a>

### freePolygonLoad.Linear(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free polygon linear load

**Kind**: instance method of [<code>FreePolygonLoad</code>](#FreePolygonLoad)  
**Returns**: <code>Object</code> - Created free polygon linear load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free polygon linear load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreePolygonLoad+LinearX"></a>

### freePolygonLoad.LinearX(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free polygon linear in X load

**Kind**: instance method of [<code>FreePolygonLoad</code>](#FreePolygonLoad)  
**Returns**: <code>Object</code> - Created free polygon linear in X load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free polygon linear in X load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreePolygonLoad+LinearY"></a>

### freePolygonLoad.LinearY(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free polygon linear in Y load

**Kind**: instance method of [<code>FreePolygonLoad</code>](#FreePolygonLoad)  
**Returns**: <code>Object</code> - Created free polygon linear in Y load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free polygon linear in Y load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeRectangularLoad"></a>

## FreeRectangularLoad
**Kind**: global class  

<a name="new_FreeRectangularLoad_new"></a>

### new FreeRectangularLoad(no, load_case, surfaces, comment, params)
Creates free rectangular load

**Returns**: <code>Object</code> - Created free rectangular load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free rectangular load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeRectangularLoad+Uniform"></a>

### freeRectangularLoad.Uniform(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free rectangular uniform load

**Kind**: instance method of [<code>FreeRectangularLoad</code>](#FreeRectangularLoad)  
**Returns**: <code>Object</code> - Created free rectangular uniform load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free rectangular uniform load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeRectangularLoad+LinearX"></a>

### freeRectangularLoad.LinearX(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free rectangular linear in X load

**Kind**: instance method of [<code>FreeRectangularLoad</code>](#FreeRectangularLoad)  
**Returns**: <code>Object</code> - Created free rectangular linear in X load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free rectangular linear in X load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeRectangularLoad+LinearY"></a>

### freeRectangularLoad.LinearY(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free rectangular linear in Y load

**Kind**: instance method of [<code>FreeRectangularLoad</code>](#FreeRectangularLoad)  
**Returns**: <code>Object</code> - Created free rectangular linear in Y load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free rectangular linear in Y load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeRectangularLoad+VaryingZ"></a>

### freeRectangularLoad.VaryingZ(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free rectangular varying in Z load

**Kind**: instance method of [<code>FreeRectangularLoad</code>](#FreeRectangularLoad)  
**Returns**: <code>Object</code> - Created free rectangular varying in Z load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free rectangular varying in Z load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeRectangularLoad+VaryingPerimeter"></a>

### freeRectangularLoad.VaryingPerimeter(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free rectangular varying along perimeter load

**Kind**: instance method of [<code>FreeRectangularLoad</code>](#FreeRectangularLoad)  
**Returns**: <code>Object</code> - Created free rectangular varying along perimeter load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free rectangular varying along perimeter load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="FreeRectangularLoad+VaryingZAndPerimeter"></a>

### freeRectangularLoad.VaryingZAndPerimeter(no, load_case, surfaces, load_values, load_projection, load_direction, load_acting_region_from, load_acting_region_to, comment, params) ⇒ <code>Object</code>
Creates free rectangular varying in Z and along perimeter load

**Kind**: instance method of [<code>FreeRectangularLoad</code>](#FreeRectangularLoad)  
**Returns**: <code>Object</code> - Created free rectangular varying in Z and along perimeter load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of free rectangular varying in Z and along perimeter load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="ImposedLineDeformation"></a>

## ImposedLineDeformation
**Kind**: global class  

<a name="new_ImposedLineDeformation_new"></a>

### new ImposedLineDeformation(no, load_case, lines, comment, params)
Creates imposed line deformation

**Returns**: <code>Object</code> - Created imposed line deformation  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of imposed line deformation, can be undefined |
| load_case | <code>Object</code> | Load case |
| lines | <code>Array</code> | List of lines indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="ImposedLineDeformation+Set"></a>

### imposedLineDeformation.Set(no, load_case, lines, displacement_line_start_x, displacement_line_start_y, displacement_line_start_z, displacement_line_end_x, displacement_line_end_y, displacement_line_end_z, rotation_line_start, rotation_line_end, comment, params) ⇒ <code>Object</code>
Creates imposed line deformation

**Kind**: instance method of [<code>ImposedLineDeformation</code>](#ImposedLineDeformation)  
**Returns**: <code>Object</code> - Created imposed nodal deformation  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of imposed line deformation, can be undefined |
| load_case | <code>Object</code> | Load case |
| lines | <code>Array</code> | List of lines indexes |
| displacement_line_start_x | <code>Number</code> | Imposed displacement at line start ux,i |
| displacement_line_start_y | <code>Number</code> | Imposed displacement at line start uy,i, can be undefined |
| displacement_line_start_z | <code>Number</code> | Imposed displacement at line start uz,i, can be undefined |
| displacement_line_end_x | <code>Number</code> | Imposed displacement at line end ux,j, can be undefined |
| displacement_line_end_y | <code>Number</code> | Imposed displacement at line end uy,i, can be undefined |
| displacement_line_end_z | <code>Number</code> | Imposed displacement at line end uz,i, can be undefined |
| rotation_line_start | <code>Number</code> | Imposed rotation at line start ϕx,i, can be undefined |
| rotation_line_end | <code>Number</code> | Imposed rotation at line end ϕx,j, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="ImposedNodalDeformation"></a>

## ImposedNodalDeformation
**Kind**: global class  

<a name="new_ImposedNodalDeformation_new"></a>

### new ImposedNodalDeformation(no, load_case, nodes, comment, params)
Creates imposed nodal deformation

**Returns**: <code>Object</code> - Created imposed nodal deformation  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of imposed nodal deformation, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of nodes indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="ImposedNodalDeformation+Set"></a>

### imposedNodalDeformation.Set(no, load_case, nodes, imposed_displacement_x, imposed_displacement_y, imposed_displacement_z, imposed_rotation_x, imposed_rotation_y, imposed_rotation_z, comment, params) ⇒ <code>Object</code>
Creates imposed nodal deformation

**Kind**: instance method of [<code>ImposedNodalDeformation</code>](#ImposedNodalDeformation)  
**Returns**: <code>Object</code> - Created imposed nodal deformation  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of imposed nodal deformation, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of nodes indexes |
| imposed_displacement_x | <code>Number</code> | Imposed displacement uX' |
| imposed_displacement_y | <code>Number</code> | Imposed displacement uY', can be undefined |
| imposed_displacement_z | <code>Number</code> | Imposed displacement uZ', can be undefined |
| imposed_rotation_x | <code>Number</code> | Imposed rotation ϕX', can be undefined |
| imposed_rotation_y | <code>Number</code> | Imposed rotation ϕY', can be undefined |
| imposed_rotation_z | <code>Number</code> | Imposed rotation ϕZ', can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineLoad"></a>

## LineLoad
**Kind**: global class  

<a name="new_LineLoad_new"></a>

### new LineLoad(no, load_case, lines, comment, params)
Creates line load

**Returns**: <code>Object</code> - Created line load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line load, can be undefined |
| load_case | <code>Object</code> | Load case |
| lines | <code>Array</code> | List of line indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineLoad+Force"></a>

### lineLoad.Force(no, load_case, lines, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates line force load

**Kind**: instance method of [<code>LineLoad</code>](#LineLoad)  
**Returns**: <code>Object</code> - Created line force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line load, can be undefined |
| load_case | <code>Object</code> | Load case |
| lines | <code>Array</code> | List of lines |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load values depend on load distribution (for more information look at setLineLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineLoad+Moment"></a>

### lineLoad.Moment(no, load_case, lines, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates line moment load

**Kind**: instance method of [<code>LineLoad</code>](#LineLoad)  
**Returns**: <code>Object</code> - Created line moment load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line load, can be undefined |
| load_case | <code>Object</code> | Load case |
| lines | <code>Array</code> | List of lines |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load values depend on load distribution (for more information look at setLineLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineLoad+Mass"></a>

### lineLoad.Mass(no, load_case, lines, load_value, comment, params) ⇒ <code>Object</code>
Creates line mass load

**Kind**: instance method of [<code>LineLoad</code>](#LineLoad)  
**Returns**: <code>Object</code> - Created line mass load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line load, can be undefined |
| load_case | <code>Object</code> | Load case |
| lines | <code>Array</code> | List of lines |
| load_value | <code>Number</code> | Uniform load value |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineLoad+ReferenceToListOfLines"></a>

### lineLoad.ReferenceToListOfLines(value)
Sets option for reference to list of lines

**Kind**: instance method of [<code>LineLoad</code>](#LineLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="LineLoad+ReferDistanceLineEnd"></a>

### lineLoad.ReferDistanceLineEnd(value)
Sets option for refer distance to the line end

**Kind**: instance method of [<code>LineLoad</code>](#LineLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="LineLoad+LoadOverLine"></a>

### lineLoad.LoadOverLine(value)
Sets option for load over total length of line (only for trapezoidal load distribution)

**Kind**: instance method of [<code>LineLoad</code>](#LineLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="LineLoad+IndividualMassComponents"></a>

### lineLoad.IndividualMassComponents(MX, MY, MZ)
Sets individual mass components (only for mass load)

**Kind**: instance method of [<code>LineLoad</code>](#LineLoad)  

| Param | Type | Description |
| --- | --- | --- |
| MX | <code>Number</code> | Mass in X coordination, can be undefined |
| MY | <code>Number</code> | Mass in Y coordination, can be undefined |
| MZ | <code>Number</code> | Mass in Z coordination, can be undefined |

<a name="LineSetLoad"></a>

## LineSetLoad
**Kind**: global class  

<a name="new_LineSetLoad_new"></a>

### new LineSetLoad(no, load_case, line_sets, comment, params)
Creates line set load

**Returns**: <code>Object</code> - Created line set load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| line_sets | <code>Array</code> | List of line sets indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineSetLoad+Force"></a>

### lineSetLoad.Force(no, load_case, line_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates line set force load

**Kind**: instance method of [<code>LineSetLoad</code>](#LineSetLoad)  
**Returns**: <code>Object</code> - Created line set force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| line_sets | <code>Array</code> | List of line sets |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setLineLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineSetLoad+Moment"></a>

### lineSetLoad.Moment(no, load_case, line_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates line set moment load

**Kind**: instance method of [<code>LineSetLoad</code>](#LineSetLoad)  
**Returns**: <code>Object</code> - Created line set moment load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| line_sets | <code>Array</code> | List of line sets |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setLineLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineSetLoad+Mass"></a>

### lineSetLoad.Mass(no, load_case, line_sets, load_value, comment, params) ⇒ <code>Object</code>
Creates line set mass load

**Kind**: instance method of [<code>LineSetLoad</code>](#LineSetLoad)  
**Returns**: <code>Object</code> - Created line set mass load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| line_sets | <code>Array</code> | List of line sets |
| load_value | <code>Number</code> | Uniform parameter value |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="LineSetLoad+ReferDistanceLineSetEnd"></a>

### lineSetLoad.ReferDistanceLineSetEnd(value)
Sets option for refer distance to the end of line set

**Kind**: instance method of [<code>LineSetLoad</code>](#LineSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="LineSetLoad+LoadOverLineSet"></a>

### lineSetLoad.LoadOverLineSet(value)
Sets option for load over total length of line set (only for trapezoidal load distribution)

**Kind**: instance method of [<code>LineSetLoad</code>](#LineSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="LineSetLoad+IndividualMassComponents"></a>

### lineSetLoad.IndividualMassComponents(MX, MY, MZ)
Sets individual mass components (only for mass load)

**Kind**: instance method of [<code>LineSetLoad</code>](#LineSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| MX | <code>Number</code> | Mass in X coordination, can be undefined |
| MY | <code>Number</code> | Mass in Y coordination, can be undefined |
| MZ | <code>Number</code> | Mass in Z coordination, can be undefined |

<a name="MemberLoad"></a>

## MemberLoad
**Kind**: global class  

<a name="new_MemberLoad_new"></a>

### new MemberLoad(no, load_case, members, comment, params)
Creates member load

**Returns**: <code>Object</code> - Created member load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+Force"></a>

### memberLoad.Force(no, load_case, members, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member force load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+Moment"></a>

### memberLoad.Moment(no, load_case, members, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member moment load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member moment load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+Mass"></a>

### memberLoad.Mass(no, load_case, members, load_value, comment, params) ⇒ <code>Object</code>
Creates member mass load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member mass load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+Temperature"></a>

### memberLoad.Temperature(no, load_case, members, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member temperature load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member temperature load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+TemperatureChange"></a>

### memberLoad.TemperatureChange(no, load_case, members, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member temperature change load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member temperature change load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+AxialStrain"></a>

### memberLoad.AxialStrain(no, load_case, members, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates member axial strain load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member axial strain load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+AxialDisplacement"></a>

### memberLoad.AxialDisplacement(no, load_case, members, load_value, comment, params) ⇒ <code>Object</code>
Creates member axial displacement load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member axial displacement load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+Precamber"></a>

### memberLoad.Precamber(no, load_case, members, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member precamber load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member precamber load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+InitialPrestress"></a>

### memberLoad.InitialPrestress(no, load_case, members, load_value, comment, params) ⇒ <code>Object</code>
Creates member initial prestress load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member initial prestress load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+Displacement"></a>

### memberLoad.Displacement(no, load_case, members, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member displacement load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member displacement load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+Rotation"></a>

### memberLoad.Rotation(no, load_case, members, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member rotation load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member rotation load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+PipeContentFull"></a>

### memberLoad.PipeContentFull(no, load_case, members, load_value, load_direction, comment, params) ⇒ <code>Object</code>
Creates member content full load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member pipe content full load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+PipeContentPartial"></a>

### memberLoad.PipeContentPartial(no, load_case, members, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member pipe content partial load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member pipe content partial load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_values | <code>Array</code> | Load parameters for Uniform distribution |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+PipeInternalPressure"></a>

### memberLoad.PipeInternalPressure(no, load_case, members, load_value, comment, params) ⇒ <code>Object</code>
Creates member pipe internal pressure load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member pipe internal pressure load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+RotaryMotion"></a>

### memberLoad.RotaryMotion(no, load_case, members, load_values, comment, params) ⇒ <code>Object</code>
Creates member rotary motion load

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  
**Returns**: <code>Object</code> - Created member rotary motion load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load, can be undefined |
| load_case | <code>Object</code> | Load case |
| members | <code>Array</code> | List of member indexes |
| load_values | <code>Number</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberLoad+ReferenceToListOfMembers"></a>

### memberLoad.ReferenceToListOfMembers(value)
Sets option for reference to list of members

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="MemberLoad+ReferDistanceMemberEnd"></a>

### memberLoad.ReferDistanceMemberEnd(value)
Sets option for refer distance to the member end

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="MemberLoad+LoadOverMember"></a>

### memberLoad.LoadOverMember(value)
Sets option for load over total length of member (only for trapezoidal load distribution)

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="MemberLoad+Eccentricity"></a>

### memberLoad.Eccentricity(reference_to, offset_member_start_ey, offset_member_start_ez, offset_member_end_ey, offset_member_end_ez)
Sets eccentricity (only force load)

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  

| Param | Type | Description |
| --- | --- | --- |
| reference_to | <code>String</code> | Eccentricity is refereed to what ("LEFT_TOP", "CENTER_TOP", "RIGHT_TOP", "LEFT_CENTER", "CENTER_CENTER", "RIGHT_CENTER", "LEFT_BOTTOM", "CENTER_BOTTOM", "RIGHT_BOTTOM", "CENTER_OF_GRAVITY", "SHEAR_CENTER") |
| offset_member_start_ey | <code>Number</code> | Offset at member start, can be undefined |
| offset_member_start_ez | <code>Number</code> | Offset at member start, can be undefined |
| offset_member_end_ey | <code>Number</code> | Offset at member end, can be undefined |
| offset_member_end_ez | <code>Number</code> | Offset at member end, can be undefined |

<a name="MemberLoad+IndividualMassComponents"></a>

### memberLoad.IndividualMassComponents(MX, MY, MZ)
Sets individual mass components (only for mass load)

**Kind**: instance method of [<code>MemberLoad</code>](#MemberLoad)  

| Param | Type | Description |
| --- | --- | --- |
| MX | <code>Number</code> | Mass in X coordination, can be undefined |
| MY | <code>Number</code> | Mass in Y coordination, can be undefined |
| MZ | <code>Number</code> | Mass in Z coordination, can be undefined |

<a name="MemberSetLoad"></a>

## MemberSetLoad
**Kind**: global class  

<a name="new_MemberSetLoad_new"></a>

### new MemberSetLoad(no, load_case, member_sets, comment, params)
Creates member set load

**Returns**: <code>Object</code> - Created member set load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member sets indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+Force"></a>

### memberSetLoad.Force(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set force load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member sets indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+Moment"></a>

### memberSetLoad.Moment(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set moment load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set moment load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member sets indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+Mass"></a>

### memberSetLoad.Mass(no, load_case, member_sets, load_value, comment, params) ⇒ <code>Object</code>
Creates member set mass load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set mass load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member sets indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+Temperature"></a>

### memberSetLoad.Temperature(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set temperature load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set temperature load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+TemperatureChange"></a>

### memberSetLoad.TemperatureChange(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set temperature change load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set temperature change load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+AxialStrain"></a>

### memberSetLoad.AxialStrain(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set axial strain load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set axial strain load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+AxialDisplacement"></a>

### memberSetLoad.AxialDisplacement(no, load_case, member_sets, load_value, comment, params) ⇒ <code>Object</code>
Creates member set axial displacement load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set axial displacement load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member sets indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+Precamber"></a>

### memberSetLoad.Precamber(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set precamber load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set precamber load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member sets indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+InitialPrestress"></a>

### memberSetLoad.InitialPrestress(no, load_case, member_sets, load_value, comment, params) ⇒ <code>Object</code>
Creates member set initial prestress load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set initial prestress load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+Displacement"></a>

### memberSetLoad.Displacement(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set displacement load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set displacement load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+Rotation"></a>

### memberSetLoad.Rotation(no, load_case, member_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set rotation load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set rotation load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+PipeContentFull"></a>

### memberSetLoad.PipeContentFull(no, load_case, member_sets, load_value, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set content full load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set pipe content full load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member sets indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+PipeContentPartial"></a>

### memberSetLoad.PipeContentPartial(no, load_case, member_sets, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates member set pipe content partial load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set pipe content partial load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_values | <code>Array</code> | Load parameters for Uniform distribution |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+PipeInternalPressure"></a>

### memberSetLoad.PipeInternalPressure(no, load_case, member_sets, load_value, comment, params) ⇒ <code>Object</code>
Creates member set pipe internal pressure load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set pipe internal pressure load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_value | <code>Number</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+RotaryMotion"></a>

### memberSetLoad.RotaryMotion(no, load_case, member_sets, load_values, comment, params) ⇒ <code>Object</code>
Creates member set rotary motion load

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  
**Returns**: <code>Object</code> - Created member set rotary motion load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| member_sets | <code>Array</code> | List of member set indexes |
| load_values | <code>Number</code> | Load parameters depend on load distribution (for more information look at setMemberLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="MemberSetLoad+ReferDistanceMemberSetEnd"></a>

### memberSetLoad.ReferDistanceMemberSetEnd(value)
Sets option for refer distance to the member set end

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="MemberSetLoad+LoadOverMember"></a>

### memberSetLoad.LoadOverMember(value)
Sets option for load over total length of member set (only for trapezoidal load distribution)

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Boolean</code> | When undefined, true as default |

<a name="MemberSetLoad+Eccentricity"></a>

### memberSetLoad.Eccentricity(reference_to, offset_member_start_ey, offset_member_start_ez, offset_member_end_ey, offset_member_end_ez)
Sets eccentricity (only force load)

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| reference_to | <code>String</code> | Eccentricity is refereed to what ("left_top", "center_top", "right_top", "left_center", "center_center", "right_center", 												"left_bottom", "center_bottom", "right_bottom", "center_of_gravity", "shear_center") |
| offset_member_start_ey | <code>Number</code> | Offset at member start, can be undefined |
| offset_member_start_ez | <code>Number</code> | Offset at member start, can be undefined |
| offset_member_end_ey | <code>Number</code> | Offset at member end, can be undefined |
| offset_member_end_ez | <code>Number</code> | Offset at member end, can be undefined |

<a name="MemberSetLoad+IndividualMassComponents"></a>

### memberSetLoad.IndividualMassComponents(MX, MY, MZ)
Sets individual mass components (only for mass load)

**Kind**: instance method of [<code>MemberSetLoad</code>](#MemberSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| MX | <code>Number</code> | Mass in X coordination, can be undefined |
| MY | <code>Number</code> | Mass in Y coordination, can be undefined |
| MZ | <code>Number</code> | Mass in Z coordination, can be undefined |

<a name="NodalLoad"></a>

## NodalLoad
**Kind**: global class  

<a name="new_NodalLoad_new"></a>

### new NodalLoad(no, load_case, nodes, comment, params)
Creates nodal load

**Returns**: <code>Object</code> - Created nodal load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of nodal load, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of node indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="NodalLoad+Force"></a>

### nodalLoad.Force(no, load_case, nodes, force, load_direction, comment, params) ⇒ <code>Object</code>
Creates nodal force load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  
**Returns**: <code>Object</code> - Created nodal force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of nodal load, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of node indexes |
| force | <code>Number</code> | Load force value |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="NodalLoad+Moment"></a>

### nodalLoad.Moment(no, load_case, nodes, moment, load_direction, comment, params) ⇒ <code>Object</code>
Creates nodal moment load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  
**Returns**: <code>Object</code> - Created nodal moment load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of nodal load, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of node indexes |
| moment | <code>Number</code> | Load moment value |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="NodalLoad+Components"></a>

### nodalLoad.Components(no, load_case, nodes, forces, moments, comment, params) ⇒ <code>Object</code>
Creates nodal moment load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  
**Returns**: <code>Object</code> - Create nodal components load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of nodal load, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of node indexes |
| forces | <code>Array</code> | List of forces [FX, FX, FY] |
| moments | <code>Array</code> | List of moments [MX, MY, MZ] |
| comment | <code>String</code> | Comment, van be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="NodalLoad+Mass"></a>

### nodalLoad.Mass(no, load_case, nodes, mass, comment, params) ⇒ <code>Object</code>
Creates nodal moment load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  
**Returns**: <code>Object</code> - Create nodal mass load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of nodal load, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of node indexes |
| mass | <code>Number</code> | Load mass value |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="NodalLoad+SpecificDirection"></a>

### nodalLoad.SpecificDirection(type, values)
Adds specific direction to load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>Number</code> | Specific direction type, can be one of: 								- 1 (Rotated view 3 angles) 								- 2 (Directed to node) 								- 3 (Parallel to two nodes) 								- 4 (Parallel to CS of line) 								- 4 (Parallel to CS of line) 								- 5 (Parallel to CS of member) |
| values | <code>Array</code> | List of values for specified direction: 								- [αX',αY',αZ',sequence] (for 1), example: [0.1,0.2,0.1,"X'Y'Z'"], sequence can be empty by default 								- [node_index] (for 2) 								- [node1_index, node2_index] (for 3) 								- [line_no] (for 4) 								- [member_no] (for 5) |

<a name="NodalLoad+ForceEccentricity"></a>

### nodalLoad.ForceEccentricity(eccentricity_x, eccentricity_y, eccentricity_z)
Adds eccentricity to load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  

| Param | Type | Description |
| --- | --- | --- |
| eccentricity_x | <code>Number</code> | Eccentricity eX |
| eccentricity_y | <code>Number</code> | Eccentricity eY |
| eccentricity_z | <code>Number</code> | Eccentricity eZ |

<a name="NodalLoad+ShiftedDisplay"></a>

### nodalLoad.ShiftedDisplay(offset, distance)
Adds shifted display to load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>Array</code> | Offset [ΔX,ΔY,ΔZ], example [0.1,0.2,0] |
| distance | <code>Number</code> | Distance Δ |

<a name="NodalLoad+IndividualMassComponents"></a>

### nodalLoad.IndividualMassComponents(mass, distance)
Adds individual mass components to load

**Kind**: instance method of [<code>NodalLoad</code>](#NodalLoad)  

| Param | Type | Description |
| --- | --- | --- |
| mass | <code>Array</code> | mass [MX,MY,MZ], example [0.1,0.2,0] |
| distance | <code>Number</code> | mass_moment_of_inertia [IX,IY,IZ], example [0.1,0.2,0]			- |

<a name="OpeningLoad"></a>

## OpeningLoad
**Kind**: global class  

<a name="new_OpeningLoad_new"></a>

### new OpeningLoad(no, load_case, openings, comment, params)
Creates solid load

**Returns**: <code>Object</code> - Created opening load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of opening load, can be undefined |
| load_case | <code>Object</code> | Load case |
| openings | <code>Array</code> | List of opening indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="OpeningLoad+Force"></a>

### openingLoad.Force(no, load_case, openings, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates opening force load

**Kind**: instance method of [<code>OpeningLoad</code>](#OpeningLoad)  
**Returns**: <code>Object</code> - Created opening force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of opening load, can be undefined |
| load_case | <code>Object</code> | Load case |
| openings | <code>Array</code> | List of openings indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="OpeningLoad+SmoothConcentratedLoad"></a>

### openingLoad.SmoothConcentratedLoad(value,)
Set smooth concentrated load

**Kind**: instance method of [<code>OpeningLoad</code>](#OpeningLoad)  

| Param | Type | Description |
| --- | --- | --- |
| value, | <code>Boolean</code> | can be undefined (false) |

<a name="SolidLoad"></a>

## SolidLoad
**Kind**: global class  

<a name="new_SolidLoad_new"></a>

### new SolidLoad(no, load_case, solids, comment, params)
Creates solid load

**Returns**: <code>Object</code> - Created solid load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solids | <code>Array</code> | List of solid indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidLoad+Force"></a>

### solidLoad.Force(no, load_case, solids, load_value, load_direction, comment, params) ⇒ <code>Object</code>
Creates solid force load

**Kind**: instance method of [<code>SolidLoad</code>](#SolidLoad)  
**Returns**: <code>Object</code> - Created solid force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solids | <code>Array</code> | List of solid indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidLoad+Temperature"></a>

### solidLoad.Temperature(no, load_case, solids, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates solid temperature load

**Kind**: instance method of [<code>SolidLoad</code>](#SolidLoad)  
**Returns**: <code>Object</code> - Created solid temperature load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solids | <code>Array</code> | List of solid indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSolidLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidLoad+Strain"></a>

### solidLoad.Strain(no, load_case, solids, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates solid strain load

**Kind**: instance method of [<code>SolidLoad</code>](#SolidLoad)  
**Returns**: <code>Object</code> - Created solid strain load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solids | <code>Array</code> | List of solid indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSolidLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidLoad+Buoyancy"></a>

### solidLoad.Buoyancy(no, load_case, solids, load_value, load_direction, comment, params) ⇒ <code>Object</code>
Creates solid buoyancy load

**Kind**: instance method of [<code>SolidLoad</code>](#SolidLoad)  
**Returns**: <code>Object</code> - Created solid buoyancy load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solids | <code>Array</code> | List of solid indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidLoad+RotaryMotion"></a>

### solidLoad.RotaryMotion(no, load_case, solids, load_values, comment, params) ⇒ <code>Object</code>
Creates solid rotary motion load

**Kind**: instance method of [<code>SolidLoad</code>](#SolidLoad)  
**Returns**: <code>Object</code> - Created solid rotary motion load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solids | <code>Array</code> | List of solid indexes |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSolidLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidLoad+AirDensity"></a>

### solidLoad.AirDensity(altitude)
Determine air density at specified altitude

**Kind**: instance method of [<code>SolidLoad</code>](#SolidLoad)  

| Param | Type | Description |
| --- | --- | --- |
| altitude | <code>Number</code> | Altitude value, if undefined, determine air density at specified altitude will be set false |

<a name="SolidSetLoad"></a>

## SolidSetLoad
**Kind**: global class  

<a name="new_SolidSetLoad_new"></a>

### new SolidSetLoad(no, load_case, solid_sets, comment, params)
Creates solid set load

**Returns**: <code>Object</code> - Created solid set load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solid_sets | <code>Array</code> | List of solid set indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidSetLoad+Force"></a>

### solidSetLoad.Force(no, load_case, solid_sets, load_value, load_direction, comment, params) ⇒ <code>Object</code>
Creates solid set force load

**Kind**: instance method of [<code>SolidSetLoad</code>](#SolidSetLoad)  
**Returns**: <code>Object</code> - Created solid set force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solid_sets | <code>Array</code> | List of solid set indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidSetLoad+Temperature"></a>

### solidSetLoad.Temperature(no, load_case, solid_sets, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates solid set temperature load

**Kind**: instance method of [<code>SolidSetLoad</code>](#SolidSetLoad)  
**Returns**: <code>Object</code> - Created solid set temperature load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solid_sets | <code>Array</code> | List of solid set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSolidLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidSetLoad+Strain"></a>

### solidSetLoad.Strain(no, load_case, solid_sets, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates solid set strain load

**Kind**: instance method of [<code>SolidSetLoad</code>](#SolidSetLoad)  
**Returns**: <code>Object</code> - Created solid set strain load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solid_sets | <code>Array</code> | List of solid set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSolidLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidSetLoad+Buoyancy"></a>

### solidSetLoad.Buoyancy(no, load_case, solid_sets, load_value, load_direction, comment, params) ⇒ <code>Object</code>
Creates solid set buoyancy load

**Kind**: instance method of [<code>SolidSetLoad</code>](#SolidSetLoad)  
**Returns**: <code>Object</code> - Created solid set buoyancy load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solid_sets | <code>Array</code> | List of solid set indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidSetLoad+RotaryMotion"></a>

### solidSetLoad.RotaryMotion(no, load_case, solid_sets, load_values, comment, params) ⇒ <code>Object</code>
Creates solid set rotary motion load

**Kind**: instance method of [<code>SolidSetLoad</code>](#SolidSetLoad)  
**Returns**: <code>Object</code> - Created solid set rotary motion load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of solid set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| solid_sets | <code>Array</code> | List of solid set indexes |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSolidLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SolidSetLoad+AirDensity"></a>

### solidSetLoad.AirDensity(altitude)
Determine air density at specified altitude

**Kind**: instance method of [<code>SolidSetLoad</code>](#SolidSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| altitude | <code>Number</code> | Altitude value, if undefined, determine air density at specified altitude will be set false |

<a name="SurfaceLoad"></a>

## SurfaceLoad
**Kind**: global class  

<a name="new_SurfaceLoad_new"></a>

### new SurfaceLoad(no, load_case, surfaces, comment, params)
Creates surface load

**Returns**: <code>Object</code> - Created surface load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceLoad+Force"></a>

### surfaceLoad.Force(no, load_case, surfaces, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates surface force load

**Kind**: instance method of [<code>SurfaceLoad</code>](#SurfaceLoad)  
**Returns**: <code>Object</code> - Created surface force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceLoad+Temperature"></a>

### surfaceLoad.Temperature(no, load_case, surfaces, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates surface temperature load

**Kind**: instance method of [<code>SurfaceLoad</code>](#SurfaceLoad)  
**Returns**: <code>Object</code> - Created surface temperature load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceLoad+AxialStrain"></a>

### surfaceLoad.AxialStrain(no, load_case, surfaces, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates surface axial strain load

**Kind**: instance method of [<code>SurfaceLoad</code>](#SurfaceLoad)  
**Returns**: <code>Object</code> - Created surface axial strain load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceLoad+Precamber"></a>

### surfaceLoad.Precamber(no, load_case, surfaces, load_value, comment, params) ⇒ <code>Object</code>
Creates surface precamber load

**Kind**: instance method of [<code>SurfaceLoad</code>](#SurfaceLoad)  
**Returns**: <code>Object</code> - Created surface precamber load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceLoad+RotaryMotion"></a>

### surfaceLoad.RotaryMotion(no, load_case, surfaces, load_values, comment, params) ⇒ <code>Object</code>
Creates surface rotary motion load

**Kind**: instance method of [<code>SurfaceLoad</code>](#SurfaceLoad)  
**Returns**: <code>Object</code> - Created surface rotary motion load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceLoad+Mass"></a>

### surfaceLoad.Mass(no, load_case, surfaces, load_value, comment, params) ⇒ <code>Object</code>
Creates surface mass load

**Kind**: instance method of [<code>SurfaceLoad</code>](#SurfaceLoad)  
**Returns**: <code>Object</code> - Created surface mass load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surfaces | <code>Array</code> | List of surface indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceLoad+IndividualMassComponents"></a>

### surfaceLoad.IndividualMassComponents(MX, MY, MZ)
Sets individual mass components (only for mass load)

**Kind**: instance method of [<code>SurfaceLoad</code>](#SurfaceLoad)  

| Param | Type | Description |
| --- | --- | --- |
| MX | <code>Number</code> | Mass in X coordination, can be undefined |
| MY | <code>Number</code> | Mass in Y coordination, can be undefined |
| MZ | <code>Number</code> | Mass in Z coordination, can be undefined |

<a name="SurfaceSetLoad"></a>

## SurfaceSetLoad
**Kind**: global class  

<a name="new_SurfaceSetLoad_new"></a>

### new SurfaceSetLoad(no, load_case, line_sets, comment, params)
Creates line set load

**Returns**: <code>Object</code> - Created line set load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| line_sets | <code>Array</code> | List of line set indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceSetLoad+Force"></a>

### surfaceSetLoad.Force(no, load_case, surface_sets, load_distribution, load_values, load_direction, comment, params) ⇒ <code>Object</code>
Creates surface set force load

**Kind**: instance method of [<code>SurfaceSetLoad</code>](#SurfaceSetLoad)  
**Returns**: <code>Object</code> - Created surface set force load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surface_sets | <code>Array</code> | List of surface set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceSetLoad+Temperature"></a>

### surfaceSetLoad.Temperature(no, load_case, surface_sets, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates surface set temperature load

**Kind**: instance method of [<code>SurfaceSetLoad</code>](#SurfaceSetLoad)  
**Returns**: <code>Object</code> - Created surface set temperature load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surface_sets | <code>Array</code> | List of surface set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceSetLoad+AxialStrain"></a>

### surfaceSetLoad.AxialStrain(no, load_case, surface_sets, load_distribution, load_values, comment, params) ⇒ <code>Object</code>
Creates surface set axial strain load

**Kind**: instance method of [<code>SurfaceSetLoad</code>](#SurfaceSetLoad)  
**Returns**: <code>Object</code> - Created surface set axial strain load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surface_sets | <code>Array</code> | List of surface set indexes |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceSetLoad+Precamber"></a>

### surfaceSetLoad.Precamber(no, load_case, surface_sets, load_value, comment, params) ⇒ <code>Object</code>
Creates surface set precamber load

**Kind**: instance method of [<code>SurfaceSetLoad</code>](#SurfaceSetLoad)  
**Returns**: <code>Object</code> - Created surface set precamber load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surface_sets | <code>Array</code> | List of surface set indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceSetLoad+RotaryMotion"></a>

### surfaceSetLoad.RotaryMotion(no, load_case, surface_sets, load_values, comment, params) ⇒ <code>Object</code>
Creates surface set rotary motion load

**Kind**: instance method of [<code>SurfaceSetLoad</code>](#SurfaceSetLoad)  
**Returns**: <code>Object</code> - Created surface set rotary motion load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surface_sets | <code>Array</code> | List of surface set indexes |
| load_values | <code>Array</code> | Load parameters depend on load distribution (for more information look at setSurfaceLoadDistribution function) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceSetLoad+Mass"></a>

### surfaceSetLoad.Mass(no, load_case, surface_sets, load_value, comment, params) ⇒ <code>Object</code>
Creates surface set mass load

**Kind**: instance method of [<code>SurfaceSetLoad</code>](#SurfaceSetLoad)  
**Returns**: <code>Object</code> - Created surface set mass load  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface set load, can be undefined |
| load_case | <code>Object</code> | Load case |
| surface_sets | <code>Array</code> | List of surface set indexes |
| load_value | <code>Array</code> | Uniform load parameter |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="SurfaceSetLoad+IndividualMassComponents"></a>

### surfaceSetLoad.IndividualMassComponents(MX, MY, MZ)
Sets individual mass components (only for mass load)

**Kind**: instance method of [<code>SurfaceSetLoad</code>](#SurfaceSetLoad)  

| Param | Type | Description |
| --- | --- | --- |
| MX | <code>Number</code> | Mass in X coordination, can be undefined |
| MY | <code>Number</code> | Mass in Y coordination, can be undefined |
| MZ | <code>Number</code> | Mass in Z coordination, can be undefined |

<a name="createBaseLoad"></a>

## createBaseLoad(load_type, no, load_case, index_list, comment, params) ⇒ <code>Object</code>
Creates load based on its type

**Kind**: global function  
**Returns**: <code>Object</code> - Created load  

| Param | Type | Description |
| --- | --- | --- |
| load_type | <code>Number</code> | Load type |
| no | <code>Number</code> | Index of load, can be undefined |
| load_case | <code>Object</code> | Load case |
| index_list | <code>Array</code> | List of assigned objects (indexes), can be empty |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="createSimplyValueLoad"></a>

## createSimplyValueLoad(load_type, no, load_case, nodes, force, moment, mass, load_direction, comment, params) ⇒ <code>Object</code>
Creates load with one only value (force, mass and so on)

**Kind**: global function  
**Returns**: <code>Object</code> - Created load  

| Param | Type | Description |
| --- | --- | --- |
| load_type | <code>Number</code> | Load type |
| no | <code>Number</code> | Index of nodal load, can be undefined |
| load_case | <code>Object</code> | Load case |
| nodes | <code>Array</code> | List of node indexes, can be undefined |
| force | <code>Number</code> | Load force value, can be undefined |
| moment | <code>Number</code> | Load moment value, can be undefined |
| mass | <code>Number</code> | Load mass value, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Load parameters, can be undefined |

<a name="showLoadAssert"></a>

## showLoadAssert(load_type, load_distribution)
Shows assert (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| load_type | <code>String</code> | Load type |
| load_distribution | <code>String</code> | Load distribution, can be undefined |

<a name="setLoadValues"></a>

## setLoadValues(arguments)
Set load parameters

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arguments | <code>Array</code> | Arguments: arg[0] - load, arg[1] - load parameters, arg[2] - load parameters to be set |

<a name="setAxis"></a>

## setAxis(load, value) ⇒ <code>Boolean</code>
Sets axis for rotary motion load type

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if axis and orientation was successfully set  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| value | <code>String</code> | Parallel axis (X, Y, Z) |

<a name="setAxisAndOrientation"></a>

## setAxisAndOrientation(load, value) ⇒ <code>Boolean</code>
Sets axis and orientation for rotary motion load type

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if axis and orientation was successfully set  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| value | <code>String</code> | Parallel axis (+X, -X, ...) |

<a name="setLineLoadDistribution"></a>

## setLineLoadDistribution(load, load_type, load_distribution, load_values) ⇒ <code>Object</code>
Function assigns parameters to line / line set load depend of load type and load distribution (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_type | <code>String</code> | Load type |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend on load type and load distribution 										- (load type / load distribution: [valid values]) 										- "Force" / "Uniform": [p] 										- "Force" / "Uniform - Total": [P] 										- "Force" / "Concentrated - 1": [P, A, is_a_relative] 										- "Force" / "Concentrated - n x": [P, n, A, B, is_a_relative, is_b_relative] 										- "Force" / "Concentrated - 2 x 2": [P, A, B, C, is_a_relative, is_b_relative, is_c_relative] 										- "Force" / "Concentrated - 2 x": [P1, A, P2, B, is_a_relative, is_b_relative] 										- "Force" / "Concentrated - Varying": [P1, x1, P2, x2 ... Pn, xn] 										- "Force" / "Trapezoidal": [p1, B, p2, A, is_b_relative, is_a_relative] 										- "Force" / "Tapered": [p1, p2, A, B, is_a_relative, is_b_relative] 										- "Force" / "Parabolic": [p1, p2, p3] 										- "Force" / "Varying": [p1, x1, p2, x2 ... pn, xn] 										- "Force" / "Varying in Z": [p1, z1, p2, z2 ... pn, zn] 										- "Moment" / "Uniform" (load type / load distribution): [m] 										- "Moment" / "Concentrated - 1": [M, A, is_a_relative] 										- "Moment" / "Concentrated - n x": [M, n, A, B, is_a_relative, is_b_relative] 										- "Moment" / "Concentrated - 2 x 2": [M, A, B, C, is_a_relative, is_b_relative, is_c_relative] 										- "Moment" / "Concentrated - 2 x": [M1, A, M2, B, is_a_relative, is_b_relative] 										- "Moment" / "Concentrated - Varying": [M1, x1, M2, x2 ... Mn, xn] 										- "Moment" / "Trapezoidal": [m1, B, m2, A, is_b_relative, is_a_relative] 										- "Moment" / "Tapered": [m1, m2, A, B, is_a_relative, is_b_relative] 										- "Moment" / "Parabolic": [m1, m2, m3] 										- "Moment" / "Varying": [m1, x1, m2, x2 ... mn, xn] 										- "Mass" / "Uniform": M |

<a name="setMemberLoadDistribution"></a>

## setMemberLoadDistribution(load, load_type, load_distribution, load_values) ⇒ <code>Object</code>
Function assigns parameters to member / member set load depend of load type and load distribution (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_type | <code>String</code> | Load type |
| load_distribution | <code>String</code> | Load distribution, can be undefined |
| load_values | <code>Array</code> | Load parameters depend on load type and load distribution 										- (load type / load distribution: [valid values]) 										- "Force" / "Uniform": [p] 										- "Force" / "Uniform - Total": [P] 										- "Force" / "Concentrated - 1": [P, A, is_a_relative] 										- "Force" / "Concentrated - n x": [P, n, A, B, is_a_relative, is_b_relative] 										- "Force" / "Concentrated - 2 x 2": [P, A, B, C, is_a_relative, is_b_relative, is_c_relative] 										- "Force" / "Concentrated - 2 x": [P1, A, P2, B, is_a_relative, is_b_relative] 										- "Force" / "Concentrated - Varying": [P1, x1, P2, x2 ... Pn, xn] 										- "Force" / "Trapezoidal": [p1, B, p2, A, is_b_relative, is_a_relative] 										- "Force" / "Tapered": [p1, p2, A, B, is_a_relative, is_b_relative] 										- "Force" / "Parabolic": [p1, p2, p3] 										- "Force" / "Varying": [p1, x1, p2, x2, ... pn, xn] 										- "Force" / "Varying in Z": [p1, z1, p2, z2 ... pn, zn] 										- "Moment" / "Uniform" (load type / load distribution): [m] 										- "Moment" / "Concentrated - 1": [M, A, is_a_relative] 										- "Moment" / "Concentrated - n x": [M, n, A, B, is_a_relative, is_b_relative] 										- "Moment" / "Concentrated - 2 x 2": [M, A, B, C, is_a_relative, is_b_relative, is_c_relative] 										- "Moment" / "Concentrated - 2 x": [M1, A, M2, B, is_a_relative, is_b_relative] 										- "Moment" / "Concentrated - Varying": [M1, x1, M2, x2 ... Mn, xn] 										- "Moment" / "Trapezoidal": [m1, B, m2, A, is_b_relative, is_a_relative] 										- "Moment" / "Tapered": [m1, m2, A, B, is_a_relative, is_b_relative] 										- "Moment" / "Parabolic": [m1, m2, m3] 										- "Moment" / "Varying": [m1, x1, m2, x2, ... mn, xn] 										- "Mass" / "Uniform": M 										- "Temperature" / "Uniform": [Tt, Tb] 										- "Temperature" / "Trapezoidal": [Tt1, B, Tb1, Tt2, Tb2, A, is_b_relative, is_a_relative] 										- "Temperature" / "Tapered": [Tt1, Tb1, Tt2, Tb2, A, B, is_a_relative, is_b_relative] 										- "Temperature" / "Parabolic": [Tt1, Tb1, Tt2, Tb2, Tt3, Tb3] 										- "Temperature" / "Varying": [Tt1, Tb1, x1, Tt2, Tb2, x2 ... Ttn, Tbn, xn] 										- "Temperature Change" / "Uniform": [Tc, ΔT] 										- "Temperature Change" / "Trapezoidal": [Tc1, B, ΔT1, Tc2, ΔT2, A, is_b_relative, is_a_relative] 										- "Temperature Change" / "Tapered": [Tc1, ΔT1, ΔT2, ΔT2, A, B, is_a_relative, is_b_relative] 										- "Temperature Change" / "Parabolic": [Tt1, ΔT1, Tt2, ΔT2, Tt3, ΔT3] 										- "Temperature Change" / "Varying": [Tc1, ΔT1, x1, Tc2, ΔT2, x2 ... Tcn, ΔTn, xn] 										- "Axial Strain" / "Uniform": [ε] 										- "Axial Strain" / "Trapezoidal": [ε1, B, ε2, A, is_b_relative, is_a_relative] 										- "Axial Strain" / "Tapered": [ε1, ε2, A, B, is_a_relative, is_b_relative] 										- "Axial Strain" / "Parabolic": [ε1, ε2, ε3] 										- "Axial Strain" / Varying": [ε1, x1, ε2, x2, ... εn, xn] 										- "Axial Displacement" / "Uniform": Δl 										- "Precamber" / "Uniform": [κ] 										- "Precamber" / "Trapezoidal": [κ1, B, κ2, A, is_b_relative, is_a_relative] 										- "Precamber" / "Tapered": [κ1, A, κ2, B, is_a_relative, is_a_relative] 										- "Precamber" / "Parabolic": [κ1, κ2, κ3] 										- "Precamber" / "Varying": [κ1, x1, κ2, x2, ... κn, xn] 										- "Initial Prestress" / "Uniform": V 										- "Displacement" / "Uniform": [δ] 										- "Displacement" / "Concentrated - 1": [Δ, A, is_a_relative] 										- "Displacement" / "Concentrated - n x": [Δ, n, A, B, is_a_relative, is_b_relative] 										- "Displacement" / "Concentrated - 2 x 2": [Δ, A, B, C, is_a_relative, is_b_relative, is_c_relative] 										- "Displacement" / "Concentrated - 2 x": [Δ1, Δ2, A, B, is_a_relative, is_b_relative] 										- "Displacement" / "Concentrated - Varying": [Δ1, x1, Δ2, x2 ... Δn, xn] 										- "Displacement" / "Trapezoidal": [δ1, B, δ2, A, is_b_relative, is_a_relative] 										- "Displacement" / "Tapered": [δ1, δ2, A, B, is_a_relative, is_b_relative] 										- "Displacement" / "Parabolic": [δ1, δ2, δ3] 										- "Displacement" / "Varying": [δ1, x1, δ2, x2, ... δn, xn] 										- "Rotation" / "Uniform": [φ] 										- "Rotation" / "Concentrated - 1": [φ, A, is_a_relative] 										- "Rotation" / "Concentrated - n x": [φ, n, A, B, is_a_relative, is_b_relative] 										- "Rotation" / "Concentrated - 2 x 2": [φ, A, B, C, is_a_relative, is_b_relative, is_c_relative] 										- "Rotation" / "Concentrated - 2 x": [φ1, A, φ2, B, is_a_relative, is_b_relative] 										- "Rotation" / "Concentrated - Varying": [φ1, x1, φ2, x2 ... φn, xn] 										- "Rotation" / "Trapezoidal": [φ1, B, φ2, A, is_b_relative, is_a_relative] 										- "Rotation" / "Tapered": [φ1, φ2, A, B, is_a_relative, is_b_relative] 										- "Rotation" / "Parabolic": [φ1, φ2, φ3] 										- "Rotation" / "Varying": [φ1, x1, φ2, x2, ... φn, xn] 										- "Pipe Content - Full" / "Uniform": γ 										- "Pipe Content - Partial" / "Uniform": [γ, d] 										- "Pipe Internal Pressure" / "Uniform": p 										- "Rotary Motion": [axis_definition, ω, α, [Node1, Node2] or XA, YA, ZA, XB, YB, ZB] (axis definition 1 === "Two points") 														   [axis_definition, ω, α, ([Node1] or XA, YA, ZA), parallel_axis] (axis definition 2 === "Point and axis") |

<a name="setSurfaceLoadDistribution"></a>

## setSurfaceLoadDistribution(load, load_type, load_distribution, load_values) ⇒ <code>Object</code>
Function assigns parameters to surface / surface set load depend of load type and load distribution (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_type | <code>String</code> | Load type |
| load_distribution | <code>String</code> | Load distribution, can be undefined |
| load_values | <code>Array</code> | Load parameters depend on load type and load distribution 										- (load type / load distribution: [valid values]) 										- "Force" / "Uniform": [p] 										- "Force" / "Linear": [Node1, Node2, Node3, p1, p2, p3] 										- "Force: / "Linear in X": [Node1, Node2, p1, p2] 										- "Force" / "Linear in Y": [Node1, Node2, p1, p2] 										- "Force" / "Linear in Z": [Node1, Node2, p1, p2] 										- "Force" / "Radial":	[axis_definition, p1, p2, Node1, Node2, [Node1, Node2] or XA, YA, ZA, XB, YB, ZB] (axis definition 1 === "Two points") 																[axis_definition, p1, p2, Node1, Node2, ([Node1] or XA, YA, ZA), parallel_axis] (axis definition 2 === "Point and axis") 										- "Force" / "Varying in Z": [p1, z1, p2, z2, ... pn, zn] 										- "Temperature" / "Uniform": [Tc, ΔT] 										- "Temperature" / "Linear": [Node1, Node2, Node3, Tc1, Tc2, Tc3, ΔT1, ΔT2, ΔT3] 										- "Temperature" / "Linear in X": [Node1, Node2, Tc1, Tc2, ΔT1, ΔT2] 										- "Temperature" / "Linear in Y": [Node1, Node2, Tc1, Tc2, ΔT1, ΔT2] 										- "Temperature" / "Linear in Z": [Node1, Node2, Tc1, Tc2, ΔT1, ΔT2] 										- "Temperature" / "Radial":	[axis_definition, Tc1, Tc2, ΔT1, ΔT2, Node1, Node2, [Node1, Node2] or XA, YA, ZA, XB, YB, ZB] (axis definition 1 === "Two points") 																	[axis_definition, Tc1, Tc2, ΔT1, ΔT2, Node1, Node2, ([Node1] or XA, YA, ZA), parallel_axis] (axis definition 2 === "Point and axis") 										- "Axial Strain" / "Uniform": [εx, εy] 										- "Axial Strain" / "Linear": [Node1, Node2, Node3, ε1x, ε1y, ε2x, ε2y, ε3x, ε3y] 										- "Axial Strain" / "Linear in X": [Node1, Node2, ε1x, ε1y, ε2x, ε2y] 										- "Axial Strain" / "Linear in Y": [Node1, Node2, ε1x, ε1y, ε2x, ε2y] 										- "Axial Strain" / "Linear in Z": [Node1, Node2, ε1x, ε1y, ε2x, ε2y] 										- "Precamber" / "Uniform": [κ] 										- "Rotary Motion": [axis_definition, p1, p2, Node1, Node2, [Node1, Node2] or XA, YA, ZA, XB, YB, ZB] (axis definition 1 === "Two points") 														   [axis_definition, p1, p2, Node1, Node2, ([Node1] or XA, YA, ZA), parallel_axis] (axis definition 2 === "Point and axis") 										- "Mass" / "Uniform": [M] |

<a name="setSolidLoadDistribution"></a>

## setSolidLoadDistribution(load, load_type, load_distribution, load_values) ⇒ <code>Object</code>
Function assigns parameters to solid / solid set load depend of load type and load distribution (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_type | <code>String</code> | Load type |
| load_distribution | <code>String</code> | Load distribution, can be undefined |
| load_values | <code>Array</code> | Load parameters depend on load type and load distribution 										- (load type / load distribution: [valid values]) 										- "Force" / "Uniform": [p] 										- "Temperature" / "Uniform": [T] 										- "Temperature" / "Linear in X": [Node1, Node2, T1, T2] 										- "Temperature" / "Linear in Y": [Node1, Node2, T1, T2] 										- "Temperature" / "Linear in Z": [Node1, Node2, T1, T2] 										- "Strain" / "Uniform": [εx, εy, εz] 										- "Strain" / "Linear in X": [Node1, Node2, ε1x, ε1y, ε1z, ε2x, ε2y, ε2z] 										- "Strain" / "Linear in Y": [Node1, Node2, ε1x, ε1y, ε1z, ε2x, ε2y, ε2z] 										- "Strain" / "Linear in Z": [Node1, Node2, ε1x, ε1y, ε1z, ε2x, ε2y, ε2z] 										- "Buoyancy" / "Uniform": [p] 										- "Rotary Motion": [axis_definition, p1, p2, Node1, Node2, [Node1, Node2] or XA, YA, ZA, XB, YB, ZB] (axis definition 1 === "Two points") 														   [axis_definition, p1, p2, Node1, Node2, ([Node1] or XA, YA, ZA), parallel_axis] (axis definition 2 === "Point and axis") |

<a name="setCommonFreeLoadsValues"></a>

## setCommonFreeLoadsValues(load, load_projection, load_direction, load_acting_region_from, load_acting_region_to) ⇒ <code>Object</code>
Updates common parameters for free loads

**Kind**: global function  
**Returns**: <code>Object</code> - Updated free load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_projection | <code>String</code> | Load projection, can be undefined |
| load_direction | <code>String</code> | Load direction, can be undefined |
| load_acting_region_from | <code>Number</code> | Start of load acting region, can be undefined |
| load_acting_region_to | <code>Number</code> | End of load acting region, can be undefined |

<a name="setFreeCircularLoadParameters"></a>

## setFreeCircularLoadParameters(load, load_distribution, load_values) ⇒ <code>Object</code>
Set parameters to free circular load depend on load distribution

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend of load distribution 											- "Uniform": [p, R, CX, CY] 											- "Linear": [pC, R, pR, CX, CY] |

<a name="setFreeConcentratedLoadParameters"></a>

## setFreeConcentratedLoadParameters(load, load_type, load_values) ⇒ <code>Object</code>
Set parameters to free concentrated load depend on load type

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_type | <code>String</code> | Load type |
| load_values | <code>Array</code> | Load parameters depend of load type 											- "Force": [p, X, Y] 											- "Moment": [M, X, Y] |

<a name="setFreeLineLoadParameters"></a>

## setFreeLineLoadParameters(load, load_distribution, load_values) ⇒ <code>Object</code>
Set parameters to free line load depend on load distribution

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend of load distribution 												- "Force": [p, X1, Y1, X2, Y2] 												- "Linear": [p1, p2, X1, Y1, X2, Y2] |

<a name="setFreePolygonLoadParameters"></a>

## setFreePolygonLoadParameters(load, load_distribution, load_values) ⇒ <code>Object</code>
Set parameters to free polygon load depend on load distribution

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend of load distribution 												- "Uniform": [p, X1, Y1, X2, Y2, X3, Y3 ... Xn, Yn] 												- "Linear": [p1, node1, node2, node3, [X1, Y1, X2, Y2, X3, Y3 ... Xn, Yn], p2, p3] 												- "Linear in X": [p1, node1, node2, [X1, Y1, X2, Y2, X3, Y3 ... Xn, Yn], p2] 												- "Linear in Y": [p1, node1, node2, [X1, Y1, X2, Y2, X3, Y3 ... Xn, Yn], p2] |

<a name="setFreeRectangularLoadParameters"></a>

## setFreeRectangularLoadParameters(load, load_distribution, load_values) ⇒ <code>Object</code>
Set parameters to free rectangular load depend on load distribution

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load | <code>Object</code> | Load |
| load_distribution | <code>String</code> | Load distribution |
| load_values | <code>Array</code> | Load parameters depend of load distribution 												- "Uniform": [location, p, X1, Y1, X2, Y2, α] for location (1) "Corner points of rectangle" 												- 			 [location, p, Xc, Yc, a, b, α] for location (2) "Center and sides of rectangle" 												- "Linear in X": [location, p1, p2, X1, Y1, X2, Y2, α] for location (1) "Corner points of rectangle" 																 [location, p1, p2, Xc, Yc, a, b, α] for location (2) "Center and sides of rectangle" 												- "Linear in Y": [location, p1, p2, X1, Y1, X2, Y2, α] for location (1) "Corner points of rectangle" 																 [location, p1, p2, Xc, Yc, a, b, α] for location (2) "Center and sides of rectangle" 												- "Varying in Z": [location, p, X1, Y1, X2, Y2, [Z1, kz1, pz1, Z2, kz2, pz2, ... Zn, kzn, pzn]] for location (1) "Corner points of rectangle" 																  [location, p, Xc, Yc, a, b, [Z1, kz1, pz1, Z2, kz2, pz2, ... Zn, kzn, pzn]] for location (2) "Center and sides of rectangle" 												- "Varying along Perimeter": [location, p, X1, Y1, X2, Y2, [XA, YA, ZA, XB, YB, ZB, α0, (α1, kα1, pα1, α2, kα2, pα2 ... αn, kαn, pαn)]] for location (1) "Corner points of rectangle" 																  			[location, p, Xc, Yc, a, b, [XA, YA, ZA, XB, YB, ZB, α0, (α1, kα1, pα1, α2, kα2, pα2 ... αn, kαn, pαn)]] for location (2) "Center and sides of rectangle" 												- "Varying in Z and Perimeter": [location, p, X1, Y1, X2, Y2, [Z1, kz1, pz1, Z2, kz2, pz2, ... Zn, kzn, pzn], [XA, YA, ZA, XB, YB, ZB, α0, (α1, kα1, pα1, α2, kα2, pα2 ... αn, kαn, pαn)] for location (1) "Corner points of rectangle" 																  			   [location, p, Xc, Yc, a, b, [Z1, kz1, pz1, Z2, kz2, pz2, ... Zn, kzn, pzn], [XA, YA, ZA, XB, YB, ZB, α0, (α1, kα1, pα1, α2, kα2, pα2 ... αn, kαn, pαn)] for location (2) "Center and sides of rectangle" |

<a name="setLoadDistribution"></a>

## setLoadDistribution(load_type, load_distribution, load_values) ⇒ <code>Object</code>
Assignes values to load depend of load type and load distribution (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Returns modified load  

| Param | Type | Description |
| --- | --- | --- |
| load_type | <code>String</code> | Load type |
| load_distribution | <code>String</code> | Load distribution, can be undefined |
| load_values | <code>Array</code> | Load parameters depend on load type and load distribution 										- (load type / load distribution: [valid values]) 										- "Force" / "Uniform/Trapezoidal": [p] 										- "Force" / "Linear/Trapezoidal": [Node1, Node2, Node3, p1, p2, p3] |

