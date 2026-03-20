"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Головна сторінка редіректить на /login (HomeTab згідно з ТЗ)
    router.replace("/login");
  }, [router]);

  return null;
}
