import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent},
  { path: '**', redirectTo: 'navbar', pathMatch: 'full' }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
