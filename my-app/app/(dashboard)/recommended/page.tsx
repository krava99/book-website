"use client";

import { fetchBooks } from "@/services/books.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function RecommendedPage() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", page, perPage],
    queryFn: () => fetchBooks(page, perPage),
    placeholderData: keepPreviousData,
  });

  const handleNextPage = () => {
    if (data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className="w-212 h-163 bg-[#1f1f1f] rounded-4xl pt-10 px-10 pb-7">
        <div className="flex justify-between mb-5 ">
          <h2 className="text-3xl font-bold">Recommended</h2>
          <div className="flex gap-2 items-center">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="flex items-center justify-center border border-[rgba(249,249,249,0.2)] rounded-full w-10 h-10 transition-colors disabled:cursor-not-allowed group"
            >
              <FaAngleLeft
                className={`w-auto h-auto transition-opacity ${page === 1 ? "opacity-20" : "opacity-100"}`}
                width={10}
                height={5}
              />
            </button>

            {/* Кнопка ВПЕРЕД */}
            <button
              onClick={handleNextPage}
              disabled={data && page >= data.totalPages}
              className="flex items-center justify-center border border-[rgba(249,249,249,0.2)] rounded-full w-10 h-10 transition-colors disabled:cursor-not-allowed group"
            >
              <FaAngleRight
                className={`w-auto h-auto transition-opacity ${data && page >= data.totalPages ? "opacity-20" : "opacity-100"}`}
                width={10}
                height={5}
              />
            </button>
          </div>
        </div>
        <div>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Something went wrong...</p>}
          <ul className="grid grid-cols-5 gap-5">
            {data?.results.map((book) => (
              <li key={book._id} className="w-34.25 h-62 flex flex-col gap-2">
                <div className="relative w-34.25 h-52">
                  <Image
                    className="rounded-xl object-cover"
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    sizes="137px"
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="font-bold text-[14px] leading-tight truncate text-white">
                    {book.title}
                  </p>
                  <p className="font-medium text-[14px] text-[#686868] truncate">
                    {book.author}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
