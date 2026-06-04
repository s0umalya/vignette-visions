import {
  Component,
  computed,
  inject
} from '@angular/core';

import { GalleryService }
from '../../../../core/services/gallery.service';

import { WishlistService }
from '../../../../core/services/wishlist.service';

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

  wishlistService =
    inject(WishlistService);

  photos = computed(() => {

    const ids =
      this.wishlistService.ids();

    return this
      .galleryService
      .getPhotos()
      .filter(
        photo =>
          ids.includes(photo.id)
      );

  });

}