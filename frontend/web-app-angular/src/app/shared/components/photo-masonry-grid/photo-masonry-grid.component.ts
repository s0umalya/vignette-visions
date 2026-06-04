import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { PhotoCardComponent } from '../photo-card/photo-card.component';

@Component({
  selector: 'app-photo-masonry-grid',
  standalone: true,
  imports: [PhotoCardComponent],
  templateUrl: './photo-masonry-grid.component.html',
  styleUrl: './photo-masonry-grid.component.scss'
})
export class PhotoMasonryGridComponent {

  @Input({ required: true })
  photos: Photo[] = [];

}