# Guide Objects

<a name="CoordinateSystem"></a>

## CoordinateSystem
**Kind**: global class

<a name="new_CoordinateSystem_new"></a>

### new CoordinateSystem(no, comment, params)
Creates coordinate system

**Returns**: <code>Object</code> - Created coordinate system

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of coordinate system, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional coordinate system parameters, can be undefined |

<a name="CoordinateSystem+Offset"></a>

### coordinateSystem.Offset(no, original_point, comment, params) ⇒
Create  coordinate system with "offset" type

**Kind**: instance method of [<code>CoordinateSystem</code>](#CoordinateSystem)
**Returns**: Created coordinate system

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of coordinate system, can be undefined |
| original_point | <code>Array</code> | Coordinates of original point |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="CoordinateSystem+ThreePoints"></a>

### coordinateSystem.ThreePoints(no, original_point, u_axis_point_coordinate, uw_plane_point_coordinate, comment, params) ⇒
Create  coordinate system with "3 Points" type

**Kind**: instance method of [<code>CoordinateSystem</code>](#CoordinateSystem)
**Returns**: Created coordinate system

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of coordinate system, can be undefined |
| original_point | <code>Array</code> | Coordinates of original point |
| u_axis_point_coordinate | <code>Array</code> | Coordinates of u axis point |
| uw_plane_point_coordinate | <code>Array</code> | Coordinates of uw plane point |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="CoordinateSystem+TwoPointsAndAngle"></a>

### coordinateSystem.TwoPointsAndAngle(no, original_point, uw_plane_point_coordinate, uw_plane_angle, comment, params) ⇒
Create  coordinate system with "2 Points and Angle" type

**Kind**: instance method of [<code>CoordinateSystem</code>](#CoordinateSystem)
**Returns**: Created coordinate system

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of coordinate system, can be undefined |
| original_point | <code>Array</code> | Coordinates of original point |
| uw_plane_point_coordinate | <code>Array</code> | Coordinates of uw plane point |
| uw_plane_angle | <code>Number</code> | Rotation of UW-plane in radians |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="CoordinateSystem+PointAndThreeAngels"></a>

### coordinateSystem.PointAndThreeAngels(no, original_point, rotation_angle_1, rotation_angle_2, rotation_angle_3, rotation_angles_sequence, comment, params) ⇒
Create  coordinate system with "Points and Three Angles" type

**Kind**: instance method of [<code>CoordinateSystem</code>](#CoordinateSystem)
**Returns**: Created coordinate system

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of coordinate system, can be undefined |
| original_point | <code>Array</code> | Coordinates of original point |
| rotation_angle_1 | <code>Number</code> | Rotational angle in radians, can be undefined |
| rotation_angle_2 | <code>Number</code> | Rotational angle in radians, can be undefined |
| rotation_angle_3 | <code>Number</code> | Rotational angle in radians, can be undefined |
| rotation_angles_sequence | <code>String</code> | Rotational angle sequence, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="createBaseCoordinateSystem"></a>
