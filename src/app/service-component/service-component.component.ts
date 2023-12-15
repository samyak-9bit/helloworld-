import { Component } from '@angular/core';
import { FirstServiceService } from '../first-service.service'; 

@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.css',
  providers: [FirstServiceService]
})
export class ServiceComponentComponent {
    item: string[] = [];
     
    getitem(){
        this.item = this.fservice.getData(); 
    }

    constructor(private fservice:FirstServiceService){}
}
