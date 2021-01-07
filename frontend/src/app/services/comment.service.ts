import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from "./comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  readonly BaseURL = 'http://localhost:57367/api/Comment'

  commentFormData: Comment = new Comment();
  commentList : Comment[];

  postComment() {
    return this.http.post(this.BaseURL, this.commentFormData);
  }
  
  putComment() {
    return this.http.put(`${this.BaseURL}/${this.commentFormData.commentId}`, this.commentFormData);
  }

  deleteComment(id: number) {
    return this.http.delete(`${this.BaseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.BaseURL)
    .toPromise()
    .then(res => this.commentList = res as Comment[]);
  }
}
