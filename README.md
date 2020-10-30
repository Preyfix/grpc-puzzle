# grpc-puzzle

A gRPC server has been deployed to GCP on below host address and port. Given the address and proto file in this repo, figure out the FinalSecret!

host = grpc-puzzle-pvufxpciqa-lz.a.run.app

port = 443

To get started faster, seek inspiration in these example gRPC projects:

Java: https://github.com/Preyfix/grpc-lab

Go/Ruby/Python: https://github.com/jayway/sthlm-kday-gRPC

# Solution

## Dependencies

Requires Python 3 and venv (probably included in your python 3 installation).

Run the init target in the makefile. It will create a virtual environment and install all dependencies in that environment.

```
make init
```

To active the virtual environment, source venv/bin/activate.

```
source venv/bin/activate
```

## Run

```
python -m puzzle
```
