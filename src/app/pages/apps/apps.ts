import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-apps',
  imports: [CommonModule],
  templateUrl: './apps.html',
  styleUrl: './apps.scss',
})
export class Apps {
  section = [
    {
      thumbnailUrl: 'img/thumbnails/thumbnail-rnd-cam.webp',
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

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  swiperInstance: Swiper | null = null;

  ngAfterViewInit(): void {
    if (this.swiperContainer && this.swiperContainer.nativeElement) {
      this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation],
        slidesPerView: 8,
        slidesPerGroup: 4,
        spaceBetween: 28,
        loop: false,
        pagination: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 8,
            slidesPerGroup: 4,
            spaceBetween: 28,
          },
        },
      });
    } else {
      console.error('Swiper container not found!');
    }
  }

  ngOnDestroy(): void {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }
}
