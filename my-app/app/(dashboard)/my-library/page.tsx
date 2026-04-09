"use client";

import { useMyLibrary } from "@/hooks/useBooks";
import Image from "next/image"; // Не забудь додати імпорт

export default function MyLibraryPage() {
  const { data, isLoading, isError } = useMyLibrary();
  const books = data || [];

  return (
    <div className="w-212 h-163 bg-[#1f1f1f] rounded-4xl pt-10 px-10 pb-7">
      <h2 className="font-bold text-[28px] text-white mb-8">My Library</h2>

      <div className="w-full">
        {isLoading && <p className="text-white">Loading...</p>}

        {/* 2. Рендеримо ТІЛЬКИ якщо довжина масиву більше 0 */}
        {books.length > 0 ? (
          <ul className="grid grid-cols-5 gap-y-7 gap-x-5">
            {books.map((book) => (
              <li key={book._id} className="w-34.25 flex flex-col gap-2">
                <div className="relative w-34.25 h-52">
                  {/* Додаємо перевірку на src, щоб не було помилки з попереднього скріншота */}
                  {book.imageUrl && (
                    <Image
                      className="rounded-xl object-cover"
                      src={book.imageUrl}
                      alt={book.title}
                      fill
                    />
                  )}
                </div>
                <p className="text-white text-[14px] font-bold truncate uppercase">
                  {book.title}
                </p>
                <p className="text-[#686868] text-[12px] truncate">
                  {book.author}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          !isLoading && (
            <div className="flex flex-col items-center justify-center mt-20">
              <p className="text-[#686868]">
                У вашій бібліотеці поки немає книг.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
