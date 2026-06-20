import { Component, inject } from '@angular/core';

import { Photo } from '../../../../shared/models/photo.model';
import { PhotoCardComponent } from '../../../../shared/components/photo-card/photo-card.component';

import { GalleryService } from '../../../../core/services/gallery.service';
import { PhotoMasonryGridComponent } from '../../../../shared/components/photo-masonry-grid/photo-masonry-grid.component';
import { collections } from '../../../../data/collections.data';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [PhotoCardComponent, PhotoMasonryGridComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {

  private galleryService = inject(GalleryService);

  photos: Photo[] = [];

  filteredPhotos: Photo[] = [];

  searchTerm = '';

  selectedCollection = 'all';

  collections = collections;

  ngOnInit(): void {
    this.photos =
      this.galleryService.getPhotos();

    this.filteredPhotos = this.photos;
  }

  filterPhotos(): void {

    this.filteredPhotos =
      this.photos.filter(photo => {

        const matchesCollection =
          this.selectedCollection === 'all'
          || photo.collectionId === this.selectedCollection;

        const matchesSearch =
          photo.title
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
          ||
          photo.location
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase());

        return (
          matchesCollection &&
          matchesSearch
        );

      });

  }

  setCollection(
    collectionId: string
  ): void {

    this.selectedCollection =
      collectionId;

    this.filterPhotos();

  }

  onSearch(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    this.searchTerm =
      input.value;

    this.filterPhotos();

  }

}