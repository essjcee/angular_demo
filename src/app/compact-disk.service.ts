import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CompactDisk } from './models/compact-disk';

@Injectable({
  providedIn: 'root'
})
export class CompactDiskService {
  apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/compactdiscs/';
  }

  getCDs(): Observable<CompactDisk[]> {
    return this.http.get<CompactDisk[]>(this.apiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getCD(id: string): Observable<CompactDisk> {
    return this.http.get<CompactDisk>(this.apiUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  saveCompactDisk(compactDisk: CompactDisk): Observable<CompactDisk> {
    return this.http.post<CompactDisk>(this.apiUrl, JSON.stringify(compactDisk), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateCompactDist(id: string, compactDisk: CompactDisk): Observable<CompactDisk> {
    return this.http.put<CompactDisk>(this.apiUrl + id, JSON.stringify(compactDisk), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteCompactDisk(id: string): Observable<CompactDisk>{
    return this.http.delete<CompactDisk>(this.apiUrl + id).pipe(retry(1),
    catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}
