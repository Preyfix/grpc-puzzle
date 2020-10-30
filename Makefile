SHELL=/bin/bash

PROTO_DIR=.
PROTO_OUT_DIR=puzzle/grpc_puzzle

proto:
	mkdir -p $(PROTO_OUT_DIR); \
	source venv/bin/activate; \
	python -m grpc_tools.protoc -I $(PROTO_DIR) --python_out=$(PROTO_OUT_DIR) --grpc_python_out=$(PROTO_OUT_DIR) $(PROTO_DIR)/*.proto

freeze:
	@# The grep part is a workaround to get rid of pkg-resources==0.0.0 when running on Ubuntu
	pip freeze | grep -v "pkg-resources" > requirements.txt

init:
	python3 -m venv venv
	source venv/bin/activate && pip install --upgrade pip && pip install -r requirements.txt

