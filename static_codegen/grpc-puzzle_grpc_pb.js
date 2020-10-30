// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var grpc$puzzle_pb = require("./grpc-puzzle_pb.js");

function serialize_com_jayway_kday_grpc_ClueFour(arg) {
  if (!(arg instanceof grpc$puzzle_pb.ClueFour)) {
    throw new Error("Expected argument of type com.jayway.kday.grpc.ClueFour");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jayway_kday_grpc_ClueFour(buffer_arg) {
  return grpc$puzzle_pb.ClueFour.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jayway_kday_grpc_ClueOne(arg) {
  if (!(arg instanceof grpc$puzzle_pb.ClueOne)) {
    throw new Error("Expected argument of type com.jayway.kday.grpc.ClueOne");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jayway_kday_grpc_ClueOne(buffer_arg) {
  return grpc$puzzle_pb.ClueOne.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jayway_kday_grpc_ClueThree(arg) {
  if (!(arg instanceof grpc$puzzle_pb.ClueThree)) {
    throw new Error("Expected argument of type com.jayway.kday.grpc.ClueThree");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jayway_kday_grpc_ClueThree(buffer_arg) {
  return grpc$puzzle_pb.ClueThree.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jayway_kday_grpc_ClueTwo(arg) {
  if (!(arg instanceof grpc$puzzle_pb.ClueTwo)) {
    throw new Error("Expected argument of type com.jayway.kday.grpc.ClueTwo");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jayway_kday_grpc_ClueTwo(buffer_arg) {
  return grpc$puzzle_pb.ClueTwo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jayway_kday_grpc_FinalSecret(arg) {
  if (!(arg instanceof grpc$puzzle_pb.FinalSecret)) {
    throw new Error(
      "Expected argument of type com.jayway.kday.grpc.FinalSecret"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jayway_kday_grpc_FinalSecret(buffer_arg) {
  return grpc$puzzle_pb.FinalSecret.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_com_jayway_kday_grpc_Key(arg) {
  if (!(arg instanceof grpc$puzzle_pb.Key)) {
    throw new Error("Expected argument of type com.jayway.kday.grpc.Key");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jayway_kday_grpc_Key(buffer_arg) {
  return grpc$puzzle_pb.Key.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jayway_kday_grpc_YourName(arg) {
  if (!(arg instanceof grpc$puzzle_pb.YourName)) {
    throw new Error("Expected argument of type com.jayway.kday.grpc.YourName");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jayway_kday_grpc_YourName(buffer_arg) {
  return grpc$puzzle_pb.YourName.deserializeBinary(new Uint8Array(buffer_arg));
}

var PuzzleService = (exports.PuzzleService = {
  startHere: {
    path: "/com.jayway.kday.grpc.Puzzle/StartHere",
    requestStream: false,
    responseStream: false,
    requestType: grpc$puzzle_pb.YourName,
    responseType: grpc$puzzle_pb.ClueOne,
    requestSerialize: serialize_com_jayway_kday_grpc_YourName,
    requestDeserialize: deserialize_com_jayway_kday_grpc_YourName,
    responseSerialize: serialize_com_jayway_kday_grpc_ClueOne,
    responseDeserialize: deserialize_com_jayway_kday_grpc_ClueOne,
  },
  endpointOne: {
    path: "/com.jayway.kday.grpc.Puzzle/endpointOne",
    requestStream: false,
    responseStream: false,
    requestType: grpc$puzzle_pb.ClueOne,
    responseType: grpc$puzzle_pb.ClueTwo,
    requestSerialize: serialize_com_jayway_kday_grpc_ClueOne,
    requestDeserialize: deserialize_com_jayway_kday_grpc_ClueOne,
    responseSerialize: serialize_com_jayway_kday_grpc_ClueTwo,
    responseDeserialize: deserialize_com_jayway_kday_grpc_ClueTwo,
  },
  endpointTwo: {
    path: "/com.jayway.kday.grpc.Puzzle/endpointTwo",
    requestStream: false,
    responseStream: false,
    requestType: grpc$puzzle_pb.ClueTwo,
    responseType: grpc$puzzle_pb.ClueThree,
    requestSerialize: serialize_com_jayway_kday_grpc_ClueTwo,
    requestDeserialize: deserialize_com_jayway_kday_grpc_ClueTwo,
    responseSerialize: serialize_com_jayway_kday_grpc_ClueThree,
    responseDeserialize: deserialize_com_jayway_kday_grpc_ClueThree,
  },
  endpointThree: {
    path: "/com.jayway.kday.grpc.Puzzle/endpointThree",
    requestStream: false,
    responseStream: false,
    requestType: grpc$puzzle_pb.ClueThree,
    responseType: grpc$puzzle_pb.ClueFour,
    requestSerialize: serialize_com_jayway_kday_grpc_ClueThree,
    requestDeserialize: deserialize_com_jayway_kday_grpc_ClueThree,
    responseSerialize: serialize_com_jayway_kday_grpc_ClueFour,
    responseDeserialize: deserialize_com_jayway_kday_grpc_ClueFour,
  },
  solvePuzzle: {
    path: "/com.jayway.kday.grpc.Puzzle/SolvePuzzle",
    requestStream: false,
    responseStream: false,
    requestType: grpc$puzzle_pb.Key,
    responseType: grpc$puzzle_pb.FinalSecret,
    requestSerialize: serialize_com_jayway_kday_grpc_Key,
    requestDeserialize: deserialize_com_jayway_kday_grpc_Key,
    responseSerialize: serialize_com_jayway_kday_grpc_FinalSecret,
    responseDeserialize: deserialize_com_jayway_kday_grpc_FinalSecret,
  },
});

exports.PuzzleClient = grpc.makeGenericClientConstructor(PuzzleService);
