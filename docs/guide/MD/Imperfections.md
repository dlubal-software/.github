# Imperfections

<a name="ImperfectionCase"></a>

## ImperfectionCase
**Kind**: global class  

<a name="new_ImperfectionCase_new"></a>

### new ImperfectionCase(no, comment, params)
Creates Imperfection case

**Returns**: Created empty Imperfection case  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Imperfection case, can be undefined |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="ImperfectionCase+GetNo"></a>

### imperfectionCase.GetNo() ⇒
**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  
**Returns**: Imperfection case number  
<a name="ImperfectionCase+GetImperfectionCase"></a>

### imperfectionCase.GetImperfectionCase() ⇒
**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  
**Returns**: Imperfection case object  
<a name="ImperfectionCase+LocalImperfection"></a>

### imperfectionCase.LocalImperfection(no, load_cases_to_assign, assign_to_all_load, is_active, comment, params)
Creates Local imperfection case

**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of Imperfection case, can be undefined |
| load_cases_to_assign | <code>Array</code> | Load cases to assign (array of numbers) |
| assign_to_all_load | <code>Boolean</code> | Assign to all load combinations without assigned imperfection case, can be undefined (true as default) |
| is_active | <code>Boolean</code> | Is imperfection case active, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="ImperfectionCase+Notional"></a>

### imperfectionCase.Notional(no, load_cases_to_assign, notional_loads_from_load_case_no, assign_to_all_load, is_active, comment, params)
Creates Notional loads from load case imperfection case

**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of imperfection case, can be undefined |
| load_cases_to_assign | <code>Array</code> | Load cases to assign (array of numbers) |
| notional_loads_from_load_case_no | <code>Number</code> | Notional loads from load case |
| assign_to_all_load | <code>Boolean</code> | Assign to all load combinations without assigned imperfection case, can be undefined (true as default) |
| is_active | <code>Boolean</code> | Is imperfection case active, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="ImperfectionCase+InitialSway"></a>

### imperfectionCase.InitialSway(no, load_cases_to_assign, level_imperfections, coordinate_system_no, level_direction, imperfection_direction, sway_coefficients_reciprocal, assign_to_all_load, is_active, comment, params)
Creates Initial sway imperfection case

**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Index of imperfection case, can be undefined |
| load_cases_to_assign | <code>Array</code> | Load cases to assign (array of numbers) |
| level_imperfections | <code>Array</code> | Level imperfections ([level1, [level2, theta_1_x, theta_1_y], ... [level_n, theta_n_x, theta_n_x]]) |
| coordinate_system_no | <code>Number</code> | Coordinate system, can be undefined (Global XYZ by default) |
| level_direction | <code>String</code> | Level direction, can be undefined (GLOBAL_IN_Z by default if Global XYZ is specified, otherwise USER_DEFINED_IN_W by default) |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined (XY by default) |
| sway_coefficients_reciprocal | <code>Boolean</code> | Sway coefficient as reciprocal by 1, can be undefined (true as default) |
| assign_to_all_load | <code>Boolean</code> | Assign to all load combinations without assigned imperfection case, can be undefined (true as default) |
| is_active | <code>Boolean</code> | Is imperfection case active, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="ImperfectionCase+StaticDeformation"></a>

### imperfectionCase.StaticDeformation(no, load_cases_to_assign, source_type, shape_from_no, imperfection_magnitude, magnitude_assignment_type, node_no, coordinate_system_no, imperfection_direction, assign_to_all_load, is_active, comment, params)
Returns Static deformation Imperfection case

**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Imperfection case, can be undefined |
| load_cases_to_assign | <code>Array</code> | Array of load case numbers |
| source_type | <code>String</code> | Source type, can be undefined ("Select load case" by default) |
| shape_from_no | <code>Number</code> | Static deformation from load case (source type is Select load case) or from load combination (source type is Select load combination) |
| imperfection_magnitude | <code>Number</code> | Imperfection magnitude - Imperfection magnitude |
| magnitude_assignment_type | <code>String</code> | Imperfection magnitude - reference location, can be undefined ("Location with largest displacement" by default) |
| node_no | <code>Number</code> | Node number, additional parameter to "Node no." reference location, with "Location with largest displacement" must be undefined |
| coordinate_system_no | <code>Number</code> | Coordinate system, can be undefined (Global XYZ by default) |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined (XY by default) |
| assign_to_all_load | <code>Boolean</code> | Assign to all load combinations without assigned imperfection case, can be undefined (true as default) |
| is_active | <code>Boolean</code> | Is imperfection case active, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="ImperfectionCase+GroupOfImperfection"></a>

### imperfectionCase.GroupOfImperfection(no, load_cases_to_assign, imperfection_cases, assign_to_all_load, is_active, comment, params)
Returns Group of Imperfection cases

**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Imperfection case, can be undefined |
| load_cases_to_assign | <code>Array</code> | Array of load case numbers |
| imperfection_cases | <code>Array</code> | Imperfection cases ([[case_no_1, factor_1, (comment_1)], ... [case_no_n, factor_n, (comment_n)]]) |
| assign_to_all_load | <code>Boolean</code> | Assign to all load combinations without assigned imperfection case, can be undefined (true as default) |
| is_active | <code>Boolean</code> | Is imperfection case active, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="ImperfectionCase+GetImperfectionCase"></a>

### imperfectionCase.GetImperfectionCase() ⇒
**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  
**Returns**: Imperfection case object  
<a name="ImperfectionCase+GetNo"></a>

### imperfectionCase.GetNo() ⇒
**Kind**: instance method of [<code>ImperfectionCase</code>](#ImperfectionCase)  
**Returns**: Imperfection case number  
<a name="MemberImperfection"></a>

## MemberImperfection
**Kind**: global class  

<a name="new_MemberImperfection_new"></a>

### new MemberImperfection(no, imperfection_case_no, members_no, comment, params)
Creates Member imperfection

**Returns**: Member imperfection  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| members_no | <code>Array</code> | Array of members numbers |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberImperfection+InitialSway"></a>

### memberImperfection.InitialSway(no, imperfection_case_no, members_no, coordinate_system, imperfection_direction, reference_to_members, comment, params)
Creates Initial Sway Member imperfection

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| members_no | <code>Array</code> | Array of members numbers |
| coordinate_system | <code>String/Number</code> | Coordinate system, can be "LOCAL" or "PRINCIPAL" or number of user coordinate system. Can be undefined |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined.                                                  Coordinate system "LOCAL": "LOCAL_Y", "LOCAL_Z""LOCAL_Y_NEGATIVE", "LOCAL_Z_NEGATIVE"                                                  Coordinate system "PRINCIPAL": "U", "V", "U_NEGATIVE", "V_NEGATIVE"                                                  User coordinate system: "X_U", "Y_V", "Z_W", "X_U_NEGATIVE", "Y_V_NEGATIVE", "Z_W_NEGATIVE" |
| reference_to_members | <code>Boolean</code> | Reference to list of members, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberImperfection+InitialBow"></a>

### memberImperfection.InitialBow(no, imperfection_case_no, members_no, coordinate_system, imperfection_direction, reference_to_members, comment, params)
Creates Initial Bow Member imperfection

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| members_no | <code>Array</code> | Array of members numbers |
| coordinate_system | <code>String/Number</code> | Coordinate system, can be "LOCAL" or "PRINCIPAL" or number of user coordinate system. Can be undefined |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined.                                                  Coordinate system "LOCAL": "LOCAL_Y", "LOCAL_Z""LOCAL_Y_NEGATIVE", "LOCAL_Z_NEGATIVE"                                                  Coordinate system "PRINCIPAL": "U", "V", "U_NEGATIVE", "V_NEGATIVE"                                                  User coordinate system: "X_U", "Y_V", "Z_W", "X_U_NEGATIVE", "Y_V_NEGATIVE", "Z_W_NEGATIVE" |
| reference_to_members | <code>Boolean</code> | Reference to list of members, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberImperfection+InitialBowAndCriterion"></a>

### memberImperfection.InitialBowAndCriterion(no, imperfection_case_no, members_no, coordinate_system, imperfection_direction, reference_to_members, comment, params)
Creates Initial Bow and Criterion Member imperfection

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| members_no | <code>Array</code> | Array of members numbers |
| coordinate_system | <code>String/Number</code> | Coordinate system, can be "LOCAL" or "PRINCIPAL" or number of user coordinate system. Can be undefined |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined.                                                  Coordinate system "LOCAL": "LOCAL_Y", "LOCAL_Z""LOCAL_Y_NEGATIVE", "LOCAL_Z_NEGATIVE"                                                  Coordinate system "PRINCIPAL": "U", "V", "U_NEGATIVE", "V_NEGATIVE"                                                  User coordinate system: "X_U", "Y_V", "Z_W", "X_U_NEGATIVE", "Y_V_NEGATIVE", "Z_W_NEGATIVE" |
| reference_to_members | <code>Boolean</code> | Reference to list of members, can be undefined (false as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberImperfection+Relative"></a>

### memberImperfection.Relative(initial_sway, active_criterion, active_bow)
Modifies Member imperfection to definition type Relative

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| initial_sway | <code>Number</code> | Relative initial sway / Initial bow / Initial bow and criterion, can be undefined (200 as default) |
| active_criterion | <code>String</code> | Active criterion, can be undefined ("Always" as default). Can be set only when Initial bow and criterion imperfection type is defined, in other case must be undefined. |
| active_bow | <code>Number</code> | Active bow from member slenderness, can be defined only when active criterion has "DEFINE" value |

<a name="MemberImperfection+Absolute"></a>

### memberImperfection.Absolute(initial_sway, active_criterion, active_bow)
Modifies Member imperfection to definition type Absolute

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| initial_sway | <code>Number</code> | Absolute initial sway / bow |
| active_criterion | <code>String</code> | Active criterion, can be undefined ("Always" as default). Can be set only when Initial bow and criterion imperfection type is defined, in other case must be undefined. |
| active_bow | <code>Number</code> | Active bow from member slenderness, can be defined only when active criterion has "DEFINE" value |

<a name="MemberImperfection+EN_1992_1"></a>

### memberImperfection.EN\_1992\_1(basic_value_relative, height, columns_inn_row_count, reduction_factor_h_limit)
Modifies Member imperfection to definition type EN 1992 1

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| basic_value_relative | <code>Number</code> | Basic value, can be undefined (200 as default) |
| height | <code>Number</code> | Structure height, can be undefined (0.001 as default) |
| columns_inn_row_count | <code>Number</code> | Number of columns in one row, can be undefined (1 as default) |
| reduction_factor_h_limit | <code>Boolean</code> | Set alpha_h >= acc. to equation (5.1), can be undefined (true as default) |

<a name="MemberImperfection+EN_1993_1_1"></a>

### memberImperfection.EN\_1993\_1\_1(basic_value_relative, height, columns_inn_row_count)
Modifies Member imperfection to definition type EN 1993 1.1

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| basic_value_relative | <code>Number</code> | Basic value, can be undefined (200 as default) |
| height | <code>Number</code> | Structure height, can be undefined (0.001 as default) |
| columns_inn_row_count | <code>Number</code> | Number of columns in one row, can be undefined (1 as default) |

<a name="MemberImperfection+InitialBow_EN_1993_1_1"></a>

### memberImperfection.InitialBow\_EN\_1993\_1\_1(section_design)
Modifies Member imperfection to definition type EN 1993 1.1 ()

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| section_design | <code>String</code> | Section design, can be undefined ("PLASTIC" as default) |

<a name="MemberImperfection+EN_1995_1_1"></a>

### memberImperfection.EN\_1995\_1\_1(value, height)
Modifies Member imperfection to definition type EN 1995 1.1

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Basic value / initial bow, can be undefined (200 as default with Initial sway, 400 with Initial bow) |
| height | <code>Number</code> | Structure height, can be undefined (0.001 as default). With Initial Bow imperfection is undefined. |

<a name="MemberImperfection+ANSI_CURRENT"></a>

### memberImperfection.ANSI\_CURRENT(notional_load_coefficient, standard_factor_enumeration)
Modifies Member imperfection to definition type ANSI/AISC 360-16 | Current

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| notional_load_coefficient | <code>Number</code> | Notional load coefficient, can be undefined (0.002 by default) |
| standard_factor_enumeration | <code>Number</code> | Factor alpha, can be undefined (LRFD by default). With Initial Bow imperfection is undefined. |

<a name="MemberImperfection+InitialBow_ANSI_CURRENT"></a>

### memberImperfection.InitialBow\_ANSI\_CURRENT(initial_bow)
Modifies Initial Bow Member imperfection to definition type ANSI/AISC 360-16 | Current

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| initial_bow | <code>Number</code> | Initial bow |

<a name="MemberImperfection+ANSI_GRAVITY_LOAD"></a>

### memberImperfection.ANSI\_GRAVITY\_LOAD(load_case_combination_no, notional_load_coefficient, standard_factor_enumeration)
Modifies Member imperfection to definition type ANSI/AISC 360-16 | Gravity Load

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| notional_load_coefficient | <code>Number</code> | Notional load coefficient, can be undefined (0.002 by default) |
| standard_factor_enumeration | <code>Number</code> | Factor alpha, can be undefined (LRFD by default) |

<a name="MemberImperfection+InitialBow_ANSI_GRAVITY_LOAD"></a>

### memberImperfection.InitialBow\_ANSI\_GRAVITY\_LOAD(load_case_combination_no, initial_bow)
Modifies Member imperfection to definition type ANSI/AISC 360-16 | Gravity Load

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| initial_bow | <code>Number</code> | Initial bow, can be undefined (1000 as default) |

<a name="MemberImperfection+CSA_CURRENT"></a>

### memberImperfection.CSA\_CURRENT(value)
Modifies Member imperfection to definition type CSA S16:19 | Current

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Notional load coefficient (Initial Sway) / Initial bow (Initial bow), can be undefined (0.005 / 1000 by default) |

<a name="MemberImperfection+CSA_GRAVITY_LOAD"></a>

### memberImperfection.CSA\_GRAVITY\_LOAD(load_case_combination_no, value)
Modifies Member imperfection to definition type CSA S16:19 | Gravity Load

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| value | <code>Number</code> | Notional load coefficient (Initial Sway) / Initial bow (Initial bow), can be undefined (0.005 / 1000 by default) |

<a name="MemberImperfection+GB_50017_2017_CURRENT"></a>

### memberImperfection.GB\_50017\_2017\_CURRENT(basic_value_relative, structure_height, number_of_floors)
Modifies Member imperfection to definition type GB 50017-2017 | Current

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| basic_value_relative | <code>Number</code> | Basic value relative, can be undefined (250 by default) |
| structure_height | <code>Number</code> | Structure height, can be undefined (0.001 by default) |
| number_of_floors | <code>Number</code> | Total number of floors, can be undefined (1 by default) |

<a name="MemberImperfection+GB_50017_2017_GRAVITY_LOAD"></a>

### memberImperfection.GB\_50017\_2017\_GRAVITY\_LOAD(load_case_combination_no, notional_load_coefficient, number_of_floors)
Modifies Member imperfection to definition type GB 50017-2017 | Gravity Load

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| notional_load_coefficient | <code>Number</code> | Notional load coefficient, can be undefined (0.004 by default) |
| number_of_floors | <code>Number</code> | Total number of floors, can be undefined (1 by default) |

<a name="MemberImperfection+EN_1999_1_1"></a>

### memberImperfection.EN\_1999\_1\_1(section_design)
Modifies Member imperfection to definition type EN 1999-1-1

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| section_design | <code>String</code> | Section design, can be undefined ("PLASTIC" as default) |

<a name="MemberImperfection+GB_50017_2017"></a>

### memberImperfection.GB\_50017\_2017(buckling_curve)
Modifies Member imperfection to definition type GB 50017-2017

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| buckling_curve | <code>String</code> | Buckling curve, can be undefined ("d" as default) |

<a name="MemberImperfection+ReferenceToListOfMembers"></a>

### memberImperfection.ReferenceToListOfMembers(enable)
Sets reference to list of members

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| enable | <code>Boolean</code> | Can be undefined (true as default) |

<a name="MemberImperfection+RefereDistanceToTheMemberEnd"></a>

### memberImperfection.RefereDistanceToTheMemberEnd(enable)
Sets refer distance to the member end

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| enable | <code>Boolean</code> | Can be undefined (true as default) |

<a name="MemberImperfection+ImperfectionOverTotalLength"></a>

### memberImperfection.ImperfectionOverTotalLength(enable)
Sets imperfection over total length of member

**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| enable | <code>Boolean</code> | Can be undefined (true as default) |

<a name="MemberImperfection+GetMemberImperfection"></a>

### memberImperfection.GetMemberImperfection() ⇒
**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  
**Returns**: Member imperfection object  
<a name="MemberImperfection+GetNo"></a>

### memberImperfection.GetNo() ⇒
**Kind**: instance method of [<code>MemberImperfection</code>](#MemberImperfection)  
**Returns**: Member imperfection number  
<a name="MemberSetImperfection"></a>

## MemberSetImperfection
**Kind**: global class  

<a name="new_MemberSetImperfection_new"></a>

### new MemberSetImperfection(no, imperfection_case_no, member_sets_no, comment, params)
Creates Member Set imperfection

**Returns**: Member set imperfection  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member set imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| member_sets_no | <code>Array</code> | Array of member sets numbers |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberSetImperfection+InitialSway"></a>

### memberSetImperfection.InitialSway(no, imperfection_case_no, member_sets_no, coordinate_system, imperfection_direction, comment, params)
Creates Initial Sway Member set imperfection

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member set imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| member_sets_no | <code>Array</code> | Array of member sets numbers |
| coordinate_system | <code>String/Number</code> | Coordinate system, can be "LOCAL" or "PRINCIPAL" or number of user coordinate system. Can be undefined |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined.                                                  Coordinate system "LOCAL": "LOCAL_Y", "LOCAL_Z""LOCAL_Y_NEGATIVE", "LOCAL_Z_NEGATIVE"                                                  Coordinate system "PRINCIPAL": "U", "V", "U_NEGATIVE", "V_NEGATIVE"                                                  User coordinate system: "X_U", "Y_V", "Z_W", "X_U_NEGATIVE", "Y_V_NEGATIVE", "Z_W_NEGATIVE" |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberSetImperfection+InitialBow"></a>

### memberSetImperfection.InitialBow(no, imperfection_case_no, member_sets_no, coordinate_system, imperfection_direction, comment, params)
Creates Initial Bow Member set imperfection

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member set imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| member_sets_no | <code>Array</code> | Array of member sets numbers |
| coordinate_system | <code>String/Number</code> | Coordinate system, can be "LOCAL" or "PRINCIPAL" or number of user coordinate system. Can be undefined |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined.                                                  Coordinate system "LOCAL": "LOCAL_Y", "LOCAL_Z""LOCAL_Y_NEGATIVE", "LOCAL_Z_NEGATIVE"                                                  Coordinate system "PRINCIPAL": "U", "V", "U_NEGATIVE", "V_NEGATIVE"                                                  User coordinate system: "X_U", "Y_V", "Z_W", "X_U_NEGATIVE", "Y_V_NEGATIVE", "Z_W_NEGATIVE" |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberSetImperfection+InitialBowAndCriterion"></a>

### memberSetImperfection.InitialBowAndCriterion(no, imperfection_case_no, member_sets_no, coordinate_system, imperfection_direction, comment, params)
Creates Initial Bow and Criterion Member set imperfection

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Member set imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| member_sets_no | <code>Array</code> | Array of member sets numbers |
| coordinate_system | <code>String/Number</code> | Coordinate system, can be "LOCAL" or "PRINCIPAL" or number of user coordinate system. Can be undefined |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined.                                                  Coordinate system "LOCAL": "LOCAL_Y", "LOCAL_Z""LOCAL_Y_NEGATIVE", "LOCAL_Z_NEGATIVE"                                                  Coordinate system "PRINCIPAL": "U", "V", "U_NEGATIVE", "V_NEGATIVE"                                                  User coordinate system: "X_U", "Y_V", "Z_W", "X_U_NEGATIVE", "Y_V_NEGATIVE", "Z_W_NEGATIVE" |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>Object</code> | Parameters, can be undefined |

<a name="MemberSetImperfection+Relative"></a>

### memberSetImperfection.Relative(initial_sway, active_criterion, active_bow)
Modifies Member set imperfection to definition type Relative

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| initial_sway | <code>Number</code> | Relative initial sway / Initial bow / Initial bow and criterion, can be undefined (200 as default) |
| active_criterion | <code>String</code> | Active criterion, can be undefined ("Always" as default). Can be set only when Initial bow and criterion imperfection type is defined, in other case must be undefined. |
| active_bow | <code>Number</code> | Active bow from member slenderness, can be defined only when active criterion has "DEFINE" value |

<a name="MemberSetImperfection+Absolute"></a>

### memberSetImperfection.Absolute(initial_sway, active_criterion, active_bow)
Modifies Member set imperfection to definition type Absolute

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| initial_sway | <code>Number</code> | Absolute initial sway / bow |
| active_criterion | <code>String</code> | Active criterion, can be undefined ("Always" as default). Can be set only when Initial bow and criterion imperfection type is defined, in other case must be undefined. |
| active_bow | <code>Number</code> | Active bow from member slenderness, can be defined only when active criterion has "DEFINE" value |

<a name="MemberSetImperfection+EN_1992_1"></a>

### memberSetImperfection.EN\_1992\_1(basic_value_relative, height, columns_inn_row_count, reduction_factor_h_limit)
Modifies Member set imperfection to definition type EN 1992 1

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| basic_value_relative | <code>Number</code> | Basic value, can be undefined (200 as default) |
| height | <code>Number</code> | Structure height, can be undefined (0.001 as default) |
| columns_inn_row_count | <code>Number</code> | Number of columns in one row, can be undefined (1 as default) |
| reduction_factor_h_limit | <code>Boolean</code> | Set alpha_h >= acc. to equation (5.1), can be undefined (true as default) |

<a name="MemberSetImperfection+EN_1993_1_1"></a>

### memberSetImperfection.EN\_1993\_1\_1(basic_value_relative, height, columns_inn_row_count)
Modifies Member set imperfection to definition type EN 1993 1.1

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| basic_value_relative | <code>Number</code> | Basic value, can be undefined (200 as default) |
| height | <code>Number</code> | Structure height, can be undefined (0.001 as default) |
| columns_inn_row_count | <code>Number</code> | Number of columns in one row, can be undefined (1 as default) |

<a name="MemberSetImperfection+InitialBow_EN_1993_1_1"></a>

### memberSetImperfection.InitialBow\_EN\_1993\_1\_1(section_design)
Modifies Member set imperfection to definition type EN 1993 1.1 ()

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| section_design | <code>String</code> | Section design, can be undefined ("PLASTIC" as default) |

<a name="MemberSetImperfection+EN_1995_1_1"></a>

### memberSetImperfection.EN\_1995\_1\_1(value, height)
Modifies Member set imperfection to definition type EN 1995 1.1

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Basic value / initial bow, can be undefined (200 as default with Initial sway, 400 with Initial bow) |
| height | <code>Number</code> | Structure height, can be undefined (0.001 as default). With Initial Bow imperfection is undefined. |

<a name="MemberSetImperfection+ANSI_CURRENT"></a>

### memberSetImperfection.ANSI\_CURRENT(notional_load_coefficient, standard_factor_enumeration)
Modifies Member set imperfection to definition type ANSI/AISC 360-16 | Current

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| notional_load_coefficient | <code>Number</code> | Notional load coefficient, can be undefined (0.002 by default) |
| standard_factor_enumeration | <code>Number</code> | Factor alpha, can be undefined (LRFD by default). With Initial Bow imperfection is undefined. |

<a name="MemberSetImperfection+InitialBow_ANSI_CURRENT"></a>

### memberSetImperfection.InitialBow\_ANSI\_CURRENT(initial_bow)
Modifies Initial Bow Member set imperfection to definition type ANSI/AISC 360-16 | Current

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| initial_bow | <code>Number</code> | Initial bow |

<a name="MemberSetImperfection+ANSI_GRAVITY_LOAD"></a>

### memberSetImperfection.ANSI\_GRAVITY\_LOAD(load_case_combination_no, notional_load_coefficient, standard_factor_enumeration)
Modifies Member set imperfection to definition type ANSI/AISC 360-16 | Gravity Load

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| notional_load_coefficient | <code>Number</code> | Notional load coefficient, can be undefined (0.002 by default) |
| standard_factor_enumeration | <code>Number</code> | Factor alpha, can be undefined (LRFD by default) |

<a name="MemberSetImperfection+InitialBow_ANSI_GRAVITY_LOAD"></a>

### memberSetImperfection.InitialBow\_ANSI\_GRAVITY\_LOAD(load_case_combination_no, initial_bow)
Modifies Member set imperfection to definition type ANSI/AISC 360-16 | Gravity Load

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| initial_bow | <code>Number</code> | Initial bow, can be undefined (1000 as default) |

<a name="MemberSetImperfection+CSA_CURRENT"></a>

### memberSetImperfection.CSA\_CURRENT(value)
Modifies Member set imperfection to definition type CSA S16:19 | Current

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Notional load coefficient (Initial Sway) / Initial bow (Initial bow), can be undefined (0.005 / 1000 by default) |

<a name="MemberSetImperfection+CSA_GRAVITY_LOAD"></a>

### memberSetImperfection.CSA\_GRAVITY\_LOAD(load_case_combination_no, value)
Modifies Member set imperfection to definition type CSA S16:19 | Gravity Load

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| value | <code>Number</code> | Notional load coefficient (Initial Sway) / Initial bow (Initial bow), can be undefined (0.005 / 1000 by default) |

<a name="MemberSetImperfection+GB_50017_2017_CURRENT"></a>

### memberSetImperfection.GB\_50017\_2017\_CURRENT(basic_value_relative, structure_height, number_of_floors)
Modifies Member set imperfection to definition type GB 50017-2017 | Current

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| basic_value_relative | <code>Number</code> | Basic value relative, can be undefined (250 by default) |
| structure_height | <code>Number</code> | Structure height, can be undefined (0.001 by default) |
| number_of_floors | <code>Number</code> | Total number of floors, can be undefined (1 by default) |

<a name="MemberSetImperfection+GB_50017_2017_GRAVITY_LOAD"></a>

### memberSetImperfection.GB\_50017\_2017\_GRAVITY\_LOAD(load_case_combination_no, notional_load_coefficient, number_of_floors)
Modifies Member set imperfection to definition type GB 50017-2017 | Gravity Load

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| load_case_combination_no | <code>Number</code> | Axial forces Ny from load case or load combination number |
| notional_load_coefficient | <code>Number</code> | Notional load coefficient, can be undefined (0.004 by default) |
| number_of_floors | <code>Number</code> | Total number of floors, can be undefined (1 by default) |

<a name="MemberSetImperfection+EN_1999_1_1"></a>

### memberSetImperfection.EN\_1999\_1\_1(section_design)
Modifies Member set imperfection to definition type EN 1999-1-1

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| section_design | <code>String</code> | Section design, can be undefined ("PLASTIC" as default) |

<a name="MemberSetImperfection+GB_50017_2017"></a>

### memberSetImperfection.GB\_50017\_2017(buckling_curve)
Modifies Member set imperfection to definition type GB 50017-2017

**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| buckling_curve | <code>String</code> | Buckling curve, can be undefined ("d" as default) |

<a name="MemberSetImperfection+GetMemberSetImperfection"></a>

### memberSetImperfection.GetMemberSetImperfection() ⇒
**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  
**Returns**: Member set imperfection object  
<a name="MemberSetImperfection+GetNo"></a>

### memberSetImperfection.GetNo() ⇒
**Kind**: instance method of [<code>MemberSetImperfection</code>](#MemberSetImperfection)  
**Returns**: Member set imperfection number  
<a name="SurfaceImperfection"></a>

## SurfaceImperfection(no, imperfection_case_no, surfaces_no, comment, params) ⇒
Creates default Surface imperfection

**Kind**: global function  
**Returns**: Surface imperfection  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Surface imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| surfaces_no | <code>Array</code> | Array of surfaces numbers |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Parameters, can be undefined |


<a name="SurfaceImperfection+Relative"></a>

### surfaceImperfection.Relative(no, imperfection_case_no, surfaces_no, reference_length, initial_bow_relative, imperfection_direction, comment, params)
Creates relative Surface imperfection

**Kind**: instance method of [<code>SurfaceImperfection</code>](#SurfaceImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Surface imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| surfaces_no | <code>Array</code> | Array of surfaces numbers |
| reference_length | <code>Number</code> | Reference length |
| initial_bow_relative | <code>Number</code> | Relative initial bow, can be undefined (200 as default) |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined ("LOCAL_Z" as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Parameters, can be undefined |

<a name="SurfaceImperfection+Absolute"></a>

### surfaceImperfection.Absolute(no, imperfection_case_no, surfaces_no, initial_bow, imperfection_direction, comment, params)
Creates absolute Surface imperfection

**Kind**: instance method of [<code>SurfaceImperfection</code>](#SurfaceImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Surface imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| surfaces_no | <code>Array</code> | Array of surfaces numbers |
| initial_bow | <code>Number</code> | Absolute initial bow, can be undefined (100 as default) |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined ("LOCAL_Z" as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Parameters, can be undefined |

<a name="SurfaceImperfection+GetSurfaceImperfection"></a>

### surfaceImperfection.GetSurfaceImperfection() ⇒
**Kind**: instance method of [<code>SurfaceImperfection</code>](#SurfaceImperfection)  
**Returns**: Surface imperfection object  
<a name="SurfaceImperfection+GetNo"></a>

### surfaceImperfection.GetNo() ⇒
**Kind**: instance method of [<code>SurfaceImperfection</code>](#SurfaceImperfection)  
**Returns**: Surface imperfection number  
<a name="SurfaceSetImperfection"></a>

## SurfaceSetImperfection(no, imperfection_case_no, surface_sets_no, comment, params) ⇒
Creates default Surface set imperfection

**Kind**: global function  
**Returns**: Surface set imperfection  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Surface set imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| surface_sets_no | <code>Array</code> | Array of surfaces numbers |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Parameters, can be undefined |


<a name="SurfaceSetImperfection+Relative"></a>

### surfaceSetImperfection.Relative(no, imperfection_case_no, surface_sets_no, reference_length, initial_bow_relative, imperfection_direction, comment, params)
Creates relative Surface set imperfection

**Kind**: instance method of [<code>SurfaceSetImperfection</code>](#SurfaceSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Surface set imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| surface_sets_no | <code>Array</code> | Array of surface sets numbers |
| reference_length | <code>Number</code> | Reference length |
| initial_bow_relative | <code>Number</code> | Relative initial bow, can be undefined (200 as default) |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined ("LOCAL_Z" as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Parameters, can be undefined |

<a name="SurfaceSetImperfection+Absolute"></a>

### surfaceSetImperfection.Absolute(no, imperfection_case_no, surface_sets_no, initial_bow, imperfection_direction, comment, params)
Creates absolute Surface set imperfection

**Kind**: instance method of [<code>SurfaceSetImperfection</code>](#SurfaceSetImperfection)  

| Param | Type | Description |
| --- | --- | --- |
| no | <code>Number</code> | Number of Surface set imperfection, can be undefined |
| imperfection_case_no | <code>Number</code> | Imperfection case number |
| surface_sets_no | <code>Array</code> | Array of surface sets numbers |
| initial_bow | <code>Number</code> | Absolute initial bow, can be undefined (100 as default) |
| imperfection_direction | <code>String</code> | Imperfection direction, can be undefined ("LOCAL_Z" as default) |
| comment | <code>String</code> | Comment, can be undefined |
| params | <code>String</code> | Parameters, can be undefined |

<a name="SurfaceSetImperfection+GetSurfaceImperfection"></a>

### surfaceSetImperfection.GetSurfaceImperfection() ⇒
**Kind**: instance method of [<code>SurfaceSetImperfection</code>](#SurfaceSetImperfection)  
**Returns**: Surface set imperfection object  
<a name="SurfaceSetImperfection+GetNo"></a>

### surfaceSetImperfection.GetNo() ⇒
**Kind**: instance method of [<code>SurfaceSetImperfection</code>](#SurfaceSetImperfection)  
**Returns**: Surface set imperfection number  
