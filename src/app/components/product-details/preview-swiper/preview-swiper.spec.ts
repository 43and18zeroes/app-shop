import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSwiper } from './preview-swiper';

describe('PreviewSwiper', () => {
  let component: PreviewSwiper;
  let fixture: ComponentFixture<PreviewSwiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewSwiper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewSwiper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
