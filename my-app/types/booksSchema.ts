export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
}

export interface BooksList {
  results: Book[];
  totalPages: number;
  page: number;
  perPage: number;
}
