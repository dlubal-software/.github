# Guide Objects 

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/GuideObjects)*


## CoordinateSystem


### CoordinateSystem(no, origin_coordinate_x, origin_coordinate_y, origin_coordinate_z, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Coordinate System Tag

    
    * **origin_coordinate_x** (*float*) – X-Coordinate

    
    * **origin_coordinate_y** (*float*) – Y-Coordinate

    
    * **origin_coordinate_z** (*float*) – Z-Coordinate


    * **name** (*str*, *optional*) – User Defined Coordinate System Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### CoordinateSystem.OffsetXYZ(no, origin_coordinate_x, origin_coordinate_y, origin_coordinate_z, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Coordinate System Tag

    
    * **origin_coordinate_x** (*float*) – X-Coordinate

    
    * **origin_coordinate_y** (*float*) – Y-Coordinate

    
    * **origin_coordinate_z** (*float*) – Z-Coordinate


    * **name** (*str*, *optional*) – User Defined Coordinate System Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### CoordinateSystem.ThreePoints(no, origin_coordinate_x, origin_coordinate_y, origin_coordinate_z, u_axis_point_coordinate_x, u_axis_point_coordinate_y, u_axis_point_coordinate_z, uw_plane_point_coordinate_x, uw_plane_point_coordinate_y, uw_plane_point_coordinate_z, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Coordinate System Tag

    
    * **origin_coordinate_x** (*float*) – Origin Point X-Coordinate

    
    * **origin_coordinate_y** (*float*) – Origin Point Y-Coordinate

    
    * **origin_coordinate_z** (*float*) – Origin Point Z-Coordinate

    
    * **u_axis_point_coordinate_x** (*float*) – Point on +U-Axis - 1st point X-Coordinate

    
    * **u_axis_point_coordinate_y** (*float*) – Point on +U-Axis - 1st point Y-Coordinate

    
    * **u_axis_point_coordinate_z** (*float*) – Point on +U-Axis - 1st point Z-Coordinate

    
    * **uw_plane_point_coordinate_x** (*float*) – Point in +UW-Plane - 2nd Point X-Coordinate

    
    * **uw_plane_point_coordinate_y** (*float*) – Point in +UW-Plane - 2nd Point Y-Coordinate

    
    * **uw_plane_point_coordinate_z** (*float*) – Point in +UW-Plane - 2nd Point Z-Coordinate


    * **name** (*str*, *optional*) – User Defined Coordinate System Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### CoordinateSystem.TwoPointsAndAngle(no, origin_coordinate_x, origin_coordinate_y, origin_coordinate_z, u_axis_point_coordinate_x, u_axis_point_coordinate_y, u_axis_point_coordinate_z, uw_plane_angle, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Coordinate System Tag

    
    * **origin_coordinate_x** (*float*) – Origin Point X-Coordinate

    
    * **origin_coordinate_y** (*float*) – Origin Point Y-Coordinate

    
    * **origin_coordinate_z** (*float*) – Origin Point Z-Coordinate

    
    * **u_axis_point_coordinate_x** (*float*) – Point on +U-Axis - 1st point X-Coordinate

    
    * **u_axis_point_coordinate_y** (*float*) – Point on +U-Axis - 1st point Y-Coordinate

    
    * **u_axis_point_coordinate_z** (*float*) – Point on +U-Axis - 1st point Z-Coordinate

    
    * **uw_plane_angle** (*float*) – Rotation About U-Axis


    * **name** (*str*, *optional*) – User Defined Coordinate System Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### CoordinateSystem.PointAndThreeAngles(no, origin_coordinate_x, origin_coordinate_y, origin_coordinate_z, rotation_angles_sequence, rotation_angle_1, rotation_angle_2, rotation_angle_3, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Coordinate System Tag

    
    * **origin_coordinate_x** (*float*) – Origin Point X-Coordinate

    
    * **origin_coordinate_y** (*float*) – Origin Point Y-Coordinate

    
    * **origin_coordinate_z** (*float*) – Origin Point Z-Coordinate

    
    * **rotation_angles_sequence** (*enum*) – Coordinate System Rotation Angles Sequence Enumeration

    
    * **rotation_angle_1** (*float*) – Rotation about X Axes

    
    * **rotation_angle_2** (*float*) – Rotation about Y Axes

    
    * **rotation_angle_3** (*float*) – Rotation about Z Axes


    * **name** (*str*, *optional*) – User Defined Coordinate System Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited



### CoordinateSystem.GetCoordinateSystem(object_index, model)

* **Parameters**

    
    * **object_index** (*int*) – Coordinate System Index

    
    * **model** (*RFEM Class, optional*) - Model to be edited

    

## Note


### Note(no, text, type, parameter, offset_para, rotation, display_style, name, show_comment, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Note Tag

    
    * **text** (*str*) – Note Text

    
    * **type** (*enum*) – Note Type Enumeration

    
    * **parameter** (*int/list*) – Note Type Parameter

        > * for type == NoteType.NOTE_TYPE_POINT:   
        parameter = [point_coordinate_x, point_coordinate_y, point_coordinate_z]
                
        > * for type == NoteType.NOTE_TYPE_NODE:    
        parameter = node number

        > * for type == NoteType.NOTE_TYPE_LINE:    
        parameter = [line number, note_member_reference_type enumeration, member_distance_is_defined_as_relative(bool), member_distance_relative/absolute] (if relative is true than value must be between 0.0 and 1.0)
                
        > * for type == NoteType.NOTE_TYPE_MEMBER:  
        parameter = [member number, note_member_reference_type enumeration, member_distance_is_defined_as_relative(bool), member_distance_relative/absolute] (if relative is true than value must be between 0.0 and 1.0)
                
        > * for type == NoteType.NOTE_TYPE_SURFACE:     
        parameter = [surface number, note_surface_reference_type enumeration, surface_first_coordinate, surface_second_coordinate]

    
    * **offset_para** (*list*) – Offset Parameter

        > * for offset_para[0] == NoteOffsetType.OFFSET_TYPE_XYZ:   
        offset_para = [offset_coordinate_x, offset_coordinate_y, offset_coordinate_z]
    
        > * for offset_para[0] == NoteOffsetType.OFFSET_TYPE_XY:    
        offset_para = [offset_coordinate_x, offset_coordinate_y]
    
        > * for offset_para[0] == NoteOffsetType.OFFSET_TYPE_XZ:    
        offset_para = [offset_coordinate_x, offset_coordinate_z]
    
        > * for offset_para[0] == NoteOffsetType.OFFSET_TYPE_YZ:    
        offset_para = [offset_coordinate_y, offset_coordinate_z]

    
    * **rotation** (*float*) – Note Display Rotation

    
    * **display_style** (*int*) – Note Display Style Tag (Value must be from 0 to 4)

    
    * **name** (*str*) – User Defined Name

    
    * **show_comment** (*bool*) – Enable/disable Show Comment


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RFEM Class, optional*) - Model to be edited


