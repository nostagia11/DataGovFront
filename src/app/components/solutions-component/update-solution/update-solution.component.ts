import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftwareSolution } from 'src/app/interfaces/software-solution';
import { SoftwareSoluServiceService } from 'src/app/services/software-solu-service.service';

@Component({
  selector: 'app-update-solution',
  templateUrl: './update-solution.component.html',
  styleUrls: ['./update-solution.component.css']
})
export class UpdateSolutionComponent implements OnInit {


  solution: SoftwareSolution = new SoftwareSolution();
  id!: number;
  

 

  constructor(private solutionService: SoftwareSoluServiceService,
    private router: Router,
    private route: ActivatedRoute,
    ){}
  
  
    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.solutionService.getSoftwareSolutionById(this.id).subscribe(data=>{
      this.solution = data;
    }, error=>console.log(error));
    

   
    
  }

  

  OnSubmit(){
    this.solutionService.updateSoftwareSolution(this.id,this.solution).subscribe(data=>{
      this.goSoluList()
    },
    error=>console.log(error));
  }
  
  
  goSoluList() {
    this.router.navigate(['/listSolutions']);
  }
 



  


}


