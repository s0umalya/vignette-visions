import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { AuthResponse } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private http: HttpClient
  ) {}

  register(payload: any): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${environment.apiBaseUrl}/auth/register`,
      payload
    );

  }

  login(payload: any): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${environment.apiBaseUrl}/auth/login`,
      payload
    );

  }

}