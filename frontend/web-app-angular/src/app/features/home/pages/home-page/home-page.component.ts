import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FeaturedCollectionsComponent } from '../../components/featured-collections/featured-collections.component';
import { GalleryPageComponent } from '../../../gallery/pages/gallery-page/gallery-page.component';
import { GalleryPreviewComponent } from '../../components/gallery-preview/gallery-preview.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, FeaturedCollectionsComponent, GalleryPreviewComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
