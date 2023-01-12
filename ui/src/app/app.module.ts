import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { TargetComponent } from './components/target/target.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavourComponent } from './components/favour/favour.component';
import { AuditComponent } from './components/audit/audit.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TargetComponent,
    FooterComponent,
    FavourComponent,
    AuditComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    NgxHideOnScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
