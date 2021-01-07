import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CommentService } from './../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../services/comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(public service: CommentService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submit(c: NgForm) {
    if (this.service.commentFormData.commentId == 0)
      this.insertComment(c);
    else
      this.updateComment(c);
  }

  insertComment(c: NgForm) {
    this.service.postComment().subscribe(
      res => {
        this.resetForm(c);
        this.service.refreshList();
      },
      err => { console.log(err) }
    );
  }

  updateComment(c: NgForm) {
    this.service.putComment().subscribe(
      res => {
        this.resetForm(c);
        this.toastr.info('Comment updated')
        this.service.refreshList();
      },
      err => { console.log(err) }
    );
  }

  resetForm(c: NgForm) {
    c.form.reset();
    this.service.commentFormData = new Comment();
  }

}
