"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className=" flex flex-1 flex-col">
      {/* Hero / Intro */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-900">
            About Us
          </h1>
          <p className="text-2xl  text-gray-800">Welcome to Genious Power</p>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            Established in 2010, we have been at the forefront of delivering
            high-quality power management solutions tailored to meet the unique
            needs of our customers.
          </p>
        </div>
      </section>
      <div className="flex flex-col bg-[rgba(0,0,0,.5)] m-2">
        <h2 className="text-center text-2xl font-semibold mb-8 text-yellow-400">
          Our Partners
        </h2>
        <div className="flex flex-col md:flex-row  p-8 gap-4 items-center justify-center">
          <div className="card">
            <Image
              src="/partner/amaze.png"
              alt="BWCCL Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
          <div className="card">
            <Image
              src="/partner/Lumin.png"
              alt="BWCCL Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <section className="py-16 mx-auto">
        <Image
              src="/iso.jpeg"
              alt="iso certification"
              width={992}
              height={1402}
              className="object-contain"
            />
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto space-y-12 glass-card">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To be the market leader in the field of power management sector
              and to emerge as the elite servo stabiliser manufacturer in India.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our goal is to create products of unparalleled quality through
              deep and groundbreaking innovation, while fully understanding
              customer needs and delivering tailor-made solutions that
              effectively address their challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Director’s Desk / At a glance */}
      <section className="bg-[rgba(94,74,223,0.5)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-900">
              From The CEO's Desk
            </h2>
            <p className="text-lg text-gray-300 italic test-bold">
              Mr. Basanta Kumar | CEO | Genious Power Electronics
            </p>
            <p className="text-lg text-white">
              Our mission is to leverage our deep understanding of industry and
              market needs to deliver the highest level of satisfaction to our
              clients through technologically advanced products and services. We
              are dedicated to providing customized solutions, personalized
              support, timely delivery, and consistently reliable quality at
              competitive prices, all backed by our expertise.
            </p>
          </div>

          <div className="rounded-lg">
            <Image
              src="/ceo.jpg"
              alt="BWCCL Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Unique / features */}
      <section
        className="flex py-6 px-6 sm:px-8 lg:px-12 rounded-2xl text-white 
                    bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shadow-white/5 m-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            What Makes Us Unique !
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">01. Customization</h3>
              <p className="text-gray-300">
                We provide products that are custom made for each customer as
                per their necessity.{" "}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">02. Customer Satisfaction</h3>
              <p className="text-gray-300">
                Our company’s philosophy isn’t profit. Satisfying our customers
                is our utmost priority.{" "}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">03. Relational Marketing</h3>
              <p className="text-gray-300">
                Our relation with our customer doesn’t end with transaction.
                Through intensive CRM, we treat them as our family.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">04. Reliability</h3>
              <p className="text-gray-300">
                After sales service is not just our duty, it’s our priority,
                because for us our customer comes first than business.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">05. Trust</h3>
              <p className="text-gray-300">
                Relation is built upon trust. With our 2-Years Warranty program
                we assure our quality commitment.{" "}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">06. Price Leadership</h3>
              <p className="text-gray-300">
                Through radical innovation and highly efficient team we ensure
                our products are available at the best market price.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Prompt */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Would you like to contact us?</h2>
          <p className="text-lg">
            Call us at{" "}
            <a href="tel:+919438777891" className="underline">
              +91 9438777891
            </a>{" "}
            or drop us an email{" "}
            <a
              href="mailto:geniouspowerelectronics@gmail.com"
              className="underline"
            >
              geniouspowerelectronics@gmail.com
            </a>
            .
          </p>

          {/* <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition">
            Get In Touch
          </button> */}
        </div>
      </section>
    </main>
  );
}
