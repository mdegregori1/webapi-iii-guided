# Middleware Notes

## Jargon 
_"Refactoring"_

## Middleware

There are two types 

- normal
- error handling

Can come from different sources: 

- built-in: included with express
- third party: need to be installed seperately 
- custom: we write it!

We can use it: 

- globally: it runs on every request to the endpoint
- locally: is only applied to a specific endpoint or group of endpoints

Middleware can:

- inspect the 'request' and 'response' objects
- make changes to the 'request' and 'response' objects
- move the request or response object to the next middleware in the queue
- stop the request and send back a response to the client

** order matters! **