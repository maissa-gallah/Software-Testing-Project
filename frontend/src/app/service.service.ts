import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private REST_API_SERVER = "http://localhost:8080/users";
  errorMessage: any;

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
  userId:any;
  
  
   public adduser(user: any):Observable<any>{
    this.httpClient.post<any>('http://localhost:8080/users/create', user).subscribe({
        next: data => {
            this.userId = data.id;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    }    
    );
    return(this.userId);
    
    ;
  }
 
   userIdUpdate:any;
  public upadteuser(id: number){ 
        this.httpClient.put<any>(`${this.REST_API_SERVER}/update/${id}`,{})
            .subscribe(data => this.userIdUpdate = data.id)
            ;
          }



  

}


