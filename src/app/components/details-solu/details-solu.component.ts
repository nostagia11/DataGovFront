import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SoftwareSolution } from 'src/app/interfaces/software-solution';
import { SoftwareSoluServiceService } from 'src/app/services/software-solu-service.service';

@Component({
  selector: 'app-details-solu',
  templateUrl: './details-solu.component.html',
  styleUrls: ['./details-solu.component.css']
})
export class DetailsSoluComponent {
  
  id!: number;
  solution: SoftwareSolution = new SoftwareSolution();
  



   constructor(private soluService: SoftwareSoluServiceService,
    private route : ActivatedRoute,
    private router: Router){}


    ngOnInit():void{
      this.id= this.route.snapshot.params['id'];
      this.soluService.getSoftwareSolutionById(this.id).subscribe(data=>{
        this.solution = data;
      }, error=>console.log(error));
    }

    updateSolution(id:number){
      console.log('Navigating to example with id:', id);
      this.router.navigate(['/updateSolution',id]);
    }

}
