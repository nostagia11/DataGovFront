import { Labels } from "./labels";
import { Tables } from "./tables";

export class Columns {
    id!:number;
    tname!:String;
    syno!:String;
    type!:String;
    table!: Tables;
    label !: Labels;
    
}
