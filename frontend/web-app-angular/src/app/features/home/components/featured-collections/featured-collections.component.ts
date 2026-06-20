import { Component } from '@angular/core';
import { CollectionCardComponent } from '../../../../shared/components/collection-card/collection-card.component';

import { collections } from '../../../../data/collections.data';

@Component({
  selector: 'app-featured-collections',
  standalone: true,
  imports: [CollectionCardComponent],
  templateUrl: './featured-collections.component.html',
  styleUrl: './featured-collections.component.scss'
})
export class FeaturedCollectionsComponent {

  collections = collections;

}