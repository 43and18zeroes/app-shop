import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  SECTION,
  SectionItem,
  BASE_PATH as DEFAULT_LOGO_PATH,
} from '../../pages/applications/applications.data';
import { CommonModule } from '@angular/common';

const LOGO_PATH_BY_FEATURE: Record<string, string> = {
  'app-details': 'img/applications/logos',
  'game-details': 'img/games/logos',
  // ggf. weitere
};

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly id = signal<string>(this.route.snapshot.paramMap.get('id') ?? '');

  private readonly feature = (() => {
    const path = this.router.url.split('?')[0];
    const segments = path.split('/').filter(Boolean);
    return segments[0] ?? '';
  })();

  readonly logoBasePath =
    LOGO_PATH_BY_FEATURE[this.feature] ?? DEFAULT_LOGO_PATH;

  private readonly navState = this.router.getCurrentNavigation()?.extras
    .state as SectionItem | undefined;

  readonly item = computed<SectionItem | undefined>(() => {
    if (this.navState && this.navState.id === this.id()) return this.navState;
    return SECTION.find((s) => s.id === this.id());
  });
}
