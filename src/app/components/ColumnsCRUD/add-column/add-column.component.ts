import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Columns } from 'src/app/interfaces/columns';
import { Labels } from 'src/app/interfaces/labels';
import { ColumnsService } from 'src/app/services/columns.service';
import { LabelsService } from 'src/app/services/labels.service';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.css']
})
export class AddColumnComponent {
  column: Columns = new Columns();
  namelabel!: String;
  label:any
  selectedlabel?: Labels;
    

  constructor(private Columnservice: ColumnsService,
              private router:Router,
              private labelservice : LabelsService
          
             ){}
  
  
    ngOnInit(): void {
      this.labelservice.getLabels().subscribe(data=>{
        this.label=data;
  
      });
     
  
      }


     

  savecolumn(){
    
 
    this.Columnservice.createColumns(this.column).subscribe(data=>{
    
      
      this.goTocolumnList();
    },
    error => console.log(error));
  }
  
  goTocolumnList(){
    this.router.navigate(['/listColumns']);
  }

  OnSubmitcolumn(){
    console.log(this.column);
    this.savecolumn();
  }

  
  private getLabels(){
    this.labelservice.getLabels().subscribe(data=>{
      this.label=data;
      // this.ecoles=this.ecoles.concat(data);

    });

}



selectedCompare(value:any,option:any):boolean{
  return value.id===option.id

}
 


}
