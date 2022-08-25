# How to query the model

To query the model you start with initializing the connection. This can be done via `Model(False, "model_name")`. Then use any getter you need to retrieve the data. Our unit tests (RFEM_Python_Client/UnitTests/) are good examples of setting values and getting them back for checking correctness. But in the tests we use currently available (active) model, that is why you see just `Model()` there.

If you want to see all currently available web service model functions and types just `print(Model.clientModel)`. This is the easiest way SUDS module shows everything it recognizes. Even easier is to look at methods and types for [model](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Model-Methods-and-Types) and [application](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Application-Methods-and-Types) in our Wiki, but it can be outdated with the new development, meaning new functions will be added.

Whole example:

```js
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