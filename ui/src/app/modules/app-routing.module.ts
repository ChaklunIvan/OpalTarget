import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { TargetComponent } from '../components/target/target.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FavourComponent } from '../components/favour/favour.component';
import { AuditComponent } from '../components/audit/audit.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'target', component: TargetComponent},
  { path: 'favour', component: FavourComponent},
  { path: 'audit', component: AuditComponent},
  { path: 'footer', component: FooterComponent},
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
