import { Component, OnInit } from '@angular/core';
import { Create } from '../services/create.model';
import { CreateService } from '../services/create.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  constructor(public service: CreateService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  viewData(selectedRecord: Create) {
  this.service.ticketDetails = selectedRecord;
  }
}
