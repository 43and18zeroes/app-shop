import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  PRODUCT_PATH,
  DOUBLED_SECTION,
  SECTION_REVERSED,
  SectionItem,
} from './applications.data';
import { Router } from '@angular/router';
import { LogoSwiper } from '../../components/logo-swiper/logo-swiper';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, LogoSwiper],
  templateUrl: './applications.html',
  styleUrl: './applications.scss',
})
export class Applications {
  private router = inject(Router);

  readonly productPath = PRODUCT_PATH;
  readonly section: SectionItem[] = DOUBLED_SECTION;
  readonly sectionReversed: SectionItem[] = SECTION_REVERSED;

  openDetails(item: SectionItem) {
    this.router.navigate(['/', PRODUCT_PATH, item.productId], { state: item });
  }
}
