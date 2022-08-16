# Basic Objects

## Line

**Kind**: global class

### new Line(no, nodes, comment, params)
Creates line

**Returns**: Created line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of node indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="new_Line_new"></a>

### new Line(no, comment, params)
Create RSection Line

**Returns**: line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Line |
| comment | <code>string</code> | Comment for the Line |
| params | <code>dictionary</code> | Parameters of the Line |

<a name="Line+Polyline"></a>

### line.Polyline(no, nodes, comment, params) ⇒
Creates polyline

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created polyline

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of node indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Arc"></a>

### line.Arc(no, nodes, control_point, arc_parameters, center_of_arc, alpha_adjustement_target, comment, params) ⇒
Creates arc line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created arc line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of node indexes |
| control_point | <code>Array</code> | Control point of arc |
| arc_parameters | <code>Array</code> | Arc's parameters, can be undefined (only one of three parameter can be set, when arc parameter is set, other parameters (control point) will be recalculated) |
| center_of_arc | <code>Array</code> | Center of arc, can be undefined (when center of is set, control point will be recalculated) |
| alpha_adjustement_target | <code>Number</code> | Subsequent adjustment of α by displacing node at: 														1 - Beginning of arc 														2 - Arc control point 														3 - End of arc |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Circle"></a>

### line.Circle(no, center_of_circle, circle_radius, normal_point, comment, params) ⇒
Creates circle line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created circle line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| center_of_circle | <code>Array</code> | Center point of circle |
| circle_radius | <code>Number</code> | Radius of circle, can be undefined |
| normal_point | <code>Array</code> | Point of normal ti circle plane, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+EllipticalArc"></a>

### line.EllipticalArc(no, control_point_1, control_point_2, perimeter_point, elliptical_arc_alpha, elliptical_arc_beta, comment, params) ⇒
Creates elliptical arc line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created elliptical arc line

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

### line.Ellipse(no, nodes, control_point, comment, params) ⇒
Creates ellipse line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created ellipse line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of ellipse |
| control_point | <code>Array</code> | Control point |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Parabola"></a>

### line.Parabola(no, nodes, control_point, parabola_alpha, comment, params) ⇒
Creates parabola line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created parabola line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of parabola |
| control_point | <code>Array</code> | Control point |
| parabola_alpha | <code>Number</code> | Parabola's parameter α |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Spline"></a>

### line.Spline(no, nodes, comment, params) ⇒
Creates spline

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created spline

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of spline |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+NURBS"></a>

### line.NURBS(no, nodes, control_points_by_components, nurbs_order, comment, params) ⇒
Creates NURBS line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created NURBS line

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

<a name="Line+AssignMember"></a>

### line.AssignMember()
Sets new default beam member to line

**Kind**: instance method of [<code>Line</code>](#Line)
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
<a name="new_Material_new"></a>

### new Material(no, name, comment, params)
Create Material

**Returns**: material

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Material |
| name | <code>string</code> | Name of Material |
| comment | <code>string</code> | Comment for the Material |
| params | <code>dictionary</code> | Parameters of the Material |

<a name="Member"></a>

## Member
**Kind**: global class

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

<a name="MemberSet"></a>

## MemberSet
**Kind**: global class

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

<a name="Node"></a>

## Node
**Kind**: global class

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

### node.Standard(no, coordinate_system, coordinate_system_type, comment, params)
Create Standard node

**Kind**: instance method of [<code>Node</code>](#Node)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Node |
| coordinate_system | <code>array</code> | Coordinate of node in format [x, y, z] |
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

<a name="new_Opening_new"></a>

### new Opening(no, comment, params)
Create RSection Opening

**Returns**: opening

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Opening |
| comment | <code>string</code> | Comment for the Opening |
| params | <code>dictionary</code> | Parameters of the Opening |

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

<a name="Element"></a>

## Element
**Kind**: global class
<a name="new_Element_new"></a>

### new Element(no, comment, params)
Create RSection Elements

**Returns**: element

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Element |
| comment | <code>string</code> | Comment for the Element |
| params | <code>dictionary</code> | Parameters of the Element |

<a name="Line"></a>

## Line
**Kind**: global class

<a name="new_Line_new"></a>

### new Line(no, nodes, comment, params)
Creates line

**Returns**: Created line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of node indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="new_Line_new"></a>

### new Line(no, comment, params)
Create RSection Line

**Returns**: line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Line |
| comment | <code>string</code> | Comment for the Line |
| params | <code>dictionary</code> | Parameters of the Line |

<a name="Line+Polyline"></a>

### line.Polyline(no, nodes, comment, params) ⇒
Creates polyline

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created polyline

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of node indexes |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Arc"></a>

### line.Arc(no, nodes, control_point, arc_parameters, center_of_arc, alpha_adjustement_target, comment, params) ⇒
Creates arc line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created arc line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | List of node indexes |
| control_point | <code>Array</code> | Control point of arc |
| arc_parameters | <code>Array</code> | Arc's parameters, can be undefined (only one of three parameter can be set, when arc parameter is set, other parameters (control point) will be recalculated) |
| center_of_arc | <code>Array</code> | Center of arc, can be undefined (when center of is set, control point will be recalculated) |
| alpha_adjustement_target | <code>Number</code> | Subsequent adjustment of α by displacing node at: 														1 - Beginning of arc 														2 - Arc control point 														3 - End of arc |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Circle"></a>

### line.Circle(no, center_of_circle, circle_radius, normal_point, comment, params) ⇒
Creates circle line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created circle line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| center_of_circle | <code>Array</code> | Center point of circle |
| circle_radius | <code>Number</code> | Radius of circle, can be undefined |
| normal_point | <code>Array</code> | Point of normal ti circle plane, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+EllipticalArc"></a>

### line.EllipticalArc(no, control_point_1, control_point_2, perimeter_point, elliptical_arc_alpha, elliptical_arc_beta, comment, params) ⇒
Creates elliptical arc line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created elliptical arc line

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

### line.Ellipse(no, nodes, control_point, comment, params) ⇒
Creates ellipse line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created ellipse line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of ellipse |
| control_point | <code>Array</code> | Control point |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Parabola"></a>

### line.Parabola(no, nodes, control_point, parabola_alpha, comment, params) ⇒
Creates parabola line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created parabola line

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of parabola |
| control_point | <code>Array</code> | Control point |
| parabola_alpha | <code>Number</code> | Parabola's parameter α |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+Spline"></a>

### line.Spline(no, nodes, comment, params) ⇒
Creates spline

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created spline

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of line, can be undefined |
| nodes | <code>Array</code> | Nodes of spline |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Line's parameters, can be undefined |

<a name="Line+NURBS"></a>

### line.NURBS(no, nodes, control_points_by_components, nurbs_order, comment, params) ⇒
Creates NURBS line

**Kind**: instance method of [<code>Line</code>](#Line)
**Returns**: Created NURBS line

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

<a name="Line+AssignMember"></a>

### line.AssignMember()
Sets new default beam member to line

**Kind**: instance method of [<code>Line</code>](#Line)
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

<a name="new_Opening_new"></a>

### new Opening(no, comment, params)
Create RSection Opening

**Returns**: opening

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Opening |
| comment | <code>string</code> | Comment for the Opening |
| params | <code>dictionary</code> | Parameters of the Opening |

<a name="Part"></a>

## Part
**Kind**: global class
<a name="new_Part_new"></a>

### new Part(no, comment, params)
Create RSection Part

**Returns**: part

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Part |
| comment | <code>string</code> | Comment for the Part |
| params | <code>dictionary</code> | Parameters of the Part |

<a name="Point"></a>

## Point
**Kind**: global class
<a name="new_Point_new"></a>

### new Point(no, coordinate_Y, coordinate_Z, comment, params)
Create RSection Point

**Returns**: point

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Point |
| coordinate_Y | <code>number</code> | Coordinate Y |
| coordinate_Z | <code>number</code> | Coordinate Z |
| comment | <code>string</code> | Comment for the Point |
| params | <code>dictionary</code> | Parameters of the Point |

<a name="Stiffener"></a>

## Stiffener
**Kind**: global class
<a name="new_Stiffener_new"></a>

### new Stiffener(no, comment, params)
Create RSection Stiffener

**Returns**: stiffener

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Stiffener |
| comment | <code>string</code> | Comment for the Stiffener |
| params | <code>dictionary</code> | Parameters of the Stiffener |

<a name="StressPoint"></a>

## StressPoint
**Kind**: global class
<a name="new_StressPoint_new"></a>

### new StressPoint(no, comment, params)
Create RSection Stress Points

**Returns**: stress point

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Node |
| comment | <code>string</code> | Comment for the Stress Point |
| params | <code>dictionary</code> | Parameters of the Stress Point |

<a name="Subpanel"></a>

## Subpanel
**Kind**: global class
<a name="new_Subpanel_new"></a>

### new Subpanel(no, comment, params)
Create RSection Subpanel

**Returns**: subpanel

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Subpanel |
| comment | <code>string</code> | Comment for the Subpanel |
| params | <code>dictionary</code> | Parameters of the Subpanel |

<a name="Section"></a>

## Section
**Kind**: global class
<a name="new_Section_new"></a>

### new Section(no, name, material, comment, params)
Create Section

**Returns**: section

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of the Section |
| name | <code>string</code> | Name of the Section |
| material | <code>int</code> | Number of the material |
| comment | <code>string</code> | Comment for the Opening |
| params | <code>dictionary</code> | Parameters of the Opening |

<a name="Solid"></a>

## Solid
**Kind**: global class

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

<a name="Surface"></a>

## Surface
**Kind**: global class

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

### surface.LoadTransfer(no, boundary_lines, values, comment, params) ⇒
Creates load transfer surface

**Kind**: instance method of [<code>Surface</code>](#Surface)
**Returns**: Created surface

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
| values | <code>Array</code> | Load transfer's parameters, can be undefined 											[load_transfer_direction, surface_weight, consider_member_eccentricity, consider_section_distribution 											excluded_members, excluded_parallel_to_members, excluded_lines, excluded_parallel_to_lines, 											loaded_lines, loaded_members] |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Surface's parameters, can be undefined |

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

### surface.Quadrangle(no, boundary_lines, thickness, boundary_line, corner_node_1, corner_node_2, corner_node_3, corner_node_4, comment, params)
Sets quadrangle geometry type of surface

**Kind**: instance method of [<code>Surface</code>](#Surface)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of surface, can be undefined |
| boundary_lines | <code>Array</code> | List of boundary lines indexes |
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

### surface.GridForResults(grid_type, number_of_grid_points, grid_adapt_automatically, grid_distancies, grid_rotation, grid_origin)
Sets surface's grid for results values

**Kind**: instance method of [<code>Surface</code>](#Surface)

| Param | Type | Description |
| --- | --- | --- |
| grid_type | <code>Number</code> | Grid type (1 - Cartesian, 2 - Polar) |
| number_of_grid_points | <code>Array</code> | Number of grid points in (-) and (+), can be undefined 													Grid type cartesian: [nx+, nx-, ny+, ny-] 													Grid type polar: [nr+] |
| grid_adapt_automatically | <code>Boolean</code> | Adapt automatically, can be undefined (true by default) |
| grid_distancies | <code>Array</code> | Grid distancies ([b, h]), can be undefined |
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

<a name="SurfaceSet"></a>

## SurfaceSet
**Kind**: global class

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

<a name="Thickness+Uniform"></a>

### thickness.Uniform(no, name, material, properties, comment, params)
Create Uniform thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| properties | <code>array</code> | Properties of thickness in format [thickness] |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_3Nodes"></a>

### thickness.Variable\_3Nodes(no, name, material, properties, comment, params)
Create Variable - 3 Nodes thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| properties | <code>array</code> | Properties of thickness |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_2NodesAndDirection"></a>

### thickness.Variable\_2NodesAndDirection(no, name, material, properties, comment, params)
Create Variable - 2 Nodes and Direction thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| properties | <code>array</code> | Properties of thickness |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_4SurfaceCorners"></a>

### thickness.Variable\_4SurfaceCorners(no, name, material, properties, comment, params)
Create Variable - 4 Surface Corners thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| properties | <code>array</code> | Properties of thickness |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="Thickness+Variable_Circle"></a>

### thickness.Variable\_Circle(no, name, material, properties, comment, params)
Create Variable - Circle thickness

**Kind**: instance method of [<code>Thickness</code>](#Thickness)

| Param | Type | Description |
| --- | --- | --- |
| no | <code>int</code> | Number of Thickness |
| name | <code>string</code> | Name of the Thickness |
| material | <code>int</code> | Number of material |
| properties | <code>array</code> | Properties of thickness |
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
| layers | <code>array</code> | List of layers |
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
| stiffness_matrix | <code>array</code> | Stiffness Matrix |
| comment | <code>string</code> | Comment for the Thickness |
| params | <code>dictionary</code> | Parameters of the Thickness |

<a name="getRotationPlane"></a>

