# Python Articles 📰

## How to connect to remote PC

Much of our development involved testing on localhost i.e. RFEM and the Client side by side on one computer. Althought this is valid scenario we aimed from the beginning to enable Client to connect to remote PC. With the latest update (branch: OndrejMichal-remote_PC_connection) it is possible. 

To make it easy here are some usefull tips:

* Be sure to use RFEM6 license with unrestricted WebServices only. At the moment only Enterprise meets the requirements.
* Be sure to check if ports on the server side (with RFEM) are not blocked for example in the antivirus. By default port numbers are 8081-8090.
* Checks for open ports are included in the initialization routine.

## How to edit multiple models in one script

If your project requires editing multiple models you can do it. There are 3 options to choose from:

1. Default option is the same as it was from beginning. Initialize Model() once and you don't have to care about it at all during execution. That corresponds to the original idea of the Client.
2. If you want to do tens or hundreds of operations in one model and then switch to another, you can do it easily by calling Model() before switching it. This is executed in one session i.e. as fast as possible.
3. Create instance of a Model() and use this as method parameter to apply changes to specific model. This comes handy when making small amount of changes between a lot of models.

### Examples

Ad 1.

```py
Model(True, "TestModel") <-- create new model
Material(1,'S235') <-- assign material to TestModel
Material(2,'S235') <-- assign material to TestModel
```

Ad 2.

```py
model1 = Model(True, 'TestModel1') <-- create new model
Material(1,'S235') <-- assign material to TestModel1
Material(2,'S235') <-- assign material to TestModel1

model2 = Model(True, 'TestModel2') <-- create new model
Material(3,'S275') <-- assign material to TestModel2

Model(False, 'TestModel1') <-- switch
Material(4,'S235') <-- assign material to TestModel1

Model(False, 'TestModel2') <-- switch
Material(5,'S275') <-- assign material to TestModel2
```

Ad 3.

```py
model1 = Model(True, 'TestModel1') <-- create new model
Material(1,'S235', model = model1) <-- assign to TestModel1
Material(2,'S235', model = model1) <-- assign to TestModel1

model2 = Model(True, 'TestModel2') <-- create new model
Material(3,'S275', model = model2) <-- assign to TestModel2

Material(4,'S235', model = model1) <-- assign to TestModel1

Material(5,'S275', model = model2) <-- assign to TestModel2
```

## How to get results

Although RFEM Python Client is nice and shiny, without results it doesn't bring much fruit. This changes soon. 

### HTML result report
Right now there is option to get all of the results in concise HTML format via function **ExportResultTablesToHtml()** in [Reports/html.py](https://github.com/Dlubal-Software/RFEM_Python_Client/blob/main/RFEM/Reports/html.py). This comes handy when overall table report is needed containing tens or even hundreds of tables. See example [here](https://user-images.githubusercontent.com/37547309/184657585-48d7b48e-86e9-434f-9ee3-147cd2dc02a2.png).

### Result tables 
But when the task is to optimize the structure or to get that one specific result, single table comes long way. For this we are bringing 258 functions to retrieve table for any combination of loading type, loading number, and object number. Summary tables are included. With this we will also prepare functions to get list of available parameters, maximums, and minimums. For more details look at the implementation at [Results/resultTables.py](https://github.com/Dlubal-Software/RFEM_Python_Client/blob/main/RFEM/Results/resultTables.py).

### Missing functions 
If there is a specific function you are missing, please use [Discussions](https://github.com/Dlubal-Software/RFEM_Python_Client/discussions) or [Issues](https://github.com/Dlubal-Software/RFEM_Python_Client/issues) section to report it. Will be more than happy to discuss it.

### Soon available result table functions 

```py
BuildingStoriesForcesInSpandrels()
BuildingStoriesForcesInShearWalls()
BuildingStoriesCentresMassRigidity()
BuildingStoriesInterstoryDrifts()
BuildingStoriesStoryActions()
CalculationDiagrams()
CriticalLoadFactors()
EfeectiveLengthsAndCriticalLoadsByEigenvector()
EfeectiveLengthsAndCriticalLoadsByMember()
EigenvectorsByMember()
EigenvectorsByNode()
EigenvectorsBySolid()
EigenvectorsBySurface()
Errors()
LineHingesDeformations()
LineHingesForces()
LinesSlabWallConnections()
LinesSupportForces()
MembersByEigenvector()
MembersContactForces()
MembersGlobalDeformations()
MembersHingeDeformations()
MembersHingeForces()
MembersInternalForces()
MembersInternalForcesByMemberSet()
MembersInternalForcesBySection()
MembersLocalDeformations()
MembersStrains()
ModalAnalysisEffectiveModalMasses()
ModalAnalysisMassesInLocations()
ModalAnalysisMembersByModeShape()
ModalAnalysisModeShapesByMember()
ModalAnalysisModeShapesByNode()
ModalAnalysisModeShapesBySolid()
ModalAnalysisModeShapesBySurface()
ModalAnalysisNaturalFrequencies()
ModalAnalysisNodesByModeShape()
ModalAnalysisParticipationFactors()
ModalAnalysisSolidsByModeShape()
ModalAnalysisSurfacesByModeShape()
NodesByEigenvector()
NodesDeformations()
NodesSupportForces()
SolidsBasicPlasticStrains()
SolidsBasicStresses()
SolidsBasicTotalStrains()
SolidsByEigenvector()
SolidsDeformations()
SolidsEquivalentPlasticStrains()
SolidsEquivalentStresses()
SolidsEquivalentTotalStrains()
SolidsGasQuantities()
SolidsPrincipalPlasticStrains()
SolidsPrincipalStresses()
SolidsPrincipalTotalStrains()
SpectralAnalysisBuildingStoriesCentresMassRigidity()
SpectralAnalysisBuildingStoriesForcesInShearWalls()
SpectralAnalysisBuildingStoriesForcesInSpandrels()
SpectralAnalysisBuildingStoriesInterstoryDrifts()
SpectralAnalysisBuildingStoriesStoryActions()
SpectralAnalysisLineHingesDeformations()
SpectralAnalysisLineHingesForces()
SpectralAnalysisLinesSlabWallConnections()
SpectralAnalysisLinesSupportForces()
SpectralAnalysisMembersContactForces()
SpectralAnalysisMembersGlobalDeformations()
SpectralAnalysisMembersHingeDeformations()
SpectralAnalysisMembersHingeForces()
SpectralAnalysisMembersInternalForces()
SpectralAnalysisMembersInternalForcesByMemberSet()
SpectralAnalysisMembersInternalForcesBySection()
SpectralAnalysisMembersLocalDeformations()
SpectralAnalysisMembersStrains()
SpectralAnalysisNodesDeformations()
SpectralAnalysisNodesPseudoAccelerations()
SpectralAnalysisNodesPseudoVelocities()
SpectralAnalysisNodesSupportForces()
SpectralAnalysisSolidsBasicStresses()
SpectralAnalysisSolidsBasicTotalStrains()
SpectralAnalysisSolidsDeformations()
SpectralAnalysisSolidsEquivalentStresses()
SpectralAnalysisSolidsEquivalentTotalStrains()
SpectralAnalysisSolidsGasQuantities()
SpectralAnalysisSolidsPrincipalStresses()
SpectralAnalysisSolidsPrincipalTotalStrains()
SpectralAnalysisSummary()
SpectralAnalysisSurfacesBasicInternalForces()
SpectralAnalysisSurfacesBasicStresses()
SpectralAnalysisSurfacesBasicTotalStrains()
SpectralAnalysisSurfacesContactStresses()
SpectralAnalysisSurfacesDesignInternalForces()
SpectralAnalysisSurfacesElasticStressComponents()
SpectralAnalysisSurfacesEquivalentStressesBach()
SpectralAnalysisSurfacesEquivalentStressesMises()
SpectralAnalysisSurfacesEquivalentStressesRankine()
SpectralAnalysisSurfacesEquivalentStressesTresca()
SpectralAnalysisSurfacesEquivalentTotalStrainsBach()
SpectralAnalysisSurfacesEquivalentTotalStrainsMises()
SpectralAnalysisSurfacesEquivalentTotalStrainsRankine()
SpectralAnalysisSurfacesEquivalentTotalStrainsTresca()
SpectralAnalysisSurfacesGlobalDeformations()
SpectralAnalysisSurfacesLocalDeformations()
SpectralAnalysisSurfacesMaximumTotalStrains()
SpectralAnalysisSurfacesPrincipalInternalForces()
SpectralAnalysisSurfacesPrincipalStresses()
SpectralAnalysisSurfacesPrincipalTotalStrains()
StabilityIncrementalAnalysisBuildingStoriesCentresMassRigidity()
StabilityIncrementalAnalysisBuildingStoriesForcesInShearWalls()
StabilityIncrementalAnalysisBuildingStoriesForcesInSpandrels()
StabilityIncrementalAnalysisBuildingStoriesInterstoryDrifts()
StabilityIncrementalAnalysisBuildingStoriesStoryActions()
StabilityIncrementalAnalysisCalculationDiagrams()
StabilityIncrementalAnalysisLineHingesDeformations()
StabilityIncrementalAnalysisLineHingesForces()
StabilityIncrementalAnalysisLinesSlabWallConnections()
StabilityIncrementalAnalysisLinesSupportForces()
StabilityIncrementalAnalysisMembersContactForces()
StabilityIncrementalAnalysisMembersGlobalDeformations()
StabilityIncrementalAnalysisMembersHingeDeformations()
StabilityIncrementalAnalysisMembersHingeForces()
StabilityIncrementalAnalysisMembersInternalForces()
StabilityIncrementalAnalysisMembersInternalForcesByMemberSet()
StabilityIncrementalAnalysisMembersInternalForcesBySection()
StabilityIncrementalAnalysisMembersLocalDeformations()
StabilityIncrementalAnalysisMembersStrains()
StabilityIncrementalAnalysisNodesDeformations()
StabilityIncrementalAnalysisNodesSupportForces()
StabilityIncrementalAnalysisSolidsBasicPlasticStrains()
StabilityIncrementalAnalysisSolidsBasicStresses()
StabilityIncrementalAnalysisSolidsBasicTotalStrains()
StabilityIncrementalAnalysisSolidsDeformations()
StabilityIncrementalAnalysisSolidsEquivalentPlasticStrains()
StabilityIncrementalAnalysisSolidsEquivalentStresses()
StabilityIncrementalAnalysisSolidsEquivalentTotalStrains()
StabilityIncrementalAnalysisSolidsGasQuantities()
StabilityIncrementalAnalysisSolidsPrincipalPlasticStrains()
StabilityIncrementalAnalysisSolidsPrincipalStresses()
StabilityIncrementalAnalysisSolidsPrincipalTotalStrains()
StabilityIncrementalAnalysisSummary()
StabilityIncrementalAnalysisSurfacesBasicInternalForces()
StabilityIncrementalAnalysisSurfacesBasicPlasticStrains()
StabilityIncrementalAnalysisSurfacesBasicStresses()
StabilityIncrementalAnalysisSurfacesBasicTotalStrains()
StabilityIncrementalAnalysisSurfacesContactStresses()
StabilityIncrementalAnalysisSurfacesDesignInternalForces()
StabilityIncrementalAnalysisSurfacesElasticStressComponents()
StabilityIncrementalAnalysisSurfacesEquivalentPlasticStrainsBach()
StabilityIncrementalAnalysisSurfacesEquivalentPlasticStrainsMises()
StabilityIncrementalAnalysisSurfacesEquivalentPlasticStrainsRankine()
StabilityIncrementalAnalysisSurfacesEquivalentPlasticStrainsTresca()
StabilityIncrementalAnalysisSurfacesEquivalentStressesBach()
StabilityIncrementalAnalysisSurfacesEquivalentStressesMises()
StabilityIncrementalAnalysisSurfacesEquivalentStressesRankine()
StabilityIncrementalAnalysisSurfacesEquivalentStressesTresca()
StabilityIncrementalAnalysisSurfacesEquivalentTotalStrainsBach()
StabilityIncrementalAnalysisSurfacesEquivalentTotalStrainsMises()
StabilityIncrementalAnalysisSurfacesEquivalentTotalStrainsRankine()
StabilityIncrementalAnalysisSurfacesEquivalentTotalStrainsTresca()
StabilityIncrementalAnalysisSurfacesGlobalDeformations()
StabilityIncrementalAnalysisSurfacesLocalDeformations()
StabilityIncrementalAnalysisSurfacesMaximumPlasticStrains()
StabilityIncrementalAnalysisSurfacesMaximumTotalStrains()
StabilityIncrementalAnalysisSurfacesPrincipalInternalForces()
StabilityIncrementalAnalysisSurfacesPrincipalPlasticStrains()
StabilityIncrementalAnalysisSurfacesPrincipalStresses()
StabilityIncrementalAnalysisSurfacesPrincipalTotalStrains()
Summary()
SurfacesBasicInternalForces()
SurfacesBasicPlasticStrains()
SurfacesBasicStresses()
SurfacesBasicTotalStrains()
SurfacesByEigenvector()
SurfacesContactStresses()
SurfacesDesignInternalForces()
SurfacesElasticStressComponents()
SurfacesEquivalentPlasticStrainsBach()
SurfacesEquivalentPlasticStrainsMises()
SurfacesEquivalentPlasticStrainsRankine()
SurfacesEquivalentPlasticStrainsTresca()
SurfacesEquivalentStressesBach()
SurfacesEquivalentStressesMises()
SurfacesEquivalentStressesRankine()
SurfacesEquivalentStressesTresca()
SurfacesEquivalentTotalStrainsBach()
SurfacesEquivalentTotalStrainsMises()
SurfacesEquivalentTotalStrainsRankine()
SurfacesEquivalentTotalStrainsTresca()
SurfacesGlobalDeformations()
SurfacesLocalDeformations()
SurfacesMaximumPlasticStrains()
SurfacesMaximumTotalStrains()
SurfacesPrincipalInternalForces()
SurfacesPrincipalPlasticStrains()
SurfacesPrincipalStresses()
SurfacesPrincipalTotalStrains()
TimeHistoryAnalysisBuildingStoriesCentresMassRigidity()
TimeHistoryAnalysisBuildingStoriesForcesInShearWalls()
TimeHistoryAnalysisBuildingStoriesForcesInSpandrels()
TimeHistoryAnalysisBuildingStoriesInterstoryDrifts()
TimeHistoryAnalysisBuildingStoriesStoryActions()
TimeHistoryAnalysisLineHingesDeformations()
TimeHistoryAnalysisLineHingesForces()
TimeHistoryAnalysisLinesSlabWallConnections()
TimeHistoryAnalysisLinesSupportForces()
TimeHistoryAnalysisMembersContactForces()
TimeHistoryAnalysisMembersGlobalDeformations()
TimeHistoryAnalysisMembersHingeDeformations()
TimeHistoryAnalysisMembersHingeForces()
TimeHistoryAnalysisMembersInternalForces()
TimeHistoryAnalysisMembersInternalForcesByMemberSet()
TimeHistoryAnalysisMembersInternalForcesBySection()
TimeHistoryAnalysisMembersLocalDeformations()
TimeHistoryAnalysisMembersStrains()
TimeHistoryAnalysisNodesAccelerations()
TimeHistoryAnalysisNodesDeformations()
TimeHistoryAnalysisNodesSupportForces()
TimeHistoryAnalysisNodesVelocities()
TimeHistoryAnalysisSolidsBasicPlasticStrains()
TimeHistoryAnalysisSolidsBasicStresses()
TimeHistoryAnalysisSolidsBasicTotalStrains()
TimeHistoryAnalysisSolidsDeformations()
TimeHistoryAnalysisSolidsEquivalentPlasticStrains()
TimeHistoryAnalysisSolidsEquivalentStresses()
TimeHistoryAnalysisSolidsEquivalentTotalStrains()
TimeHistoryAnalysisSolidsGasQuantities()
TimeHistoryAnalysisSolidsPrincipalPlasticStrains()
TimeHistoryAnalysisSolidsPrincipalStresses()
TimeHistoryAnalysisSolidsPrincipalTotalStrains()
TimeHistoryAnalysisSummary()
TimeHistoryAnalysisSurfacesBasicInternalForces()
TimeHistoryAnalysisSurfacesBasicPlasticStrains()
TimeHistoryAnalysisSurfacesBasicStresses()
TimeHistoryAnalysisSurfacesBasicTotalStrains()
TimeHistoryAnalysisSurfacesContactStresses()
TimeHistoryAnalysisSurfacesDesignInternalForces()
TimeHistoryAnalysisSurfacesElasticStressComponents()
TimeHistoryAnalysisSurfacesEquivalentPlasticStrainsBach()
TimeHistoryAnalysisSurfacesEquivalentPlasticStrainsMises()
TimeHistoryAnalysisSurfacesEquivalentPlasticStrainsRankine()
TimeHistoryAnalysisSurfacesEquivalentPlasticStrainsTresca()
TimeHistoryAnalysisSurfacesEquivalentStressesBach()
TimeHistoryAnalysisSurfacesEquivalentStressesMises()
TimeHistoryAnalysisSurfacesEquivalentStressesRankine()
TimeHistoryAnalysisSurfacesEquivalentStressesTresca()
TimeHistoryAnalysisSurfacesEquivalentTotalStrainsBach()
TimeHistoryAnalysisSurfacesEquivalentTotalStrainsMises()
TimeHistoryAnalysisSurfacesEquivalentTotalStrainsRankine()
TimeHistoryAnalysisSurfacesEquivalentTotalStrainsTresca()
TimeHistoryAnalysisSurfacesGlobalDeformations()
TimeHistoryAnalysisSurfacesLocalDeformations()
TimeHistoryAnalysisSurfacesMaximumPlasticStrains()
TimeHistoryAnalysisSurfacesMaximumTotalStrains()
TimeHistoryAnalysisSurfacesPrincipalInternalForces()
TimeHistoryAnalysisSurfacesPrincipalPlasticStrains()
TimeHistoryAnalysisSurfacesPrincipalStresses()
TimeHistoryAnalysisSurfacesPrincipalTotalStrains()
HasAnyResults()
HasResults()
```

## How to query the model

To query the model you start with initializing the connection. This can be done via `Model(False, "model_name")`. Then use any getter you need to retrieve the data. Our unit tests (RFEM_Python_Client/UnitTests/) are good examples of setting values and getting them back for checking correctness. But in the tests we use currently available (active) model, that is why you see just `Model()` there.

If you want to see all currently available web service model functions and types just `print(Model.clientModel)`. This is the easiest way SUDS module shows everything it recognizes. Even easier is to look at methods and types for [model](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Model-Methods-and-Types) and [application](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Application-Methods-and-Types) in our Wiki, but it can be outdated with the new development, meaning new functions will be added.

Whole example:

```py
from suds.client import Client
import sys

client = Client('http://localhost:8081/wsdl')
# printout all application functions and types
print(client)
modelLst = client.service.get_model_list()
new = client.service.get_active_model()+'wsdl'
model = Client(new)
# printout all model functions and types
print(model)
```

## How to set 'params'

When working with the client, user can often face the task to set attributes which are not found in object parameters. For this purpose **params** were introduced to every object. It is optional parameter in form of a dictionary where key is the name of the parameter found in WSDL (see [How to query the model](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/How-to-query-the-model) or [model ](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Model-Methods-and-Types) and [application](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Application-Methods-and-Types) methods). Because it is set as the end of the routine, it can also override any parameters set previously.

### Step by step
First, print the object of your interest on the command line using a script like this:

```py
from suds.client import Client

client = Client('http://localhost:8081/wsdl')
new = client.service.get_active_model()+'wsdl'
model = Client(new)

print(model.service.get_nodal_support(1))
```

You will get full description of Nodal Support no.1. From this you can figure out the structure of the object and create whole new object with parameters and nested objects. For example, if you want to descibe support condition in X direction via diagram, focus on these parameters:

```py
diagram_along_x_end = "DIAGRAM_ENDING_TYPE_CONTINUOUS"
diagram_along_x_is_sorted = True
diagram_along_x_start = "DIAGRAM_ENDING_TYPE_CONTINUOUS"
diagram_along_x_symmetric = True
diagram_along_x_table =
    (array_of_nodal_support_diagram_along_x_table){
        nodal_support_diagram_along_x_table[] =
            (nodal_support_diagram_along_x_table_row){
                no = 1
                description = None
                row =
                    (nodal_support_diagram_along_x_table){
                       displacement = -0.0001
                       force = -200000000.0
                       spring = 3900000000000.0
                       note = None
                   }
              },
             (nodal_support_diagram_along_x_table_row){
                no = 2
                description = None
                row =
                    (nodal_support_diagram_along_x_table){
                        displacement = -5e-05
                        force = -5000000.0
                        spring = 100000000000.0
                        note = None
                   }
             },
       }
```

You can then write:

```py
NodalSupport(..., params = {'diagram_along_x_end':"DIAGRAM_ENDING_TYPE_CONTINUOUS"})
```

To define something like **diagram_along_x_table** nested structure must be properly populated:

```py
diagram_along_x = model.clientModel.factory.create('ns0:response_spectrum.user_defined_response_spectrum')
for i,j in enumerate(nodal_support_diagrams):
    ns = model.clientModel.factory.create('ns0:nodal_support_diagram_along_x_table_row')
    ns.no = i+1
    ns.row.displacement= user_defined_spectrum[i][0]
    rsp.row.force= user_defined_spectrum[i][1]
    ns.row.force= user_defined_spectrum[i][2]

    diagram_along_x.nodal_support_diagram_along_x_table.append(ns)

NodalSupport(..., params = {'diagram_along_x_end':"DIAGRAM_ENDING_TYPE_CONTINUOUS", 'diagram_along_x_table' : diagram_along_x})
```

This is the process we use to develop this library, so if you're looking for something similar, many instances can be found throughout the project.

## How to start

You journey with our RFEM Python Client should start here especially if you are beginner or intermediate when it comes to Python scripting. Here we describe the basic structure, syntax and commands. 

If you want to skip this step by step guide just take a look at our examples. These will provide everything needed. Feel free to reuse any part that holds value to your task.

### Structure 
The client structure is designed to allow the simplest possible setting of objects and their parameters very much simmilar to RFEM both in structure and parameters. Start with creating the model. Then any RFEM object and type can be set. When everything is set the model can be calculated, exported or saved. I would not recommend to create optimization tasks because this can be done with better efficiency via Optimization and Cost Add-on.

### Syntax 
First start with import of relevat modules.

```py
from RFEM.initModel import Model
from RFEM.BasicObjects.material import Material
from RFEM.BasicObjects.line import Line
```

Add boilerplate code that protects users from accidentally invoking the script when they didn't intend to.

```py
if __name__ == '__main__':
```

Then you need to create a model. Here it's as simple as in RFEM, just enter True if you're creating a new model and model name. For starters, I might add that we omit the standard indent here. 

```py
Model(True, 'MyModel')
```

Now follows all objects and types you want to set in RFEM. If you want to use the default object type than just object is sufficient (see Material bellow) or put object, than dot (.) and then put type of object. Every object and type of object has method with default parameters to describe what to put where to sucessfully create it. To make it even easier the default parameters enable to specify any parameter disregarding its possition with the name of the parameter followed by '=' and value.

```py
Material(1, 'S235')
Line.Arc(1, [10,0,0], 3, comment='my first arc')
```

### WS functions

We have whole GitHub documentation [page](https://dlubal-software.github.io/RFEM_Python_Client/), where you can find all of our Python classes and methods together with description. These are here to make it easy and organized. However if you consider yourself experienced enough to work directly with Web Service functions or just looking for that specific one, then you'll appreciate our two Wiki pages summarizing all accesible [application](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Application-Methods-and-Types) and [model](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Model-Methods-and-Types) functions.

## Let's talk performance

Here we would like to address some questions and issues regarding performance that came up during the development. These informations are suitable for experienced developers and curious users.

We use SOAP package called SUDS to be able to communicate with RFEM. This was chosen for many good reasons. Believe that we saw the Zeep and SUDS is simply better for our usage. The SUDS makes new connection with any request and terminates it immediately. That leeds to poor performance and the connection is apparent by RFEM 'flickering' going from locked(*) state to unlocked many times over. 

### Persistent connection 
To shorten the response the first step is to create persistent conection. SUDS enable us to create such connection by using [requests](https://pypi.org/project/requests/) and [suds_requests](https://pypi.org/project/suds_requests/)(**). Connection pool in HTTPAdapter is set to 1, then mounted to session and as RequestsTransport object passed to SUDS Client (used to access the model) as transport parameter.
This speeds up the proces 3 times. You can find the implementation in [RFEM\initModel.py](https://github.com/Dlubal-Software/RFEM_Python_Client/blob/main/RFEM/initModel.py#line30:~:text=%23%20Persistent%20connection).

### Asynchronous execution 
You may be familiar with the concept of asynchronous execution and well known libraries [asyncio](https://pypi.org/project/asyncio/) and [aiohttp](https://pypi.org/project/aiohttp/). Those should enable to create async loop and send the requests to server as quickly as possible. All in one connection, using one thread, just awaiting the callbacks. Which is exactly the thing that slows the execution. Don't get us wrong, we tried to implement it, but neither asyncio or async-suds (SUDS based on asyncio) wants to work here. To add to the trouble, we think that it is not much usefull feature. Large number of the executions are order dependent anyway. RFEM can't create line if there is one point missing. So if the order is the same but client doesn't have to wait for individual responces, it could be utilized. Anyway, if you know how to speedup the process, any contributions are welcomed.

(*) The application is locked to avoid ambiguity during connection.

(**) Author: Jason Michalski, email: armooo@armooo.net

## WS Application Methods and Types

To obtain this list just execute print(client). 

Usage: client.service.get_active_model()

### Methods

Methods (30):

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
get_session_id()
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
### Types

Types(82)

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
ns0:get_session_id
ns0:get_session_idResponse
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

## WS Model Methods and Types

To obtain this list just execute print(Model.clientModel).

Usage: Model.clientModel.service.cancel_modification()

### Models

Methods (695):

```js
add_section_to_my_section_list(xs:string list_name, xs:string section_name)
begin_modification(xs:string modification_name)
calculate_all(xs:boolean generateXmlSolverInput)
calculate_specific(ns0:calculate_specific_loadings loadings, xs:boolean skip_warnings)
cancel_modification()
clear_selection()
close_connection()
create_my_section_list(xs:string list_name)
create_section_by_name(xs:int id, xs:int material_id, xs:string name)
create_section_from_rsection_file(xs:int id, xs:string file_path)
delete_all()
delete_all_history()
delete_all_results(xs:boolean delete_mesh)
delete_my_section_list(xs:string list_name)
delete_object(ns0:object_types type, xs:int no, xs:int parent_no)
delete_printout_reports(ns0:array_of_int printout_report_id_list)
delete_section_from_my_section_list(xs:string list_name, xs:string section_name)
divide_by_intersections(ns0:array_of_members members, ns0:array_of_lines lines, ns0:array_of_surfaces surfaces)
export_details_of_design_to_csv(xs:string targetDirectoryPath)
export_printout_report_to_html(xs:int printout_report_id, xs:string file_path)
export_printout_report_to_pdf(xs:int printout_report_id, xs:string file_path)
export_result_tables_to_csv(xs:string target_directory_path)
export_result_tables_to_xml(xs:string target_file_path)
export_result_tables_with_detailed_members_results_to_csv(xs:string target_directory_path)
export_result_tables_with_detailed_members_results_to_xml(xs:string target_file_path)
export_to(xs:string file_path)
export_to_asf(xs:string file_path, ns0:asf_export_data_type type_of_reinforcement, ns0:array_of_int surfaces)
export_to_ifc(xs:string file_path, ns0:export_to_ifc_settings settings, ns0:export_to_ifc_object_locations object_locations)
export_to_tables(xs:string export_path)
finish_modification()
generate_and_validate_xml_solver_input(xs:string solver_input_file_path)
generate_load_cases_and_combinations()
generate_mesh(xs:boolean skip_warnings)
generate_parts_lists()
get_Dxf_file_model_object(xs:int no)
get_Dxf_model_object(xs:int no, xs:int parent_no)
get_accelerogram(xs:int no)
get_action(xs:int no)
get_action_categories_for_action()
get_action_categories_for_load_case()
get_action_combination(xs:int no)
get_addon_statuses()
get_all_object_numbers(ns0:object_types type, xs:int parent_no)
get_all_object_numbers_by_type(ns0:object_types type)
get_all_selected_objects()
get_aluminum_design_sls_configuration(xs:int no)
get_aluminum_design_uls_configuration(xs:int no)
get_aluminum_effective_lengths(xs:int no)
get_aluminum_member_local_section_reduction(xs:int no)
get_aluminum_member_transverse_weld(xs:int no)
get_borehole(xs:int no)
get_building_story(xs:int no)
get_calculation_diagram(xs:int no)
get_clipping_box(xs:int no)
get_clipping_plane(xs:int no)
get_combination_wizard(xs:int no)
get_concrete_design_sls_configuration(xs:int no)
get_concrete_design_uls_configuration(xs:int no)
get_concrete_durability(xs:int no)
get_concrete_effective_lengths(xs:int no)
get_construction_stage(xs:int no)
get_coordinate_system(xs:int no)
get_design_overview()
get_design_situation(xs:int no)
get_design_situation_types()
get_design_support(xs:int no)
get_dimension(xs:int no)
get_first_free_number(ns0:object_types type, xs:int parent_no)
get_formula(ns0:object_location object_location, ns0:object_parameter_location object_parameter_location)
get_free_circular_load(xs:int no, xs:int load_case_no)
get_free_concentrated_load(xs:int no, xs:int load_case_no)
get_free_line_load(xs:int no, xs:int load_case_no)
get_free_polygon_load(xs:int no, xs:int load_case_no)
get_free_rectangular_load(xs:int no, xs:int load_case_no)
get_global_parameter(xs:int no)
get_imperfection_case(xs:int no)
get_imposed_line_deformation(xs:int no, xs:int load_case_no)
get_imposed_nodal_deformation(xs:int no, xs:int load_case_no)
get_intersection(xs:int no)
get_line(xs:int no)
get_line_grid(xs:int no)
get_line_hinge(xs:int no)
get_line_load(xs:int no, xs:int load_case_no)
get_line_mesh_refinement(xs:int no)
get_line_release(xs:int no)
get_line_release_type(xs:int no)
get_line_set(xs:int no)
get_line_set_load(xs:int no, xs:int load_case_no)
get_line_support(xs:int no)
get_line_welded_joint(xs:int no)
get_list_of_parameters_formula_allowed_for(ns0:object_location object_location)
get_list_of_printout_reports()
get_load_case(xs:int no)
get_load_cases_and_combinations()
get_load_combination(xs:int no)
get_main_objects_to_activate()
get_material(xs:int no)
get_member(xs:int no)
get_member_definable_stiffness(xs:int no)
get_member_eccentricity(xs:int no)
get_member_hinge(xs:int no)
get_member_imperfection(xs:int no, xs:int imperfection_case_no)
get_member_load(xs:int no, xs:int load_case_no)
get_member_nonlinearity(xs:int no)
get_member_openings(xs:int no)
get_member_representative(xs:int no)
get_member_result_intermediate_point(xs:int no)
get_member_rotational_restraint(xs:int no)
get_member_set(xs:int no)
get_member_set_imperfection(xs:int no, xs:int imperfection_case_no)
get_member_set_load(xs:int no, xs:int load_case_no)
get_member_set_representative(xs:int no)
get_member_shear_panel(xs:int no)
get_member_stiffness_modification(xs:int no)
get_member_support(xs:int no)
get_member_transverse_stiffener(xs:int no)
get_mesh_settings()
get_mesh_statistics()
get_modal_analysis_settings(xs:int no)
get_model_history()
get_model_info()
get_model_main_parameters()
get_model_parameters()
get_model_parameters_location()
get_model_settings_and_options()
get_model_type()
get_my_section_lists()
get_nodal_load(xs:int no, xs:int load_case_no)
get_nodal_mesh_refinement(xs:int no)
get_nodal_release(xs:int no)
get_nodal_release_type(xs:int no)
get_nodal_support(xs:int no)
get_node(xs:int no)
get_note(xs:int no)
get_nth_object_number(ns0:object_types type, xs:int order, xs:int parent_no)
get_object_count(ns0:object_types type, xs:int parent_no)
get_object_information(ns0:object_types type)
get_object_snap(xs:int no)
get_opening(xs:int no)
get_opening_load(xs:int no, xs:int load_case_no)
get_optimization_settings(xs:int no)
get_optimized_values()
get_parts_list_all_by_material()
get_parts_list_member_representatives_by_material()
get_parts_list_member_set_representatives_by_material()
get_parts_list_member_sets_by_material()
get_parts_list_members_by_material()
get_parts_list_solids_by_material()
get_parts_list_surfaces_by_material()
get_punching_reinforcement(xs:int no)
get_reinforcement_direction(xs:int no)
get_relationship_between_load_cases(xs:int no)
get_response_spectrum(xs:int no)
get_result_combination(xs:int no)
get_result_section(xs:int no)
get_results_for_building_stories_centres_mass_rigidity(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_building_stories_forces_in_shear_walls(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_building_stories_forces_in_spandrels(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_building_stories_interstory_drifts(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_building_stories_story_actions(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_calculation_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_convergence_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_critical_load_factors(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_efeective_lengths_and_critical_loads_by_eigenvector(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_efeective_lengths_and_critical_loads_by_member(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_eigenvectors_by_member(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_eigenvectors_by_node(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_eigenvectors_by_solid(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_eigenvectors_by_surface(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_errors(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_line_hinges_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_line_hinges_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_lines_slab_wall_connections(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_lines_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_by_eigenvector(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_contact_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_hinge_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_hinge_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_internal_forces_by_member_set(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_internal_forces_by_section(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_local_plastic_deformation_ratios(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_members_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_effective_modal_masses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_masses_in_locations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_members_by_mode_shape(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_mode_shapes_by_member(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_mode_shapes_by_node(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_mode_shapes_by_solid(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_mode_shapes_by_surface(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_natural_frequencies(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_nodes_by_mode_shape(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_participation_factors(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_solids_by_mode_shape(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_modal_analysis_surfaces_by_mode_shape(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_nodes_by_eigenvector(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_nodes_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_nodes_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_building_stories_centres_mass_rigidity(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_building_stories_forces_in_shear_walls(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_building_stories_forces_in_spandrels(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_building_stories_interstory_drifts(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_building_stories_story_actions(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_calculation_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_convergence_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_horizontal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_line_hinges_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_line_hinges_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_lines_slab_wall_connections(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_lines_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_contact_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_hinge_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_hinge_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_internal_forces_by_member_set(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_internal_forces_by_section(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_local_plastic_deformation_ratios(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_members_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_nodes_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_nodes_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_equivalent_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_equivalent_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_equivalent_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_gas_quantities(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_solids_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_summary(ns0:case_object_types loading_type, xs:int loading_no)
get_results_for_pushover_analysis_surfaces_basic_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_contact_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_design_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_elastic_stress_components(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_stresses_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_stresses_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_stresses_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_stresses_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_total_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_total_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_total_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_equivalent_total_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_maximum_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_maximum_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_principal_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_surfaces_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_pushover_analysis_target_displacement(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_by_eigenvector(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_equivalent_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_equivalent_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_equivalent_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_gas_quantities(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_solids_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_building_stories_centres_mass_rigidity(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_building_stories_forces_in_shear_walls(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_building_stories_forces_in_spandrels(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_building_stories_interstory_drifts(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_building_stories_story_actions(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_line_hinges_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_line_hinges_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_lines_slab_wall_connections(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_lines_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_contact_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_hinge_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_hinge_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_internal_forces_by_member_set(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_internal_forces_by_section(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_local_plastic_deformation_ratios(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_members_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_nodes_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_nodes_pseudo_accelerations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_nodes_pseudo_velocities(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_nodes_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_equivalent_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_equivalent_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_gas_quantities(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_solids_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_summary(ns0:case_object_types loading_type, xs:int loading_no)
get_results_for_spectral_analysis_surfaces_basic_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_contact_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_design_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_elastic_stress_components(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_stresses_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_stresses_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_stresses_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_stresses_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_total_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_total_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_total_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_equivalent_total_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_maximum_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_principal_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_spectral_analysis_surfaces_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_building_stories_centres_mass_rigidity(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_building_stories_forces_in_shear_walls(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_building_stories_forces_in_spandrels(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_building_stories_interstory_drifts(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_building_stories_story_actions(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_calculation_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_convergence_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_line_hinges_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_line_hinges_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_lines_slab_wall_connections(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_lines_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_contact_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_hinge_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_hinge_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_internal_forces_by_member_set(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_internal_forces_by_section(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_local_plastic_deformation_ratios(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_members_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_nodes_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_nodes_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_equivalent_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_equivalent_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_equivalent_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_gas_quantities(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_solids_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_summary(ns0:case_object_types loading_type, xs:int loading_no)
get_results_for_stability_incremental_analysis_surfaces_basic_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_contact_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_design_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_elastic_stress_components(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_maximum_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_maximum_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_principal_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_stability_incremental_analysis_surfaces_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_summary(ns0:case_object_types loading_type, xs:int loading_no)
get_results_for_surfaces_basic_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_by_eigenvector(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_contact_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_design_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_elastic_stress_components(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_plastic_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_plastic_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_plastic_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_plastic_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_stresses_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_stresses_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_stresses_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_stresses_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_total_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_total_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_total_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_equivalent_total_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_maximum_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_maximum_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_principal_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_surfaces_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_building_stories_centres_mass_rigidity(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_building_stories_forces_in_shear_walls(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_building_stories_forces_in_spandrels(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_building_stories_interstory_drifts(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_building_stories_story_actions(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_calculation_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_convergence_diagrams(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_line_hinges_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_line_hinges_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_lines_slab_wall_connections(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_lines_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_contact_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_hinge_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_hinge_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_internal_forces_by_member_set(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_internal_forces_by_section(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_local_plastic_deformation_ratios(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_members_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_nodes_accelerations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_nodes_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_nodes_support_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_nodes_velocities(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_equivalent_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_equivalent_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_equivalent_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_gas_quantities(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_solids_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_summary(ns0:case_object_types loading_type, xs:int loading_no)
get_results_for_time_history_analysis_surfaces_basic_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_basic_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_basic_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_basic_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_contact_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_design_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_elastic_stress_components(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_stresses_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_stresses_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_stresses_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_stresses_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_total_strains_bach(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_total_strains_mises(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_total_strains_rankine(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_equivalent_total_strains_tresca(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_global_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_local_deformations(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_maximum_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_maximum_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_principal_internal_forces(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_principal_plastic_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_principal_stresses(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_results_for_time_history_analysis_surfaces_principal_total_strains(ns0:case_object_types loading_type, xs:int loading_no, xs:int no)
get_rigid_link(xs:int no)
get_section(xs:int no)
get_session_id()
get_soil_massif(xs:int no)
get_solid(xs:int no)
get_solid_contacts(xs:int no)
get_solid_gas(xs:int no)
get_solid_load(xs:int no, xs:int load_case_no)
get_solid_mesh_refinement(xs:int no)
get_solid_set(xs:int no)
get_solid_set_load(xs:int no, xs:int load_case_no)
get_spectral_analysis_settings(xs:int no)
get_stability_analysis_settings(xs:int no)
get_static_analysis_settings(xs:int no)
get_steel_boundary_conditions(xs:int no)
get_steel_design_fr_configuration(xs:int no)
get_steel_design_seismic_configuration(xs:int no)
get_steel_design_sls_configuration(xs:int no)
get_steel_design_uls_configuration(xs:int no)
get_steel_effective_lengths(xs:int no)
get_steel_member_local_section_reduction(xs:int no)
get_structure_modification(xs:int no)
get_surface(xs:int no)
get_surface_eccentricity(xs:int no)
get_surface_imperfection(xs:int no, xs:int imperfection_case_no)
get_surface_load(xs:int no, xs:int load_case_no)
get_surface_mesh_refinement(xs:int no)
get_surface_reinforcement(xs:int no)
get_surface_release(xs:int no)
get_surface_release_type(xs:int no)
get_surface_results_adjustment(xs:int no)
get_surface_set(xs:int no)
get_surface_set_imperfection(xs:int no, xs:int imperfection_case_no)
get_surface_set_load(xs:int no, xs:int load_case_no)
get_surface_stiffness_modification(xs:int no)
get_surface_support(xs:int no)
get_surfaces_contact(xs:int no)
get_surfaces_contact_type(xs:int no)
get_table_export_config_manager()
get_terrain(xs:int no)
get_thickness(xs:int no)
get_timber_design_fr_configuration(xs:int no)
get_timber_design_sls_configuration(xs:int no)
get_timber_design_uls_configuration(xs:int no)
get_timber_effective_lengths(xs:int no)
get_timber_member_local_section_reduction(xs:int no)
get_timber_moisture_class(xs:int no)
get_timber_service_class(xs:int no)
get_timber_service_conditions(xs:int no)
get_visual_object(xs:int no)
get_wind_profile(xs:int no)
get_wind_simulation(xs:int no)
get_wind_simulation_analysis_settings(xs:int no)
has_any_results()
has_results(ns0:case_object_types loading_type, xs:int loading_no)
plausibility_check(xs:boolean skip_warnings)
print_printout_report(xs:int printout_report_id)
reset()
run_script(xs:string script_file_path)
save(xs:string file_path)
set_Dxf_file_model_object(ns0:Dxf_file_model_object value)
set_Dxf_model_object(xs:int parent_no, ns0:Dxf_model_object value)
set_accelerogram(ns0:accelerogram value)
set_action(ns0:action value)
set_action_combination(ns0:action_combination value)
set_addon_statuses(ns0:addon_list_type addon_statuses)
set_aluminum_design_sls_configuration(ns0:aluminum_design_sls_configuration value)
set_aluminum_design_uls_configuration(ns0:aluminum_design_uls_configuration value)
set_aluminum_effective_lengths(ns0:aluminum_effective_lengths value)
set_aluminum_member_local_section_reduction(ns0:aluminum_member_local_section_reduction value)
set_aluminum_member_transverse_weld(ns0:aluminum_member_transverse_weld value)
set_borehole(ns0:borehole value)
set_building_story(ns0:building_story value)
set_calculation_diagram(ns0:calculation_diagram value)
set_clipping_box(ns0:clipping_box value)
set_clipping_plane(ns0:clipping_plane value)
set_combination_wizard(ns0:combination_wizard value)
set_concrete_design_sls_configuration(ns0:concrete_design_sls_configuration value)
set_concrete_design_uls_configuration(ns0:concrete_design_uls_configuration value)
set_concrete_durability(ns0:concrete_durability value)
set_concrete_effective_lengths(ns0:concrete_effective_lengths value)
set_construction_stage(ns0:construction_stage value)
set_coordinate_system(ns0:coordinate_system value)
set_design_situation(ns0:design_situation value)
set_design_support(ns0:design_support value)
set_dimension(ns0:dimension value)
set_formula(ns0:object_location object_location, ns0:object_parameter_location object_parameter_location, xs:string formula)
set_free_circular_load(xs:int load_case_no, ns0:free_circular_load value)
set_free_concentrated_load(xs:int load_case_no, ns0:free_concentrated_load value)
set_free_line_load(xs:int load_case_no, ns0:free_line_load value)
set_free_polygon_load(xs:int load_case_no, ns0:free_polygon_load value)
set_free_rectangular_load(xs:int load_case_no, ns0:free_rectangular_load value)
set_global_parameter(ns0:global_parameter value)
set_imperfection_case(ns0:imperfection_case value)
set_imposed_line_deformation(xs:int load_case_no, ns0:imposed_line_deformation value)
set_imposed_nodal_deformation(xs:int load_case_no, ns0:imposed_nodal_deformation value)
set_intersection(ns0:intersection value)
set_line(ns0:line value)
set_line_grid(ns0:line_grid value)
set_line_hinge(ns0:line_hinge value)
set_line_load(xs:int load_case_no, ns0:line_load value)
set_line_mesh_refinement(ns0:line_mesh_refinement value)
set_line_release(ns0:line_release value)
set_line_release_type(ns0:line_release_type value)
set_line_set(ns0:line_set value)
set_line_set_load(xs:int load_case_no, ns0:line_set_load value)
set_line_support(ns0:line_support value)
set_line_welded_joint(ns0:line_welded_joint value)
set_load_case(ns0:load_case value)
set_load_cases_and_combinations(ns0:load_cases_and_combinations value)
set_load_combination(ns0:load_combination value)
set_main_objects_to_activate(ns0:main_objects_to_activate main_objects_to_activate)
set_material(ns0:material value)
set_member(ns0:member value)
set_member_definable_stiffness(ns0:member_definable_stiffness value)
set_member_eccentricity(ns0:member_eccentricity value)
set_member_hinge(ns0:member_hinge value)
set_member_imperfection(xs:int imperfection_case_no, ns0:member_imperfection value)
set_member_load(xs:int load_case_no, ns0:member_load value)
set_member_nonlinearity(ns0:member_nonlinearity value)
set_member_openings(ns0:member_openings value)
set_member_representative(ns0:member_representative value)
set_member_result_intermediate_point(ns0:member_result_intermediate_point value)
set_member_rotational_restraint(ns0:member_rotational_restraint value)
set_member_set(ns0:member_set value)
set_member_set_imperfection(xs:int imperfection_case_no, ns0:member_set_imperfection value)
set_member_set_load(xs:int load_case_no, ns0:member_set_load value)
set_member_set_representative(ns0:member_set_representative value)
set_member_shear_panel(ns0:member_shear_panel value)
set_member_stiffness_modification(ns0:member_stiffness_modification value)
set_member_support(ns0:member_support value)
set_member_transverse_stiffener(ns0:member_transverse_stiffener value)
set_mesh_settings(ns0:meshConfig value)
set_modal_analysis_settings(ns0:modal_analysis_settings value)
set_model_history(ns0:array_of_model_history table_values)
set_model_id(xs:string id)
set_model_parameters(ns0:array_of_model_parameters table_values)
set_model_parameters_location(ns0:array_of_model_parameters_location table_values)
set_model_settings_and_options(ns0:model_settings_and_options model_settings_and_options)
set_model_type(ns0:model_type model_type)
set_nodal_load(xs:int load_case_no, ns0:nodal_load value)
set_nodal_mesh_refinement(ns0:nodal_mesh_refinement value)
set_nodal_release(ns0:nodal_release value)
set_nodal_release_type(ns0:nodal_release_type value)
set_nodal_support(ns0:nodal_support value)
set_node(ns0:node value)
set_note(ns0:note value)
set_object_snap(ns0:object_snap value)
set_opening(ns0:opening value)
set_opening_load(xs:int load_case_no, ns0:opening_load value)
set_optimization_settings(ns0:optimization_settings value)
set_punching_reinforcement(ns0:punching_reinforcement value)
set_reinforcement_direction(ns0:reinforcement_direction value)
set_relationship_between_load_cases(ns0:relationship_between_load_cases value)
set_response_spectrum(ns0:response_spectrum value)
set_result_combination(ns0:result_combination value)
set_result_section(ns0:result_section value)
set_rigid_link(ns0:rigid_link value)
set_section(ns0:section value)
set_selected_objects(ns0:object_location_array object_locations)
set_soil_massif(ns0:soil_massif value)
set_solid(ns0:solid value)
set_solid_contacts(ns0:solid_contacts value)
set_solid_gas(ns0:solid_gas value)
set_solid_load(xs:int load_case_no, ns0:solid_load value)
set_solid_mesh_refinement(ns0:solid_mesh_refinement value)
set_solid_set(ns0:solid_set value)
set_solid_set_load(xs:int load_case_no, ns0:solid_set_load value)
set_spectral_analysis_settings(ns0:spectral_analysis_settings value)
set_stability_analysis_settings(ns0:stability_analysis_settings value)
set_static_analysis_settings(ns0:static_analysis_settings value)
set_steel_boundary_conditions(ns0:steel_boundary_conditions value)
set_steel_design_fr_configuration(ns0:steel_design_fr_configuration value)
set_steel_design_seismic_configuration(ns0:steel_design_seismic_configuration value)
set_steel_design_sls_configuration(ns0:steel_design_sls_configuration value)
set_steel_design_uls_configuration(ns0:steel_design_uls_configuration value)
set_steel_effective_lengths(ns0:steel_effective_lengths value)
set_steel_member_local_section_reduction(ns0:steel_member_local_section_reduction value)
set_structure_modification(ns0:structure_modification value)
set_surface(ns0:surface value)
set_surface_eccentricity(ns0:surface_eccentricity value)
set_surface_imperfection(xs:int imperfection_case_no, ns0:surface_imperfection value)
set_surface_load(xs:int load_case_no, ns0:surface_load value)
set_surface_mesh_refinement(ns0:surface_mesh_refinement value)
set_surface_reinforcement(ns0:surface_reinforcement value)
set_surface_release(ns0:surface_release value)
set_surface_release_type(ns0:surface_release_type value)
set_surface_results_adjustment(ns0:surface_results_adjustment value)
set_surface_set(ns0:surface_set value)
set_surface_set_imperfection(xs:int imperfection_case_no, ns0:surface_set_imperfection value)
set_surface_set_load(xs:int load_case_no, ns0:surface_set_load value)
set_surface_stiffness_modification(ns0:surface_stiffness_modification value)
set_surface_support(ns0:surface_support value)
set_surfaces_contact(ns0:surfaces_contact value)
set_surfaces_contact_type(ns0:surfaces_contact_type value)
set_table_export_config_manager(ns0:TableExportConfigManager value)
set_terrain(ns0:terrain value)
set_thickness(ns0:thickness value)
set_timber_design_fr_configuration(ns0:timber_design_fr_configuration value)
set_timber_design_sls_configuration(ns0:timber_design_sls_configuration value)
set_timber_design_uls_configuration(ns0:timber_design_uls_configuration value)
set_timber_effective_lengths(ns0:timber_effective_lengths value)
set_timber_member_local_section_reduction(ns0:timber_member_local_section_reduction value)
set_timber_moisture_class(ns0:timber_moisture_class value)
set_timber_service_class(ns0:timber_service_class value)
set_timber_service_conditions(ns0:timber_service_conditions value)
set_visual_object(ns0:visual_object value)
set_wind_profile(ns0:wind_profile value)
set_wind_simulation(ns0:wind_simulation value)
set_wind_simulation_analysis_settings(ns0:wind_simulation_analysis_settings value)
unite_nodes_and_supports(xs:double tolerance)
use_detailed_member_results(xs:boolean use)
```
### Types

Types (4109):

```js
ns0:Dxf_file_model_object
ns0:Dxf_file_model_object_insert_point
ns0:Dxf_file_model_object_rotation_angles_sequence
ns0:Dxf_model_object
ns0:QualityCriteriaConfigForSolids
ns0:QualityCriteriaConfigForSurfaces
ns0:SolidsMeshQualityConfig
ns0:SurfacesMeshQualityConfig
ns0:TableExportConfigBase
ns0:TableExportConfigManager
ns0:TableExportConfigManager_config
ns0:TableExportConfigManager_configs
ns0:TableExportFEMeshTablesConfig
ns0:TableExportInputTablesConfig
ns0:TableExportMainConfig
ns0:TableExportMainConfig_property_export_target_type
ns0:TableExportMainConfig_property_list_separator_type
ns0:TableExportResultTablesConfig
ns0:accelerogram
ns0:accelerogram_definition_type
ns0:accelerogram_user_defined_accelerogram
ns0:accelerogram_user_defined_accelerogram_row
ns0:action
ns0:action_action_type
ns0:action_category
ns0:action_combination
ns0:action_combination_combination_type
ns0:action_combination_items
ns0:action_combination_items_row
ns0:action_imposed_load_category
ns0:action_items
ns0:action_items_row
ns0:action_load_type
ns0:action_type
ns0:add_section_to_my_section_list
ns0:add_section_to_my_section_listResponse
ns0:additional_offset_reference_type
ns0:additional_offset_reference_type_at_end_type
ns0:additional_offset_reference_type_at_start_type
ns0:additional_offset_type
ns0:additional_offset_type_single_line_type
ns0:addon_list_analysis_list_type
ns0:addon_list_design_addons_list_type
ns0:addon_list_dynamic_analysis_settings_list_type
ns0:addon_list_special_solutions_list_type
ns0:addon_list_type
ns0:aluminum_design_sls_configuration
ns0:aluminum_design_uls_configuration
ns0:aluminum_effective_lengths
ns0:aluminum_effective_lengths_buckling_factor_value_type
ns0:aluminum_effective_lengths_determination_cb_adm
ns0:aluminum_effective_lengths_determination_cb_member_type_adm
ns0:aluminum_effective_lengths_determination_mcr_europe
ns0:aluminum_effective_lengths_determination_me_adm
ns0:aluminum_effective_lengths_factors
ns0:aluminum_effective_lengths_factors_row
ns0:aluminum_effective_lengths_lengths
ns0:aluminum_effective_lengths_lengths_row
ns0:aluminum_effective_lengths_nodal_supports
ns0:aluminum_effective_lengths_nodal_supports_row
ns0:aluminum_effective_lengths_stability_import_data_factors
ns0:aluminum_effective_lengths_stability_import_data_factors_row
ns0:aluminum_effective_lengths_stability_import_data_lengths
ns0:aluminum_effective_lengths_stability_import_data_lengths_row
ns0:aluminum_member_local_section_reduction
ns0:aluminum_member_local_section_reduction_components
ns0:aluminum_member_local_section_reduction_components_reduction_type
ns0:aluminum_member_local_section_reduction_components_row
ns0:aluminum_member_transverse_weld
ns0:aluminum_member_transverse_weld_components
ns0:aluminum_member_transverse_weld_components_row
ns0:amplitude_function_type
ns0:anchorage_end_anchor_type
ns0:anchorage_start_anchor_type
ns0:array_of_accelerogram_user_defined_accelerogram
ns0:array_of_action_category
ns0:array_of_action_combination_items
ns0:array_of_action_items
ns0:array_of_aluminum_effective_lengths_factors
ns0:array_of_aluminum_effective_lengths_lengths
ns0:array_of_aluminum_effective_lengths_nodal_supports
ns0:array_of_aluminum_effective_lengths_stability_import_data_factors
ns0:array_of_aluminum_effective_lengths_stability_import_data_lengths
ns0:array_of_aluminum_member_local_section_reduction_components
ns0:array_of_aluminum_member_transverse_weld_components
ns0:array_of_borehole_layers_table
ns0:array_of_building_stories_centres_mass_rigidity
ns0:array_of_building_stories_forces_in_shear_walls
ns0:array_of_building_stories_forces_in_spandrels
ns0:array_of_building_stories_interstory_drifts
ns0:array_of_building_stories_story_actions
ns0:array_of_building_story_info_and_child_items
ns0:array_of_building_story_total_info_and_child_items
ns0:array_of_calculation_diagram_table
ns0:array_of_calculation_diagrams
ns0:array_of_combination_wizard_individual_factors_of_selected_objects_table
ns0:array_of_concrete_effective_lengths_factors
ns0:array_of_concrete_effective_lengths_fire_design_factors
ns0:array_of_concrete_effective_lengths_fire_design_lengths
ns0:array_of_concrete_effective_lengths_fire_design_nodal_supports
ns0:array_of_concrete_effective_lengths_lengths
ns0:array_of_concrete_effective_lengths_nodal_supports
ns0:array_of_concrete_effective_lengths_stability_import_data_factors
ns0:array_of_concrete_effective_lengths_stability_import_data_lengths
ns0:array_of_construction_stage_loading
ns0:array_of_construction_stage_member_property_modifications
ns0:array_of_construction_stage_solid_property_modifications
ns0:array_of_construction_stage_surface_property_modifications
ns0:array_of_convergence_diagrams
ns0:array_of_critical_load_factors
ns0:array_of_design_overview
ns0:array_of_design_situation_case_objects
ns0:array_of_design_situation_type
ns0:array_of_dimension_angular_reference_table
ns0:array_of_dimension_arc_length_reference_table
ns0:array_of_dimension_linear_reference_table
ns0:array_of_efeective_lengths_and_critical_loads_by_eigenvector
ns0:array_of_efeective_lengths_and_critical_loads_by_member
ns0:array_of_eigenvectors_by_member
ns0:array_of_eigenvectors_by_node
ns0:array_of_eigenvectors_by_solid
ns0:array_of_eigenvectors_by_surface
ns0:array_of_errors
ns0:array_of_free_polygon_load_load_location
ns0:array_of_free_rectangular_load_load_varying_along_perimeter_parameters
ns0:array_of_free_rectangular_load_load_varying_in_z_parameters
ns0:array_of_imperfection_case_imperfection_cases_items
ns0:array_of_imperfection_case_level_imperfections
ns0:array_of_int
ns0:array_of_line_grid_x_assignment
ns0:array_of_line_grid_y_assignment
ns0:array_of_line_grid_z_assignment
ns0:array_of_line_hinge_diagram_along_x_color_table
ns0:array_of_line_hinge_diagram_along_x_table
ns0:array_of_line_hinge_diagram_along_y_color_table
ns0:array_of_line_hinge_diagram_along_y_table
ns0:array_of_line_hinge_diagram_along_z_color_table
ns0:array_of_line_hinge_diagram_along_z_table
ns0:array_of_line_hinge_diagram_around_x_color_table
ns0:array_of_line_hinge_diagram_around_x_table
ns0:array_of_line_hinge_force_moment_diagram_around_x_table
ns0:array_of_line_hinge_generated_line_hinges
ns0:array_of_line_hinges_deformations
ns0:array_of_line_hinges_forces
ns0:array_of_line_line_weld_assignment
ns0:array_of_line_load_varying_load_parameters
ns0:array_of_line_nurbs_control_points
ns0:array_of_line_nurbs_control_points_by_components
ns0:array_of_line_nurbs_knots
ns0:array_of_line_release_type_diagram_along_x_color_table
ns0:array_of_line_release_type_diagram_along_x_table
ns0:array_of_line_release_type_diagram_along_y_color_table
ns0:array_of_line_release_type_diagram_along_y_table
ns0:array_of_line_release_type_diagram_along_z_color_table
ns0:array_of_line_release_type_diagram_along_z_table
ns0:array_of_line_release_type_diagram_around_x_color_table
ns0:array_of_line_release_type_diagram_around_x_table
ns0:array_of_line_release_type_force_moment_diagram_around_x_table
ns0:array_of_line_set_load_varying_load_parameters
ns0:array_of_line_support_diagram_along_x_color_table
ns0:array_of_line_support_diagram_along_x_table
ns0:array_of_line_support_diagram_along_y_color_table
ns0:array_of_line_support_diagram_along_y_table
ns0:array_of_line_support_diagram_along_z_color_table
ns0:array_of_line_support_diagram_along_z_table
ns0:array_of_line_support_diagram_around_x_color_table
ns0:array_of_line_support_diagram_around_x_table
ns0:array_of_line_support_diagram_around_y_color_table
ns0:array_of_line_support_diagram_around_y_table
ns0:array_of_line_support_diagram_around_z_color_table
ns0:array_of_line_support_diagram_around_z_table
ns0:array_of_lines
ns0:array_of_lines_slab_wall_connections
ns0:array_of_lines_support_forces
ns0:array_of_load_case_individual_factors_of_selected_objects_table
ns0:array_of_load_case_selection_of_modes_mode_activation_table
ns0:array_of_load_combination_individual_factors_of_selected_objects_table
ns0:array_of_load_combination_items
ns0:array_of_member_concrete_longitudinal_reinforcement_items
ns0:array_of_member_concrete_shear_reinforcement_spans
ns0:array_of_member_deflection_segments_y_axis
ns0:array_of_member_deflection_segments_z_axis
ns0:array_of_member_design_supports_on_internal_nodes
ns0:array_of_member_flange_dimensions
ns0:array_of_member_hinge_diagram_along_x_color_table
ns0:array_of_member_hinge_diagram_along_x_table
ns0:array_of_member_hinge_diagram_along_y_color_table
ns0:array_of_member_hinge_diagram_along_y_table
ns0:array_of_member_hinge_diagram_along_z_color_table
ns0:array_of_member_hinge_diagram_along_z_table
ns0:array_of_member_hinge_diagram_around_x_color_table
ns0:array_of_member_hinge_diagram_around_x_table
ns0:array_of_member_hinge_diagram_around_y_color_table
ns0:array_of_member_hinge_diagram_around_y_table
ns0:array_of_member_hinge_diagram_around_z_color_table
ns0:array_of_member_hinge_diagram_around_z_table
ns0:array_of_member_hinge_plastic_diagram_along_x_color_table
ns0:array_of_member_hinge_plastic_diagram_along_x_table
ns0:array_of_member_hinge_plastic_diagram_along_y_color_table
ns0:array_of_member_hinge_plastic_diagram_along_y_table
ns0:array_of_member_hinge_plastic_diagram_along_z_color_table
ns0:array_of_member_hinge_plastic_diagram_along_z_table
ns0:array_of_member_hinge_plastic_diagram_around_y_color_table
ns0:array_of_member_hinge_plastic_diagram_around_y_table
ns0:array_of_member_hinge_plastic_diagram_around_z_color_table
ns0:array_of_member_hinge_plastic_diagram_around_z_table
ns0:array_of_member_load_varying_load_parameters
ns0:array_of_member_openings_components
ns0:array_of_member_representative_concrete_longitudinal_reinforcement_items
ns0:array_of_member_representative_concrete_longitudinal_reinforcement_span
ns0:array_of_member_representative_concrete_shear_reinforcement_span
ns0:array_of_member_representative_concrete_shear_reinforcement_spans
ns0:array_of_member_representative_deflection_segments_y_axis
ns0:array_of_member_representative_deflection_segments_z_axis
ns0:array_of_member_representative_design_supports_on_internal_nodes
ns0:array_of_member_representative_flange_dimensions
ns0:array_of_member_result_intermediate_point_distances
ns0:array_of_member_rotational_restraint_different_spring_stiffness_list
ns0:array_of_member_set_concrete_longitudinal_reinforcement_items
ns0:array_of_member_set_concrete_shear_reinforcement_spans
ns0:array_of_member_set_deflection_segments_y_axis
ns0:array_of_member_set_deflection_segments_z_axis
ns0:array_of_member_set_design_supports_on_internal_nodes
ns0:array_of_member_set_load_varying_load_parameters
ns0:array_of_member_set_representative_concrete_longitudinal_reinforcement_span
ns0:array_of_member_set_representative_concrete_shear_reinforcement_span
ns0:array_of_member_set_representative_member_model_concrete_longitudinal_reinforcement_items
ns0:array_of_member_set_representative_member_model_concrete_shear_reinforcement_spans
ns0:array_of_member_set_representative_member_model_curved_member_parameters_and_child_items
ns0:array_of_member_set_representative_member_model_deflection_segments_y_axis
ns0:array_of_member_set_representative_member_model_deflection_segments_z_axis
ns0:array_of_member_set_representative_member_model_design_supports_on_internal_nodes
ns0:array_of_member_set_representative_member_model_flange_dimensions
ns0:array_of_member_set_representative_member_set_model_concrete_longitudinal_reinforcement_items
ns0:array_of_member_set_representative_member_set_model_concrete_shear_reinforcement_spans
ns0:array_of_member_set_representative_member_set_model_deflection_segments_y_axis
ns0:array_of_member_set_representative_member_set_model_deflection_segments_z_axis
ns0:array_of_member_set_representative_member_set_model_design_supports_on_internal_nodes
ns0:array_of_member_transverse_stiffener_components
ns0:array_of_members
ns0:array_of_members_by_eigenvector
ns0:array_of_members_contact_forces
ns0:array_of_members_global_deformations
ns0:array_of_members_hinge_deformations
ns0:array_of_members_hinge_forces
ns0:array_of_members_internal_forces
ns0:array_of_members_internal_forces_by_member_set
ns0:array_of_members_internal_forces_by_section
ns0:array_of_members_local_deformations
ns0:array_of_members_local_plastic_deformation_ratios
ns0:array_of_members_strains
ns0:array_of_modal_analysis_effective_modal_masses
ns0:array_of_modal_analysis_masses_in_locations
ns0:array_of_modal_analysis_members_by_mode_shape
ns0:array_of_modal_analysis_mode_shapes_by_member
ns0:array_of_modal_analysis_mode_shapes_by_node
ns0:array_of_modal_analysis_mode_shapes_by_solid
ns0:array_of_modal_analysis_mode_shapes_by_surface
ns0:array_of_modal_analysis_natural_frequencies
ns0:array_of_modal_analysis_nodes_by_mode_shape
ns0:array_of_modal_analysis_participation_factors
ns0:array_of_modal_analysis_settings_neglect_masses_of_selected_objects_table
ns0:array_of_modal_analysis_solids_by_mode_shape
ns0:array_of_modal_analysis_surfaces_by_mode_shape
ns0:array_of_model_history
ns0:array_of_model_parameters
ns0:array_of_model_parameters_location
ns0:array_of_nodal_release_type_diagram_along_x_table
ns0:array_of_nodal_release_type_diagram_along_y_table
ns0:array_of_nodal_release_type_diagram_along_z_table
ns0:array_of_nodal_release_type_diagram_around_x_table
ns0:array_of_nodal_release_type_diagram_around_y_table
ns0:array_of_nodal_release_type_diagram_around_z_table
ns0:array_of_nodal_support_diagram_along_x_color_table
ns0:array_of_nodal_support_diagram_along_x_table
ns0:array_of_nodal_support_diagram_along_y_color_table
ns0:array_of_nodal_support_diagram_along_y_table
ns0:array_of_nodal_support_diagram_along_z_color_table
ns0:array_of_nodal_support_diagram_along_z_table
ns0:array_of_nodal_support_diagram_around_x_color_table
ns0:array_of_nodal_support_diagram_around_x_table
ns0:array_of_nodal_support_diagram_around_y_color_table
ns0:array_of_nodal_support_diagram_around_y_table
ns0:array_of_nodal_support_diagram_around_z_color_table
ns0:array_of_nodal_support_diagram_around_z_table
ns0:array_of_nodal_support_stiffness_diagram_around_x_table
ns0:array_of_nodal_support_stiffness_diagram_around_y_table
ns0:array_of_nodal_support_stiffness_diagram_around_z_table
ns0:array_of_nodes_by_eigenvector
ns0:array_of_nodes_deformations
ns0:array_of_nodes_support_forces
ns0:array_of_optimization_settings_optimization_values_table
ns0:array_of_parts_list_all_by_material
ns0:array_of_parts_list_member_representatives_by_material
ns0:array_of_parts_list_member_set_representatives_by_material
ns0:array_of_parts_list_member_sets_by_material
ns0:array_of_parts_list_members_by_material
ns0:array_of_parts_list_solids_by_material
ns0:array_of_parts_list_surfaces_by_material
ns0:array_of_pushover_analysis_building_stories_centres_mass_rigidity
ns0:array_of_pushover_analysis_building_stories_forces_in_shear_walls
ns0:array_of_pushover_analysis_building_stories_forces_in_spandrels
ns0:array_of_pushover_analysis_building_stories_interstory_drifts
ns0:array_of_pushover_analysis_building_stories_story_actions
ns0:array_of_pushover_analysis_calculation_diagrams
ns0:array_of_pushover_analysis_convergence_diagrams
ns0:array_of_pushover_analysis_horizontal_forces
ns0:array_of_pushover_analysis_line_hinges_deformations
ns0:array_of_pushover_analysis_line_hinges_forces
ns0:array_of_pushover_analysis_lines_slab_wall_connections
ns0:array_of_pushover_analysis_lines_support_forces
ns0:array_of_pushover_analysis_members_contact_forces
ns0:array_of_pushover_analysis_members_global_deformations
ns0:array_of_pushover_analysis_members_hinge_deformations
ns0:array_of_pushover_analysis_members_hinge_forces
ns0:array_of_pushover_analysis_members_internal_forces
ns0:array_of_pushover_analysis_members_internal_forces_by_member_set
ns0:array_of_pushover_analysis_members_internal_forces_by_section
ns0:array_of_pushover_analysis_members_local_deformations
ns0:array_of_pushover_analysis_members_local_plastic_deformation_ratios
ns0:array_of_pushover_analysis_members_strains
ns0:array_of_pushover_analysis_nodes_deformations
ns0:array_of_pushover_analysis_nodes_support_forces
ns0:array_of_pushover_analysis_solids_basic_plastic_strains
ns0:array_of_pushover_analysis_solids_basic_stresses
ns0:array_of_pushover_analysis_solids_basic_total_strains
ns0:array_of_pushover_analysis_solids_deformations
ns0:array_of_pushover_analysis_solids_equivalent_plastic_strains
ns0:array_of_pushover_analysis_solids_equivalent_stresses
ns0:array_of_pushover_analysis_solids_equivalent_total_strains
ns0:array_of_pushover_analysis_solids_gas_quantities
ns0:array_of_pushover_analysis_solids_principal_plastic_strains
ns0:array_of_pushover_analysis_solids_principal_stresses
ns0:array_of_pushover_analysis_solids_principal_total_strains
ns0:array_of_pushover_analysis_summary
ns0:array_of_pushover_analysis_surfaces_basic_internal_forces
ns0:array_of_pushover_analysis_surfaces_basic_plastic_strains
ns0:array_of_pushover_analysis_surfaces_basic_stresses
ns0:array_of_pushover_analysis_surfaces_basic_total_strains
ns0:array_of_pushover_analysis_surfaces_contact_stresses
ns0:array_of_pushover_analysis_surfaces_design_internal_forces
ns0:array_of_pushover_analysis_surfaces_elastic_stress_components
ns0:array_of_pushover_analysis_surfaces_equivalent_plastic_strains_bach
ns0:array_of_pushover_analysis_surfaces_equivalent_plastic_strains_mises
ns0:array_of_pushover_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:array_of_pushover_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:array_of_pushover_analysis_surfaces_equivalent_stresses_bach
ns0:array_of_pushover_analysis_surfaces_equivalent_stresses_mises
ns0:array_of_pushover_analysis_surfaces_equivalent_stresses_rankine
ns0:array_of_pushover_analysis_surfaces_equivalent_stresses_tresca
ns0:array_of_pushover_analysis_surfaces_equivalent_total_strains_bach
ns0:array_of_pushover_analysis_surfaces_equivalent_total_strains_mises
ns0:array_of_pushover_analysis_surfaces_equivalent_total_strains_rankine
ns0:array_of_pushover_analysis_surfaces_equivalent_total_strains_tresca
ns0:array_of_pushover_analysis_surfaces_global_deformations
ns0:array_of_pushover_analysis_surfaces_local_deformations
ns0:array_of_pushover_analysis_surfaces_maximum_plastic_strains
ns0:array_of_pushover_analysis_surfaces_maximum_total_strains
ns0:array_of_pushover_analysis_surfaces_principal_internal_forces
ns0:array_of_pushover_analysis_surfaces_principal_plastic_strains
ns0:array_of_pushover_analysis_surfaces_principal_stresses
ns0:array_of_pushover_analysis_surfaces_principal_total_strains
ns0:array_of_pushover_analysis_target_displacement
ns0:array_of_relationship_between_load_cases_exclusive_load_cases
ns0:array_of_relationship_between_load_cases_inclusive_load_cases
ns0:array_of_response_spectrum_user_defined_response_spectrum
ns0:array_of_result_combination_items
ns0:array_of_section_function_data_coefficients
ns0:array_of_section_time_dependent_properties_and_child_items
ns0:array_of_solids_basic_plastic_strains
ns0:array_of_solids_basic_stresses
ns0:array_of_solids_basic_total_strains
ns0:array_of_solids_by_eigenvector
ns0:array_of_solids_deformations
ns0:array_of_solids_equivalent_plastic_strains
ns0:array_of_solids_equivalent_stresses
ns0:array_of_solids_equivalent_total_strains
ns0:array_of_solids_gas_quantities
ns0:array_of_solids_principal_plastic_strains
ns0:array_of_solids_principal_stresses
ns0:array_of_solids_principal_total_strains
ns0:array_of_spectral_analysis_building_stories_centres_mass_rigidity
ns0:array_of_spectral_analysis_building_stories_forces_in_shear_walls
ns0:array_of_spectral_analysis_building_stories_forces_in_spandrels
ns0:array_of_spectral_analysis_building_stories_interstory_drifts
ns0:array_of_spectral_analysis_building_stories_story_actions
ns0:array_of_spectral_analysis_line_hinges_deformations
ns0:array_of_spectral_analysis_line_hinges_forces
ns0:array_of_spectral_analysis_lines_slab_wall_connections
ns0:array_of_spectral_analysis_lines_support_forces
ns0:array_of_spectral_analysis_members_contact_forces
ns0:array_of_spectral_analysis_members_global_deformations
ns0:array_of_spectral_analysis_members_hinge_deformations
ns0:array_of_spectral_analysis_members_hinge_forces
ns0:array_of_spectral_analysis_members_internal_forces
ns0:array_of_spectral_analysis_members_internal_forces_by_member_set
ns0:array_of_spectral_analysis_members_internal_forces_by_section
ns0:array_of_spectral_analysis_members_local_deformations
ns0:array_of_spectral_analysis_members_local_plastic_deformation_ratios
ns0:array_of_spectral_analysis_members_strains
ns0:array_of_spectral_analysis_nodes_deformations
ns0:array_of_spectral_analysis_nodes_pseudo_accelerations
ns0:array_of_spectral_analysis_nodes_pseudo_velocities
ns0:array_of_spectral_analysis_nodes_support_forces
ns0:array_of_spectral_analysis_solids_basic_stresses
ns0:array_of_spectral_analysis_solids_basic_total_strains
ns0:array_of_spectral_analysis_solids_deformations
ns0:array_of_spectral_analysis_solids_equivalent_stresses
ns0:array_of_spectral_analysis_solids_equivalent_total_strains
ns0:array_of_spectral_analysis_solids_gas_quantities
ns0:array_of_spectral_analysis_solids_principal_stresses
ns0:array_of_spectral_analysis_solids_principal_total_strains
ns0:array_of_spectral_analysis_summary
ns0:array_of_spectral_analysis_surfaces_basic_internal_forces
ns0:array_of_spectral_analysis_surfaces_basic_stresses
ns0:array_of_spectral_analysis_surfaces_basic_total_strains
ns0:array_of_spectral_analysis_surfaces_contact_stresses
ns0:array_of_spectral_analysis_surfaces_design_internal_forces
ns0:array_of_spectral_analysis_surfaces_elastic_stress_components
ns0:array_of_spectral_analysis_surfaces_equivalent_stresses_bach
ns0:array_of_spectral_analysis_surfaces_equivalent_stresses_mises
ns0:array_of_spectral_analysis_surfaces_equivalent_stresses_rankine
ns0:array_of_spectral_analysis_surfaces_equivalent_stresses_tresca
ns0:array_of_spectral_analysis_surfaces_equivalent_total_strains_bach
ns0:array_of_spectral_analysis_surfaces_equivalent_total_strains_mises
ns0:array_of_spectral_analysis_surfaces_equivalent_total_strains_rankine
ns0:array_of_spectral_analysis_surfaces_equivalent_total_strains_tresca
ns0:array_of_spectral_analysis_surfaces_global_deformations
ns0:array_of_spectral_analysis_surfaces_local_deformations
ns0:array_of_spectral_analysis_surfaces_maximum_total_strains
ns0:array_of_spectral_analysis_surfaces_principal_internal_forces
ns0:array_of_spectral_analysis_surfaces_principal_stresses
ns0:array_of_spectral_analysis_surfaces_principal_total_strains
ns0:array_of_stability_incremental_analysis_building_stories_centres_mass_rigidity
ns0:array_of_stability_incremental_analysis_building_stories_forces_in_shear_walls
ns0:array_of_stability_incremental_analysis_building_stories_forces_in_spandrels
ns0:array_of_stability_incremental_analysis_building_stories_interstory_drifts
ns0:array_of_stability_incremental_analysis_building_stories_story_actions
ns0:array_of_stability_incremental_analysis_calculation_diagrams
ns0:array_of_stability_incremental_analysis_convergence_diagrams
ns0:array_of_stability_incremental_analysis_line_hinges_deformations
ns0:array_of_stability_incremental_analysis_line_hinges_forces
ns0:array_of_stability_incremental_analysis_lines_slab_wall_connections
ns0:array_of_stability_incremental_analysis_lines_support_forces
ns0:array_of_stability_incremental_analysis_members_contact_forces
ns0:array_of_stability_incremental_analysis_members_global_deformations
ns0:array_of_stability_incremental_analysis_members_hinge_deformations
ns0:array_of_stability_incremental_analysis_members_hinge_forces
ns0:array_of_stability_incremental_analysis_members_internal_forces
ns0:array_of_stability_incremental_analysis_members_internal_forces_by_member_set
ns0:array_of_stability_incremental_analysis_members_internal_forces_by_section
ns0:array_of_stability_incremental_analysis_members_local_deformations
ns0:array_of_stability_incremental_analysis_members_local_plastic_deformation_ratios
ns0:array_of_stability_incremental_analysis_members_strains
ns0:array_of_stability_incremental_analysis_nodes_deformations
ns0:array_of_stability_incremental_analysis_nodes_support_forces
ns0:array_of_stability_incremental_analysis_solids_basic_plastic_strains
ns0:array_of_stability_incremental_analysis_solids_basic_stresses
ns0:array_of_stability_incremental_analysis_solids_basic_total_strains
ns0:array_of_stability_incremental_analysis_solids_deformations
ns0:array_of_stability_incremental_analysis_solids_equivalent_plastic_strains
ns0:array_of_stability_incremental_analysis_solids_equivalent_stresses
ns0:array_of_stability_incremental_analysis_solids_equivalent_total_strains
ns0:array_of_stability_incremental_analysis_solids_gas_quantities
ns0:array_of_stability_incremental_analysis_solids_principal_plastic_strains
ns0:array_of_stability_incremental_analysis_solids_principal_stresses
ns0:array_of_stability_incremental_analysis_solids_principal_total_strains
ns0:array_of_stability_incremental_analysis_summary
ns0:array_of_stability_incremental_analysis_surfaces_basic_internal_forces
ns0:array_of_stability_incremental_analysis_surfaces_basic_plastic_strains
ns0:array_of_stability_incremental_analysis_surfaces_basic_stresses
ns0:array_of_stability_incremental_analysis_surfaces_basic_total_strains
ns0:array_of_stability_incremental_analysis_surfaces_contact_stresses
ns0:array_of_stability_incremental_analysis_surfaces_design_internal_forces
ns0:array_of_stability_incremental_analysis_surfaces_elastic_stress_components
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_plastic_strains_bach
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_plastic_strains_mises
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_stresses_bach
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_stresses_mises
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_stresses_rankine
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_stresses_tresca
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_total_strains_bach
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_total_strains_mises
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_total_strains_rankine
ns0:array_of_stability_incremental_analysis_surfaces_equivalent_total_strains_tresca
ns0:array_of_stability_incremental_analysis_surfaces_global_deformations
ns0:array_of_stability_incremental_analysis_surfaces_local_deformations
ns0:array_of_stability_incremental_analysis_surfaces_maximum_plastic_strains
ns0:array_of_stability_incremental_analysis_surfaces_maximum_total_strains
ns0:array_of_stability_incremental_analysis_surfaces_principal_internal_forces
ns0:array_of_stability_incremental_analysis_surfaces_principal_plastic_strains
ns0:array_of_stability_incremental_analysis_surfaces_principal_stresses
ns0:array_of_stability_incremental_analysis_surfaces_principal_total_strains
ns0:array_of_steel_boundary_conditions_member_hinges
ns0:array_of_steel_boundary_conditions_nodal_supports
ns0:array_of_steel_effective_lengths_factors
ns0:array_of_steel_effective_lengths_lengths
ns0:array_of_steel_effective_lengths_nodal_supports
ns0:array_of_steel_effective_lengths_stability_import_data_factors
ns0:array_of_steel_effective_lengths_stability_import_data_lengths
ns0:array_of_steel_member_local_section_reduction_components
ns0:array_of_structure_modification_modify_stiffnesses_line_hinges_table
ns0:array_of_structure_modification_modify_stiffnesses_line_supports_table
ns0:array_of_structure_modification_modify_stiffnesses_material_table
ns0:array_of_structure_modification_modify_stiffnesses_member_hinges_table
ns0:array_of_structure_modification_modify_stiffnesses_member_supports_table
ns0:array_of_structure_modification_modify_stiffnesses_member_table
ns0:array_of_structure_modification_modify_stiffnesses_nodal_supports_table
ns0:array_of_structure_modification_modify_stiffnesses_section_table
ns0:array_of_structure_modification_modify_stiffnesses_surface_supports_table
ns0:array_of_structure_modification_modify_stiffnesses_surface_table
ns0:array_of_summary
ns0:array_of_surface_line_hinges_table
ns0:array_of_surface_load_varying_load_parameters
ns0:array_of_surface_nurbs_control_points_rows
ns0:array_of_surface_reinforcement_polygon_points
ns0:array_of_surface_release_type_diagram_along_x_color_table
ns0:array_of_surface_release_type_diagram_along_x_table
ns0:array_of_surface_release_type_diagram_along_y_color_table
ns0:array_of_surface_release_type_diagram_along_y_table
ns0:array_of_surface_release_type_diagram_along_z_color_table
ns0:array_of_surface_release_type_diagram_along_z_table
ns0:array_of_surface_results_adjustment_polygon_points
ns0:array_of_surface_results_adjustment_results_to_adjust_contact_stress_area
ns0:array_of_surface_results_adjustment_results_to_adjust_in_direction_u_and_child_items
ns0:array_of_surface_results_adjustment_results_to_adjust_in_direction_v_and_child_items
ns0:array_of_surface_results_adjustment_results_to_adjust_zero_and_child_items
ns0:array_of_surface_set_load_varying_load_parameters
ns0:array_of_surface_set_surface_reinforcement_table
ns0:array_of_surface_surface_reinforcement_table
ns0:array_of_surfaces
ns0:array_of_surfaces_basic_internal_forces
ns0:array_of_surfaces_basic_plastic_strains
ns0:array_of_surfaces_basic_stresses
ns0:array_of_surfaces_basic_total_strains
ns0:array_of_surfaces_by_eigenvector
ns0:array_of_surfaces_contact_stresses
ns0:array_of_surfaces_design_internal_forces
ns0:array_of_surfaces_elastic_stress_components
ns0:array_of_surfaces_equivalent_plastic_strains_bach
ns0:array_of_surfaces_equivalent_plastic_strains_mises
ns0:array_of_surfaces_equivalent_plastic_strains_rankine
ns0:array_of_surfaces_equivalent_plastic_strains_tresca
ns0:array_of_surfaces_equivalent_stresses_bach
ns0:array_of_surfaces_equivalent_stresses_mises
ns0:array_of_surfaces_equivalent_stresses_rankine
ns0:array_of_surfaces_equivalent_stresses_tresca
ns0:array_of_surfaces_equivalent_total_strains_bach
ns0:array_of_surfaces_equivalent_total_strains_mises
ns0:array_of_surfaces_equivalent_total_strains_rankine
ns0:array_of_surfaces_equivalent_total_strains_tresca
ns0:array_of_surfaces_global_deformations
ns0:array_of_surfaces_local_deformations
ns0:array_of_surfaces_maximum_plastic_strains
ns0:array_of_surfaces_maximum_total_strains
ns0:array_of_surfaces_principal_internal_forces
ns0:array_of_surfaces_principal_plastic_strains
ns0:array_of_surfaces_principal_stresses
ns0:array_of_surfaces_principal_total_strains
ns0:array_of_terrain_terrain_table
ns0:array_of_thickness_function_data_coefficients
ns0:array_of_thickness_layers_reference_table
ns0:array_of_thickness_timber_frame_wall_vertical_studs_spacing_table
ns0:array_of_thickness_time_dependent_properties_and_child_items
ns0:array_of_timber_effective_lengths_factors
ns0:array_of_timber_effective_lengths_fire_design_factors
ns0:array_of_timber_effective_lengths_fire_design_lengths
ns0:array_of_timber_effective_lengths_fire_design_nodal_supports
ns0:array_of_timber_effective_lengths_lengths
ns0:array_of_timber_effective_lengths_nodal_supports
ns0:array_of_timber_effective_lengths_stability_import_data_factors
ns0:array_of_timber_effective_lengths_stability_import_data_lengths
ns0:array_of_timber_member_local_section_reduction_components
ns0:array_of_time_history_analysis_building_stories_centres_mass_rigidity
ns0:array_of_time_history_analysis_building_stories_forces_in_shear_walls
ns0:array_of_time_history_analysis_building_stories_forces_in_spandrels
ns0:array_of_time_history_analysis_building_stories_interstory_drifts
ns0:array_of_time_history_analysis_building_stories_story_actions
ns0:array_of_time_history_analysis_calculation_diagrams
ns0:array_of_time_history_analysis_convergence_diagrams
ns0:array_of_time_history_analysis_line_hinges_deformations
ns0:array_of_time_history_analysis_line_hinges_forces
ns0:array_of_time_history_analysis_lines_slab_wall_connections
ns0:array_of_time_history_analysis_lines_support_forces
ns0:array_of_time_history_analysis_members_contact_forces
ns0:array_of_time_history_analysis_members_global_deformations
ns0:array_of_time_history_analysis_members_hinge_deformations
ns0:array_of_time_history_analysis_members_hinge_forces
ns0:array_of_time_history_analysis_members_internal_forces
ns0:array_of_time_history_analysis_members_internal_forces_by_member_set
ns0:array_of_time_history_analysis_members_internal_forces_by_section
ns0:array_of_time_history_analysis_members_local_deformations
ns0:array_of_time_history_analysis_members_local_plastic_deformation_ratios
ns0:array_of_time_history_analysis_members_strains
ns0:array_of_time_history_analysis_nodes_accelerations
ns0:array_of_time_history_analysis_nodes_deformations
ns0:array_of_time_history_analysis_nodes_support_forces
ns0:array_of_time_history_analysis_nodes_velocities
ns0:array_of_time_history_analysis_solids_basic_plastic_strains
ns0:array_of_time_history_analysis_solids_basic_stresses
ns0:array_of_time_history_analysis_solids_basic_total_strains
ns0:array_of_time_history_analysis_solids_deformations
ns0:array_of_time_history_analysis_solids_equivalent_plastic_strains
ns0:array_of_time_history_analysis_solids_equivalent_stresses
ns0:array_of_time_history_analysis_solids_equivalent_total_strains
ns0:array_of_time_history_analysis_solids_gas_quantities
ns0:array_of_time_history_analysis_solids_principal_plastic_strains
ns0:array_of_time_history_analysis_solids_principal_stresses
ns0:array_of_time_history_analysis_solids_principal_total_strains
ns0:array_of_time_history_analysis_summary
ns0:array_of_time_history_analysis_surfaces_basic_internal_forces
ns0:array_of_time_history_analysis_surfaces_basic_plastic_strains
ns0:array_of_time_history_analysis_surfaces_basic_stresses
ns0:array_of_time_history_analysis_surfaces_basic_total_strains
ns0:array_of_time_history_analysis_surfaces_contact_stresses
ns0:array_of_time_history_analysis_surfaces_design_internal_forces
ns0:array_of_time_history_analysis_surfaces_elastic_stress_components
ns0:array_of_time_history_analysis_surfaces_equivalent_plastic_strains_bach
ns0:array_of_time_history_analysis_surfaces_equivalent_plastic_strains_mises
ns0:array_of_time_history_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:array_of_time_history_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:array_of_time_history_analysis_surfaces_equivalent_stresses_bach
ns0:array_of_time_history_analysis_surfaces_equivalent_stresses_mises
ns0:array_of_time_history_analysis_surfaces_equivalent_stresses_rankine
ns0:array_of_time_history_analysis_surfaces_equivalent_stresses_tresca
ns0:array_of_time_history_analysis_surfaces_equivalent_total_strains_bach
ns0:array_of_time_history_analysis_surfaces_equivalent_total_strains_mises
ns0:array_of_time_history_analysis_surfaces_equivalent_total_strains_rankine
ns0:array_of_time_history_analysis_surfaces_equivalent_total_strains_tresca
ns0:array_of_time_history_analysis_surfaces_global_deformations
ns0:array_of_time_history_analysis_surfaces_local_deformations
ns0:array_of_time_history_analysis_surfaces_maximum_plastic_strains
ns0:array_of_time_history_analysis_surfaces_maximum_total_strains
ns0:array_of_time_history_analysis_surfaces_principal_internal_forces
ns0:array_of_time_history_analysis_surfaces_principal_plastic_strains
ns0:array_of_time_history_analysis_surfaces_principal_stresses
ns0:array_of_time_history_analysis_surfaces_principal_total_strains
ns0:array_of_wind_profile_user_defined_wind_profile
ns0:array_of_wind_simulation_generate_into_load_cases
ns0:array_of_wind_simulation_individual_factors_of_selected_objects_table
ns0:asf_export_data_type
ns0:attribute
ns0:attributes
ns0:bar_size_designation_corner_type
ns0:bar_size_designation_line_type
ns0:bar_size_designation_single_type
ns0:bar_size_designation_symmetrical_type
ns0:bar_size_designation_uniformly_surrounding_type
ns0:bar_size_designation_unsymmetrical_at_side_type
ns0:bar_size_designation_unsymmetrical_bottom_side_type
ns0:bar_size_designation_unsymmetrical_top_side_type
ns0:begin_modification
ns0:begin_modificationResponse
ns0:borehole
ns0:borehole_layers_table
ns0:borehole_layers_table_row
ns0:borehole_type
ns0:building_stories_centres_mass_rigidity
ns0:building_stories_centres_mass_rigidity_row
ns0:building_stories_forces_in_shear_walls
ns0:building_stories_forces_in_shear_walls_row
ns0:building_stories_forces_in_spandrels
ns0:building_stories_forces_in_spandrels_row
ns0:building_stories_interstory_drifts
ns0:building_stories_interstory_drifts_row
ns0:building_stories_story_actions
ns0:building_stories_story_actions_row
ns0:building_story
ns0:building_story_floor_stiffness_type
ns0:building_story_info
ns0:building_story_info_and_child_items
ns0:building_story_info_row
ns0:building_story_modify_geometry_type
ns0:building_story_slab_stiffness_type
ns0:building_story_thickness_type
ns0:building_story_total_info
ns0:building_story_total_info_and_child_items
ns0:building_story_total_info_row
ns0:building_story_type
ns0:calculate_all
ns0:calculate_allResponse
ns0:calculate_specific
ns0:calculate_specificResponse
ns0:calculate_specific_loading
ns0:calculate_specific_loadings
ns0:calculation_diagram
ns0:calculation_diagram_analysis_type
ns0:calculation_diagram_diagram_type
ns0:calculation_diagram_horizontal_axis_result_type
ns0:calculation_diagram_horizontal_axis_value
ns0:calculation_diagram_table
ns0:calculation_diagram_table_row
ns0:calculation_diagram_vertical_axis_result_type
ns0:calculation_diagram_vertical_axis_value
ns0:calculation_diagrams
ns0:calculation_diagrams_row
ns0:calculation_message
ns0:calculation_message_type
ns0:calculation_messages
ns0:cancel_modification
ns0:cancel_modificationResponse
ns0:case_object_load_type
ns0:case_object_sub_result_type
ns0:case_object_types
ns0:clear_selection
ns0:clear_selectionResponse
ns0:clipping_box
ns0:clipping_plane
ns0:clipping_plane_orientation
ns0:clipping_plane_rotation_angles_sequence
ns0:clipping_plane_type
ns0:close_connection
ns0:close_connectionResponse
ns0:color
ns0:combination_wizard
ns0:combination_wizard_generate_combinations
ns0:combination_wizard_individual_factors_of_selected_objects_table
ns0:combination_wizard_individual_factors_of_selected_objects_table_row
ns0:combination_wizard_initial_state_definition_type
ns0:concrete_design_sls_configuration
ns0:concrete_design_uls_configuration
ns0:concrete_durability
ns0:concrete_durability_additional_protection_type
ns0:concrete_durability_allowance_of_deviation_type
ns0:concrete_durability_chemical_attack
ns0:concrete_durability_concrete_cast
ns0:concrete_durability_concrete_corrosion_induced_by_wear
ns0:concrete_durability_corrosion_induced_by_carbonation
ns0:concrete_durability_corrosion_induced_by_chlorides
ns0:concrete_durability_corrosion_induced_by_chlorides_from_sea_water
ns0:concrete_durability_design_working_life
ns0:concrete_durability_freeze_thaw_attack
ns0:concrete_durability_increase_of_minimum_concrete_cover_type
ns0:concrete_durability_maximum_equivalent_water_to_cement_ratio
ns0:concrete_durability_no_risk_of_corrosion_or_attack
ns0:concrete_durability_stainless_steel_type
ns0:concrete_durability_structural_class_type
ns0:concrete_durability_userdefined_structural_class
ns0:concrete_effective_lengths
ns0:concrete_effective_lengths_buckling_factor_value_type
ns0:concrete_effective_lengths_factors
ns0:concrete_effective_lengths_factors_row
ns0:concrete_effective_lengths_fire_design_factors
ns0:concrete_effective_lengths_fire_design_factors_row
ns0:concrete_effective_lengths_fire_design_lengths
ns0:concrete_effective_lengths_fire_design_lengths_row
ns0:concrete_effective_lengths_fire_design_nodal_supports
ns0:concrete_effective_lengths_fire_design_nodal_supports_row
ns0:concrete_effective_lengths_lengths
ns0:concrete_effective_lengths_lengths_row
ns0:concrete_effective_lengths_nodal_supports
ns0:concrete_effective_lengths_nodal_supports_row
ns0:concrete_effective_lengths_stability_import_data_factors
ns0:concrete_effective_lengths_stability_import_data_factors_row
ns0:concrete_effective_lengths_stability_import_data_lengths
ns0:concrete_effective_lengths_stability_import_data_lengths_row
ns0:concrete_effective_lengths_structural_scheme_about_axis_y
ns0:concrete_effective_lengths_structural_scheme_about_axis_z
ns0:concrete_effective_lengths_structure_type_about_axis_y
ns0:concrete_effective_lengths_structure_type_about_axis_z
ns0:construction_stage
ns0:construction_stage_generate_combinations
ns0:construction_stage_loading
ns0:construction_stage_loading_row
ns0:construction_stage_member_property_modifications
ns0:construction_stage_member_property_modifications_row
ns0:construction_stage_solid_property_modifications
ns0:construction_stage_solid_property_modifications_property_to_modify_type
ns0:construction_stage_solid_property_modifications_row
ns0:construction_stage_surface_property_modifications
ns0:construction_stage_surface_property_modifications_property_to_modify_type
ns0:construction_stage_surface_property_modifications_row
ns0:contact_stress_type
ns0:convergence_diagrams
ns0:convergence_diagrams_row
ns0:coordinate_system
ns0:coordinate_system_rotation_angles_sequence
ns0:coordinate_system_type
ns0:create_my_section_list
ns0:create_my_section_listResponse
ns0:create_section_by_name
ns0:create_section_by_nameResponse
ns0:create_section_from_rsection_file
ns0:create_section_from_rsection_fileResponse
ns0:critical_load_factors
ns0:critical_load_factors_row
ns0:definition_type
ns0:delete_all
ns0:delete_allResponse
ns0:delete_all_history
ns0:delete_all_historyResponse
ns0:delete_all_results
ns0:delete_all_resultsResponse
ns0:delete_my_section_list
ns0:delete_my_section_listResponse
ns0:delete_object
ns0:delete_objectResponse
ns0:delete_printout_reports
ns0:delete_printout_reportsResponse
ns0:delete_section_from_my_section_list
ns0:delete_section_from_my_section_listResponse
ns0:design_overview
ns0:design_overview_row
ns0:design_situation
ns0:design_situation_case_objects_row
ns0:design_situation_type
ns0:design_support
ns0:design_support_design_support_orientation_y
ns0:design_support_design_support_orientation_z
ns0:design_support_timber_calculation_method_y
ns0:design_support_timber_calculation_method_z
ns0:design_support_timber_compression_design_value_y
ns0:design_support_timber_compression_design_value_z
ns0:design_support_type
ns0:dimension
ns0:dimension_angular_quadrant
ns0:dimension_angular_reference_table
ns0:dimension_angular_reference_table_row
ns0:dimension_arc_length_reference_table
ns0:dimension_arc_length_reference_table_row
ns0:dimension_custom_horizontal_position
ns0:dimension_custom_vertical_position
ns0:dimension_elevation_reference_object_type
ns0:dimension_linear_plane
ns0:dimension_linear_reference
ns0:dimension_linear_reference_table
ns0:dimension_linear_reference_table_row
ns0:dimension_slope_direction
ns0:dimension_slope_plane
ns0:dimension_type
ns0:direction_type
ns0:distribution_linearity_type
ns0:divide_by_intersections
ns0:divide_by_intersectionsResponse
ns0:eccentricity_type
ns0:eccentricity_type_z_type
ns0:efeective_lengths_and_critical_loads_by_eigenvector
ns0:efeective_lengths_and_critical_loads_by_eigenvector_row
ns0:efeective_lengths_and_critical_loads_by_member
ns0:efeective_lengths_and_critical_loads_by_member_row
ns0:eigenvectors_by_member
ns0:eigenvectors_by_member_row
ns0:eigenvectors_by_node
ns0:eigenvectors_by_node_row
ns0:eigenvectors_by_solid
ns0:eigenvectors_by_solid_row
ns0:eigenvectors_by_surface
ns0:eigenvectors_by_surface_row
ns0:errors
ns0:errors_row
ns0:export_details_of_design_to_csv
ns0:export_details_of_design_to_csvResponse
ns0:export_printout_report_to_html
ns0:export_printout_report_to_htmlResponse
ns0:export_printout_report_to_pdf
ns0:export_printout_report_to_pdfResponse
ns0:export_result_tables_to_csv
ns0:export_result_tables_to_csvResponse
ns0:export_result_tables_to_xml
ns0:export_result_tables_to_xmlResponse
ns0:export_result_tables_with_detailed_members_results_to_csv
ns0:export_result_tables_with_detailed_members_results_to_csvResponse
ns0:export_result_tables_with_detailed_members_results_to_xml
ns0:export_result_tables_with_detailed_members_results_to_xmlResponse
ns0:export_to
ns0:export_toResponse
ns0:export_to_asf
ns0:export_to_asfResponse
ns0:export_to_ifc
ns0:export_to_ifcResponse
ns0:export_to_ifc_axis_rotation_sequence_type
ns0:export_to_ifc_axis_type
ns0:export_to_ifc_export_type
ns0:export_to_ifc_object_location
ns0:export_to_ifc_object_locations
ns0:export_to_ifc_settings
ns0:export_to_tables
ns0:export_to_tablesResponse
ns0:fastener_definition_type
ns0:finish_modification
ns0:finish_modificationResponse
ns0:formula_data
ns0:free_circular_load
ns0:free_circular_load_load_direction
ns0:free_circular_load_load_distribution
ns0:free_circular_load_load_projection
ns0:free_concentrated_load
ns0:free_concentrated_load_load_direction
ns0:free_concentrated_load_load_projection
ns0:free_concentrated_load_load_type
ns0:free_line_load
ns0:free_line_load_load_direction
ns0:free_line_load_load_distribution
ns0:free_line_load_load_projection
ns0:free_polygon_load
ns0:free_polygon_load_load_direction
ns0:free_polygon_load_load_distribution
ns0:free_polygon_load_load_location
ns0:free_polygon_load_load_location_row
ns0:free_polygon_load_load_projection
ns0:free_rectangular_load
ns0:free_rectangular_load_load_direction
ns0:free_rectangular_load_load_distribution
ns0:free_rectangular_load_load_location_rectangle
ns0:free_rectangular_load_load_projection
ns0:free_rectangular_load_load_varying_along_perimeter_parameters
ns0:free_rectangular_load_load_varying_along_perimeter_parameters_row
ns0:free_rectangular_load_load_varying_in_z_parameters
ns0:free_rectangular_load_load_varying_in_z_parameters_row
ns0:generate_and_validate_xml_solver_input
ns0:generate_and_validate_xml_solver_inputResponse
ns0:generate_and_validate_xml_solver_input_result
ns0:generate_load_cases_and_combinations
ns0:generate_load_cases_and_combinationsResponse
ns0:generate_mesh
ns0:generate_meshResponse
ns0:generate_parts_lists
ns0:generate_parts_listsResponse
ns0:get_Dxf_file_model_object
ns0:get_Dxf_file_model_objectResponse
ns0:get_Dxf_model_object
ns0:get_Dxf_model_objectResponse
ns0:get_accelerogram
ns0:get_accelerogramResponse
ns0:get_action
ns0:get_actionResponse
ns0:get_action_categories_for_action
ns0:get_action_categories_for_actionResponse
ns0:get_action_categories_for_load_case
ns0:get_action_categories_for_load_caseResponse
ns0:get_action_combination
ns0:get_action_combinationResponse
ns0:get_addon_statuses
ns0:get_addon_statusesResponse
ns0:get_all_object_numbers
ns0:get_all_object_numbersResponse
ns0:get_all_object_numbers_by_type
ns0:get_all_object_numbers_by_typeResponse
ns0:get_all_selected_objects
ns0:get_all_selected_objectsResponse
ns0:get_aluminum_design_sls_configuration
ns0:get_aluminum_design_sls_configurationResponse
ns0:get_aluminum_design_uls_configuration
ns0:get_aluminum_design_uls_configurationResponse
ns0:get_aluminum_effective_lengths
ns0:get_aluminum_effective_lengthsResponse
ns0:get_aluminum_member_local_section_reduction
ns0:get_aluminum_member_local_section_reductionResponse
ns0:get_aluminum_member_transverse_weld
ns0:get_aluminum_member_transverse_weldResponse
ns0:get_borehole
ns0:get_boreholeResponse
ns0:get_building_story
ns0:get_building_storyResponse
ns0:get_calculation_diagram
ns0:get_calculation_diagramResponse
ns0:get_clipping_box
ns0:get_clipping_boxResponse
ns0:get_clipping_plane
ns0:get_clipping_planeResponse
ns0:get_combination_wizard
ns0:get_combination_wizardResponse
ns0:get_concrete_design_sls_configuration
ns0:get_concrete_design_sls_configurationResponse
ns0:get_concrete_design_uls_configuration
ns0:get_concrete_design_uls_configurationResponse
ns0:get_concrete_durability
ns0:get_concrete_durabilityResponse
ns0:get_concrete_effective_lengths
ns0:get_concrete_effective_lengthsResponse
ns0:get_construction_stage
ns0:get_construction_stageResponse
ns0:get_coordinate_system
ns0:get_coordinate_systemResponse
ns0:get_design_overview
ns0:get_design_overviewResponse
ns0:get_design_situation
ns0:get_design_situationResponse
ns0:get_design_situation_types
ns0:get_design_situation_typesResponse
ns0:get_design_support
ns0:get_design_supportResponse
ns0:get_dimension
ns0:get_dimensionResponse
ns0:get_first_free_number
ns0:get_first_free_numberResponse
ns0:get_formula
ns0:get_formulaResponse
ns0:get_free_circular_load
ns0:get_free_circular_loadResponse
ns0:get_free_concentrated_load
ns0:get_free_concentrated_loadResponse
ns0:get_free_line_load
ns0:get_free_line_loadResponse
ns0:get_free_polygon_load
ns0:get_free_polygon_loadResponse
ns0:get_free_rectangular_load
ns0:get_free_rectangular_loadResponse
ns0:get_global_parameter
ns0:get_global_parameterResponse
ns0:get_imperfection_case
ns0:get_imperfection_caseResponse
ns0:get_imposed_line_deformation
ns0:get_imposed_line_deformationResponse
ns0:get_imposed_nodal_deformation
ns0:get_imposed_nodal_deformationResponse
ns0:get_intersection
ns0:get_intersectionResponse
ns0:get_line
ns0:get_lineResponse
ns0:get_line_grid
ns0:get_line_gridResponse
ns0:get_line_hinge
ns0:get_line_hingeResponse
ns0:get_line_load
ns0:get_line_loadResponse
ns0:get_line_mesh_refinement
ns0:get_line_mesh_refinementResponse
ns0:get_line_release
ns0:get_line_releaseResponse
ns0:get_line_release_type
ns0:get_line_release_typeResponse
ns0:get_line_set
ns0:get_line_setResponse
ns0:get_line_set_load
ns0:get_line_set_loadResponse
ns0:get_line_support
ns0:get_line_supportResponse
ns0:get_line_welded_joint
ns0:get_line_welded_jointResponse
ns0:get_list_of_parameters_formula_allowed_for
ns0:get_list_of_parameters_formula_allowed_forResponse
ns0:get_list_of_printout_reports
ns0:get_list_of_printout_reportsResponse
ns0:get_load_case
ns0:get_load_caseResponse
ns0:get_load_cases_and_combinations
ns0:get_load_cases_and_combinationsResponse
ns0:get_load_combination
ns0:get_load_combinationResponse
ns0:get_main_objects_to_activate
ns0:get_main_objects_to_activateResponse
ns0:get_material
ns0:get_materialResponse
ns0:get_member
ns0:get_memberResponse
ns0:get_member_definable_stiffness
ns0:get_member_definable_stiffnessResponse
ns0:get_member_eccentricity
ns0:get_member_eccentricityResponse
ns0:get_member_hinge
ns0:get_member_hingeResponse
ns0:get_member_imperfection
ns0:get_member_imperfectionResponse
ns0:get_member_load
ns0:get_member_loadResponse
ns0:get_member_nonlinearity
ns0:get_member_nonlinearityResponse
ns0:get_member_openings
ns0:get_member_openingsResponse
ns0:get_member_representative
ns0:get_member_representativeResponse
ns0:get_member_result_intermediate_point
ns0:get_member_result_intermediate_pointResponse
ns0:get_member_rotational_restraint
ns0:get_member_rotational_restraintResponse
ns0:get_member_set
ns0:get_member_setResponse
ns0:get_member_set_imperfection
ns0:get_member_set_imperfectionResponse
ns0:get_member_set_load
ns0:get_member_set_loadResponse
ns0:get_member_set_representative
ns0:get_member_set_representativeResponse
ns0:get_member_shear_panel
ns0:get_member_shear_panelResponse
ns0:get_member_stiffness_modification
ns0:get_member_stiffness_modificationResponse
ns0:get_member_support
ns0:get_member_supportResponse
ns0:get_member_transverse_stiffener
ns0:get_member_transverse_stiffenerResponse
ns0:get_mesh_settings
ns0:get_mesh_settingsResponse
ns0:get_mesh_statistics
ns0:get_mesh_statisticsResponse
ns0:get_modal_analysis_settings
ns0:get_modal_analysis_settingsResponse
ns0:get_model_history
ns0:get_model_historyResponse
ns0:get_model_info
ns0:get_model_infoResponse
ns0:get_model_main_parameters
ns0:get_model_main_parametersResponse
ns0:get_model_parameters
ns0:get_model_parametersResponse
ns0:get_model_parameters_location
ns0:get_model_parameters_locationResponse
ns0:get_model_settings_and_options
ns0:get_model_settings_and_optionsResponse
ns0:get_model_type
ns0:get_model_typeResponse
ns0:get_my_section_lists
ns0:get_my_section_listsResponse
ns0:get_my_section_lists__list
ns0:get_my_section_lists__list_items
ns0:get_my_section_lists__lists
ns0:get_nodal_load
ns0:get_nodal_loadResponse
ns0:get_nodal_mesh_refinement
ns0:get_nodal_mesh_refinementResponse
ns0:get_nodal_release
ns0:get_nodal_releaseResponse
ns0:get_nodal_release_type
ns0:get_nodal_release_typeResponse
ns0:get_nodal_support
ns0:get_nodal_supportResponse
ns0:get_node
ns0:get_nodeResponse
ns0:get_note
ns0:get_noteResponse
ns0:get_nth_object_number
ns0:get_nth_object_numberResponse
ns0:get_object_count
ns0:get_object_countResponse
ns0:get_object_information
ns0:get_object_informationResponse
ns0:get_object_snap
ns0:get_object_snapResponse
ns0:get_opening
ns0:get_openingResponse
ns0:get_opening_load
ns0:get_opening_loadResponse
ns0:get_optimization_settings
ns0:get_optimization_settingsResponse
ns0:get_optimized_values
ns0:get_optimized_valuesResponse
ns0:get_parts_list_all_by_material
ns0:get_parts_list_all_by_materialResponse
ns0:get_parts_list_member_representatives_by_material
ns0:get_parts_list_member_representatives_by_materialResponse
ns0:get_parts_list_member_set_representatives_by_material
ns0:get_parts_list_member_set_representatives_by_materialResponse
ns0:get_parts_list_member_sets_by_material
ns0:get_parts_list_member_sets_by_materialResponse
ns0:get_parts_list_members_by_material
ns0:get_parts_list_members_by_materialResponse
ns0:get_parts_list_solids_by_material
ns0:get_parts_list_solids_by_materialResponse
ns0:get_parts_list_surfaces_by_material
ns0:get_parts_list_surfaces_by_materialResponse
ns0:get_punching_reinforcement
ns0:get_punching_reinforcementResponse
ns0:get_reinforcement_direction
ns0:get_reinforcement_directionResponse
ns0:get_relationship_between_load_cases
ns0:get_relationship_between_load_casesResponse
ns0:get_response_spectrum
ns0:get_response_spectrumResponse
ns0:get_result_combination
ns0:get_result_combinationResponse
ns0:get_result_section
ns0:get_result_sectionResponse
ns0:get_results_for_building_stories_centres_mass_rigidity
ns0:get_results_for_building_stories_centres_mass_rigidityResponse
ns0:get_results_for_building_stories_forces_in_shear_walls
ns0:get_results_for_building_stories_forces_in_shear_wallsResponse
ns0:get_results_for_building_stories_forces_in_spandrels
ns0:get_results_for_building_stories_forces_in_spandrelsResponse
ns0:get_results_for_building_stories_interstory_drifts
ns0:get_results_for_building_stories_interstory_driftsResponse
ns0:get_results_for_building_stories_story_actions
ns0:get_results_for_building_stories_story_actionsResponse
ns0:get_results_for_calculation_diagrams
ns0:get_results_for_calculation_diagramsResponse
ns0:get_results_for_convergence_diagrams
ns0:get_results_for_convergence_diagramsResponse
ns0:get_results_for_critical_load_factors
ns0:get_results_for_critical_load_factorsResponse
ns0:get_results_for_efeective_lengths_and_critical_loads_by_eigenvector
ns0:get_results_for_efeective_lengths_and_critical_loads_by_eigenvectorResponse
ns0:get_results_for_efeective_lengths_and_critical_loads_by_member
ns0:get_results_for_efeective_lengths_and_critical_loads_by_memberResponse
ns0:get_results_for_eigenvectors_by_member
ns0:get_results_for_eigenvectors_by_memberResponse
ns0:get_results_for_eigenvectors_by_node
ns0:get_results_for_eigenvectors_by_nodeResponse
ns0:get_results_for_eigenvectors_by_solid
ns0:get_results_for_eigenvectors_by_solidResponse
ns0:get_results_for_eigenvectors_by_surface
ns0:get_results_for_eigenvectors_by_surfaceResponse
ns0:get_results_for_errors
ns0:get_results_for_errorsResponse
ns0:get_results_for_line_hinges_deformations
ns0:get_results_for_line_hinges_deformationsResponse
ns0:get_results_for_line_hinges_forces
ns0:get_results_for_line_hinges_forcesResponse
ns0:get_results_for_lines_slab_wall_connections
ns0:get_results_for_lines_slab_wall_connectionsResponse
ns0:get_results_for_lines_support_forces
ns0:get_results_for_lines_support_forcesResponse
ns0:get_results_for_members_by_eigenvector
ns0:get_results_for_members_by_eigenvectorResponse
ns0:get_results_for_members_contact_forces
ns0:get_results_for_members_contact_forcesResponse
ns0:get_results_for_members_global_deformations
ns0:get_results_for_members_global_deformationsResponse
ns0:get_results_for_members_hinge_deformations
ns0:get_results_for_members_hinge_deformationsResponse
ns0:get_results_for_members_hinge_forces
ns0:get_results_for_members_hinge_forcesResponse
ns0:get_results_for_members_internal_forces
ns0:get_results_for_members_internal_forcesResponse
ns0:get_results_for_members_internal_forces_by_member_set
ns0:get_results_for_members_internal_forces_by_member_setResponse
ns0:get_results_for_members_internal_forces_by_section
ns0:get_results_for_members_internal_forces_by_sectionResponse
ns0:get_results_for_members_local_deformations
ns0:get_results_for_members_local_deformationsResponse
ns0:get_results_for_members_local_plastic_deformation_ratios
ns0:get_results_for_members_local_plastic_deformation_ratiosResponse
ns0:get_results_for_members_strains
ns0:get_results_for_members_strainsResponse
ns0:get_results_for_modal_analysis_effective_modal_masses
ns0:get_results_for_modal_analysis_effective_modal_massesResponse
ns0:get_results_for_modal_analysis_masses_in_locations
ns0:get_results_for_modal_analysis_masses_in_locationsResponse
ns0:get_results_for_modal_analysis_members_by_mode_shape
ns0:get_results_for_modal_analysis_members_by_mode_shapeResponse
ns0:get_results_for_modal_analysis_mode_shapes_by_member
ns0:get_results_for_modal_analysis_mode_shapes_by_memberResponse
ns0:get_results_for_modal_analysis_mode_shapes_by_node
ns0:get_results_for_modal_analysis_mode_shapes_by_nodeResponse
ns0:get_results_for_modal_analysis_mode_shapes_by_solid
ns0:get_results_for_modal_analysis_mode_shapes_by_solidResponse
ns0:get_results_for_modal_analysis_mode_shapes_by_surface
ns0:get_results_for_modal_analysis_mode_shapes_by_surfaceResponse
ns0:get_results_for_modal_analysis_natural_frequencies
ns0:get_results_for_modal_analysis_natural_frequenciesResponse
ns0:get_results_for_modal_analysis_nodes_by_mode_shape
ns0:get_results_for_modal_analysis_nodes_by_mode_shapeResponse
ns0:get_results_for_modal_analysis_participation_factors
ns0:get_results_for_modal_analysis_participation_factorsResponse
ns0:get_results_for_modal_analysis_solids_by_mode_shape
ns0:get_results_for_modal_analysis_solids_by_mode_shapeResponse
ns0:get_results_for_modal_analysis_surfaces_by_mode_shape
ns0:get_results_for_modal_analysis_surfaces_by_mode_shapeResponse
ns0:get_results_for_nodes_by_eigenvector
ns0:get_results_for_nodes_by_eigenvectorResponse
ns0:get_results_for_nodes_deformations
ns0:get_results_for_nodes_deformationsResponse
ns0:get_results_for_nodes_support_forces
ns0:get_results_for_nodes_support_forcesResponse
ns0:get_results_for_pushover_analysis_building_stories_centres_mass_rigidity
ns0:get_results_for_pushover_analysis_building_stories_centres_mass_rigidityResponse
ns0:get_results_for_pushover_analysis_building_stories_forces_in_shear_walls
ns0:get_results_for_pushover_analysis_building_stories_forces_in_shear_wallsResponse
ns0:get_results_for_pushover_analysis_building_stories_forces_in_spandrels
ns0:get_results_for_pushover_analysis_building_stories_forces_in_spandrelsResponse
ns0:get_results_for_pushover_analysis_building_stories_interstory_drifts
ns0:get_results_for_pushover_analysis_building_stories_interstory_driftsResponse
ns0:get_results_for_pushover_analysis_building_stories_story_actions
ns0:get_results_for_pushover_analysis_building_stories_story_actionsResponse
ns0:get_results_for_pushover_analysis_calculation_diagrams
ns0:get_results_for_pushover_analysis_calculation_diagramsResponse
ns0:get_results_for_pushover_analysis_convergence_diagrams
ns0:get_results_for_pushover_analysis_convergence_diagramsResponse
ns0:get_results_for_pushover_analysis_horizontal_forces
ns0:get_results_for_pushover_analysis_horizontal_forcesResponse
ns0:get_results_for_pushover_analysis_line_hinges_deformations
ns0:get_results_for_pushover_analysis_line_hinges_deformationsResponse
ns0:get_results_for_pushover_analysis_line_hinges_forces
ns0:get_results_for_pushover_analysis_line_hinges_forcesResponse
ns0:get_results_for_pushover_analysis_lines_slab_wall_connections
ns0:get_results_for_pushover_analysis_lines_slab_wall_connectionsResponse
ns0:get_results_for_pushover_analysis_lines_support_forces
ns0:get_results_for_pushover_analysis_lines_support_forcesResponse
ns0:get_results_for_pushover_analysis_members_contact_forces
ns0:get_results_for_pushover_analysis_members_contact_forcesResponse
ns0:get_results_for_pushover_analysis_members_global_deformations
ns0:get_results_for_pushover_analysis_members_global_deformationsResponse
ns0:get_results_for_pushover_analysis_members_hinge_deformations
ns0:get_results_for_pushover_analysis_members_hinge_deformationsResponse
ns0:get_results_for_pushover_analysis_members_hinge_forces
ns0:get_results_for_pushover_analysis_members_hinge_forcesResponse
ns0:get_results_for_pushover_analysis_members_internal_forces
ns0:get_results_for_pushover_analysis_members_internal_forcesResponse
ns0:get_results_for_pushover_analysis_members_internal_forces_by_member_set
ns0:get_results_for_pushover_analysis_members_internal_forces_by_member_setResponse
ns0:get_results_for_pushover_analysis_members_internal_forces_by_section
ns0:get_results_for_pushover_analysis_members_internal_forces_by_sectionResponse
ns0:get_results_for_pushover_analysis_members_local_deformations
ns0:get_results_for_pushover_analysis_members_local_deformationsResponse
ns0:get_results_for_pushover_analysis_members_local_plastic_deformation_ratios
ns0:get_results_for_pushover_analysis_members_local_plastic_deformation_ratiosResponse
ns0:get_results_for_pushover_analysis_members_strains
ns0:get_results_for_pushover_analysis_members_strainsResponse
ns0:get_results_for_pushover_analysis_nodes_deformations
ns0:get_results_for_pushover_analysis_nodes_deformationsResponse
ns0:get_results_for_pushover_analysis_nodes_support_forces
ns0:get_results_for_pushover_analysis_nodes_support_forcesResponse
ns0:get_results_for_pushover_analysis_solids_basic_plastic_strains
ns0:get_results_for_pushover_analysis_solids_basic_plastic_strainsResponse
ns0:get_results_for_pushover_analysis_solids_basic_stresses
ns0:get_results_for_pushover_analysis_solids_basic_stressesResponse
ns0:get_results_for_pushover_analysis_solids_basic_total_strains
ns0:get_results_for_pushover_analysis_solids_basic_total_strainsResponse
ns0:get_results_for_pushover_analysis_solids_deformations
ns0:get_results_for_pushover_analysis_solids_deformationsResponse
ns0:get_results_for_pushover_analysis_solids_equivalent_plastic_strains
ns0:get_results_for_pushover_analysis_solids_equivalent_plastic_strainsResponse
ns0:get_results_for_pushover_analysis_solids_equivalent_stresses
ns0:get_results_for_pushover_analysis_solids_equivalent_stressesResponse
ns0:get_results_for_pushover_analysis_solids_equivalent_total_strains
ns0:get_results_for_pushover_analysis_solids_equivalent_total_strainsResponse
ns0:get_results_for_pushover_analysis_solids_gas_quantities
ns0:get_results_for_pushover_analysis_solids_gas_quantitiesResponse
ns0:get_results_for_pushover_analysis_solids_principal_plastic_strains
ns0:get_results_for_pushover_analysis_solids_principal_plastic_strainsResponse
ns0:get_results_for_pushover_analysis_solids_principal_stresses
ns0:get_results_for_pushover_analysis_solids_principal_stressesResponse
ns0:get_results_for_pushover_analysis_solids_principal_total_strains
ns0:get_results_for_pushover_analysis_solids_principal_total_strainsResponse
ns0:get_results_for_pushover_analysis_summary
ns0:get_results_for_pushover_analysis_summaryResponse
ns0:get_results_for_pushover_analysis_surfaces_basic_internal_forces
ns0:get_results_for_pushover_analysis_surfaces_basic_internal_forcesResponse
ns0:get_results_for_pushover_analysis_surfaces_basic_plastic_strains
ns0:get_results_for_pushover_analysis_surfaces_basic_plastic_strainsResponse
ns0:get_results_for_pushover_analysis_surfaces_basic_stresses
ns0:get_results_for_pushover_analysis_surfaces_basic_stressesResponse
ns0:get_results_for_pushover_analysis_surfaces_basic_total_strains
ns0:get_results_for_pushover_analysis_surfaces_basic_total_strainsResponse
ns0:get_results_for_pushover_analysis_surfaces_contact_stresses
ns0:get_results_for_pushover_analysis_surfaces_contact_stressesResponse
ns0:get_results_for_pushover_analysis_surfaces_design_internal_forces
ns0:get_results_for_pushover_analysis_surfaces_design_internal_forcesResponse
ns0:get_results_for_pushover_analysis_surfaces_elastic_stress_components
ns0:get_results_for_pushover_analysis_surfaces_elastic_stress_componentsResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_bach
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_bachResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_mises
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_misesResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_rankineResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:get_results_for_pushover_analysis_surfaces_equivalent_plastic_strains_trescaResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_bach
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_bachResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_mises
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_misesResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_rankine
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_rankineResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_tresca
ns0:get_results_for_pushover_analysis_surfaces_equivalent_stresses_trescaResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_bach
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_bachResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_mises
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_misesResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_rankine
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_rankineResponse
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_tresca
ns0:get_results_for_pushover_analysis_surfaces_equivalent_total_strains_trescaResponse
ns0:get_results_for_pushover_analysis_surfaces_global_deformations
ns0:get_results_for_pushover_analysis_surfaces_global_deformationsResponse
ns0:get_results_for_pushover_analysis_surfaces_local_deformations
ns0:get_results_for_pushover_analysis_surfaces_local_deformationsResponse
ns0:get_results_for_pushover_analysis_surfaces_maximum_plastic_strains
ns0:get_results_for_pushover_analysis_surfaces_maximum_plastic_strainsResponse
ns0:get_results_for_pushover_analysis_surfaces_maximum_total_strains
ns0:get_results_for_pushover_analysis_surfaces_maximum_total_strainsResponse
ns0:get_results_for_pushover_analysis_surfaces_principal_internal_forces
ns0:get_results_for_pushover_analysis_surfaces_principal_internal_forcesResponse
ns0:get_results_for_pushover_analysis_surfaces_principal_plastic_strains
ns0:get_results_for_pushover_analysis_surfaces_principal_plastic_strainsResponse
ns0:get_results_for_pushover_analysis_surfaces_principal_stresses
ns0:get_results_for_pushover_analysis_surfaces_principal_stressesResponse
ns0:get_results_for_pushover_analysis_surfaces_principal_total_strains
ns0:get_results_for_pushover_analysis_surfaces_principal_total_strainsResponse
ns0:get_results_for_pushover_analysis_target_displacement
ns0:get_results_for_pushover_analysis_target_displacementResponse
ns0:get_results_for_solids_basic_plastic_strains
ns0:get_results_for_solids_basic_plastic_strainsResponse
ns0:get_results_for_solids_basic_stresses
ns0:get_results_for_solids_basic_stressesResponse
ns0:get_results_for_solids_basic_total_strains
ns0:get_results_for_solids_basic_total_strainsResponse
ns0:get_results_for_solids_by_eigenvector
ns0:get_results_for_solids_by_eigenvectorResponse
ns0:get_results_for_solids_deformations
ns0:get_results_for_solids_deformationsResponse
ns0:get_results_for_solids_equivalent_plastic_strains
ns0:get_results_for_solids_equivalent_plastic_strainsResponse
ns0:get_results_for_solids_equivalent_stresses
ns0:get_results_for_solids_equivalent_stressesResponse
ns0:get_results_for_solids_equivalent_total_strains
ns0:get_results_for_solids_equivalent_total_strainsResponse
ns0:get_results_for_solids_gas_quantities
ns0:get_results_for_solids_gas_quantitiesResponse
ns0:get_results_for_solids_principal_plastic_strains
ns0:get_results_for_solids_principal_plastic_strainsResponse
ns0:get_results_for_solids_principal_stresses
ns0:get_results_for_solids_principal_stressesResponse
ns0:get_results_for_solids_principal_total_strains
ns0:get_results_for_solids_principal_total_strainsResponse
ns0:get_results_for_spectral_analysis_building_stories_centres_mass_rigidity
ns0:get_results_for_spectral_analysis_building_stories_centres_mass_rigidityResponse
ns0:get_results_for_spectral_analysis_building_stories_forces_in_shear_walls
ns0:get_results_for_spectral_analysis_building_stories_forces_in_shear_wallsResponse
ns0:get_results_for_spectral_analysis_building_stories_forces_in_spandrels
ns0:get_results_for_spectral_analysis_building_stories_forces_in_spandrelsResponse
ns0:get_results_for_spectral_analysis_building_stories_interstory_drifts
ns0:get_results_for_spectral_analysis_building_stories_interstory_driftsResponse
ns0:get_results_for_spectral_analysis_building_stories_story_actions
ns0:get_results_for_spectral_analysis_building_stories_story_actionsResponse
ns0:get_results_for_spectral_analysis_line_hinges_deformations
ns0:get_results_for_spectral_analysis_line_hinges_deformationsResponse
ns0:get_results_for_spectral_analysis_line_hinges_forces
ns0:get_results_for_spectral_analysis_line_hinges_forcesResponse
ns0:get_results_for_spectral_analysis_lines_slab_wall_connections
ns0:get_results_for_spectral_analysis_lines_slab_wall_connectionsResponse
ns0:get_results_for_spectral_analysis_lines_support_forces
ns0:get_results_for_spectral_analysis_lines_support_forcesResponse
ns0:get_results_for_spectral_analysis_members_contact_forces
ns0:get_results_for_spectral_analysis_members_contact_forcesResponse
ns0:get_results_for_spectral_analysis_members_global_deformations
ns0:get_results_for_spectral_analysis_members_global_deformationsResponse
ns0:get_results_for_spectral_analysis_members_hinge_deformations
ns0:get_results_for_spectral_analysis_members_hinge_deformationsResponse
ns0:get_results_for_spectral_analysis_members_hinge_forces
ns0:get_results_for_spectral_analysis_members_hinge_forcesResponse
ns0:get_results_for_spectral_analysis_members_internal_forces
ns0:get_results_for_spectral_analysis_members_internal_forcesResponse
ns0:get_results_for_spectral_analysis_members_internal_forces_by_member_set
ns0:get_results_for_spectral_analysis_members_internal_forces_by_member_setResponse
ns0:get_results_for_spectral_analysis_members_internal_forces_by_section
ns0:get_results_for_spectral_analysis_members_internal_forces_by_sectionResponse
ns0:get_results_for_spectral_analysis_members_local_deformations
ns0:get_results_for_spectral_analysis_members_local_deformationsResponse
ns0:get_results_for_spectral_analysis_members_local_plastic_deformation_ratios
ns0:get_results_for_spectral_analysis_members_local_plastic_deformation_ratiosResponse
ns0:get_results_for_spectral_analysis_members_strains
ns0:get_results_for_spectral_analysis_members_strainsResponse
ns0:get_results_for_spectral_analysis_nodes_deformations
ns0:get_results_for_spectral_analysis_nodes_deformationsResponse
ns0:get_results_for_spectral_analysis_nodes_pseudo_accelerations
ns0:get_results_for_spectral_analysis_nodes_pseudo_accelerationsResponse
ns0:get_results_for_spectral_analysis_nodes_pseudo_velocities
ns0:get_results_for_spectral_analysis_nodes_pseudo_velocitiesResponse
ns0:get_results_for_spectral_analysis_nodes_support_forces
ns0:get_results_for_spectral_analysis_nodes_support_forcesResponse
ns0:get_results_for_spectral_analysis_solids_basic_stresses
ns0:get_results_for_spectral_analysis_solids_basic_stressesResponse
ns0:get_results_for_spectral_analysis_solids_basic_total_strains
ns0:get_results_for_spectral_analysis_solids_basic_total_strainsResponse
ns0:get_results_for_spectral_analysis_solids_deformations
ns0:get_results_for_spectral_analysis_solids_deformationsResponse
ns0:get_results_for_spectral_analysis_solids_equivalent_stresses
ns0:get_results_for_spectral_analysis_solids_equivalent_stressesResponse
ns0:get_results_for_spectral_analysis_solids_equivalent_total_strains
ns0:get_results_for_spectral_analysis_solids_equivalent_total_strainsResponse
ns0:get_results_for_spectral_analysis_solids_gas_quantities
ns0:get_results_for_spectral_analysis_solids_gas_quantitiesResponse
ns0:get_results_for_spectral_analysis_solids_principal_stresses
ns0:get_results_for_spectral_analysis_solids_principal_stressesResponse
ns0:get_results_for_spectral_analysis_solids_principal_total_strains
ns0:get_results_for_spectral_analysis_solids_principal_total_strainsResponse
ns0:get_results_for_spectral_analysis_summary
ns0:get_results_for_spectral_analysis_summaryResponse
ns0:get_results_for_spectral_analysis_surfaces_basic_internal_forces
ns0:get_results_for_spectral_analysis_surfaces_basic_internal_forcesResponse
ns0:get_results_for_spectral_analysis_surfaces_basic_stresses
ns0:get_results_for_spectral_analysis_surfaces_basic_stressesResponse
ns0:get_results_for_spectral_analysis_surfaces_basic_total_strains
ns0:get_results_for_spectral_analysis_surfaces_basic_total_strainsResponse
ns0:get_results_for_spectral_analysis_surfaces_contact_stresses
ns0:get_results_for_spectral_analysis_surfaces_contact_stressesResponse
ns0:get_results_for_spectral_analysis_surfaces_design_internal_forces
ns0:get_results_for_spectral_analysis_surfaces_design_internal_forcesResponse
ns0:get_results_for_spectral_analysis_surfaces_elastic_stress_components
ns0:get_results_for_spectral_analysis_surfaces_elastic_stress_componentsResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_bach
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_bachResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_mises
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_misesResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_rankine
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_rankineResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_tresca
ns0:get_results_for_spectral_analysis_surfaces_equivalent_stresses_trescaResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_bach
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_bachResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_mises
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_misesResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_rankine
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_rankineResponse
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_tresca
ns0:get_results_for_spectral_analysis_surfaces_equivalent_total_strains_trescaResponse
ns0:get_results_for_spectral_analysis_surfaces_global_deformations
ns0:get_results_for_spectral_analysis_surfaces_global_deformationsResponse
ns0:get_results_for_spectral_analysis_surfaces_local_deformations
ns0:get_results_for_spectral_analysis_surfaces_local_deformationsResponse
ns0:get_results_for_spectral_analysis_surfaces_maximum_total_strains
ns0:get_results_for_spectral_analysis_surfaces_maximum_total_strainsResponse
ns0:get_results_for_spectral_analysis_surfaces_principal_internal_forces
ns0:get_results_for_spectral_analysis_surfaces_principal_internal_forcesResponse
ns0:get_results_for_spectral_analysis_surfaces_principal_stresses
ns0:get_results_for_spectral_analysis_surfaces_principal_stressesResponse
ns0:get_results_for_spectral_analysis_surfaces_principal_total_strains
ns0:get_results_for_spectral_analysis_surfaces_principal_total_strainsResponse
ns0:get_results_for_stability_incremental_analysis_building_stories_centres_mass_rigidity
ns0:get_results_for_stability_incremental_analysis_building_stories_centres_mass_rigidityResponse
ns0:get_results_for_stability_incremental_analysis_building_stories_forces_in_shear_walls
ns0:get_results_for_stability_incremental_analysis_building_stories_forces_in_shear_wallsResponse
ns0:get_results_for_stability_incremental_analysis_building_stories_forces_in_spandrels
ns0:get_results_for_stability_incremental_analysis_building_stories_forces_in_spandrelsResponse
ns0:get_results_for_stability_incremental_analysis_building_stories_interstory_drifts
ns0:get_results_for_stability_incremental_analysis_building_stories_interstory_driftsResponse
ns0:get_results_for_stability_incremental_analysis_building_stories_story_actions
ns0:get_results_for_stability_incremental_analysis_building_stories_story_actionsResponse
ns0:get_results_for_stability_incremental_analysis_calculation_diagrams
ns0:get_results_for_stability_incremental_analysis_calculation_diagramsResponse
ns0:get_results_for_stability_incremental_analysis_convergence_diagrams
ns0:get_results_for_stability_incremental_analysis_convergence_diagramsResponse
ns0:get_results_for_stability_incremental_analysis_line_hinges_deformations
ns0:get_results_for_stability_incremental_analysis_line_hinges_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_line_hinges_forces
ns0:get_results_for_stability_incremental_analysis_line_hinges_forcesResponse
ns0:get_results_for_stability_incremental_analysis_lines_slab_wall_connections
ns0:get_results_for_stability_incremental_analysis_lines_slab_wall_connectionsResponse
ns0:get_results_for_stability_incremental_analysis_lines_support_forces
ns0:get_results_for_stability_incremental_analysis_lines_support_forcesResponse
ns0:get_results_for_stability_incremental_analysis_members_contact_forces
ns0:get_results_for_stability_incremental_analysis_members_contact_forcesResponse
ns0:get_results_for_stability_incremental_analysis_members_global_deformations
ns0:get_results_for_stability_incremental_analysis_members_global_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_members_hinge_deformations
ns0:get_results_for_stability_incremental_analysis_members_hinge_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_members_hinge_forces
ns0:get_results_for_stability_incremental_analysis_members_hinge_forcesResponse
ns0:get_results_for_stability_incremental_analysis_members_internal_forces
ns0:get_results_for_stability_incremental_analysis_members_internal_forcesResponse
ns0:get_results_for_stability_incremental_analysis_members_internal_forces_by_member_set
ns0:get_results_for_stability_incremental_analysis_members_internal_forces_by_member_setResponse
ns0:get_results_for_stability_incremental_analysis_members_internal_forces_by_section
ns0:get_results_for_stability_incremental_analysis_members_internal_forces_by_sectionResponse
ns0:get_results_for_stability_incremental_analysis_members_local_deformations
ns0:get_results_for_stability_incremental_analysis_members_local_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_members_local_plastic_deformation_ratios
ns0:get_results_for_stability_incremental_analysis_members_local_plastic_deformation_ratiosResponse
ns0:get_results_for_stability_incremental_analysis_members_strains
ns0:get_results_for_stability_incremental_analysis_members_strainsResponse
ns0:get_results_for_stability_incremental_analysis_nodes_deformations
ns0:get_results_for_stability_incremental_analysis_nodes_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_nodes_support_forces
ns0:get_results_for_stability_incremental_analysis_nodes_support_forcesResponse
ns0:get_results_for_stability_incremental_analysis_solids_basic_plastic_strains
ns0:get_results_for_stability_incremental_analysis_solids_basic_plastic_strainsResponse
ns0:get_results_for_stability_incremental_analysis_solids_basic_stresses
ns0:get_results_for_stability_incremental_analysis_solids_basic_stressesResponse
ns0:get_results_for_stability_incremental_analysis_solids_basic_total_strains
ns0:get_results_for_stability_incremental_analysis_solids_basic_total_strainsResponse
ns0:get_results_for_stability_incremental_analysis_solids_deformations
ns0:get_results_for_stability_incremental_analysis_solids_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_solids_equivalent_plastic_strains
ns0:get_results_for_stability_incremental_analysis_solids_equivalent_plastic_strainsResponse
ns0:get_results_for_stability_incremental_analysis_solids_equivalent_stresses
ns0:get_results_for_stability_incremental_analysis_solids_equivalent_stressesResponse
ns0:get_results_for_stability_incremental_analysis_solids_equivalent_total_strains
ns0:get_results_for_stability_incremental_analysis_solids_equivalent_total_strainsResponse
ns0:get_results_for_stability_incremental_analysis_solids_gas_quantities
ns0:get_results_for_stability_incremental_analysis_solids_gas_quantitiesResponse
ns0:get_results_for_stability_incremental_analysis_solids_principal_plastic_strains
ns0:get_results_for_stability_incremental_analysis_solids_principal_plastic_strainsResponse
ns0:get_results_for_stability_incremental_analysis_solids_principal_stresses
ns0:get_results_for_stability_incremental_analysis_solids_principal_stressesResponse
ns0:get_results_for_stability_incremental_analysis_solids_principal_total_strains
ns0:get_results_for_stability_incremental_analysis_solids_principal_total_strainsResponse
ns0:get_results_for_stability_incremental_analysis_summary
ns0:get_results_for_stability_incremental_analysis_summaryResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_internal_forces
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_internal_forcesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_plastic_strains
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_plastic_strainsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_stresses
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_stressesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_total_strains
ns0:get_results_for_stability_incremental_analysis_surfaces_basic_total_strainsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_contact_stresses
ns0:get_results_for_stability_incremental_analysis_surfaces_contact_stressesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_design_internal_forces
ns0:get_results_for_stability_incremental_analysis_surfaces_design_internal_forcesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_elastic_stress_components
ns0:get_results_for_stability_incremental_analysis_surfaces_elastic_stress_componentsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_bach
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_bachResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_mises
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_misesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_rankineResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_plastic_strains_trescaResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_bach
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_bachResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_mises
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_misesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_rankine
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_rankineResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_tresca
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_stresses_trescaResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_bach
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_bachResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_mises
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_misesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_rankine
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_rankineResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_tresca
ns0:get_results_for_stability_incremental_analysis_surfaces_equivalent_total_strains_trescaResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_global_deformations
ns0:get_results_for_stability_incremental_analysis_surfaces_global_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_local_deformations
ns0:get_results_for_stability_incremental_analysis_surfaces_local_deformationsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_maximum_plastic_strains
ns0:get_results_for_stability_incremental_analysis_surfaces_maximum_plastic_strainsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_maximum_total_strains
ns0:get_results_for_stability_incremental_analysis_surfaces_maximum_total_strainsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_internal_forces
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_internal_forcesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_plastic_strains
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_plastic_strainsResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_stresses
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_stressesResponse
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_total_strains
ns0:get_results_for_stability_incremental_analysis_surfaces_principal_total_strainsResponse
ns0:get_results_for_summary
ns0:get_results_for_summaryResponse
ns0:get_results_for_surfaces_basic_internal_forces
ns0:get_results_for_surfaces_basic_internal_forcesResponse
ns0:get_results_for_surfaces_basic_plastic_strains
ns0:get_results_for_surfaces_basic_plastic_strainsResponse
ns0:get_results_for_surfaces_basic_stresses
ns0:get_results_for_surfaces_basic_stressesResponse
ns0:get_results_for_surfaces_basic_total_strains
ns0:get_results_for_surfaces_basic_total_strainsResponse
ns0:get_results_for_surfaces_by_eigenvector
ns0:get_results_for_surfaces_by_eigenvectorResponse
ns0:get_results_for_surfaces_contact_stresses
ns0:get_results_for_surfaces_contact_stressesResponse
ns0:get_results_for_surfaces_design_internal_forces
ns0:get_results_for_surfaces_design_internal_forcesResponse
ns0:get_results_for_surfaces_elastic_stress_components
ns0:get_results_for_surfaces_elastic_stress_componentsResponse
ns0:get_results_for_surfaces_equivalent_plastic_strains_bach
ns0:get_results_for_surfaces_equivalent_plastic_strains_bachResponse
ns0:get_results_for_surfaces_equivalent_plastic_strains_mises
ns0:get_results_for_surfaces_equivalent_plastic_strains_misesResponse
ns0:get_results_for_surfaces_equivalent_plastic_strains_rankine
ns0:get_results_for_surfaces_equivalent_plastic_strains_rankineResponse
ns0:get_results_for_surfaces_equivalent_plastic_strains_tresca
ns0:get_results_for_surfaces_equivalent_plastic_strains_trescaResponse
ns0:get_results_for_surfaces_equivalent_stresses_bach
ns0:get_results_for_surfaces_equivalent_stresses_bachResponse
ns0:get_results_for_surfaces_equivalent_stresses_mises
ns0:get_results_for_surfaces_equivalent_stresses_misesResponse
ns0:get_results_for_surfaces_equivalent_stresses_rankine
ns0:get_results_for_surfaces_equivalent_stresses_rankineResponse
ns0:get_results_for_surfaces_equivalent_stresses_tresca
ns0:get_results_for_surfaces_equivalent_stresses_trescaResponse
ns0:get_results_for_surfaces_equivalent_total_strains_bach
ns0:get_results_for_surfaces_equivalent_total_strains_bachResponse
ns0:get_results_for_surfaces_equivalent_total_strains_mises
ns0:get_results_for_surfaces_equivalent_total_strains_misesResponse
ns0:get_results_for_surfaces_equivalent_total_strains_rankine
ns0:get_results_for_surfaces_equivalent_total_strains_rankineResponse
ns0:get_results_for_surfaces_equivalent_total_strains_tresca
ns0:get_results_for_surfaces_equivalent_total_strains_trescaResponse
ns0:get_results_for_surfaces_global_deformations
ns0:get_results_for_surfaces_global_deformationsResponse
ns0:get_results_for_surfaces_local_deformations
ns0:get_results_for_surfaces_local_deformationsResponse
ns0:get_results_for_surfaces_maximum_plastic_strains
ns0:get_results_for_surfaces_maximum_plastic_strainsResponse
ns0:get_results_for_surfaces_maximum_total_strains
ns0:get_results_for_surfaces_maximum_total_strainsResponse
ns0:get_results_for_surfaces_principal_internal_forces
ns0:get_results_for_surfaces_principal_internal_forcesResponse
ns0:get_results_for_surfaces_principal_plastic_strains
ns0:get_results_for_surfaces_principal_plastic_strainsResponse
ns0:get_results_for_surfaces_principal_stresses
ns0:get_results_for_surfaces_principal_stressesResponse
ns0:get_results_for_surfaces_principal_total_strains
ns0:get_results_for_surfaces_principal_total_strainsResponse
ns0:get_results_for_time_history_analysis_building_stories_centres_mass_rigidity
ns0:get_results_for_time_history_analysis_building_stories_centres_mass_rigidityResponse
ns0:get_results_for_time_history_analysis_building_stories_forces_in_shear_walls
ns0:get_results_for_time_history_analysis_building_stories_forces_in_shear_wallsResponse
ns0:get_results_for_time_history_analysis_building_stories_forces_in_spandrels
ns0:get_results_for_time_history_analysis_building_stories_forces_in_spandrelsResponse
ns0:get_results_for_time_history_analysis_building_stories_interstory_drifts
ns0:get_results_for_time_history_analysis_building_stories_interstory_driftsResponse
ns0:get_results_for_time_history_analysis_building_stories_story_actions
ns0:get_results_for_time_history_analysis_building_stories_story_actionsResponse
ns0:get_results_for_time_history_analysis_calculation_diagrams
ns0:get_results_for_time_history_analysis_calculation_diagramsResponse
ns0:get_results_for_time_history_analysis_convergence_diagrams
ns0:get_results_for_time_history_analysis_convergence_diagramsResponse
ns0:get_results_for_time_history_analysis_line_hinges_deformations
ns0:get_results_for_time_history_analysis_line_hinges_deformationsResponse
ns0:get_results_for_time_history_analysis_line_hinges_forces
ns0:get_results_for_time_history_analysis_line_hinges_forcesResponse
ns0:get_results_for_time_history_analysis_lines_slab_wall_connections
ns0:get_results_for_time_history_analysis_lines_slab_wall_connectionsResponse
ns0:get_results_for_time_history_analysis_lines_support_forces
ns0:get_results_for_time_history_analysis_lines_support_forcesResponse
ns0:get_results_for_time_history_analysis_members_contact_forces
ns0:get_results_for_time_history_analysis_members_contact_forcesResponse
ns0:get_results_for_time_history_analysis_members_global_deformations
ns0:get_results_for_time_history_analysis_members_global_deformationsResponse
ns0:get_results_for_time_history_analysis_members_hinge_deformations
ns0:get_results_for_time_history_analysis_members_hinge_deformationsResponse
ns0:get_results_for_time_history_analysis_members_hinge_forces
ns0:get_results_for_time_history_analysis_members_hinge_forcesResponse
ns0:get_results_for_time_history_analysis_members_internal_forces
ns0:get_results_for_time_history_analysis_members_internal_forcesResponse
ns0:get_results_for_time_history_analysis_members_internal_forces_by_member_set
ns0:get_results_for_time_history_analysis_members_internal_forces_by_member_setResponse
ns0:get_results_for_time_history_analysis_members_internal_forces_by_section
ns0:get_results_for_time_history_analysis_members_internal_forces_by_sectionResponse
ns0:get_results_for_time_history_analysis_members_local_deformations
ns0:get_results_for_time_history_analysis_members_local_deformationsResponse
ns0:get_results_for_time_history_analysis_members_local_plastic_deformation_ratios
ns0:get_results_for_time_history_analysis_members_local_plastic_deformation_ratiosResponse
ns0:get_results_for_time_history_analysis_members_strains
ns0:get_results_for_time_history_analysis_members_strainsResponse
ns0:get_results_for_time_history_analysis_nodes_accelerations
ns0:get_results_for_time_history_analysis_nodes_accelerationsResponse
ns0:get_results_for_time_history_analysis_nodes_deformations
ns0:get_results_for_time_history_analysis_nodes_deformationsResponse
ns0:get_results_for_time_history_analysis_nodes_support_forces
ns0:get_results_for_time_history_analysis_nodes_support_forcesResponse
ns0:get_results_for_time_history_analysis_nodes_velocities
ns0:get_results_for_time_history_analysis_nodes_velocitiesResponse
ns0:get_results_for_time_history_analysis_solids_basic_plastic_strains
ns0:get_results_for_time_history_analysis_solids_basic_plastic_strainsResponse
ns0:get_results_for_time_history_analysis_solids_basic_stresses
ns0:get_results_for_time_history_analysis_solids_basic_stressesResponse
ns0:get_results_for_time_history_analysis_solids_basic_total_strains
ns0:get_results_for_time_history_analysis_solids_basic_total_strainsResponse
ns0:get_results_for_time_history_analysis_solids_deformations
ns0:get_results_for_time_history_analysis_solids_deformationsResponse
ns0:get_results_for_time_history_analysis_solids_equivalent_plastic_strains
ns0:get_results_for_time_history_analysis_solids_equivalent_plastic_strainsResponse
ns0:get_results_for_time_history_analysis_solids_equivalent_stresses
ns0:get_results_for_time_history_analysis_solids_equivalent_stressesResponse
ns0:get_results_for_time_history_analysis_solids_equivalent_total_strains
ns0:get_results_for_time_history_analysis_solids_equivalent_total_strainsResponse
ns0:get_results_for_time_history_analysis_solids_gas_quantities
ns0:get_results_for_time_history_analysis_solids_gas_quantitiesResponse
ns0:get_results_for_time_history_analysis_solids_principal_plastic_strains
ns0:get_results_for_time_history_analysis_solids_principal_plastic_strainsResponse
ns0:get_results_for_time_history_analysis_solids_principal_stresses
ns0:get_results_for_time_history_analysis_solids_principal_stressesResponse
ns0:get_results_for_time_history_analysis_solids_principal_total_strains
ns0:get_results_for_time_history_analysis_solids_principal_total_strainsResponse
ns0:get_results_for_time_history_analysis_summary
ns0:get_results_for_time_history_analysis_summaryResponse
ns0:get_results_for_time_history_analysis_surfaces_basic_internal_forces
ns0:get_results_for_time_history_analysis_surfaces_basic_internal_forcesResponse
ns0:get_results_for_time_history_analysis_surfaces_basic_plastic_strains
ns0:get_results_for_time_history_analysis_surfaces_basic_plastic_strainsResponse
ns0:get_results_for_time_history_analysis_surfaces_basic_stresses
ns0:get_results_for_time_history_analysis_surfaces_basic_stressesResponse
ns0:get_results_for_time_history_analysis_surfaces_basic_total_strains
ns0:get_results_for_time_history_analysis_surfaces_basic_total_strainsResponse
ns0:get_results_for_time_history_analysis_surfaces_contact_stresses
ns0:get_results_for_time_history_analysis_surfaces_contact_stressesResponse
ns0:get_results_for_time_history_analysis_surfaces_design_internal_forces
ns0:get_results_for_time_history_analysis_surfaces_design_internal_forcesResponse
ns0:get_results_for_time_history_analysis_surfaces_elastic_stress_components
ns0:get_results_for_time_history_analysis_surfaces_elastic_stress_componentsResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_bach
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_bachResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_mises
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_misesResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_rankineResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:get_results_for_time_history_analysis_surfaces_equivalent_plastic_strains_trescaResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_bach
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_bachResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_mises
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_misesResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_rankine
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_rankineResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_tresca
ns0:get_results_for_time_history_analysis_surfaces_equivalent_stresses_trescaResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_bach
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_bachResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_mises
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_misesResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_rankine
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_rankineResponse
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_tresca
ns0:get_results_for_time_history_analysis_surfaces_equivalent_total_strains_trescaResponse
ns0:get_results_for_time_history_analysis_surfaces_global_deformations
ns0:get_results_for_time_history_analysis_surfaces_global_deformationsResponse
ns0:get_results_for_time_history_analysis_surfaces_local_deformations
ns0:get_results_for_time_history_analysis_surfaces_local_deformationsResponse
ns0:get_results_for_time_history_analysis_surfaces_maximum_plastic_strains
ns0:get_results_for_time_history_analysis_surfaces_maximum_plastic_strainsResponse
ns0:get_results_for_time_history_analysis_surfaces_maximum_total_strains
ns0:get_results_for_time_history_analysis_surfaces_maximum_total_strainsResponse
ns0:get_results_for_time_history_analysis_surfaces_principal_internal_forces
ns0:get_results_for_time_history_analysis_surfaces_principal_internal_forcesResponse
ns0:get_results_for_time_history_analysis_surfaces_principal_plastic_strains
ns0:get_results_for_time_history_analysis_surfaces_principal_plastic_strainsResponse
ns0:get_results_for_time_history_analysis_surfaces_principal_stresses
ns0:get_results_for_time_history_analysis_surfaces_principal_stressesResponse
ns0:get_results_for_time_history_analysis_surfaces_principal_total_strains
ns0:get_results_for_time_history_analysis_surfaces_principal_total_strainsResponse
ns0:get_rigid_link
ns0:get_rigid_linkResponse
ns0:get_section
ns0:get_sectionResponse
ns0:get_session_id
ns0:get_session_idResponse
ns0:get_soil_massif
ns0:get_soil_massifResponse
ns0:get_solid
ns0:get_solidResponse
ns0:get_solid_contacts
ns0:get_solid_contactsResponse
ns0:get_solid_gas
ns0:get_solid_gasResponse
ns0:get_solid_load
ns0:get_solid_loadResponse
ns0:get_solid_mesh_refinement
ns0:get_solid_mesh_refinementResponse
ns0:get_solid_set
ns0:get_solid_setResponse
ns0:get_solid_set_load
ns0:get_solid_set_loadResponse
ns0:get_spectral_analysis_settings
ns0:get_spectral_analysis_settingsResponse
ns0:get_stability_analysis_settings
ns0:get_stability_analysis_settingsResponse
ns0:get_static_analysis_settings
ns0:get_static_analysis_settingsResponse
ns0:get_steel_boundary_conditions
ns0:get_steel_boundary_conditionsResponse
ns0:get_steel_design_fr_configuration
ns0:get_steel_design_fr_configurationResponse
ns0:get_steel_design_seismic_configuration
ns0:get_steel_design_seismic_configurationResponse
ns0:get_steel_design_sls_configuration
ns0:get_steel_design_sls_configurationResponse
ns0:get_steel_design_uls_configuration
ns0:get_steel_design_uls_configurationResponse
ns0:get_steel_effective_lengths
ns0:get_steel_effective_lengthsResponse
ns0:get_steel_member_local_section_reduction
ns0:get_steel_member_local_section_reductionResponse
ns0:get_structure_modification
ns0:get_structure_modificationResponse
ns0:get_surface
ns0:get_surfaceResponse
ns0:get_surface_eccentricity
ns0:get_surface_eccentricityResponse
ns0:get_surface_imperfection
ns0:get_surface_imperfectionResponse
ns0:get_surface_load
ns0:get_surface_loadResponse
ns0:get_surface_mesh_refinement
ns0:get_surface_mesh_refinementResponse
ns0:get_surface_reinforcement
ns0:get_surface_reinforcementResponse
ns0:get_surface_release
ns0:get_surface_releaseResponse
ns0:get_surface_release_type
ns0:get_surface_release_typeResponse
ns0:get_surface_results_adjustment
ns0:get_surface_results_adjustmentResponse
ns0:get_surface_set
ns0:get_surface_setResponse
ns0:get_surface_set_imperfection
ns0:get_surface_set_imperfectionResponse
ns0:get_surface_set_load
ns0:get_surface_set_loadResponse
ns0:get_surface_stiffness_modification
ns0:get_surface_stiffness_modificationResponse
ns0:get_surface_support
ns0:get_surface_supportResponse
ns0:get_surfaces_contact
ns0:get_surfaces_contactResponse
ns0:get_surfaces_contact_type
ns0:get_surfaces_contact_typeResponse
ns0:get_table_export_config_manager
ns0:get_table_export_config_managerResponse
ns0:get_terrain
ns0:get_terrainResponse
ns0:get_thickness
ns0:get_thicknessResponse
ns0:get_timber_design_fr_configuration
ns0:get_timber_design_fr_configurationResponse
ns0:get_timber_design_sls_configuration
ns0:get_timber_design_sls_configurationResponse
ns0:get_timber_design_uls_configuration
ns0:get_timber_design_uls_configurationResponse
ns0:get_timber_effective_lengths
ns0:get_timber_effective_lengthsResponse
ns0:get_timber_member_local_section_reduction
ns0:get_timber_member_local_section_reductionResponse
ns0:get_timber_moisture_class
ns0:get_timber_moisture_classResponse
ns0:get_timber_service_class
ns0:get_timber_service_classResponse
ns0:get_timber_service_conditions
ns0:get_timber_service_conditionsResponse
ns0:get_visual_object
ns0:get_visual_objectResponse
ns0:get_wind_profile
ns0:get_wind_profileResponse
ns0:get_wind_simulation
ns0:get_wind_simulationResponse
ns0:get_wind_simulation_analysis_settings
ns0:get_wind_simulation_analysis_settingsResponse
ns0:global_parameter
ns0:global_parameter_definition_type
ns0:global_parameter_unit_group
ns0:group_load_type
ns0:has_any_results
ns0:has_any_resultsResponse
ns0:has_results
ns0:has_resultsResponse
ns0:history_status_type
ns0:horizontal_alignment
ns0:imperfection_case
ns0:imperfection_case_direction
ns0:imperfection_case_direction_for_level_direction
ns0:imperfection_case_imperfection_cases_items
ns0:imperfection_case_imperfection_cases_items_row
ns0:imperfection_case_level_imperfections
ns0:imperfection_case_level_imperfections_row
ns0:imperfection_case_magnitude_assignment_type
ns0:imperfection_case_source
ns0:imperfection_case_type
ns0:imposed_line_deformation
ns0:imposed_nodal_deformation
ns0:intersection
ns0:layer_type
ns0:line
ns0:line_arc_alpha_adjustment_target
ns0:line_grid
ns0:line_grid_axes_sequence
ns0:line_grid_coordinate_system_type
ns0:line_grid_directed_to_node_first_axis
ns0:line_grid_directed_to_node_second_axis
ns0:line_grid_origin_type
ns0:line_grid_parallel_to_two_nodes_first_axis
ns0:line_grid_parallel_to_two_nodes_second_axis
ns0:line_grid_specific_direction_type
ns0:line_grid_type
ns0:line_grid_x_assignment
ns0:line_grid_x_assignment_row
ns0:line_grid_x_direction
ns0:line_grid_x_input_type
ns0:line_grid_y_assignment
ns0:line_grid_y_assignment_row
ns0:line_grid_y_direction
ns0:line_grid_y_input_type
ns0:line_grid_z_assignment
ns0:line_grid_z_assignment_row
ns0:line_grid_z_direction
ns0:line_grid_z_input_type
ns0:line_hinge
ns0:line_hinge_diagram_along_x_color_table
ns0:line_hinge_diagram_along_x_color_table_row
ns0:line_hinge_diagram_along_x_end
ns0:line_hinge_diagram_along_x_start
ns0:line_hinge_diagram_along_x_table
ns0:line_hinge_diagram_along_x_table_row
ns0:line_hinge_diagram_along_y_color_table
ns0:line_hinge_diagram_along_y_color_table_row
ns0:line_hinge_diagram_along_y_end
ns0:line_hinge_diagram_along_y_start
ns0:line_hinge_diagram_along_y_table
ns0:line_hinge_diagram_along_y_table_row
ns0:line_hinge_diagram_along_z_color_table
ns0:line_hinge_diagram_along_z_color_table_row
ns0:line_hinge_diagram_along_z_end
ns0:line_hinge_diagram_along_z_start
ns0:line_hinge_diagram_along_z_table
ns0:line_hinge_diagram_along_z_table_row
ns0:line_hinge_diagram_around_x_color_table
ns0:line_hinge_diagram_around_x_color_table_row
ns0:line_hinge_diagram_around_x_end
ns0:line_hinge_diagram_around_x_start
ns0:line_hinge_diagram_around_x_table
ns0:line_hinge_diagram_around_x_table_row
ns0:line_hinge_force_moment_diagram_around_x_depends_on
ns0:line_hinge_force_moment_diagram_around_x_end
ns0:line_hinge_force_moment_diagram_around_x_start
ns0:line_hinge_force_moment_diagram_around_x_table
ns0:line_hinge_force_moment_diagram_around_x_table_row
ns0:line_hinge_generated_line_hinges
ns0:line_hinge_generated_line_hinges_row
ns0:line_hinge_partial_activity_along_x_negative_type
ns0:line_hinge_partial_activity_along_x_positive_type
ns0:line_hinge_partial_activity_along_y_negative_type
ns0:line_hinge_partial_activity_along_y_positive_type
ns0:line_hinge_partial_activity_along_z_negative_type
ns0:line_hinge_partial_activity_along_z_positive_type
ns0:line_hinge_partial_activity_around_x_negative_type
ns0:line_hinge_partial_activity_around_x_positive_type
ns0:line_hinge_rotational_release_phi_x_nonlinearity
ns0:line_hinge_translational_release_u_x_nonlinearity
ns0:line_hinge_translational_release_u_y_nonlinearity
ns0:line_hinge_translational_release_u_z_nonlinearity
ns0:line_hinges_deformations
ns0:line_hinges_deformations_row
ns0:line_hinges_forces
ns0:line_hinges_forces_row
ns0:line_line_weld_assignment
ns0:line_line_weld_assignment_row
ns0:line_load
ns0:line_load_load_direction
ns0:line_load_load_direction_orientation
ns0:line_load_load_distribution
ns0:line_load_load_type
ns0:line_load_varying_load_parameters
ns0:line_load_varying_load_parameters_row
ns0:line_mesh_refinement
ns0:line_mesh_refinement_type
ns0:line_nurbs_control_points
ns0:line_nurbs_control_points_by_components
ns0:line_nurbs_control_points_by_components_row
ns0:line_nurbs_control_points_row
ns0:line_nurbs_knots_row
ns0:line_release
ns0:line_release_release_location
ns0:line_release_type
ns0:line_release_type_diagram_along_x_color_table
ns0:line_release_type_diagram_along_x_color_table_row
ns0:line_release_type_diagram_along_x_end
ns0:line_release_type_diagram_along_x_start
ns0:line_release_type_diagram_along_x_table
ns0:line_release_type_diagram_along_x_table_row
ns0:line_release_type_diagram_along_y_color_table
ns0:line_release_type_diagram_along_y_color_table_row
ns0:line_release_type_diagram_along_y_end
ns0:line_release_type_diagram_along_y_start
ns0:line_release_type_diagram_along_y_table
ns0:line_release_type_diagram_along_y_table_row
ns0:line_release_type_diagram_along_z_color_table
ns0:line_release_type_diagram_along_z_color_table_row
ns0:line_release_type_diagram_along_z_end
ns0:line_release_type_diagram_along_z_start
ns0:line_release_type_diagram_along_z_table
ns0:line_release_type_diagram_along_z_table_row
ns0:line_release_type_diagram_around_x_color_table
ns0:line_release_type_diagram_around_x_color_table_row
ns0:line_release_type_diagram_around_x_end
ns0:line_release_type_diagram_around_x_start
ns0:line_release_type_diagram_around_x_table
ns0:line_release_type_diagram_around_x_table_row
ns0:line_release_type_force_moment_diagram_around_x_depends_on
ns0:line_release_type_force_moment_diagram_around_x_end
ns0:line_release_type_force_moment_diagram_around_x_start
ns0:line_release_type_force_moment_diagram_around_x_table
ns0:line_release_type_force_moment_diagram_around_x_table_row
ns0:line_release_type_local_axis_system_object_in_plane
ns0:line_release_type_local_axis_system_object_type
ns0:line_release_type_partial_activity_along_x_negative_type
ns0:line_release_type_partial_activity_along_x_positive_type
ns0:line_release_type_partial_activity_along_y_negative_type
ns0:line_release_type_partial_activity_along_y_positive_type
ns0:line_release_type_partial_activity_along_z_negative_type
ns0:line_release_type_partial_activity_along_z_positive_type
ns0:line_release_type_partial_activity_around_x_negative_type
ns0:line_release_type_partial_activity_around_x_positive_type
ns0:line_release_type_rotational_release_phi_x_nonlinearity
ns0:line_release_type_translational_release_u_x_nonlinearity
ns0:line_release_type_translational_release_u_y_nonlinearity
ns0:line_release_type_translational_release_u_z_nonlinearity
ns0:line_rotation_plane
ns0:line_rotation_specification_type
ns0:line_set
ns0:line_set_load
ns0:line_set_load_load_direction
ns0:line_set_load_load_direction_orientation
ns0:line_set_load_load_distribution
ns0:line_set_load_load_type
ns0:line_set_load_varying_load_parameters
ns0:line_set_load_varying_load_parameters_row
ns0:line_set_set_type
ns0:line_support
ns0:line_support_coordinate_system
ns0:line_support_diagram_along_x_color_table
ns0:line_support_diagram_along_x_color_table_row
ns0:line_support_diagram_along_x_end
ns0:line_support_diagram_along_x_start
ns0:line_support_diagram_along_x_table
ns0:line_support_diagram_along_x_table_row
ns0:line_support_diagram_along_y_color_table
ns0:line_support_diagram_along_y_color_table_row
ns0:line_support_diagram_along_y_end
ns0:line_support_diagram_along_y_start
ns0:line_support_diagram_along_y_table
ns0:line_support_diagram_along_y_table_row
ns0:line_support_diagram_along_z_color_table
ns0:line_support_diagram_along_z_color_table_row
ns0:line_support_diagram_along_z_end
ns0:line_support_diagram_along_z_start
ns0:line_support_diagram_along_z_table
ns0:line_support_diagram_along_z_table_row
ns0:line_support_diagram_around_x_color_table
ns0:line_support_diagram_around_x_color_table_row
ns0:line_support_diagram_around_x_end
ns0:line_support_diagram_around_x_start
ns0:line_support_diagram_around_x_table
ns0:line_support_diagram_around_x_table_row
ns0:line_support_diagram_around_y_color_table
ns0:line_support_diagram_around_y_color_table_row
ns0:line_support_diagram_around_y_end
ns0:line_support_diagram_around_y_start
ns0:line_support_diagram_around_y_table
ns0:line_support_diagram_around_y_table_row
ns0:line_support_diagram_around_z_color_table
ns0:line_support_diagram_around_z_color_table_row
ns0:line_support_diagram_around_z_end
ns0:line_support_diagram_around_z_start
ns0:line_support_diagram_around_z_table
ns0:line_support_diagram_around_z_table_row
ns0:line_support_fictitious_wall_base_support_type
ns0:line_support_fictitious_wall_head_support_type
ns0:line_support_partial_activity_along_x_negative_type
ns0:line_support_partial_activity_along_x_positive_type
ns0:line_support_partial_activity_along_y_negative_type
ns0:line_support_partial_activity_along_y_positive_type
ns0:line_support_partial_activity_along_z_negative_type
ns0:line_support_partial_activity_along_z_positive_type
ns0:line_support_partial_activity_around_x_negative_type
ns0:line_support_partial_activity_around_x_positive_type
ns0:line_support_partial_activity_around_y_negative_type
ns0:line_support_partial_activity_around_y_positive_type
ns0:line_support_partial_activity_around_z_negative_type
ns0:line_support_partial_activity_around_z_positive_type
ns0:line_support_rotational_restraint_x_nonlinearity
ns0:line_support_rotational_restraint_y_nonlinearity
ns0:line_support_rotational_restraint_z_nonlinearity
ns0:line_support_spring_x_nonlinearity
ns0:line_support_spring_y_nonlinearity
ns0:line_support_spring_z_nonlinearity
ns0:line_type
ns0:line_welded_joint
ns0:line_welded_joint_joint_type
ns0:line_welded_joint_longitudinal_arrangement
ns0:line_welded_joint_weld_type
ns0:lines_slab_wall_connections
ns0:lines_slab_wall_connections_row
ns0:lines_support_forces
ns0:lines_support_forces_row
ns0:load_case
ns0:load_case_analysis_type
ns0:load_case_distinguish_different_overstrength_factor_in_direction_xy_combo
ns0:load_case_factor_phi
ns0:load_case_flat_roof_snow_load_category
ns0:load_case_ground_water_elevation
ns0:load_case_individual_factors_of_selected_objects_table
ns0:load_case_individual_factors_of_selected_objects_table_row
ns0:load_case_initial_state_definition_type
ns0:load_case_liveload_consider_design_situation_effective_seismic_weight_CYTHYE_combo
ns0:load_case_liveload_consider_design_situation_effective_seismic_weight_aci_combo
ns0:load_case_liveload_consider_design_situation_effective_seismic_weight_combo
ns0:load_case_liveload_consider_design_situation_effective_seismic_weight_ibc_combo
ns0:load_case_liveload_consider_design_situation_seismic_mass_combo
ns0:load_case_liveload_consider_design_situation_seismic_weight_combo
ns0:load_case_load_duration_sp
ns0:load_case_selection_of_modes_mode_activation_table
ns0:load_case_selection_of_modes_mode_activation_table_row
ns0:load_case_specification_for_load_case_gr1a
ns0:load_case_specification_for_load_case_gr2
ns0:load_case_specification_for_load_case_gr5
ns0:load_case_specification_for_load_case_gr6
ns0:load_case_type_of_imposed_actions
ns0:load_cases_and_combinations
ns0:load_combination
ns0:load_combination_analysis_type
ns0:load_combination_individual_factors_of_selected_objects_table
ns0:load_combination_individual_factors_of_selected_objects_table_row
ns0:load_combination_initial_state_definition_type
ns0:load_combination_items
ns0:load_combination_items_row
ns0:load_combination_pushover_direction
ns0:load_combination_pushover_normalized_displacements
ns0:location_row_type
ns0:main_objects_to_activate
ns0:material
ns0:material_application_context
ns0:material_definition_type
ns0:material_diagram_type
ns0:material_emissions_members_surface_unit
ns0:material_emissions_members_volume_unit
ns0:material_emissions_members_weight_unit
ns0:material_emissions_solids_area_unit
ns0:material_emissions_solids_volume_unit
ns0:material_emissions_solids_weight_unit
ns0:material_emissions_surfaces_area_unit
ns0:material_emissions_surfaces_bottom_face_unit
ns0:material_emissions_surfaces_top_face_unit
ns0:material_emissions_surfaces_volume_unit
ns0:material_emissions_surfaces_weight_unit
ns0:material_material_model
ns0:material_material_type
ns0:material_members_surface_unit
ns0:material_members_volume_unit
ns0:material_members_weight_unit
ns0:material_solids_area_unit
ns0:material_solids_volume_unit
ns0:material_solids_weight_unit
ns0:material_stiffness_modification_type
ns0:material_stress_failure_hypothesis
ns0:material_surfaces_area_unit
ns0:material_surfaces_bottom_face_unit
ns0:material_surfaces_top_face_unit
ns0:material_surfaces_volume_unit
ns0:material_surfaces_weight_unit
ns0:material_use_of_material_model_alignment
ns0:material_use_of_material_model_orientation
ns0:member
ns0:member_concrete_longitudinal_reinforcement_items
ns0:member_concrete_longitudinal_reinforcement_items_row
ns0:member_concrete_longitudinal_reinforcement_items_span_position_definition_format_type
ns0:member_concrete_longitudinal_reinforcement_items_span_position_reference_type
ns0:member_concrete_shear_reinforcement_spans
ns0:member_concrete_shear_reinforcement_spans_row
ns0:member_curved_member_cantilevers_type
ns0:member_definable_stiffness
ns0:member_deflection_check_direction
ns0:member_deflection_check_displacement_reference
ns0:member_deflection_segments_y_axis
ns0:member_deflection_segments_y_axis_row
ns0:member_deflection_segments_z_axis
ns0:member_deflection_segments_z_axis_row
ns0:member_design_supports_on_internal_nodes
ns0:member_design_supports_on_internal_nodes_row
ns0:member_eccentricity
ns0:member_eccentricity_horizontal_section_alignment
ns0:member_eccentricity_specification_type
ns0:member_eccentricity_transverse_offset_horizontal_alignment
ns0:member_eccentricity_transverse_offset_reference_type
ns0:member_eccentricity_transverse_offset_vertical_alignment
ns0:member_eccentricity_vertical_section_alignment
ns0:member_flange_dimensions
ns0:member_flange_dimensions_row
ns0:member_grain_alignment
ns0:member_hinge
ns0:member_hinge_axial_release_n_nonlinearity
ns0:member_hinge_axial_release_vy_nonlinearity
ns0:member_hinge_axial_release_vz_nonlinearity
ns0:member_hinge_diagram_along_x_color_table
ns0:member_hinge_diagram_along_x_color_table_row
ns0:member_hinge_diagram_along_x_end
ns0:member_hinge_diagram_along_x_start
ns0:member_hinge_diagram_along_x_table
ns0:member_hinge_diagram_along_x_table_row
ns0:member_hinge_diagram_along_y_color_table
ns0:member_hinge_diagram_along_y_color_table_row
ns0:member_hinge_diagram_along_y_end
ns0:member_hinge_diagram_along_y_start
ns0:member_hinge_diagram_along_y_table
ns0:member_hinge_diagram_along_y_table_row
ns0:member_hinge_diagram_along_z_color_table
ns0:member_hinge_diagram_along_z_color_table_row
ns0:member_hinge_diagram_along_z_end
ns0:member_hinge_diagram_along_z_start
ns0:member_hinge_diagram_along_z_table
ns0:member_hinge_diagram_along_z_table_row
ns0:member_hinge_diagram_around_x_color_table
ns0:member_hinge_diagram_around_x_color_table_row
ns0:member_hinge_diagram_around_x_end
ns0:member_hinge_diagram_around_x_start
ns0:member_hinge_diagram_around_x_table
ns0:member_hinge_diagram_around_x_table_row
ns0:member_hinge_diagram_around_y_color_table
ns0:member_hinge_diagram_around_y_color_table_row
ns0:member_hinge_diagram_around_y_end
ns0:member_hinge_diagram_around_y_start
ns0:member_hinge_diagram_around_y_table
ns0:member_hinge_diagram_around_y_table_row
ns0:member_hinge_diagram_around_z_color_table
ns0:member_hinge_diagram_around_z_color_table_row
ns0:member_hinge_diagram_around_z_end
ns0:member_hinge_diagram_around_z_start
ns0:member_hinge_diagram_around_z_table
ns0:member_hinge_diagram_around_z_table_row
ns0:member_hinge_moment_release_mt_nonlinearity
ns0:member_hinge_moment_release_my_nonlinearity
ns0:member_hinge_moment_release_mz_nonlinearity
ns0:member_hinge_partial_activity_along_x_negative_type
ns0:member_hinge_partial_activity_along_x_positive_type
ns0:member_hinge_partial_activity_along_y_negative_type
ns0:member_hinge_partial_activity_along_y_positive_type
ns0:member_hinge_partial_activity_along_z_negative_type
ns0:member_hinge_partial_activity_along_z_positive_type
ns0:member_hinge_partial_activity_around_x_negative_type
ns0:member_hinge_partial_activity_around_x_positive_type
ns0:member_hinge_partial_activity_around_y_negative_type
ns0:member_hinge_partial_activity_around_y_positive_type
ns0:member_hinge_partial_activity_around_z_negative_type
ns0:member_hinge_partial_activity_around_z_positive_type
ns0:member_hinge_plastic_diagram_along_x_color_table
ns0:member_hinge_plastic_diagram_along_x_color_table_row
ns0:member_hinge_plastic_diagram_along_x_component_type
ns0:member_hinge_plastic_diagram_along_x_table
ns0:member_hinge_plastic_diagram_along_x_table_row
ns0:member_hinge_plastic_diagram_along_y_color_table
ns0:member_hinge_plastic_diagram_along_y_color_table_row
ns0:member_hinge_plastic_diagram_along_y_component_type
ns0:member_hinge_plastic_diagram_along_y_table
ns0:member_hinge_plastic_diagram_along_y_table_row
ns0:member_hinge_plastic_diagram_along_z_color_table
ns0:member_hinge_plastic_diagram_along_z_color_table_row
ns0:member_hinge_plastic_diagram_along_z_component_type
ns0:member_hinge_plastic_diagram_along_z_table
ns0:member_hinge_plastic_diagram_along_z_table_row
ns0:member_hinge_plastic_diagram_around_y_color_table
ns0:member_hinge_plastic_diagram_around_y_color_table_row
ns0:member_hinge_plastic_diagram_around_y_component_type
ns0:member_hinge_plastic_diagram_around_y_table
ns0:member_hinge_plastic_diagram_around_y_table_row
ns0:member_hinge_plastic_diagram_around_z_color_table
ns0:member_hinge_plastic_diagram_around_z_color_table_row
ns0:member_hinge_plastic_diagram_around_z_component_type
ns0:member_hinge_plastic_diagram_around_z_table
ns0:member_hinge_plastic_diagram_around_z_table_row
ns0:member_imperfection
ns0:member_imperfection_active_criterion
ns0:member_imperfection_definition_type
ns0:member_imperfection_imperfection_direction
ns0:member_imperfection_imperfection_type
ns0:member_imperfection_section_design
ns0:member_imperfection_standard_factor_enumeration
ns0:member_load
ns0:member_load_axis_definition_axis
ns0:member_load_axis_definition_axis_orientation
ns0:member_load_axis_definition_type
ns0:member_load_eccentricity_horizontal_alignment
ns0:member_load_eccentricity_section_middle
ns0:member_load_eccentricity_vertical_alignment
ns0:member_load_form_finding_definition_type
ns0:member_load_form_finding_force_definition
ns0:member_load_form_finding_geometry_definition
ns0:member_load_form_finding_internal_force
ns0:member_load_load_direction
ns0:member_load_load_direction_orientation
ns0:member_load_load_distribution
ns0:member_load_load_type
ns0:member_load_varying_load_parameters
ns0:member_load_varying_load_parameters_row
ns0:member_member_rib_surface_roughness_classification
ns0:member_member_type_rib_alignment
ns0:member_nonlinearity
ns0:member_nonlinearity_type
ns0:member_openings
ns0:member_openings_components
ns0:member_openings_components_row
ns0:member_reference_type
ns0:member_representative
ns0:member_representative_concrete_longitudinal_reinforcement_items
ns0:member_representative_concrete_longitudinal_reinforcement_items_row
ns0:member_representative_concrete_longitudinal_reinforcement_items_span_position_definition_format_type
ns0:member_representative_concrete_longitudinal_reinforcement_items_span_position_reference_type
ns0:member_representative_concrete_longitudinal_reinforcement_span
ns0:member_representative_concrete_longitudinal_reinforcement_span_row
ns0:member_representative_concrete_longitudinal_reinforcement_span_span_position_definition_format_type
ns0:member_representative_concrete_longitudinal_reinforcement_span_span_position_reference_type
ns0:member_representative_concrete_shear_reinforcement_span
ns0:member_representative_concrete_shear_reinforcement_span_row
ns0:member_representative_concrete_shear_reinforcement_spans
ns0:member_representative_concrete_shear_reinforcement_spans_row
ns0:member_representative_curved_member_cantilevers_type
ns0:member_representative_deflection_check_direction
ns0:member_representative_deflection_check_displacement_reference
ns0:member_representative_deflection_segments_y_axis
ns0:member_representative_deflection_segments_y_axis_row
ns0:member_representative_deflection_segments_z_axis
ns0:member_representative_deflection_segments_z_axis_row
ns0:member_representative_design_supports_on_internal_nodes
ns0:member_representative_design_supports_on_internal_nodes_row
ns0:member_representative_flange_dimensions
ns0:member_representative_flange_dimensions_row
ns0:member_representative_grain_alignment
ns0:member_representative_member_rib_surface_roughness_classification
ns0:member_representative_member_type_rib_alignment
ns0:member_representative_reference_type
ns0:member_representative_result_beam_integrate_stresses_and_forces
ns0:member_representative_rotation_plane_type
ns0:member_representative_rotation_specification_type
ns0:member_representative_rotation_surface_plane_type
ns0:member_representative_section_alignment
ns0:member_representative_section_distribution_type
ns0:member_representative_type
ns0:member_result_beam_integrate_stresses_and_forces
ns0:member_result_intermediate_point
ns0:member_result_intermediate_point_distances
ns0:member_result_intermediate_point_distances_row
ns0:member_rotation_plane_type
ns0:member_rotation_specification_type
ns0:member_rotation_surface_plane_type
ns0:member_rotational_restraint
ns0:member_rotational_restraint_continuous_beam_effect
ns0:member_rotational_restraint_different_spring_stiffness_list
ns0:member_rotational_restraint_different_spring_stiffness_list_row
ns0:member_rotational_restraint_method_of_determining_cda
ns0:member_rotational_restraint_position_of_sheeting
ns0:member_rotational_restraint_rotational_stiffness
ns0:member_rotational_restraint_type
ns0:member_section_alignment
ns0:member_section_distribution_type
ns0:member_set
ns0:member_set_concrete_longitudinal_reinforcement_items
ns0:member_set_concrete_longitudinal_reinforcement_items_row
ns0:member_set_concrete_longitudinal_reinforcement_items_span_position_definition_format_type
ns0:member_set_concrete_longitudinal_reinforcement_items_span_position_reference_type
ns0:member_set_concrete_shear_reinforcement_spans
ns0:member_set_concrete_shear_reinforcement_spans_row
ns0:member_set_deflection_check_direction
ns0:member_set_deflection_check_displacement_reference
ns0:member_set_deflection_segments_y_axis
ns0:member_set_deflection_segments_y_axis_row
ns0:member_set_deflection_segments_z_axis
ns0:member_set_deflection_segments_z_axis_row
ns0:member_set_design_supports_on_internal_nodes
ns0:member_set_design_supports_on_internal_nodes_row
ns0:member_set_imperfection
ns0:member_set_imperfection_active_criterion
ns0:member_set_imperfection_definition_type
ns0:member_set_imperfection_imperfection_direction
ns0:member_set_imperfection_imperfection_type
ns0:member_set_imperfection_section_design
ns0:member_set_imperfection_standard_factor_enumeration
ns0:member_set_load
ns0:member_set_load_axis_definition_axis
ns0:member_set_load_axis_definition_axis_orientation
ns0:member_set_load_axis_definition_type
ns0:member_set_load_eccentricity_horizontal_alignment
ns0:member_set_load_eccentricity_section_middle
ns0:member_set_load_eccentricity_vertical_alignment
ns0:member_set_load_form_finding_definition_type
ns0:member_set_load_form_finding_force_definition
ns0:member_set_load_form_finding_geometry_definition
ns0:member_set_load_form_finding_internal_force
ns0:member_set_load_load_direction
ns0:member_set_load_load_direction_orientation
ns0:member_set_load_load_distribution
ns0:member_set_load_load_type
ns0:member_set_load_varying_load_parameters
ns0:member_set_load_varying_load_parameters_row
ns0:member_set_representative
ns0:member_set_representative_concrete_longitudinal_reinforcement_span
ns0:member_set_representative_concrete_longitudinal_reinforcement_span_row
ns0:member_set_representative_concrete_longitudinal_reinforcement_span_span_position_definition_format_type
ns0:member_set_representative_concrete_longitudinal_reinforcement_span_span_position_reference_type
ns0:member_set_representative_concrete_shear_reinforcement_span
ns0:member_set_representative_concrete_shear_reinforcement_span_row
ns0:member_set_representative_member_model_concrete_longitudinal_reinforcement_items
ns0:member_set_representative_member_model_concrete_longitudinal_reinforcement_items_row
ns0:member_set_representative_member_model_concrete_longitudinal_reinforcement_items_span_position_definition_format_type
ns0:member_set_representative_member_model_concrete_longitudinal_reinforcement_items_span_position_reference_type
ns0:member_set_representative_member_model_concrete_shear_reinforcement_spans
ns0:member_set_representative_member_model_concrete_shear_reinforcement_spans_row
ns0:member_set_representative_member_model_curved_member_cantilevers_type
ns0:member_set_representative_member_model_curved_member_parameters
ns0:member_set_representative_member_model_curved_member_parameters_and_child_items
ns0:member_set_representative_member_model_curved_member_parameters_row
ns0:member_set_representative_member_model_deflection_check_direction
ns0:member_set_representative_member_model_deflection_check_displacement_reference
ns0:member_set_representative_member_model_deflection_segments_y_axis
ns0:member_set_representative_member_model_deflection_segments_y_axis_row
ns0:member_set_representative_member_model_deflection_segments_z_axis
ns0:member_set_representative_member_model_deflection_segments_z_axis_row
ns0:member_set_representative_member_model_design_supports_on_internal_nodes
ns0:member_set_representative_member_model_design_supports_on_internal_nodes_row
ns0:member_set_representative_member_model_flange_dimensions
ns0:member_set_representative_member_model_flange_dimensions_row
ns0:member_set_representative_member_model_grain_alignment
ns0:member_set_representative_member_model_member_rib_surface_roughness_classification
ns0:member_set_representative_member_model_member_type_rib_alignment
ns0:member_set_representative_member_model_reference_type
ns0:member_set_representative_member_model_result_beam_integrate_stresses_and_forces
ns0:member_set_representative_member_model_rotation_plane_type
ns0:member_set_representative_member_model_rotation_specification_type
ns0:member_set_representative_member_model_rotation_surface_plane_type
ns0:member_set_representative_member_model_section_alignment
ns0:member_set_representative_member_model_section_distribution_type
ns0:member_set_representative_member_model_type
ns0:member_set_representative_member_set_model_concrete_longitudinal_reinforcement_items
ns0:member_set_representative_member_set_model_concrete_longitudinal_reinforcement_items_row
ns0:member_set_representative_member_set_model_concrete_longitudinal_reinforcement_items_span_position_definition_format_type
ns0:member_set_representative_member_set_model_concrete_longitudinal_reinforcement_items_span_position_reference_type
ns0:member_set_representative_member_set_model_concrete_shear_reinforcement_spans
ns0:member_set_representative_member_set_model_concrete_shear_reinforcement_spans_row
ns0:member_set_representative_member_set_model_deflection_check_direction
ns0:member_set_representative_member_set_model_deflection_check_displacement_reference
ns0:member_set_representative_member_set_model_deflection_segments_y_axis
ns0:member_set_representative_member_set_model_deflection_segments_y_axis_row
ns0:member_set_representative_member_set_model_deflection_segments_z_axis
ns0:member_set_representative_member_set_model_deflection_segments_z_axis_row
ns0:member_set_representative_member_set_model_design_supports_on_internal_nodes
ns0:member_set_representative_member_set_model_design_supports_on_internal_nodes_row
ns0:member_set_representative_member_set_model_set_type
ns0:member_set_set_type
ns0:member_shear_panel
ns0:member_shear_panel_definition_type
ns0:member_shear_panel_fastening_arrangement
ns0:member_stiffness_modification
ns0:member_stiffness_modification_concrete_structure_component_type
ns0:member_stiffness_modification_steel_structure_csa_determine_tau_b
ns0:member_stiffness_modification_steel_structure_design_method
ns0:member_stiffness_modification_steel_structure_determine_tau_b
ns0:member_stiffness_modification_type
ns0:member_support
ns0:member_support_eccentricity_center
ns0:member_support_eccentricity_position_z
ns0:member_support_nonlinearity_rotational_x
ns0:member_support_nonlinearity_translational_z
ns0:member_transverse_stiffener
ns0:member_transverse_stiffener_components
ns0:member_transverse_stiffener_components_row
ns0:member_type
ns0:members_by_eigenvector
ns0:members_by_eigenvector_row
ns0:members_contact_forces
ns0:members_contact_forces_row
ns0:members_global_deformations
ns0:members_global_deformations_row
ns0:members_hinge_deformations
ns0:members_hinge_deformations_row
ns0:members_hinge_forces
ns0:members_hinge_forces_row
ns0:members_internal_forces
ns0:members_internal_forces_by_member_set
ns0:members_internal_forces_by_member_set_row
ns0:members_internal_forces_by_section
ns0:members_internal_forces_by_section_row
ns0:members_internal_forces_row
ns0:members_local_deformations
ns0:members_local_deformations_row
ns0:members_local_plastic_deformation_ratios
ns0:members_local_plastic_deformation_ratios_row
ns0:members_strains
ns0:members_strains_row
ns0:meshConfig
ns0:meshConfig_surfaces_shape_of_finite_elements_type
ns0:mesh_statistics_type
ns0:method_type
ns0:modal_analysis_effective_modal_masses
ns0:modal_analysis_effective_modal_masses_row
ns0:modal_analysis_masses_in_locations
ns0:modal_analysis_masses_in_locations_row
ns0:modal_analysis_members_by_mode_shape
ns0:modal_analysis_members_by_mode_shape_row
ns0:modal_analysis_mode_shapes_by_member
ns0:modal_analysis_mode_shapes_by_member_row
ns0:modal_analysis_mode_shapes_by_node
ns0:modal_analysis_mode_shapes_by_node_row
ns0:modal_analysis_mode_shapes_by_solid
ns0:modal_analysis_mode_shapes_by_solid_row
ns0:modal_analysis_mode_shapes_by_surface
ns0:modal_analysis_mode_shapes_by_surface_row
ns0:modal_analysis_natural_frequencies
ns0:modal_analysis_natural_frequencies_row
ns0:modal_analysis_nodes_by_mode_shape
ns0:modal_analysis_nodes_by_mode_shape_row
ns0:modal_analysis_participation_factors
ns0:modal_analysis_participation_factors_row
ns0:modal_analysis_settings
ns0:modal_analysis_settings_mass_conversion_type
ns0:modal_analysis_settings_mass_matrix_type
ns0:modal_analysis_settings_neglect_masses
ns0:modal_analysis_settings_neglect_masses_of_selected_objects_table
ns0:modal_analysis_settings_neglect_masses_of_selected_objects_table_object_type
ns0:modal_analysis_settings_neglect_masses_of_selected_objects_table_row
ns0:modal_analysis_settings_number_of_modes_method
ns0:modal_analysis_settings_solution_method
ns0:modal_analysis_solids_by_mode_shape
ns0:modal_analysis_solids_by_mode_shape_row
ns0:modal_analysis_surfaces_by_mode_shape
ns0:modal_analysis_surfaces_by_mode_shape_row
ns0:modelInfo
ns0:modelInfo_property_supported_lines_type
ns0:modelInfo_property_supported_lines_type_array
ns0:model_history
ns0:model_history_row
ns0:model_main_parameters
ns0:model_parameters
ns0:model_parameters_location
ns0:model_parameters_location_row
ns0:model_parameters_row
ns0:model_settings_and_options
ns0:model_settings_and_options_global_axes_orientation_type
ns0:model_settings_and_options_local_axes_orientation_type
ns0:model_type
ns0:modification_type
ns0:multiple_offset_definition_type
ns0:nodal_load
ns0:nodal_load_axes_sequence
ns0:nodal_load_load_direction
ns0:nodal_load_load_type
ns0:nodal_load_mass_axis_of_rotation
ns0:nodal_load_specific_direction_type
ns0:nodal_mesh_refinement
ns0:nodal_mesh_refinement_circular_length_arrangement
ns0:nodal_mesh_refinement_type
ns0:nodal_release
ns0:nodal_release_release_location
ns0:nodal_release_type
ns0:nodal_release_type_axial_release_n_nonlinearity
ns0:nodal_release_type_axial_release_vy_nonlinearity
ns0:nodal_release_type_axial_release_vz_nonlinearity
ns0:nodal_release_type_diagram_along_x_end
ns0:nodal_release_type_diagram_along_x_start
ns0:nodal_release_type_diagram_along_x_table
ns0:nodal_release_type_diagram_along_x_table_row
ns0:nodal_release_type_diagram_along_y_end
ns0:nodal_release_type_diagram_along_y_start
ns0:nodal_release_type_diagram_along_y_table
ns0:nodal_release_type_diagram_along_y_table_row
ns0:nodal_release_type_diagram_along_z_end
ns0:nodal_release_type_diagram_along_z_start
ns0:nodal_release_type_diagram_along_z_table
ns0:nodal_release_type_diagram_along_z_table_row
ns0:nodal_release_type_diagram_around_x_end
ns0:nodal_release_type_diagram_around_x_start
ns0:nodal_release_type_diagram_around_x_table
ns0:nodal_release_type_diagram_around_x_table_row
ns0:nodal_release_type_diagram_around_y_end
ns0:nodal_release_type_diagram_around_y_start
ns0:nodal_release_type_diagram_around_y_table
ns0:nodal_release_type_diagram_around_y_table_row
ns0:nodal_release_type_diagram_around_z_end
ns0:nodal_release_type_diagram_around_z_start
ns0:nodal_release_type_diagram_around_z_table
ns0:nodal_release_type_diagram_around_z_table_row
ns0:nodal_release_type_local_axis_system_object_type
ns0:nodal_release_type_moment_release_mt_nonlinearity
ns0:nodal_release_type_moment_release_my_nonlinearity
ns0:nodal_release_type_moment_release_mz_nonlinearity
ns0:nodal_release_type_partial_activity_along_x_negative_type
ns0:nodal_release_type_partial_activity_along_x_positive_type
ns0:nodal_release_type_partial_activity_along_y_negative_type
ns0:nodal_release_type_partial_activity_along_y_positive_type
ns0:nodal_release_type_partial_activity_along_z_negative_type
ns0:nodal_release_type_partial_activity_along_z_positive_type
ns0:nodal_release_type_partial_activity_around_x_negative_type
ns0:nodal_release_type_partial_activity_around_x_positive_type
ns0:nodal_release_type_partial_activity_around_y_negative_type
ns0:nodal_release_type_partial_activity_around_y_positive_type
ns0:nodal_release_type_partial_activity_around_z_negative_type
ns0:nodal_release_type_partial_activity_around_z_positive_type
ns0:nodal_support
ns0:nodal_support_axes_sequence
ns0:nodal_support_column_base_support_type
ns0:nodal_support_column_head_support_type
ns0:nodal_support_column_head_type
ns0:nodal_support_column_support_type
ns0:nodal_support_diagram_along_x_color_table
ns0:nodal_support_diagram_along_x_color_table_row
ns0:nodal_support_diagram_along_x_end
ns0:nodal_support_diagram_along_x_start
ns0:nodal_support_diagram_along_x_table
ns0:nodal_support_diagram_along_x_table_row
ns0:nodal_support_diagram_along_y_color_table
ns0:nodal_support_diagram_along_y_color_table_row
ns0:nodal_support_diagram_along_y_end
ns0:nodal_support_diagram_along_y_start
ns0:nodal_support_diagram_along_y_table
ns0:nodal_support_diagram_along_y_table_row
ns0:nodal_support_diagram_along_z_color_table
ns0:nodal_support_diagram_along_z_color_table_row
ns0:nodal_support_diagram_along_z_end
ns0:nodal_support_diagram_along_z_start
ns0:nodal_support_diagram_along_z_table
ns0:nodal_support_diagram_along_z_table_row
ns0:nodal_support_diagram_around_x_color_table
ns0:nodal_support_diagram_around_x_color_table_row
ns0:nodal_support_diagram_around_x_end
ns0:nodal_support_diagram_around_x_start
ns0:nodal_support_diagram_around_x_table
ns0:nodal_support_diagram_around_x_table_row
ns0:nodal_support_diagram_around_y_color_table
ns0:nodal_support_diagram_around_y_color_table_row
ns0:nodal_support_diagram_around_y_end
ns0:nodal_support_diagram_around_y_start
ns0:nodal_support_diagram_around_y_table
ns0:nodal_support_diagram_around_y_table_row
ns0:nodal_support_diagram_around_z_color_table
ns0:nodal_support_diagram_around_z_color_table_row
ns0:nodal_support_diagram_around_z_end
ns0:nodal_support_diagram_around_z_start
ns0:nodal_support_diagram_around_z_table
ns0:nodal_support_diagram_around_z_table_row
ns0:nodal_support_directed_to_node_first_axis
ns0:nodal_support_directed_to_node_second_axis
ns0:nodal_support_parallel_to_two_nodes_first_axis
ns0:nodal_support_parallel_to_two_nodes_second_axis
ns0:nodal_support_partial_activity_along_x_negative_type
ns0:nodal_support_partial_activity_along_x_positive_type
ns0:nodal_support_partial_activity_along_y_negative_type
ns0:nodal_support_partial_activity_along_y_positive_type
ns0:nodal_support_partial_activity_along_z_negative_type
ns0:nodal_support_partial_activity_along_z_positive_type
ns0:nodal_support_partial_activity_around_x_negative_type
ns0:nodal_support_partial_activity_around_x_positive_type
ns0:nodal_support_partial_activity_around_y_negative_type
ns0:nodal_support_partial_activity_around_y_positive_type
ns0:nodal_support_partial_activity_around_z_negative_type
ns0:nodal_support_partial_activity_around_z_positive_type
ns0:nodal_support_rotational_restraint_x_nonlinearity
ns0:nodal_support_rotational_restraint_y_nonlinearity
ns0:nodal_support_rotational_restraint_z_nonlinearity
ns0:nodal_support_specific_direction_type
ns0:nodal_support_spring_x_nonlinearity
ns0:nodal_support_spring_y_nonlinearity
ns0:nodal_support_spring_z_nonlinearity
ns0:nodal_support_stiffness_diagram_around_x_depends_on
ns0:nodal_support_stiffness_diagram_around_x_end
ns0:nodal_support_stiffness_diagram_around_x_start
ns0:nodal_support_stiffness_diagram_around_x_table
ns0:nodal_support_stiffness_diagram_around_x_table_row
ns0:nodal_support_stiffness_diagram_around_y_depends_on
ns0:nodal_support_stiffness_diagram_around_y_end
ns0:nodal_support_stiffness_diagram_around_y_start
ns0:nodal_support_stiffness_diagram_around_y_table
ns0:nodal_support_stiffness_diagram_around_y_table_row
ns0:nodal_support_stiffness_diagram_around_z_depends_on
ns0:nodal_support_stiffness_diagram_around_z_end
ns0:nodal_support_stiffness_diagram_around_z_start
ns0:nodal_support_stiffness_diagram_around_z_table
ns0:nodal_support_stiffness_diagram_around_z_table_row
ns0:nodal_support_support_dimension_type_on_x
ns0:nodal_support_support_dimension_type_on_y
ns0:nodal_support_support_dimension_type_on_z
ns0:node
ns0:node_coordinate_system_type
ns0:node_of_parameter_path_in_nested_models_hierarchy
ns0:node_reference_type
ns0:node_type
ns0:nodes_by_eigenvector
ns0:nodes_by_eigenvector_row
ns0:nodes_deformations
ns0:nodes_deformations_row
ns0:nodes_support_forces
ns0:nodes_support_forces_row
ns0:note
ns0:note_member_reference_type
ns0:note_offset_type
ns0:note_surface_reference_type
ns0:note_type
ns0:object_information
ns0:object_location
ns0:object_location_array
ns0:object_parameter_location
ns0:object_parameter_location_array
ns0:object_snap
ns0:object_snap_type
ns0:object_type
ns0:object_types
ns0:object_with_children
ns0:object_with_children_array
ns0:opening
ns0:opening_load
ns0:opening_load_load_direction
ns0:opening_load_load_distribution
ns0:opening_load_load_type
ns0:operator_type
ns0:optimization_settings
ns0:optimization_settings_optimization_values_table
ns0:optimization_settings_optimization_values_table_row
ns0:optimization_settings_optimizer_type
ns0:optimization_settings_target_value_type
ns0:orientation_type
ns0:parameter_path_in_nested_models_hierarchy
ns0:parts_list_all_by_material
ns0:parts_list_all_by_material_row
ns0:parts_list_member_representatives_by_material
ns0:parts_list_member_representatives_by_material_row
ns0:parts_list_member_set_representatives_by_material
ns0:parts_list_member_set_representatives_by_material_row
ns0:parts_list_member_sets_by_material
ns0:parts_list_member_sets_by_material_row
ns0:parts_list_members_by_material
ns0:parts_list_members_by_material_row
ns0:parts_list_solids_by_material
ns0:parts_list_solids_by_material_row
ns0:parts_list_surfaces_by_material
ns0:parts_list_surfaces_by_material_row
ns0:plausibility_check
ns0:plausibility_checkResponse
ns0:plausibility_check_result
ns0:position_type
ns0:print_printout_report
ns0:print_printout_reportResponse
ns0:printout_report_info
ns0:printout_report_info_array
ns0:property_to_modify_type
ns0:punching_reinforcement
ns0:punching_reinforcement_perimeter_spacing_type
ns0:punching_reinforcement_placement_type
ns0:punching_reinforcement_type
ns0:pushover_analysis_building_stories_centres_mass_rigidity
ns0:pushover_analysis_building_stories_centres_mass_rigidity_row
ns0:pushover_analysis_building_stories_forces_in_shear_walls
ns0:pushover_analysis_building_stories_forces_in_shear_walls_row
ns0:pushover_analysis_building_stories_forces_in_spandrels
ns0:pushover_analysis_building_stories_forces_in_spandrels_row
ns0:pushover_analysis_building_stories_interstory_drifts
ns0:pushover_analysis_building_stories_interstory_drifts_row
ns0:pushover_analysis_building_stories_story_actions
ns0:pushover_analysis_building_stories_story_actions_row
ns0:pushover_analysis_calculation_diagrams
ns0:pushover_analysis_calculation_diagrams_row
ns0:pushover_analysis_convergence_diagrams
ns0:pushover_analysis_convergence_diagrams_row
ns0:pushover_analysis_horizontal_forces
ns0:pushover_analysis_horizontal_forces_row
ns0:pushover_analysis_line_hinges_deformations
ns0:pushover_analysis_line_hinges_deformations_row
ns0:pushover_analysis_line_hinges_forces
ns0:pushover_analysis_line_hinges_forces_row
ns0:pushover_analysis_lines_slab_wall_connections
ns0:pushover_analysis_lines_slab_wall_connections_row
ns0:pushover_analysis_lines_support_forces
ns0:pushover_analysis_lines_support_forces_row
ns0:pushover_analysis_members_contact_forces
ns0:pushover_analysis_members_contact_forces_row
ns0:pushover_analysis_members_global_deformations
ns0:pushover_analysis_members_global_deformations_row
ns0:pushover_analysis_members_hinge_deformations
ns0:pushover_analysis_members_hinge_deformations_row
ns0:pushover_analysis_members_hinge_forces
ns0:pushover_analysis_members_hinge_forces_row
ns0:pushover_analysis_members_internal_forces
ns0:pushover_analysis_members_internal_forces_by_member_set
ns0:pushover_analysis_members_internal_forces_by_member_set_row
ns0:pushover_analysis_members_internal_forces_by_section
ns0:pushover_analysis_members_internal_forces_by_section_row
ns0:pushover_analysis_members_internal_forces_row
ns0:pushover_analysis_members_local_deformations
ns0:pushover_analysis_members_local_deformations_row
ns0:pushover_analysis_members_local_plastic_deformation_ratios
ns0:pushover_analysis_members_local_plastic_deformation_ratios_row
ns0:pushover_analysis_members_strains
ns0:pushover_analysis_members_strains_row
ns0:pushover_analysis_nodes_deformations
ns0:pushover_analysis_nodes_deformations_row
ns0:pushover_analysis_nodes_support_forces
ns0:pushover_analysis_nodes_support_forces_row
ns0:pushover_analysis_solids_basic_plastic_strains
ns0:pushover_analysis_solids_basic_plastic_strains_row
ns0:pushover_analysis_solids_basic_stresses
ns0:pushover_analysis_solids_basic_stresses_row
ns0:pushover_analysis_solids_basic_total_strains
ns0:pushover_analysis_solids_basic_total_strains_row
ns0:pushover_analysis_solids_deformations
ns0:pushover_analysis_solids_deformations_row
ns0:pushover_analysis_solids_equivalent_plastic_strains
ns0:pushover_analysis_solids_equivalent_plastic_strains_row
ns0:pushover_analysis_solids_equivalent_stresses
ns0:pushover_analysis_solids_equivalent_stresses_row
ns0:pushover_analysis_solids_equivalent_total_strains
ns0:pushover_analysis_solids_equivalent_total_strains_row
ns0:pushover_analysis_solids_gas_quantities
ns0:pushover_analysis_solids_gas_quantities_row
ns0:pushover_analysis_solids_principal_plastic_strains
ns0:pushover_analysis_solids_principal_plastic_strains_row
ns0:pushover_analysis_solids_principal_stresses
ns0:pushover_analysis_solids_principal_stresses_row
ns0:pushover_analysis_solids_principal_total_strains
ns0:pushover_analysis_solids_principal_total_strains_row
ns0:pushover_analysis_summary
ns0:pushover_analysis_summary_row
ns0:pushover_analysis_surfaces_basic_internal_forces
ns0:pushover_analysis_surfaces_basic_internal_forces_row
ns0:pushover_analysis_surfaces_basic_plastic_strains
ns0:pushover_analysis_surfaces_basic_plastic_strains_row
ns0:pushover_analysis_surfaces_basic_stresses
ns0:pushover_analysis_surfaces_basic_stresses_row
ns0:pushover_analysis_surfaces_basic_total_strains
ns0:pushover_analysis_surfaces_basic_total_strains_row
ns0:pushover_analysis_surfaces_contact_stresses
ns0:pushover_analysis_surfaces_contact_stresses_row
ns0:pushover_analysis_surfaces_design_internal_forces
ns0:pushover_analysis_surfaces_design_internal_forces_row
ns0:pushover_analysis_surfaces_elastic_stress_components
ns0:pushover_analysis_surfaces_elastic_stress_components_row
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_bach
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_bach_row
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_mises
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_mises_row
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_rankine_row
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:pushover_analysis_surfaces_equivalent_plastic_strains_tresca_row
ns0:pushover_analysis_surfaces_equivalent_stresses_bach
ns0:pushover_analysis_surfaces_equivalent_stresses_bach_row
ns0:pushover_analysis_surfaces_equivalent_stresses_mises
ns0:pushover_analysis_surfaces_equivalent_stresses_mises_row
ns0:pushover_analysis_surfaces_equivalent_stresses_rankine
ns0:pushover_analysis_surfaces_equivalent_stresses_rankine_row
ns0:pushover_analysis_surfaces_equivalent_stresses_tresca
ns0:pushover_analysis_surfaces_equivalent_stresses_tresca_row
ns0:pushover_analysis_surfaces_equivalent_total_strains_bach
ns0:pushover_analysis_surfaces_equivalent_total_strains_bach_row
ns0:pushover_analysis_surfaces_equivalent_total_strains_mises
ns0:pushover_analysis_surfaces_equivalent_total_strains_mises_row
ns0:pushover_analysis_surfaces_equivalent_total_strains_rankine
ns0:pushover_analysis_surfaces_equivalent_total_strains_rankine_row
ns0:pushover_analysis_surfaces_equivalent_total_strains_tresca
ns0:pushover_analysis_surfaces_equivalent_total_strains_tresca_row
ns0:pushover_analysis_surfaces_global_deformations
ns0:pushover_analysis_surfaces_global_deformations_row
ns0:pushover_analysis_surfaces_local_deformations
ns0:pushover_analysis_surfaces_local_deformations_row
ns0:pushover_analysis_surfaces_maximum_plastic_strains
ns0:pushover_analysis_surfaces_maximum_plastic_strains_row
ns0:pushover_analysis_surfaces_maximum_total_strains
ns0:pushover_analysis_surfaces_maximum_total_strains_row
ns0:pushover_analysis_surfaces_principal_internal_forces
ns0:pushover_analysis_surfaces_principal_internal_forces_row
ns0:pushover_analysis_surfaces_principal_plastic_strains
ns0:pushover_analysis_surfaces_principal_plastic_strains_row
ns0:pushover_analysis_surfaces_principal_stresses
ns0:pushover_analysis_surfaces_principal_stresses_row
ns0:pushover_analysis_surfaces_principal_total_strains
ns0:pushover_analysis_surfaces_principal_total_strains_row
ns0:pushover_analysis_target_displacement
ns0:pushover_analysis_target_displacement_row
ns0:rebar_type
ns0:reduction_type
ns0:reference_length_definition_type
ns0:reference_length_width_type
ns0:reference_object_type
ns0:reinforcement_direction
ns0:reinforcement_direction_reinforcement_direction_type
ns0:relationship_between_load_cases
ns0:relationship_between_load_cases_exclusive_load_cases
ns0:relationship_between_load_cases_exclusive_load_cases_row
ns0:relationship_between_load_cases_inclusive_load_cases
ns0:relationship_between_load_cases_inclusive_load_cases_row
ns0:reset
ns0:resetResponse
ns0:response_spectrum
ns0:response_spectrum_definition_type
ns0:response_spectrum_direction
ns0:response_spectrum_user_defined_response_spectrum
ns0:response_spectrum_user_defined_response_spectrum_row
ns0:restraint_about_x_type
ns0:restraint_about_z_type
ns0:restraint_warping_type
ns0:result_combination
ns0:result_combination_combination_type
ns0:result_combination_items
ns0:result_combination_items_row
ns0:result_combination_srss_extreme_value_sign
ns0:result_section
ns0:result_section_projection_in_direction
ns0:result_section_show_results_in_direction
ns0:result_section_type
ns0:rigid_link
ns0:rigid_link_rigid_link_type
ns0:rigid_link_type
ns0:run_script
ns0:run_scriptResponse
ns0:save
ns0:saveResponse
ns0:section
ns0:section_combination_type
ns0:section_emissions_members_length_unit
ns0:section_emissions_members_surface_unit
ns0:section_emissions_members_volume_unit
ns0:section_emissions_members_weight_unit
ns0:section_function_data_coefficients
ns0:section_function_data_coefficients_row
ns0:section_function_data_function_type
ns0:section_manufacturing_type
ns0:section_members_length_unit
ns0:section_members_surface_unit
ns0:section_members_volume_unit
ns0:section_members_weight_unit
ns0:section_parametrization_type
ns0:section_time_dependent_properties
ns0:section_time_dependent_properties_and_child_items
ns0:section_time_dependent_properties_row
ns0:section_type
ns0:set_Dxf_file_model_object
ns0:set_Dxf_file_model_objectResponse
ns0:set_Dxf_model_object
ns0:set_Dxf_model_objectResponse
ns0:set_accelerogram
ns0:set_accelerogramResponse
ns0:set_action
ns0:set_actionResponse
ns0:set_action_combination
ns0:set_action_combinationResponse
ns0:set_addon_statuses
ns0:set_addon_statusesResponse
ns0:set_aluminum_design_sls_configuration
ns0:set_aluminum_design_sls_configurationResponse
ns0:set_aluminum_design_uls_configuration
ns0:set_aluminum_design_uls_configurationResponse
ns0:set_aluminum_effective_lengths
ns0:set_aluminum_effective_lengthsResponse
ns0:set_aluminum_member_local_section_reduction
ns0:set_aluminum_member_local_section_reductionResponse
ns0:set_aluminum_member_transverse_weld
ns0:set_aluminum_member_transverse_weldResponse
ns0:set_borehole
ns0:set_boreholeResponse
ns0:set_building_story
ns0:set_building_storyResponse
ns0:set_calculation_diagram
ns0:set_calculation_diagramResponse
ns0:set_clipping_box
ns0:set_clipping_boxResponse
ns0:set_clipping_plane
ns0:set_clipping_planeResponse
ns0:set_combination_wizard
ns0:set_combination_wizardResponse
ns0:set_concrete_design_sls_configuration
ns0:set_concrete_design_sls_configurationResponse
ns0:set_concrete_design_uls_configuration
ns0:set_concrete_design_uls_configurationResponse
ns0:set_concrete_durability
ns0:set_concrete_durabilityResponse
ns0:set_concrete_effective_lengths
ns0:set_concrete_effective_lengthsResponse
ns0:set_construction_stage
ns0:set_construction_stageResponse
ns0:set_coordinate_system
ns0:set_coordinate_systemResponse
ns0:set_design_situation
ns0:set_design_situationResponse
ns0:set_design_support
ns0:set_design_supportResponse
ns0:set_dimension
ns0:set_dimensionResponse
ns0:set_formula
ns0:set_formulaResponse
ns0:set_free_circular_load
ns0:set_free_circular_loadResponse
ns0:set_free_concentrated_load
ns0:set_free_concentrated_loadResponse
ns0:set_free_line_load
ns0:set_free_line_loadResponse
ns0:set_free_polygon_load
ns0:set_free_polygon_loadResponse
ns0:set_free_rectangular_load
ns0:set_free_rectangular_loadResponse
ns0:set_global_parameter
ns0:set_global_parameterResponse
ns0:set_imperfection_case
ns0:set_imperfection_caseResponse
ns0:set_imposed_line_deformation
ns0:set_imposed_line_deformationResponse
ns0:set_imposed_nodal_deformation
ns0:set_imposed_nodal_deformationResponse
ns0:set_intersection
ns0:set_intersectionResponse
ns0:set_line
ns0:set_lineResponse
ns0:set_line_grid
ns0:set_line_gridResponse
ns0:set_line_hinge
ns0:set_line_hingeResponse
ns0:set_line_load
ns0:set_line_loadResponse
ns0:set_line_mesh_refinement
ns0:set_line_mesh_refinementResponse
ns0:set_line_release
ns0:set_line_releaseResponse
ns0:set_line_release_type
ns0:set_line_release_typeResponse
ns0:set_line_set
ns0:set_line_setResponse
ns0:set_line_set_load
ns0:set_line_set_loadResponse
ns0:set_line_support
ns0:set_line_supportResponse
ns0:set_line_welded_joint
ns0:set_line_welded_jointResponse
ns0:set_load_case
ns0:set_load_caseResponse
ns0:set_load_cases_and_combinations
ns0:set_load_cases_and_combinationsResponse
ns0:set_load_combination
ns0:set_load_combinationResponse
ns0:set_main_objects_to_activate
ns0:set_main_objects_to_activateResponse
ns0:set_material
ns0:set_materialResponse
ns0:set_member
ns0:set_memberResponse
ns0:set_member_definable_stiffness
ns0:set_member_definable_stiffnessResponse
ns0:set_member_eccentricity
ns0:set_member_eccentricityResponse
ns0:set_member_hinge
ns0:set_member_hingeResponse
ns0:set_member_imperfection
ns0:set_member_imperfectionResponse
ns0:set_member_load
ns0:set_member_loadResponse
ns0:set_member_nonlinearity
ns0:set_member_nonlinearityResponse
ns0:set_member_openings
ns0:set_member_openingsResponse
ns0:set_member_representative
ns0:set_member_representativeResponse
ns0:set_member_result_intermediate_point
ns0:set_member_result_intermediate_pointResponse
ns0:set_member_rotational_restraint
ns0:set_member_rotational_restraintResponse
ns0:set_member_set
ns0:set_member_setResponse
ns0:set_member_set_imperfection
ns0:set_member_set_imperfectionResponse
ns0:set_member_set_load
ns0:set_member_set_loadResponse
ns0:set_member_set_representative
ns0:set_member_set_representativeResponse
ns0:set_member_shear_panel
ns0:set_member_shear_panelResponse
ns0:set_member_stiffness_modification
ns0:set_member_stiffness_modificationResponse
ns0:set_member_support
ns0:set_member_supportResponse
ns0:set_member_transverse_stiffener
ns0:set_member_transverse_stiffenerResponse
ns0:set_mesh_settings
ns0:set_mesh_settingsResponse
ns0:set_modal_analysis_settings
ns0:set_modal_analysis_settingsResponse
ns0:set_model_history
ns0:set_model_historyResponse
ns0:set_model_id
ns0:set_model_idResponse
ns0:set_model_parameters
ns0:set_model_parametersResponse
ns0:set_model_parameters_location
ns0:set_model_parameters_locationResponse
ns0:set_model_settings_and_options
ns0:set_model_settings_and_optionsResponse
ns0:set_model_type
ns0:set_model_typeResponse
ns0:set_nodal_load
ns0:set_nodal_loadResponse
ns0:set_nodal_mesh_refinement
ns0:set_nodal_mesh_refinementResponse
ns0:set_nodal_release
ns0:set_nodal_releaseResponse
ns0:set_nodal_release_type
ns0:set_nodal_release_typeResponse
ns0:set_nodal_support
ns0:set_nodal_supportResponse
ns0:set_node
ns0:set_nodeResponse
ns0:set_note
ns0:set_noteResponse
ns0:set_object_snap
ns0:set_object_snapResponse
ns0:set_opening
ns0:set_openingResponse
ns0:set_opening_load
ns0:set_opening_loadResponse
ns0:set_optimization_settings
ns0:set_optimization_settingsResponse
ns0:set_punching_reinforcement
ns0:set_punching_reinforcementResponse
ns0:set_reinforcement_direction
ns0:set_reinforcement_directionResponse
ns0:set_relationship_between_load_cases
ns0:set_relationship_between_load_casesResponse
ns0:set_response_spectrum
ns0:set_response_spectrumResponse
ns0:set_result_combination
ns0:set_result_combinationResponse
ns0:set_result_section
ns0:set_result_sectionResponse
ns0:set_rigid_link
ns0:set_rigid_linkResponse
ns0:set_section
ns0:set_sectionResponse
ns0:set_selected_objects
ns0:set_selected_objectsResponse
ns0:set_soil_massif
ns0:set_soil_massifResponse
ns0:set_solid
ns0:set_solidResponse
ns0:set_solid_contacts
ns0:set_solid_contactsResponse
ns0:set_solid_gas
ns0:set_solid_gasResponse
ns0:set_solid_load
ns0:set_solid_loadResponse
ns0:set_solid_mesh_refinement
ns0:set_solid_mesh_refinementResponse
ns0:set_solid_set
ns0:set_solid_setResponse
ns0:set_solid_set_load
ns0:set_solid_set_loadResponse
ns0:set_spectral_analysis_settings
ns0:set_spectral_analysis_settingsResponse
ns0:set_stability_analysis_settings
ns0:set_stability_analysis_settingsResponse
ns0:set_static_analysis_settings
ns0:set_static_analysis_settingsResponse
ns0:set_steel_boundary_conditions
ns0:set_steel_boundary_conditionsResponse
ns0:set_steel_design_fr_configuration
ns0:set_steel_design_fr_configurationResponse
ns0:set_steel_design_seismic_configuration
ns0:set_steel_design_seismic_configurationResponse
ns0:set_steel_design_sls_configuration
ns0:set_steel_design_sls_configurationResponse
ns0:set_steel_design_uls_configuration
ns0:set_steel_design_uls_configurationResponse
ns0:set_steel_effective_lengths
ns0:set_steel_effective_lengthsResponse
ns0:set_steel_member_local_section_reduction
ns0:set_steel_member_local_section_reductionResponse
ns0:set_structure_modification
ns0:set_structure_modificationResponse
ns0:set_surface
ns0:set_surfaceResponse
ns0:set_surface_eccentricity
ns0:set_surface_eccentricityResponse
ns0:set_surface_imperfection
ns0:set_surface_imperfectionResponse
ns0:set_surface_load
ns0:set_surface_loadResponse
ns0:set_surface_mesh_refinement
ns0:set_surface_mesh_refinementResponse
ns0:set_surface_reinforcement
ns0:set_surface_reinforcementResponse
ns0:set_surface_release
ns0:set_surface_releaseResponse
ns0:set_surface_release_type
ns0:set_surface_release_typeResponse
ns0:set_surface_results_adjustment
ns0:set_surface_results_adjustmentResponse
ns0:set_surface_set
ns0:set_surface_setResponse
ns0:set_surface_set_imperfection
ns0:set_surface_set_imperfectionResponse
ns0:set_surface_set_load
ns0:set_surface_set_loadResponse
ns0:set_surface_stiffness_modification
ns0:set_surface_stiffness_modificationResponse
ns0:set_surface_support
ns0:set_surface_supportResponse
ns0:set_surfaces_contact
ns0:set_surfaces_contactResponse
ns0:set_surfaces_contact_type
ns0:set_surfaces_contact_typeResponse
ns0:set_table_export_config_manager
ns0:set_table_export_config_managerResponse
ns0:set_terrain
ns0:set_terrainResponse
ns0:set_thickness
ns0:set_thicknessResponse
ns0:set_timber_design_fr_configuration
ns0:set_timber_design_fr_configurationResponse
ns0:set_timber_design_sls_configuration
ns0:set_timber_design_sls_configurationResponse
ns0:set_timber_design_uls_configuration
ns0:set_timber_design_uls_configurationResponse
ns0:set_timber_effective_lengths
ns0:set_timber_effective_lengthsResponse
ns0:set_timber_member_local_section_reduction
ns0:set_timber_member_local_section_reductionResponse
ns0:set_timber_moisture_class
ns0:set_timber_moisture_classResponse
ns0:set_timber_service_class
ns0:set_timber_service_classResponse
ns0:set_timber_service_conditions
ns0:set_timber_service_conditionsResponse
ns0:set_visual_object
ns0:set_visual_objectResponse
ns0:set_wind_profile
ns0:set_wind_profileResponse
ns0:set_wind_simulation
ns0:set_wind_simulationResponse
ns0:set_wind_simulation_analysis_settings
ns0:set_wind_simulation_analysis_settingsResponse
ns0:soil_massif
ns0:soil_massif_analysis_type
ns0:soil_massif_assigned_to_type
ns0:soil_massif_depth_of_influence_zone_type
ns0:soil_massif_topology_type
ns0:soil_massif_type
ns0:solid
ns0:solid_axes_sequence
ns0:solid_contacts
ns0:solid_contacts_parallel_to_surface
ns0:solid_contacts_perpendicular_to_surface
ns0:solid_directed_to_node_first_axis
ns0:solid_directed_to_node_second_axis
ns0:solid_gas
ns0:solid_load
ns0:solid_load_axis_definition_axis
ns0:solid_load_axis_definition_axis_orientation
ns0:solid_load_axis_definition_type
ns0:solid_load_gas_behaviour
ns0:solid_load_load_direction
ns0:solid_load_load_direction_orientation
ns0:solid_load_load_distribution
ns0:solid_load_load_type
ns0:solid_mesh_refinement
ns0:solid_number_of_finite_element_layers_input_type
ns0:solid_parallel_to_two_nodes_first_axis
ns0:solid_parallel_to_two_nodes_second_axis
ns0:solid_set
ns0:solid_set_load
ns0:solid_set_load_axis_definition_axis
ns0:solid_set_load_axis_definition_axis_orientation
ns0:solid_set_load_axis_definition_type
ns0:solid_set_load_gas_behaviour
ns0:solid_set_load_load_direction
ns0:solid_set_load_load_direction_orientation
ns0:solid_set_load_load_distribution
ns0:solid_set_load_load_type
ns0:solid_set_set_type
ns0:solid_specific_direction_type
ns0:solid_type
ns0:solids_basic_plastic_strains
ns0:solids_basic_plastic_strains_row
ns0:solids_basic_stresses
ns0:solids_basic_stresses_row
ns0:solids_basic_total_strains
ns0:solids_basic_total_strains_row
ns0:solids_by_eigenvector
ns0:solids_by_eigenvector_row
ns0:solids_deformations
ns0:solids_deformations_row
ns0:solids_equivalent_plastic_strains
ns0:solids_equivalent_plastic_strains_row
ns0:solids_equivalent_stresses
ns0:solids_equivalent_stresses_row
ns0:solids_equivalent_total_strains
ns0:solids_equivalent_total_strains_row
ns0:solids_gas_quantities
ns0:solids_gas_quantities_row
ns0:solids_principal_plastic_strains
ns0:solids_principal_plastic_strains_row
ns0:solids_principal_stresses
ns0:solids_principal_stresses_row
ns0:solids_principal_total_strains
ns0:solids_principal_total_strains_row
ns0:span_position_definition_format_type
ns0:span_position_reference_type
ns0:spectral_analysis_building_stories_centres_mass_rigidity
ns0:spectral_analysis_building_stories_centres_mass_rigidity_row
ns0:spectral_analysis_building_stories_forces_in_shear_walls
ns0:spectral_analysis_building_stories_forces_in_shear_walls_row
ns0:spectral_analysis_building_stories_forces_in_spandrels
ns0:spectral_analysis_building_stories_forces_in_spandrels_row
ns0:spectral_analysis_building_stories_interstory_drifts
ns0:spectral_analysis_building_stories_interstory_drifts_row
ns0:spectral_analysis_building_stories_story_actions
ns0:spectral_analysis_building_stories_story_actions_row
ns0:spectral_analysis_line_hinges_deformations
ns0:spectral_analysis_line_hinges_deformations_row
ns0:spectral_analysis_line_hinges_forces
ns0:spectral_analysis_line_hinges_forces_row
ns0:spectral_analysis_lines_slab_wall_connections
ns0:spectral_analysis_lines_slab_wall_connections_row
ns0:spectral_analysis_lines_support_forces
ns0:spectral_analysis_lines_support_forces_row
ns0:spectral_analysis_members_contact_forces
ns0:spectral_analysis_members_contact_forces_row
ns0:spectral_analysis_members_global_deformations
ns0:spectral_analysis_members_global_deformations_row
ns0:spectral_analysis_members_hinge_deformations
ns0:spectral_analysis_members_hinge_deformations_row
ns0:spectral_analysis_members_hinge_forces
ns0:spectral_analysis_members_hinge_forces_row
ns0:spectral_analysis_members_internal_forces
ns0:spectral_analysis_members_internal_forces_by_member_set
ns0:spectral_analysis_members_internal_forces_by_member_set_row
ns0:spectral_analysis_members_internal_forces_by_section
ns0:spectral_analysis_members_internal_forces_by_section_row
ns0:spectral_analysis_members_internal_forces_row
ns0:spectral_analysis_members_local_deformations
ns0:spectral_analysis_members_local_deformations_row
ns0:spectral_analysis_members_local_plastic_deformation_ratios
ns0:spectral_analysis_members_local_plastic_deformation_ratios_row
ns0:spectral_analysis_members_strains
ns0:spectral_analysis_members_strains_row
ns0:spectral_analysis_nodes_deformations
ns0:spectral_analysis_nodes_deformations_row
ns0:spectral_analysis_nodes_pseudo_accelerations
ns0:spectral_analysis_nodes_pseudo_accelerations_row
ns0:spectral_analysis_nodes_pseudo_velocities
ns0:spectral_analysis_nodes_pseudo_velocities_row
ns0:spectral_analysis_nodes_support_forces
ns0:spectral_analysis_nodes_support_forces_row
ns0:spectral_analysis_settings
ns0:spectral_analysis_settings_combination_rule_for_directional_components
ns0:spectral_analysis_settings_combination_rule_for_missing_masses
ns0:spectral_analysis_settings_combination_rule_for_periodic_responses
ns0:spectral_analysis_settings_damping_for_cqc_rule
ns0:spectral_analysis_settings_zero_periodic_acceleration_type
ns0:spectral_analysis_solids_basic_stresses
ns0:spectral_analysis_solids_basic_stresses_row
ns0:spectral_analysis_solids_basic_total_strains
ns0:spectral_analysis_solids_basic_total_strains_row
ns0:spectral_analysis_solids_deformations
ns0:spectral_analysis_solids_deformations_row
ns0:spectral_analysis_solids_equivalent_stresses
ns0:spectral_analysis_solids_equivalent_stresses_row
ns0:spectral_analysis_solids_equivalent_total_strains
ns0:spectral_analysis_solids_equivalent_total_strains_row
ns0:spectral_analysis_solids_gas_quantities
ns0:spectral_analysis_solids_gas_quantities_row
ns0:spectral_analysis_solids_principal_stresses
ns0:spectral_analysis_solids_principal_stresses_row
ns0:spectral_analysis_solids_principal_total_strains
ns0:spectral_analysis_solids_principal_total_strains_row
ns0:spectral_analysis_summary
ns0:spectral_analysis_summary_row
ns0:spectral_analysis_surfaces_basic_internal_forces
ns0:spectral_analysis_surfaces_basic_internal_forces_row
ns0:spectral_analysis_surfaces_basic_stresses
ns0:spectral_analysis_surfaces_basic_stresses_row
ns0:spectral_analysis_surfaces_basic_total_strains
ns0:spectral_analysis_surfaces_basic_total_strains_row
ns0:spectral_analysis_surfaces_contact_stresses
ns0:spectral_analysis_surfaces_contact_stresses_row
ns0:spectral_analysis_surfaces_design_internal_forces
ns0:spectral_analysis_surfaces_design_internal_forces_row
ns0:spectral_analysis_surfaces_elastic_stress_components
ns0:spectral_analysis_surfaces_elastic_stress_components_row
ns0:spectral_analysis_surfaces_equivalent_stresses_bach
ns0:spectral_analysis_surfaces_equivalent_stresses_bach_row
ns0:spectral_analysis_surfaces_equivalent_stresses_mises
ns0:spectral_analysis_surfaces_equivalent_stresses_mises_row
ns0:spectral_analysis_surfaces_equivalent_stresses_rankine
ns0:spectral_analysis_surfaces_equivalent_stresses_rankine_row
ns0:spectral_analysis_surfaces_equivalent_stresses_tresca
ns0:spectral_analysis_surfaces_equivalent_stresses_tresca_row
ns0:spectral_analysis_surfaces_equivalent_total_strains_bach
ns0:spectral_analysis_surfaces_equivalent_total_strains_bach_row
ns0:spectral_analysis_surfaces_equivalent_total_strains_mises
ns0:spectral_analysis_surfaces_equivalent_total_strains_mises_row
ns0:spectral_analysis_surfaces_equivalent_total_strains_rankine
ns0:spectral_analysis_surfaces_equivalent_total_strains_rankine_row
ns0:spectral_analysis_surfaces_equivalent_total_strains_tresca
ns0:spectral_analysis_surfaces_equivalent_total_strains_tresca_row
ns0:spectral_analysis_surfaces_global_deformations
ns0:spectral_analysis_surfaces_global_deformations_row
ns0:spectral_analysis_surfaces_local_deformations
ns0:spectral_analysis_surfaces_local_deformations_row
ns0:spectral_analysis_surfaces_maximum_total_strains
ns0:spectral_analysis_surfaces_maximum_total_strains_row
ns0:spectral_analysis_surfaces_principal_internal_forces
ns0:spectral_analysis_surfaces_principal_internal_forces_row
ns0:spectral_analysis_surfaces_principal_stresses
ns0:spectral_analysis_surfaces_principal_stresses_row
ns0:spectral_analysis_surfaces_principal_total_strains
ns0:spectral_analysis_surfaces_principal_total_strains_row
ns0:stability_analysis_settings
ns0:stability_analysis_settings_analysis_type
ns0:stability_analysis_settings_eigenvalue_method
ns0:stability_analysis_settings_matrix_type
ns0:stability_analysis_settings_stopping_of_load_increasing_result
ns0:stability_incremental_analysis_building_stories_centres_mass_rigidity
ns0:stability_incremental_analysis_building_stories_centres_mass_rigidity_row
ns0:stability_incremental_analysis_building_stories_forces_in_shear_walls
ns0:stability_incremental_analysis_building_stories_forces_in_shear_walls_row
ns0:stability_incremental_analysis_building_stories_forces_in_spandrels
ns0:stability_incremental_analysis_building_stories_forces_in_spandrels_row
ns0:stability_incremental_analysis_building_stories_interstory_drifts
ns0:stability_incremental_analysis_building_stories_interstory_drifts_row
ns0:stability_incremental_analysis_building_stories_story_actions
ns0:stability_incremental_analysis_building_stories_story_actions_row
ns0:stability_incremental_analysis_calculation_diagrams
ns0:stability_incremental_analysis_calculation_diagrams_row
ns0:stability_incremental_analysis_convergence_diagrams
ns0:stability_incremental_analysis_convergence_diagrams_row
ns0:stability_incremental_analysis_line_hinges_deformations
ns0:stability_incremental_analysis_line_hinges_deformations_row
ns0:stability_incremental_analysis_line_hinges_forces
ns0:stability_incremental_analysis_line_hinges_forces_row
ns0:stability_incremental_analysis_lines_slab_wall_connections
ns0:stability_incremental_analysis_lines_slab_wall_connections_row
ns0:stability_incremental_analysis_lines_support_forces
ns0:stability_incremental_analysis_lines_support_forces_row
ns0:stability_incremental_analysis_members_contact_forces
ns0:stability_incremental_analysis_members_contact_forces_row
ns0:stability_incremental_analysis_members_global_deformations
ns0:stability_incremental_analysis_members_global_deformations_row
ns0:stability_incremental_analysis_members_hinge_deformations
ns0:stability_incremental_analysis_members_hinge_deformations_row
ns0:stability_incremental_analysis_members_hinge_forces
ns0:stability_incremental_analysis_members_hinge_forces_row
ns0:stability_incremental_analysis_members_internal_forces
ns0:stability_incremental_analysis_members_internal_forces_by_member_set
ns0:stability_incremental_analysis_members_internal_forces_by_member_set_row
ns0:stability_incremental_analysis_members_internal_forces_by_section
ns0:stability_incremental_analysis_members_internal_forces_by_section_row
ns0:stability_incremental_analysis_members_internal_forces_row
ns0:stability_incremental_analysis_members_local_deformations
ns0:stability_incremental_analysis_members_local_deformations_row
ns0:stability_incremental_analysis_members_local_plastic_deformation_ratios
ns0:stability_incremental_analysis_members_local_plastic_deformation_ratios_row
ns0:stability_incremental_analysis_members_strains
ns0:stability_incremental_analysis_members_strains_row
ns0:stability_incremental_analysis_nodes_deformations
ns0:stability_incremental_analysis_nodes_deformations_row
ns0:stability_incremental_analysis_nodes_support_forces
ns0:stability_incremental_analysis_nodes_support_forces_row
ns0:stability_incremental_analysis_solids_basic_plastic_strains
ns0:stability_incremental_analysis_solids_basic_plastic_strains_row
ns0:stability_incremental_analysis_solids_basic_stresses
ns0:stability_incremental_analysis_solids_basic_stresses_row
ns0:stability_incremental_analysis_solids_basic_total_strains
ns0:stability_incremental_analysis_solids_basic_total_strains_row
ns0:stability_incremental_analysis_solids_deformations
ns0:stability_incremental_analysis_solids_deformations_row
ns0:stability_incremental_analysis_solids_equivalent_plastic_strains
ns0:stability_incremental_analysis_solids_equivalent_plastic_strains_row
ns0:stability_incremental_analysis_solids_equivalent_stresses
ns0:stability_incremental_analysis_solids_equivalent_stresses_row
ns0:stability_incremental_analysis_solids_equivalent_total_strains
ns0:stability_incremental_analysis_solids_equivalent_total_strains_row
ns0:stability_incremental_analysis_solids_gas_quantities
ns0:stability_incremental_analysis_solids_gas_quantities_row
ns0:stability_incremental_analysis_solids_principal_plastic_strains
ns0:stability_incremental_analysis_solids_principal_plastic_strains_row
ns0:stability_incremental_analysis_solids_principal_stresses
ns0:stability_incremental_analysis_solids_principal_stresses_row
ns0:stability_incremental_analysis_solids_principal_total_strains
ns0:stability_incremental_analysis_solids_principal_total_strains_row
ns0:stability_incremental_analysis_summary
ns0:stability_incremental_analysis_summary_row
ns0:stability_incremental_analysis_surfaces_basic_internal_forces
ns0:stability_incremental_analysis_surfaces_basic_internal_forces_row
ns0:stability_incremental_analysis_surfaces_basic_plastic_strains
ns0:stability_incremental_analysis_surfaces_basic_plastic_strains_row
ns0:stability_incremental_analysis_surfaces_basic_stresses
ns0:stability_incremental_analysis_surfaces_basic_stresses_row
ns0:stability_incremental_analysis_surfaces_basic_total_strains
ns0:stability_incremental_analysis_surfaces_basic_total_strains_row
ns0:stability_incremental_analysis_surfaces_contact_stresses
ns0:stability_incremental_analysis_surfaces_contact_stresses_row
ns0:stability_incremental_analysis_surfaces_design_internal_forces
ns0:stability_incremental_analysis_surfaces_design_internal_forces_row
ns0:stability_incremental_analysis_surfaces_elastic_stress_components
ns0:stability_incremental_analysis_surfaces_elastic_stress_components_row
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_bach
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_bach_row
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_mises
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_mises_row
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_rankine_row
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:stability_incremental_analysis_surfaces_equivalent_plastic_strains_tresca_row
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_bach
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_bach_row
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_mises
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_mises_row
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_rankine
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_rankine_row
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_tresca
ns0:stability_incremental_analysis_surfaces_equivalent_stresses_tresca_row
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_bach
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_bach_row
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_mises
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_mises_row
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_rankine
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_rankine_row
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_tresca
ns0:stability_incremental_analysis_surfaces_equivalent_total_strains_tresca_row
ns0:stability_incremental_analysis_surfaces_global_deformations
ns0:stability_incremental_analysis_surfaces_global_deformations_row
ns0:stability_incremental_analysis_surfaces_local_deformations
ns0:stability_incremental_analysis_surfaces_local_deformations_row
ns0:stability_incremental_analysis_surfaces_maximum_plastic_strains
ns0:stability_incremental_analysis_surfaces_maximum_plastic_strains_row
ns0:stability_incremental_analysis_surfaces_maximum_total_strains
ns0:stability_incremental_analysis_surfaces_maximum_total_strains_row
ns0:stability_incremental_analysis_surfaces_principal_internal_forces
ns0:stability_incremental_analysis_surfaces_principal_internal_forces_row
ns0:stability_incremental_analysis_surfaces_principal_plastic_strains
ns0:stability_incremental_analysis_surfaces_principal_plastic_strains_row
ns0:stability_incremental_analysis_surfaces_principal_stresses
ns0:stability_incremental_analysis_surfaces_principal_stresses_row
ns0:stability_incremental_analysis_surfaces_principal_total_strains
ns0:stability_incremental_analysis_surfaces_principal_total_strains_row
ns0:static_analysis_settings
ns0:static_analysis_settings_analysis_type
ns0:static_analysis_settings_assign_reduce_stiffness_enabled
ns0:static_analysis_settings_iterative_method_for_nonlinear_analysis
ns0:static_analysis_settings_method_of_equation_system
ns0:static_analysis_settings_plate_bending_theory
ns0:status_type
ns0:steel_boundary_conditions
ns0:steel_boundary_conditions_definition_type
ns0:steel_boundary_conditions_member_hinges
ns0:steel_boundary_conditions_member_hinges_row
ns0:steel_boundary_conditions_nodal_supports
ns0:steel_boundary_conditions_nodal_supports_row
ns0:steel_boundary_conditions_nodal_supports_support_type
ns0:steel_design_fr_configuration
ns0:steel_design_seismic_configuration
ns0:steel_design_sls_configuration
ns0:steel_design_uls_configuration
ns0:steel_effective_lengths
ns0:steel_effective_lengths_buckling_factor_value_type
ns0:steel_effective_lengths_determination_cb_aisc
ns0:steel_effective_lengths_determination_cb_csa
ns0:steel_effective_lengths_determination_cb_nbr
ns0:steel_effective_lengths_determination_mcr_aisc
ns0:steel_effective_lengths_determination_mcr_bs5
ns0:steel_effective_lengths_determination_mcr_csa
ns0:steel_effective_lengths_determination_mcr_europe
ns0:steel_effective_lengths_determination_mcr_gb50
ns0:steel_effective_lengths_determination_mcr_is800
ns0:steel_effective_lengths_determination_mcr_nbr8800
ns0:steel_effective_lengths_determination_mcr_sia263
ns0:steel_effective_lengths_determination_of_elastic_critical_stress_aisi
ns0:steel_effective_lengths_factors
ns0:steel_effective_lengths_factors_row
ns0:steel_effective_lengths_lengths
ns0:steel_effective_lengths_lengths_row
ns0:steel_effective_lengths_member_type
ns0:steel_effective_lengths_member_type_yy
ns0:steel_effective_lengths_member_type_zz
ns0:steel_effective_lengths_modification_factor_cb_aisi
ns0:steel_effective_lengths_moment_modification_restrained_segments_as
ns0:steel_effective_lengths_moment_modification_unrestrained_segments_as
ns0:steel_effective_lengths_nodal_supports
ns0:steel_effective_lengths_nodal_supports_row
ns0:steel_effective_lengths_slenderness_reduction_restrained_segments_as
ns0:steel_effective_lengths_slenderness_reduction_unrestrained_segments_as
ns0:steel_effective_lengths_stability_import_data_factors
ns0:steel_effective_lengths_stability_import_data_factors_row
ns0:steel_effective_lengths_stability_import_data_lengths
ns0:steel_effective_lengths_stability_import_data_lengths_row
ns0:steel_effective_lengths_standard_of_effective_lengths
ns0:steel_member_local_section_reduction
ns0:steel_member_local_section_reduction_components
ns0:steel_member_local_section_reduction_components_reduction_type
ns0:steel_member_local_section_reduction_components_row
ns0:stiffener_type
ns0:stirrup_bar_size_type
ns0:stirrup_layout_rule_type
ns0:stirrup_type
ns0:strain_type
ns0:string_and_boolean_pair
ns0:string_and_boolean_pair_array
ns0:structure_modification
ns0:structure_modification_modify_stiffnesses_line_hinges_table
ns0:structure_modification_modify_stiffnesses_line_hinges_table_row
ns0:structure_modification_modify_stiffnesses_line_supports_table
ns0:structure_modification_modify_stiffnesses_line_supports_table_row
ns0:structure_modification_modify_stiffnesses_material_table
ns0:structure_modification_modify_stiffnesses_material_table_row
ns0:structure_modification_modify_stiffnesses_member_hinges_table
ns0:structure_modification_modify_stiffnesses_member_hinges_table_row
ns0:structure_modification_modify_stiffnesses_member_supports_table
ns0:structure_modification_modify_stiffnesses_member_supports_table_row
ns0:structure_modification_modify_stiffnesses_member_table
ns0:structure_modification_modify_stiffnesses_member_table_row
ns0:structure_modification_modify_stiffnesses_nodal_supports_table
ns0:structure_modification_modify_stiffnesses_nodal_supports_table_row
ns0:structure_modification_modify_stiffnesses_section_table
ns0:structure_modification_modify_stiffnesses_section_table_row
ns0:structure_modification_modify_stiffnesses_surface_supports_table
ns0:structure_modification_modify_stiffnesses_surface_supports_table_row
ns0:structure_modification_modify_stiffnesses_surface_table
ns0:structure_modification_modify_stiffnesses_surface_table_row
ns0:summary
ns0:summary_row
ns0:support_in_y_type
ns0:support_type
ns0:surface
ns0:surface_deflection_check_displacement_reference
ns0:surface_deflection_check_reference_length_z_definition_type
ns0:surface_deflection_check_surface_type
ns0:surface_eccentricity
ns0:surface_eccentricity_thickness_alignment
ns0:surface_eccentricity_transverse_offset_alignment
ns0:surface_eccentricity_transverse_offset_reference_type
ns0:surface_geometry
ns0:surface_grid_type
ns0:surface_imperfection
ns0:surface_imperfection_definition_type
ns0:surface_imperfection_imperfection_direction
ns0:surface_input_axes_axis
ns0:surface_input_axes_rotation_specification_type
ns0:surface_line_hinges_table
ns0:surface_line_hinges_table_row
ns0:surface_load
ns0:surface_load_axis_definition_axis
ns0:surface_load_axis_definition_axis_orientation
ns0:surface_load_axis_definition_type
ns0:surface_load_distribution
ns0:surface_load_form_finding_calculation_method
ns0:surface_load_form_finding_definition
ns0:surface_load_form_finding_sag_related_to_object
ns0:surface_load_load_direction
ns0:surface_load_load_distribution
ns0:surface_load_load_type
ns0:surface_load_transfer_direction
ns0:surface_load_varying_load_parameters
ns0:surface_load_varying_load_parameters_row
ns0:surface_mesh_refinement
ns0:surface_meshing_type
ns0:surface_nurbs_control_points
ns0:surface_nurbs_control_points_row
ns0:surface_quadrangle_preferable_shape
ns0:surface_reinforcement
ns0:surface_reinforcement_additional_rebar_size_auto_maximum
ns0:surface_reinforcement_additional_rebar_size_auto_minimum
ns0:surface_reinforcement_additional_rebar_size_calculated
ns0:surface_reinforcement_design_reinforcement_direction
ns0:surface_reinforcement_location_rectangle_type
ns0:surface_reinforcement_location_type
ns0:surface_reinforcement_mesh_product_range
ns0:surface_reinforcement_mesh_shape
ns0:surface_reinforcement_polygon_points
ns0:surface_reinforcement_polygon_points_row
ns0:surface_reinforcement_projection_plane
ns0:surface_reinforcement_rebar_size_auto_maximum
ns0:surface_reinforcement_rebar_size_auto_minimum
ns0:surface_reinforcement_rebar_size_calculated
ns0:surface_reinforcement_reinforcement_direction_type
ns0:surface_reinforcement_reinforcement_type
ns0:surface_reinforcement_stirrup_size_auto_maximum
ns0:surface_reinforcement_stirrup_size_auto_minimum
ns0:surface_reinforcement_stirrup_size_calculated
ns0:surface_release
ns0:surface_release_release_location
ns0:surface_release_type
ns0:surface_release_type_diagram_along_x_color_table
ns0:surface_release_type_diagram_along_x_color_table_row
ns0:surface_release_type_diagram_along_x_end
ns0:surface_release_type_diagram_along_x_start
ns0:surface_release_type_diagram_along_x_table
ns0:surface_release_type_diagram_along_x_table_row
ns0:surface_release_type_diagram_along_y_color_table
ns0:surface_release_type_diagram_along_y_color_table_row
ns0:surface_release_type_diagram_along_y_end
ns0:surface_release_type_diagram_along_y_start
ns0:surface_release_type_diagram_along_y_table
ns0:surface_release_type_diagram_along_y_table_row
ns0:surface_release_type_diagram_along_z_color_table
ns0:surface_release_type_diagram_along_z_color_table_row
ns0:surface_release_type_diagram_along_z_end
ns0:surface_release_type_diagram_along_z_start
ns0:surface_release_type_diagram_along_z_table
ns0:surface_release_type_diagram_along_z_table_row
ns0:surface_release_type_local_axis_system_type
ns0:surface_release_type_translational_release_u_x_nonlinearity
ns0:surface_release_type_translational_release_u_y_nonlinearity
ns0:surface_release_type_translational_release_u_z_nonlinearity
ns0:surface_result_axes_rotation_specification_type
ns0:surface_results_adjustment
ns0:surface_results_adjustment_adjustment_type_in_direction_u
ns0:surface_results_adjustment_adjustment_type_in_direction_v
ns0:surface_results_adjustment_polygon_points
ns0:surface_results_adjustment_polygon_points_row
ns0:surface_results_adjustment_projection_in_direction_type
ns0:surface_results_adjustment_results_to_adjust_contact_stress_area
ns0:surface_results_adjustment_results_to_adjust_contact_stress_area_row
ns0:surface_results_adjustment_results_to_adjust_in_direction_u_and_child_items
ns0:surface_results_adjustment_results_to_adjust_in_direction_u_row
ns0:surface_results_adjustment_results_to_adjust_in_direction_v_and_child_items
ns0:surface_results_adjustment_results_to_adjust_in_direction_v_row
ns0:surface_results_adjustment_results_to_adjust_zero_and_child_items
ns0:surface_results_adjustment_results_to_adjust_zero_row
ns0:surface_results_adjustment_shape
ns0:surface_set
ns0:surface_set_deflection_check_displacement_reference
ns0:surface_set_deflection_check_reference_length_z_definition_type
ns0:surface_set_deflection_check_surface_type
ns0:surface_set_imperfection
ns0:surface_set_imperfection_definition_type
ns0:surface_set_imperfection_imperfection_direction
ns0:surface_set_load
ns0:surface_set_load_axis_definition_axis
ns0:surface_set_load_axis_definition_axis_orientation
ns0:surface_set_load_axis_definition_type
ns0:surface_set_load_form_finding_calculation_method
ns0:surface_set_load_form_finding_definition
ns0:surface_set_load_form_finding_sag_related_to_object
ns0:surface_set_load_load_direction
ns0:surface_set_load_load_distribution
ns0:surface_set_load_load_type
ns0:surface_set_load_varying_load_parameters
ns0:surface_set_load_varying_load_parameters_row
ns0:surface_set_set_type
ns0:surface_set_surface_reinforcement_table_row
ns0:surface_stiffness_modification
ns0:surface_stiffness_modification_concrete_stuctures_component_type
ns0:surface_stiffness_modification_type
ns0:surface_support
ns0:surface_support_negative_nonlinearity_type
ns0:surface_support_nonlinearity
ns0:surface_support_positive_nonlinearity_type
ns0:surface_surface_reinforcement_table_row
ns0:surface_type
ns0:surfaces_basic_internal_forces
ns0:surfaces_basic_internal_forces_row
ns0:surfaces_basic_plastic_strains
ns0:surfaces_basic_plastic_strains_row
ns0:surfaces_basic_stresses
ns0:surfaces_basic_stresses_row
ns0:surfaces_basic_total_strains
ns0:surfaces_basic_total_strains_row
ns0:surfaces_by_eigenvector
ns0:surfaces_by_eigenvector_row
ns0:surfaces_contact
ns0:surfaces_contact_stresses
ns0:surfaces_contact_stresses_row
ns0:surfaces_contact_type
ns0:surfaces_contact_type_elastic_friction_type
ns0:surfaces_contact_type_parallel_to_surface
ns0:surfaces_contact_type_perpendicular_to_surface
ns0:surfaces_contact_type_rigid_friction_type
ns0:surfaces_design_internal_forces
ns0:surfaces_design_internal_forces_row
ns0:surfaces_elastic_stress_components
ns0:surfaces_elastic_stress_components_row
ns0:surfaces_equivalent_plastic_strains_bach
ns0:surfaces_equivalent_plastic_strains_bach_row
ns0:surfaces_equivalent_plastic_strains_mises
ns0:surfaces_equivalent_plastic_strains_mises_row
ns0:surfaces_equivalent_plastic_strains_rankine
ns0:surfaces_equivalent_plastic_strains_rankine_row
ns0:surfaces_equivalent_plastic_strains_tresca
ns0:surfaces_equivalent_plastic_strains_tresca_row
ns0:surfaces_equivalent_stresses_bach
ns0:surfaces_equivalent_stresses_bach_row
ns0:surfaces_equivalent_stresses_mises
ns0:surfaces_equivalent_stresses_mises_row
ns0:surfaces_equivalent_stresses_rankine
ns0:surfaces_equivalent_stresses_rankine_row
ns0:surfaces_equivalent_stresses_tresca
ns0:surfaces_equivalent_stresses_tresca_row
ns0:surfaces_equivalent_total_strains_bach
ns0:surfaces_equivalent_total_strains_bach_row
ns0:surfaces_equivalent_total_strains_mises
ns0:surfaces_equivalent_total_strains_mises_row
ns0:surfaces_equivalent_total_strains_rankine
ns0:surfaces_equivalent_total_strains_rankine_row
ns0:surfaces_equivalent_total_strains_tresca
ns0:surfaces_equivalent_total_strains_tresca_row
ns0:surfaces_global_deformations
ns0:surfaces_global_deformations_row
ns0:surfaces_local_deformations
ns0:surfaces_local_deformations_row
ns0:surfaces_maximum_plastic_strains
ns0:surfaces_maximum_plastic_strains_row
ns0:surfaces_maximum_total_strains
ns0:surfaces_maximum_total_strains_row
ns0:surfaces_principal_internal_forces
ns0:surfaces_principal_internal_forces_row
ns0:surfaces_principal_plastic_strains
ns0:surfaces_principal_plastic_strains_row
ns0:surfaces_principal_stresses
ns0:surfaces_principal_stresses_row
ns0:surfaces_principal_total_strains
ns0:surfaces_principal_total_strains_row
ns0:table_column
ns0:table_model_content
ns0:table_model_content_row
ns0:table_model_content_row_section
ns0:table_model_content_row_section_element
ns0:table_model_content_row_section_elements
ns0:terrain
ns0:terrain_terrain_table
ns0:terrain_terrain_table_row
ns0:terrain_type
ns0:thickness
ns0:thickness_direction
ns0:thickness_function_data_coefficients
ns0:thickness_function_data_coefficients_row
ns0:thickness_function_data_function_type
ns0:thickness_integration_method_type
ns0:thickness_layers_reference_table
ns0:thickness_layers_reference_table_row
ns0:thickness_orthotropy_type
ns0:thickness_shape_orthotropy_self_weight_definition_type
ns0:thickness_stiffness_matrix_self_weight_definition_type
ns0:thickness_timber_frame_wall_blockings_distribution
ns0:thickness_timber_frame_wall_framing_members_connector_dimension_type
ns0:thickness_timber_frame_wall_framing_members_connector_type
ns0:thickness_timber_frame_wall_vertical_studs_connector_dimension_type
ns0:thickness_timber_frame_wall_vertical_studs_connector_type
ns0:thickness_timber_frame_wall_vertical_studs_distribution
ns0:thickness_timber_frame_wall_vertical_studs_spacing_table
ns0:thickness_timber_frame_wall_vertical_studs_spacing_table_row
ns0:thickness_time_dependent_properties
ns0:thickness_time_dependent_properties_and_child_items
ns0:thickness_time_dependent_properties_row
ns0:thickness_type
ns0:timber_design_fr_configuration
ns0:timber_design_sls_configuration
ns0:timber_design_uls_configuration
ns0:timber_effective_lengths
ns0:timber_effective_lengths_buckling_factor_value_type
ns0:timber_effective_lengths_determination_type
ns0:timber_effective_lengths_factors
ns0:timber_effective_lengths_factors_row
ns0:timber_effective_lengths_fire_design_factors
ns0:timber_effective_lengths_fire_design_factors_row
ns0:timber_effective_lengths_fire_design_lengths
ns0:timber_effective_lengths_fire_design_lengths_row
ns0:timber_effective_lengths_fire_design_nodal_supports
ns0:timber_effective_lengths_fire_design_nodal_supports_row
ns0:timber_effective_lengths_lengths
ns0:timber_effective_lengths_lengths_row
ns0:timber_effective_lengths_nodal_supports
ns0:timber_effective_lengths_nodal_supports_row
ns0:timber_effective_lengths_stability_import_data_factors
ns0:timber_effective_lengths_stability_import_data_factors_row
ns0:timber_effective_lengths_stability_import_data_lengths
ns0:timber_effective_lengths_stability_import_data_lengths_row
ns0:timber_member_local_section_reduction
ns0:timber_member_local_section_reduction_components
ns0:timber_member_local_section_reduction_components_reduction_type
ns0:timber_member_local_section_reduction_components_row
ns0:timber_moisture_class
ns0:timber_moisture_class_moisture_class
ns0:timber_service_class
ns0:timber_service_class_service_class
ns0:timber_service_conditions
ns0:timber_service_conditions_moisture_service_condition
ns0:timber_service_conditions_temperature
ns0:timber_service_conditions_treatment
ns0:time_history_analysis_building_stories_centres_mass_rigidity
ns0:time_history_analysis_building_stories_centres_mass_rigidity_row
ns0:time_history_analysis_building_stories_forces_in_shear_walls
ns0:time_history_analysis_building_stories_forces_in_shear_walls_row
ns0:time_history_analysis_building_stories_forces_in_spandrels
ns0:time_history_analysis_building_stories_forces_in_spandrels_row
ns0:time_history_analysis_building_stories_interstory_drifts
ns0:time_history_analysis_building_stories_interstory_drifts_row
ns0:time_history_analysis_building_stories_story_actions
ns0:time_history_analysis_building_stories_story_actions_row
ns0:time_history_analysis_calculation_diagrams
ns0:time_history_analysis_calculation_diagrams_row
ns0:time_history_analysis_convergence_diagrams
ns0:time_history_analysis_convergence_diagrams_row
ns0:time_history_analysis_line_hinges_deformations
ns0:time_history_analysis_line_hinges_deformations_row
ns0:time_history_analysis_line_hinges_forces
ns0:time_history_analysis_line_hinges_forces_row
ns0:time_history_analysis_lines_slab_wall_connections
ns0:time_history_analysis_lines_slab_wall_connections_row
ns0:time_history_analysis_lines_support_forces
ns0:time_history_analysis_lines_support_forces_row
ns0:time_history_analysis_members_contact_forces
ns0:time_history_analysis_members_contact_forces_row
ns0:time_history_analysis_members_global_deformations
ns0:time_history_analysis_members_global_deformations_row
ns0:time_history_analysis_members_hinge_deformations
ns0:time_history_analysis_members_hinge_deformations_row
ns0:time_history_analysis_members_hinge_forces
ns0:time_history_analysis_members_hinge_forces_row
ns0:time_history_analysis_members_internal_forces
ns0:time_history_analysis_members_internal_forces_by_member_set
ns0:time_history_analysis_members_internal_forces_by_member_set_row
ns0:time_history_analysis_members_internal_forces_by_section
ns0:time_history_analysis_members_internal_forces_by_section_row
ns0:time_history_analysis_members_internal_forces_row
ns0:time_history_analysis_members_local_deformations
ns0:time_history_analysis_members_local_deformations_row
ns0:time_history_analysis_members_local_plastic_deformation_ratios
ns0:time_history_analysis_members_local_plastic_deformation_ratios_row
ns0:time_history_analysis_members_strains
ns0:time_history_analysis_members_strains_row
ns0:time_history_analysis_nodes_accelerations
ns0:time_history_analysis_nodes_accelerations_row
ns0:time_history_analysis_nodes_deformations
ns0:time_history_analysis_nodes_deformations_row
ns0:time_history_analysis_nodes_support_forces
ns0:time_history_analysis_nodes_support_forces_row
ns0:time_history_analysis_nodes_velocities
ns0:time_history_analysis_nodes_velocities_row
ns0:time_history_analysis_solids_basic_plastic_strains
ns0:time_history_analysis_solids_basic_plastic_strains_row
ns0:time_history_analysis_solids_basic_stresses
ns0:time_history_analysis_solids_basic_stresses_row
ns0:time_history_analysis_solids_basic_total_strains
ns0:time_history_analysis_solids_basic_total_strains_row
ns0:time_history_analysis_solids_deformations
ns0:time_history_analysis_solids_deformations_row
ns0:time_history_analysis_solids_equivalent_plastic_strains
ns0:time_history_analysis_solids_equivalent_plastic_strains_row
ns0:time_history_analysis_solids_equivalent_stresses
ns0:time_history_analysis_solids_equivalent_stresses_row
ns0:time_history_analysis_solids_equivalent_total_strains
ns0:time_history_analysis_solids_equivalent_total_strains_row
ns0:time_history_analysis_solids_gas_quantities
ns0:time_history_analysis_solids_gas_quantities_row
ns0:time_history_analysis_solids_principal_plastic_strains
ns0:time_history_analysis_solids_principal_plastic_strains_row
ns0:time_history_analysis_solids_principal_stresses
ns0:time_history_analysis_solids_principal_stresses_row
ns0:time_history_analysis_solids_principal_total_strains
ns0:time_history_analysis_solids_principal_total_strains_row
ns0:time_history_analysis_summary
ns0:time_history_analysis_summary_row
ns0:time_history_analysis_surfaces_basic_internal_forces
ns0:time_history_analysis_surfaces_basic_internal_forces_row
ns0:time_history_analysis_surfaces_basic_plastic_strains
ns0:time_history_analysis_surfaces_basic_plastic_strains_row
ns0:time_history_analysis_surfaces_basic_stresses
ns0:time_history_analysis_surfaces_basic_stresses_row
ns0:time_history_analysis_surfaces_basic_total_strains
ns0:time_history_analysis_surfaces_basic_total_strains_row
ns0:time_history_analysis_surfaces_contact_stresses
ns0:time_history_analysis_surfaces_contact_stresses_row
ns0:time_history_analysis_surfaces_design_internal_forces
ns0:time_history_analysis_surfaces_design_internal_forces_row
ns0:time_history_analysis_surfaces_elastic_stress_components
ns0:time_history_analysis_surfaces_elastic_stress_components_row
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_bach
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_bach_row
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_mises
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_mises_row
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_rankine
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_rankine_row
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_tresca
ns0:time_history_analysis_surfaces_equivalent_plastic_strains_tresca_row
ns0:time_history_analysis_surfaces_equivalent_stresses_bach
ns0:time_history_analysis_surfaces_equivalent_stresses_bach_row
ns0:time_history_analysis_surfaces_equivalent_stresses_mises
ns0:time_history_analysis_surfaces_equivalent_stresses_mises_row
ns0:time_history_analysis_surfaces_equivalent_stresses_rankine
ns0:time_history_analysis_surfaces_equivalent_stresses_rankine_row
ns0:time_history_analysis_surfaces_equivalent_stresses_tresca
ns0:time_history_analysis_surfaces_equivalent_stresses_tresca_row
ns0:time_history_analysis_surfaces_equivalent_total_strains_bach
ns0:time_history_analysis_surfaces_equivalent_total_strains_bach_row
ns0:time_history_analysis_surfaces_equivalent_total_strains_mises
ns0:time_history_analysis_surfaces_equivalent_total_strains_mises_row
ns0:time_history_analysis_surfaces_equivalent_total_strains_rankine
ns0:time_history_analysis_surfaces_equivalent_total_strains_rankine_row
ns0:time_history_analysis_surfaces_equivalent_total_strains_tresca
ns0:time_history_analysis_surfaces_equivalent_total_strains_tresca_row
ns0:time_history_analysis_surfaces_global_deformations
ns0:time_history_analysis_surfaces_global_deformations_row
ns0:time_history_analysis_surfaces_local_deformations
ns0:time_history_analysis_surfaces_local_deformations_row
ns0:time_history_analysis_surfaces_maximum_plastic_strains
ns0:time_history_analysis_surfaces_maximum_plastic_strains_row
ns0:time_history_analysis_surfaces_maximum_total_strains
ns0:time_history_analysis_surfaces_maximum_total_strains_row
ns0:time_history_analysis_surfaces_principal_internal_forces
ns0:time_history_analysis_surfaces_principal_internal_forces_row
ns0:time_history_analysis_surfaces_principal_plastic_strains
ns0:time_history_analysis_surfaces_principal_plastic_strains_row
ns0:time_history_analysis_surfaces_principal_stresses
ns0:time_history_analysis_surfaces_principal_stresses_row
ns0:time_history_analysis_surfaces_principal_total_strains
ns0:time_history_analysis_surfaces_principal_total_strains_row
ns0:unite_nodes_and_supports
ns0:unite_nodes_and_supportsResponse
ns0:use_detailed_member_results
ns0:use_detailed_member_resultsResponse
ns0:variant
ns0:vector_3d
ns0:vertical_alignment
ns0:visual_object
ns0:visual_object_insert_point
ns0:visual_object_rotation_angles_sequence
ns0:weld_type
ns0:windSimulationMeshConfig
ns0:windSimulationMeshConfig_windsimulation_mesh_config_value_determine_details_by_type
ns0:windSimulationMeshConfig_windsimulation_mesh_config_value_small_openings_closure_type_type
ns0:wind_profile
ns0:wind_profile_definition_type
ns0:wind_profile_load_zone
ns0:wind_profile_type
ns0:wind_profile_user_defined_wind_profile
ns0:wind_profile_user_defined_wind_profile_row
ns0:wind_simulation
ns0:wind_simulation_analysis_settings
ns0:wind_simulation_analysis_settings_member_load_distribution
ns0:wind_simulation_analysis_settings_mesh_refinement_type
ns0:wind_simulation_analysis_settings_numerical_solver
ns0:wind_simulation_analysis_settings_simulation_type
ns0:wind_simulation_analysis_settings_turbulence_model_type
ns0:wind_simulation_analysis_settings_turbulence_model_type_for_initial_condition
ns0:wind_simulation_generate_into_load_cases
ns0:wind_simulation_generate_into_load_cases_row
ns0:wind_simulation_individual_factors_of_selected_objects_table
ns0:wind_simulation_individual_factors_of_selected_objects_table_row
ns0:wind_simulation_initial_state_definition_type
ns0:wind_simulation_type
ns0:wind_simulation_wind_direction_type
ns0:z_axis_reference_type
```
