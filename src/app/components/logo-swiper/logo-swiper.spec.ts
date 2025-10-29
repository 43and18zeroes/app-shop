import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSwiper } from './logo-swiper';

describe('LogoSwiper', () => {
  let component: LogoSwiper;
  let fixture: ComponentFixture<LogoSwiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSwiper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSwiper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
