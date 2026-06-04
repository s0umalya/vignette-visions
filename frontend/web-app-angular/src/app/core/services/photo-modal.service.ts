import { Injectable, signal } from '@angular/core';
import { Photo } from '../../shared/models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoModalService {

  selectedPhoto = signal<Photo | null>(null);

  open(photo: Photo): void {
    this.selectedPhoto.set(photo);
  }

  close(): void {
    this.selectedPhoto.set(null);
  }

}