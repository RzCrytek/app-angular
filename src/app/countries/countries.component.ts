import { Component, OnInit } from '@angular/core';
import * as countries from '../../assets/countries.json';
import { Country } from '../interfaces/country.interfaces';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  selected: Country;
  nameCountry: string = 'Peru';

  constructor() {

    // if( countries.some((n) => n.name == this.nameCountry) ) {
    //   console.log(n.name)
    // }

    this.selected = countries[10];
    console.log(this.selected);

  }

  ngOnInit(): void {
  }

}
