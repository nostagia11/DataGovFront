import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftwareSoluServiceService } from 'src/app/services/software-solu-service.service';

@Component({
  selector: 'app-solutions-component',
  templateUrl: './solutions-component.component.html',
  styleUrls: ['./solutions-component.component.css']
})
export class SolutionsComponentComponent implements OnInit {
  solutions:any;

  

  constructor(private solutionservice: SoftwareSoluServiceService,
    private router: Router){}
  
  
  ngOnInit(): void {
    this.solutionservice.getSoftwareSolutions().subscribe(
      data=>this.solutions=data);

  }

  private getsolutions(){
    this.solutionservice.getSoftwareSolutions().subscribe(
      data=>{
      this.solutions=data}
      );
  }

  detailSolution(id:number){
    console.log('Navigating to example with id:', id);
    this.router.navigate(['/detailSolution',id]);
  }

  updateSolution(id:number){
    console.log('Navigating to example with id:', id);
    this.router.navigate(['/updateSolution',id]);
  }

   deleteSolution(id_SOFR:number){
   
    this.solutionservice.deleteSoftwareSolution(id_SOFR).subscribe(data=>{
      
      console.log(data);
      this.getsolutions();
    });
  }

  viewLogs(soluId:number){
    this.router.navigate(['/viewLineage',soluId]);
  }

  

}
