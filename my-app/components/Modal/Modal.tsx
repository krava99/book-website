"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="relative bg-[#1f1f1f] p-8 rounded-3xl border border-[rgba(249,249,249,0.1)] max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:opacity-70"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
}
