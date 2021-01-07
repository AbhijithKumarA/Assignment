import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Create } from './create.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) {}

  readonly baseURL = 'http://localhost:57367/api/TicketDetail'

  ticketFormData : Create = new Create();

  ticketsList : Create[];

  ticketDetails : Create = new Create;

  postTicketDetail(){
    return this.http.post(this.baseURL, this.ticketFormData);
  }

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.ticketsList = res as Create[]);
  }

}
