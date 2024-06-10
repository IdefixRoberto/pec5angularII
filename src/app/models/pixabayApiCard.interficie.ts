export interface PixabayApiResponse {
  hits: {
    id: number;
    user: string;
    imageWidth: number;
    imageHeight: number;
    pageURL: string;
    webformatURL: string;
  }[];
  total: number;
  totalHits: number;
}
