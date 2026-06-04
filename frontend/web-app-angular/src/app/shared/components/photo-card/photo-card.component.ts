import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Photo } from '../../models/photo.model';
import { inject } from '@angular/core';
import { PhotoModalService } from '../../../core/services/photo-modal.service';
import { WishlistService } from '../../../core/services/wishlist.service';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss'
})
export class PhotoCardComponent {

  @Input({ required: true })
  photo!: Photo;

  private modalService = inject(PhotoModalService);
  private wishlistService = inject(WishlistService);

  openPhoto(): void {
    this.modalService.open(this.photo);
  }

  toggleWishlist(
    event: MouseEvent
  ): void {

    event.stopPropagation();

    this.wishlistService.toggle(
      this.photo.id
    );

  }

  isWishlisted(): boolean {

    return this
      .wishlistService
      .isWishlisted(this.photo.id);

  }

}