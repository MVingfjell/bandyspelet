import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CommenthandlerService } from '../commenthandler.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-commentfeed',
  templateUrl: './commentfeed.component.html',
  styleUrls: ['./commentfeed.component.css']
})
export class CommentfeedComponent implements OnInit {
//@Input() messages: Message;
messages: Observable<any>
constructor(public commentHandler: CommenthandlerService, public authservice: AuthService) { }

  ngOnInit(): void {
    this.messages = this.commentHandler.messages

  }

}
