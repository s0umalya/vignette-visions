import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vv-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './vv-button.component.html',
  styleUrl: './vv-button.component.scss'
})
export class VvButtonComponent {

  @Input() label = '';

  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'danger' = 'primary';

}