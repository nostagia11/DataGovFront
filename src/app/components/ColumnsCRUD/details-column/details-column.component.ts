import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Columns } from 'src/app/interfaces/columns';
import { ColumnsService } from 'src/app/services/columns.service';

@Component({
  selector: 'app-details-column',
  templateUrl: './details-column.component.html',
  styleUrls: ['./details-column.component.css']
})
export class DetailsColumnComponent {
  id!: number;
  col : Columns = new Columns;

  constructor(private colService: ColumnsService,
    private route : ActivatedRoute,
    private router: Router){}

  ngOnInit():void{
    this.id= this.route.snapshot.params['id'];
    this.col = new Columns();
    this.colService.getColumnsById(this.id).subscribe(data=>{
      this.col = data; 
    }, error=>console.log(error));
  }

}
