import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnDestroy {

  selectedCountry$: Subject<Country> = new Subject<Country>();
  error$: Subject<string> = new Subject<string>();

  private url = 'https://restcountries.eu/rest/v2/all';
  private urlCode = 'https://restcountries.eu/rest/v2';
  private destroyAll$: Subject<void> = new Subject<void>();

  constructor( private http: HttpClient) { }

  getList(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

  getCountry(code: string): void {
    const apiGetUrl = `${this.urlCode}/alpha/${code}`;
    const dataService = this.http.get(apiGetUrl)
      .pipe(
        takeUntil(this.destroyAll$)
      )
      .subscribe( countrie => {
        console.log(countrie);


        if (countries[code]) {
          this.error$.next(null);
          this.selectedCountry$.next(countries[code]);
          // dataService.unsubscribe();
        } else {
          this.selectedCountry$.next(null);
          this.error$.next('No se encontró el código del país');
        }
      },
      err => {
        dataService.unsubscribe();
      },
      () => {
        console.log('complete');
        dataService.unsubscribe();
      });
  }

  ngOnDestroy(): void{
    this.destroyAll$.next();
    this.destroyAll$.complete();
    this.destroyAll$.unsubscribe();
  }
}
