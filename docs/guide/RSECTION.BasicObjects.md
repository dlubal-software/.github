# Basic Objects 


## Element 


### Element(no, points_no, thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Element Tag


    * **points_no** (*str*) – Points Number


    * **thickness** (*float*) – Element Thickness


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Element.Arc(no, points_no, control_point, alpha_adjustment_target, thickness, effective_thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Element Tag


    * **points_no** (*list*) – Points Number


    * **control_point** (*list*) – Control Point coordinate for Arc in [Y, Z]


    * **alpha_adjustment_target** (*enum*) – Element Arc Alpha Adjustment Target Enumeration


    * **thickness** (*float*) – Element Thickness


    * **effective_thickness** (*list*) – Effective Thickness List


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Element.Circle(no, center_of_cirle, circle_radius, thickness, effective_thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Element Tag


    * **center_of_cirle** (*list*) – Coordinate of Circle Center


    * **circle_radius** (*float*) – Circle Radius


    * **thickness** (*float*) – Element Thickness


    * **effective_thickness** (*list*) – Effective Thickness List


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Element.DeleteElement(elements_no, model)

* **Parameters**

    
    * **elements_no** (*str*) – Elements Number


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Element.Ellipse(no, points_no, control_point, thickness, effective_thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Element Tag


    * **points_no** (*list*) – Points Number


    * **control_point** (*list*) – Control Point coordinate for Ellipse in [Y, Z]


    * **thickness** (*float*) – Element Thickness


    * **effective_thickness** (*list*) – Effective Thickness List


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Element.NURBS(no, control_points, components, weights, order, thickness, effective_thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Element Tag


    * **control_points** (*str*) – String of Start Point and End Point (example: ‘1 2’)


    * **components** (*list of lists*) – Control Points List

        > component = [[start_point_x, start_point_y], [control_point_x, control_point_y], ..., [end_point_x, end_point_y]]


    * **weights** (*list*) – Control Points Weights

        > weights list lenght must be equal to components length


    * **order** (*int*) – Nurbs Order


    * **thickness** (*float*) – Element Thickness


    * **effective_thickness** (*list*) – Effective Thickness List


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Element.Parabola(no, points_no, control_point, alpha, thickness, effective_thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Element Tag


    * **points_no** (*list*) – Points Number


    * **control_point** (*list*) – Control Point coordinate for Parabola in [Y, Z]


    * **alpha** (*float*) – Alpha Angle (in Radians)


    * **thickness** (*float*) – Element Thickness


    * **effective_thickness** (*list*) – Effective Thickness List


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Element.SingleLine(no, points_no, thickness, effective_thickness, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Element Tag


    * **points_no** (*str*) – Points Number


    * **thickness** (*float*) – Element Thickness


    * **effective_thickness** (*list*) – Effective Thickness List


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



## Line 


### Line(no, points_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **points_no** (*str*) – Points Number


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Line.Arc(no, points_no, control_point, alpha_adjustment_target, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **points_no** (*list*) – Points Number


    * **control_point** (*list*) – Control Point coordinate for Arc in [Y, Z]


    * **alpha_adjustment_target** (*enum*) – Line Arc Alpha Adjustment Target Enumeration


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Line.Circle(no, center_of_cirle, circle_radius, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **center_of_cirle** (*list*) – Coordinate of Circle Center


    * **circle_radius** (*float*) – Circle Radius


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Line.DeleteLine(lines_no, model)

* **Parameters**

    
    * **lines_no** (*str*) – Line Number


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Line.Ellipse(no, points_no, control_point, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **points_no** (*list*) – Points Number


    * **control_point** (*list*) – Control Point coordinate for Ellipse in [Y, Z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Line.NURBS(no, control_points, components, order, weights, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **control_points** (*str*) – String of Start Point and End Point (example: ‘1 2’)


    * **components** (*list of lists*) – Control Points List

        > component = [[start_point_x, start_point_y], [control_point_x, control_point_y], ..., [end_point_x, end_point]]


    * **order** (*int*) – Nurbs Order


    * **weights** (*list*, *optional*) – Control Points Weights


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Line.Parabola(no, points_no, control_point, alpha, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **points_no** (*list*) – Points Number


    * **control_point** (*list*) – Control Point coordinate for Parabola in [Y, Z]


    * **alpha** (*float*) – Alpha Angle (in Radians)


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Line.Polyline(no, points_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Line Tag


    * **points_no** (*str*) – Points Number


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



## Material 


### Material(no, name, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Material Tag


    * **name** (*str*) – Material Name


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Material.DeleteMaterial(materials_no, model)

* **Parameters**

    
    * **materials_no** (*str*) – Materials Number


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



## Opening 


### Opening(no, boundary_lines, part_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Opening Tag


    * **boundary_lines** (*str*) – Boundary Lines Number


    * **part_no** (*int*) – Part Number


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict**, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Opening.DeleteOpening(openings_no, model)

* **Parameters**

    
    * **openings_no** (*str*) – Openings Number


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



## Part 


### Part(no, boundary_lines, material_no, integrated_objects, integrated_objects_auto, integrated_openings, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Part Tag


    * **boundary_lines** (*str*) – Boundary Lines Number


    * **material_no** (*int*) – Material Number


    * **integrated_objects** (*bool*) – Enable/Disable Integrated Objects Option


    * **integrated_objects_auto** (*bool*) – Enable/Disable Integrated Objects Auto Option


    * **integrated_openings** (*str*) – Inegrated Openings Line Number


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Part.DeletePart(parts_no, model)

* **Parameters**

    
    * **parts_no** (*str*) – Parts Number


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



## Point 


### Point(no, coordinate_Y, coordinate_Z, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Point Tag


    * **coordinate_Y** (*float*) – Y-Coordinate


    * **coordinate_Z** (*float*) – Z-Coordinate


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Point.BetweenTwoLocations(no, start_point_y, start_point_z, end_point_y, end_point_z, point_reference, parameters, offset, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Point Tag


    * **start_point_y** (*float*) – Start Point Coordinate Y


    * **start_point_z** (*float*) – Start Point Coordinate Z


    * **end_point_y** (*float*) – End Point Coordinate Y


    * **end_point_z** (*float*) – End Point Coordinate Y


    * **point_reference** (*enum*) – Point Reference Type Enumeration


    * **parameters** (*list*) – Point Reference Parameter List

        > * for relative reference:     
        parameters = [True, distance_from_start_relative] ex: [True, 0.5]

        > * for absolute reference:     
        parameters = [False, distance_from_start_absolute]


    * **offset** (*float*) – Offset Value


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Point.BetweenTwoPoints(no, start_point_no, end_point_no, point_reference, parameters, offset, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Point Tag


    * **start_point_no** (*int*) – Start Point Number


    * **end_point_no** (*int*) – End Point Number


    * **point_reference** (*enum*) – Point Reference Type Enumeration


    * **parameters** (*list*) – Point Reference Parameter List

        > * for relative reference:     
        parameters = [True, distance_from_start_relative] ex: [True, 0.5]

        > * for absolute reference:     
        parameters = [False, distance_from_start_absolute]


    * **offset** (*float*) – Offset Value


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Point.DeletePoint(points_no, model)

* **Parameters**

    
    * **points_no** (*str*) – Points Number


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Point.OnLine(no, line_no, point_reference, parameters, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Point Tag


    * **line_no** (*int*) – Reference Line Number


    * **point_reference** (*enum*) – Point Reference Type Enumeration


    * **parameters** (*list*) – Point Reference Parameter List

        > * for relative reference:     
        parameters = [True, distance_from_start_relative] ex: [True, 0.5]

        > * for absolute reference:     
        parameters = [False, distance_from_start_absolute]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Point.Standard(no, reference_point, coordinate_system, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Point Tag


    * **reference_point** (*int*) – Reference Point Number


    * **coordinate_system** (*list*) – Coordinate System List

        > coordinate_system = [coordinate_Y, coordinate_Z]


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



## Section 


### Section(no, name, material_no, comment, params, model)

* **Parameters**

    
    * **no** (*int*) – Section Tag


    * **name** (*str*) – Section Name


    * **material_no** (*int*) – Material Number


    * **comment** (*str*, *optional*) – Comments


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSECTION Class*, *optional*) – Model to be edited



### Section.DeleteSection(sections_no, model)

* **Parameters**

    
    * **sections_no** (*str*) – Sections Number


    * **model** (*RSECTION Class*, *optional*) – Model to be edited

