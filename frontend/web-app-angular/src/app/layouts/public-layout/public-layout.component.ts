import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { PhotoModalComponent } from '../../shared/components/photo-modal/photo-modal.component';

@Component({
  selector: 'app-public-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet, PhotoModalComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

}
