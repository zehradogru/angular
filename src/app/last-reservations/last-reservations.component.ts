import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './last-reservations-model';

@Component({
  selector: 'app-last-reservations',
  templateUrl: './last-reservations.component.html',
  styleUrls: ['./last-reservations.component.css']
})
export class LastReservationsComponent implements OnInit {

  modelData!: Model;

  public constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://213.248.166.144:7070/customer/lastReservations').subscribe(data => {
      this.modelData = data;
      console.log(this.modelData);
    },
    error => {
      console.error("Hata oluştu: ", error);
    });
  }
  
}