import Image from "next/image";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className=" bg-[#1F1F1F] w-[600px] h-[736px] my-[32px] mx-[32px] rounded-[32px]">
          <div className="flex mt-10 mb-[107px] ml-[67px] gap-1">
            <Image width={42} height={42} src="/icon.svg" alt="icon" />
            READ JOURNEY
          </div>
          <div className="ml-[67px] font-bold text-[64px] leading-[0.9375] tracking-[0.02em] mb-10">
            <h1>Expand your mind, reading</h1>
            <span className="text-[#e3e3e379]">a book</span>
          </div>
          <div className="ml-[67px] mb-[82px] flex flex-col gap-[14px]">
            <input
              className=" bg-[#262626] rounded-[12px] py-[16px] px-[14px] w-[472px] h-[50px]"
              type="text"
              placeholder="Name:"
            />
            <input
              className=" bg-[#262626] rounded-[12px] py-[16px] px-[14px] w-[472px] h-[50px]"
              type="email"
              placeholder="Mail:"
            />
            <input
              className=" bg-[#262626] rounded-[12px] py-[16px] px-[14px] w-[472px] h-[50px]"
              type="password"
              placeholder="Password:"
            />
          </div>
          <div className="flex items-center ml-[67px] gap-[20px]">
            <button
              type="submit"
              className=" bg-[#e3e3e3] text-[#1F1F1F] w-[225px] font-bold text-[20px] rounded-[30px] py-[16px] px-[54px]"
            >
              Registration
            </button>
            <Link href="/login"> Already have an account?</Link>
          </div>
        </div>

        <div className="bg-[#1F1F1F] w-[600px] h-[736px] my-[32px] mx-[32px] rounded-[32px] flex items-end justify-center">
          <Image width={405} height={656} src="/iphone.png" alt="iphone" />
        </div>
      </section>
    </>
  );
}
