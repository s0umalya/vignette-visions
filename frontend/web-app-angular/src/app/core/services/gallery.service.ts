import { Injectable } from '@angular/core';
import { galleryPhotos } from '../../mock-data/gallery.data';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  getPhotos() {
    return galleryPhotos;
  }

}