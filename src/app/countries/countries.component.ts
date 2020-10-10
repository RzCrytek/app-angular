import { Component, OnInit } from '@angular/core';
import * as countriesJson from '@app/data/countries.json';
// import { Country } from '../interfaces/country.interfaces';
import { Country } from '@app/models';
import { UpperCasePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [UpperCasePipe, PercentPipe]
})
export class CountriesComponent implements OnInit {
  selected: Country;
  countries: Country[];
  birthday = new Date();
  total = 123456;
  count = '';

  constructor(private upperCasePipe: UpperCasePipe, private percentPipe: PercentPipe) {

    // if( countriesJson.some((n) => n.name == this.nameCountry) ) {
    //   console.log(this.nameCountry)
    // }

    this.selected = countriesJson[10];
    console.log(this.selected);

  }

  ngOnInit(): void {
  }

  send(name: string): void {
    console.log('antes: ', name);
    // console.log('antes: ', name.toUpperCase());
    name = this.upperCasePipe.transform(name);
    console.log('Después: ', name);
  }

  porcent(total: number): void {
    console.log(total);
    console.log(this.percentPipe.transform(total));
  }

}
