import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { Country, Post } from '../interfaces/country.interfaces';
import { delay, flatMap, mergeMap, retry, retryWhen, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnDestroy {

  selectedCountry$: Subject<Country> = new Subject<Country>();
  error$: Subject<string> = new Subject<string>();

  private url = 'https://restcountries.eu/rest/v2/allaa';
  private urlCode = 'https://restcountries.eu/rest/v2';

  private urlJsonApi = 'https://jsonplaceholder.typicode.com';

  private destroyAll$: Subject<void> = new Subject<void>();

  constructor( private http: HttpClient) { }

  getList(): Observable<Country[]> {
    // return this.http.get<Country[]>(this.url).pipe( retry(3) );
    return this.http.get<Country[]>(this.url)
      .pipe( retryWhen( err => {
        let retries = 3;
        return err
          .pipe(
            delay(1500),
            mergeMap( error => {
              if (retries-- > 0) {
                console.log('val:', retries);
                return of(error);
              } else {
                console.log('GG');
                return throwError(error);

              }
            })
          );
      }));
  }

  getCountry(code: string): void {
    const apiGetUrl = `${this.urlCode}/alpha/${code}`;
    const dataService = this.http.get(apiGetUrl)
      .pipe(
        takeUntil(this.destroyAll$)
      )
      .subscribe( (country: Country) => {
        console.log('country:', country);
        this.error$.next(null);
        this.selectedCountry$.next(country);


        // if (countries[code]) {
        //   this.error$.next(null);
        //   this.selectedCountry$.next(countries[code]);
        //   // dataService.unsubscribe();
        // } else {
        //   this.selectedCountry$.next(null);
        //   this.error$.next('No se encontró el código del país');
        // }
      },
      err => {
        console.log('error');
        this.selectedCountry$.next(null);
        this.error$.next('No se encontró el código del país');
        dataService.unsubscribe();
      },
      () => {
        console.log('complete');
        dataService.unsubscribe();
      });
  }

  addPost(post: Post): Observable<Post> {
    console.log('post---', post);
    const url = `${this.urlJsonApi}/posts`;

    console.log(url);
    return this.http.post<Post>(url, post);
  }

  addUpdatePost(post: Post): Observable<Post> {
    console.log('post---', post);
    const url = `${this.urlJsonApi}/posts/1`;

    console.log(url);
    return this.http.put<Post>(url, post);
  }

  addDeletePost(id: number): Observable<object> {
    const url = `${this.urlJsonApi}/posts/${id}`;

    console.log(url);
    return this.http.delete<object>(url);
  }

  ngOnDestroy(): void{
    this.destroyAll$.next();
    this.destroyAll$.complete();
    this.destroyAll$.unsubscribe();
  }
}
