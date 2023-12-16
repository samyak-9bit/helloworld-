import { Component } from '@angular/core';
import { FirstServiceService } from '../first-service.service'; 
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { SecondServiceService } from '../second-service.service';

@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [NgFor,NgIf,NgStyle,NgClass,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.css',
  providers: [FirstServiceService,SecondServiceService]
})
export class ServiceComponentComponent {
    item: string[] = [];
    num: number[]=[];
     
    getitem(){
        this.item = this.fservice.getData(); 
    }

    getNumber(){
         this.num = this.sservice.getNum();
    }

    constructor(private fservice:FirstServiceService, private sservice: SecondServiceService){}
}
