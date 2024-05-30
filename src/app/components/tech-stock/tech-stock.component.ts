import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TechStockService } from 'src/app/services/tech-stock.service';

@Component({
  selector: 'app-tech-stock',
  templateUrl: './tech-stock.component.html',
  styleUrls: ['./tech-stock.component.css']
})
export class TechStockComponent {
  techStock:any;
  constructor(private techStockervice: TechStockService,
    private router: Router){}
  
  
  ngOnInit(): void {
    this.techStockervice.getTechStock().subscribe(
      data=>this.techStock=data);

  }

  private gettechStock(){
    this.techStockervice.getTechStock().subscribe(
      data=>{
      this.techStock=data}
      );
  }

  detailTechStock(id:number){
    this.router.navigate(['detailTechStock',id]);
  }

  updateTechStock(id:number){
    this.router.navigate(['updateTechStock',id]);
  }

   deleteTechStock(id:number){
    this.techStockervice.deleteTechStock(id).subscribe(data=>{
      console.log(data);
      this.gettechStock();
    });
  }

}
