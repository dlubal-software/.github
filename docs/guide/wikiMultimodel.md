# How to edit multiple models in one script

If your project requires editing multiple models you can do it. There are 3 options to choose from:

1. Default option is the same as it was from beginning. Initialize Model() once and you don't have to care about it at all during execution. That corresponds to the original idea of the Client.
2. If you want to do tens or hundreds of operations in one model and then switch to another, you can do it easily by calling Model() before switching it. This is executed in one session i.e. as fast as possible.
3. Create instance of a Model() and use this as method parameter to apply changes to specific model. This comes handy when making small amount of changes between a lot of models.

## Examples

Ad 1.

```js
Model(True, "TestModel") <-- create new model
Material(1,'S235') <-- assign material to TestModel
Material(2,'S235') <-- assign material to TestModel
```

Ad 2.

```js
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

```js
model1 = Model(True, 'TestModel1') <-- create new model
Material(1,'S235', model = model1) <-- assign to TestModel1
Material(2,'S235', model = model1) <-- assign to TestModel1

model2 = Model(True, 'TestModel2') <-- create new model
Material(3,'S275', model = model2) <-- assign to TestModel2

Material(4,'S235', model = model1) <-- assign to TestModel1

Material(5,'S275', model = model2) <-- assign to TestModel2
```