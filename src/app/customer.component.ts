import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  template: '<h2> {{ title }} </h2>',
})

export class CustomerComponent {
  title = 'List of Customers';
}