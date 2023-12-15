import { Component } from '@angular/core';
import { SecondcomponentComponent } from '../secondcomponent/secondcomponent.component';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [SecondcomponentComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {

}
