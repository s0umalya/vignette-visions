export type PhotoOrientation =
  | 'landscape'
  | 'portrait';

export interface Photo {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  orientation: PhotoOrientation;
  collectionId: string;
}