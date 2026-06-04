import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlistIds =
    signal<string[]>([]);

  readonly ids =
    computed(() => this.wishlistIds());

  readonly count =
    computed(() => this.wishlistIds().length);

  toggle(photoId: string): void {

    const ids = this.wishlistIds();

    if (ids.includes(photoId)) {

      this.wishlistIds.set(
        ids.filter(id => id !== photoId)
      );

      return;
    }

    this.wishlistIds.set([
      ...ids,
      photoId
    ]);

  }

  isWishlisted(
    photoId: string
  ): boolean {

    return this
      .wishlistIds()
      .includes(photoId);

  }

}