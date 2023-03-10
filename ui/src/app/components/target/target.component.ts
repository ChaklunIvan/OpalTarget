import {Component, Inject} from '@angular/core';
import {MainComponent} from "../main/main.component";

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent{

  constructor(@Inject(MainComponent) private parent: MainComponent){

  }

  scrollSpy(element: string){
    this.parent.scrollSpy(element);
  }
}
