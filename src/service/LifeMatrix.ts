import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]){}
    get numbers(){
        this._numbers = getRandomMatrix(this._numbers.length, this._numbers.length, 0 ,1);
        return this._numbers;
    }
    nextStep(): number[][]{

        const nextMatrix: number[][] = getRandomMatrix(this._numbers.length, this._numbers.length, 0 ,1);
  
        function getAliveNumbers (matrix: number[][], i: number , j: number) : number {
            let res: number = 0;
            const nC = [0,0,0,0]
            nC[0]  = i - 1;
            nC[0] = nC[0] < 0 ? i : nC[0];
            nC[1] = j - 1;
            nC[1] = nC[1] < 0 ? j : nC[1]; 
            nC[2] = i + 1;
            nC[2] = nC[2] < matrix.length ? nC[2] : i;
            nC[3] = j + 1;
            nC[3] = nC[3] < matrix.length ? nC[3] : j;
            if (matrix[i][j]){
                res = -1
            };
               for (let x = nC[0]; x <= nC[2]; x++){
                    for (let y = nC[1]; y <= nC[3]; y++){
                        if (matrix[x][y]){
                            res++
                        }
                    }
               }
            
            return res;
        }

        for (let i = 0; i < this._numbers.length; i++) {
            for (let j = 0; j < this._numbers.length; j++) {
               const aliveNumbers : number = getAliveNumbers(this._numbers, i, j);
               nextMatrix[i][j] = 0;
            console.log(aliveNumbers);
               if (this._numbers[i][j] && aliveNumbers >= 2 && aliveNumbers <= 3){
                nextMatrix[i][j] = 1;
               } 
               if (!this._numbers[i][j] && aliveNumbers === 3){
                nextMatrix[i][j] = 1;
               }
            }
        }
        this._numbers = nextMatrix;
        return nextMatrix;
    }
}