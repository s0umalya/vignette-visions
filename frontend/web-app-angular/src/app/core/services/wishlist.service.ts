import {
  Injectable,
  computed,
  signal
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlistSignal =
    signal<string[]>([]);

  wishlist = computed(() =>
    this.wishlistSignal()
  );

  constructor() {

    const storedWishlist =
      localStorage.getItem('wishlist');

    if (storedWishlist) {

      this.wishlistSignal.set(
        JSON.parse(storedWishlist)
      );

    }

  }

  add(photoId: string): void {

    if (this.isWishlisted(photoId)) {
      return;
    }

    this.wishlistSignal.update(items => {

      const updatedItems = [
        ...items,
        photoId
      ];

      this.save(updatedItems);

      return updatedItems;

    });

  }

  remove(photoId: string): void {

    this.wishlistSignal.update(items => {

      const updatedItems =
        items.filter(id => id !== photoId);

      this.save(updatedItems);

      return updatedItems;

    });

  }

  toggle(photoId: string): void {

    if (this.isWishlisted(photoId)) {

      this.remove(photoId);

      return;

    }

    this.add(photoId);

  }

  isWishlisted(photoId: string): boolean {

    return this.wishlistSignal()
      .includes(photoId);

  }

  private save(
    wishlist: string[]
  ): void {

    localStorage.setItem(
      'wishlist',
      JSON.stringify(wishlist)
    );

  }

}