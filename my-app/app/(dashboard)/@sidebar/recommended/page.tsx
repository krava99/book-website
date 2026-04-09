import Image from "next/image";
import Link from "next/link";

export default function RecommendedSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="w-89 h-163 bg-[#1f1f1f] rounded-4xl">
      <div className="flex flex-col mx-5 pt-10 gap-2 w-73.75">
        <p className="text-white text-[14px] ml-3.5">Filters:</p>

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
            placeholder="Enter text"
          />
        </label>

        <button className="mt-2 border border-[rgba(249,249,249,0.2)] text-white rounded-[30px] w-25 h-9.5 text-[14px] hover:bg-white hover:text-black transition-colors">
          To apply
        </button>
      </div>
      <div className="w-78 h-68 bg-[#262626] rounded-xl my-5 ml-4 px-5 pt-5">
        <p className="font-bold text-[20px]  text-[#f9f9f9] mb-10">
          Start your workout
        </p>
        <div className="flex gap-2 mb-5">
          <div className="min-w-11 min-h-11 text-xl font-bold rounded-full bg-white text-black flex items-center justify-center">
            1
          </div>

          <p className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#f9f9f9]">
            Create a personal library :
            <span className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#686868]">
              &nbsp;add the books you intend to read to it.
            </span>
          </p>
        </div>
        <div className="flex gap-2 mb-6.5">
          <div className="min-w-11 min-h-11 text-xl font-bold rounded-full bg-white text-black flex items-center justify-center">
            2
          </div>
          <p className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#f9f9f9]">
            Create your first workout :
            <span className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#686868]">
              &nbsp;define a goal, choose a period, start training.
            </span>
          </p>
        </div>

        <Link
          className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] underline decoration-solid decoration-[#686868] text-[#686868]"
          href="/my-library"
        >
          My library
        </Link>
      </div>
      <div className=" flex w-79 h-21 bg-[#262626] rounded-xl ml-4 px-5 pt-5 gap-3.5">
        <Image src="/book.png" alt="books" width={40} height={40} />
        <p className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#686868]">
          &quot;Books are windows to the world, and reading is a journey into
          the unknown.&quot;
        </p>
      </div>
      {children}
    </aside>
  );
}
