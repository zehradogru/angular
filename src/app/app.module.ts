import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component';
import { CustomerBrowseComponent } from './customer-browse/customer-browse.component';
import { NaviBarComponent } from './navi-bar/navi-bar.component';
import { LastReservationsComponent } from './last-reservations/last-reservations.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerBrowseComponent,
    NaviBarComponent,
    LastReservationsComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
