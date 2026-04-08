import Link from "next/link";

export default function MyLibrarySidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="w-89 h-163 bg-[#1f1f1f] rounded-4xl">
      <div className="flex flex-col mx-5 pt-10  gap-2">
        <p className="">Create your library:</p>
        <input
          className=" bg-[#262626] rounded-xl px-42 pl-3.5 py-4 w-79 12"
          type="text"
          placeholder="Book title"
        />
        <input
          className="bg-[#262626] rounded-xl px-42 pl-3.5 py-4 w-79 12 "
          type="text"
          placeholder="The author"
        />
        <input
          className=" bg-[#262626] rounded-xl px-42 pl-3.5 py-4 w-79 12"
          type="text"
          placeholder="Number of pages"
        />
        <button className="border border-[rgba(249,249,249,0.2)] rounded-[30px]  w-28.5 h-10.5">
          Add book
        </button>
      </div>
      <div className="w-78 h-68 bg-[#262626] rounded-xl my-5 ml-4 px-5 pt-5">
        <p className="font-bold text-[20px]  text-[#f9f9f9] ">
          Recommended books
        </p>
        <div>
          <ul>
            <li>
              <p>Title</p>
              <p>Author</p>
            </li>
          </ul>
        </div>
        <Link
          className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] underline decoration-solid decoration-[#686868] text-[#686868]"
          href="/home"
        >
          Home
        </Link>
      </div>

      {children}
    </aside>
  );
}
