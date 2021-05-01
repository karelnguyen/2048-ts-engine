import { hasBoardChanged, getBlankCoordinates, getDefaultBoard, placeRandomNumber, shiftToRight, shiftToLeft, rotateLeft, rotateRight, } from "../Board";
var stringifyArrayForTest = function (board) {
    return JSON.stringify(board.flat());
};
describe("Test Board functions", function () {
    describe("placeRandomNumber fn", function () {
        test("Place random number to board", function () {
            var newBoard = placeRandomNumber([
                [2, 2, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]);
            expect(stringifyArrayForTest(newBoard)).not.toBe(stringifyArrayForTest([
                [2, 2, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]));
        });
        test("Cannot place random number to board", function () {
            var newBoard = placeRandomNumber([
                [8, 4, 8, 4],
                [4, 8, 4, 8],
                [8, 4, 8, 4],
                [4, 8, 4, 8],
            ]);
            expect(stringifyArrayForTest(newBoard)).toBe(stringifyArrayForTest([
                [8, 4, 8, 4],
                [4, 8, 4, 8],
                [8, 4, 8, 4],
                [4, 8, 4, 8],
            ]));
        });
    });
    describe("hasBoardChanged fn", function () {
        test("Board changed", function () {
            var result = hasBoardChanged([
                [2, 2, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ], [
                [2, 2, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 2],
            ]);
            expect(result).toBeTruthy();
        });
        test("Board changed", function () {
            var result = hasBoardChanged([
                [2, 2, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ], [
                [2, 2, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]);
            expect(result).toBeFalsy();
        });
    });
    test("getBlankCoordinates fn - Getting black tiles coordinates", function () {
        var result = getBlankCoordinates([
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(result).toEqual([
            [0, 2],
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
        ]);
    });
    test("shiftToRight fn - shift all numbers to right", function () {
        var result = shiftToRight([
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(result).toEqual([
            [0, 2, 2, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
    });
    test("shiftToLeft fn - shift all numbers to left", function () {
        var result = shiftToLeft([
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(result).toEqual([
            [2, 2, 4, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
    });
    test("rotateLeft fn - rotate board matrix left", function () {
        var result = rotateLeft([
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(result).toEqual([
            [4, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
        ]);
    });
    test("rotateRight fn - rotate board matrix right", function () {
        var result = rotateRight([
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(result).toEqual([
            [0, 0, 0, 2],
            [0, 0, 0, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 4],
        ]);
    });
    test("getDefaultBoard fn - get board with two random values", function () {
        var result = getDefaultBoard([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(stringifyArrayForTest(result)).not.toBe(stringifyArrayForTest([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]));
    });
});
