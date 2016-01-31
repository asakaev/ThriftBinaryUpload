# ThriftBinaryUpload

Dummy service that allow to upload binary file.

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
