import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-favour',
  templateUrl: './favour.component.html',
  styleUrls: ['./favour.component.css']
})

export class FavourComponent {

  firstTitle = "Простий";
  secondTitle = "Для об'ємів";
  thirdTitle = "Тестовий тиждень";

  constructor(private modalService: NgbModal) {
  }

  openVerticallyCentered(event: any) {
    const modalRef = this.modalService.open(ModalComponent, {centered: true});
    switch (event.target.id){
      case "firstBtn":
        modalRef.componentInstance.title = this.firstTitle;
        break;
      case "secondBtn":
        modalRef.componentInstance.title = this.secondTitle;
        break;
      case "thirdBtn":
        modalRef.componentInstance.title = this.thirdTitle;
        break;
    }
  }
}


