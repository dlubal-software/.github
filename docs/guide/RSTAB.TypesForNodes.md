# Types For Nodes

Go to *[[source]](https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/TypesForNodes)*

## NodalSupport 


### setNodalSupportConditions(clientObject, C_u_X, C_u_Y, C_u_Z, C_phi_X, C_phi_Y, C_phi_Z)

Sets Nodal Support Conditions


* **Parameters**

    
    * **clientObject** – Client Model Object | Nodal Support


    * **C_u_X,Y,Z** (*float*) – Translational Support Conditions in Respected Direction


    * **C_phi_X,Y,Z** (*float*) – Rotational Support Conditions about Respected Axis


* **Returns**

    Initialized Client Model Object | Nodal Support


* **Return type**

    clientObject



### NodalSupport(no, nodes_no, support, comment, params, model)

Nodal Support


* **Parameters**

    
    * **no** (*int*) – Nodal Support Tag


    * **nodes_no** (*str*) – Assigned to Nodes


    * **support** (*enum* or *list*) – Support Definition List


    * **comment** (*str*, *optional*) – Comment


    * **params** (*dict*, *optional*) – Any WS Parameter relevant to the object and its value in form of a dictionary


    * **model** (*RSTAB Class*, *optional*) – Model to be edited


* **Raises**

    **ValueError** – ‘Support parameter can be enum or list with 6 items.’

