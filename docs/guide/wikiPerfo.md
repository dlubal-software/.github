# Let's talk performance

Here we would like to address some questions and issues regarding performance that came up during the development. These informations are suitable for experienced developers and curious users.

We use SOAP package called SUDS to be able to communicate with RFEM. This was chosen for many good reasons. Believe that we saw the Zeep and SUDS is simply better for our usage. The SUDS makes new connection with any request and terminates it immediately. That leeds to poor performance and the connection is apparent by RFEM 'flickering' going from locked(*) state to unlocked many times over. 

## Persistent connection 
To shorten the response the first step is to create persistent conection. SUDS enable us to create such connection by using [requests](https://pypi.org/project/requests/) and [suds_requests](https://pypi.org/project/suds_requests/)(**). Connection pool in HTTPAdapter is set to 1, then mounted to session and as RequestsTransport object passed to SUDS Client (used to access the model) as transport parameter.
This speeds up the proces 3 times. You can find the implementation in [RFEM\initModel.py](https://github.com/Dlubal-Software/RFEM_Python_Client/blob/main/RFEM/initModel.py#line30:~:text=%23%20Persistent%20connection).

## Asynchronous execution 
You may be familiar with the concept of asynchronous execution and well known libraries [asyncio](https://pypi.org/project/asyncio/) and [aiohttp](https://pypi.org/project/aiohttp/). Those should enable to create async loop and send the requests to server as quickly as possible. All in one connection, using one thread, just awaiting the callbacks. Which is exactly the thing that slows the execution. Don't get us wrong, we tried to implement it, but neither asyncio or async-suds (SUDS based on asyncio) wants to work here. To add to the trouble, we think that it is not much usefull feature. Large number of the executions are order dependent anyway. RFEM can't create line if there is one point missing. So if the order is the same but client doesn't have to wait for individual responces, it could be utilized. Anyway, if you know how to speedup the process, any contributions are welcomed.

(*) The application is locked to avoid ambiguity during connection.

(**) Author: Jason Michalski, email: armooo@armooo.net