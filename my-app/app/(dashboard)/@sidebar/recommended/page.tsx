import Image from "next/image";
import Link from "next/link";

export default function RecommendedSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="w-89 h-163 bg-[#1f1f1f] rounded-4xl">
      <div className="flex flex-col mx-5 pt-10  gap-2">
        <p className="">Filters:</p>
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
        <button className="border border-[rgba(249,249,249,0.2)] rounded-[30px]  w-28.5 h-10.5">
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
            Create a personal library:
            <span className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#686868]">
              add the books you intend to read to it.
            </span>
          </p>
        </div>
        <div className="flex gap-2 mb-6.5">
          <div className="min-w-11 min-h-11 text-xl font-bold rounded-full bg-white text-black flex items-center justify-center">
            2
          </div>
          <p className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#f9f9f9]">
            Create your first workout:
            <span className="font-medium text-[14px] leading-[1.28571] tracking-[-0.02em] text-[#686868]">
              define a goal, choose a period, start training.
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
