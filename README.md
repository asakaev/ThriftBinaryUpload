# ThriftBinaryUpload

Dummy service that allow to upload binary file.

### TJSONProtocol and TBinaryProtocol
* TJSONProtocol fails on binary data over http (should be base64 string).
* TJSONProtocol is OK with binary data over sockets.
* TBinaryProtocol is OK for http and sockets.

### Build
```
thrift -r --gen js:node thrift-interface/dummy.thrift
npm i
```

## Run over sockets
```
node server.js
node client.js
```

## Run over http
```
node server_http.js
node client_http.js
```

![ThriftBinaryUpload](https://raw.githubusercontent.com/tematema/ThriftBinaryUpload/master/image.jpg)
