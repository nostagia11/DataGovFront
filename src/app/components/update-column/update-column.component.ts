import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Columns } from 'src/app/interfaces/columns';
import { Labels } from 'src/app/interfaces/labels';
import { ColumnsService } from 'src/app/services/columns.service';
import { LabelsService } from 'src/app/services/labels.service';

@Component({
  selector: 'app-update-column',
  templateUrl: './update-column.component.html',
  styleUrls: ['./update-column.component.css']
})
export class UpdateColumnComponent {
  id!: number;
  column: Columns = new Columns();
  labels:any
  selectedlabel: Labels= new Labels();

 

  constructor(private offerService: ColumnsService,
    private router: Router,
    private route: ActivatedRoute,
    private ecoleservice:LabelsService){}
  
  
    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offerService.getColumnsById(this.id).subscribe(data=>{
      this.column = data;
    }, error=>console.log(error));
    

    this.ecoleservice.getLabels().subscribe(data=>{
      this.labels=data;

    });

    const initialize=this.labels.name;
    this.selectedlabel=initialize;
    

    
  }

  

  OnSubmit(){
    this.column.label= this.selectedlabel!;
    
    this.offerService.updateColumns(this.id,this.column).subscribe(data=>{
      this.goToOfferList()
    },
   );
  }
  
  
  goToOfferList() {
    this.router.navigate(['/listColumns']);
  }
  private getEcoles(){
    this.ecoleservice.getLabels().subscribe(data=>{
      this.labels=data;
      // this.ecoles=this.ecoles.concat(data);

    });



  


}
}
