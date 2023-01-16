import { Component } from '@angular/core';
import {Audit} from "../../interfaces/audit";
import {AuditService} from "../../services/audit.service";
import {audit, empty} from "rxjs";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent {

  constructor(private auditService: AuditService) {}

  audit: Audit = {
    name: '',
    email: '',
    phone: '',
    messenger: 'None',
    username: '',
    description: ''
  }

  disableUsernameInput = true;

  messengerSelected(){
    this.disableUsernameInput = false;
  }

  sendAudit(){
    this.auditService.sendAudit(this.audit)
      .subscribe();
  }

}
