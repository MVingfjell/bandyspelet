import { Component, OnInit } from '@angular/core';
import { CommenthandlerService } from '../commenthandler.service';
import {Message} from '../message.model'
import {AuthService} from "../auth.service"
import { Observable } from 'rxjs';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})


export class CommentComponent implements OnInit {
  commentForm: FormGroup;
  comment: AbstractControl
  submitted: boolean
initiatedComment: Message
user: string;
messages: Observable<any>
//messageService: CommenthandlerService = new CommenthandlerService()
  constructor(public commentHandler: CommenthandlerService, public authservice: AuthService, private fb: FormBuilder) { 
this.prepareForm();
  }
prepareForm(){
  this.commentForm = this.fb.group({
    'comment': ['', Validators.compose([Validators.required, Validators.maxLength(30), this.commentValidator])]
  });
  this.comment = this.commentForm.controls['comment'];
  this.comment.valueChanges.subscribe(
    (value: string) =>{
      console.log(value);
      
    }
  )
}

  ngOnInit(): void {
  this.messages = this.commentHandler.messages
this.initiatedComment = new Message()

  }

  commentValidator(control: FormControl): {[s: string]: boolean } {
    if(!control.value.match(/^Great!/)){
      return {invalidComment: true};
    }
  }

  onComment(comment: object){
    this.submitted = true;
    if(this.commentForm.valid){
    
    this.user = this.authservice.getUser()
    let commentValue = this.comment.value;
    //console.log(this.user, commentValue)
    const sendMessage: Message = this.initiatedComment
    sendMessage.user = this.user;
    sendMessage.comment = commentValue;
   //console.log(sendMessage)
    this.commentHandler.addMessage(sendMessage);
    this.resetForm();
    this.getMessages();
  }
  }
  resetForm(): void {
   // this.commentForm.reset();
    this.prepareForm();
    this.submitted = false;

  }



   getMessages(){
  this.commentHandler.messages
  .subscribe((messages: Message[])=> {
    console.log('=> messages:' + messages.length)
  });


}

  

}
