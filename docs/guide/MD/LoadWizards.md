# Load Wizards

<a name="MemberLoadFromAreaLoadWizard"></a>

## MemberLoadFromAreaLoadWizard
**Kind**: global class  

<a name="new_MemberLoadFromAreaLoadWizard_new"></a>

### new MemberLoadFromAreaLoadWizard(no, load_case, comment, params)
Creates member load wizard


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberLoadFromAreaLoadWizard+Uniform"></a>

### memberLoadFromAreaLoadWizard.Uniform(no, load_case, uniform_magnitude, coordinate_system, load_direction, comment, params)
Creates uniform member load wizard

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| uniform_magnitude | <code>Number</code> | Uniform load magnitude |
| coordinate_system | <code>Number</code> | Index of coordinate system, can be undefined (Global XYZ as default) |
| load_direction | <code>String</code> | Load direction, can be undefined (ZA as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberLoadFromAreaLoadWizard+Linear"></a>

### memberLoadFromAreaLoadWizard.Linear(no, load_case, magnitude_1, node_1, magnitude_2, node_2, magnitude_3, node_3, coordinate_system, load_direction, comment, params)
Creates linear member load wizard

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| magnitude_1 | <code>Number</code> | First area load magnitude |
| node_1 | <code>Number</code> | Index of first node |
| magnitude_2 | <code>Number</code> | Second area load magnitude |
| node_2 | <code>Number</code> | Index of second node |
| magnitude_3 | <code>Number</code> | Third area load magnitude |
| node_3 | <code>Number</code> | Index of third node |
| coordinate_system | <code>Number</code> | Index of coordinate system, can be undefined (Global XYZ as default) |
| load_direction | <code>String</code> | Load direction, can be undefined (ZA as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberLoadFromAreaLoadWizard+VaryingInX"></a>

### memberLoadFromAreaLoadWizard.VaryingInX(no, load_case, load_distribution_values, coordinate_system, load_direction, comment, params)
Creates varying in X member load wizard

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load wizard |
| load_case | <code>Object</code> | Load case |
| load_distribution_values | <code>Array</code> | Load distribution values ([Y1, ΔY1, p1, ... Yn, ΔYn, pn]) |
| coordinate_system | <code>Number</code> | Index of coordinate system, can be undefined (Global XYZ as default) |
| load_direction | <code>String</code> | Load direction, can be undefined (ZA as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberLoadFromAreaLoadWizard+VaryingInY"></a>

### memberLoadFromAreaLoadWizard.VaryingInY(no, load_case, load_distribution_values, coordinate_system, load_direction, comment, params)
Creates varying in Y member load wizard

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load wizard |
| load_case | <code>Object</code> | Load case |
| load_distribution_values | <code>Array</code> | Load distribution values ([Y1, ΔY1, p1, ... Yn, ΔYn, pn]) |
| coordinate_system | <code>Number</code> | Index of coordinate system, can be undefined (Global XYZ as default) |
| load_direction | <code>String</code> | Load direction, can be undefined (ZA as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberLoadFromAreaLoadWizard+VaryingInZ"></a>

### memberLoadFromAreaLoadWizard.VaryingInZ(no, load_case, load_distribution_values, coordinate_system, load_direction, comment, params)
Creates varying in Z member load wizard

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member load wizard |
| load_case | <code>Object</code> | Load case |
| load_distribution_values | <code>Array</code> | Load distribution values ([Y1, ΔY1, p1, ... Yn, ΔYn, pn]) |
| coordinate_system | <code>Number</code> | Index of coordinate system, can be undefined (Global XYZ as default) |
| load_direction | <code>String</code> | Load direction, can be undefined (ZA as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberLoadFromAreaLoadWizard+SetCornerNodes"></a>

### memberLoadFromAreaLoadWizard.SetCornerNodes(corner_nodes)
Sets corner nodes for member load from area load wizard

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| corner_nodes | <code>Array</code> | Corner nodes (["1,2,3", "4-8", ...]) |

<a name="MemberLoadFromAreaLoadWizard+SetExcludedMembers"></a>

### memberLoadFromAreaLoadWizard.SetExcludedMembers(excluded_members, excluded_parallel_members)
Sets excluded members for member load from area load wizard

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| excluded_members | <code>Array</code> | Single members |
| excluded_parallel_members | <code>Array</code> | Members parallel to member |

<a name="MemberLoadFromAreaLoadWizard+LockForNewMembers"></a>

### memberLoadFromAreaLoadWizard.LockForNewMembers(lock_for_new_members)
Sets lock for new members

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| lock_for_new_members | <code>Boolean</code> | Lock for new members, can be undefined (true as default) |

<a name="MemberLoadFromAreaLoadWizard+SmoothConcentratedLoad"></a>

### memberLoadFromAreaLoadWizard.SmoothConcentratedLoad(smooth_punctual_load_enabled)
Sets smooth concentrated load

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| smooth_punctual_load_enabled | <code>Boolean</code> | Smooth concentrated load enabled, can be undefined (true as default) |

<a name="MemberLoadFromAreaLoadWizard+ConsiderMemberEccentricity"></a>

### memberLoadFromAreaLoadWizard.ConsiderMemberEccentricity(consider_member_eccentricity)
Sets consider member eccentricity

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| consider_member_eccentricity | <code>Boolean</code> | Consider member eccentricity, can be undefined (true as default) |

<a name="MemberLoadFromAreaLoadWizard+ConsiderSectionDistribution"></a>

### memberLoadFromAreaLoadWizard.ConsiderSectionDistribution(consider_section_distribution)
Sets consider section distribution

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| consider_section_distribution | <code>Boolean</code> | Consider section distribution, can be undefined (true as default) |

<a name="MemberLoadFromAreaLoadWizard+AbsoluteToleranceForMembersOnPlane"></a>

### memberLoadFromAreaLoadWizard.AbsoluteToleranceForMembersOnPlane(absolute_tolerance)
Sets absolute tolerance for member on plane

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| absolute_tolerance | <code>Number</code> | Absolute tolerance by distance, can be undefined (0.0005 as default) |

<a name="MemberLoadFromAreaLoadWizard+RelativeToleranceForMembersOnPlane"></a>

### memberLoadFromAreaLoadWizard.RelativeToleranceForMembersOnPlane(relative_tolerance)
Sets relative tolerance for member on plane

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| relative_tolerance | <code>Number</code> | Relative tolerance by angle, can be undefined (1.0 by default) |

<a name="MemberLoadFromAreaLoadWizard+AbsoluteToleranceForNodesOnLine"></a>

### memberLoadFromAreaLoadWizard.AbsoluteToleranceForNodesOnLine(absolute_tolerance)
Sets absolute tolerance for nodes on line

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| absolute_tolerance | <code>Number</code> | Absolute tolerance by distance, can be undefined (0.0005 as default) |

<a name="MemberLoadFromAreaLoadWizard+RelativeToleranceForNodesOnLine"></a>

### memberLoadFromAreaLoadWizard.RelativeToleranceForNodesOnLine(relative_tolerance)
Sets relative tolerance for nodes on line

**Kind**: instance method of [<code>MemberLoadFromAreaLoadWizard</code>](#MemberLoadFromAreaLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| relative_tolerance | <code>Number</code> | Relative tolerance by angle, can be undefined (1.0 by default) |

<a name="MemberLoadFromFreeLineLoadWizard"></a>

## MemberLoadFromFreeLineLoadWizard
**Kind**: global class  

<a name="new_MemberLoadFromFreeLineLoadWizard_new"></a>

### new MemberLoadFromFreeLineLoadWizard(no, load_case, comment, params)
Creates member load wizard


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberLoadFromFreeLineLoadWizard+Uniform"></a>

### memberLoadFromFreeLineLoadWizard.Uniform(no, load_case, uniform_magnitude, node_1, node_2, coordinate_system, load_direction, comment, params)
Creates uniform member load wizard

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| uniform_magnitude | <code>Number</code> | Uniform load magnitude |
| node_1 | <code>Number</code> | Index of first node |
| node_2 | <code>Number</code> | Index of second node |
| coordinate_system | <code>Number</code> | Index of coordinate system, can be undefined (Global XYZ as default) |
| load_direction | <code>String</code> | Load direction, can be undefined (ZA as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberLoadFromFreeLineLoadWizard+Linear"></a>

### memberLoadFromFreeLineLoadWizard.Linear(no, load_case, magnitude_1, node_1, magnitude_2, node_2, coordinate_system, load_direction, comment, params)
Creates linear member load wizard

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| magnitude_1 | <code>Number</code> | First area load magnitude |
| node_1 | <code>Number</code> | Index of first node |
| magnitude_2 | <code>Number</code> | Second area load magnitude |
| node_2 | <code>Number</code> | Index of second node |
| coordinate_system | <code>Number</code> | Index of coordinate system, can be undefined (Global XYZ as default) |
| load_direction | <code>String</code> | Load direction, can be undefined (ZA as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberLoadFromFreeLineLoadWizard+AbsoluteToleranceForMembersOnPlane"></a>

### memberLoadFromFreeLineLoadWizard.AbsoluteToleranceForMembersOnPlane(absolute_tolerance)
Sets absolute tolerance for member on plane

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| absolute_tolerance | <code>Number</code> | Absolute tolerance by distance, can be undefined (0.0005 as default) |

<a name="MemberLoadFromFreeLineLoadWizard+RelativeToleranceForMembersOnPlane"></a>

### memberLoadFromFreeLineLoadWizard.RelativeToleranceForMembersOnPlane(relative_tolerance)
Sets relative tolerance for member on plane

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| relative_tolerance | <code>Number</code> | Relative tolerance by angle, can be undefined (1.0 by default) |

<a name="MemberLoadFromFreeLineLoadWizard+AbsoluteToleranceForNodesOnLine"></a>

### memberLoadFromFreeLineLoadWizard.AbsoluteToleranceForNodesOnLine(absolute_tolerance)
Sets absolute tolerance for nodes on line

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| absolute_tolerance | <code>Number</code> | Absolute tolerance by distance, can be undefined (0.0005 as default) |

<a name="MemberLoadFromFreeLineLoadWizard+RelativeToleranceForNodesOnLine"></a>

### memberLoadFromFreeLineLoadWizard.RelativeToleranceForNodesOnLine(relative_tolerance)
Sets relative tolerance for nodes on line

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| relative_tolerance | <code>Number</code> | Relative tolerance by angle, can be undefined (1.0 by default) |

<a name="MemberLoadFromFreeLineLoadWizard+ExcludedMembers"></a>

### memberLoadFromFreeLineLoadWizard.ExcludedMembers(excluded_members, excluded_parallel_members)
Sets excluded members

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| excluded_members | <code>Array</code> | List of excluded member indexes, can be undefined |
| excluded_parallel_members | <code>Array</code> | List of excluded parallel members, can be undefined |

<a name="MemberLoadFromFreeLineLoadWizard+LockForNewMembers"></a>

### memberLoadFromFreeLineLoadWizard.LockForNewMembers(lock_for_new_members)
Sets lock for new members

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| lock_for_new_members | <code>Boolean</code> | Lock for new members, can be undefined (true as default) |

<a name="MemberLoadFromFreeLineLoadWizard+ConsiderMemberEccentricity"></a>

### memberLoadFromFreeLineLoadWizard.ConsiderMemberEccentricity(consider_member_eccentricity)
Sets consider member eccentricity

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| consider_member_eccentricity | <code>Boolean</code> | Consider member eccentricity, can be undefined (true as default) |

<a name="MemberLoadFromFreeLineLoadWizard+ConsiderSectionDistribution"></a>

### memberLoadFromFreeLineLoadWizard.ConsiderSectionDistribution(consider_section_distribution)
Sets consider section distribution

**Kind**: instance method of [<code>MemberLoadFromFreeLineLoadWizard</code>](#MemberLoadFromFreeLineLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| consider_section_distribution | <code>Boolean</code> | Consider section distribution, can be undefined (true as default) |

<a name="SnowLoadWizard"></a>

## SnowLoadWizard
**Kind**: global class  

<a name="new_SnowLoadWizard_new"></a>

### new SnowLoadWizard(no, comment, params)
Creates empty snow load wizard


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Snow load wizard index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="SnowLoadWizard+SetMonoPitchRoofType"></a>

### snowLoadWizard.SetMonoPitchRoofType(no, roof_corner_nodes, load_case, comment, params)
Creates flat/monopitch snow load wizard

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Snow load wizard index, can be undefined |
| roof_corner_nodes | <code>Array</code> | Roofs corner nodes indexes |
| load_case | <code>Object</code> | Load case |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="SnowLoadWizard+SetDuopitch"></a>

### snowLoadWizard.SetDuopitch(no, roof_corner_nodes, load_case_1, load_case_2, load_case_3, comment, params)
Creates duopitch snow load wizard

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Snow load wizard index, can be undefined |
| roof_corner_nodes | <code>Array</code> | Roofs corner nodes indexes |
| load_case_1 | <code>Object</code> | Load case (Case i) |
| load_case_2 | <code>Object</code> | Load case (Case ii) |
| load_case_3 | <code>Object</code> | Load case (Case iii) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="SnowLoadWizard+SetLoadedRoofs"></a>

### snowLoadWizard.SetLoadedRoofs(loaded_planes_accessibility)
Sets loaded roofs

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| loaded_planes_accessibility | <code>Array</code> | Enable or disable loaded roofs (array of booleans [roof1 | roof1, roof2]) |

<a name="SnowLoadWizard+WithoutLoadsOnMembers"></a>

### snowLoadWizard.WithoutLoadsOnMembers(objects_without_loads, objects_without_loads_parallel_to)
Generated on members

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| objects_without_loads | <code>Array</code> | Without load on members, can be undefined |
| objects_without_loads_parallel_to | <code>Array</code> | Without load parallel to members, can be undefined |

<a name="SnowLoadWizard+WithoutLoadsOnSurfaces"></a>

### snowLoadWizard.WithoutLoadsOnSurfaces(objects_without_loads, objects_without_loads_parallel_to)
Generated on surfaces

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| objects_without_loads | <code>Array</code> | Without load on surfaces, can be undefined |
| objects_without_loads_parallel_to | <code>Array</code> | Without load parallel to surfaces, can be undefined |

<a name="SnowLoadWizard+WithoutLoadsOnLines"></a>

### snowLoadWizard.WithoutLoadsOnLines(objects_without_loads, objects_without_loads_parallel_to)
Generated on lines

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| objects_without_loads | <code>Array</code> | Without load on lines, can be undefined |
| objects_without_loads_parallel_to | <code>Array</code> | Without load parallel to lines, can be undefined |

<a name="SnowLoadWizard+SnowOverhang"></a>

### snowLoadWizard.SnowOverhang(enabled)
Sets snow overhang

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="SnowLoadWizard+SnowGuard"></a>

### snowLoadWizard.SnowGuard(enabled)
Sets snow guard

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="SnowLoadWizard+LockForNewObjects"></a>

### snowLoadWizard.LockForNewObjects(enabled)
Sets lock for new members

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="SnowLoadWizard+ConsiderMemberEccentricity"></a>

### snowLoadWizard.ConsiderMemberEccentricity(enabled)
Sets consider member eccentricity

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="SnowLoadWizard+ConsiderSectionDistribution"></a>

### snowLoadWizard.ConsiderSectionDistribution(enabled)
Sets consider section distribution

**Kind**: instance method of [<code>SnowLoadWizard</code>](#SnowLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="WindLoadWizard"></a>

## WindLoadWizard
**Kind**: global class  

<a name="new_WindLoadWizard_new"></a>

### new WindLoadWizard(no, comment, params)
Creates empty wind load wizard


| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Wind load wizard index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="WindLoadWizard+WallsRoofMonopitch"></a>

### windLoadWizard.WallsRoofMonopitch(no, base_corner_nodes, roof_corner_nodes, load_cases, wind_directions, comment, params)
Creates vertical walls with flat/monopitch roof

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Wind load wizard index, can be undefined |
| base_corner_nodes | <code>Array</code> | Base corner nodes indexes |
| roof_corner_nodes | <code>Array</code> | Roof corner nodes indexes |
| load_cases | <code>Array</code> | Load case 1, load case 2 |
| wind_directions | <code>Array</code> | Wind directions (roof sides accessibility), can be undefined, for info setWindDirections function |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="WindLoadWizard+WallsRoofDuoPitch"></a>

### windLoadWizard.WallsRoofDuoPitch(no, base_corner_nodes, roof_corner_nodes, load_cases, wind_directions, comment, params)
Creates vertical walls with duopitch roof

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Wind load wizard index, can be undefined |
| base_corner_nodes | <code>Array</code> | Base corner nodes indexes |
| roof_corner_nodes | <code>Array</code> | Roof corner nodes indexes |
| load_cases | <code>Array</code> | Load cases |
| wind_directions | <code>Array</code> | Wind directions (roof sides accessibility), can be undefined, for info setWindDirections function |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="WindLoadWizard+RoofMonoPitch"></a>

### windLoadWizard.RoofMonoPitch(no, roof_corner_nodes, load_cases, wind_directions, comment, params)
Creates flat/monopitch roof

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Wind load wizard index, can be undefined |
| roof_corner_nodes | <code>Array</code> | Roof corner nodes indexes |
| load_cases | <code>Array</code> | Load cases |
| wind_directions | <code>Array</code> | Wind directions (roof sides accessibility), can be undefined, for info setWindDirections function |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="WindLoadWizard+RoofDuopitch"></a>

### windLoadWizard.RoofDuopitch(no, roof_corner_nodes, load_cases, wind_directions, comment, params)
Creates duopitch roof

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Wind load wizard index, can be undefined |
| roof_corner_nodes | <code>Array</code> | Roof corner nodes indexes |
| load_cases | <code>Array</code> | Load cases |
| wind_directions | <code>Array</code> | Wind directions (roof sides accessibility), can be undefined, for info setWindDirections function |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="WindLoadWizard+SetLoadedWallsAndRoofs"></a>

### windLoadWizard.SetLoadedWallsAndRoofs(roofs_accessibility)
Sets loaded walls/roofs

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| roofs_accessibility | <code>Array</code> | Roofs/walls accessibility                                      [Wall 1, Wall 2, Wall 3, Wall4] (Vertical walls with flat/monopitch roof, Vertical walls with duopitch roof)                                      [Roof 1] (Flat/monopitch roof)                                      [Roof 1, Roof 2] (Duopitch roof) |

<a name="WindLoadWizard+WithoutLoadsOnMembers"></a>

### windLoadWizard.WithoutLoadsOnMembers(objects_without_loads, objects_without_loads_parallel_to)
Generated on members

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| objects_without_loads | <code>Array</code> | Without load on members, can be undefined |
| objects_without_loads_parallel_to | <code>Array</code> | Without load parallel to members, can be undefined |

<a name="WindLoadWizard+WithoutLoadsOnSurfaces"></a>

### windLoadWizard.WithoutLoadsOnSurfaces(objects_without_loads, objects_without_loads_parallel_to)
Generated on surfaces

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| objects_without_loads | <code>Array</code> | Without load on surfaces, can be undefined |
| objects_without_loads_parallel_to | <code>Array</code> | Without load parallel to surfaces, can be undefined |

<a name="WindLoadWizard+WithoutLoadsOnLines"></a>

### windLoadWizard.WithoutLoadsOnLines(objects_without_loads, objects_without_loads_parallel_to)
Generated on lines

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| objects_without_loads | <code>Array</code> | Without load on lines, can be undefined |
| objects_without_loads_parallel_to | <code>Array</code> | Without load parallel to lines, can be undefined |

<a name="WindLoadWizard+LockForNewObjects"></a>

### windLoadWizard.LockForNewObjects(enabled)
Sets lock for new members

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="WindLoadWizard+ConsiderMemberEccentricity"></a>

### windLoadWizard.ConsiderMemberEccentricity(enabled)
Sets consider member eccentricity

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="WindLoadWizard+ConsiderSectionDistribution"></a>

### windLoadWizard.ConsiderSectionDistribution(enabled)
Sets consider section distribution

**Kind**: instance method of [<code>WindLoadWizard</code>](#WindLoadWizard)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>Boolean</code> | Can be undefined, true as default |

<a name="createBaseMemberLoadFromAreaLoadWizard"></a>

## createBaseMemberLoadFromAreaLoadWizard(no, load_case, comment, params) ⇒
Creates member load wizard (private)

**Kind**: global function  
**Returns**: Created member load wizard  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| comment | <code>String</code> | Comment |
| params | <code>Object</code> | Additional parameters |

<a name="setMemberLoadFromAreaLoadWizardDistribution"></a>

## setMemberLoadFromAreaLoadWizardDistribution(member_wizard, load_distribution, load_distribution_values) ⇒
Sets load distribution to member load wizard (private)

**Kind**: global function  
**Returns**: Modified member load wizard  

| Param | Type | Description |
| --- | --- | --- |
| member_wizard | <code>Object</code> | Member load wizard |
| load_distribution | <code>Number</code> | Load distribution |
| load_distribution_values | <code>Array</code> | Load distribution values |

<a name="createBaseMemberLoadFromFreeLineLoadWizard"></a>

## createBaseMemberLoadFromFreeLineLoadWizard(no, load_case, comment, params) ⇒
Creates member load wizard (private)

**Kind**: global function  
**Returns**: Created member load wizard  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Member load wizard index, can be undefined |
| load_case | <code>Object</code> | Load case |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="setMemberLoadFromFreeLineLoadWizardDistribution"></a>

## setMemberLoadFromFreeLineLoadWizardDistribution(member_wizard, load_distribution, load_distribution_values) ⇒
Sets load distribution to member load wizard (private)

**Kind**: global function  
**Returns**: Modified member load wizard  

| Param | Type | Description |
| --- | --- | --- |
| member_wizard | <code>Object</code> | Member load wizard |
| load_distribution | <code>Number</code> | Load distribution |
| load_distribution_values | <code>Array</code> | Load distribution values |

<a name="withoutLoadsOn"></a>

## withoutLoadsOn(snow_load_wizard, table_row, objects_without_loads, objects_without_loads_parallel_to)
Sets objects without load (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| snow_load_wizard | <code>Object</code> | Snow load wizard |
| table_row | <code>Number</code> | Table row to which values hes to be set |
| objects_without_loads | <code>Array</code> | Object's indexes without loads |
| objects_without_loads_parallel_to | <code>Array</code> | Object's indexes without loads parallel to |

<a name="createSnowLoadWizard"></a>

## createSnowLoadWizard(no, comment, params)
Creates empty snow load wizard (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Snow load wizard index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="setWindDirections"></a>

## setWindDirections(wind_load_wizard, roof_sides_accessibility)
Sets wind perpendicular to roofs (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| wind_load_wizard | <code>Object</code> | Wind load wizard to set |
| roof_sides_accessibility | <code>Array</code> | Roof sides accessibility                                             [Wall 1, Wall 2, Wall 3, Wall 4] (Vertical walls with flat/monopitch roof, Vertical walls with duopitch roof)                                             [Direction 1, Direction 2, Direction 3, Direction 4] (Flat monopitch roof, Duopitch roof) |

<a name="withoutLoadsOn"></a>

## withoutLoadsOn(wind_load_wizard, table_row, objects_without_loads, objects_without_loads_parallel_to)
Sets objects without load (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| wind_load_wizard | <code>Object</code> | Wind load wizard |
| table_row | <code>Number</code> | Table row to which values hes to be set |
| objects_without_loads | <code>Array</code> | Object's indexes without loads |
| objects_without_loads_parallel_to | <code>Array</code> | Object's indexes without loads parallel to |

<a name="createWindLoadWizard"></a>

## createWindLoadWizard(no, comment, params)
Creates empty wind load wizard (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Wind load wizard index, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

