import { Component, OnDestroy, OnInit } from '@angular/core';
import * as countriesJson from '@app/data/countries.json';
// import { Country } from '../interfaces/country.interfaces';
import { Country } from '@app/models';
import { UpperCasePipe, PercentPipe } from '@angular/common';
import { CountriesService } from '../services/countries.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [UpperCasePipe, PercentPipe]
})
export class CountriesComponent implements OnInit, OnDestroy {
  private destroyAll$: Subject<void> = new Subject<void>();

  selected: Country;
  countries: Country[];
  birthday = new Date();
  total = 123456;
  count = '';

  code: string;

  constructor(private upperCasePipe: UpperCasePipe, private percentPipe: PercentPipe, public countriesService: CountriesService) {

    // if( countriesJson.some((n) => n.name == this.nameCountry) ) {
    //   console.log(this.nameCountry)
    // }

    this.selected = countriesJson[10];
    // console.log(this.selected);

  }

  ngOnInit(): void {
    // this.countriesService.getList().subscribe();
    const service = this.countriesService.getList()
    .subscribe(countries => {
      console.log(countries[7].name);
      // this.selected = countries[9];

      console.log('dentro de la subscripción');
      console.log(service.closed);
    },
    err => {},
    () => {
      console.log('ser terminó la lista');
      console.log(service.closed);
    });

    console.log('se ejecutó antes');
    console.log(service.closed);

  }

  send(name: string): void {
    // console.log('antes: ', name);
    // console.log('antes: ', name.toUpperCase());
    name = this.upperCasePipe.transform(name);
    // console.log('Después: ', name);
  }

  porcent(total: number): void {
    // console.log(total);
    // console.log(this.percentPipe.transform(total));
  }

  getInfo(code: string): void {
    this.countriesService.getCountry(code);
  }

  ngOnDestroy(): void{
    this.destroyAll$.next();
    this.destroyAll$.complete();
    this.destroyAll$.unsubscribe();
  }

}
