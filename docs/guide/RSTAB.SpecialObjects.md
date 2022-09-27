# Special Objects


## NodalRelease 


### NodalRelease(comment='', params=None, model=<class 'RSTAB.initModel.Model'>)



## StructureModification 


### StructureModification(no, modify_stiffnesses, modify_stiffnesses_materials_list, modify_stiffnesses_sections_list, modify_stiffnesses_members_list, modify_stiffnesses_surfaces_list, modify_stiffnesses_member_hinges_list, modify_stiffnesses_line_hinges_list, modify_stiffnesses_nodal_supports_list, modify_stiffnesses_line_supports_list, modify_stiffnesses_member_supports_list, modify_stiffnesses_surface_supports_list, comment, params, model)

Modify only objects allready existing and used/assigned in the model.


* **Parameters**

    
    * **no** (*int*, *optional*) – Structure Modification Tag


    * **modify_stiffnesses** (*dict*, *optional*) – Modify Stiffnesses


    * **modify_stiffnesses_materials_list** (*list*, *optional*) – Modify Stiffnesses Materials List


    * **modify_stiffnesses_sections_list** (*list*, *optional*) – Modify Stiffnesses Sections List


    * **modify_stiffnesses_members_list** (*list*, *optional*) – Modify Stiffnesses Members List


    * **modify_stiffnesses_surfaces_list** (*list*, *optional*) – Modify Stiffnesses Surfaces List


    * **modify_stiffnesses_member_hinges_list** (*list*, *optional*) – Modify Stiffnesses Member Hinges List


    * **modify_stiffnesses_line_hinges_list** (*list*, *optional*) – Modify Stiffnesses Line Hinges List


    * **modify_stiffnesses_nodal_supports_list** (*list*, *optional*) – Modify Stiffnesses Nodal Supports List


    * **modify_stiffnesses_line_supports_list** (*list*, *optional*) – Modify Stiffnesses Line Support List


    * **modify_stiffnesses_member_supports_list** (*list*, *optional*) – Modify Stiffnesses Member Suppoorts List


    * **modify_stiffnesses_surface_supports_list** (*list*, *optional*) – Modify Stiffnesses Surface Supports List


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


    > material_item = {'no': 1, 'material_name': 1, 'modification_type': 'DIVISION_FACTOR', 'E_and_G': 1.5, 'comment': 'comment'}
    
    > section_item = {'no': 1, 'section_name': 'IPN 300', 'A': 1.0, 'A_y':1.0, 'A_z': 1.0, 'J': 1.0, 'I_y': 1.0, 'I_z': 1.0}
    
    > member_item = {'no': 2, 'member_modification': 1, 'members':'11', 'comment': ''}
    
    > surface_item = {'no': 1, 'surface_modification': 1, 'surfaces':'2', 'comment': ''}
    
    > member_hinge_item = {'no': 1, 'member_side': 'Start', 'C_u_x': 1, 'C_u_y': 0, 'C_u_z': 0, 'C_phi_x': 0, 'C_phi_y': 0, 'C_phi_z': 0}
    
    > line_hinge_item = {'no': 1, 'C_u_x': 1, 'C_u_y': 0, 'C_u_z': 0, 'C_phi_x': 0, 'C_phi_y': 0, 'C_phi_z': 0}
    
    > nodal_support_item = {'C_u_X': 1, 'C_u_Y': 0, 'C_u_Z': 0, 'C_phi_X': 0, 'C_phi_Y': 0, 'C_phi_Z': 0}
    
    > line_support_item = {'C_u_X': 1, 'C_u_Y': 0, 'C_u_Z': 0, 'C_phi_X': 0, 'C_phi_Y': 0, 'C_phi_Z': 0}
    
    > member_support_item = {'C_u_x': 1, 'C_u_y': 0, 'C_u_z': 0, 'C_s_x': 0, 'C_s_y': 0, 'C_s_z': 0, 'C_phi_x': 0}
    
    > surface_support_item = {'C_u_X': 1, 'C_u_Y': 0, 'C_u_Z': 0, 'C_v_xz': 0, 'C_v_yz': 0}

    > modify_stiffness = {'modify_stiffnesses_gamma_m': False, 'modify_stiffnesses_materials': False, 'modify_stiffnesses_sections': False, 'modify_stiffnesses_members': False, 'modify_stiffnesses_surfaces': False, 'modify_stiffnesses_member_hinges': False, 'modify_stiffnesses_line_hinges': False, 'modify_stiffnesses_nodal_supports': False, 'modify_stiffnesses_line_supports': False, 'modify_stiffnesses_member_supports': False, 'modify_stiffnesses_surface_supports': False, 'modify_stiffness_member_reinforcement': False, 'modify_stiffness_surface_reinforcement': False, 'modify_stiffness_timber_members_due_moisture_class': False, 'nonlinearities_disabled_material_nonlinearity_models': False, 'nonlinearities_disabled_material_temperature_nonlinearities': False, 'nonlinearities_disabled_line_hinges': False, 'nonlinearities_disabled_member_types': False, 'nonlinearities_disabled_member_nonlinearities': False, 'nonlinearities_disabled_solid_types_contact_or_surfaces_contact': False, 'nonlinearities_disabled_member_hinges': False, 'nonlinearities_disabled_nodal_supports': False, 'nonlinearities_disabled_line_supports': False, 'nonlinearities_disabled_member_supports': False, 'nonlinearities_disabled_surface_supports': False, 'deactivate_members_enabled': False}


