import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Columns } from 'src/app/interfaces/columns';
import { Labels } from 'src/app/interfaces/labels';
import { ColumnsService } from 'src/app/services/columns.service';
import { LabelsService } from 'src/app/services/labels.service';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.css']
})
export class AddLabelComponent {
  label: Labels = new Labels();
  namecolumn!: String;
  labels:any
  selectedcolumn?: Columns;
    

  constructor(private labelservice: LabelsService,
              private router:Router,
          
             ){}
  
  
    ngOnInit(): void {
      
      this.labels= this.labelservice.getLabels().subscribe(data=>this.labels=data);
  
      }

  saveLabel(){
 
    this.labelservice.createLabels(this.label).subscribe(data=>{
    
      
      this.goToLabelList();
    },
    error => console.log(error));
  }
  
  goToLabelList(){
    this.router.navigate(['/listLabels']);
  }

  OnSubmitLabel(){
    console.log(this.label);
    this.saveLabel();
  }
 


}
