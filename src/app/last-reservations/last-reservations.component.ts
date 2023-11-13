import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-last-reservations',
  templateUrl: './last-reservations.component.html',
  styleUrls: ['./last-reservations.component.css']
})
export class LastReservationsComponent implements OnInit {
  reservations: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchLastReservations();
  }

  fetchLastReservations() {
    // Make an HTTP GET request to the API
    this.http.get('http://213.248.166.144:7070/customer/lastReservations')
      .subscribe((data: any) => {
        this.reservations = data;
      });
  }
}
