import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastReservationsComponent } from './last-reservations/last-reservations.component';

const routes: Routes = [
  // Other routes
  { path: 'last-reservations', component: LastReservationsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
