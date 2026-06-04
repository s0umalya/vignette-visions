import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { PhotoModalService } from '../../../core/services/photo-modal.service';

@Component({
  selector: 'app-photo-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './photo-modal.component.html',
  styleUrl: './photo-modal.component.scss'
})
export class PhotoModalComponent {

  modalService = inject(PhotoModalService);

}