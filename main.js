const grpc = require("grpc");
const puzzlePb = require("./static_codegen/grpc-puzzle_pb");
const puzzleGprc = require("./static_codegen/grpc-puzzle_grpc_pb");
const p = require("util").promisify;

const host = "grpc-puzzle-pvufxpciqa-lz.a.run.app";
const port = "443";

async function main() {
  let client = new puzzleGprc.PuzzleClient(
    `${host}:${port}`,
    grpc.credentials.createSsl()
  );

  let m = new puzzlePb.YourName();
  m.setYourName("Emil");
  let res = await p(client.startHere.bind(client))(m);
  console.log({ clue: res.getClue() });

  res = await p(client.endpointOne.bind(client))(res);
  console.log({ clue: res.getClue() });

  res = await p(client.endpointTwo.bind(client))(res);
  console.log({ clue: res.getClue() });

  res = await p(client.endpointThree.bind(client))(res);
  console.log({ clue: res.getClue() });

  m = new puzzlePb.Key();
  m.setKey("developyourcompetenceyoumust");
  res = await p(client.solvePuzzle.bind(client))(m);
  console.log({ finalSecret: res.getFinalSecret() });
}

main().catch(console.error);
