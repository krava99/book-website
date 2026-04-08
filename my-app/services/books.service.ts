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
