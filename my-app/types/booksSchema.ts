export interface BooksSchema {
  results: [
    {
      _id: string;
      title: string;
      author: string;
      imageUrl: string;
      totalPages: number;
      recommend: boolean;
    },
  ];
  totalPages: number;
  page: number;
  perPage: number;
}
