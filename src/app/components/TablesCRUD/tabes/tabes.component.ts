import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-tabes',
  templateUrl: './tabes.component.html',
  styleUrls: ['./tabes.component.css']
})
export class TabesComponent {
  Tables:any;
  constructor(private Tableservice: TablesService,
    private router: Router){}
  
  
  ngOnInit(): void {
    this.Tableservice.getTables().subscribe(
      data=>this.Tables=data);

  }

  private getTables(){
    this.Tableservice.getTables().subscribe(
      data=>{
      this.Tables=data}
      );
  }

  detailTable(id:number){
    this.router.navigate(['detailTable',id]);
  }

  updateTable(id:number){
    this.router.navigate(['updateTable',id]);
  }

   deleteTable(id:number){
    this.Tableservice.deleteTables(id).subscribe(data=>{
      console.log(data);
      this.getTables();
    });

}
}
