const checkFive = require('../checkFive');

describe("check five", function () {
    test("Input of 3 should return less than 5", function(){
        let output = checkFive(3);
        expect(output).toEqual("3 is less than 5.");
    });

    test("Input of 5 should return equal to 5", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

    test("Input of 7 should return greater than 5", function(){
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });
});