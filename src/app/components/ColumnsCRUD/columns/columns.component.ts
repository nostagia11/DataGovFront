import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnsService } from 'src/app/services/columns.service';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent {
  Columns:any;
  label!: boolean;
  noLabel=false;
  constructor(private Columnservice: ColumnsService,
    private router: Router){}
  
  
  ngOnInit(): void {
    this.Columnservice.getColumns().subscribe(
      data=>this.Columns=data);

  }

  private getColumns(){
    this.Columnservice.getColumns().subscribe(
      data=>{
      this.Columns=data;
      console.log(this.Columns.label);}
      );
      this.label=!!this.Columns.label;
      console.log(this.Columns.label)
  }

  detailColumn(id:number){
    this.router.navigate(['detailColumn',id]);
  }

  updateColumn(id:number){
    this.router.navigate(['/updateColumn',id]);
  }

   deleteColumn(id:number){
    this.Columnservice.deleteColumns(id).subscribe(data=>{
      console.log(data);
      this.getColumns();
    });

}

}
