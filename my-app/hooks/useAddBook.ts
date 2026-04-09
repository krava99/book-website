import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addBookFromRecommended } from "@/services/books.service";
import { toast } from "react-toastify";

export const useAddBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (_id: string) => addBookFromRecommended(_id),
    onSuccess: () => {
      toast.success("Book added to your library!");

      queryClient.invalidateQueries({ queryKey: ["my-library"] });
    },
    onError: () => {
      toast.error("Failed to add book. It might already be in your library.");
    },
  });
};
