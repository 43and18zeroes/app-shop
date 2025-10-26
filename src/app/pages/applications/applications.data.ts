export interface SectionItem {
  id: string;
  thumbnailUrl: string;
  altText: string;
}

export const BASE_PATH = 'app-details';

export const SECTION: SectionItem[] = [
  {
    id: 'card-grid',
    thumbnailUrl: 'img/thumbnails/thumbnail-card-grid-app.webp',
    altText: 'Thumbnail 1',
  },
  {
    id: 'chat',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-chat.webp',
    altText: 'Thumbnail 2',
  },
  {
    id: 'maps',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-maps.webp',
    altText: 'Thumbnail 3',
  },
  {
    id: 'music',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-music.webp',
    altText: 'Thumbnail 4',
  },
  {
    id: 'heart',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-heart.webp',
    altText: 'Thumbnail 5',
  },
  {
    id: 'pad',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-pad.webp',
    altText: 'Thumbnail 6',
  },
  {
    id: 'settings',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-settings.webp',
    altText: 'Thumbnail 7',
  },
  {
    id: 'weather',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-weather.webp',
    altText: 'Thumbnail 8',
  },
  {
    id: 'cam',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-cam.webp',
    altText: 'Thumbnail 9',
  },
];

export const DOUBLED_SECTION: SectionItem[] = [...SECTION, ...SECTION];

export const SECTION_REVERSED: SectionItem[] = [...SECTION, ...SECTION].reverse();
