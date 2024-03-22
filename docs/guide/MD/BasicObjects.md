# BasicObjects

## Classes

<dl>
<dt><a href="#Bar">Bar</a></dt>
<dd></dd>
<dt><a href="#Line">Line</a></dt>
<dd></dd>
<dt><a href="#LineSet">LineSet</a></dt>
<dd></dd>
<dt><a href="#Material">Material</a></dt>
<dd></dd>
<dt><a href="#Member">Member</a></dt>
<dd></dd>
<dt><a href="#MemberSet">MemberSet</a></dt>
<dd></dd>
<dt><a href="#Node">Node</a></dt>
<dd></dd>
<dt><a href="#Opening">Opening</a></dt>
<dd></dd>
<dt><a href="#Dimension">Dimension</a></dt>
<dd></dd>
<dt><a href="#ControlPoint">ControlPoint</a></dt>
<dd></dd>
<dt><a href="#RSectionElement">RSectionElement</a></dt>
<dd></dd>
<dt><a href="#RSectionLine">RSectionLine</a></dt>
<dd></dd>
<dt><a href="#RSectionOpening">RSectionOpening</a></dt>
<dd></dd>
<dt><a href="#RSectionPart">RSectionPart</a></dt>
<dd></dd>
<dt><a href="#RSectionPoint">RSectionPoint</a></dt>
<dd></dd>
<dt><a href="#Stiffener">Stiffener</a></dt>
<dd></dd>
<dt><a href="#RSectionStressPoint">RSectionStressPoint</a></dt>
<dd></dd>
<dt><a href="#Subpanel">Subpanel</a></dt>
<dd></dd>
<dt><a href="#Section">Section</a></dt>
<dd></dd>
<dt><a href="#Solid">Solid</a></dt>
<dd></dd>
<dt><a href="#SolidSet">SolidSet</a></dt>
<dd></dd>
<dt><a href="#Stirrup">Stirrup</a></dt>
<dd></dd>
<dt><a href="#Surface">Surface</a></dt>
<dd></dd>
<dt><a href="#SurfaceSet">SurfaceSet</a></dt>
<dd></dd>
<dt><a href="#Thickness">Thickness</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#Layer">Layer(no, name, comment, params)</a></dt>
<dd><p>Creates Layer</p>
</dd>
<dt><a href="#getRotationPlane">getRotationPlane(rotation_plane)</a> ⇒</dt>
<dd><p>Returns rotation plane from string representation (private)</p>
</dd>
<dt><a href="#createBaseLine">createBaseLine(no, nodes, comment, params)</a> ⇒</dt>
<dd><p>Creates line (private)</p>
</dd>
<dt><a href="#setDistributionAtStart">setDistributionAtStart()</a></dt>
<dd><p>Support function for section distributions (private), more info can be find there</p>
</dd>
<dt><a href="#setDistributionAtEnd">setDistributionAtEnd()</a></dt>
<dd><p>Support function for section distributions (private), more info can be find there</p>
</dd>
<dt><a href="#setResultBeamObjects">setResultBeamObjects(member, param1_to_set, param2_to_set, value)</a> ⇒</dt>
<dd><p>Sets result beam objects</p>
</dd>
<dt><a href="#createBaseMember">createBaseMember(no, nodes_or_line, type, section_start, comment, params)</a> ⇒</dt>
<dd><p>Creates member (private)</p>
</dd>
<dt><a href="#createBaseRSectionElement">createBaseRSectionElement(no, type, comment, params)</a> ⇒</dt>
<dd><p>Create base RSection Element</p>
</dd>
<dt><a href="#createBaseRSectionLine">createBaseRSectionLine(no, type, comment, params)</a> ⇒</dt>
<dd><p>Creates RSection base Line</p>
</dd>
<dt><a href="#createBaseOpening">createBaseOpening(no, boundary_lines, comment, params)</a> ⇒</dt>
<dd></dd>
<dt><a href="#createBaseRSectionPart">createBaseRSectionPart(no, comment, params)</a> ⇒</dt>
<dd><p>Creates base RSection Part</p>
</dd>
<dt><a href="#createBasePoint">createBasePoint(no, coordinate_y, coordinate_z, comment, params)</a> ⇒</dt>
<dd><p>Creates base RSection Point (private)</p>
</dd>
<dt><a href="#createBaseStressPoint">createBaseStressPoint(no, comment, params)</a> ⇒</dt>
<dd><p>Create RSection Stress Points</p>
</dd>
<dt><a href="#createSurfaceWithType">createSurfaceWithType(no, boundary_lines, stiffness_type, thickness, comment, params)</a> ⇒</dt>
<dd><p>Creates surface (private)</p>
</dd>
</dl>

<a name="Bar"></a>

## Bar
**Kind**: global class  

* [Bar](#Bar)
    * [new Bar(no, material_no, layer_no, comment, params)](#new_Bar_new)
    * [.GetNo()](#Bar+GetNo) ⇒
    * [.GetBar()](#Bar+GetBar) ⇒
    * [.MultiUniform(no, material_no, layer_no, distance_between_i_and_j_type, diameter, offset, number_of_bars, comment, params)](#Bar+MultiUniform)
    * [.MultiVariable(no, material_no, layer_no, distance_between_i_and_j_type, diameter, offset, number_of_bars, axial_distance_si, axial_distance_sn, axial_distance_sj, comment, params)](#Bar+MultiVariable)
    * [.SingleBetweenTwoPoints(no, material_no, layer_no, distance_between_i_and_j_type, diameter, offset, distance_from_type, distance, relative, comment, params)](#Bar+SingleBetweenTwoPoints)
    * [.SinglePoint(no, material_no, layer_no, diameter, offset_y, offset_z, comment, params)](#Bar+SinglePoint)

<a name="new_Bar_new"></a>

### new Bar(no, material_no, layer_no, comment, params)
Creates RSECTION Bar


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Bar, can be undefined |
| material_no | <code>Number</code> | Material number |
| layer_no | <code>Number</code> | Layer number |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Bar+GetNo"></a>

### bar.GetNo() ⇒
**Kind**: instance method of [<code>Bar</code>](#Bar)  
**Returns**: Bar's number  
<a name="Bar+GetBar"></a>

### bar.GetBar() ⇒
**Kind**: instance method of [<code>Bar</code>](#Bar)  
**Returns**: Bar object  
<a name="Bar+MultiUniform"></a>

### bar.MultiUniform(no, material_no, layer_no, distance_between_i_and_j_type, diameter, offset, number_of_bars, comment, params)
Creates Multi uniform Bar

**Kind**: instance method of [<code>Bar</code>](#Bar)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Bar, can be undefined |
| material_no | <code>Number</code> | Material's number |
| layer_no | <code>Number</code> | Number of layer |
| distance_between_i_and_j_type | <code>String</code> | Distance between i and j reference type, can be undefined ("REFERENCE_TYPE_L" as default) |
| diameter | <code>Number</code> | Bar diameter, can be undefined (12 mm as default) |
| offset | <code>Number</code> | Offset, can be undefined (0 by default) |
| number_of_bars | <code>Number</code> | Number of Bars, can be undefined (2 as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Bar+MultiVariable"></a>

### bar.MultiVariable(no, material_no, layer_no, distance_between_i_and_j_type, diameter, offset, number_of_bars, axial_distance_si, axial_distance_sn, axial_distance_sj, comment, params)
Creates Multi variable Bar

**Kind**: instance method of [<code>Bar</code>](#Bar)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Bar, can be undefined |
| material_no | <code>Number</code> | Material's number |
| layer_no | <code>Number</code> | Number of layer |
| distance_between_i_and_j_type | <code>String</code> | Distance between i and j reference type, can be undefined ("REFERENCE_TYPE_L" as default) |
| diameter | <code>Number</code> | Bar diameter, can be undefined (12 mm as default) |
| offset | <code>Number</code> | Offset, can be undefined (0 by default) |
| number_of_bars | <code>Number</code> | Number of Bars, can be undefined (2 as default) |
| axial_distance_si | <code>Number</code> | Axial distance of bars, can be undefined (empty by default) |
| axial_distance_sn | <code>Number</code> | Axial distance of bars, can be undefined (100 mm by default) |
| axial_distance_sj | <code>Number</code> | Axial distance of bars, can be undefined (50 mm by default) |
| comment | <code>Number</code> | Comment, can be undefined |
| params | <code>Number</code> | Comment, can be undefined |

<a name="Bar+SingleBetweenTwoPoints"></a>

### bar.SingleBetweenTwoPoints(no, material_no, layer_no, distance_between_i_and_j_type, diameter, offset, distance_from_type, distance, relative, comment, params)
Creates Single between two points Bar

**Kind**: instance method of [<code>Bar</code>](#Bar)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Bar, can be undefined |
| material_no | <code>Number</code> | Material's number |
| layer_no | <code>Number</code> | Number of layer |
| distance_between_i_and_j_type | <code>String</code> | Distance between i and j reference type, can be undefined ("REFERENCE_TYPE_L" as default) |
| diameter | <code>Number</code> | Bar diameter, can be undefined (12 mm as default) |
| offset | <code>Number</code> | Offset, can be undefined (0 by default) |
| distance_from_type | <code>Number</code> | Type of distance from  - "DISTANCE_FROM_START"or "DISTANCE_FROM_END" |
| distance | <code>Number</code> | Distance between point k and Xj-k |
| relative | <code>Boolean</code> | Distance Xi-k or Xj-k are specified as relative or absolute, can be undefined (true as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Bar+SinglePoint"></a>

### bar.SinglePoint(no, material_no, layer_no, diameter, offset_y, offset_z, comment, params)
Creates Single point Bar

**Kind**: instance method of [<code>Bar</code>](#Bar)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Bar, can be undefined |
| material_no | <code>Number</code> | Material's number |
| layer_no | <code>Number</code> | Number of layer |
| diameter | <code>Number</code> | Bar diameter, can be undefined (12 mm as default) |
| offset_y | <code>Number</code> | Offset Y, can be undefined (0 as default) |
| offset_z | <code>Number</code> | Offset Z, can be undefined (0 as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Line"></a>

## Line
**Kind**: global class  

* [Line](#Line)
    * [new Line(no, nodes, comment, params)](#new_Line_new)
    * [.GetNo()](#Line+GetNo) ⇒
    * [.GetLine()](#Line+GetLine) ⇒
    * [.Polyline(no, nodes, comment, params)](#Line+Polyline)
    * [.Arc(no, nodes, control_point, arc_parameters, center_of_arc, alpha_adjustement_target, comment, params)](#Line+Arc)
    * [.Circle(no, center_of_circle, circle_radius, normal_point, comment, params)](#Line+Circle)
    * [.EllipticalArc(no, control_point_1, control_point_2, perimeter_point, elliptical_arc_alpha, elliptical_arc_beta, comment, params)](#Line+EllipticalArc)
    * [.Ellipse(no, nodes, control_point, comment, params)](#Line+Ellipse)
    * [.Parabola(no, nodes, control_point, parabola_alpha, comment, params)](#Line+Parabola)
    * [.Spline(no, nodes, comment, params)](#Line+Spline)
    * [.NURBS(no, nodes, control_points_by_components, nurbs_order, comment, params)](#Line+NURBS)
    * [.RectangularPolygon(no, center_point, length, width, plane, comment, params)](#Line+RectangularPolygon) ⇒
    * [.nPolygon(no, control_point, no_edges, radius, rotation_plane, rotation_angle, join, comment, params)](#Line+nPolygon) ⇒
    * [.Rotation(rotation_values, rotation_type)](#Line+Rotation)
    * [.NodesOnLine(values)](#Line+NodesOnLine)
    * [.Supports(line_support)](#Line+Supports)
    * [.MeshRefinement(line_mesh_refinement)](#Line+MeshRefinement)
    * [.WeldedJoints(values)](#Line+WeldedJoints)

<a name="new_Line_new"></a>

### new Line(no, nodes, comment, params)
Creates line

**Returns**: Created line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of [Node](#Node) indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+GetNo"></a>

### line.GetNo() ⇒
Function for getting id of line

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: Returns line no  
<a name="Line+GetLine"></a>

### line.GetLine() ⇒
Function for getting line object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: returns line object  
<a name="Line+Polyline"></a>

### line.Polyline(no, nodes, comment, params)
Creates polyline

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of [Node](#Node) indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

**Example**  
```js
// returns polyline
var line = new line();
line.Polyline(1, [1,2]);
```
<a name="Line+Arc"></a>

### line.Arc(no, nodes, control_point, arc_parameters, center_of_arc, alpha_adjustement_target, comment, params)
Creates arc line

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of [Node](#Node) indexes |
| control_point | <code>Array</code> | Control point of arc |
| arc_parameters | <code>Array</code> | Arc's parameters, can be undefined (only one of three parameter can be set, when arc parameter is set, other parameters (control point) will be recalculated) |
| center_of_arc | <code>Array</code> | Center of arc, can be undefined (when center of is set, control point will be recalculated) |
| alpha_adjustement_target | <code>Number</code> | Subsequent adjustment of α by displacing node at: 														1 - Beginning of arc 														2 - Arc control point 														3 - End of arc |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Circle"></a>

### line.Circle(no, center_of_circle, circle_radius, normal_point, comment, params)
Creates circle line

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| center_of_circle | <code>Array</code> | Center point of circle |
| circle_radius | <code>Number</code> | Radius of circle, can be undefined |
| normal_point | <code>Array</code> | Point of normal ti circle plane, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+EllipticalArc"></a>

### line.EllipticalArc(no, control_point_1, control_point_2, perimeter_point, elliptical_arc_alpha, elliptical_arc_beta, comment, params)
Creates elliptical arc line

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| control_point_1 | <code>Array</code> | First control point |
| control_point_2 | <code>Array</code> | Second control point |
| perimeter_point | <code>Array</code> | Third control point - perimeter |
| elliptical_arc_alpha | <code>Number</code> | Arc angle α, can be undefined |
| elliptical_arc_beta | <code>Number</code> | Arc angle β, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Ellipse"></a>

### line.Ellipse(no, nodes, control_point, comment, params)
Creates ellipse line

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of ellipse |
| control_point | <code>Array</code> | Control point |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Parabola"></a>

### line.Parabola(no, nodes, control_point, parabola_alpha, comment, params)
Creates parabola line

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of parabola |
| control_point | <code>Array</code> | Control point |
| parabola_alpha | <code>Number</code> | Parabola's parameter α |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Spline"></a>

### line.Spline(no, nodes, comment, params)
Creates spline

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of spline |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+NURBS"></a>

### line.NURBS(no, nodes, control_points_by_components, nurbs_order, comment, params)
Creates NURBS line

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of NURBS |
| control_points_by_components | <code>Array</code> | Control points |
| nurbs_order | <code>Number</code> | Nurbs order, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+RectangularPolygon"></a>

### line.RectangularPolygon(no, center_point, length, width, plane, comment, params) ⇒
Create rectangular polygon

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: Created rectangular polygon  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of the line, can be undefined |
| center_point | <code>array</code> | Center point by format |
| length | <code>number</code> | Length |
| width | <code>number</code> | Width |
| plane | <code>string</code> | Plane XY, XZ or YZ, can be undefined |
| comment | <code>string</code> | Comment for the line, can be undefined |
| params | <code>Object</code> | Parameters of the line, can be undefined |

<a name="Line+nPolygon"></a>

### line.nPolygon(no, control_point, no_edges, radius, rotation_plane, rotation_angle, join, comment, params) ⇒
Creates nPolygon

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: Created nPolygon  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of the line, can be undefined |
| control_point | <code>array</code> | Control point by format [x, y, z] |
| no_edges | <code>number</code> | Number of edges |
| radius | <code>number</code> | Radius |
| rotation_plane | <code>string</code> | Rotation plane (x-y, x-z), can be undefined (x-y by default) |
| rotation_angle | <code>number</code> | Rotation angle |
| join | <code>string</code> | Join in one "true" or in separate lines "false" |
| comment | <code>string</code> | Comment for the line, can be undefined |
| params | <code>Object</code> | Parameters of the line, can be undefined |

<a name="Line+Rotation"></a>

### line.Rotation(rotation_values, rotation_type)
Sets line rotation

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| rotation_values | <code>Number</code> | Rotation values depends on rotation type: 											1 - [β] 											2 - [help_node_index, rotation_plane ("x-y"|"x-z")] 											3 - [rotation_plane ("x-y"|"x-z")] |
| rotation_type | <code>Number</code> | Line rotation via: Angle (1), Help node (2), Inside (non-straight line) (3) |

<a name="Line+NodesOnLine"></a>

### line.NodesOnLine(values)
Sets nodes on line

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array</code> | Nodes on line values in format [[node_1, reference_1, from_start_1, from_end1_1] ... [node_n, reference_n, from_start_n, from_end_1]] |

<a name="Line+Supports"></a>

### line.Supports(line_support)
Sets line supports

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| line_support | <code>Number</code> | Line supports object id |

<a name="Line+MeshRefinement"></a>

### line.MeshRefinement(line_mesh_refinement)
Sets line mesh refinement

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| line_mesh_refinement | <code>Array</code> | Line mesh refinement object id |

<a name="Line+WeldedJoints"></a>

### line.WeldedJoints(values)
Sets line welded joints

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array</code> | Line welded joints values, [[weld1, surface1,1, surface2,1, surface3,1] ... [weldn, surface1n, surface2n, surface3n]] |

<a name="LineSet"></a>

## LineSet
**Kind**: global class  

* [LineSet](#LineSet)
    * [new LineSet(no, lines, comment, params)](#new_LineSet_new)
    * [.ContinuousLines(no, lines, comment, params)](#LineSet+ContinuousLines)
    * [.GroupOfLines(no, lines, comment, params)](#LineSet+GroupOfLines)

<a name="new_LineSet_new"></a>

### new LineSet(no, lines, comment, params)
**Returns**: lineSet  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Line Set |
| lines | <code>array</code> | List of the number of the lines |
| comment | <code>string</code> | Comment for the Line Set |
| params | <code>dictionary</code> | Parameters of the Line Set |

<a name="LineSet+ContinuousLines"></a>

### lineSet.ContinuousLines(no, lines, comment, params)
Create Continuous Lines lineSet type

**Kind**: instance method of [<code>LineSet</code>](#LineSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Line Set |
| lines | <code>array</code> | List of the number of the lines |
| comment | <code>string</code> | Comment for the Line Set |
| params | <code>dictionary</code> | Parameters of the Line Set |

<a name="LineSet+GroupOfLines"></a>

### lineSet.GroupOfLines(no, lines, comment, params)
Create Group of Lines

**Kind**: instance method of [<code>LineSet</code>](#LineSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Line Set |
| lines | <code>array</code> | List of the number of the lines |
| comment | <code>string</code> | Comment for the Line Set |
| params | <code>dictionary</code> | Parameters of the Line Set |

<a name="Material"></a>

## Material
**Kind**: global class  

* [Material](#Material)
    * [new Material(no, name, basic_material, comment, params)](#new_Material_new)
    * [.BasicProperties(modulus_of_elasticity, shear_modulus, definition_type, poisson_ratio, specific_weight, mass_density, thermal_coefficient)](#Material+BasicProperties) ⇒

<a name="new_Material_new"></a>

### new Material(no, name, basic_material, comment, params)
Create Material


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Material, can be undefined |
| name | <code>String</code> | Name of Material, can be undefined |
| basic_material | <code>String</code> | Basic material type, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Material+BasicProperties"></a>

### material.BasicProperties(modulus_of_elasticity, shear_modulus, definition_type, poisson_ratio, specific_weight, mass_density, thermal_coefficient) ⇒
Sets base material properties

**Kind**: instance method of [<code>Material</code>](#Material)  
**Returns**: Modified material  

| Param | Type | Description |
| --- | --- | --- |
| modulus_of_elasticity | <code>Number</code> | Modulus of elasticity, can be undefined (value specified by default) |
| shear_modulus | <code>Number</code> | Shear modulus, can be undefined (value specified by default) |
| definition_type | <code>Number</code> | Definition type, can be undefined (value specified by default) |
| poisson_ratio | <code>Number</code> | Poisson's ration, can be undefined (value specified by default) |
| specific_weight | <code>Number</code> | Specific weight, can be undefined (value specified by default) |
| mass_density | <code>Number</code> | Mass density, can be undefined (value specified by default) |
| thermal_coefficient | <code>Number</code> | Coefficient of thermal expansion, can be undefined (value specified by default) |

<a name="Member"></a>

## Member
**Kind**: global class  

* [Member](#Member)
    * [new Member(no, nodes_or_line, comment, params)](#new_Member_new)
    * [.GetNo()](#Member+GetNo) ⇒
    * [.GetMember()](#Member+GetMember) ⇒
    * [.Beam(no, nodes_or_line, section_start, comment, params)](#Member+Beam) ⇒
    * [.Rigid(no, nodes_or_line, comment, params)](#Member+Rigid) ⇒
    * [.Truss(no, nodes_or_line, section_start, comment, params)](#Member+Truss) ⇒
    * [.TrussOnlyN(no, nodes_or_line, section_start, comment, params)](#Member+TrussOnlyN) ⇒
    * [.Tension(no, nodes_or_line, section_start, comment, params)](#Member+Tension) ⇒
    * [.Compression(no, nodes_or_line, section_start, comment, params)](#Member+Compression) ⇒
    * [.Buckling(no, nodes_or_line, section_start, comment, params)](#Member+Buckling) ⇒
    * [.Cable(no, nodes_or_line, section_start, comment, params)](#Member+Cable) ⇒
    * [.SurfaceModel(no, nodes_or_line, section_start, material_no, comment, params)](#Member+SurfaceModel) ⇒
    * [.ResultBeam(no, nodes_or_line, section_start, result_beam_integrate_stresses_and_forces, result_beam_parameters, included_objects, excluded_objects, comment, params)](#Member+ResultBeam) ⇒
    * [.DefinableStiffness(no, nodes_or_line, definable_stiffness, comment, params)](#Member+DefinableStiffness) ⇒
    * [.CouplingRigidRigid(no, nodes_or_line, comment, params)](#Member+CouplingRigidRigid) ⇒
    * [.CouplingRigidHinge(no, nodes_or_line, comment, params)](#Member+CouplingRigidHinge) ⇒
    * [.CouplingHingeRigid(no, nodes_or_line, comment, params)](#Member+CouplingHingeRigid) ⇒
    * [.CouplingHingeHinge(no, nodes_or_line, comment, params)](#Member+CouplingHingeHinge) ⇒
    * [.Rib(nodes_or_line, no, section_start, rib_alignment, surface_assignment_autodetect, align_axes, flange_dimensions, surfaces, comment, params)](#Member+Rib) ⇒
    * [.NodesOnMember(values)](#Member+NodesOnMember)
    * [.Hinges(member_start_hinge, member_end_hinge)](#Member+Hinges)
    * [.Eccentricities(member_start_eccentricity, member_end_eccentricity)](#Member+Eccentricities)
    * [.Supports(member_support)](#Member+Supports)
    * [.Nonlinearity(member_nonlinearity)](#Member+Nonlinearity)
    * [.ResultIntermediatePoints(member_result_intermediate_point)](#Member+ResultIntermediatePoints)
    * [.EndModifications(member_start, member_end)](#Member+EndModifications)
    * [.SectionDistributionUniform()](#Member+SectionDistributionUniform)
    * [.SectionDistributionLinear(section_start, section_end, section_alignment)](#Member+SectionDistributionLinear)
    * [.SectionDistributionTaperedAtBothSides(section_start, section_internal, section_end, reference_type, section_distance_from_start, section_distance_from_end, section_alignment)](#Member+SectionDistributionTaperedAtBothSides)
    * [.SectionDistributionTaperedAtStart(section_start, section_end, reference_type, section_distance_from_start, section_alignment)](#Member+SectionDistributionTaperedAtStart)
    * [.SectionDistributionTaperedAtEnd(section_start, section_end, reference_type, section_distance_from_end, section_alignment)](#Member+SectionDistributionTaperedAtEnd)
    * [.SectionDistributionSaddle(section_start, section_internal, section_end, reference_type, section_distance_from_start, section_alignment)](#Member+SectionDistributionSaddle)
    * [.SectionDistributionOffsetAtBothSides(section_start, section_internal, section_end, reference_type, section_offset_from_start, section_offset_from_end, section_alignment)](#Member+SectionDistributionOffsetAtBothSides)
    * [.SectionDistributionOffsetAtStart(section_start, section_end, reference_type, section_offset_from_start, section_alignment)](#Member+SectionDistributionOffsetAtStart)
    * [.SectionDistributionOffsetAtEnd(reference_type, section_offset_from_end, section_alignment)](#Member+SectionDistributionOffsetAtEnd)
    * [.GetNo()](#Member+GetNo) ⇒
    * [.GetMember()](#Member+GetMember) ⇒
    * [.SetSteelDesignProperties(enabled)](#Member+SetSteelDesignProperties)
    * [.SetSteelDesignPropertiesViaParentMemberSet(design_properties_via_parent_member_set)](#Member+SetSteelDesignPropertiesViaParentMemberSet)
    * [.SetSteelDesignTypes(steel_effective_lengths_no, steel_boundary_conditions_no, steel_member_local_section_reduction_no)](#Member+SetSteelDesignTypes)
    * [.SetSteeleDesignConfigurations(member_steel_design_uls_configuration_no, member_steel_design_sls_configuration_no, member_steel_design_fr_configuration_no)](#Member+SetSteeleDesignConfigurations)
    * [.SetDesignSupport(design_support_on_member_start, design_support_on_member_end)](#Member+SetDesignSupport)
    * [.SetDeflectionAnalysis(deflection_check_direction, deflection_check_displacement_reference, active_z, length_z, precamber_z, active_y, length_y, precamber_y)](#Member+SetDeflectionAnalysis)

<a name="new_Member_new"></a>

### new Member(no, nodes_or_line, comment, params)
Creates member

**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+GetNo"></a>

### member.GetNo() ⇒
**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Member's number  
<a name="Member+GetMember"></a>

### member.GetMember() ⇒
**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Member object  
<a name="Member+Beam"></a>

### member.Beam(no, nodes_or_line, section_start, comment, params) ⇒
Creates beam member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+Rigid"></a>

### member.Rigid(no, nodes_or_line, comment, params) ⇒
Creates rigid member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+Truss"></a>

### member.Truss(no, nodes_or_line, section_start, comment, params) ⇒
Creates truss member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+TrussOnlyN"></a>

### member.TrussOnlyN(no, nodes_or_line, section_start, comment, params) ⇒
Creates truss (only N) member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+Tension"></a>

### member.Tension(no, nodes_or_line, section_start, comment, params) ⇒
Creates tension member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+Compression"></a>

### member.Compression(no, nodes_or_line, section_start, comment, params) ⇒
Creates compression member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+Buckling"></a>

### member.Buckling(no, nodes_or_line, section_start, comment, params) ⇒
Creates buckling member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+Cable"></a>

### member.Cable(no, nodes_or_line, section_start, comment, params) ⇒
Creates cable member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+SurfaceModel"></a>

### member.SurfaceModel(no, nodes_or_line, section_start, material_no, comment, params) ⇒
Creates surface model member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| material_no | <code>Number</code> | Material number |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+ResultBeam"></a>

### member.ResultBeam(no, nodes_or_line, section_start, result_beam_integrate_stresses_and_forces, result_beam_parameters, included_objects, excluded_objects, comment, params) ⇒
Create result beam member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| result_beam_integrate_stresses_and_forces | <code>String</code> | Stresses and forces type, can be undefined: 																			INTEGRATE_WITHIN_CUBOID_QUADRATIC 																			INTEGRATE_WITHIN_CUBOID_GENERAL 																			INTEGRATE_WITHIN_CYLINDER 																			INTEGRATE_FROM_LISTED_OBJECT |
| result_beam_parameters | <code>Array</code> | Result beam parameters, can be undefined 																			1 - [Yz] 																			2 - [Y+, Y-, Z+, Z-] 																			3 - [R] 																			4 - undefined |
| included_objects | <code>Array</code> | Included surfaces, members and solids, can be undefined ([true, [1, 2], true]: true = all objects, array of indexes = only specified objects) |
| excluded_objects | <code>Array</code> | Excluded surfaces, members and solids, can be undefined ([undefined, [1, 2], undefined]: array of indexes = only specified objects) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+DefinableStiffness"></a>

### member.DefinableStiffness(no, nodes_or_line, definable_stiffness, comment, params) ⇒
Create definable stiffness member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created definable stiffness member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| definable_stiffness | <code>Number</code> | Definable stiffness |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+CouplingRigidRigid"></a>

### member.CouplingRigidRigid(no, nodes_or_line, comment, params) ⇒
Create coupling rigid-rigid member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created coupling rigid-rigid member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+CouplingRigidHinge"></a>

### member.CouplingRigidHinge(no, nodes_or_line, comment, params) ⇒
Create coupling rigid-hinge member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created coupling rigid-hinge member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+CouplingHingeRigid"></a>

### member.CouplingHingeRigid(no, nodes_or_line, comment, params) ⇒
Create coupling hinge-rigid member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created coupling hinge-rigid member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+CouplingHingeHinge"></a>

### member.CouplingHingeHinge(no, nodes_or_line, comment, params) ⇒
Create coupling hinge-hinge member

**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Created coupling hinge-hinge member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="Member+Rib"></a>

### member.Rib(nodes_or_line, no, section_start, rib_alignment, surface_assignment_autodetect, align_axes, flange_dimensions, surfaces, comment, params) ⇒
**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: object Rib  

| Param | Type | Description |
| --- | --- | --- |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| no | <code>Number</code> | Index of member, can be undefined |
| section_start | <code>Number</code> | Section start. Section end is same as section start by default. To set section end specify distribution type. |
| rib_alignment | <code>String</code> | Alignment of rib - "ALIGNMENT_ON_Z_SIDE_NEGATIVE","ALIGNMENT_CENTRIC","ALIGNMENT_ON_Z_SIDE_POSITIVE","ALIGNMENT_USER_DEFINED_VIA_MEMBER_ECCENTRICITY" |
| surface_assignment_autodetect | <code>Boolean</code> |  |
| align_axes | <code>Boolean</code> |  |
| flange_dimensions | <code>Array</code> | two dimensional array each row could have form [end_ordinate,reference_length_definition_type,reference_length_width,width_minus_y_maximal,width_plus_y_maximal,reference_length,width_minus_y_integrative,width_plus_y_integrative] |
| surfaces | <code>Array</code> |  |
| comment | <code>String</code> |  |
| params | <code>Object</code> |  |

<a name="Member+NodesOnMember"></a>

### member.NodesOnMember(values)
Sets nodes on member

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array</code> | Nodes on member values in format [[node_1, reference_1, from_start_1, from_end1_1] ... [node_n, reference_n, from_start_n, from_end_1]] |

<a name="Member+Hinges"></a>

### member.Hinges(member_start_hinge, member_end_hinge)
Sets member start and/or member end hinges

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| member_start_hinge | <code>Number</code> | Member hinge object id at member start, can be undefined |
| member_end_hinge | <code>Number</code> | Member hinge object id at member end, can be undefined |

<a name="Member+Eccentricities"></a>

### member.Eccentricities(member_start_eccentricity, member_end_eccentricity)
Sets member start and/or member end eccentricities

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| member_start_eccentricity | <code>Number</code> | Member eccentricity object id at member start, can be undefined |
| member_end_eccentricity | <code>Number</code> | Member eccentricity object id at member end, can be undefined |

<a name="Member+Supports"></a>

### member.Supports(member_support)
Sets member supports

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| member_support | <code>Number</code> | Member supports object id |

<a name="Member+Nonlinearity"></a>

### member.Nonlinearity(member_nonlinearity)
Sets member nonlinearity

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| member_nonlinearity | <code>Number</code> | Member nonlinearity object id |

<a name="Member+ResultIntermediatePoints"></a>

### member.ResultIntermediatePoints(member_result_intermediate_point)
**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| member_result_intermediate_point | <code>Number</code> | member result intermediate point object id |

<a name="Member+EndModifications"></a>

### member.EndModifications(member_start, member_end)
Sets member start and/or member end extensions

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| member_start | <code>Array</code> | Member start values, can be undefined ([Δi, αi,y, αi,z]) |
| member_end | <code>Array</code> | Member end values, can be undefined ([Δj, αj,y, αj,z]) |

<a name="Member+SectionDistributionUniform"></a>

### member.SectionDistributionUniform()
Sets uniform section distribution

**Kind**: instance method of [<code>Member</code>](#Member)  
<a name="Member+SectionDistributionLinear"></a>

### member.SectionDistributionLinear(section_start, section_end, section_alignment)
Sets linear distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| section_start | <code>Number</code> | Number of section at start of member |
| section_end | <code>Number</code> | Number of section at end of member |
| section_alignment | <code>String</code> | section_alignment	Section alignment (Top, Centric, Bottom), can be undefined (centric as default) |

<a name="Member+SectionDistributionTaperedAtBothSides"></a>

### member.SectionDistributionTaperedAtBothSides(section_start, section_internal, section_end, reference_type, section_distance_from_start, section_distance_from_end, section_alignment)
Sets tapered at both sides distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| section_start | <code>Number</code> | Number of section at start of member |
| section_internal | <code>Number</code> | Number of section at internal point of member (between start and end) |
| section_end | <code>Number</code> | Number of section at end of member |
| reference_type | <code>String</code> | Reference type (L, XY, XZ), can be undefined |
| section_distance_from_start | <code>Array</code> | Member distance ([distance, is_relative]), can be undefined |
| section_distance_from_end | <code>Array</code> | Member distance ([distance, is_relative]), can be undefined |
| section_alignment | <code>String</code> | Section alignment (Top, Centric, Bottom), can be undefined (top as default) |

<a name="Member+SectionDistributionTaperedAtStart"></a>

### member.SectionDistributionTaperedAtStart(section_start, section_end, reference_type, section_distance_from_start, section_alignment)
Sets tapered at start distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| section_start | <code>Number</code> | Number of section at start of member |
| section_end | <code>Number</code> | Number of section at end of member |
| reference_type | <code>String</code> | Reference type (L, XY, XZ), can be undefined |
| section_distance_from_start | <code>Array</code> | Member distance ([distance, is_relative]), can be undefined |
| section_alignment | <code>String</code> | Section alignment (Top, Centric, Bottom), can be undefined (top as default) |

<a name="Member+SectionDistributionTaperedAtEnd"></a>

### member.SectionDistributionTaperedAtEnd(section_start, section_end, reference_type, section_distance_from_end, section_alignment)
Sets tapered at end distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| section_start | <code>Number</code> | Number of section at start of member |
| section_end | <code>Number</code> | Number of section at end of member |
| reference_type | <code>String</code> | Reference type (L, XY, XZ), can be undefined |
| section_distance_from_end | <code>Array</code> | Member distance ([distance, is_relative]), can be undefined |
| section_alignment | <code>String</code> | Section alignment (Top, Centric, Bottom), can be undefined (top as default) |

<a name="Member+SectionDistributionSaddle"></a>

### member.SectionDistributionSaddle(section_start, section_internal, section_end, reference_type, section_distance_from_start, section_alignment)
Sets saddle distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| section_start | <code>Number</code> | Number of section at start of member |
| section_internal | <code>Number</code> | Number of section at internal point of member (between start and end) |
| section_end | <code>Number</code> | Number of section at end of member |
| reference_type | <code>String</code> | Reference type (L, XY, XZ), can be undefined |
| section_distance_from_start | <code>Array</code> | Member distance ([distance, is_relative]), can be undefined |
| section_alignment | <code>String</code> | Section alignment (Top, Centric, Bottom), can be undefined (top as default) |

<a name="Member+SectionDistributionOffsetAtBothSides"></a>

### member.SectionDistributionOffsetAtBothSides(section_start, section_internal, section_end, reference_type, section_offset_from_start, section_offset_from_end, section_alignment)
Sets offset at both sides distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| section_start | <code>Number</code> | Number of section at start of member |
| section_internal | <code>Number</code> | Number of section at internal point of member (between start and end) |
| section_end | <code>Number</code> | Number of section at end of member |
| reference_type | <code>String</code> | Reference type (L, XY, XZ), can be undefined |
| section_offset_from_start | <code>Array</code> | Member offset ([distance, is_relative]), can be undefined |
| section_offset_from_end | <code>Array</code> | Member offset ([distance, is_relative]), can be undefined |
| section_alignment | <code>String</code> | Section alignment (Top, Centric, Bottom), can be undefined (top as default) |

<a name="Member+SectionDistributionOffsetAtStart"></a>

### member.SectionDistributionOffsetAtStart(section_start, section_end, reference_type, section_offset_from_start, section_alignment)
Sets offset at start distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| section_start | <code>Number</code> | Number of section at start of member |
| section_end | <code>Number</code> | Number of section at end of member |
| reference_type | <code>String</code> | Reference type (L, XY, XZ), can be undefined |
| section_offset_from_start | <code>Array</code> | Member offset ([distance, is_relative]), can be undefined |
| section_alignment | <code>String</code> | Section alignment (Top, Centric, Bottom), can be undefined (top as default) |

<a name="Member+SectionDistributionOffsetAtEnd"></a>

### member.SectionDistributionOffsetAtEnd(reference_type, section_offset_from_end, section_alignment)
Sets offset at end distribution

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| reference_type | <code>String</code> | Reference type (L, XY, XZ), can be undefined |
| section_offset_from_end | <code>Array</code> | Member offset ([distance, is_relative]), can be undefined |
| section_alignment | <code>String</code> | Section alignment (Top, Centric, Bottom), can be undefined (top as default) |

<a name="Member+GetNo"></a>

### member.GetNo() ⇒
**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Number of Member  
<a name="Member+GetMember"></a>

### member.GetMember() ⇒
**Kind**: instance method of [<code>Member</code>](#Member)  
**Returns**: Member object  
<a name="Member+SetSteelDesignProperties"></a>

### member.SetSteelDesignProperties(enabled)
Enable / disable Design properties for member (Steel design add-on)

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Enable / disable Design properties, can be undefined (true as default) |

<a name="Member+SetSteelDesignPropertiesViaParentMemberSet"></a>

### member.SetSteelDesignPropertiesViaParentMemberSet(design_properties_via_parent_member_set)
Sets Via parent member set

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| design_properties_via_parent_member_set | <code>Boolean</code> | Via parent member set, can be undefined (true as default) |

<a name="Member+SetSteelDesignTypes"></a>

### member.SetSteelDesignTypes(steel_effective_lengths_no, steel_boundary_conditions_no, steel_member_local_section_reduction_no)
Sets Steel design types (Steel design add-on)

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| steel_effective_lengths_no | <code>Number</code> | Effective length number, can be undefined |
| steel_boundary_conditions_no | <code>Number</code> | Boundary condition number, can be undefined |
| steel_member_local_section_reduction_no | <code>Number</code> | Member local section reduction number, can be undefined |

<a name="Member+SetSteeleDesignConfigurations"></a>

### member.SetSteeleDesignConfigurations(member_steel_design_uls_configuration_no, member_steel_design_sls_configuration_no, member_steel_design_fr_configuration_no)
Sets Steel design configurations (Steel design add-on)

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| member_steel_design_uls_configuration_no | <code>Number</code> | Ultimate configuration number, can be undefined |
| member_steel_design_sls_configuration_no | <code>Number</code> | Serviceability configuration number, can be undefined |
| member_steel_design_fr_configuration_no | <code>Number</code> | Fire resistance configuration number, can be undefined |

<a name="Member+SetDesignSupport"></a>

### member.SetDesignSupport(design_support_on_member_start, design_support_on_member_end)
Sets Design supports

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| design_support_on_member_start | <code>Number</code> | Design support at member start, can be undefined |
| design_support_on_member_end | <code>Number</code> | Design support at member end, can be undefined |

<a name="Member+SetDeflectionAnalysis"></a>

### member.SetDeflectionAnalysis(deflection_check_direction, deflection_check_displacement_reference, active_z, length_z, precamber_z, active_y, length_y, precamber_y)
Sets Deflection analysis

**Kind**: instance method of [<code>Member</code>](#Member)  

| Param | Type | Description |
| --- | --- | --- |
| deflection_check_direction | <code>String</code> | Check direction (LOCAL_AXIS_Z, LOCAL_AXIS_Y, LOCAL_AXIS_Z_AND_Y, RESULTING_AXIS), can be undefined (LOCAL_AXIS_Z_AND_Y as default) |
| deflection_check_displacement_reference | <code>String</code> | Displacement reference (DEFORMED_SEGMENT_ENDS, DEFORMED_UNDEFORMED_SYSTEM), can be undefined (DEFORMED_SEGMENT_ENDS as default) |
| active_z | <code>Boolean</code> | Segment in z-axis - active, can be undefined (true as default) |
| length_z | <code>Number</code> | Segment in z-axis - length, can be undefined (member length as default) |
| precamber_z | <code>Number</code> | Segment in z-axis - precamber, can be undefined (0.0 as default) |
| active_y | <code>Boolean</code> | Segment in y-axis - active, can be undefined (true as default) |
| length_y | <code>Number</code> | Segment in y-axis - length, can be undefined (member length as default) |
| precamber_y | <code>Number</code> | Segment in y-axis - precamber, can be undefined (0.0 as default) |

<a name="MemberSet"></a>

## MemberSet
**Kind**: global class  

* [MemberSet](#MemberSet)
    * [new MemberSet(no, members, comment, params)](#new_MemberSet_new)
    * [.GetNo()](#MemberSet+GetNo) ⇒
    * [.GetMemberSet()](#MemberSet+GetMemberSet) ⇒
    * [.SetSteelDesignProperties(enabled)](#MemberSet+SetSteelDesignProperties)
    * [.SetSteelDesignTypes(steel_effective_lengths_no, steel_boundary_conditions_no, steel_member_local_section_reduction_no)](#MemberSet+SetSteelDesignTypes)
    * [.SetSteeleDesignConfigurations(member_steel_design_uls_configuration_no, member_steel_design_sls_configuration_no, member_steel_design_fr_configuration_no)](#MemberSet+SetSteeleDesignConfigurations)
    * [.ContinuousMembers(no, members, comment, params)](#MemberSet+ContinuousMembers)
    * [.GroupOfMembers(no, members, comment, params)](#MemberSet+GroupOfMembers)
    * [.SetDesignSupport(design_support_on_member_set_start, design_support_on_member_set_end)](#MemberSet+SetDesignSupport)
    * [.SetDesignSupportAtInternalNodes()](#MemberSet+SetDesignSupportAtInternalNodes)
    * [.SetDeflectionAnalysis(deflection_check_direction, deflection_check_displacement_reference, segments_in_z_axis, active_y, length_y, precamber_y)](#MemberSet+SetDeflectionAnalysis)

<a name="new_MemberSet_new"></a>

### new MemberSet(no, members, comment, params)
Create Member Set

**Returns**: memberSet  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Member Set |
| members | <code>array</code> | List of the number of the members |
| comment | <code>string</code> | Comment for the Member Set |
| params | <code>dictionary</code> | Parameters of the Member Set |

<a name="MemberSet+GetNo"></a>

### memberSet.GetNo() ⇒
**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  
**Returns**: Number of member set  
<a name="MemberSet+GetMemberSet"></a>

### memberSet.GetMemberSet() ⇒
**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  
**Returns**: Member set object  
<a name="MemberSet+SetSteelDesignProperties"></a>

### memberSet.SetSteelDesignProperties(enabled)
Enable / disable Design properties for member set (Steel design add-on)

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Enable / disable Design properties, can be undefined (true as default) |

<a name="MemberSet+SetSteelDesignTypes"></a>

### memberSet.SetSteelDesignTypes(steel_effective_lengths_no, steel_boundary_conditions_no, steel_member_local_section_reduction_no)
Sets Steel design types

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  

| Param | Type | Description |
| --- | --- | --- |
| steel_effective_lengths_no | <code>Number</code> | Effective length number, can be undefined |
| steel_boundary_conditions_no | <code>Number</code> | Boundary condition number, can be undefined |
| steel_member_local_section_reduction_no | <code>Number</code> | Member local section reduction number, can be undefined |

<a name="MemberSet+SetSteeleDesignConfigurations"></a>

### memberSet.SetSteeleDesignConfigurations(member_steel_design_uls_configuration_no, member_steel_design_sls_configuration_no, member_steel_design_fr_configuration_no)
Sets Steel design configurations (Steel design add-on)

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  

| Param | Type | Description |
| --- | --- | --- |
| member_steel_design_uls_configuration_no | <code>Number</code> | Ultimate configuration number, can be undefined |
| member_steel_design_sls_configuration_no | <code>Number</code> | Serviceability configuration number, can be undefined |
| member_steel_design_fr_configuration_no | <code>Number</code> | Fire resistance configuration number, can be undefined |

<a name="MemberSet+ContinuousMembers"></a>

### memberSet.ContinuousMembers(no, members, comment, params)
Create Continuous Member memberSet type

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Member Set |
| members | <code>array</code> | List of the number of the members |
| comment | <code>string</code> | Comment for the Member Set |
| params | <code>dictionary</code> | Parameters of the Member Set |

<a name="MemberSet+GroupOfMembers"></a>

### memberSet.GroupOfMembers(no, members, comment, params)
Create Group of  Member memberSet type

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Member Set |
| members | <code>array</code> | List of the number of the members |
| comment | <code>string</code> | Comment for the Member Set |
| params | <code>dictionary</code> | Parameters of the Member Set |

<a name="MemberSet+SetDesignSupport"></a>

### memberSet.SetDesignSupport(design_support_on_member_set_start, design_support_on_member_set_end)
Sets Design supports

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  

| Param | Type | Description |
| --- | --- | --- |
| design_support_on_member_set_start | <code>Number</code> | Design support at member start, can be undefined |
| design_support_on_member_set_end | <code>Number</code> | Design support at member end, can be undefined |

<a name="MemberSet+SetDesignSupportAtInternalNodes"></a>

### memberSet.SetDesignSupportAtInternalNodes()
Sets Design supports at internal nodes (Function takes arguments as design properties numbers)

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  
<a name="MemberSet+SetDeflectionAnalysis"></a>

### memberSet.SetDeflectionAnalysis(deflection_check_direction, deflection_check_displacement_reference, segments_in_z_axis, active_y, length_y, precamber_y)
Sets Deflection analysis

**Kind**: instance method of [<code>MemberSet</code>](#MemberSet)  

| Param | Type | Description |
| --- | --- | --- |
| deflection_check_direction | <code>String</code> | Check direction (LOCAL_AXIS_Z, LOCAL_AXIS_Y, LOCAL_AXIS_Z_AND_Y, RESULTING_AXIS), can be undefined (LOCAL_AXIS_Z_AND_Y as default) |
| deflection_check_displacement_reference | <code>String</code> | Displacement reference (DEFORMED_SEGMENT_ENDS, DEFORMED_UNDEFORMED_SYSTEM), can be undefined (DEFORMED_SEGMENT_ENDS as default) |
| segments_in_z_axis | <code>Array</code> | Segments in z-axis ([[active_1, length_1, precamber_1], ... [active_n, length_n, precamber_n]]), can be undefined |
| active_y | <code>Boolean</code> | Segment in y-axis - active, can be undefined (true as default) |
| length_y | <code>Number</code> | Segment in y-axis - length, can be undefined (member length as default) |
| precamber_y | <code>Number</code> | Segment in y-axis - precamber, can be undefined (0.0 as default) |

<a name="Node"></a>

## Node
**Kind**: global class  

* [Node](#Node)
    * [new Node(no, coordinate_X, coordinate_Y, coordinate_Z, comment, params)](#new_Node_new)
    * [.Standard(no, coordinates, coordinate_system_type, comment, params)](#Node+Standard)
    * [.BetweenTwoNodes(no, start_node_no, end_node_no, node_reference, parameters, offset_y, offset_z, comment, params)](#Node+BetweenTwoNodes)
    * [.BetweenTwoPoints(no, start_point, end_point, node_reference, parameters, offset_y, offset_z, comment, params)](#Node+BetweenTwoPoints)
    * [.OnLine(no, line_number, node_reference, parameters, comment, params)](#Node+OnLine)
    * [.OnMember(no, member_number, node_reference, parameters, comment, params)](#Node+OnMember)

<a name="new_Node_new"></a>

### new Node(no, coordinate_X, coordinate_Y, coordinate_Z, comment, params)
Create Node

**Returns**: node  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Node |
| coordinate_X | <code>number</code> | Coordinate X |
| coordinate_Y | <code>number</code> | Coordinate Y |
| coordinate_Z | <code>number</code> | Coordinate Z |
| comment | <code>string</code> | Comment for the Node |
| params | <code>dictionary</code> | Parameters of the Node |

<a name="Node+Standard"></a>

### node.Standard(no, coordinates, coordinate_system_type, comment, params)
Create Standard node

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Node |
| coordinates | <code>array</code> | Coordinate of node in format [x, y, z] |
| coordinate_system_type | <code>string</code> | Type of Coordinate System |
| comment | <code>string</code> | Comment for the Node |
| params | <code>dictionary</code> | Parameters of the Node |

<a name="Node+BetweenTwoNodes"></a>

### node.BetweenTwoNodes(no, start_node_no, end_node_no, node_reference, parameters, offset_y, offset_z, comment, params)
Create Node between two nodes

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Node |
| start_node_no | <code>int</code> | Number of start node |
| end_node_no | <code>int</code> | Number of end node |
| node_reference | <code>string</code> | Node Reference |
| parameters | <code>array</code> | List of parameters of node |
| offset_y | <code>number</code> | Offset in Y direction |
| offset_z | <code>number</code> | Offset in Z direction |
| comment | <code>string</code> | Comment for the Node |
| params | <code>dictionary</code> | Parameters of the Node |

<a name="Node+BetweenTwoPoints"></a>

### node.BetweenTwoPoints(no, start_point, end_point, node_reference, parameters, offset_y, offset_z, comment, params)
Create Node between two points

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Node |
| start_point | <code>array</code> | Coordinate of start point in format [x, y, z] |
| end_point | <code>array</code> | Coordinate of end point in format [x, y, z] |
| node_reference | <code>string</code> | Node Reference |
| parameters | <code>array</code> | List of parameters of node |
| offset_y | <code>number</code> | Offset in Y direction |
| offset_z | <code>number</code> | Offset in Z direction |
| comment | <code>string</code> | Comment for the Node |
| params | <code>dictionary</code> | Parameters of the Node |

<a name="Node+OnLine"></a>

### node.OnLine(no, line_number, node_reference, parameters, comment, params)
Create Node On Line

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of the Node |
| line_number | <code>int</code> | Number of the Line |
| node_reference | <code>string</code> | Node Reference |
| parameters | <code>array</code> | List of parameters of node |
| comment | <code>string</code> | Comment for the Node |
| params | <code>dictionary</code> | Parameters of the Node |

<a name="Node+OnMember"></a>

### node.OnMember(no, member_number, node_reference, parameters, comment, params)
Create Node on Member

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of the Node |
| member_number | <code>int</code> | Number of member |
| node_reference | <code>string</code> | Node Reference |
| parameters | <code>array</code> | List of parameters of node |
| comment | <code>string</code> | Comment for the Node |
| params | <code>dictionary</code> | Parameters of the Node |

<a name="Opening"></a>

## Opening
**Kind**: global class  
<a name="new_Opening_new"></a>

### new Opening(no, boundary_lines, comment, params)
Create Opening

**Returns**: opening  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Opening |
| boundary_lines | <code>array</code> | Boundary lines of the Opening |
| comment | <code>string</code> | Comment for the Opening |
| params | <code>dictionary</code> | Parameters of the Opening |

<a name="Dimension"></a>

## Dimension
**Kind**: global class  
<a name="new_Dimension_new"></a>

### new Dimension(no, comment, params)
Create RSection Dimensions

**Returns**: Dimension  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Dimension |
| comment | <code>string</code> | Comment for the Dimension |
| params | <code>dictionary</code> | Parameters of the Dimension |

<a name="ControlPoint"></a>

## ControlPoint
**Kind**: global class  
<a name="new_ControlPoint_new"></a>

### new ControlPoint(no, comment, params)
Create RSection Control Point

**Returns**: control point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Control Point |
| comment | <code>string</code> | Comment for the Control Point |
| params | <code>dictionary</code> | Parameters of the Control Point |

<a name="RSectionElement"></a>

## RSectionElement
**Kind**: global class  

* [RSectionElement](#RSectionElement)
    * [new RSectionElement(no, type, comment, params)](#new_RSectionElement_new)
    * [.SingleLine(no, boundary_lines, thickness, shear_thickness, comment, params)](#RSectionElement+SingleLine) ⇒
    * [.Arc(no, points_of_arc, control_point, thickness, shear_thickness, arc_parameters, arc_center, alpha_adjustment_target, comment, params)](#RSectionElement+Arc) ⇒
    * [.Circle(no, circle_center, circle_radius, thickness, shear_thickness, comment, params)](#RSectionElement+Circle) ⇒
    * [.Ellipse(no, first_point, second_point, control_point, thickness, shear_thickness, comment, params)](#RSectionElement+Ellipse) ⇒
    * [.Parabola(no, points_of_parabola, control_point, thickness, shear_thickness, parabola_alpha, comment, params)](#RSectionElement+Parabola) ⇒
    * [.NURBS(no, control_points, nurbs_order, nurbs_knots, thickness, shear_thickness, comment, params)](#RSectionElement+NURBS) ⇒
    * [.Thickness(thickness, shear_thickness)](#RSectionElement+Thickness) ⇒

<a name="new_RSectionElement_new"></a>

### new RSectionElement(no, type, comment, params)
Create RSection Element

**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| type | <code>String</code> | Type of Element |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionElement+SingleLine"></a>

### rSectionElement.SingleLine(no, boundary_lines, thickness, shear_thickness, comment, params) ⇒
Creates single line Element

**Kind**: instance method of [<code>RSectionElement</code>](#RSectionElement)  
**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| boundary_lines | <code>Array</code> | Boundary lines |
| thickness | <code>Number</code> | Thickness, can be undefined (10 mm by default) |
| shear_thickness | <code>Number</code> | Shear thickness, can be undefined (not specified by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionElement+Arc"></a>

### rSectionElement.Arc(no, points_of_arc, control_point, thickness, shear_thickness, arc_parameters, arc_center, alpha_adjustment_target, comment, params) ⇒
Creates RSection arc Element

**Kind**: instance method of [<code>RSectionElement</code>](#RSectionElement)  
**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| points_of_arc | <code>Array</code> | Points numbers of arc Element |
| control_point | <code>Array</code> | Coordinates of control point |
| thickness | <code>Number</code> | Thickness, can be undefined (10 mm by default) |
| shear_thickness | <code>Number</code> | Shear thickness, can be undefined (not specified by default) |
| arc_parameters | <code>Array</code> | Arc parameters, can be undefined |
| arc_center | <code>Array</code> | Coordinates of arc center, can be undefined |
| alpha_adjustment_target | <code>String</code> | Subsequent adjustment of alpha by displacing point at, can be undefined (Beginning of arc by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionElement+Circle"></a>

### rSectionElement.Circle(no, circle_center, circle_radius, thickness, shear_thickness, comment, params) ⇒
Creates RSection circle Element

**Kind**: instance method of [<code>RSectionElement</code>](#RSectionElement)  
**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| circle_center | <code>Array</code> | Coordinates of circle center |
| circle_radius | <code>Number</code> | Circle radius |
| thickness | <code>Number</code> | Thickness, can be undefined (10 mm by default) |
| shear_thickness | <code>Number</code> | Shear thickness, can be undefined (not specified by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionElement+Ellipse"></a>

### rSectionElement.Ellipse(no, first_point, second_point, control_point, thickness, shear_thickness, comment, params) ⇒
Creates RSection ellipse Element

**Kind**: instance method of [<code>RSectionElement</code>](#RSectionElement)  
**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| first_point | <code>Number</code> | Number of first point |
| second_point | <code>Number</code> | Number of second point |
| control_point | <code>Array</code> | Control point coordinates |
| thickness | <code>Number</code> | Thickness, can be undefined (10 mm by default) |
| shear_thickness | <code>Number</code> | Shear thickness, can be undefined (not specified by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionElement+Parabola"></a>

### rSectionElement.Parabola(no, points_of_parabola, control_point, thickness, shear_thickness, parabola_alpha, comment, params) ⇒
Creates RSection parabola Element

**Kind**: instance method of [<code>RSectionElement</code>](#RSectionElement)  
**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| points_of_parabola | <code>Array</code> | Points numbers of parabola |
| control_point | <code>Array</code> | Control point |
| thickness | <code>Number</code> | Thickness, can be undefined (10 mm by default) |
| shear_thickness | <code>Number</code> | Shear thickness, can be undefined (not specified by default) |
| parabola_alpha | <code>Number</code> | Angle of the parabola, can be undefined (0 as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionElement+NURBS"></a>

### rSectionElement.NURBS(no, control_points, nurbs_order, nurbs_knots, thickness, shear_thickness, comment, params) ⇒
Creates RSection NURBS Element

**Kind**: instance method of [<code>RSectionElement</code>](#RSectionElement)  
**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| control_points | <code>Array</code> | Control points ([[y1, z1 (, weight1)], [y2, z2, weight2], ...]) |
| nurbs_order | <code>Number</code> | Nurbs order, can be undefine (2 as default) |
| nurbs_knots | <code>Array</code> | Nurbs knots, can be undefined |
| thickness | <code>Number</code> | Thickness, can be undefined (10 mm by default) |
| shear_thickness | <code>Number</code> | Shear thickness, can be undefined (not specified by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionElement+Thickness"></a>

### rSectionElement.Thickness(thickness, shear_thickness) ⇒
Sets thickness and/or shear thickness

**Kind**: instance method of [<code>RSectionElement</code>](#RSectionElement)  
**Returns**: Modified Element  

| Param | Type | Description |
| --- | --- | --- |
| thickness | <code>Number</code> | Thickness |
| shear_thickness | <code>Number</code> | Effective thickness for shear transfer, can be undefined |

<a name="RSectionLine"></a>

## RSectionLine
**Kind**: global class  

* [RSectionLine](#RSectionLine)
    * [new RSectionLine(no, type, comment, params)](#new_RSectionLine_new)
    * [.GetNo()](#RSectionLine+GetNo) ⇒
    * [.GetLine()](#RSectionLine+GetLine) ⇒
    * [.Polyline(no, definition_points, comment, params)](#RSectionLine+Polyline) ⇒
    * [.Arc(no, points_of_arc, control_point, arc_parameters, arc_center, alpha_adjustment_target, comment, params)](#RSectionLine+Arc) ⇒
    * [.Circle(no, circle_center, circle_radius, comment, params)](#RSectionLine+Circle) ⇒
    * [.Ellipse(no, first_point, second_point, control_point, comment, params)](#RSectionLine+Ellipse) ⇒
    * [.Parabola(no, points_of_parabola, control_point, parabola_alpha, comment, params)](#RSectionLine+Parabola) ⇒
    * [.NURBS(no, definition_points, control_points, nurbs_order, nurbs_knots, comment, params)](#RSectionLine+NURBS) ⇒
    * [.PointsOnLine(points_on_line)](#RSectionLine+PointsOnLine)

<a name="new_RSectionLine_new"></a>

### new RSectionLine(no, type, comment, params)
Creates RSection Line

**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| type | <code>String</code> | Type of line |
| comment | <code>String</code> | Comment for the Line, can be undefined |
| params | <code>Object</code> | Parameters of the Line, can be undefined |

<a name="RSectionLine+GetNo"></a>

### rSectionLine.GetNo() ⇒
**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line number  
<a name="RSectionLine+GetLine"></a>

### rSectionLine.GetLine() ⇒
**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line object  
<a name="RSectionLine+Polyline"></a>

### rSectionLine.Polyline(no, definition_points, comment, params) ⇒
Creates RSection polyline

**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| definition_points | <code>Array</code> | Definition point numbers |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLine+Arc"></a>

### rSectionLine.Arc(no, points_of_arc, control_point, arc_parameters, arc_center, alpha_adjustment_target, comment, params) ⇒
Creates RSection arc Line

**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| points_of_arc | <code>Array</code> | Points numbers of arc lLne |
| control_point | <code>Array</code> | Coordinates of control point |
| arc_parameters | <code>Array</code> | Arc parameters [height, radius, alpha], can be undefined |
| arc_center | <code>Array</code> | Coordinates of arc center, can be undefined |
| alpha_adjustment_target | <code>String</code> | Subsequent adjustment of alpha by displaycing point at, can be undefined (beginning of arc by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLine+Circle"></a>

### rSectionLine.Circle(no, circle_center, circle_radius, comment, params) ⇒
Creates RSection circle Line

**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| circle_center | <code>Array</code> | Coordinates of circle center [y, z] |
| circle_radius | <code>Number</code> | Circle radius |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLine+Ellipse"></a>

### rSectionLine.Ellipse(no, first_point, second_point, control_point, comment, params) ⇒
Creates RSection ellipse Line

**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| first_point | <code>Number</code> | Number of first point |
| second_point | <code>Number</code> | Number of second point |
| control_point | <code>Array</code> | Control point coordinates |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLine+Parabola"></a>

### rSectionLine.Parabola(no, points_of_parabola, control_point, parabola_alpha, comment, params) ⇒
Creates RSection parabola Line

**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| points_of_parabola | <code>Array</code> | Points numbers of parabola |
| control_point | <code>Array</code> | Control point |
| parabola_alpha | <code>Number</code> | Angle of the parabola, can be undefined (0 as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLine+NURBS"></a>

### rSectionLine.NURBS(no, definition_points, control_points, nurbs_order, nurbs_knots, comment, params) ⇒
Creates RSection NURBS

**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  
**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| definition_points | <code>Array</code> | Definition points |
| control_points | <code>Array</code> | Control points [[y1, z1 (, weight1)], [y2, z2, weight2], ...] |
| nurbs_order | <code>Number</code> | Nurbs order, can be undefine (2 as default) |
| nurbs_knots | <code>Array</code> | Nurbs knots, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionLine+PointsOnLine"></a>

### rSectionLine.PointsOnLine(points_on_line)
Sets points on line

**Kind**: instance method of [<code>RSectionLine</code>](#RSectionLine)  

| Param | Type | Description |
| --- | --- | --- |
| points_on_line | <code>Array</code> | [[distance1, from_start1, reference1, point_no1], [distance2, from_start2, reference2, point_no2], ...]                                  from_start = true => node distance from start, otherwise distance from end                                  reference - "L" by default                                  point_no - empty by default |

<a name="RSectionOpening"></a>

## RSectionOpening
**Kind**: global class  

* [RSectionOpening](#RSectionOpening)
    * [new RSectionOpening(no, boundary_lines, comment, params)](#new_RSectionOpening_new)
    * [.Rectangle(no, top_left_corner, width, height, comment, params)](#RSectionOpening+Rectangle) ⇒
    * [.Triangle(no, first_vertex, second_vertex, third_vertex, comment, params)](#RSectionOpening+Triangle) ⇒
    * [.Circle(no, center_vertex, radius, comment, params)](#RSectionOpening+Circle) ⇒
    * [.Polygon(no, vertex_points, comment, params)](#RSectionOpening+Polygon) ⇒

<a name="new_RSectionOpening_new"></a>

### new RSectionOpening(no, boundary_lines, comment, params)
Creates RSection Opening

**Returns**: Opening  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Opening, can be undefined |
| boundary_lines | <code>Array</code> | Boundary lines |
| comment | <code>string</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionOpening+Rectangle"></a>

### rSectionOpening.Rectangle(no, top_left_corner, width, height, comment, params) ⇒
Creates rectangle Opening

**Kind**: instance method of [<code>RSectionOpening</code>](#RSectionOpening)  
**Returns**: Rectangle Opening  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Opening, can be undefined |
| top_left_corner | <code>Array</code> | Top let corner specified with y, z coordinates |
| width | <code>Number</code> | Width |
| height | <code>Number</code> | Height |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionOpening+Triangle"></a>

### rSectionOpening.Triangle(no, first_vertex, second_vertex, third_vertex, comment, params) ⇒
Creates triangle Opening

**Kind**: instance method of [<code>RSectionOpening</code>](#RSectionOpening)  
**Returns**: Triangle Opening  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Opening, can be undefined |
| first_vertex | <code>Array</code> | First point specified with y, z coordinates |
| second_vertex | <code>Array</code> | Second point specified with y, z coordinates |
| third_vertex | <code>Array</code> | Third point specified with y, z coordinates |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionOpening+Circle"></a>

### rSectionOpening.Circle(no, center_vertex, radius, comment, params) ⇒
Creates circle Opening

**Kind**: instance method of [<code>RSectionOpening</code>](#RSectionOpening)  
**Returns**: Circle Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Opening, can be undefined |
| center_vertex | <code>Array</code> | Circle center point |
| radius | <code>Number</code> | Circle radius |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionOpening+Polygon"></a>

### rSectionOpening.Polygon(no, vertex_points, comment, params) ⇒
Creates polygon Opening

**Kind**: instance method of [<code>RSectionOpening</code>](#RSectionOpening)  
**Returns**: Polygon Opening  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Opening, can be undefined |
| vertex_points | <code>Array</code> | Vertex points specified with y, z coordinates |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPart"></a>

## RSectionPart
**Kind**: global class  

* [RSectionPart](#RSectionPart)
    * [new RSectionPart(no, comment, params)](#new_RSectionPart_new)
    * [.Rectangle(no, top_left_corner, width, height, material, comment, params)](#RSectionPart+Rectangle) ⇒
    * [.Triangle(no, first_vertex, second_vertex, third_vertex, material, comment, params)](#RSectionPart+Triangle) ⇒
    * [.Circle(no, center_vertex, radius, material, comment, params)](#RSectionPart+Circle) ⇒
    * [.Polygon(no, vertex_points, material, comment, params)](#RSectionPart+Polygon) ⇒
    * [.WithBoundaryLines(no, boundary_lines, material, comment, params)](#RSectionPart+WithBoundaryLines) ⇒
    * [.IntegratedObjects(enable, automatic_object_detection, integrated_openings)](#RSectionPart+IntegratedObjects) ⇒
    * [.No()](#RSectionPart+No) ⇒

<a name="new_RSectionPart_new"></a>

### new RSectionPart(no, comment, params)
Creates RSection Part

**Returns**: Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Part, can be undefined |
| comment | <code>string</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPart+Rectangle"></a>

### rSectionPart.Rectangle(no, top_left_corner, width, height, material, comment, params) ⇒
Creates rectangle Part

**Kind**: instance method of [<code>RSectionPart</code>](#RSectionPart)  
**Returns**: Rectangle Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Part, can be undefined |
| top_left_corner | <code>Array</code> | Top let corner specified with y, z coordinates |
| width | <code>Number</code> | Width |
| height | <code>Number</code> | Height |
| material | <code>Object</code> | Material |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPart+Triangle"></a>

### rSectionPart.Triangle(no, first_vertex, second_vertex, third_vertex, material, comment, params) ⇒
Creates triangle Part

**Kind**: instance method of [<code>RSectionPart</code>](#RSectionPart)  
**Returns**: Triangle Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Part, can be undefined |
| first_vertex | <code>Array</code> | First point specified with y, z coordinates |
| second_vertex | <code>Array</code> | Second point specified with y, z coordinates |
| third_vertex | <code>Array</code> | Third point specified with y, z coordinates |
| material | <code>Object</code> | Material |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPart+Circle"></a>

### rSectionPart.Circle(no, center_vertex, radius, material, comment, params) ⇒
Creates circle Part

**Kind**: instance method of [<code>RSectionPart</code>](#RSectionPart)  
**Returns**: Circle Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Part, can be undefined |
| center_vertex | <code>Array</code> | Circle center point |
| radius | <code>Number</code> | Circle radius |
| material | <code>Object</code> | Material |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPart+Polygon"></a>

### rSectionPart.Polygon(no, vertex_points, material, comment, params) ⇒
Creates polygon Part

**Kind**: instance method of [<code>RSectionPart</code>](#RSectionPart)  
**Returns**: Polygon Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Part, can be undefined |
| vertex_points | <code>Array</code> | Vertex points specified with y, z coordinates |
| material | <code>Object</code> | Material |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPart+WithBoundaryLines"></a>

### rSectionPart.WithBoundaryLines(no, boundary_lines, material, comment, params) ⇒
Creates Part with boundary line

**Kind**: instance method of [<code>RSectionPart</code>](#RSectionPart)  
**Returns**: Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Part, can be undefined |
| boundary_lines | <code>Array</code> | Boundary lines |
| material | <code>Object</code> | Material |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPart+IntegratedObjects"></a>

### rSectionPart.IntegratedObjects(enable, automatic_object_detection, integrated_openings) ⇒
Integrates objects to Part

**Kind**: instance method of [<code>RSectionPart</code>](#RSectionPart)  
**Returns**: Modified Part  

| Param | Type | Description |
| --- | --- | --- |
| enable | <code>Boolean</code> | Objects are integrated, can be undefined (true as default) |
| automatic_object_detection | <code>Boolean</code> | Objects are integrated automatically, can be undefined (true as default) |
| integrated_openings | <code>Array</code> | Integrated openings |

<a name="RSectionPart+No"></a>

### rSectionPart.No() ⇒
Returns number of Part

**Kind**: instance method of [<code>RSectionPart</code>](#RSectionPart)  
**Returns**: Number of Part  
<a name="RSectionPoint"></a>

## RSectionPoint
**Kind**: global class  

* [RSectionPoint](#RSectionPoint)
    * [new RSectionPoint(no, coordinate_y, coordinate_z, comment, params)](#new_RSectionPoint_new)
    * [.GetNo()](#RSectionPoint+GetNo) ⇒
    * [.GetPoint()](#RSectionPoint+GetPoint) ⇒
    * [.y()](#RSectionPoint+y)
    * [.z()](#RSectionPoint+z)
    * [.Standard(no, coordinate_y, coordinate_z, reference_point, comment, params)](#RSectionPoint+Standard) ⇒
    * [.BetweenTwoLocations(no, start_location, end_location, distance_from_start, distance_from_end, distance_from_start_relative, reference_type, offset_in_local_direction, comment, params)](#RSectionPoint+BetweenTwoLocations) ⇒
    * [.BetweenTwoPoints(no, start_point, end_point, distance_from_start, distance_from_end, distance_from_start_relative, reference_type, offset_in_local_direction, comment, params)](#RSectionPoint+BetweenTwoPoints) ⇒
    * [.OnLine(no, line, distance_from_start, distance_from_end, distance_from_start_relative, reference_type, comment, params)](#RSectionPoint+OnLine) ⇒

<a name="new_RSectionPoint_new"></a>

### new RSectionPoint(no, coordinate_y, coordinate_z, comment, params)
Creates RSection Point

**Returns**: Point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Point, can be undefined |
| coordinate_y | <code>Number</code> | Coordinate Y |
| coordinate_z | <code>Number</code> | Coordinate Z |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPoint+GetNo"></a>

### rSectionPoint.GetNo() ⇒
**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
**Returns**: Point number  
<a name="RSectionPoint+GetPoint"></a>

### rSectionPoint.GetPoint() ⇒
**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
**Returns**: Point object  
<a name="RSectionPoint+y"></a>

### rSectionPoint.y()
Returns y coordinate

**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
<a name="RSectionPoint+z"></a>

### rSectionPoint.z()
Returns z coordinate

**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
<a name="RSectionPoint+Standard"></a>

### rSectionPoint.Standard(no, coordinate_y, coordinate_z, reference_point, comment, params) ⇒
Creates standard RSection Point

**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
**Returns**: Point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Point, can be undefined |
| coordinate_y | <code>Number</code> | Coordinate Y |
| coordinate_z | <code>Number</code> | Coordinate Z |
| reference_point | <code>Number</code> | Reference point number, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPoint+BetweenTwoLocations"></a>

### rSectionPoint.BetweenTwoLocations(no, start_location, end_location, distance_from_start, distance_from_end, distance_from_start_relative, reference_type, offset_in_local_direction, comment, params) ⇒
Creates Between two locations RSection Point

**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
**Returns**: Point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Point, can be undefined |
| start_location | <code>Array</code> | Coordinates for start location [y, z] |
| end_location | <code>Array</code> | Coordinates for end location [y, z] |
| distance_from_start | <code>Number</code> | Distance from start |
| distance_from_end | <code>Number</code> | Distance from end |
| distance_from_start_relative | <code>Boolean</code> | Distance from start point, can be undefined (True as default) |
| reference_type | <code>String</code> | Reference type, distance of start and end location along the length, in Y or Z coordination, can be undefined ("L" by default) |
| offset_in_local_direction | <code>Number</code> | Offset in local direction, can be undefined (0 as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPoint+BetweenTwoPoints"></a>

### rSectionPoint.BetweenTwoPoints(no, start_point, end_point, distance_from_start, distance_from_end, distance_from_start_relative, reference_type, offset_in_local_direction, comment, params) ⇒
Creates Between two points RSection Point

**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
**Returns**: Point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Point, can be undefined |
| start_point | <code>Object</code> | Number of start point |
| end_point | <code>Object</code> | Number of end point |
| distance_from_start | <code>Number</code> | Distance from start |
| distance_from_end | <code>Number</code> | Distance from end |
| distance_from_start_relative | <code>Boolean</code> | Distance from start point, can be undefined (True asy default) |
| reference_type | <code>String</code> | Reference type, distance of start and end location along the length, in Y or Z coordination, can be undefined ("L" by default) |
| offset_in_local_direction | <code>Number</code> | Offset in local direction, can be undefined (0 as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionPoint+OnLine"></a>

### rSectionPoint.OnLine(no, line, distance_from_start, distance_from_end, distance_from_start_relative, reference_type, comment, params) ⇒
Creates On lines RSection Point

**Kind**: instance method of [<code>RSectionPoint</code>](#RSectionPoint)  
**Returns**: Point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Point, can be undefined |
| line | <code>Number</code> | Line number |
| distance_from_start | <code>Number</code> | Distance from start |
| distance_from_end | <code>Number</code> | Distance from end |
| distance_from_start_relative | <code>Boolean</code> | Distance from start point, can be undefined (True as default) |
| reference_type | <code>String</code> | Reference type, can be undefined ("L" by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Stiffener"></a>

## Stiffener
**Kind**: global class  
<a name="new_Stiffener_new"></a>

### new Stiffener(no, comment, params)
Create RSection Stiffener

**Returns**: Stiffener  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Stiffener |
| comment | <code>string</code> | Comment for the Stiffener |
| params | <code>dictionary</code> | Parameters of the Stiffener |

<a name="RSectionStressPoint"></a>

## RSectionStressPoint
**Kind**: global class  

* [RSectionStressPoint](#RSectionStressPoint)
    * [new RSectionStressPoint(no, comment, params)](#new_RSectionStressPoint_new)
    * [.Standard(no, part_no, reference_stress_point_no, non_global_coordinates, global_coordinations, element_no, comment, params)](#RSectionStressPoint+Standard) ⇒
    * [.OnLine(no, line_no, distance_points, reference_type, part_no, element_no, comment, params)](#RSectionStressPoint+OnLine) ⇒
    * [.OnElement(no, element_no, distance_points, reference_type, element_side, comment, params)](#RSectionStressPoint+OnElement) ⇒

<a name="new_RSectionStressPoint_new"></a>

### new RSectionStressPoint(no, comment, params)
Create RSection Stress Points

**Returns**: Stress point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Stress point, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionStressPoint+Standard"></a>

### rSectionStressPoint.Standard(no, part_no, reference_stress_point_no, non_global_coordinates, global_coordinations, element_no, comment, params) ⇒
Creates Standard Stress point

**Kind**: instance method of [<code>RSectionStressPoint</code>](#RSectionStressPoint)  
**Returns**: Standard Stress point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Stress point, can be undefined |
| part_no | <code>Number</code> | Part number |
| reference_stress_point_no | <code>Number</code> | Reference Stress point number, can be undefined |
| non_global_coordinates | <code>Array</code> | Coordinates, can be undefined |
| global_coordinations | <code>Array</code> | Global coordinates, can be undefined |
| element_no | <code>Number</code> | Element number, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionStressPoint+OnLine"></a>

### rSectionStressPoint.OnLine(no, line_no, distance_points, reference_type, part_no, element_no, comment, params) ⇒
Creates Stress point on line

**Kind**: instance method of [<code>RSectionStressPoint</code>](#RSectionStressPoint)  
**Returns**: Stress point on line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Stress point, can be undefined |
| line_no | <code>Number</code> | Line number |
| distance_points | <code>Array</code> | Distance between point and start and end points, [from_start, from_end, relative], from_start or from_end can be undefined (but at least one distance must be specified), relative can be undefined (true as default) |
| reference_type | <code>String</code> | Reference type, distance of start and end location along the length, in Y or Z coordination, can be undefined ("L" by default) |
| part_no | <code>Number</code> | Part number, van be undefined |
| element_no | <code>Number</code> | Element number, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="RSectionStressPoint+OnElement"></a>

### rSectionStressPoint.OnElement(no, element_no, distance_points, reference_type, element_side, comment, params) ⇒
Creates stress point on element

**Kind**: instance method of [<code>RSectionStressPoint</code>](#RSectionStressPoint)  
**Returns**: Modified Stress point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Stress point, can be undefined |
| element_no | <code>Number</code> | Element number |
| distance_points | <code>Array</code> | Distance between point and start and end points, [from_start, from_end, relative], from_start or from_end can be undefined (but at least one distance must be specified), relative can be undefined (true as default) |
| reference_type | <code>String</code> | Reference type, distance of start and end location along the length, in Y or Z coordination, can be undefined ("L" by default) |
| element_side | <code>String</code> | Element side, can be undefined ("MIDDLE" as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Subpanel"></a>

## Subpanel
**Kind**: global class  
<a name="new_Subpanel_new"></a>

### new Subpanel(no, comment, params)
Create RSection Subpanel

**Returns**: Subpanel  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Subpanel |
| comment | <code>string</code> | Comment for the Subpanel |
| params | <code>dictionary</code> | Parameters of the Subpanel |

<a name="Section"></a>

## Section
**Kind**: global class  

* [Section](#Section)
    * [new Section(no, section_name, material_no, comment, params)](#new_Section_new)
    * [.GetNo()](#Section+GetNo) ⇒
    * [.SectionType(section_type)](#Section+SectionType) ⇒
    * [.ManufacturingType(manufacturing_type)](#Section+ManufacturingType) ⇒
    * [.SectionProperties(area_shear_y, area_shear_z, warping, width_temperature_load, depth_temperature_load)](#Section+SectionProperties) ⇒
    * [.DeactivateShearStiffness(deactivated)](#Section+DeactivateShearStiffness) ⇒
    * [.Rotation(rotation_angle)](#Section+Rotation) ⇒
    * [.ThinWalledModel(thin_walled_model)](#Section+ThinWalledModel) ⇒
    * [.UsNotation(us_spelling_of_properties)](#Section+UsNotation) ⇒
    * [.StressSmoothing(stress_smoothing_to_avoid_singularities)](#Section+StressSmoothing) ⇒
    * [.DeactivateWarpingStiffness(deactivated)](#Section+DeactivateWarpingStiffness) ⇒
    * [.CostEstimation(cost_estimation)](#Section+CostEstimation) ⇒
    * [.CostEstimationValues(member_weight, member_volume, member_surface, member_length)](#Section+CostEstimationValues) ⇒
    * [.EmissionEstimation(emission_estimation)](#Section+EmissionEstimation) ⇒
    * [.EmissionEstimationValues(member_weight, member_volume, member_surface, member_length)](#Section+EmissionEstimationValues) ⇒
    * [.Optimization(optimization)](#Section+Optimization) ⇒

<a name="new_Section_new"></a>

### new Section(no, section_name, material_no, comment, params)
Create Section

**Returns**: Section  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of the Section, can be undefined |
| section_name | <code>String</code> | Name of the Section, can be undefined (IPE 300 by default) |
| material_no | <code>Number</code> | Number of the material |
| comment | <code>String</code> | Comment |
| params | <code>Object</code> | Parameters |

<a name="Section+GetNo"></a>

### section.GetNo() ⇒
**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Number of Section  
<a name="Section+SectionType"></a>

### section.SectionType(section_type) ⇒
Sets section type

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| section_type | <code>String</code> | Section type |

<a name="Section+ManufacturingType"></a>

### section.ManufacturingType(manufacturing_type) ⇒
Sets manufacturing type

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| manufacturing_type | <code>String</code> | Manufacturing type |

<a name="Section+SectionProperties"></a>

### section.SectionProperties(area_shear_y, area_shear_z, warping, width_temperature_load, depth_temperature_load) ⇒
Sets Section properties

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| area_shear_y | <code>Number</code> | Shear sectional areas, can be undefined |
| area_shear_z | <code>Number</code> | Shear sectional areas, can be undefined |
| warping | <code>Number</code> | Warping, van be undefined |
| width_temperature_load | <code>Number</code> | Width (for non-uniform temperature loads), can be undefined |
| depth_temperature_load | <code>Number</code> | Depth (for non-uniform temperature loads), can be undefined |

<a name="Section+DeactivateShearStiffness"></a>

### section.DeactivateShearStiffness(deactivated) ⇒
Deactivates shear stiffness

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| deactivated | <code>Boolean</code> | Shear stiffness deactivation/activation, can be undefined (true as default) |

<a name="Section+Rotation"></a>

### section.Rotation(rotation_angle) ⇒
Sets Section rotation

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| rotation_angle | <code>Number</code> | Rotation angle |

<a name="Section+ThinWalledModel"></a>

### section.ThinWalledModel(thin_walled_model) ⇒
Sets thin-walled model

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| thin_walled_model | <code>Boolean</code> | Thin-walled model enabling/disabling, can be undefined (true as default) |

<a name="Section+UsNotation"></a>

### section.UsNotation(us_spelling_of_properties) ⇒
Sets US notation for section properties

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| us_spelling_of_properties | <code>Boolean</code> | US notation enabling/disabling, can be undefined (true as default) |

<a name="Section+StressSmoothing"></a>

### section.StressSmoothing(stress_smoothing_to_avoid_singularities) ⇒
Sets stress smoothing to avoid singularities

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| stress_smoothing_to_avoid_singularities | <code>Boolean</code> | Stress smoothing enabling/disabling, can be undefined (true as default) |

<a name="Section+DeactivateWarpingStiffness"></a>

### section.DeactivateWarpingStiffness(deactivated) ⇒
Deactivates warping stiffness

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| deactivated | <code>Boolean</code> | Warping stiffness deactivation/activation, can be undefined (true as default). Torsional Warping add-on must be active. |

<a name="Section+CostEstimation"></a>

### section.CostEstimation(cost_estimation) ⇒
Sets cost estimation

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| cost_estimation | <code>Boolean</code> | Cost estimation apply from material enabling/disabling, can be undefined (true as default). Optimization & Costs / CO2 Emission Estimation add-on must be active. |

<a name="Section+CostEstimationValues"></a>

### section.CostEstimationValues(member_weight, member_volume, member_surface, member_length) ⇒
Sets Cost estimation values

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| member_weight | <code>Number</code> | Member weight, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |
| member_volume | <code>Number</code> | Member volume, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |
| member_surface | <code>Number</code> | Member surface, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |
| member_length | <code>Number</code> | Member length, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |

<a name="Section+EmissionEstimation"></a>

### section.EmissionEstimation(emission_estimation) ⇒
Sets estimation of CO2 emissions

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| emission_estimation | <code>Boolean</code> | Estimation of CO2 emissions enabling/disabling, can be undefined (true as default). Optimization & Costs / CO2 Emission Estimation add-on must be active. |

<a name="Section+EmissionEstimationValues"></a>

### section.EmissionEstimationValues(member_weight, member_volume, member_surface, member_length) ⇒
Sets Emission estimation values

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| member_weight | <code>Number</code> | Member weight, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |
| member_volume | <code>Number</code> | Member volume, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |
| member_surface | <code>Number</code> | Member surface, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |
| member_length | <code>Number</code> | Member length, can be undefined. Optimization & Costs / CO2 Emission Estimation add-on must be active. |

<a name="Section+Optimization"></a>

### section.Optimization(optimization) ⇒
Sets optimization

**Kind**: instance method of [<code>Section</code>](#Section)  
**Returns**: Modified Section  

| Param | Type | Description |
| --- | --- | --- |
| optimization | <code>Boolean</code> | Optimization enabling/disabling, can be undefined (true as default). Optimization & Costs / CO2 Emission Estimation add-on must be active. |

<a name="Solid"></a>

## Solid
**Kind**: global class  

* [Solid](#Solid)
    * [new Solid(no, boundary_surfaces, material, comment, params)](#new_Solid_new)
    * [.Standard(no, boundary_surfaces, material, comment, params)](#Solid+Standard)
    * [.Gas(no, boundary_surfaces, material, gasssolid_no, comment, params)](#Solid+Gas)
    * [.Contact(no, boundary_surfaces, material, contact_solid_no, first_contact_surface, comment, params)](#Solid+Contact)

<a name="new_Solid_new"></a>

### new Solid(no, boundary_surfaces, material, comment, params)
Create Solid

**Returns**: Solid  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Solid |
| boundary_surfaces | <code>array</code> | List of boundary surfaces |
| material | <code>int</code> | Number of material |
| comment | <code>string</code> | Comment for the Solid |
| params | <code>dictionary</code> | Parameters of the Solid |

<a name="Solid+Standard"></a>

### solid.Standard(no, boundary_surfaces, material, comment, params)
Create Standard Solid

**Kind**: instance method of [<code>Solid</code>](#Solid)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Solid |
| boundary_surfaces | <code>array</code> | List of boundary surfaces |
| material | <code>int</code> | Number of material |
| comment | <code>string</code> | Comment for the Solid |
| params | <code>dictionary</code> | Parameters of the Solid |

<a name="Solid+Gas"></a>

### solid.Gas(no, boundary_surfaces, material, gasssolid_no, comment, params)
Create Gas

**Kind**: instance method of [<code>Solid</code>](#Solid)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Solid |
| boundary_surfaces | <code>array</code> | List of boundary surfaces |
| material | <code>int</code> | Number of material |
| gasssolid_no | <code>int</code> | Gass solid index |
| comment | <code>string</code> | Comment for the Solid |
| params | <code>dictionary</code> | Parameters of the Solid |

<a name="Solid+Contact"></a>

### solid.Contact(no, boundary_surfaces, material, contact_solid_no, first_contact_surface, comment, params)
Create Contact solid

**Kind**: instance method of [<code>Solid</code>](#Solid)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Solid |
| boundary_surfaces | <code>array</code> | List of boundary surfaces |
| material | <code>int</code> | Number of material |
| contact_solid_no | <code>int</code> | Contact solid index |
| first_contact_surface | <code>int</code> | Number of first contact surface |
| comment | <code>string</code> | Comment for the Solid |
| params | <code>dictionary</code> | Parameters of the Solid |

<a name="SolidSet"></a>

## SolidSet
**Kind**: global class  

* [SolidSet](#SolidSet)
    * [new SolidSet(no, solids_no, solid_set_type, comment, params)](#new_SolidSet_new)
    * [.ContinuousSolids(no, solids_no, comment, params)](#SolidSet+ContinuousSolids)
    * [.GroupOfSolids(no, solids_no, comment, params)](#SolidSet+GroupOfSolids)

<a name="new_SolidSet_new"></a>

### new SolidSet(no, solids_no, solid_set_type, comment, params)
Create Solid Set

**Returns**: Solid Set  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Solid Set |
| solids_no | <code>array</code> | List of solids |
| solid_set_type | <code>string</code> | Type of the Solid Set |
| comment | <code>string</code> | Comment for the Solid Set |
| params | <code>dictionary</code> | Parameters of the Solid Set |

<a name="SolidSet+ContinuousSolids"></a>

### solidSet.ContinuousSolids(no, solids_no, comment, params)
Create Continuous Solids solidSet type

**Kind**: instance method of [<code>SolidSet</code>](#SolidSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Solid Set |
| solids_no | <code>array</code> | List of solids |
| comment | <code>string</code> | Comment for the Solid Set |
| params | <code>dictionary</code> | Parameters of the Solid Set |

<a name="SolidSet+GroupOfSolids"></a>

### solidSet.GroupOfSolids(no, solids_no, comment, params)
Create Group of Solids

**Kind**: instance method of [<code>SolidSet</code>](#SolidSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Solid Set |
| solids_no | <code>array</code> | List of solids |
| comment | <code>string</code> | Comment for the Solid Set |
| params | <code>dictionary</code> | Parameters of the Solid Set |

<a name="Stirrup"></a>

## Stirrup
**Kind**: global class  

* [Stirrup](#Stirrup)
    * [new Stirrup(no, cover_points_no, material_no, diameter, diameter_of_curvature, mandrel_diameter_factor, comment, params)](#new_Stirrup_new)
    * [.GetNo()](#Stirrup+GetNo) ⇒
    * [.GetStirrup()](#Stirrup+GetStirrup) ⇒

<a name="new_Stirrup_new"></a>

### new Stirrup(no, cover_points_no, material_no, diameter, diameter_of_curvature, mandrel_diameter_factor, comment, params)
Creates RSECTION Stirrup


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Stirrup, can be undefined |
| cover_points_no | <code>Array</code> | Cover points numbers |
| material_no | <code>Number</code> | Material's number |
| diameter | <code>Number</code> | Diameter, can be undefined (8 mm by default) |
| diameter_of_curvature | <code>Number</code> | Diameter of curvature, can be undefined (32 mm by default) |
| mandrel_diameter_factor | <code>Number</code> | Mandrel diameter factor, can be undefined (4.00 by default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="Stirrup+GetNo"></a>

### stirrup.GetNo() ⇒
**Kind**: instance method of [<code>Stirrup</code>](#Stirrup)  
**Returns**: Number of Stirrup  
<a name="Stirrup+GetStirrup"></a>

### stirrup.GetStirrup() ⇒
**Kind**: instance method of [<code>Stirrup</code>](#Stirrup)  
**Returns**: Stirrup object  
<a name="Surface"></a>

## Surface
**Kind**: global class  

* [Surface](#Surface)
    * [new Surface(no, boundary_lines, thickness, comment, params)](#new_Surface_new)
    * [.GetSurface()](#Surface+GetSurface) ⇒
    * [.GetNo()](#Surface+GetNo) ⇒
    * [.Standard(no, boundary_lines, thickness, comment, params)](#Surface+Standard) ⇒
    * [.WithoutThickness(no, boundary_lines, comment, params)](#Surface+WithoutThickness) ⇒
    * [.Rigid(no, boundary_lines, comment, params)](#Surface+Rigid) ⇒
    * [.Membrane(no, boundary_lines, thickness, comment, params)](#Surface+Membrane) ⇒
    * [.WithoutMembraneTension(no, boundary_lines, thickness, comment, params)](#Surface+WithoutMembraneTension) ⇒
    * [.LoadTransfer(no, boundary_lines, load_transfer_direction, load_distribution, comment, params)](#Surface+LoadTransfer) ⇒
    * [.RemoveInfluenceFrom(excluded_members_no, excluded_parallel_to_members, excluded_lines, excluded_parallel_to_lines, excluded_nodes)](#Surface+RemoveInfluenceFrom)
    * [.SurfaceWeight(surface_weight)](#Surface+SurfaceWeight)
    * [.ConsiderMemberEccentricity(consider_member_eccentricity)](#Surface+ConsiderMemberEccentricity)
    * [.ConsiderSectionDistribution(consider_section_distribution)](#Surface+ConsiderSectionDistribution)
    * [.AdvancedDistribution(stripe_width, sampling_factor, enabled)](#Surface+AdvancedDistribution)
    * [.NeglectEquilibriumOfMoments(neglect_equilibrium_of_moments)](#Surface+NeglectEquilibriumOfMoments)
    * [.SurfaceType(stiffness_type, material, thickness)](#Surface+SurfaceType)
    * [.Plane()](#Surface+Plane)
    * [.Quadrangle(no, boundary_lines, stiffness_type, thickness, boundary_line, corner_node_1, corner_node_2, corner_node_3, corner_node_4, comment, params)](#Surface+Quadrangle)
    * [.NURBS()](#Surface+NURBS)
    * [.Rotated(no, boundary_lines, thickness, boundary_line, angle_of_rotation, rotation_axis_p, rotation_axis_r, comment, params)](#Surface+Rotated)
    * [.Pipe(center_line, radius)](#Surface+Pipe)
    * [.Hinges(hinges_values)](#Surface+Hinges)
    * [.Support(support)](#Surface+Support)
    * [.Eccentricity(eccentricity)](#Surface+Eccentricity)
    * [.MeshRefinement(mesh_refinement, meshing_type)](#Surface+MeshRefinement)
    * [.SpecificAxes(input_axes, result_axes)](#Surface+SpecificAxes)
    * [.GridForResults(grid_type, number_of_grid_points, grid_adapt_automatically, grid_distances, grid_rotation, grid_origin)](#Surface+GridForResults)
    * [.IntegratedObjects(auto_detection_of_integrated_objects, integrated_nodes, integrated_lines, integrated_openings)](#Surface+IntegratedObjects)
    * [.ConcreteDesignProperties(enabled)](#Surface+ConcreteDesignProperties)
    * [.SetConcreteDesignPropertiesViaParentSurfaceSet(design_properties_via_parent_surface_set)](#Surface+SetConcreteDesignPropertiesViaParentSurfaceSet)
    * [.SetUserDefinedConcreteCover(concrete_cover_top, concrete_cover_bottom, is_user_defined_concrete_cover_enabled)](#Surface+SetUserDefinedConcreteCover)
    * [.SetConcreteCoverAccToEn1992()](#Surface+SetConcreteCoverAccToEn1992)
    * [.SetAssignments(surface_concrete_design_uls_configuration, surface_concrete_design_sls_configuration)](#Surface+SetAssignments)
    * [.SetConcreteDesignReinforcementDirections(reinforcement_direction_top, reinforcement_direction_bottom)](#Surface+SetConcreteDesignReinforcementDirections)
    * [.SetConcreteDesignConcreteDurability(concrete_durability_top, concrete_durability_bottom)](#Surface+SetConcreteDesignConcreteDurability)
    * [.SetConcreteDesignSurfaceReinforcement(surface_reinforcement_nos)](#Surface+SetConcreteDesignSurfaceReinforcement)
    * [.SetDeflectionAnalysis(deflection_check_surface_type, deflection_check_displacement_reference, deflection_check_reference_length_z_definition_type, deflection_check_reference_length_z)](#Surface+SetDeflectionAnalysis)

<a name="new_Surface_new"></a>

### new Surface(no, boundary_lines, thickness, comment, params)
Creates surface

**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| thickness | <code>Number</code> | Thickness index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+GetSurface"></a>

### surface.GetSurface() ⇒
**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Surface object  
<a name="Surface+GetNo"></a>

### surface.GetNo() ⇒
**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Surface number  
<a name="Surface+Standard"></a>

### surface.Standard(no, boundary_lines, thickness, comment, params) ⇒
Creates standard surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| thickness | <code>Number</code> | Thickness index |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+WithoutThickness"></a>

### surface.WithoutThickness(no, boundary_lines, comment, params) ⇒
Creates without thickness surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+Rigid"></a>

### surface.Rigid(no, boundary_lines, comment, params) ⇒
Creates rigid surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+Membrane"></a>

### surface.Membrane(no, boundary_lines, thickness, comment, params) ⇒
Creates membrane surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| thickness | <code>Number</code> | Thickness index |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+WithoutMembraneTension"></a>

### surface.WithoutMembraneTension(no, boundary_lines, thickness, comment, params) ⇒
Creates without membrane tension surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| thickness | <code>Number</code> | Thickness index |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+LoadTransfer"></a>

### surface.LoadTransfer(no, boundary_lines, load_transfer_direction, load_distribution, comment, params) ⇒
Creates load transfer surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| load_transfer_direction | <code>String</code> | Load transfer direction, can be undefined (DIRECTION_IN_X as default) |
| load_distribution | <code>String</code> | Load distribution, can be undefined (UNIFORM as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+RemoveInfluenceFrom"></a>

### surface.RemoveInfluenceFrom(excluded_members_no, excluded_parallel_to_members, excluded_lines, excluded_parallel_to_lines, excluded_nodes)
Removes influence from members, lines and nodes

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| excluded_members_no | <code>Array</code> | Remove influence from members, can be undefined |
| excluded_parallel_to_members | <code>Array</code> | Remove influence from parallel to members, can be undefined |
| excluded_lines | <code>Array</code> | Remove influence from lines, can be undefined |
| excluded_parallel_to_lines | <code>Array</code> | Remove influence from parallel to lines, can be undefined |
| excluded_nodes | <code>Array</code> | Remove influence from nodes, can be undefined |

<a name="Surface+SurfaceWeight"></a>

### surface.SurfaceWeight(surface_weight)
Sets Load transfer surface's weight

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| surface_weight | <code>Number</code> | Surface weight |

<a name="Surface+ConsiderMemberEccentricity"></a>

### surface.ConsiderMemberEccentricity(consider_member_eccentricity)
Sets Load transfer surface's consider member eccentricity

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| consider_member_eccentricity | <code>Boolean</code> | Consider member eccentricity enabled/disabled, can be undefined (true as default) |

<a name="Surface+ConsiderSectionDistribution"></a>

### surface.ConsiderSectionDistribution(consider_section_distribution)
Sets Load transfer surface's consider section distribution

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| consider_section_distribution | <code>Boolean</code> | Consider section distribution enabled/disabled, can be undefined (true as default) |

<a name="Surface+AdvancedDistribution"></a>

### surface.AdvancedDistribution(stripe_width, sampling_factor, enabled)
Sets load transfer surface's advance distribution

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| stripe_width | <code>Number</code> | Strip width, can be undefined (0.01 as default) |
| sampling_factor | <code>Number</code> | Sampling factor, can be set only with varying load distribution, can be undefined (0.02 as default) |
| enabled | <code>Boolean</code> | Advance distribution enabled/disabled, can be undefined (true as default) |

<a name="Surface+NeglectEquilibriumOfMoments"></a>

### surface.NeglectEquilibriumOfMoments(neglect_equilibrium_of_moments)
Sets load transfer surface's neglect equilibrium of moments

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| neglect_equilibrium_of_moments | <code>Boolean</code> | Neglect equilibrium of moments enabled/disabled, can be undefined (true as default) |

<a name="Surface+SurfaceType"></a>

### surface.SurfaceType(stiffness_type, material, thickness)
Sets surface type with material and thickness

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| stiffness_type | <code>String</code> | Stiffness type |
| material | <code>Object</code> | Material, can be undefined |
| thickness | <code>Object</code> | Thickness, can be undefined |

<a name="Surface+Plane"></a>

### surface.Plane()
Sets plane geometry type of surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
<a name="Surface+Quadrangle"></a>

### surface.Quadrangle(no, boundary_lines, stiffness_type, thickness, boundary_line, corner_node_1, corner_node_2, corner_node_3, corner_node_4, comment, params)
Sets quadrangle geometry type of surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| stiffness_type | <code>String</code> | Stiffness type |
| thickness | <code>Number</code> | Thickness index, can be undefined |
| boundary_line | <code>Number</code> | Index of boundary line |
| corner_node_1 | <code>Number</code> | Quadrangle corner 1, can be undefined |
| corner_node_2 | <code>Number</code> | Quadrangle corner 2, can be undefined |
| corner_node_3 | <code>Number</code> | Quadrangle corner 3, can be undefined |
| corner_node_4 | <code>Number</code> | Quadrangle corner 4, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+NURBS"></a>

### surface.NURBS()
Sets NURBS geometry type of surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  
<a name="Surface+Rotated"></a>

### surface.Rotated(no, boundary_lines, thickness, boundary_line, angle_of_rotation, rotation_axis_p, rotation_axis_r, comment, params)
Sets rotated geometry type of surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| thickness | <code>Number</code> | Thickness index, can be undefined |
| boundary_line | <code>Number</code> | Index of boundary line |
| angle_of_rotation | <code>Number</code> | Angle of rotation, can be undefined |
| rotation_axis_p | <code>Array</code> | Rotation axis, point P ([X, Y, Z]). Can be undefined. |
| rotation_axis_r | <code>Array</code> | Rotation axis, point R ([X, Y, Z]). Can be undefined. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

<a name="Surface+Pipe"></a>

### surface.Pipe(center_line, radius)
Sets pipe geometry type of surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| center_line | <code>Number</code> | Index of center lineHeight |
| radius | <code>Number</code> | Radius |

<a name="Surface+Hinges"></a>

### surface.Hinges(hinges_values)
Sets surface hinges

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| hinges_values | <code>Array</code> | Line hinges values ([[line_no1, line_hinge_no1] ... [line_non, line_hinge_non]]) |

<a name="Surface+Support"></a>

### surface.Support(support)
Sets surface support

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| support | <code>Number</code> | Index of surface support |

<a name="Surface+Eccentricity"></a>

### surface.Eccentricity(eccentricity)
Sets surface eccentricity

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| eccentricity | <code>Number</code> | Index of surface eccentricity |

<a name="Surface+MeshRefinement"></a>

### surface.MeshRefinement(mesh_refinement, meshing_type)
Sets surface mesh refinement

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| mesh_refinement | <code>Number</code> | Index of surface mesh refinement |
| meshing_type | <code>Number</code> | Meshing type, can be undefined (According to global settings by default) 												1 - According to global settings 												2 - Mapped 												3 - Free |

<a name="Surface+SpecificAxes"></a>

### surface.SpecificAxes(input_axes, result_axes)
**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| input_axes | <code>Array</code> | Input axes values [category, [values], reverse_local_z_axis], can be undefined 											1 - Angular rotation category, values: [α, [X, Y, Z], [X2, Y2, Z2]], first and second point can be undefined 											2 - Axis parallel to lines category, values: [[line1_no, line2_no ... linen_no], axis (Axis x|Axis y)], second parameter can be undefined ("Axis x" as default) 											3 - Axis directed to point category, values: [[X1, Y1, Z1], [X2, Y2, Z2], axis (Axis x|Axis y)], third parameter can be undefined ("Axis x" by default) 											4 - Axis parallel to coordinate system category, values: [coordinate_system_no], can be undefined (Global XYZ by default) 											reverse_local_z_axis, can be undefined |
| result_axes | <code>Array</code> | Result axes values [category], can be undefined (Identical to input axes by default) 											1 - Identical to input axes category, by default |

<a name="Surface+GridForResults"></a>

### surface.GridForResults(grid_type, number_of_grid_points, grid_adapt_automatically, grid_distances, grid_rotation, grid_origin)
Sets surface's grid for results values

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| grid_type | <code>Number</code> | Grid type (1 - Cartesian, 2 - Polar) |
| number_of_grid_points | <code>Array</code> | Number of grid points in (-) and (+), can be undefined 													Grid type cartesian: [nx+, nx-, ny+, ny-] 													Grid type polar: [nr+] |
| grid_adapt_automatically | <code>Boolean</code> | Adapt automatically, can be undefined (true by default) |
| grid_distances | <code>Array</code> | Grid distances ([b, h]), can be undefined |
| grid_rotation | <code>Array</code> | Grid rotation ([α, β]), can be undefined |
| grid_origin | <code>Array</code> | Grid origin ([X, Y, Z]), can be undefined |

<a name="Surface+IntegratedObjects"></a>

### surface.IntegratedObjects(auto_detection_of_integrated_objects, integrated_nodes, integrated_lines, integrated_openings)
Sets integrated objects to surface

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| auto_detection_of_integrated_objects | <code>Boolean</code> | Integrated objects are detected automatically, can be undefined (true by default) |
| integrated_nodes | <code>Array</code> | List of integrated nodes indexes, can be undefined |
| integrated_lines | <code>Array</code> | List of integrated lines indexes, can be undefined |
| integrated_openings | <code>Array</code> | List of integrated openings indexes, can be undefined; |

<a name="Surface+ConcreteDesignProperties"></a>

### surface.ConcreteDesignProperties(enabled)
Enable / disable Design properties for surface (Concrete design add-on)

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Enable / disable Design properties, can be undefined (true as default) |

<a name="Surface+SetConcreteDesignPropertiesViaParentSurfaceSet"></a>

### surface.SetConcreteDesignPropertiesViaParentSurfaceSet(design_properties_via_parent_surface_set)
Sets Via parent surface set

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| design_properties_via_parent_surface_set | <code>Boolean</code> | Via parent surface set, can be undefined (true as default) |

<a name="Surface+SetUserDefinedConcreteCover"></a>

### surface.SetUserDefinedConcreteCover(concrete_cover_top, concrete_cover_bottom, is_user_defined_concrete_cover_enabled)
Sets User-defined concrete cover

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| concrete_cover_top | <code>Number</code> | Concrete cover top, can be undefined (is not set, 30 mm as default). For EN must be is_user_defined_concrete_cover_enabled set true |
| concrete_cover_bottom | <code>Number</code> | Concrete cover bottom, can be undefined (is not set, 30 mm as default). For EN must be is_user_defined_concrete_cover_enabled set true |
| is_user_defined_concrete_cover_enabled | <code>Boolean</code> | Enable/disable user-defined values, can be undefined (true as default). Has meaning only for EN standard. |

<a name="Surface+SetConcreteCoverAccToEn1992"></a>

### surface.SetConcreteCoverAccToEn1992()
Sets Concrete Cover Acc. to EN 1992 | CEN | 2014-11

**Kind**: instance method of [<code>Surface</code>](#Surface)  
<a name="Surface+SetAssignments"></a>

### surface.SetAssignments(surface_concrete_design_uls_configuration, surface_concrete_design_sls_configuration)
Sets Assignments

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| surface_concrete_design_uls_configuration | <code>Number</code> | Ultimate configuration, can be undefined (empty by default) |
| surface_concrete_design_sls_configuration | <code>Number</code> | Serviceability configuration, can be undefined (empty by default) |

<a name="Surface+SetConcreteDesignReinforcementDirections"></a>

### surface.SetConcreteDesignReinforcementDirections(reinforcement_direction_top, reinforcement_direction_bottom)
Sets Reinforcement directions

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| reinforcement_direction_top | <code>Number</code> | Reinforcement direction number for top surface side |
| reinforcement_direction_bottom | <code>Number</code> | Reinforcement direction number for bottom surface side |

<a name="Surface+SetConcreteDesignConcreteDurability"></a>

### surface.SetConcreteDesignConcreteDurability(concrete_durability_top, concrete_durability_bottom)
Sets Concrete durabilities

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| concrete_durability_top | <code>Number</code> | Concrete durability number for top surface side |
| concrete_durability_bottom | <code>Number</code> | Concrete durability number for bottom surface side |

<a name="Surface+SetConcreteDesignSurfaceReinforcement"></a>

### surface.SetConcreteDesignSurfaceReinforcement(surface_reinforcement_nos)
Sets Surface reinforcements

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| surface_reinforcement_nos | <code>Array</code> | Array of surface reinforcements numbers |

<a name="Surface+SetDeflectionAnalysis"></a>

### surface.SetDeflectionAnalysis(deflection_check_surface_type, deflection_check_displacement_reference, deflection_check_reference_length_z_definition_type, deflection_check_reference_length_z)
Sets Deflection analysis

**Kind**: instance method of [<code>Surface</code>](#Surface)  

| Param | Type | Description |
| --- | --- | --- |
| deflection_check_surface_type | <code>String</code> | Surface type (DOUBLE_SUPPORTED, CANTILEVER), can be undefined (is not set, DOUBLE_SUPPORTED as default) |
| deflection_check_displacement_reference | <code>String</code> | Displacement reference (DEFORMED_USER_DEFINED_REFERENCE_PLANE, PARALLEL_SURFACE, UNDEFORMED_SYSTEM), can be undefined (is not set, UNDEFORMED_SYSTEM as default) |
| deflection_check_reference_length_z_definition_type | <code>String</code> | Definition type (MANUALLY, BY_MAXIMUM_BOUNDARY_LINE, BY_MINIMUM_BOUNDARY_LINE), can be undefined (is not set, BY_MAXIMUM_BOUNDARY_LINE as default) |
| deflection_check_reference_length_z | <code>Number</code> | Reference length, can be undefined |

<a name="SurfaceSet"></a>

## SurfaceSet
**Kind**: global class  

* [SurfaceSet](#SurfaceSet)
    * [new SurfaceSet(no, surfaces, surface_set_type, comment, params)](#new_SurfaceSet_new)
    * [.GetSurfaceSet()](#SurfaceSet+GetSurfaceSet) ⇒
    * [.GetNo()](#SurfaceSet+GetNo) ⇒
    * [.ContinuousSurfaces(no, surfaces, comment, params)](#SurfaceSet+ContinuousSurfaces)
    * [.GroupOfSurfaces(no, surfaces, comment, params)](#SurfaceSet+GroupOfSurfaces)

<a name="new_SurfaceSet_new"></a>

### new SurfaceSet(no, surfaces, surface_set_type, comment, params)
Create Surface Set

**Returns**: surfaceSet  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Surface Set |
| surfaces | <code>array</code> | List of surfaces |
| surface_set_type | <code>string</code> | Surface Set type |
| comment | <code>string</code> | Comment for the Surface Set |
| params | <code>dictionary</code> | Parameters of the Surface Set |

<a name="SurfaceSet+GetSurfaceSet"></a>

### surfaceSet.GetSurfaceSet() ⇒
**Kind**: instance method of [<code>SurfaceSet</code>](#SurfaceSet)  
**Returns**: Surface set object  
<a name="SurfaceSet+GetNo"></a>

### surfaceSet.GetNo() ⇒
**Kind**: instance method of [<code>SurfaceSet</code>](#SurfaceSet)  
**Returns**: Surface set number  
<a name="SurfaceSet+ContinuousSurfaces"></a>

### surfaceSet.ContinuousSurfaces(no, surfaces, comment, params)
Create Continuous Surfaces surfaceSet type

**Kind**: instance method of [<code>SurfaceSet</code>](#SurfaceSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Surface Set |
| surfaces | <code>array</code> | List of surfaces |
| comment | <code>string</code> | Comment for the Surface Set |
| params | <code>dictionary</code> | Parameters of the Surface Set |

<a name="SurfaceSet+GroupOfSurfaces"></a>

### surfaceSet.GroupOfSurfaces(no, surfaces, comment, params)
Create Group of Surfaces

**Kind**: instance method of [<code>SurfaceSet</code>](#SurfaceSet)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Surface Set |
| surfaces | <code>array</code> | List of surfaces |
| comment | <code>string</code> | Comment for the Surface Set |
| params | <code>dictionary</code> | Parameters of the Surface Set |

<a name="Thickness"></a>

## Thickness
**Kind**: global class  

* [Thickness](#Thickness)
    * [new Thickness(no, name, material, uniform_thickness_d, comment, params)](#new_Thickness_new)
    * [.GetThickness()](#Thickness+GetThickness) ⇒
    * [.GetNo()](#Thickness+GetNo) ⇒
    * [.Uniform(no, name, material, thickness, comment, params)](#Thickness+Uniform)
    * [.Variable_3Nodes(no, name, material, thicknessProperties, comment, params)](#Thickness+Variable_3Nodes)
    * [.Variable_2NodesAndDirection(no, name, material, thicknessProperties, comment, params)](#Thickness+Variable_2NodesAndDirection)
    * [.Variable_4SurfaceCorners(no, name, material, thicknessProperties, comment, params)](#Thickness+Variable_4SurfaceCorners)
    * [.Variable_Circle(no, name, material, thicknessProperties, comment, params)](#Thickness+Variable_Circle)
    * [.Layers(no, name, layers, comment, params)](#Thickness+Layers)
    * [.ShapeOrthotropy(no, name, layers, orthotropy_type, rotation_beta, consideration_of_self_weight, parameters, comment, params)](#Thickness+ShapeOrthotropy)
    * [.StiffnessMatrix(no, name, rotation_beta, consideration_of_self_weight, coefficient_of_thermal_expansion, stiffness_matrix, comment, params)](#Thickness+StiffnessMatrix)

<a name="new_Thickness_new"></a>

### new Thickness(no, name, material, uniform_thickness_d, comment, params)
Create Thickness

**Returns**: Thickness  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| uniform_thickness_d | <code>number</code> | Uniform thickness in meters. |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+GetThickness"></a>

### thickness.GetThickness() ⇒
**Kind**: instance method of [<code>Thickness</code>](#Thickness)  
**Returns**: Thickness object  
<a name="Thickness+GetNo"></a>

### thickness.GetNo() ⇒
**Kind**: instance method of [<code>Thickness</code>](#Thickness)  
**Returns**: Thickness number  
<a name="Thickness+Uniform"></a>

### thickness.Uniform(no, name, material, thickness, comment, params)
Create Uniform thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| thickness | <code>number</code> | Properties of thickness in format [thickness] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_3Nodes"></a>

### thickness.Variable\_3Nodes(no, name, material, thicknessProperties, comment, params)
Create Variable - 3 Nodes thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| thicknessProperties | <code>array</code> | Properties of thickness [thickness_1,node_1,thickness_2,node_2,thickness_3,node_3] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_2NodesAndDirection"></a>

### thickness.Variable\_2NodesAndDirection(no, name, material, thicknessProperties, comment, params)
Create Variable - 2 Nodes and Direction thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| thicknessProperties | <code>array</code> | Properties of thickness [thickness_1,node_1,thickness_2,node_2,direction] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_4SurfaceCorners"></a>

### thickness.Variable\_4SurfaceCorners(no, name, material, thicknessProperties, comment, params)
Create Variable - 4 Surface Corners thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| thicknessProperties | <code>array</code> | Properties of thickness [thickness_1,node_1,thickness_2,node_2,thickness_3,node_3,thickness_4,node_4] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_Circle"></a>

### thickness.Variable\_Circle(no, name, material, thicknessProperties, comment, params)
Create Variable - Circle thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| thicknessProperties | <code>array</code> | Properties of thickness [thickness_circle_center,thickness_circle_line] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Layers"></a>

### thickness.Layers(no, name, layers, comment, params)
Create Layers thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| layers | <code>array</code> | List of layers [[material,thickness,angle,comment],] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+ShapeOrthotropy"></a>

### thickness.ShapeOrthotropy(no, name, layers, orthotropy_type, rotation_beta, consideration_of_self_weight, parameters, comment, params)
Create Shape Orthotropy thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| layers | <code>array</code> | List of layers |
| orthotropy_type | <code>string</code> | Orthotropy Type |
| rotation_beta | <code>number</code> | Rotation about Z-axis of surface (Degree) |
| consideration_of_self_weight | <code>string</code> | Self-Weight definition |
| parameters | <code>array</code> | Parameters of Shame Orthotropy |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+StiffnessMatrix"></a>

### thickness.StiffnessMatrix(no, name, rotation_beta, consideration_of_self_weight, coefficient_of_thermal_expansion, stiffness_matrix, comment, params)
Create Stiffness Matrix thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| rotation_beta | <code>number</code> | Rotation about Z-axis of surface (Degree) |
| consideration_of_self_weight | <code>string</code> | Self-Weight definition |
| coefficient_of_thermal_expansion | <code>array</code> | Coefficient of thermal expansion |
| stiffness_matrix | <code>array</code> | Stiffness Matrix [[D11,D12,D13,D22,D23,D33],....] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Layer"></a>

## Layer(no, name, comment, params)
Creates Layer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Layer number, can be undefined |
| name | <code>String</code> | Name, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [Layer(no, name, comment, params)](#Layer)
    * [.GetNo()](#Layer+GetNo)
    * [.GetLayer()](#Layer+GetLayer)

<a name="Layer+GetNo"></a>

### layer.GetNo()
Returns layer number

**Kind**: instance method of [<code>Layer</code>](#Layer)  
<a name="Layer+GetLayer"></a>

### layer.GetLayer()
Returns Layer object

**Kind**: instance method of [<code>Layer</code>](#Layer)  
<a name="getRotationPlane"></a>

## getRotationPlane(rotation_plane) ⇒
Returns rotation plane from string representation (private)

**Kind**: global function  
**Returns**: Rotation plane  

| Param | Type | Description |
| --- | --- | --- |
| rotation_plane | <code>String</code> | Rotation plane (x-y, x-z) |

<a name="createBaseLine"></a>

## createBaseLine(no, nodes, comment, params) ⇒
Creates line (private)

**Kind**: global function  
**Returns**: Created line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of [Node](#Node) indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="setDistributionAtStart"></a>

## setDistributionAtStart()
Support function for section distributions (private), more info can be find there

**Kind**: global function  
<a name="setDistributionAtEnd"></a>

## setDistributionAtEnd()
Support function for section distributions (private), more info can be find there

**Kind**: global function  
<a name="setResultBeamObjects"></a>

## setResultBeamObjects(member, param1_to_set, param2_to_set, value) ⇒
Sets result beam objects

**Kind**: global function  
**Returns**: Modified member  

| Param | Type | Description |
| --- | --- | --- |
| member | <code>Object</code> | Member to be set |
| param1_to_set | <code>String</code> | Name of parameter for include/exclude "all" objects |
| param2_to_set | <code>String</code> | Name of parameter for include/exclude object's indexes |
| value | <code>Boolean/Array</code> | Value can be specified in two formats, as boolean or array with numbers |

<a name="createBaseMember"></a>

## createBaseMember(no, nodes_or_line, type, section_start, comment, params) ⇒
Creates member (private)

**Kind**: global function  
**Returns**: Created member  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member, can be undefined |
| nodes_or_line | <code>Array/Number</code> | List of node indexes or number of line |
| type | <code>String</code> | Type of member, can be undefined |
| section_start | <code>Number</code> | Section start, can be undefined. Section end is same as section start by default. To set section end specify distribution type. |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member's parameters, can be undefined |

<a name="createBaseRSectionElement"></a>

## createBaseRSectionElement(no, type, comment, params) ⇒
Create base RSection Element

**Kind**: global function  
**Returns**: Element  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Element, can be undefined |
| type | <code>String</code> | Type of Element |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="createBaseRSectionLine"></a>

## createBaseRSectionLine(no, type, comment, params) ⇒
Creates RSection base Line

**Kind**: global function  
**Returns**: Line  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Line, can be undefined |
| type | <code>String</code> | Type of Line |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="createBaseOpening"></a>

## createBaseOpening(no, boundary_lines, comment, params) ⇒
**Kind**: global function  
**Returns**: Opening  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Opening, can be undefined |
| boundary_lines | <code>Array</code> | Boundary lines |
| comment | <code>string</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="createBaseRSectionPart"></a>

## createBaseRSectionPart(no, comment, params) ⇒
Creates base RSection Part

**Kind**: global function  
**Returns**: Part  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Part, can be undefined |
| comment | <code>string</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="createBasePoint"></a>

## createBasePoint(no, coordinate_y, coordinate_z, comment, params) ⇒
Creates base RSection Point (private)

**Kind**: global function  
**Returns**: Point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Point, can be undefined |
| coordinate_y | <code>Number</code> | Coordinate Y |
| coordinate_z | <code>Number</code> | Coordinate Z |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="createBaseStressPoint"></a>

## createBaseStressPoint(no, comment, params) ⇒
Create RSection Stress Points

**Kind**: global function  
**Returns**: Stress point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Stress point, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="createSurfaceWithType"></a>

## createSurfaceWithType(no, boundary_lines, stiffness_type, thickness, comment, params) ⇒
Creates surface (private)

**Kind**: global function  
**Returns**: Created surface  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| stiffness_type | <code>String</code> | Stiffness type |
| thickness | <code>Number</code> | Thickness index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

