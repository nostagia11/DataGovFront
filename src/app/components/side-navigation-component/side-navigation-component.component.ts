import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-navigation-component',
  templateUrl: './side-navigation-component.component.html',
  styleUrls: ['./side-navigation-component.component.css']
})
export class SideNavigationComponentComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebarRef!: ElementRef;


  constructor(private renderer: Renderer2, private el: ElementRef){}
      ngAfterViewInit() {
    const arrowElements = this.el.nativeElement.querySelectorAll('.arrow');
    arrowElements.forEach((arrowElement: any) => {
      this.renderer.listen(arrowElement, 'click', () => {
        const arrowParent = arrowElement.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
      });
    });
  }

  toggleSidebar(): void {
    const sidebar = this.sidebarRef.nativeElement;
    sidebar.classList.toggle('close');
  }

}
