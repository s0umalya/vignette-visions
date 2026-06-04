import { Component } from '@angular/core';
import { PhotoCardComponent } from '../../../../shared/components/photo-card/photo-card.component';
import { galleryPhotos } from '../../../../mock-data/gallery.data';
import { PhotoMasonryGridComponent } from '../../../../shared/components/photo-masonry-grid/photo-masonry-grid.component';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [PhotoCardComponent, PhotoMasonryGridComponent],
  templateUrl: './gallery-preview.component.html',
  styleUrl: './gallery-preview.component.scss'
})
export class GalleryPreviewComponent {

  photos = galleryPhotos;

}