"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Loader from "./Loader";

interface Props {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: Props) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-48 w-full">
      {loading && (
        <Loader />
      )}

      <Image
        src={imgSrc}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        onLoad={() => setLoading(false)}
        onError={() => setImgSrc("/file.svg")}
      />
    </div>
  );
}
