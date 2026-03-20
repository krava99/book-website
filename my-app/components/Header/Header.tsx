import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/my-library">My Library</Link>
        </ul>
        <div>
          <p>User Profile</p>
          <button>Log out</button>
        </div>
      </nav>
    </>
  );
}
