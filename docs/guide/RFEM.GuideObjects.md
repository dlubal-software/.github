# Guide Objects 

Go to *[[source]](https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/GuideObjects)*


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


