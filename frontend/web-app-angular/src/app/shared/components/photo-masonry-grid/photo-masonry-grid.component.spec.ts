import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMasonryGridComponent } from './photo-masonry-grid.component';

describe('PhotoMasonryGridComponent', () => {
  let component: PhotoMasonryGridComponent;
  let fixture: ComponentFixture<PhotoMasonryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoMasonryGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoMasonryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
