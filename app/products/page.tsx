"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/app/types/product";
import ProductImage from "../components/ProductImage";
import Loader from "../components/Loader";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((j) => setProducts(j.data ?? []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      (p.category ?? "").toLowerCase().includes(q.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <main className="flex flex-1 flex-col mx-auto p-6 debug">
      <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Genious power Product Catalog</h1>
          <p className="text-sm text-gray-600">Browse our curated collection</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products or categories..."
            className="border rounded px-3 py-2 w-64"
          />
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="bg-white shadow rounded overflow-hidden"
          >
            {p.image_url ? (
              <ProductImage src={p.image_url} alt={p.name} />
            ) : (
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                No image
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-lg font-bold">
                  {p.currency ?? "USD"} {p.price?.toFixed(2)}
                </div>
                <button className="text-sm px-3 py-1 border rounded">
                  View
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
