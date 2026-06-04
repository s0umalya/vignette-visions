import { Component, Input } from '@angular/core';
import { Collection } from '../../models/collection.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.scss'
})
export class CollectionCardComponent {

  @Input({ required: true })
  collection!: Collection;

}