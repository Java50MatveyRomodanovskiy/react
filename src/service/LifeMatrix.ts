import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]) { }
    get numbers() {
        if (this._numbers.length = 0){
            this._numbers = getRandomMatrix(this._numbers.length, this._numbers.length, 0, 1);
        }
        return this._numbers;

    }
    
    nextStep(): number[][] {
        this._numbers = this._numbers.map((__, i) => this.getNewRow(i));
        return  this._numbers;
    }
    getNewRow(i: number): number[] {
        return this._numbers[i].map((__, j) => this.getNewCell(i,j));
    }
    getNewCell(i: number, j: number): number {
        let res: number = 0;
        if((this._numbers[i][j] && (this.getAliveNeihgboursNumbers(i,j) === 2)) || this.getAliveNeihgboursNumbers(i,j) === 3){
            res = 1;
        }
        return res;
    }
    getAliveNeihgboursNumbers(i: number, j: number): number {
        const iL = Math.abs((i-1)+ this._numbers.length) % this._numbers.length;
        const iR = Math.abs((i+1)+this._numbers.length) % this._numbers.length;
        const jL = Math.abs((j-1)+this._numbers.length) % this._numbers.length;
        const jR = Math.abs((j+1)+this._numbers.length) % this._numbers.length;
        return [this._numbers[iL][jL], this._numbers[i][jL], this._numbers[iR][jL],
                this._numbers[iL][j],                           this._numbers[iR][j],
                this._numbers[iL][jR],this._numbers[i][jR], this._numbers[iR][jR]].reduce((a,b) => a+b,0);

    }
}