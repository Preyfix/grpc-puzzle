open https://grpc.io/docs/languages/node/quickstart/

npm install -g grpc-tools

grpc_tools_node_protoc \
 --js_out=import_style=commonjs,binary:./static_codegen/ \
 --grpc_out=./static_codegen \
 --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` grpc-puzzle.proto

npm i -S google-protobuf grpc

npm i -g nodemon
nodemon main.js

> edit main.js

## Imporant note

```
$ node --version
v14.5.0

$ npm --version
6.14.5

$ protoc --version
libprotoc 3.11.1

$ grpc_tools_node_protoc --version
libprotoc 3.11.4
```

The node repl does _not_ work with grpc. Some deprecated api is being used, which is not only deprecated but missing in the repl.

```
> (node:38261) [DEP0097] DeprecationWarning: Using a domain property in MakeCallback is deprecated. Use the async_context variant of MakeCallback or the AsyncResource class instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Uncaught TypeError: domain.enter is not a function
    at topLevelDomainCallback (domain.js:137:12)
    at callbackTrampoline (internal/async_hooks.js:121:14)
```
