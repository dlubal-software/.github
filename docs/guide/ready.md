# Your Journey with Python

You journey with our RFEM Python Client should start here especially if you are beginner or intermediate when it comes to Python scripting. Here we describe the basic structure, syntax and commands. 

If you want to skip this step by step guide just take a look at our examples. These will provide everything needed. Feel free to reuse any part that holds value to your task.

### Structure ###
The client structure is designed to allow the simplest possible setting of objects and their parameters very much simmilar to RFEM both in structure and parameters. Start with creating the model. Then any RFEM object and type can be set. When everything is set the model can be calculated, exported or saved. I would not recommend to create optimization tasks because this can be done with better efficiency via Optimization and Cost Add-on.

### Syntax ###
First start with import of relevat modules.

```py
from RFEM.initModel import Model
from RFEM.BasicObjects import Material
from RFEM.BasicObjects import Line
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

### Commands ###
In the next pages of this documentation you can find all of our Python classes and methods together with description. These are here to make it easy and organized. However if you consider yourself experienced enough to work directly with Web Service functions or just looking for that specific one, then you'll appreciate our two wiki pages summarizing all accesible [application](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Application-Methods-and-Types) and [model](https://github.com/Dlubal-Software/RFEM_Python_Client/wiki/WS-Model-Methods-and-Types) functions.

