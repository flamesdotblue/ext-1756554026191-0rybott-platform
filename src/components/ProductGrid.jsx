import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'yosemite',
    name: 'Yosemite Dawn',
    park: 'Yosemite National Park',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
    notes: ['Pine Needle', 'Cedarwood', 'Cold River'],
  },
  {
    id: 'zion',
    name: 'Zion Dusk',
    park: 'Zion National Park',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1508261303786-0e3bcd84f77b?q=80&w=2070&auto=format&fit=crop',
    notes: ['Desert Sage', 'Juniper', 'Red Sandstone'],
  },
  {
    id: 'olympic',
    name: 'Olympic Rain',
    park: 'Olympic National Park',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1464550883968-cec281c19761?q=80&w=1989&auto=format&fit=crop',
    notes: ['Moss', 'Fir Balsam', 'Coastal Mist'],
  },
  {
    id: 'acadia',
    name: 'Acadia Tide',
    park: 'Acadia National Park',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070&auto=format&fit=crop',
    notes: ['Sea Salt', 'Rock Rose', 'Wild Thyme'],
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} candle with nature photography backdrop`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-1 text-xs text-white backdrop-blur">
          {product.park}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-neutral-900">{product.name}</h3>
            <p className="text-sm text-neutral-500">Soy candle · 8 oz</p>
          </div>
          <span className="font-medium">${product.price}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.notes.map((note) => (
            <span
              key={note}
              className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 px-2.5 py-1 text-xs ring-1 ring-emerald-100"
            >
              {note}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button className="flex-1 inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-3 py-2 text-sm font-medium hover:bg-neutral-800">
            Add to Cart
          </button>
          <button className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-neutral-50">
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Signature Park Collection</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Each fragrance is developed in-house to capture the soul of a park. We use clean-burning soy wax, cotton wicks, and phthalate-free fragrance oils.
          </p>
        </div>
        <div className="text-sm text-neutral-500">Free US shipping over $50</div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
