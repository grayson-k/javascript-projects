const whoWon = require('../RPS.js')

describe("Testing the rock papers scissors function", function() {
    test("Sending rock for both should return tie", function(){
        expect(whoWon("rock", "rock")).toBe("TIE!");
    });

    test("Sending rock for player 1 and paper for player 2 should return player 2 wins", function(){
        expect(whoWon("rock", "paper")).toBe("Player 2 wins!");
    });

    test("Sending rock for player 1 and paper for player 2 should return player 2 wins", function(){
        expect(whoWon("paper", "scissors")).toBe("Player 2 wins!");
    });

    test("Sending rock for player 1 and paper for player 2 should return player 2 wins", function(){
        expect(whoWon("scissors", "rock")).toBe("Player 2 wins!");
    });
});