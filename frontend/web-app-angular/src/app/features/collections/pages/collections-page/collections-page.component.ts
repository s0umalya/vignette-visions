import { Component } from '@angular/core';
import { CollectionCardComponent } from '../../../../shared/components/collection-card/collection-card.component';

import { collections } from '../../../../data/collections.data';

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [CollectionCardComponent],
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.scss'
})
export class CollectionsPageComponent {

  collections = collections;

}