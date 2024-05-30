import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LabelsService } from 'src/app/services/labels.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  Labels:any;
  constructor(private Labelservice: LabelsService,
    private router: Router){}
  
  
  ngOnInit(): void {
    this.Labelservice.getLabels().subscribe(
      data=>this.Labels=data);

  }

  private getLabels(){
    this.Labelservice.getLabels().subscribe(
      data=>{
      this.Labels=data}
      );
  }

  detailLabels(id:number){
    this.router.navigate(['detailLabels',id]);
  }

  updateLabels(id:number){
    this.router.navigate(['updateLabels',id]);
  }

   deleteLabels(id:number){
    this.Labelservice.deleteLabels(id).subscribe(data=>{
      console.log(data);
      this.getLabels();
    });
  }

}
