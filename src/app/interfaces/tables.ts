import { Columns } from "./columns";
import { Labels } from "./labels";
import { TechStock } from "./tech-stock";

export class Tables {
    id!:number;
    techName!:String;
    natName!:String;
    type!:String;
    format!:String;
    listescolumns: Columns[] = [];
    techstock!:TechStock;

}
