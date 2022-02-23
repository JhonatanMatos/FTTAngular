import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //private apiURL = "https://jsonplaceholder.typicode.com";   
  private apiURL = "http://localhost:8080/api/v1/pokemons";   

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    })
  }  

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }   

  //getAll(): Observable<Post[]> {
  //  return this.httpClient.get<Post[]>(this.apiURL + '/posts/')
//
  //  .pipe(
  //    catchError(this.errorHandler)
  //  )
  //}   

  create(post: any): Observable<Post> {
    return this.httpClient.post<Post>(this.apiURL, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }     

  find(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }   

  update(id: number, post: any): Observable<Post> {
    return this.httpClient.put<Post>(this.apiURL + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }   

  delete(id: number){
    return this.httpClient.delete<Post>(this.apiURL + id, this.httpOptions)
    .pipe(

      catchError(this.errorHandler)

    )
  }  

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);

 }
  
}
