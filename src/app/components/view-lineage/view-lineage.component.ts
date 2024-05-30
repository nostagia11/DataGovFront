import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetectExcelChangesService } from 'src/app/services/detect-excel-changes.service';

@Component({
  selector: 'app-view-lineage',
  templateUrl: './view-lineage.component.html',
  styleUrls: ['./view-lineage.component.css']
})
export class ViewLineageComponent {
  excelChanges: any;
  soluId!:number;

  constructor(private excelChangeService: DetectExcelChangesService,
   private route :ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  loadExcelChanges(_soluId:number){
    this.soluId = this.route.snapshot.params['soluId'];
    this.excelChangeService.getExcelChanges(this.soluId).subscribe(
      (data) => {
        this.excelChanges = data;
        console.log(data);
      },
      (error) => {
        console.error('Error loading Excel changes:', error);
      }
    );
  }

}
