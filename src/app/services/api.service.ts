import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IPosts } from '../interfaces/i-posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private postsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getData(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.postsURL);
  }

  getData1(): Observable<any>  {
    return this.http.get<IPosts[]>(this.postsURL, { }).pipe(map(data => {
      debugger;
      return data;
    }),
      catchError(err => {
        console.log("err: ", err);
        return throwError(err);
      }))
  };

}
