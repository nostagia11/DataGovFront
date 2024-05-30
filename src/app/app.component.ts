import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataggov';
  @ViewChild('sidebar') sidebarRef!: ElementRef;


  toggleSidebar(): void {
    const sidebar = this.sidebarRef.nativeElement;
    sidebar.classList.toggle('close');
  }
}
