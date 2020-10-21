import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material/tabs';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public first='Fast';
  public second='dribbling';
  public third='oversteg';
  public four='finish';
  
  selectedTabIndex:number = 0
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedTabIndex = tabChangeEvent.index;
   // console.log('index => ', tabChangeEvent.index);
    console.log(this.selectedTabIndex)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
