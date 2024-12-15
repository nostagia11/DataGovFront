import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionsComponentComponent } from './components/solutions-component/solutions-component.component';
import { TabesComponent } from './components/TablesCRUD/tabes/tabes.component';
import { ColumnsComponent } from './components/ColumnsCRUD/columns/columns.component';
import { TechStockComponent } from './components/tech-stock/tech-stock.component';
import { LabelComponent } from './components/LabelCRUD/add-label/label/label.component';
import { AddTableComponent } from './components/TablesCRUD/add-table/add-table.component';
import { AddLabelComponent } from './components/LabelCRUD/add-label/add-label.component';
import { ViewLineageComponent } from './components/view-lineage/view-lineage.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { AddColumnComponent } from './components/ColumnsCRUD/add-column/add-column.component';
import { UpdateSolutionComponent } from './components/solutions-component/update-solution/update-solution.component';
import { AddSolutionComponent } from './components/add-solution/add-solution.component';
import { UpdateColumnComponent } from './components/ColumnsCRUD/update-column/update-column.component';
import { DetailsSoluComponent } from './components/solutions-component/details-solu/details-solu.component';
import { DetailsColumnComponent } from './components/ColumnsCRUD/details-column/details-column.component';
import { RegleComponent } from './components/Regles/regle/regle.component';
import { UpdateRegleComponent } from './components/Regles/update-regle/update-regle.component';

const routes: Routes = [
  //solutions
  {path: 'listSolutions', component: SolutionsComponentComponent },
  {path: 'addsolu', component: AddSolutionComponent },
  {path: 'uploadsolutionTech', component: UploadFileComponent },
  {path: 'viewLineage/:soluId', component: ViewLineageComponent },
  {path: 'updateSolution/:id', component: UpdateSolutionComponent },
  {path: 'detailSolution/:id', component: DetailsSoluComponent },
  //tables
  {path: 'listTables', component: TabesComponent },
  {path: 'addtab', component: AddTableComponent },
  //columns
  {path: 'listColumns', component: ColumnsComponent },
  {path: 'addcol', component: AddColumnComponent },
  {path: 'updateColumn/:id', component: UpdateColumnComponent },
  {path: 'detailColumn/:id', component: DetailsColumnComponent },
  
  //techstock
  {path: 'listTechStock', component: TechStockComponent },
  {path: 'addtech', component: TechStockComponent },
  //labels
  {path: 'listLabels', component: LabelComponent },
  {path: 'addlab', component: AddLabelComponent },

  //regle
  {path: 'listregles', component: RegleComponent },
  {path: 'updateregle/:id', component: UpdateRegleComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
