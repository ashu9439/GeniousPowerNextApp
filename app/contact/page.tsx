"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex flex-1  flex-col md:flex-row px-4 py-8">
      <div className="flex flex-1 debug1">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="bg-[rgba(237,237,237,0.42)] p-4 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Reach Us</h2>
            <p className="text-gray-700 bg-amber-200">
              Shop No. 11, Block-D, Ground Floor, Rajendra Bihar, Forest Park,
              Bhubaneswar, Pin 751020
            </p>
            <div className="text-gray-700 mt-2 flex flex-row gap-2">
              <Mail size={28} />
              <a
                href="mailto:geniouspowerelectronics@gmail.com"
                className="text-blue-600 font-semibold bg-cyan-100"
              >
                geniouspowerelectronics@gmail.com
              </a>
            </div>
            <div className="text-gray-700 mt-2 flex flex-row gap-2">
              <Phone size={28} />
              <a href="tel:+919040010273" className="underline font-semibold  bg-cyan-100">
                +91 9040010273
              </a>

              <a href="tel:+919438777891" className="underline font-semibold  bg-cyan-100">
                +91 9438777891
              </a>
            </div>

            <div className="text-gray-700 mt-2 flex flex-row gap-2 ">
              <Image
                src="/wapp.svg"
                alt="wp"
                width={28}
                height={28}
                className="object-contain"
              />
              <a
                href="https://wa.me/9040010273"
                className="text-green-600 font-semibold  bg-cyan-100"
              >
                +91 9040010273
              </a>
            </div>
          </div>

          <div className="w-full h-72 rounded overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14619.683142499793!2d85.82408!3d20.256386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE1JzIzLjAiTiA4NcKwNDknMjYuNyJF!5e0!3m2!1sen!2sin!4v1708740000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-1 debug1"></div> */}
    </main>
  );
}
