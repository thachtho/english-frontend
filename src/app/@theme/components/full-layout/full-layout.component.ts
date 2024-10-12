import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ngx-full-layout',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  providers:[],
  templateUrl: './full-layout.component.html',
})
export class FullLayoutComponent {

}
