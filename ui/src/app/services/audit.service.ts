import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Audit} from "../interfaces/audit";
import {catchError, Observable, throwError} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

const auditUrl = "https://localhost:7059/api/AuditForm";

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) { }

  sendAudit(audit: Audit) : Observable<Audit>{
    return this.http.post<Audit>(auditUrl, audit, httpOptions)
      .pipe(
        catchError(this.handleError)
      );

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
