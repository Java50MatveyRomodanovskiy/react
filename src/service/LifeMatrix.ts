import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]) { }
    get numbers() {
        this._numbers = getRandomMatrix(this._numbers.length, this._numbers.length, 0, 1);
        return this._numbers;
    }
    nextStep(): number[][] {

        const nextMatrix: number[][] = getRandomMatrix(this._numbers.length, this._numbers.length, 0, 1);


        for (let i = 0; i < this._numbers.length; i++) {
            for (let j = 0; j < this._numbers.length; j++) {
                const aliveNumbers: number = getAliveNeihgboursNumbers(this._numbers, i, j);
                nextMatrix[i][j] = 0;
                if (this._numbers[i][j] && aliveNumbers >= 2 && aliveNumbers <= 3) {
                    nextMatrix[i][j] = 1;
                }
                if (!this._numbers[i][j] && aliveNumbers === 3) {
                    nextMatrix[i][j] = 1;
                }
            }
        }
        this._numbers = nextMatrix;
        return nextMatrix;
    }

}

function getAliveNeihgboursNumbers(matrix: number[][], i: number, j: number): number {
    let res: number = 0;
    const neighboursCoordinates = [0, 0, 0, 0] //Array with initial coordinates [0] - x_start, [1] - y_start, [2] - x_end, [3] - y_end 
    neighboursCoordinates[0] = i - 1;
    neighboursCoordinates[0] = neighboursCoordinates[0] < 0 ? i : neighboursCoordinates[0];
    neighboursCoordinates[1] = j - 1;
    neighboursCoordinates[1] = neighboursCoordinates[1] < 0 ? j : neighboursCoordinates[1];
    neighboursCoordinates[2] = i + 1;
    neighboursCoordinates[2] = neighboursCoordinates[2] < matrix.length ? neighboursCoordinates[2] : i;
    neighboursCoordinates[3] = j + 1;
    neighboursCoordinates[3] = neighboursCoordinates[3] < matrix.length ? neighboursCoordinates[3] : j;
    if (matrix[i][j]) {
        res = -1
    };
    for (let x = neighboursCoordinates[0]; x <= neighboursCoordinates[2]; x++) {
        for (let y = neighboursCoordinates[1]; y <= neighboursCoordinates[3]; y++) {
            if (matrix[x][y]) {
                res++
            }
        }
    }

    return res;
}