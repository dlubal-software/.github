# TypesForMembers

## Classes

<dl>
<dt><a href="#MemberDefinableStiffness">MemberDefinableStiffness</a></dt>
<dd></dd>
<dt><a href="#MemberEccentricity">MemberEccentricity</a></dt>
<dd></dd>
<dt><a href="#MemberHinge">MemberHinge</a></dt>
<dd></dd>
<dt><a href="#MemberNonlinearity">MemberNonlinearity</a></dt>
<dd></dd>
<dt><a href="#MemberResultIntermediatePoint">MemberResultIntermediatePoint</a></dt>
<dd></dd>
<dt><a href="#MemberStiffnessModification">MemberStiffnessModification</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setTransverseOffset">setTransverseOffset(memberEccentricity, reference_type, reference, reference_node_index, alignment_type)</a></dt>
<dd><p>Sets transverse offset (private)</p>
</dd>
<dt><a href="#createMemberEccentricity">createMemberEccentricity(no, members_start_list, members_end_list, comment, params)</a> ⇒ <code>Object</code></dt>
<dd><p>Creates member eccentricity</p>
</dd>
<dt><a href="#setRelativeValues">setRelativeValues(member_eccentricity, alignment_type)</a></dt>
<dd><p>Sets member eccentricity for relative to section type (private)</p>
</dd>
<dt><a href="#getAlignmentParts">getAlignmentParts(alignment)</a> ⇒ <code>Array</code></dt>
<dd><p>Creates horizontal and vertical strings of alignment (private)</p>
</dd>
<dt><a href="#setAbsoluteValues">setAbsoluteValues(memberEccentricity, offset_x, offset_y, offset_z, coordinate_system)</a></dt>
<dd><p>Sets member eccentricity for absolute type (private)</p>
</dd>
<dt><a href="#setPartialActivityZoneValues">setPartialActivityZoneValues(member_hinge, zone_values, param_type_name, param_slippage_name, param_displacement_name, param_force_name)</a></dt>
<dd><p>Sets values for partial activity zone (private)</p>
</dd>
<dt><a href="#setMainHingeValues">setMainHingeValues(member_hinge, values, property_1, property_2)</a> ⇒</dt>
<dd><p>Sets values to member hinge (private)</p>
</dd>
<dt><a href="#createMemberHinge">createMemberHinge(no, members_start_list, members_end_list, comment, params)</a> ⇒ <code>Object</code></dt>
<dd><p>Creates member hinge (private)</p>
</dd>
<dt><a href="#setParameters">setParameters(member_nonlinearity, parameters, param_1_name, param_2_name)</a></dt>
<dd><p>Sets parameters to member nonlinearity (private)</p>
</dd>
<dt><a href="#createNonlinearity">createNonlinearity(no, member_list, comment, params)</a> ⇒ <code>Object</code></dt>
<dd><p>Creates member nonlinearity</p>
</dd>
<dt><a href="#MemberOpening">MemberOpening(no, members_no, member_sets_no, comment, params)</a></dt>
<dd><p>Creates Member Opening</p>
</dd>
<dt><a href="#DistancesAreAbsolute">DistancesAreAbsolute(memberResultIntermediatePoint, absolute)</a></dt>
<dd><p>Sets division ordinates as absolute (private)</p>
</dd>
<dt><a href="#MemberRotationalRestraint">MemberRotationalRestraint(no, member_supports_no, restraint_type, comment, params)</a></dt>
<dd><p>Creates Member Rotational Restraint</p>
</dd>
<dt><a href="#MemberShearPanel">MemberShearPanel(no, definition_type, member_supports_no, comment, params)</a></dt>
<dd><p>Creates Member Shear Panel</p>
</dd>
</dl>

<a name="MemberDefinableStiffness"></a>

## MemberDefinableStiffness
**Kind**: global class  

* [MemberDefinableStiffness](#MemberDefinableStiffness)
    * [new MemberDefinableStiffness(no, member_list, comment, params)](#new_MemberDefinableStiffness_new)
    * [.TorsionalAndBendingStiffness(torsional_stiffness, bending_stiffness_y, bending_stiffness_z)](#MemberDefinableStiffness+TorsionalAndBendingStiffness)
    * [.AxialAndShearStiffness(axial_stiffness, shear_stiffness_y, shear_stiffness_z)](#MemberDefinableStiffness+AxialAndShearStiffness)
    * [.SelfWeightAndSectionArea(specific_weight, section_area)](#MemberDefinableStiffness+SelfWeightAndSectionArea)
    * [.MainAxesRotation(rotation)](#MemberDefinableStiffness+MainAxesRotation)
    * [.ThermalExpansionCoefficient(thermal_expansion, width, height)](#MemberDefinableStiffness+ThermalExpansionCoefficient)

<a name="new_MemberDefinableStiffness_new"></a>

### new MemberDefinableStiffness(no, member_list, comment, params)
Creates member definable stiffness

**Returns**: <code>Object</code> - Created member definable stiffness  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member definable stiffness, can be undefined |
| member_list | <code>Array</code> | Assigned members, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member definable stiffness parameters, can be undefined |

<a name="MemberDefinableStiffness+TorsionalAndBendingStiffness"></a>

### memberDefinableStiffness.TorsionalAndBendingStiffness(torsional_stiffness, bending_stiffness_y, bending_stiffness_z)
Sets torsional and bending stiffness parameters

**Kind**: instance method of [<code>MemberDefinableStiffness</code>](#MemberDefinableStiffness)  

| Param | Type | Description |
| --- | --- | --- |
| torsional_stiffness | <code>Number</code> | Torsional stiffness |
| bending_stiffness_y | <code>Number</code> | Bending stiffness Y |
| bending_stiffness_z | <code>Number</code> | Bending stiffness Z |

<a name="MemberDefinableStiffness+AxialAndShearStiffness"></a>

### memberDefinableStiffness.AxialAndShearStiffness(axial_stiffness, shear_stiffness_y, shear_stiffness_z)
Sets axial and shear stiffness parameters

**Kind**: instance method of [<code>MemberDefinableStiffness</code>](#MemberDefinableStiffness)  

| Param | Type | Description |
| --- | --- | --- |
| axial_stiffness | <code>Number</code> | Axial stiffness |
| shear_stiffness_y | <code>Number</code> | Shear stiffness Y |
| shear_stiffness_z | <code>Number</code> | Shear stiffness Z |

<a name="MemberDefinableStiffness+SelfWeightAndSectionArea"></a>

### memberDefinableStiffness.SelfWeightAndSectionArea(specific_weight, section_area)
Sets self weight stiffness parameters

**Kind**: instance method of [<code>MemberDefinableStiffness</code>](#MemberDefinableStiffness)  

| Param | Type | Description |
| --- | --- | --- |
| specific_weight | <code>Number</code> | Specific weight |
| section_area | <code>Number</code> | Section area |

<a name="MemberDefinableStiffness+MainAxesRotation"></a>

### memberDefinableStiffness.MainAxesRotation(rotation)
Sets main axes rotation parameter

**Kind**: instance method of [<code>MemberDefinableStiffness</code>](#MemberDefinableStiffness)  

| Param | Type | Description |
| --- | --- | --- |
| rotation | <code>Number</code> | Rotation |

<a name="MemberDefinableStiffness+ThermalExpansionCoefficient"></a>

### memberDefinableStiffness.ThermalExpansionCoefficient(thermal_expansion, width, height)
Sets coefficient of thermal expansion stiffness parameters

**Kind**: instance method of [<code>MemberDefinableStiffness</code>](#MemberDefinableStiffness)  

| Param | Type | Description |
| --- | --- | --- |
| thermal_expansion | <code>Number</code> | Thermal expansion |
| width | <code>Number</code> | Width |
| height | <code>Number</code> | Height |

<a name="MemberEccentricity"></a>

## MemberEccentricity
**Kind**: global class  

* [MemberEccentricity](#MemberEccentricity)
    * [new MemberEccentricity(no, members_start_list, members_end_list, comment, params)](#new_MemberEccentricity_new)
    * [.RelativeToSection(no, members_start_list, members_end_list, alignment, comment, params)](#MemberEccentricity+RelativeToSection) ⇒ <code>Object</code>
    * [.Absolute(no, members_start_list, members_end_list, offset_x, offset_y, offset_z, coordinate_system, comment, params)](#MemberEccentricity+Absolute) ⇒ <code>Object</code>
    * [.RelativeAndAbsolute(no, members_start_list, members_end_list, offset_x, offset_y, offset_z, coordinate_system, alignment, comment, params)](#MemberEccentricity+RelativeAndAbsolute) ⇒ <code>Object</code>
    * [.AxialOffset(active)](#MemberEccentricity+AxialOffset)
    * [.HingeLocationAtNode(active)](#MemberEccentricity+HingeLocationAtNode)
    * [.TransverseOffsetMember(reference_member, reference_node, alignment)](#MemberEccentricity+TransverseOffsetMember)
    * [.TransverseOffsetSurface(reference_surface, alignment)](#MemberEccentricity+TransverseOffsetSurface)
    * [.TransverseOffsetNone()](#MemberEccentricity+TransverseOffsetNone)

<a name="new_MemberEccentricity_new"></a>

### new MemberEccentricity(no, members_start_list, members_end_list, comment, params)
Creates member eccentricity

**Returns**: <code>Object</code> - Created member eccentricity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member eccentricity, can be undefined |
| members_start_list | <code>Array</code> | Members start, can be undefined |
| members_end_list | <code>Array</code> | Members end, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member eccentricity parameters, can be undefined |

<a name="MemberEccentricity+RelativeToSection"></a>

### memberEccentricity.RelativeToSection(no, members_start_list, members_end_list, alignment, comment, params) ⇒ <code>Object</code>
Creates member eccentricity relative to section

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  
**Returns**: <code>Object</code> - Created member eccentricity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member eccentricity, can be undefined |
| members_start_list | <code>Array</code> | Member start |
| members_end_list | <code>Array</code> | Member end |
| alignment | <code>String</code> | Alignment, for more info look at private function setRelativeValues |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member eccentricity parameters, can be undefined |

<a name="MemberEccentricity+Absolute"></a>

### memberEccentricity.Absolute(no, members_start_list, members_end_list, offset_x, offset_y, offset_z, coordinate_system, comment, params) ⇒ <code>Object</code>
Creates absolute member eccentricity

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  
**Returns**: <code>Object</code> - Created member eccentricity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member eccentricity, can be undefined |
| members_start_list | <code>Array</code> | Members start |
| members_end_list | <code>Array</code> | Members end |
| offset_x | <code>Number</code> | Eccentricity in X |
| offset_y | <code>Number</code> | Eccentricity in Y |
| offset_z | <code>Number</code> | Eccentricity in Z |
| coordinate_system | <code>Number</code> | Coordinate system, can be undefined. Default value is "Local xyz". |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member eccentricity parameters, can be undefined |

<a name="MemberEccentricity+RelativeAndAbsolute"></a>

### memberEccentricity.RelativeAndAbsolute(no, members_start_list, members_end_list, offset_x, offset_y, offset_z, coordinate_system, alignment, comment, params) ⇒ <code>Object</code>
Creates absolute member eccentricity

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  
**Returns**: <code>Object</code> - Created member eccentricity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member eccentricity, can be undefined |
| members_start_list | <code>Array</code> | Members start |
| members_end_list | <code>Array</code> | Members end |
| offset_x | <code>Number</code> | Eccentricity in X |
| offset_y | <code>Number</code> | Eccentricity in Y |
| offset_z | <code>Number</code> | Eccentricity in Z |
| coordinate_system | <code>Number</code> | Coordinate system, can be undefined. Default value is "Local xyz". |
| alignment | <code>String</code> | Alignment, for more info look at private function setRelativeValues |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member eccentricity parameters, can be undefined |

<a name="MemberEccentricity+AxialOffset"></a>

### memberEccentricity.AxialOffset(active)
Sets axial offset from adjoining member

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  

| Param | Type | Description |
| --- | --- | --- |
| active | <code>Boolean</code> | True if undefined |

<a name="MemberEccentricity+HingeLocationAtNode"></a>

### memberEccentricity.HingeLocationAtNode(active)
Sets hinge location at node (if applied)

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  

| Param | Type | Description |
| --- | --- | --- |
| active | <code>Boolean</code> | True if undefined |

<a name="MemberEccentricity+TransverseOffsetMember"></a>

### memberEccentricity.TransverseOffsetMember(reference_member, reference_node, alignment)
Transverse offset from section of another member

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  

| Param | Type | Description |
| --- | --- | --- |
| reference_member | <code>Number</code> | Reference member |
| reference_node | <code>Number</code> | Reference member's node, can be undefined |
| alignment | <code>String</code> | Alignment, for more info look at private function setTransverseOffset |

<a name="MemberEccentricity+TransverseOffsetSurface"></a>

### memberEccentricity.TransverseOffsetSurface(reference_surface, alignment)
Transverse offset from section of another thickness of other surface

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  

| Param | Type | Description |
| --- | --- | --- |
| reference_surface | <code>Number</code> | Reference surface |
| alignment | <code>String</code> | Alignment, for more info look at private function setTransverseOffset |

<a name="MemberEccentricity+TransverseOffsetNone"></a>

### memberEccentricity.TransverseOffsetNone()
Set off transverse offset

**Kind**: instance method of [<code>MemberEccentricity</code>](#MemberEccentricity)  
<a name="MemberHinge"></a>

## MemberHinge
**Kind**: global class  

* [MemberHinge](#MemberHinge)
    * [new MemberHinge(no, members_start_list, members_end_list, comment, params)](#new_MemberHinge_new)
    * [.Translational(no, members_start_list, members_end_list, axial_release_n, axial_release_vy, axial_release_vz, comment, params)](#MemberHinge+Translational) ⇒ <code>Object</code>
    * [.Rotational(no, members_start_list, members_end_list, moment_release_mt, moment_release_my, moment_release_mz, comment, params)](#MemberHinge+Rotational) ⇒ <code>Object</code>
    * [.PartialActivityTranslationalX(negative_zone_values, positive_zone_values)](#MemberHinge+PartialActivityTranslationalX)
    * [.PartialActivityTranslationalY(negative_zone_values, positive_zone_values)](#MemberHinge+PartialActivityTranslationalY)
    * [.PartialActivityTranslationalZ(negative_zone_values, positive_zone_values)](#MemberHinge+PartialActivityTranslationalZ)
    * [.PartialActivityRotationalX(negative_zone_values, positive_zone_values)](#MemberHinge+PartialActivityRotationalX)
    * [.PartialActivityRotationalY(negative_zone_values, positive_zone)](#MemberHinge+PartialActivityRotationalY)
    * [.PartialActivityRotationalZ(negative_zone_values, positive_zone_values)](#MemberHinge+PartialActivityRotationalZ)
    * [.DiagramTranslationalX(diagram_values)](#MemberHinge+DiagramTranslationalX)
    * [.DiagramTranslationalY(diagram_values)](#MemberHinge+DiagramTranslationalY)
    * [.DiagramTranslationalZ(diagram_values)](#MemberHinge+DiagramTranslationalZ)
    * [.DiagramRotationalX(diagram_values)](#MemberHinge+DiagramRotationalX)
    * [.DiagramRotationalY(diagram_values)](#MemberHinge+DiagramRotationalY)
    * [.DiagramRotationalZ(diagram_values)](#MemberHinge+DiagramRotationalZ)
    * [.FrictionVyTranslationalX(friction_coefficient_x, spring_constant_x)](#MemberHinge+FrictionVyTranslationalX)
    * [.FrictionVzTranslationalX(friction_coefficient_x, spring_constant_x)](#MemberHinge+FrictionVzTranslationalX)
    * [.FrictionVyVzTranslationalX(friction_coefficient_x, spring_constant_x)](#MemberHinge+FrictionVyVzTranslationalX)
    * [.FrictionVyPlusVzTranslationalX(friction_coefficient_xy, friction_coefficient_xz, spring_constant_x)](#MemberHinge+FrictionVyPlusVzTranslationalX)
    * [.FrictionNTranslationalY(friction_coefficient_y, spring_constant_y)](#MemberHinge+FrictionNTranslationalY)
    * [.FrictionVzTranslationalY(friction_coefficient_y, spring_constant_y)](#MemberHinge+FrictionVzTranslationalY)
    * [.FrictionNVzTranslationalY(friction_coefficient_y, spring_constant_y)](#MemberHinge+FrictionNVzTranslationalY)
    * [.FrictionNPlusVzTranslationalY(friction_coefficient_yx, friction_coefficient_yz, spring_constant_y)](#MemberHinge+FrictionNPlusVzTranslationalY)
    * [.FrictionNTranslationalZ(friction_coefficient_z, spring_constant_z)](#MemberHinge+FrictionNTranslationalZ)
    * [.FrictionVyTranslationalZ(friction_coefficient_z, spring_constant_z)](#MemberHinge+FrictionVyTranslationalZ)
    * [.FrictionNVyTranslationalZ(friction_coefficient_z, spring_constant_z)](#MemberHinge+FrictionNVyTranslationalZ)
    * [.FrictionNPlusVyTranslationalZ(friction_coefficient_zx, friction_coefficient_zy, spring_constant_z)](#MemberHinge+FrictionNPlusVyTranslationalZ)

<a name="new_MemberHinge_new"></a>

### new MemberHinge(no, members_start_list, members_end_list, comment, params)
Creates member hinge

**Returns**: <code>Object</code> - Created member hinge  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member hinge, can be undefined |
| members_start_list | <code>Array</code> | Member start, can be undefined |
| members_end_list | <code>Array</code> | Member end, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member hinge parameters, can be undefined |

<a name="MemberHinge+Translational"></a>

### memberHinge.Translational(no, members_start_list, members_end_list, axial_release_n, axial_release_vy, axial_release_vz, comment, params) ⇒ <code>Object</code>
Creates member hinge with specified axis release

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  
**Returns**: <code>Object</code> - Created member hinge  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member hinge, can be undefined |
| members_start_list | <code>Array</code> | Member start, can be undefined |
| members_end_list | <code>Array</code> | Member end, can be undefined |
| axial_release_n | <code>Array</code> | Axis release for ux, for more information look at comment in private setMainHingeValues function |
| axial_release_vy | <code>Array</code> | Axis release for uy, for more information look at comment in private setMainHingeValues function |
| axial_release_vz | <code>Array</code> | Axis release for uz, for more information look at comment in private setMainHingeValues function |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member hinge parameters, can be undefined |

<a name="MemberHinge+Rotational"></a>

### memberHinge.Rotational(no, members_start_list, members_end_list, moment_release_mt, moment_release_my, moment_release_mz, comment, params) ⇒ <code>Object</code>
Creates member hinge with specified moment release

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  
**Returns**: <code>Object</code> - Created member hinge  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member hinge, can be undefined |
| members_start_list | <code>Array</code> | Member start, can be undefined |
| members_end_list | <code>Array</code> | Member end, can be undefined |
| moment_release_mt | <code>Array</code> | Moment release for φx, for more information look at comment in private setMainHingeValues function |
| moment_release_my | <code>Array</code> | Moment release for φy, for more information look at comment in private setMainHingeValues function |
| moment_release_mz | <code>Array</code> | Moment release for φz, for more information look at comment in private setMainHingeValues function |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member hinge parameters, can be undefined |

<a name="MemberHinge+PartialActivityTranslationalX"></a>

### memberHinge.PartialActivityTranslationalX(negative_zone_values, positive_zone_values)
Sets negative and/or positive zone to partial activity translation x nonlinearity

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| negative_zone_values | <code>Array</code> | Negative zone values depend on type (for more information look at setPartialActivityZoneValues function) |
| positive_zone_values | <code>Array</code> | Positive zone values depend on type (for more information look at setPartialActivityZoneValues function) |

<a name="MemberHinge+PartialActivityTranslationalY"></a>

### memberHinge.PartialActivityTranslationalY(negative_zone_values, positive_zone_values)
Sets negative and/or positive zone to partial activity translation y nonlinearity

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| negative_zone_values | <code>Array</code> | Negative zone values depend on type (for more information look at setPartialActivityZoneValues function) |
| positive_zone_values | <code>Array</code> | Positive zone values depend on type (for more information look at setPartialActivityZoneValues function) |

<a name="MemberHinge+PartialActivityTranslationalZ"></a>

### memberHinge.PartialActivityTranslationalZ(negative_zone_values, positive_zone_values)
Sets negative and/or positive zone to partial activity translation z nonlinearity

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| negative_zone_values | <code>Array</code> | Negative zone values depend on type (for more information look at setPartialActivityZoneValues function) |
| positive_zone_values | <code>Array</code> | Positive zone values depend on type (for more information look at setPartialActivityZoneValues function) |

<a name="MemberHinge+PartialActivityRotationalX"></a>

### memberHinge.PartialActivityRotationalX(negative_zone_values, positive_zone_values)
Sets negative and/or positive zone to partial activity rotational x nonlinearity

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| negative_zone_values | <code>Array</code> | Negative zone values depend on type (for more information look at setPartialActivityZoneValues function) |
| positive_zone_values | <code>Array</code> | Positive zone values depend on type (for more information look at setPartialActivityZoneValues function) |

<a name="MemberHinge+PartialActivityRotationalY"></a>

### memberHinge.PartialActivityRotationalY(negative_zone_values, positive_zone)
Sets negative and/or positive zone to partial activity rotational y nonlinearity

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| negative_zone_values | <code>Array</code> | Negative zone values depend on type (for more information look at setPartialActivityZoneValues function) |
| positive_zone | <code>Array</code> | Positive zone values depend on type (for more information look at setPartialActivityZoneValues function) |

<a name="MemberHinge+PartialActivityRotationalZ"></a>

### memberHinge.PartialActivityRotationalZ(negative_zone_values, positive_zone_values)
Sets negative and/or positive zone to partial activity rotational z nonlinearity

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| negative_zone_values | <code>Array</code> | Negative zone values depend on type (for more information look at setPartialActivityZoneValues function) |
| positive_zone_values | <code>Array</code> | Positive zone values depend on type (for more information look at setPartialActivityZoneValues function) |

<a name="MemberHinge+DiagramTranslationalX"></a>

### memberHinge.DiagramTranslationalX(diagram_values)
Sets translational diagram values for ux

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| diagram_values | <code>Array</code> | [[ux1, N1, Cux1], [ux2, N2, Cux2] ... [uxn, Nn, Cuxn]] |

<a name="MemberHinge+DiagramTranslationalY"></a>

### memberHinge.DiagramTranslationalY(diagram_values)
Sets translational diagram values for uy

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| diagram_values | <code>Array</code> | [[uy1, N1, Cuy1], [uy2, N2, Cuy2] ... [uyn, Nn, Cuyn]] |

<a name="MemberHinge+DiagramTranslationalZ"></a>

### memberHinge.DiagramTranslationalZ(diagram_values)
Sets translational diagram values for uz

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| diagram_values | <code>Array</code> | [[uz1, N1, Cuz1], [uz2, N2, Cuz2] ... [uzn, Nn, Cuzn]] |

<a name="MemberHinge+DiagramRotationalX"></a>

### memberHinge.DiagramRotationalX(diagram_values)
Sets rotational diagram values for φx

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| diagram_values | <code>Array</code> | [[φx1, N1, Cφx1], [φx2, N2, Cφx2] ... [φxn, Nn, Cφxn]] |

<a name="MemberHinge+DiagramRotationalY"></a>

### memberHinge.DiagramRotationalY(diagram_values)
Sets rotational diagram values for φy

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| diagram_values | <code>Array</code> | [[φy1, N1, Cφy1], [φy2, N2, Cφy2] ... [φyn, Nn, Cφyn]] |

<a name="MemberHinge+DiagramRotationalZ"></a>

### memberHinge.DiagramRotationalZ(diagram_values)
Sets rotational diagram values for φz

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| diagram_values | <code>Array</code> | [[φz1, N1, Cφz1], [φz2, N2, Cφz2] ... [φzn, Nn, Cφzn]] |

<a name="MemberHinge+FrictionVyTranslationalX"></a>

### memberHinge.FrictionVyTranslationalX(friction_coefficient_x, spring_constant_x)
Sets translational friction Vy values for ux

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_x | <code>Number</code> | Friction coefficient X |
| spring_constant_x | <code>Number</code> | Spring constant X |

<a name="MemberHinge+FrictionVzTranslationalX"></a>

### memberHinge.FrictionVzTranslationalX(friction_coefficient_x, spring_constant_x)
Sets translational friction Vz values for ux

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_x | <code>Number</code> | Friction coefficient X |
| spring_constant_x | <code>Number</code> | Spring constant X |

<a name="MemberHinge+FrictionVyVzTranslationalX"></a>

### memberHinge.FrictionVyVzTranslationalX(friction_coefficient_x, spring_constant_x)
Sets translational friction VyVz values for ux

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_x | <code>Number</code> | Friction coefficient X |
| spring_constant_x | <code>Number</code> | Spring constant X |

<a name="MemberHinge+FrictionVyPlusVzTranslationalX"></a>

### memberHinge.FrictionVyPlusVzTranslationalX(friction_coefficient_xy, friction_coefficient_xz, spring_constant_x)
Sets translational friction Vy+Vz values for ux

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_xy | <code>Number</code> | Friction coefficient XY |
| friction_coefficient_xz | <code>Number</code> | Friction coefficient XZ |
| spring_constant_x | <code>Number</code> | Spring constant X |

<a name="MemberHinge+FrictionNTranslationalY"></a>

### memberHinge.FrictionNTranslationalY(friction_coefficient_y, spring_constant_y)
Sets translational friction N values for uy

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_y | <code>Number</code> | Friction coefficient Y |
| spring_constant_y | <code>Number</code> | Spring constant Y |

<a name="MemberHinge+FrictionVzTranslationalY"></a>

### memberHinge.FrictionVzTranslationalY(friction_coefficient_y, spring_constant_y)
Sets translational friction Vz values for uy

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_y | <code>Number</code> | Friction coefficient Y |
| spring_constant_y | <code>Number</code> | Spring constant Y |

<a name="MemberHinge+FrictionNVzTranslationalY"></a>

### memberHinge.FrictionNVzTranslationalY(friction_coefficient_y, spring_constant_y)
Sets translational friction NVz values for uy

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_y | <code>Number</code> | Friction coefficient Y |
| spring_constant_y | <code>Number</code> | Spring constant Y |

<a name="MemberHinge+FrictionNPlusVzTranslationalY"></a>

### memberHinge.FrictionNPlusVzTranslationalY(friction_coefficient_yx, friction_coefficient_yz, spring_constant_y)
Sets translational friction N+Vz values for uy

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_yx | <code>Number</code> | Friction coefficient YX |
| friction_coefficient_yz | <code>Number</code> | Friction coefficient YZ |
| spring_constant_y | <code>Number</code> | Spring constant Y |

<a name="MemberHinge+FrictionNTranslationalZ"></a>

### memberHinge.FrictionNTranslationalZ(friction_coefficient_z, spring_constant_z)
Sets translational friction N values for uz

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_z | <code>Number</code> | Friction coefficient Z |
| spring_constant_z | <code>Number</code> | Spring constant Z |

<a name="MemberHinge+FrictionVyTranslationalZ"></a>

### memberHinge.FrictionVyTranslationalZ(friction_coefficient_z, spring_constant_z)
Sets translational friction Vy values for uz

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_z | <code>Number</code> | Friction coefficient Z |
| spring_constant_z | <code>Number</code> | Spring constant Z |

<a name="MemberHinge+FrictionNVyTranslationalZ"></a>

### memberHinge.FrictionNVyTranslationalZ(friction_coefficient_z, spring_constant_z)
Sets translational friction NVy values for uz

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_z | <code>Number</code> | Friction coefficient Z |
| spring_constant_z | <code>Number</code> | Spring constant Z |

<a name="MemberHinge+FrictionNPlusVyTranslationalZ"></a>

### memberHinge.FrictionNPlusVyTranslationalZ(friction_coefficient_zx, friction_coefficient_zy, spring_constant_z)
Sets translational friction N+Vy values for uz

**Kind**: instance method of [<code>MemberHinge</code>](#MemberHinge)  

| Param | Type | Description |
| --- | --- | --- |
| friction_coefficient_zx | <code>Number</code> | Friction coefficient ZX |
| friction_coefficient_zy | <code>Number</code> | Friction coefficient ZY |
| spring_constant_z | <code>Number</code> | Spring constant Z |

<a name="MemberNonlinearity"></a>

## MemberNonlinearity
**Kind**: global class  

* [MemberNonlinearity](#MemberNonlinearity)
    * [new MemberNonlinearity(no, comment, params)](#new_MemberNonlinearity_new)
    * [.FailureIfTension(no, members, comment, params)](#MemberNonlinearity+FailureIfTension) ⇒ <code>Object</code>
    * [.FailureIfCompression(no, members, comment, params)](#MemberNonlinearity+FailureIfCompression) ⇒ <code>Object</code>
    * [.FailureIfTensionWithSlippage(no, members, slippage, comment, params)](#MemberNonlinearity+FailureIfTensionWithSlippage) ⇒ <code>Object</code>
    * [.FailureIfCompressionWithSlippage(no, members, slippage, comment, params)](#MemberNonlinearity+FailureIfCompressionWithSlippage) ⇒ <code>Object</code>
    * [.Slippage(no, members, slippage, comment, params)](#MemberNonlinearity+Slippage) ⇒ <code>Object</code>
    * [.FailureUnderTension(no, members, tension_force, comment, params)](#MemberNonlinearity+FailureUnderTension) ⇒ <code>Object</code>
    * [.YieldingUnderTension(no, members, tension_force, comment, params)](#MemberNonlinearity+YieldingUnderTension) ⇒ <code>Object</code>
    * [.FailureUnderCompression(no, members, compression_force, comment, params)](#MemberNonlinearity+FailureUnderCompression) ⇒ <code>Object</code>
    * [.YieldingUnderCompression(no, members, compression_force, comment, params)](#MemberNonlinearity+YieldingUnderCompression) ⇒ <code>Object</code>
    * [.Failure(no, members, compression_force, tension_force, comment, params)](#MemberNonlinearity+Failure) ⇒ <code>Object</code>
    * [.Yielding(no, members, compression_force, tension_force, comment, params)](#MemberNonlinearity+Yielding) ⇒ <code>Object</code>

<a name="new_MemberNonlinearity_new"></a>

### new MemberNonlinearity(no, comment, params)
Creates member nonlinearity

**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+FailureIfTension"></a>

### memberNonlinearity.FailureIfTension(no, members, comment, params) ⇒ <code>Object</code>
Creates member failure if tension nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+FailureIfCompression"></a>

### memberNonlinearity.FailureIfCompression(no, members, comment, params) ⇒ <code>Object</code>
Creates member failure if compression nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+FailureIfTensionWithSlippage"></a>

### memberNonlinearity.FailureIfTensionWithSlippage(no, members, slippage, comment, params) ⇒ <code>Object</code>
Creates member failure if tension with slippage nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| slippage | <code>Number</code> | Slippage |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+FailureIfCompressionWithSlippage"></a>

### memberNonlinearity.FailureIfCompressionWithSlippage(no, members, slippage, comment, params) ⇒ <code>Object</code>
Creates member failure if compression with slippage nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| slippage | <code>Number</code> | Slippage |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+Slippage"></a>

### memberNonlinearity.Slippage(no, members, slippage, comment, params) ⇒ <code>Object</code>
Creates member slippage nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| slippage | <code>Number</code> | Slippage |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+FailureUnderTension"></a>

### memberNonlinearity.FailureUnderTension(no, members, tension_force, comment, params) ⇒ <code>Object</code>
Creates member tearing under tension nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| tension_force | <code>Number</code> | Tension force |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+YieldingUnderTension"></a>

### memberNonlinearity.YieldingUnderTension(no, members, tension_force, comment, params) ⇒ <code>Object</code>
Creates member yielding under tension nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| tension_force | <code>Number</code> | Tension force |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+FailureUnderCompression"></a>

### memberNonlinearity.FailureUnderCompression(no, members, compression_force, comment, params) ⇒ <code>Object</code>
Creates member tearing under compression nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| compression_force | <code>Number</code> | Compression force |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+YieldingUnderCompression"></a>

### memberNonlinearity.YieldingUnderCompression(no, members, compression_force, comment, params) ⇒ <code>Object</code>
Creates member yielding under compression nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| compression_force | <code>Number</code> | Compression force |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+Failure"></a>

### memberNonlinearity.Failure(no, members, compression_force, tension_force, comment, params) ⇒ <code>Object</code>
Creates member tearing nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| compression_force | <code>Number</code> | Compression force |
| tension_force | <code>Number</code> | Tension force |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberNonlinearity+Yielding"></a>

### memberNonlinearity.Yielding(no, members, compression_force, tension_force, comment, params) ⇒ <code>Object</code>
Creates member yielding nonlinearity

**Kind**: instance method of [<code>MemberNonlinearity</code>](#MemberNonlinearity)  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| members | <code>Array</code> | Assigned members |
| compression_force | <code>Number</code> | Compression force |
| tension_force | <code>Number</code> | Tension force |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberResultIntermediatePoint"></a>

## MemberResultIntermediatePoint
**Kind**: global class  

* [MemberResultIntermediatePoint](#MemberResultIntermediatePoint)
    * [new MemberResultIntermediatePoint(no, members, comment, params)](#new_MemberResultIntermediatePoint_new)
    * [.UniformDistances(divisions_count, notes)](#MemberResultIntermediatePoint+UniformDistances)
    * [.DivisionOrdinates(division_ordinates, notes, absolute, clear_ordinates)](#MemberResultIntermediatePoint+DivisionOrdinates)

<a name="new_MemberResultIntermediatePoint_new"></a>

### new MemberResultIntermediatePoint(no, members, comment, params)
Creates member result intermediate point

**Returns**: <code>Object</code> - Created member result intermediate point  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member definable stiffness, can be undefined |
| members | <code>Array</code> | Assigned members, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member result intermediate point parameters, can be undefined |

<a name="MemberResultIntermediatePoint+UniformDistances"></a>

### memberResultIntermediatePoint.UniformDistances(divisions_count, notes)
Sets number of points

**Kind**: instance method of [<code>MemberResultIntermediatePoint</code>](#MemberResultIntermediatePoint)  

| Param | Type | Description |
| --- | --- | --- |
| divisions_count | <code>Number</code> | Number of division ordinates |
| notes | <code>Array</code> | Notes to each point, can be undefined |

<a name="MemberResultIntermediatePoint+DivisionOrdinates"></a>

### memberResultIntermediatePoint.DivisionOrdinates(division_ordinates, notes, absolute, clear_ordinates)
Sets division ordinates

**Kind**: instance method of [<code>MemberResultIntermediatePoint</code>](#MemberResultIntermediatePoint)  

| Param | Type | Description |
| --- | --- | --- |
| division_ordinates | <code>Array</code> | Division ordinates |
| notes | <code>Array</code> | Division ordinates notes, can be undefined |
| absolute | <code>Boolean</code> | Distances are absolute or relative can be undefined (default value is absolute) |
| clear_ordinates | <code>Boolean</code> | Clears default ordinates, can be undefined (default value is true) |

<a name="MemberStiffnessModification"></a>

## MemberStiffnessModification
**Kind**: global class  

* [MemberStiffnessModification](#MemberStiffnessModification)
    * [new MemberStiffnessModification(no, structure_modifications, comment, params)](#new_MemberStiffnessModification_new)
    * [.TotalStiffnessFactor(total_stiffness)](#MemberStiffnessModification+TotalStiffnessFactor)
    * [.PartialStiffnessFactors(axial_stiffness, bending_stiffness_y, bending_stiffness_z, shear_stiffness_y, shear_stiffness_z, torsional_stiffness, weight)](#MemberStiffnessModification+PartialStiffnessFactors)
    * [.ConcreteStructuresAci(component_type)](#MemberStiffnessModification+ConcreteStructuresAci)
    * [.ConcreteStructuresCsa(component_type)](#MemberStiffnessModification+ConcreteStructuresCsa)
    * [.SteelStructuresAisc(determine_tau_b, design_method)](#MemberStiffnessModification+SteelStructuresAisc)
    * [.SteelStructuresCSA(determine_tau_b, axial_stiffness, bending_stiffness_y, bending_stiffness_z, shear_stiffness_y, shear_stiffness_z, torsional_stiffness)](#MemberStiffnessModification+SteelStructuresCSA)

<a name="new_MemberStiffnessModification_new"></a>

### new MemberStiffnessModification(no, structure_modifications, comment, params)
Creates member stiffness modification

**Returns**: <code>Object</code> - Created member stiffness modification  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member stiffness modification, can be undefined |
| structure_modifications | <code>Array</code> | Assigned structure modifications, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member stiffness modification parameters, can be undefined |

<a name="MemberStiffnessModification+TotalStiffnessFactor"></a>

### memberStiffnessModification.TotalStiffnessFactor(total_stiffness)
Sets total stiffness factor

**Kind**: instance method of [<code>MemberStiffnessModification</code>](#MemberStiffnessModification)  

| Param | Type | Description |
| --- | --- | --- |
| total_stiffness | <code>Number</code> | Total stiffness |

<a name="MemberStiffnessModification+PartialStiffnessFactors"></a>

### memberStiffnessModification.PartialStiffnessFactors(axial_stiffness, bending_stiffness_y, bending_stiffness_z, shear_stiffness_y, shear_stiffness_z, torsional_stiffness, weight)
Sets partial stiffness factors

**Kind**: instance method of [<code>MemberStiffnessModification</code>](#MemberStiffnessModification)  

| Param | Type | Description |
| --- | --- | --- |
| axial_stiffness | <code>Number</code> | Axial stiffness, can be undefined |
| bending_stiffness_y | <code>Number</code> | Bending stiffness Y, can be undefined |
| bending_stiffness_z | <code>Number</code> | Bending stiffness Z, can be undefined |
| shear_stiffness_y | <code>Number</code> | Shear stiffness Y, can be undefined |
| shear_stiffness_z | <code>Number</code> | Shear stiffness Z, can be undefined |
| torsional_stiffness | <code>Number</code> | Torsional stiffness, can be undefined |
| weight | <code>Number</code> | Weight, can be undefined |

<a name="MemberStiffnessModification+ConcreteStructuresAci"></a>

### memberStiffnessModification.ConcreteStructuresAci(component_type)
Sets concrete structure ACI

**Kind**: instance method of [<code>MemberStiffnessModification</code>](#MemberStiffnessModification)  

| Param | Type | Description |
| --- | --- | --- |
| component_type | <code>Number</code> | Component type: COLUMNS, BEAMS. Can be undefined |

<a name="MemberStiffnessModification+ConcreteStructuresCsa"></a>

### memberStiffnessModification.ConcreteStructuresCsa(component_type)
Sets concrete structure CSA

**Kind**: instance method of [<code>MemberStiffnessModification</code>](#MemberStiffnessModification)  

| Param | Type | Description |
| --- | --- | --- |
| component_type | <code>Number</code> | Component type: COLUMNS, BEAMS. Can be undefined |

<a name="MemberStiffnessModification+SteelStructuresAisc"></a>

### memberStiffnessModification.SteelStructuresAisc(determine_tau_b, design_method)
Sets steel structures AISC

**Kind**: instance method of [<code>MemberStiffnessModification</code>](#MemberStiffnessModification)  

| Param | Type | Description |
| --- | --- | --- |
| determine_tau_b | <code>Number</code> | Determine τb: Iterative (1), Set to 1 (2). Can be undefined. |
| design_method | <code>Number</code> | Design method: LRFD (1), ASD (2). Can be undefined. If determine τb has "Set to 1" value, must be undefined. |

<a name="MemberStiffnessModification+SteelStructuresCSA"></a>

### memberStiffnessModification.SteelStructuresCSA(determine_tau_b, axial_stiffness, bending_stiffness_y, bending_stiffness_z, shear_stiffness_y, shear_stiffness_z, torsional_stiffness)
,
Sets steel structures CSA

**Kind**: instance method of [<code>MemberStiffnessModification</code>](#MemberStiffnessModification)  

| Param | Type | Description |
| --- | --- | --- |
| determine_tau_b | <code>Number</code> | Determine τb: Iterative (1), Set to 1 (2). Can be undefined. |
| axial_stiffness | <code>Number</code> | Axial stiffness multiplier factor, can be undefined. If defined, apply τb is set to true. |
| bending_stiffness_y | <code>Number</code> | Bending stiffness multiplier factors Z, can be undefined. If defined, apply τb is set to true. |
| bending_stiffness_z | <code>Number</code> | Bending stiffness multiplier factors Y, can be undefined. If defined, apply τb is set to true. |
| shear_stiffness_y | <code>Number</code> | Shear stiffness Y, can be undefined. If defined, apply τb is set to true. |
| shear_stiffness_z | <code>Number</code> | Shear stiffness Z, can be undefined. If defined, apply τb is set to true. |
| torsional_stiffness | <code>Number</code> | Torsional stiffness, can be undefined. If defined, apply τb is set to true. |

<a name="setTransverseOffset"></a>

## setTransverseOffset(memberEccentricity, reference_type, reference, reference_node_index, alignment_type)
Sets transverse offset (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| memberEccentricity | <code>Object</code> | Member eccentricity to be set |
| reference_type | <code>String</code> | Reference type ("None", "Member", "Surface") |
| reference | <code>Number</code> | object index	Reference member or surface index |
| reference_node_index | <code>Number</code> | Reference member node index, in case of surface is undefined |
| alignment_type | <code>String</code> | For member offset:	LEFT_TOP, CENTER_TOP, RIGHT_TOP, LEFT_CENTER, CENTER_CENTER, RIGHT_CENTER, LEFT_BOTTOM, CENTER_BOTTOM, RIGHT_BOTTOM. 												For surface offset:	CENTER_TOP, CENTER_CENTER, CENTER_BOTTOM. |

<a name="createMemberEccentricity"></a>

## createMemberEccentricity(no, members_start_list, members_end_list, comment, params) ⇒ <code>Object</code>
Creates member eccentricity

**Kind**: global function  
**Returns**: <code>Object</code> - Created member eccentricity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member eccentricity, can be undefined |
| members_start_list | <code>Array</code> | Members start, can be undefined |
| members_end_list | <code>Array</code> | Members end, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member eccentricity parameters, can be undefined |

<a name="setRelativeValues"></a>

## setRelativeValues(member_eccentricity, alignment_type)
Sets member eccentricity for relative to section type (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| member_eccentricity | <code>Object</code> | Member eccentricity to be set |
| alignment_type | <code>String</code> | Alignment: LEFT_TOP, CENTER_TOP, RIGHT_TOP, LEFT_CENTER, CENTER_CENTER, RIGHT_CENTER, LEFT_BOTTOM, CENTER_BOTTOM, RIGHT_BOTTOM. |

<a name="getAlignmentParts"></a>

## getAlignmentParts(alignment) ⇒ <code>Array</code>
Creates horizontal and vertical strings of alignment (private)

**Kind**: global function  
**Returns**: <code>Array</code> - Horizontal and vertical strings of alignment  

| Param | Type | Description |
| --- | --- | --- |
| alignment | <code>String</code> | Alignment string |

<a name="setAbsoluteValues"></a>

## setAbsoluteValues(memberEccentricity, offset_x, offset_y, offset_z, coordinate_system)
Sets member eccentricity for absolute type (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| memberEccentricity | <code>Object</code> | Member eccentricity to be set |
| offset_x | <code>Number</code> | Eccentricity in X |
| offset_y | <code>Number</code> | Eccentricity in Y |
| offset_z | <code>Number</code> | Eccentricity in Z |
| coordinate_system | <code>Number</code> | Coordinate system, can be undefined. Default value is "Local xyz". |

<a name="setPartialActivityZoneValues"></a>

## setPartialActivityZoneValues(member_hinge, zone_values, param_type_name, param_slippage_name, param_displacement_name, param_force_name)
Sets values for partial activity zone (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| member_hinge | <code>Object</code> | Member hinge to which values has to be set |
| zone_values | <code>Array</code> | Negative / positive zone values 												- "Complete": [0] 												- "Fixed from release displacement": [1, u(x|y|z)-|φ(x|y|z)-, u(x|y|z)s-|φ(x|y|z)s-] / [1, u(x|y|z)+|φ(x|y|z)+, u(x|y|z)s+|φ(x|y|z)s+] 												- "Tearing from release force": [2, N-, u(x|y|z)s-|φ(x|y|z)s-] / [2, N+, u(x|y|z)s+|φ(x|y|z)s+] 												- "Yielding from release force": [3, N-, u(x|y|z)s-|φ(x|y|z)s-] / [3, N+, u(x|y|z)s+|φ(x|y|z)s+] 												- "Spring ineffectiveness": [4] |
| param_type_name | <code>String</code> | Parameter name for partial activity zone name |
| param_slippage_name | <code>String</code> | Parameter name for partial activity slippage name |
| param_displacement_name | <code>String</code> | Parameter name for partial activity displacement name |
| param_force_name | <code>String</code> | Parameter name for partial activity force name |

<a name="setMainHingeValues"></a>

## setMainHingeValues(member_hinge, values, property_1, property_2) ⇒
Sets values to member hinge (private)

**Kind**: global function  
**Returns**: Returns modified member hinge  

| Param | Type | Description |
| --- | --- | --- |
| member_hinge | <code>Object</code> | Member hinge |
| values | <code>Array</code> | Values to be set, [Translational/Rotational, Spring constant, Nonlinearity] 										- Values can be in two formats: 											[bool, float, string] - if bool is true (translation is enabled), then can be specified next two values (spring constant and nonlinearity) 											[bool, string]		   - if bool is false (translation is disabled), then can be specified only next one value (nonlinearity) 											Nonlinearity: can be string name or index: None (0), Fixed if negative (1), Fixed if positive (2), Failure all if negative (3), Failure all if positive (4), 														  Partial activity (5), Diagram (6), Stiffness diagram (7), Friction direction 1 (8), Friction direction 2 (9), 														  Friction direction 1 2 (10), Friction direction 1 + 2 (11) |
| property_1 | <code>String</code> | Spring constant string name |
| property_2 | <code>String</code> | Nonlinearity string name |

<a name="createMemberHinge"></a>

## createMemberHinge(no, members_start_list, members_end_list, comment, params) ⇒ <code>Object</code>
Creates member hinge (private)

**Kind**: global function  
**Returns**: <code>Object</code> - Created member hinge  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member hinge, van be undefined |
| members_start_list | <code>Array</code> | Member start, can be undefined |
| members_end_list | <code>Array</code> | Member end, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member hinge parameters, can be undefined |

<a name="setParameters"></a>

## setParameters(member_nonlinearity, parameters, param_1_name, param_2_name)
Sets parameters to member nonlinearity (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| member_nonlinearity | <code>Object</code> | Member nonlinearity to be setParameters |
| parameters | <code>Array</code> | Nonlinearity parameters |
| param_1_name | <code>String</code> | Name of first parameter |
| param_2_name | <code>String</code> | Name of first parameter, can be undefined |

<a name="createNonlinearity"></a>

## createNonlinearity(no, member_list, comment, params) ⇒ <code>Object</code>
Creates member nonlinearity

**Kind**: global function  
**Returns**: <code>Object</code> - Created member nonlinearity  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member nonlinearity, can be undefined |
| member_list | <code>Array</code> | Assigned members |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Member nonlinearity parameters, can be undefined |

<a name="MemberOpening"></a>

## MemberOpening(no, members_no, member_sets_no, comment, params)
Creates Member Opening

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of member opening, can be undefined |
| members_no | <code>Array</code> | Index list of assigned members, can be undefined (only in case list of member_sets_no is defined) |
| member_sets_no | <code>Array</code> | Index list of assigned member sets, can be undefined (only in case list of members_no is defined) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [MemberOpening(no, members_no, member_sets_no, comment, params)](#MemberOpening)
    * [.GetMemberOpening()](#MemberOpening+GetMemberOpening) ⇒
    * [.GetNo()](#MemberOpening+GetNo) ⇒
    * [.AddTypeAndLocation(reduction_type, position, note)](#MemberOpening+AddTypeAndLocation)
    * [.SetRectangleDimension(component_row, width, height)](#MemberOpening+SetRectangleDimension)
    * [.SetCircleDimension(component_row, diameter)](#MemberOpening+SetCircleDimension)
    * [.SetHexagonalDimension(component_row, width, height, width_center)](#MemberOpening+SetHexagonalDimension)
    * [.SetPosition(component_row, z_axis_reference, distance)](#MemberOpening+SetPosition)
    * [.SetMultipleDefinition(component_row, multiple_number, multiple_offset_definition_type, multiple_offset)](#MemberOpening+SetMultipleDefinition)

<a name="MemberOpening+GetMemberOpening"></a>

### memberOpening.GetMemberOpening() ⇒
**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  
**Returns**: Member Opening object  
<a name="MemberOpening+GetNo"></a>

### memberOpening.GetNo() ⇒
**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  
**Returns**: Member Opening index  
<a name="MemberOpening+AddTypeAndLocation"></a>

### memberOpening.AddTypeAndLocation(reduction_type, position, note)
Adds component row

**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  

| Param | Type | Description |
| --- | --- | --- |
| reduction_type | <code>String</code> | Reduction type (CIRCLE_OPENING, RECTANGULAR_OPENING, HEXAGONAL_OPENING) |
| position | <code>Number</code> | Position of opening, can be undefined (1.0 as default) |
| note | <code>String</code> | Note, can be undefined |

<a name="MemberOpening+SetRectangleDimension"></a>

### memberOpening.SetRectangleDimension(component_row, width, height)
Sets rectangle dimensions

**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  

| Param | Type | Description |
| --- | --- | --- |
| component_row | <code>Number</code> | Component row for which dimension is set |
| width | <code>Number</code> | Width, can be undefined (100 mm as default) |
| height | <code>Number</code> | Height, can be undefined (100 mm as default) |

<a name="MemberOpening+SetCircleDimension"></a>

### memberOpening.SetCircleDimension(component_row, diameter)
Sets circle dimension

**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  

| Param | Type | Description |
| --- | --- | --- |
| component_row | <code>Number</code> | Component row for which dimension is set |
| diameter | <code>Number</code> | Diameter, can be undefined (50 mm as default) |

<a name="MemberOpening+SetHexagonalDimension"></a>

### memberOpening.SetHexagonalDimension(component_row, width, height, width_center)
Sets hexagonal dimensions

**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  

| Param | Type | Description |
| --- | --- | --- |
| component_row | <code>Number</code> | Component row for which dimension is set |
| width | <code>Number</code> | Width, can be undefined (250 mm as default) |
| height | <code>Number</code> | Height, can be undefined (50 mm as default) |
| width_center | <code>Number</code> | Center width, can be undefined (50 mm as default) |

<a name="MemberOpening+SetPosition"></a>

### memberOpening.SetPosition(component_row, z_axis_reference, distance)
Sets position

**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  

| Param | Type | Description |
| --- | --- | --- |
| component_row | <code>Number</code> | Component row for which dimension is set |
| z_axis_reference | <code>Number</code> | Z-axis reference (TOP, CENTER, BOTTOM), can be undefined (CENTER as default) |
| distance | <code>Number</code> | Distance, can be undefined (0 mm as default) |

<a name="MemberOpening+SetMultipleDefinition"></a>

### memberOpening.SetMultipleDefinition(component_row, multiple_number, multiple_offset_definition_type, multiple_offset)
Sets multiple definition

**Kind**: instance method of [<code>MemberOpening</code>](#MemberOpening)  

| Param | Type | Description |
| --- | --- | --- |
| component_row | <code>Number</code> | Component row for which dimension is set |
| multiple_number | <code>Number</code> | Number, can be undefined (2 as default) |
| multiple_offset_definition_type | <code>String</code> | Offset definition type (ABSOLUTE, RELATIVE), can be undefined (ABSOLUTE as default) |
| multiple_offset | <code>Number</code> | Offset, can be undefined (0 m as default) |

<a name="DistancesAreAbsolute"></a>

## DistancesAreAbsolute(memberResultIntermediatePoint, absolute)
Sets division ordinates as absolute (private)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| memberResultIntermediatePoint | <code>Object</code> | Member result intermediate point to be set |
| absolute | <code>Boolean</code> | Division ordinates are absolute, can be undefined (default value is true) |

<a name="MemberRotationalRestraint"></a>

## MemberRotationalRestraint(no, member_supports_no, restraint_type, comment, params)
Creates Member Rotational Restraint

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Rotational Restraint, can be undefined |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| restraint_type | <code>String</code> | Rotational restraint type (CONTINUOUS, DISCRETE, MANUALLY) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [MemberRotationalRestraint(no, member_supports_no, restraint_type, comment, params)](#MemberRotationalRestraint)
    * [.GetNo()](#MemberRotationalRestraint+GetNo) ⇒
    * [.GetMemberRotationalRestraint()](#MemberRotationalRestraint+GetMemberRotationalRestraint) ⇒
    * [.Continuous(no, member_supports_no, material_name, sheeting_name, position_of_sheeting, continuous_beam_effect, section_deformation_cdb, beam_spacing, comment, params)](#MemberRotationalRestraint+Continuous)
    * [.Discrete(no, member_supports_no, material_name, section_name, rotational_stiffness, continuous_beam_effect, section_deformation_cdb, beam_spacing, comment, params)](#MemberRotationalRestraint+Discrete)
    * [.Manually(no, total_rotational_spring_stiffness, member_supports_no, comment, params)](#MemberRotationalRestraint+Manually)
    * [.SetContinuousParameters(modulus_of_elasticity, sheeting_thickness, sheeting_moment_of_inertia, sheeting_distance_of_ribs, width_of_section_flange, spring_stiffness)](#MemberRotationalRestraint+SetContinuousParameters)
    * [.SetDiscreteParameters(modulus_of_elasticity, section_moment_of_inertia, purlin_spacing, rotational_stiffness_value)](#MemberRotationalRestraint+SetDiscreteParameters)

<a name="MemberRotationalRestraint+GetNo"></a>

### memberRotationalRestraint.GetNo() ⇒
**Kind**: instance method of [<code>MemberRotationalRestraint</code>](#MemberRotationalRestraint)  
**Returns**: member rotational restraint index  
<a name="MemberRotationalRestraint+GetMemberRotationalRestraint"></a>

### memberRotationalRestraint.GetMemberRotationalRestraint() ⇒
**Kind**: instance method of [<code>MemberRotationalRestraint</code>](#MemberRotationalRestraint)  
**Returns**: Member Rotational Restraint object  
<a name="MemberRotationalRestraint+Continuous"></a>

### memberRotationalRestraint.Continuous(no, member_supports_no, material_name, sheeting_name, position_of_sheeting, continuous_beam_effect, section_deformation_cdb, beam_spacing, comment, params)
Creates Continuous Member Rotational Restraint

**Kind**: instance method of [<code>MemberRotationalRestraint</code>](#MemberRotationalRestraint)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Rotational Restraint, can be undefined |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| material_name | <code>String</code> | Sheeting material name |
| sheeting_name | <code>String</code> | Sheeting name |
| position_of_sheeting | <code>String</code> | Position of sheeting (POSITIVE, NEGATIVE), can be undefined (POSITIVE as default) |
| continuous_beam_effect | <code>String</code> | Continuous beam effect, can be undefined (END_PANEL as default) |
| section_deformation_cdb | <code>Boolean</code> | Section deformation CD,B, can be undefined (true as default) |
| beam_spacing | <code>Number</code> | Beam spacing, can be undefined (3 m as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberRotationalRestraint+Discrete"></a>

### memberRotationalRestraint.Discrete(no, member_supports_no, material_name, section_name, rotational_stiffness, continuous_beam_effect, section_deformation_cdb, beam_spacing, comment, params)
Creates Discrete Member Rotational Restraint

**Kind**: instance method of [<code>MemberRotationalRestraint</code>](#MemberRotationalRestraint)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Rotational Restraint, can be undefined |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| material_name | <code>String</code> | Section material name |
| section_name | <code>String</code> | Section name |
| rotational_stiffness | <code>String</code> | Rotational stiffness CD,A, can be undefined (INFINITELY as default) |
| continuous_beam_effect | <code>String</code> | Continuous beam effect, can be undefined (END_PANEL as default) |
| section_deformation_cdb | <code>Boolean</code> | Section deformation CD,B, can be undefined (true as default) |
| beam_spacing | <code>Number</code> | Beam spacing, can be undefined (3 m as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberRotationalRestraint+Manually"></a>

### memberRotationalRestraint.Manually(no, total_rotational_spring_stiffness, member_supports_no, comment, params)
Creates Manually Member Rotational Restraint

**Kind**: instance method of [<code>MemberRotationalRestraint</code>](#MemberRotationalRestraint)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Rotational Restraint, can be undefined |
| total_rotational_spring_stiffness | <code>Number</code> | Total rotational spring stiffness |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberRotationalRestraint+SetContinuousParameters"></a>

### memberRotationalRestraint.SetContinuousParameters(modulus_of_elasticity, sheeting_thickness, sheeting_moment_of_inertia, sheeting_distance_of_ribs, width_of_section_flange, spring_stiffness)
Sets parameters for Continuous Member Rotational Restraint

**Kind**: instance method of [<code>MemberRotationalRestraint</code>](#MemberRotationalRestraint)  

| Param | Type | Description |
| --- | --- | --- |
| modulus_of_elasticity | <code>Number</code> | Modulus of elasticity, can be undefined (default value taken from selected sheeting material) |
| sheeting_thickness | <code>Number</code> | Sheeting thickness, can be undefined (default value taken from selected section) |
| sheeting_moment_of_inertia | <code>Number</code> | Sheeting moment of inertia, can be undefined (default value taken from selected section) |
| sheeting_distance_of_ribs | <code>Number</code> | Sheeting distance of ribs, can be undefined (default value taken from selected section) |
| width_of_section_flange | <code>Number</code> | Width of sheeting flange, can be undefined (default value taken from selected section) |
| spring_stiffness | <code>Number</code> | Spring stiffness, can be undefined (different depending on loading as default) |

<a name="MemberRotationalRestraint+SetDiscreteParameters"></a>

### memberRotationalRestraint.SetDiscreteParameters(modulus_of_elasticity, section_moment_of_inertia, purlin_spacing, rotational_stiffness_value)
Sets parameters for Discrete Member Rotational Restraint

**Kind**: instance method of [<code>MemberRotationalRestraint</code>](#MemberRotationalRestraint)  

| Param | Type | Description |
| --- | --- | --- |
| modulus_of_elasticity | <code>Number</code> | Modulus of elasticity, can be undefined (default value taken from selected sheeting material) |
| section_moment_of_inertia | <code>Number</code> | Section moment of inertia, can be undefined (default value taken from selected section) |
| purlin_spacing | <code>Number</code> | Purling spacing |
| rotational_stiffness_value | <code>Number</code> | Rotational stiffness, can be undefined (only if rotational stiffness is INFINITELY) |

<a name="MemberShearPanel"></a>

## MemberShearPanel(no, definition_type, member_supports_no, comment, params)
Creates Member Shear Panel

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Shear Panel, can be undefined |
| definition_type | <code>String</code> | Definition type (TRAPEZOIDAL_SHEETING, BRACING, TRAPEZOIDAL_SHEETING_AND_BRACING, DEFINE_S_PROV), can be undefined (TRAPEZOIDAL_SHEETING  as default) |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |


* [MemberShearPanel(no, definition_type, member_supports_no, comment, params)](#MemberShearPanel)
    * [.AssignMemberSupports(member_supports_no)](#MemberShearPanel+AssignMemberSupports)
    * [.TrapezoidalSheeting(no, member_supports_no, position_on_section, trapezoidal_sheeting_name, fastening_arrangement, comment, params)](#MemberShearPanel+TrapezoidalSheeting)
    * [.Bracing(no, member_supports_no, position_on_section, diagonals_section_name, posts_section_name, comment, params)](#MemberShearPanel+Bracing)
    * [.TrapezoidalSheetingAndBracing(no, member_supports_no, position_on_section, trapezoidal_sheeting_name, fastening_arrangement, diagonals_section_name, posts_section_name, comment, params)](#MemberShearPanel+TrapezoidalSheetingAndBracing)
    * [.DefineSProv(no, member_supports_no, position_on_section, comment, params)](#MemberShearPanel+DefineSProv)
    * [.SetTrapezoidalSheetingParameters(shear_panel_length, girder_length, beam_spacing, shear_panel_coefficient_k1, shear_panel_coefficient_k2)](#MemberShearPanel+SetTrapezoidalSheetingParameters)
    * [.SetBracingParameters(shear_panel_length, girder_length, beam_spacing, post_spacing, number_of_bracings, diagonals_section_area, posts_section_area)](#MemberShearPanel+SetBracingParameters)
    * [.TrapezoidalSheetingAndBracingParameters(shear_panel_length, girder_length, beam_spacing, shear_panel_coefficient_k1, shear_panel_coefficient_k2, post_spacing, number_of_bracings, diagonals_section_area, posts_section_area)](#MemberShearPanel+TrapezoidalSheetingAndBracingParameters)
    * [.DefineSProvParameters(shear_panel_stiffness, girder_length)](#MemberShearPanel+DefineSProvParameters)

<a name="MemberShearPanel+AssignMemberSupports"></a>

### memberShearPanel.AssignMemberSupports(member_supports_no)
Assign member supports

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes |

<a name="MemberShearPanel+TrapezoidalSheeting"></a>

### memberShearPanel.TrapezoidalSheeting(no, member_supports_no, position_on_section, trapezoidal_sheeting_name, fastening_arrangement, comment, params)
Creates Trapezoidal sheeting Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Shear Panel, can be undefined |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| position_on_section | <code>String</code> | Position on section (UPPER_FLANGE, CENTROID, LOWER_FLANGE, DEFINE), can be undefined (UPPER_FLANGE as default) |
| trapezoidal_sheeting_name | <code>String</code> | Trapezoidal sheeting name |
| fastening_arrangement | <code>String</code> | Fastening arrangement (EVERY_RIB, EVERY_SECOND_RIB), can be undefined (EVERY_RIB as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters, can be undefined |

<a name="MemberShearPanel+Bracing"></a>

### memberShearPanel.Bracing(no, member_supports_no, position_on_section, diagonals_section_name, posts_section_name, comment, params)
Creates Bracing Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Shear Panel, can be undefined |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| position_on_section | <code>String</code> | Position on section (UPPER_FLANGE, CENTROID, LOWER_FLANGE, DEFINE), can be undefined (UPPER_FLANGE as default) |
| diagonals_section_name | <code>String</code> | Diagonal section name |
| posts_section_name | <code>String</code> | Posts section name |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberShearPanel+TrapezoidalSheetingAndBracing"></a>

### memberShearPanel.TrapezoidalSheetingAndBracing(no, member_supports_no, position_on_section, trapezoidal_sheeting_name, fastening_arrangement, diagonals_section_name, posts_section_name, comment, params)
Creates Trapezoidal Sheeting and Bracing Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Shear Panel, can be undefined |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| position_on_section | <code>String</code> | Position on section (UPPER_FLANGE, CENTROID, LOWER_FLANGE, DEFINE), can be undefined (UPPER_FLANGE as default) |
| trapezoidal_sheeting_name | <code>String</code> | Trapezoidal sheeting name |
| fastening_arrangement | <code>String</code> | Fastening arrangement (EVERY_RIB, EVERY_SECOND_RIB), can be undefined (EVERY_RIB as default) |
| diagonals_section_name | <code>String</code> | Diagonals section name |
| posts_section_name | <code>String</code> | Posts section name |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberShearPanel+DefineSProv"></a>

### memberShearPanel.DefineSProv(no, member_supports_no, position_on_section, comment, params)
Creates Define S-prov Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Member Shear Panel, can be undefined |
| member_supports_no | <code>Array</code> | List of assigned member supports indexes, can be undefined |
| position_on_section | <code>String</code> | Position on section (UPPER_FLANGE, CENTROID, LOWER_FLANGE, DEFINE), can be undefined (UPPER_FLANGE as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Additional parameters |

<a name="MemberShearPanel+SetTrapezoidalSheetingParameters"></a>

### memberShearPanel.SetTrapezoidalSheetingParameters(shear_panel_length, girder_length, beam_spacing, shear_panel_coefficient_k1, shear_panel_coefficient_k2)
Sets parameters for Trapezoidal Sheeting Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| shear_panel_length | <code>Number</code> | Shear panel length |
| girder_length | <code>Number</code> | Girder length, can be undefined (define length automatically as default) |
| beam_spacing | <code>Number</code> | Beam spacing |
| shear_panel_coefficient_k1 | <code>Number</code> | Shear panel coefficient K1, can be undefined |
| shear_panel_coefficient_k2 | <code>Number</code> | Shear panel coefficient K2, can be undefined |

<a name="MemberShearPanel+SetBracingParameters"></a>

### memberShearPanel.SetBracingParameters(shear_panel_length, girder_length, beam_spacing, post_spacing, number_of_bracings, diagonals_section_area, posts_section_area)
Sets parameters for Bracing Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| shear_panel_length | <code>Number</code> | Shear panel length |
| girder_length | <code>Number</code> | Girder length, can be undefined (define length automatically as default) |
| beam_spacing | <code>Number</code> | Beam spacing |
| post_spacing | <code>Number</code> | Posts spacing |
| number_of_bracings | <code>Number</code> | Number of bracings, can be undefined (1 as default) |
| diagonals_section_area | <code>Number</code> | Diagonals section area, can be undefined |
| posts_section_area | <code>Number</code> | Posts section area, can be undefined |

<a name="MemberShearPanel+TrapezoidalSheetingAndBracingParameters"></a>

### memberShearPanel.TrapezoidalSheetingAndBracingParameters(shear_panel_length, girder_length, beam_spacing, shear_panel_coefficient_k1, shear_panel_coefficient_k2, post_spacing, number_of_bracings, diagonals_section_area, posts_section_area)
Sets parameters for Trapezoidal Sheeting and Bracing Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| shear_panel_length | <code>Number</code> | Shear panel length |
| girder_length | <code>Number</code> | Girder length, can be undefined (define length automatically as default) |
| beam_spacing | <code>Number</code> | Beam spacing |
| shear_panel_coefficient_k1 | <code>Number</code> | Shear panel coefficient K1, can be undefined |
| shear_panel_coefficient_k2 | <code>Number</code> | Shear panel coefficient K2, can be undefined |
| post_spacing | <code>Number</code> | Posts spacing |
| number_of_bracings | <code>Number</code> | Number of bracings, can be undefined (1 as default) |
| diagonals_section_area | <code>Number</code> | Diagonals section area, can be undefined |
| posts_section_area | <code>Number</code> | Posts section area, can be undefined |

<a name="MemberShearPanel+DefineSProvParameters"></a>

### memberShearPanel.DefineSProvParameters(shear_panel_stiffness, girder_length)
Sets parameters Define S-prov Member Shear Panel

**Kind**: instance method of [<code>MemberShearPanel</code>](#MemberShearPanel)  

| Param | Type | Description |
| --- | --- | --- |
| shear_panel_stiffness | <code>Number</code> | Shear panel stiffness |
| girder_length | <code>Number</code> | Girder length, can be undefined (define length automatically as default) |

