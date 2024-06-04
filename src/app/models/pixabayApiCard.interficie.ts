export interface PixabayApiResponse {
  hits: {
    id: number;
    user: string;
    imageWidth: number;
    imageHeight: number;
    pageURL: string;
    largeImageURL: string;
  }[];
  total: number;
  totalHits: number;
}
