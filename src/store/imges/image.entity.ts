export interface ImageEntity {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface ImageState {
  listImages: ImageEntity[];
}
