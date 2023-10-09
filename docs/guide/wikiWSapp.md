# WS Application Methods and Types

To obtain this list just execute print(client). 

Usage: client.service.get_active_model()

## Methods

Methods (29):

```js
close_application()
close_model(xs:int index, xs:boolean save_changes)
delete_project(xs:string project_path)
get_active_model()
get_conversion_tables()
get_current_project()
get_detailed_logging()
get_information()
get_list_of_existing_projects()
get_list_of_existing_templates()
get_model(xs:int index)
get_model_list()
get_project(xs:string project_path)
get_saf_settings()
get_settings_program_language()
get_template(xs:string template_path)
import_from(xs:string file_path)
new_model(xs:string model_name)
new_model_as_copy(xs:string model_name, xs:string file_path)
new_model_from_template(xs:string model_name, xs:string file_path)
new_project(ns0:project_info project_info)
new_template(ns0:project_info template_info)
open_model(xs:string model_path)
save_model(xs:int index)
set_as_current_project(xs:string project_path)
set_conversion_tables(ns0:ConversionTables value)
set_detailed_logging(xs:boolean value)
set_saf_settings(ns0:SafConfiguration value)
set_settings_program_language(ns0:settings_program_language settings_program_language)
```
## Types

Types(80)

```js
ns0:ConversionTable
ns0:ConversionTables
ns0:MaterialConversionTablesManager
ns0:MaterialConversionTablesManager_config
ns0:MaterialConversionTablesManager_configs
ns0:SafConfiguration
ns0:SectionConversionTablesManager
ns0:SectionConversionTablesManager_config
ns0:SectionConversionTablesManager_configs
ns0:application_information
ns0:application_types
ns0:array_of_model_names
ns0:array_of_projects
ns0:array_of_templates
ns0:close_application
ns0:close_applicationResponse
ns0:close_model
ns0:close_modelResponse
ns0:delete_project
ns0:delete_projectResponse
ns0:get_active_model
ns0:get_active_modelResponse
ns0:get_conversion_tables
ns0:get_conversion_tablesResponse
ns0:get_current_project
ns0:get_current_projectResponse
ns0:get_detailed_logging
ns0:get_detailed_loggingResponse
ns0:get_information
ns0:get_informationResponse
ns0:get_list_of_existing_projects
ns0:get_list_of_existing_projectsResponse
ns0:get_list_of_existing_templates
ns0:get_list_of_existing_templatesResponse
ns0:get_model
ns0:get_modelResponse
ns0:get_model_list
ns0:get_model_listResponse
ns0:get_project
ns0:get_projectResponse
ns0:get_saf_settings
ns0:get_saf_settingsResponse
ns0:get_settings_program_language
ns0:get_settings_program_languageResponse
ns0:get_template
ns0:get_templateResponse
ns0:import_from
ns0:import_fromResponse
ns0:import_from_output
ns0:new_model
ns0:new_modelResponse
ns0:new_model_as_copy
ns0:new_model_as_copyResponse
ns0:new_model_from_template
ns0:new_model_from_templateResponse
ns0:new_project
ns0:new_projectResponse
ns0:new_template
ns0:new_templateResponse
ns0:open_model
ns0:open_modelResponse
ns0:program_language_name_type
ns0:project_info
ns0:region_type
ns0:save_model
ns0:save_modelResponse
ns0:set_as_current_project
ns0:set_as_current_projectResponse
ns0:set_conversion_tables
ns0:set_conversion_tablesResponse
ns0:set_detailed_logging
ns0:set_detailed_loggingResponse
ns0:set_saf_settings
ns0:set_saf_settingsResponse
ns0:set_settings_program_language
ns0:set_settings_program_languageResponse
ns0:settings_program_language
ns0:string_and_string_pair
ns0:string_and_string_pair_array
ns0:unit_system_type
```