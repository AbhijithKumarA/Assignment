import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Create } from '../services/create.model';
import { CreateService } from '../services/create.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  complaints = ['Physical Damage', 'Battery Issue', 'Software Complaint', 'Others']

  constructor(public service: CreateService,
    private toastr: ToastrService) { }

  submit(f: NgForm) {
    this.service.postTicketDetail().subscribe(
      res => {
        this.resetForm(f);
        this.toastr.success('Created successfully!', 'Ticket')
      },
      err => { console.log(err); }
    )
  }

  resetForm(f: NgForm) {
    f.form.reset();
    this.service.ticketFormData = new Create();
  }

  ngOnInit(): void {
  }

}
