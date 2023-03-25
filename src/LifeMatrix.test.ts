import LifeMatrix, { } from "./service/LifeMatrix"
import getAliveNeihgboursNumbers from "./service/LifeMatrix"
const testMatrix = new LifeMatrix(
    [[0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1]]
);
test('getAliveNeihgboursNumbers', () => {

    expect(testMatrix.getAliveNeihgboursNumbers(0, 0)).toEqual(2);
    expect(testMatrix.getAliveNeihgboursNumbers(3, 3)).toEqual(1);
    expect(testMatrix.getAliveNeihgboursNumbers(1, 1)).toEqual(4);
    expect(testMatrix.getAliveNeihgboursNumbers(1, 0)).toEqual(1);

});

test('getNewCel', () => {
    expect(testMatrix.getNewCell(1, 1)).toEqual(0);
    expect(testMatrix.getNewCell(0, 1)).toEqual(0);
    expect(testMatrix.getNewCell(1, 0)).toEqual(0);
});
test('nextStep', () => {
    expect(testMatrix.nextStep()).toEqual(
        [[0, 0, 0, 1],
        [0, 0, 1, 1],
        [1, 1, 1, 0],
        [0, 0, 1, 0]]
    )
});
const test2Matrix = new LifeMatrix(
    [[0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]]
);
test('nextStep 2', () => {
    expect(test2Matrix.nextStep()).toEqual(
        [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0]]
    )
});

const test3Matrix = new LifeMatrix(
    [[0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0]]
);
test('nextStep 3', () => {
    expect(test3Matrix.nextStep()).toEqual(
        [[0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1],
        [0, 0, 0, 0]]
    )
});
