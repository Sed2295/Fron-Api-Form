import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  _send_form(form) {
    return this.http.post(`${environment.API}/users`, form)
  }
  _send_second_form(form) {
    return this.http.post(`${environment.API}/flatten_users`, form, { observe: "response" })
  }
}
