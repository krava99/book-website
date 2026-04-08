import Image from "next/image";

export default function RecommendedPage() {
  return (
    <>
      <div className="w-212 h-163 bg-[#1f1f1f] rounded-4xl pt-10 px-10 pb-7">
        <div className="flex justify-between  ">
          <h2 className="text-3xl font-bold">Recommended</h2>
          <div className="flex gap-2 items-center">
            <button className="border border-[rgba(249,249,249,0.2)] rounded-full  w-10 h-10">
              <Image
                className="-[white]"
                src="Vectorleft.svg"
                alt="left"
                width={10}
                height={5}
              />
            </button>

            <button className="border border-[rgba(249,249,249,0.2)] rounded-full  w-10 h-10">
              <Image
                className="text-[white]"
                src="Vectorright.svg"
                alt="right"
                width={10}
                height={5}
              />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
