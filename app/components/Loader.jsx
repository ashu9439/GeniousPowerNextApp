"use client";

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
