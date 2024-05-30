import { Columns } from 'src/app/interfaces/columns';

export class Labels {

    id!:number;
    name!:String;
    type!:String;
    description!:String;
    listecolumns: Columns[] = [];

}
