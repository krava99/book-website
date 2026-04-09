import { BooksList } from "@/types/booksSchema";
import { api } from "./api";

export const fetchBooks = async (
  page: number,
  perPage: number,
): Promise<BooksList> => {
  const res = await api.get("/books/recommend", {
    params: {
      page: page,
      limit: perPage,
    },
  });
  return res.data;
};

export const addBookFromRecommended = async (_id: string) => {
  const response = await api.post(`/books/add/${_id}`);
  return response.data;
};
