import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SoftwareSolution } from 'src/app/interfaces/software-solution';
import { SoftwareSoluServiceService } from 'src/app/services/software-solu-service.service';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.css']
})
export class AddSolutionComponent {

  solution: SoftwareSolution = new SoftwareSolution();
  namecolumn!: String;
  solutions:any
  
    

  constructor(private labelservice: SoftwareSoluServiceService,
              private router:Router,
          
             ){}
  
  
    ngOnInit(): void {
      
      this.solutions= this.labelservice.getSoftwareSolutions().subscribe(data=>this.solutions=data);
  
      }

  saveLabel(){
 
    this.labelservice.createSoftwareSolution(this.solution).subscribe(data=>{
    
      
      this.goToLabelList();
    },
    error => console.log(error));
  }
  
  goToLabelList(){
    this.router.navigate(['/listSolutions']);
  }

  OnSubmitLabel(){
    console.log(this.solution);
    this.saveLabel();
  }
 

}
