import { Injectable } from '@angular/core';
import { galleryPhotos } from '../../data/gallery.data';
import { Photo } from '../../shared/models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  getPhotos(): Photo[] {
    return [...galleryPhotos];
  }

}