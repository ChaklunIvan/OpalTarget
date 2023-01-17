import { Component, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalInfoComponent} from "../modal-info/modal-info.component";
import {Favour} from "../../interfaces/favour";
import  {FavourService} from "../../services/favour.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title = "";

  favour: Favour = {
    name: '',
    phone: '',
    messenger: ''
  }

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private favourService: FavourService) { }

  openVerticallyCentered() {
    const modalRef = this.modalService.open(ModalInfoComponent, {centered: true});
    if(this.favour.name == '' || this.favour.phone == ''){
      modalRef.componentInstance.title = "Помилка"
      modalRef.componentInstance.text = "Заповніть ім'я та номер телефону"
    }
    else{
      modalRef.componentInstance.title = "Готово"
      modalRef.componentInstance.text = "Дякую. З вами св'яжуться за 5 хвилин"
      this.favourService.sendFavour(this.favour)
        .subscribe();
    }
  }
}
