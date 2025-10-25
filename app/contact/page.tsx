"use client";

import { useState } from "react";

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
            <p className="text-gray-700">
              Shop No. 11, Block-D, Ground Floor, Rajendra Bihar, Forest Park,
              Bhubaneswar, Pin 751020
            </p>
            <p className="text-gray-700 mt-2">
              Email:{" "}
              <a
                href="mailto:geniouspowerelectronics@gmail.com"
                className="text-blue-600"
              >
                geniouspowerelectronics@gmail.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              WhatsApp:{" "}
              <a
                href="https://wa.me/919040010273"
                className="text-green-600 font-semibold"
              >
                +91 9040010273
              </a>
            </p>
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

      <div className="hidden">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Reach Us</h2>
              <p className="text-gray-700">
                Shop No. 11, Block-D, Ground Floor, Rajendra Bihar, Forest Park,
                Bhubaneswar, Pin 751020
              </p>
              <p className="text-gray-700 mt-2">
                Email:{" "}
                <a
                  href="mailto:geniouspowerelectronics@gmail.com"
                  className="text-blue-600"
                >
                  geniouspowerelectronics@gmail.com
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/919040010273"
                  className="text-green-600 font-semibold"
                >
                  +91 9040010273
                </a>
              </p>
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

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {submitted ? (
              <div className="text-center text-green-600 font-semibold text-lg">
                Thank you! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
