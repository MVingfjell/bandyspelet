import { Injectable } from '@angular/core';
import {Message} from './message.model'
import { Observable, Subject } from 'rxjs';
import { map, scan, refCount, publishReplay } from 'rxjs/operators';


const initialMessages: Message[] = []
interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}
@Injectable({
  providedIn: 'root'
})
export class CommenthandlerService {
  //public message: Message;
//commentstream: Message[] = []
newMessages: Subject<Message> = new Subject<Message>();
messages: Observable<Message[]>;
//
updates: Subject<any> = new Subject<any>();
//action streams
create: Subject<Message> = new Subject<Message>();

  constructor() {
    this.messages = this.updates
    //watch the updates and accumulate operations on the message
    .pipe(scan((messages: Message[], operation: IMessagesOperation) => {
      return operation(messages);
    }, initialMessages ))
    //make sure we can share most recent list of messages
    publishReplay(1);
    refCount();
    
    this.create
    .pipe(map( function(message: Message): IMessagesOperation{
      return (messages: Message[]) => {
        return messages.concat(message)
      };

    })).subscribe(this.updates);
    this.newMessages
    .subscribe(this.create)
   }

  //an imperative function call to this action stream
  addMessage(message: Message): void {
    this.newMessages.next(message);
  }
  
}
