



git clone https://github.com/Preyfix/grpc-puzzle.git

open https://grpc.io/docs/languages/go/quickstart/

export GO111MODULE=on  # Enable module mode
go get google.golang.org/protobuf/cmd/protoc-gen-go \
  google.golang.org/grpc/cmd/protoc-gen-go-grpc

export PATH="$PATH:$(go env GOPATH)/bin"


protoc --go_out=goexample --go_opt=paths=source_relative \
    --go-grpc_out=goexample --go-grpc_opt=paths=source_relative \
    grpc-puzzle.proto

go run ./goclient/main.go
