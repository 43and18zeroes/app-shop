export interface SectionItem {
  id: string;
  path: string;
  thumbnailUrl: string;
  altText: string;
}

export const SECTION: SectionItem[] = [
  {
    id: 'card-grid',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-card-grid-app.webp',
    altText: 'Thumbnail 1',
  },
  {
    id: 'chat',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-chat.webp',
    altText: 'Thumbnail 2',
  },
  {
    id: 'maps',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-maps.webp',
    altText: 'Thumbnail 3',
  },
  {
    id: 'music',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-music.webp',
    altText: 'Thumbnail 4',
  },
  {
    id: 'heart',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-heart.webp',
    altText: 'Thumbnail 5',
  },
  {
    id: 'pad',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-pad.webp',
    altText: 'Thumbnail 6',
  },
  {
    id: 'settings',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-settings.webp',
    altText: 'Thumbnail 7',
  },
  {
    id: 'weather',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-weather.webp',
    altText: 'Thumbnail 8',
  },
  {
    id: 'cam',
    path: 'app-details',
    thumbnailUrl: 'img/thumbnails/thumbnail-rnd-cam.webp',
    altText: 'Thumbnail 9',
  },
];

export const DOUBLED_SECTION: SectionItem[] = [...SECTION, ...SECTION];

export const SECTION_REVERSED: SectionItem[] = [...DOUBLED_SECTION].reverse();
