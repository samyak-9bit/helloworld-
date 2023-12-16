import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondServiceService {
   nums:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

   getNum():number[]{
    return this.nums;
   }
  constructor() { }
}
