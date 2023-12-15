import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
   
  data:string[]= ["item1","item2","item3","item4","item5"];

  getData():string[]{
    return this.data;
  }
  constructor() { }
}
