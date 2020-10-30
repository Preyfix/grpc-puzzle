using System;
using Com.Jayway.Kday.Grpc;
using Grpc.Net.Client;
using static Com.Jayway.Kday.Grpc.Puzzle;

namespace GrpcPuzzleClient
{
    class Program
    {
        static void Main()
        {
            using var channel = GrpcChannel.ForAddress("https://grpc-puzzle-pvufxpciqa-lz.a.run.app");
            var client = new PuzzleClient(channel);

            var clueOne = client.StartHere(new YourName { YourName_ = "foo" });
            Console.WriteLine("1: " + clueOne.Clue);

            var clueTwo = client.endpointOne(clueOne);
            Console.WriteLine("2: " + clueTwo.Clue);

            var clueThree = client.endpointTwo(clueTwo);
            Console.WriteLine("3: " + clueThree.Clue);

            var clueFour = client.endpointThree(clueThree);
            Console.WriteLine("4: " + clueFour.Clue);

            var final = client.SolvePuzzle(new Key { Key_ = "developyourcompetenceyoumust" });
            Console.WriteLine("Final: " + final.FinalSecret_);
        }
    }
}
