
from .grpc_puzzle.grpc_puzzle_pb2_grpc import PuzzleStub
from .grpc_puzzle.grpc_puzzle_pb2 import YourName, ClueOne, ClueTwo, ClueThree, ClueFour, Key

import grpc


def start(host, credentials):
    with grpc.secure_channel(host, credentials) as channel:
        stub = PuzzleStub(channel)
        response = stub.StartHere(YourName(your_name="Henrik"))
        print(f"Start response:\n {response}")
        return response.clue


def endpointOne(host, credentials, clueOne):
    with grpc.secure_channel(host, credentials) as channel:
        stub = PuzzleStub(channel)
        response = stub.endpointOne(ClueOne(clue=clueOne))
        print(f"Clue one response:\n {response}")
        return response.clue


def endpointTwo(host, credentials, clueTwo):
    with grpc.secure_channel(host, credentials) as channel:
        stub = PuzzleStub(channel)
        response = stub.endpointTwo(ClueTwo(clue=clueTwo))
        print(f"Clue two response:\n {response}")
        return response.clue


def endpointThree(host, credentials, clueThree):
    with grpc.secure_channel(host, credentials) as channel:
        stub = PuzzleStub(channel)
        response = stub.endpointThree(ClueThree(clue=clueThree))
        print(f"Clue three response:\n {response}")
        return response.clue


def solvePuzzle(host, credentials, key):
    with grpc.secure_channel(host, credentials) as channel:
        stub = PuzzleStub(channel)
        response = stub.SolvePuzzle(Key(key=key))
        print(f"Solve puzzle response:\n {response}")
        return response.final_secret


def inferKeyLength(*clues):
    length = 0
    for clue in clues:
        if (len(clue) > length):
            length = len(clue)
    return length


def solveKey(*clues):
    key = [None] * inferKeyLength(*clues)
    for clue in clues:
        for i, char in enumerate(clue):
            if char != "*":
                key[i] = char
    return "".join(key)


def main():
    host = "grpc-puzzle-pvufxpciqa-lz.a.run.app:443"
    credentials = grpc.ssl_channel_credentials()
    clueOne = start(host, credentials)
    clueTwo = endpointOne(host, credentials, clueOne)
    clueThree = endpointTwo(host, credentials, clueTwo)
    clueFour = endpointThree(host, credentials, clueThree)

    key = solveKey(clueOne, clueTwo, clueThree, clueFour)
    print(f"key: {key}")

    solvePuzzle(host, credentials, key)
