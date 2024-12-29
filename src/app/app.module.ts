import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionsComponentComponent } from './components/solutions-component/solutions-component.component';
import { TabesComponent } from './components/TablesCRUD/tabes/tabes.component';
import { ColumnsComponent } from './components/ColumnsCRUD/columns/columns.component';
import { TechStockComponent } from './components/tech-stock/tech-stock.component';
import { LabelComponent } from './components/LabelCRUD/add-label/label/label.component';
import { AddLabelComponent } from './components/LabelCRUD/add-label/add-label.component';
import { AddColumnComponent } from './components/ColumnsCRUD/add-column/add-column.component';
import { AddTableComponent } from './components/TablesCRUD/add-table/add-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ViewLineageComponent } from './components/view-lineage/view-lineage.component';
import { UpdateSolutionComponent } from './components/solutions-component/update-solution/update-solution.component';
import { SideNavigationComponentComponent } from './components/side-navigation-component/side-navigation-component.component';
import { HeaderComponent } from './components/header/header.component';
import { AddSolutionComponent } from './components/add-solution/add-solution.component';
import { UpdateColumnComponent } from './components/ColumnsCRUD/update-column/update-column.component';
import { CommonModule } from '@angular/common';
import { LabelsService } from './services/labels.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailsSoluComponent } from './components/solutions-component/details-solu/details-solu.component';
import { DetailsColumnComponent } from './components/ColumnsCRUD/details-column/details-column.component';
import { RegleComponent } from './components/Regles/regle/regle.component';
import {  UpdateRegleComponent } from './components/Regles/update-regle/update-regle.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SqlServerConnectorComponent } from './components/sql-server-connector/sql-server-connector.component';

@NgModule({
  declarations: [
    AppComponent,
    SolutionsComponentComponent,
    TabesComponent,
    ColumnsComponent,
    TechStockComponent,
    LabelComponent,
    AddLabelComponent,
    AddColumnComponent,
    AddTableComponent,
    UploadFileComponent,
    ViewLineageComponent,
    UpdateSolutionComponent,
    SideNavigationComponentComponent,
    HeaderComponent,
    AddSolutionComponent,
    UpdateColumnComponent,
    DetailsSoluComponent,
    DetailsColumnComponent,
    RegleComponent,
    UpdateRegleComponent,
    SqlServerConnectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
    ReactiveFormsModule,
         BrowserAnimationsModule,
       MatInputModule,
       MatOptionModule, MatFormFieldModule,
       MatSelectModule,
       NgxPaginationModule
       
  
    
  ],
 
  
  providers: [LabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
