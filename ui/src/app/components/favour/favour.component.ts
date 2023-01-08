import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favour',
  templateUrl: './favour.component.html',
  styleUrls: ['./favour.component.css']
})
export class FavourComponent {

  constructor(private modalService: NgbModal) { }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

}

