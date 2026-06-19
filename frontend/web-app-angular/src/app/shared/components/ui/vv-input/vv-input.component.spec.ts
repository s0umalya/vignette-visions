import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvInputComponent } from './vv-input.component';

describe('VvInputComponent', () => {
  let component: VvInputComponent;
  let fixture: ComponentFixture<VvInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VvInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
