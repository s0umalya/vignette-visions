import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvButtonComponent } from './vv-button.component';

describe('VvButtonComponent', () => {
  let component: VvButtonComponent;
  let fixture: ComponentFixture<VvButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VvButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
