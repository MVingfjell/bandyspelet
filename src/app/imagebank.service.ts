import { Injectable } from '@angular/core';
enum stages {
  fast,
  dribling,
  oversteg,
  finish,

}
interface image {
  url: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ImagebankService {
   imgArray: any[];

  getImgArray(tab: number): any[] {

    if(stages.fast === tab) {
      this.imgArray = [
        {
        url: './assets/images/fast/fast1.png',
        id: 1,
      },
      {
        url: './assets/images/fast/fast2.png',
        id: 2,
      }
    ]
    return this.imgArray
    }
    if(stages.dribling === tab) {
      this.imgArray = [
        {
        url: './assets/images/dribbling/dribbling1.png',
        id: 1,
      },
      {
        url: './assets/images/dribbling/dribbling2.png',
        id: 2,
      }
    ]
    return this.imgArray

    }
    if(stages.finish === tab) {
      this.imgArray = [
        {
        url: './assets/images/finish/finish1.png',
        id: 1,
      },
      {
        url: './assets/images/finish/finish2.png',
        id: 2,
      },
      {
        url: './assets/images/finish/finish3.png',
        id: 3,
      }
    ]
    return this.imgArray

    }
    if(stages.oversteg === tab) {
      this.imgArray = [
        {
        url: './assets/images/oversteg/oversteg1.png',
        id: 1,
      },
      {
        url: './assets/images/oversteg/oversteg2.png',
        id: 2,
      },
    
    ]
    return this.imgArray

    }

  }
}
