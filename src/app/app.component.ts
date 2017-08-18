import { Component } from '@angular/core';
import { AddCommentComponent } from './add-comment/add-comment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	// addComment = function() {
	// 	this.comments.push({text: this.comment, author: this.author});
	// };

	// deleteComment = function(index) {
	// 	this.comments.splice(index, 1);
	// };

 // editComment = function(i){
 //  	this.comments[index].text = this.comment;
 //  	this.comments[index].author = this.author;
 //  };

  constructor() { }
}
