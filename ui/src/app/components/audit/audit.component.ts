import { Component } from '@angular/core';
import {Audit} from "../../interfaces/audit";
import {AuditService} from "../../services/audit.service";
import {ModalInfoComponent} from "../modal-info/modal-info.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent {

  constructor(private auditService: AuditService, private modalService: NgbModal) {}

  audit: Audit = {
    name: '',
    email: '',
    phone: '',
    messenger: '',
    username: '',
    description: ''
  }

  sendAudit(){
    const modalRef = this.modalService.open(ModalInfoComponent, {centered: true});
    if(this.audit.name == '' || this.audit.phone == ''){
      modalRef.componentInstance.title = "Помилка"
      modalRef.componentInstance.text = "Заповніть ім'я та номер телефону"
    }
    else{
      modalRef.componentInstance.title = "Готово"
      modalRef.componentInstance.text = "Дякую. З вами св'яжуться за 5 хвилин"
      this.auditService.sendAudit(this.audit)
        .subscribe();
    }
  }
}
