import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastReservationsComponent } from './last-reservations/last-reservations.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'last-reservations', component: LastReservationsComponent }, // "last-reservations" yolu için bileşen tanımı
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
