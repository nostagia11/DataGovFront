import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tables } from 'src/app/interfaces/tables';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent {
  table: Tables = new Tables();
 
  tables:any
 
    

  constructor(private tableService: TablesService,
              private router:Router,
          
             ){}
  
  
    ngOnInit(): void {
      
      this.tables= this.tableService.getTables().subscribe(data=>this.tables=data);
  
      }

  saveTable(){
 
    this.tableService.createTables(this.table).subscribe(data=>{
    
      
      this.goToTableList();
    },
    error => console.log(error));
  }
  
  goToTableList(){
    this.router.navigate(['/listTables']);
  }

  OnSubmitTable(){
    console.log(this.table);
    this.saveTable();
  }
 


}
