import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlistIds =
    signal<string[]>([]);

  readonly count = computed(
    () => this.wishlistIds().length
  );

  readonly ids = computed(
    () => this.wishlistIds()
  );

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

  getIds(): string[] {
  return this.wishlistIds();
}

}