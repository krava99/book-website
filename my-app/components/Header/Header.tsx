import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between mx-8 my-8 bg-[#1F1F1F] py-7 px-4 rounded-2xl">
        <div className="flex items-center gap-2 ">
          <Image src="/icon.svg" alt="Logo" width={42} height={17} />
          <h2>READ JOURNEY</h2>
        </div>
        <ul className="gap-10 flex">
          <Link href="/recommended">Home</Link>
          <Link href="/my-library">My Library</Link>
        </ul>
        <div className="flex items-center gap-4">
          <p>User Profile</p>
          <button className="border border-[rgba(249,249,249,0.2)] rounded-[30px]  w-28.5 h-10.5">
            Log out
          </button>
        </div>
      </nav>
    </>
  );
}
