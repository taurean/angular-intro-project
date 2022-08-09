import { Component } from "@angular/core";

@Component({
  selector: 'cs-root',
  template: `<div>
    <h1>{{pageTitle}}</h1>
    <cs-products></cs-products>
  </div>`
})

export class AppComponent {
  pageTitle: string = 'Products';
}