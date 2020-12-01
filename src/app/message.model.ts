import {AuthService} from "./auth.service"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Message {
//user: string;
user: string;
comment: any;
date: Date;
    constructor (obj?: any){

//this.user = this.user
this.user = obj && obj.user || null
this.comment = obj && obj.comment || null
this.date = obj && obj.date || null
}

}
