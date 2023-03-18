import { CellType } from "../model/CellType";
import { getColors } from "../util/colors";
import { getRandomElement } from "../util/random";
import GameRowSimpleColors from "./GameRowSimpleColors";

export default class GameRowSwapColors extends GameRowSimpleColors{
    row: CellType[];
    firstIndex: number = - 1;
    count: number = 0;
    constructor(nCells: number) {
        super(nCells);
        this.row = Array.from({length: nCells})
        .map((__, index) => (
            {cellColor: getRandomElement(getColors()) as string, borderColor: "black",
            cellContent:'', id: index
            }) );
    }
    getInitialRow(): CellType[] {
       return this.row;
    }
    move(id: number): string | CellType[] {
        let res: string | CellType[];
        if (this.isOver()) {
            res = "game is over";
            return res;
        } 
        if (this.firstIndex === -1){
            this.firstIndex = id;
            return this.row;
        } 
        res = JSON.parse(JSON.stringify(this.row));
        const resAr = res as CellType[];
        const tempColor = resAr[id].cellColor;
        resAr[id].cellColor = resAr[this.firstIndex].cellColor;
        resAr[this.firstIndex].cellColor = tempColor;
        this.firstIndex = -1;
        this.row = resAr; 
        return res;
    }
    isOver(): boolean {

 //       return ++this.count === Math.ceil(this.row.length/2);
        return ++this.count === this.row.length;
    }

}