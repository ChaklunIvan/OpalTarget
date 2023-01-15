import { Component } from '@angular/core';
import {Audit} from "../../interfaces/audit";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent {

  audit: Audit = {
    name: '',
    email: '',
    phone: '',
    messenger: 'Оберіть мессенджер',
    username: '',
    description: ''
  }

  disableUsernameInput = true;

  messengerSelected(){
    this.disableUsernameInput = false;
    console.log(this.audit)
  }
}
