// Package main implements a client for Greeter service.
package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"log"
	"time"

	pb "github.com/Preyfix/grpc-puzzle/goexample"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

const (
	host = "grpc-puzzle-pvufxpciqa-lz.a.run.app"
	port = "443"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	address := fmt.Sprintf("%s:%s", host, port)

	// Set up a connection to the server.
	log.Printf("dial")
	config := &tls.Config{
		InsecureSkipVerify: true,
	}
	conn, err := grpc.DialContext(ctx, address,
		grpc.WithTransportCredentials(credentials.NewTLS(config)),
		grpc.WithBlock(),
	)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	log.Printf("client")
	c := pb.NewPuzzleClient(conn)

	// Contact the server and print out its response.
	log.Printf("starthere, with context")
	clueOne, err := c.StartHere(ctx, &pb.YourName{
		YourName: "Emil",
	})
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	log.Printf("msg: %s, clue: %s", clueOne.GetMessage(), clueOne.GetClue())

	clueTwo, err := c.EndpointOne(ctx, clueOne)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	log.Printf("msg: %s, clue: %s", clueTwo.GetMessage(), clueTwo.GetClue())

	clueThree, err := c.EndpointTwo(ctx, clueTwo)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	log.Printf("msg: %s, clue: %s", clueThree.GetMessage(), clueThree.GetClue())

	clueFour, err := c.EndpointThree(ctx, clueThree)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	log.Printf("msg: %s, clue: %s", clueFour.GetMessage(), clueFour.GetClue())

	// ---------------------

	solution, err := c.SolvePuzzle(ctx, &pb.Key{
		Key: "developyourcompetenceyoumust",
	})
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	log.Printf("solution: %s", solution.GetFinalSecret())
}
