import { Component, inject } from '@angular/core';

import { GalleryService }
from '../../../../core/services/gallery.service';

import { WishlistService }
from '../../../../core/services/wishlist.service';

import { Photo } from '../../../../shared/models/photo.model';

import { PhotoMasonryGridComponent }
from '../../../../shared/components/photo-masonry-grid/photo-masonry-grid.component';

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [PhotoMasonryGridComponent],
  templateUrl: './wishlist-page.component.html',
  styleUrl: './wishlist-page.component.scss'
})
export class WishlistPageComponent {

  private galleryService =
    inject(GalleryService);

  private wishlistService =
    inject(WishlistService);

  photos: Photo[] = [];

  ngOnInit(): void {

    const ids =
      this.wishlistService.getIds();

    this.photos =
      this.galleryService
        .getPhotos()
        .filter(
          photo =>
            ids.includes(photo.id)
        );

  }

}