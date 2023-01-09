import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favour',
  templateUrl: './favour.component.html',
  styleUrls: ['./favour.component.css']
})

export class FavourComponent {

  modalTitle = "";

  constructor(private modalService: NgbModal) { }

  openVerticallyCentered(content: any, event: any) {
    let target = event.target || event.srcElement || event.currentTarget;
    this.modalTitle = target.getAttribute('value');
    this.modalService.open(content, { centered: true });
  }
}

