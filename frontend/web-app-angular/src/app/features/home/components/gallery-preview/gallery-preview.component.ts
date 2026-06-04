import { Component } from '@angular/core';
import { PhotoCardComponent } from '../../../../shared/components/photo-card/photo-card.component';
import { galleryPhotos } from '../../../../mock-data/gallery.data';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [PhotoCardComponent],
  templateUrl: './gallery-preview.component.html',
  styleUrl: './gallery-preview.component.scss'
})
export class GalleryPreviewComponent {

  photos = galleryPhotos;

}