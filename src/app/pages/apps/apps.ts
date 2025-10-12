import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { NavigationOptions, SwiperOptions } from 'swiper/types';

const navIconSize = '10px';

@Component({
  selector: 'app-apps',
  imports: [CommonModule],
  templateUrl: './apps.html',
  styleUrl: './apps.scss',
})
export class Apps {
  section = [
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-card-grid-app.webp',
      altText: 'Thumbnail 1',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-chat.webp',
      altText: 'Thumbnail 2',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-maps.webp',
      altText: 'Thumbnail 3',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-music.webp',
      altText: 'Thumbnail 4',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-music-heart.webp',
      altText: 'Thumbnail 5',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-pad.webp',
      altText: 'Thumbnail 6',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-settings.webp',
      altText: 'Thumbnail 7',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-weather.webp',
      altText: 'Thumbnail 8',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-cam.webp',
      altText: 'Thumbnail 9',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-chat.webp',
      altText: 'Thumbnail 10',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-maps.webp',
      altText: 'Thumbnail 11',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-music.webp',
      altText: 'Thumbnail 12',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-music-heart.webp',
      altText: 'Thumbnail 13',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-pad.webp',
      altText: 'Thumbnail 14',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-settings.webp',
      altText: 'Thumbnail 15',
    },
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-weather.webp',
      altText: 'Thumbnail 16',
    },
  ];

  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef<HTMLElement>;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef<HTMLElement>;

  private swiperInstances: Swiper[] = [];

  ngAfterViewInit(): void {
  const makeConfig = (host: HTMLElement): SwiperOptions => {
    const next = host.querySelector<HTMLElement>('.swiper-button-next');
    const prev = host.querySelector<HTMLElement>('.swiper-button-prev');

    return {
      modules: [Navigation],
      slidesPerView: 8,
      slidesPerGroup: 8,
      spaceBetween: 28,
      loop: false,
      speed: 500,
      navigation: {
        nextEl: next as HTMLElement,   // <-- HTMLElement, nicht Element
        prevEl: prev as HTMLElement,
      } as NavigationOptions,
      breakpoints: {
        320:  { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
        768:  { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
        992:  { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
        1200: { slidesPerView: 8, slidesPerGroup: 8, spaceBetween: 28 },
      },
    };
  };

  [this.swiperContainer1, this.swiperContainer2].forEach(ref => {
    const el = ref?.nativeElement;
    if (el) this.swiperInstances.push(new Swiper(el, makeConfig(el)));
  });
}

  ngOnDestroy(): void {
    this.swiperInstances.forEach((s) => s.destroy(true, true));
    this.swiperInstances = [];
  }
}
