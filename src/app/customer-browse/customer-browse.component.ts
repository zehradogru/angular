import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-browse',
  template: '<h1> Rooms </h1><ul><li *ngFor="let room of myList">{{myList}}</li></ul>',
  styleUrls: ['./customer-browse.component.css']
})
export class CustomerBrowseComponent {
  title = 'Customer Browse Component';
  myList: string[] = ["room1", "room2", "room3"];

}

