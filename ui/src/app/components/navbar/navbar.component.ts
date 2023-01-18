import {Component, Inject} from '@angular/core';
import {MainComponent} from "../main/main.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(@Inject(MainComponent) private parent: MainComponent){

  }

  scrollSpy(element: string){
    this.parent.scrollSpy(element);
  }
}
