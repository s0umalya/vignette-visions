import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Collection } from '../../../../shared/models/collection.model';
import { Photo } from '../../../../shared/models/photo.model';

import { CollectionsService } from '../../../../core/services/collections.service';
import { GalleryService } from '../../../../core/services/gallery.service';

import { PhotoMasonryGridComponent } from '../../../../shared/components/photo-masonry-grid/photo-masonry-grid.component';

@Component({
  selector: 'app-collection-details-page',
  standalone: true,
  imports: [PhotoMasonryGridComponent],
  templateUrl: './collection-details-page.component.html',
  styleUrl: './collection-details-page.component.scss'
})
export class CollectionDetailsPageComponent {

  private route = inject(ActivatedRoute);

  private collectionsService = inject(CollectionsService);

  private galleryService = inject(GalleryService);

  collection?: Collection;

  photos: Photo[] = [];

  ngOnInit(): void {

    const collectionId =
      this.route.snapshot.paramMap.get('id');

    if (!collectionId) {
      return;
    }

    this.collection =
      this.collectionsService.getCollectionById(
        collectionId
      );

    this.photos =
      this.galleryService
        .getPhotos()
        .filter(
          photo =>
            photo.collectionId === collectionId
        );
  }

}