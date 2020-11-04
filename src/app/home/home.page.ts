import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animals: any;

  constructor(private httpClient: HttpClient) {
    this.animals = this.httpClient.get('https://raw.githubusercontent.com/NoeGarciaRamirez/responsivePersonalizado/main/animals.json');
  }

}
