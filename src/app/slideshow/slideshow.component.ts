import { Component, OnInit, Input } from '@angular/core';
import {ImagebankService } from '../imagebank.service'
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  constructor(public imageBankService: ImagebankService) { }

currentValue: number = 1;
sliderValue(event) {
this.currentValue = event.value;
console.log(this.currentValue)
return this.currentValue
}


  _tab: number;
@Input('selectedTab')

set tab(tab: number){
  this._tab = tab;
  console.log(tab)
}
get tab(): number {return this._tab}

  
  ngOnInit(): void {
  }

}
