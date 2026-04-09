import { api } from "@/services/api";
import { fetchBooks } from "@/services/books.service";
import { Book } from "@/types/booksSchema";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useRecommendedBooks = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ["books", page, perPage],
    queryFn: () => fetchBooks(page, perPage),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};

export const useMyLibrary = () => {
  return useQuery<Book[]>({
    queryKey: ["my-library"],
    queryFn: async () => {
      const response = await api.get("/books/own");
      return response.data;
    },
  });
};
