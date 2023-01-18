import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  @ViewChild('audit') audit: any;
  @ViewChild('favour') favour: any;
  @ViewChild('main') main: any;

  scrollSpy(element: string){
    switch (element){
      case 'audit':
        this.audit.nativeElement.scrollIntoView();
        break;
      case 'favour':
        this.favour.nativeElement.scrollIntoView();
        break;
      case 'main':
        this.main.nativeElement.scrollIntoView();
        break;
    }
  }
}
