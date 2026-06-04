import { Component, inject } from '@angular/core';

import { Photo } from '../../../../shared/models/photo.model';
import { PhotoCardComponent } from '../../../../shared/components/photo-card/photo-card.component';

import { GalleryService } from '../../../../core/services/gallery.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [PhotoCardComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {

  private galleryService = inject(GalleryService);

  photos: Photo[] = [];

  ngOnInit(): void {
    this.photos = this.galleryService.getPhotos();
  }

}