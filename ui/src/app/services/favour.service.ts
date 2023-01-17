import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Favour} from "../interfaces/favour";
import {catchError, Observable, throwError} from "rxjs";
import {Audit} from "../interfaces/audit";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

const url = "https://api.telegram.org/";
const botToken = "bot5984600180:AAGholamswxDF5zoyeDLUKh3UUpuArqSF0A";
const chatId = "470718409";

@Injectable({
  providedIn: 'root'
})
export class FavourService {

  constructor(private http: HttpClient) { }

  sendFavour(favour: Favour) : Observable<Audit>{
    let content = {chat_id: chatId, text: this.favourToText(favour)}
    return this.http.post<Audit>(url + botToken + "/sendMessage", content, httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }

  private favourToText(favour: Favour){
    return favour.name + "\n" + favour.phone + "\n" + favour.messenger
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError (() => new Error('Something bad happened; please try again later.'));
  }
}
