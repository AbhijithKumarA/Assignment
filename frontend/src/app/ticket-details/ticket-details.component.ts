import { Comment } from './../services/comment.model';
import { CreateService } from './../services/create.service';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  constructor(public service: CommentService, public createservice: CreateService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.createservice.refreshList();
  }

  populateComment(selectedComment: Comment) {
    this.service.commentFormData = Object.assign({}, selectedComment);
  }

  onDelete(id: number) {
    if(confirm('Delete this comment?'))
    {
      this.service.deleteComment(id)
      .subscribe(
        res => { 
          this.service.refreshList();
          this.toast.error("Comment deleted")
        },
        err => { console.log(err) }
      );
    }
  }

}
