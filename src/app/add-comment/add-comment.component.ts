import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comments = [];

  addComment = function() {
		this.comments.push({text: this.comment, author: this.author});
	};

	deleteComment = function(index) {
		this.comments.splice(index, 1);
	};

	editComment = function(index){
  	this.comments[index].text = this.comment;
  	this.comments[index].author = this.author;
  };

  constructor() { }

  ngOnInit() {
  }

}
