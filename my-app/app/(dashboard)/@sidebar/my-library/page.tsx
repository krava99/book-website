"use client";
import { useRecommendedBooks } from "@/hooks/useBooks";
import Image from "next/image";
import Link from "next/link";

export default function MyLibrarySidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading, isError } = useRecommendedBooks(1, 3);
  return (
    <aside className="w-89 h-163 bg-[#1f1f1f] rounded-4xl">
      <div className="flex flex-col mx-5 pt-10  gap-2">
        <p className="text-white text-[14px] ml-3.5">Create your library:</p>
        <label className="flex items-center bg-[#262626] rounded-xl px-3.5 py-3 border border-transparent focus-within:border-[rgba(249,249,249,0.2)] cursor-text transition-all">
          <span className="text-[#686868] text-[14px] whitespace-nowrap mr-2">
            Book title:
          </span>
          <input
            className="bg-transparent text-white text-[14px] outline-none w-full placeholder:text-[#F9F9F9]"
            type="text"
            placeholder="Enter text"
          />
        </label>
        <label className="flex items-center bg-[#262626] rounded-xl px-3.5 py-3 border border-transparent focus-within:border-[rgba(249,249,249,0.2)] cursor-text transition-all">
          <span className="text-[#686868] text-[14px] whitespace-nowrap mr-2">
            The author:
          </span>
          <input
            className="bg-transparent text-white text-[14px] outline-none w-full placeholder:text-[#F9F9F9]"
            type="text"
            placeholder="Hilarion Pavlyuk"
          />
        </label>
        <label className="flex items-center bg-[#262626] rounded-xl px-3.5 py-3 border border-transparent focus-within:border-[rgba(249,249,249,0.2)] cursor-text transition-all">
          <span className="text-[#686868] text-[14px] whitespace-nowrap mr-2">
            Number of pages:
          </span>
          <input
            className="bg-transparent text-white text-[14px] outline-none w-full placeholder:text-[#F9F9F9]"
            type="text"
            placeholder="600"
          />
        </label>
        <button className="border border-[rgba(249,249,249,0.2)] rounded-[30px]  w-28.5 h-10.5">
          Add book
        </button>
      </div>
      <div className="w-78 h-68 bg-[#262626] rounded-xl my-5 ml-4 px-5 pt-5">
        <p className="font-bold text-[20px]  text-[#f9f9f9] mb-5">
          Recommended books
        </p>
        <ul className="grid grid-cols-3 gap-5 items-start">
          {data?.results.map((book) => (
            <li key={book._id} className="flex flex-col gap-2 w-17.75">
              <div className="relative w-17.75 h-26.75 shrink-0">
                <Image
                  className="rounded-lg "
                  src={book.imageUrl}
                  alt={book.title}
                  fill
                  sizes="71px"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-bold text-[10px] leading-tight text-white uppercase truncate">
                  {book.title}
                </p>
                <p className="font-medium text-[10px] text-[#686868] truncate mb-5">
                  {book.author}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          className="font-medium text-[14px] underline decoration-[#686868] text-[#686868] "
          href="/home"
        >
          Home
        </Link>
      </div>

      {children}
    </aside>
  );
}
