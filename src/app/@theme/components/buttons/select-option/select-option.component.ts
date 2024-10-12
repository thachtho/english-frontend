import { Component, Input } from '@angular/core';
import { materialModules } from '../../../../pages/pages.i';
import { NgFor } from '@angular/common';

@Component({
  imports: [
    ...materialModules,
    NgFor
  ],
  selector: 'ngx-button-select-option',
  styleUrls: ['select-option.component.scss'],
  templateUrl: 'select-option.component.html',
  standalone: true
})
export class SelectOptionComponent {
    @Input()
    title: string;
    @Input()
    options = [];
}
