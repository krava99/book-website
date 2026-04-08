"use client";

import { signIn } from "@/services/auth.service";
import { useAuthStore } from "@/stores/userStore";
import { loginSchema, LoginSchemaType } from "@/utils/auth/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const setAuth = useAuthStore((state) => state.setAuth);

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const authData = await signIn(data.email, data.password);
      setAuth(authData);
      reset();
      toast.success("Login successful!", {
        theme: "dark",
        transition: Bounce,
      });
      router.push("my-library");
    } catch (error) {
      toast.success("Login failed!", {
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className=" bg-[#1F1F1F] w-150 h-184 my-8 mx-8 rounded-4xl">
          <div className="flex mt-10 mb-26.75 ml-16.75 gap-1">
            <Image width={42} height={42} src="/icon.svg" alt="icon" />
            READ JOURNEY
          </div>
          <div className="ml-16.75 font-bold text-[64px] leading-[0.9375] tracking-[0.02em] mb-10">
            <h1>Expand your mind, reading</h1>
            <span className="text-[#e3e3e379]">a book</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="ml-16.75 mb-36.5 flex flex-col gap-3.5">
              <input
                {...register("email")}
                id="email"
                className=" bg-[#262626] rounded-xl py-4 px-3.5 w-118 h-12.5"
                type="email"
                placeholder="EMail:"
              />
              {errors.email && (
                <p className="text-sm font-bold text-red-900 mt-1">
                  {errors.email.message}
                </p>
              )}
              <input
                {...register("password")}
                id="password"
                className=" bg-[#262626] rounded-xl py-4 px-3.5 w-118 h-12.5"
                type="password"
                placeholder="Password:"
              />
              {errors.password && (
                <p className="text-sm font-bold text-red-900 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center ml-16.75 gap-5">
              <button
                type="submit"
                className=" bg-[#e3e3e3] text-[#1F1F1F] w-56.25 font-bold text-[20px] rounded-[30px] py-4 px-13.5"
              >
                Log In
              </button>
              <Link href="/register"> Don`t have an account?</Link>
            </div>
          </form>
        </div>

        <div className="bg-[#1F1F1F] w-150 h-184 my-8 mx-8 rounded-4xl flex items-end justify-center">
          <Image width={405} height={656} src="/iphone.png" alt="iphone" />
        </div>
      </section>
    </>
  );
}
