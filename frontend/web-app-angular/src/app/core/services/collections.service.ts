import { Injectable } from '@angular/core';

import { collections } from '../../mock-data/collections.data';
import { Collection } from '../../shared/models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  getCollections(): Collection[] {
    return collections;
  }

  getCollectionById(id: string): Collection | undefined {
    return collections.find(
      collection => collection.id === id
    );
  }

}