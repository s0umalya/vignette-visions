import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { galleryPreviewPhotos } from '../../../../mock-data/gallery-preview.data';

@Component({
  selector: 'app-gallery-preview',
  imports: [NgClass],
  templateUrl: './gallery-preview.component.html',
  styleUrl: './gallery-preview.component.scss'
})
export class GalleryPreviewComponent {
  photos = galleryPreviewPhotos;
}
