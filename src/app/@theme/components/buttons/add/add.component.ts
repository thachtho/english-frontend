import { Component, Input } from '@angular/core';
import { materialModules } from '../../../../pages/pages.i';

@Component({
  imports: [
    ...materialModules
  ],
  selector: 'ngx-button-add',
  styleUrls: ['add.component.scss'],
  templateUrl: 'add.component.html',
  standalone: true
})
export class AddButtonComponent {
  @Input()
  onClick: () => void
    
  click() {
    this.onClick()
  }
}
