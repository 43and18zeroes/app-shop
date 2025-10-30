import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import {
  BASE_PATH,
  DOUBLED_SECTION,
  SECTION_REVERSED,
  SectionItem,
} from './applications.data';
import { DeviceService } from '../../services/device-service';
import { Router } from '@angular/router';
import { LogoSwiper } from "../../components/logo-swiper/logo-swiper";

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, LogoSwiper],
  templateUrl: './applications.html',
  styleUrl: './applications.scss',
})

export class Applications {
  private router = inject(Router);

  readonly productPath = BASE_PATH;
  readonly section: SectionItem[] = DOUBLED_SECTION;
  readonly sectionReversed: SectionItem[] = SECTION_REVERSED;

  openDetails(item: SectionItem) {
    this.router.navigate(['/', BASE_PATH, item.id], { state: item });
  }
}

// export class Applications {
//   private router = inject(Router);
//   private deviceService = inject(DeviceService);
//   readonly isMobileDevice =
//     this.deviceService.isAndroid || this.deviceService.isiPhone;

//   readonly productPath = BASE_PATH;
//   readonly section: SectionItem[] = DOUBLED_SECTION;
//   readonly sectionReversed: SectionItem[] = SECTION_REVERSED;

//   @ViewChild('swiperContainer1') swiperContainer1!: ElementRef<HTMLElement>;
//   @ViewChild('swiperContainer2') swiperContainer2!: ElementRef<HTMLElement>;

//   private swiperInstances: Swiper[] = [];

//   openDetails(item: SectionItem) {
//     this.router.navigate(['/', BASE_PATH, item.id], { state: item });
//   }

//   ngAfterViewInit(): void {
//     const makeConfig = (host: HTMLElement): SwiperOptions => {
//       let nextEl: HTMLElement | undefined = undefined;
//       let prevEl: HTMLElement | undefined = undefined;

//       if (!this.isMobileDevice) {
//         nextEl = host.querySelector<HTMLElement>(
//           '.swiper-button-next'
//         ) as HTMLElement;
//         prevEl = host.querySelector<HTMLElement>(
//           '.swiper-button-prev'
//         ) as HTMLElement;
//       }

//       const baseConfig: SwiperOptions = {
//         modules: [Navigation],
//         loop: false,
//         navigation: {
//           nextEl: nextEl as HTMLElement,
//           prevEl: prevEl as HTMLElement,
//         } as NavigationOptions,
//       };
//       if (this.isMobileDevice) {
//         baseConfig.speed = 200;
//         baseConfig.breakpoints = {
//           320: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
//           600: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
//           960: { slidesPerView: 8, slidesPerGroup: 8, spaceBetween: 10 },
//         };
//       } else {
//         baseConfig.speed = 500;
//         baseConfig.breakpoints = {
//           320: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
//           600: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
//           960: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 20 },
//           1440: { slidesPerView: 8, slidesPerGroup: 8, spaceBetween: 20 },
//         };
//       }

//       return baseConfig;
//     };

//     [this.swiperContainer1, this.swiperContainer2].forEach((ref) => {
//       const el = ref?.nativeElement;
//       if (el) this.swiperInstances.push(new Swiper(el, makeConfig(el)));
//     });
//   }

//   ngOnDestroy(): void {
//     this.swiperInstances.forEach((s) => s.destroy(true, true));
//     this.swiperInstances = [];
//   }
// }
