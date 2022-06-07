import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private REST_API_SERVER = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { };

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  public numberusers(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }
  public numbervaccinated(){
    return this.httpClient.get(this.REST_API_SERVER+"/vaccinated").pipe(catchError(this.handleError));
  }
}
