import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SECTION, SectionItem } from '../../pages/applications/applications.data';
import { CommonModule } from '@angular/common';

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

  // Route-Param :id
  readonly id = signal<string>(this.route.snapshot.paramMap.get('id') ?? '');

  // Navigations-State (wenn von der Liste geklickt)
  private readonly navState = this.router.getCurrentNavigation()?.extras
    .state as SectionItem | undefined;

  // Fallback: falls State fehlt (z. B. bei Reload), aus Datenquelle holen
  readonly item = computed<SectionItem | undefined>(() => {
    if (this.navState && this.navState.id === this.id()) return this.navState;
    return SECTION.find((s) => s.id === this.id());
  });
}
