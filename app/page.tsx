"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Infinite scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };
    scroll();
  }, []);

  return (
    <main className="flex flex-1 flex-col overflow-auto gap-2">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-[rgba(0,0,0,0.6)] h-[50%] w-full bg-cover bg-center">
        <div className="">
          <Image
            src="/LogoNobg.png"
            alt="GeniusPower Logo"
            width={100}
            height={100}
            className="mx-auto bg-[rgb(241,252,20)] shadow-lg rounded-2xl"
          />
        </div>

        <h1 className="text-5xl sm:text-4xl font-bold mb-2 text-yellow-400 drop-shadow-lg">
          Welcome to Genious Power
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">
          Empowering Industries with Reliable Electrical Solutions — Trusted by
          India’s Leading Enterprises.
        </p>
        <div className="flex flex-row mt-6 gap-2">
          <a
            href="/contact"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition"
          >
            Contact Us
          </a>

          <a
            href="/products"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition"
          >
            Our Porducts
          </a>
        </div>
      </div>
      <div className=" h-[45%] bg-[rgba(10,2,235,0.43)]">
        <h2 className="text-center text-2xl font-semibold mb-8 text-yellow-400">
          Our Esteemed Clients
        </h2>

        <div className="w-full mx-auto ">
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee will-change-transform gap-4 ">
              <div className="flex gap-4 items-stretch">
                <div className="card">
                  <Image
                    src="/partner/hit.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/Ardent.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/bs.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/canara.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/Cbi.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/ef.jpg"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/ib.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/iob.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/ouat.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/pnb.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/voltas.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* duplicate set for seamless looping */}
              <div className="flex gap-4 items-stretch" aria-hidden="true">
                <div className="card">
                  <Image
                    src="/partner/hit.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/Ardent.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/bs.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/canara.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/Cbi.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/ef.jpg"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/ib.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/iob.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/ouat.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/pnb.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="card">
                  <Image
                    src="/partner/voltas.png"
                    alt="BWCCL Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
