import { Component, Input } from '@angular/core';
import { Collection } from '../../models/collection.model';

@Component({
  selector: 'app-collection-card',
  standalone: true,
  imports: [],
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.scss'
})
export class CollectionCardComponent {

  @Input({ required: true })
  collection!: Collection;

}