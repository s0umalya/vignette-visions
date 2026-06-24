import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { PhotoModalService }
from '../../../core/services/photo-modal.service';

import { WishlistService }
from '../../../core/services/wishlist.service';

@Component({
  selector: 'app-photo-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './photo-modal.component.html',
  styleUrl: './photo-modal.component.scss'
})
export class PhotoModalComponent {

  modalService =
    inject(PhotoModalService);

  protected wishlistService =
    inject(WishlistService);

  isWishlisted(photoId: string): boolean {

    return this.wishlistService
      .isWishlisted(photoId);

  }

  toggleWishlist(): void {

    const photo =
      this.modalService.selectedPhoto();

    if (!photo) {
      return;
    }

    this.wishlistService.toggle(
      photo.id
    );

  }

}