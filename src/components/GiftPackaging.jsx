import React from 'react';
import { Gift } from 'lucide-react';

const GiftPackaging = () => {
  return (
    <section id="gifts" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Gift-worthy packaging</h2>
          <p className="mt-3 text-neutral-700">
            Elevate your gesture with recyclable, nature-inspired packaging. Add a handwritten note and choose from our seasonal gift wrap patterns.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">✓</span>
              Recyclable kraft box with evergreen band
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">✓</span>
              Optional gift wrap and ribbon
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">✓</span>
              Personalized message card
            </li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-3 text-sm font-medium hover:bg-emerald-700">
              <Gift className="h-4 w-4" />
              Add Gift Packaging ($6)
            </button>
            <button className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm hover:bg-neutral-50">
              View Gift Sets
            </button>
          </div>
          <p className="mt-4 text-xs text-neutral-500">We ship plastic-free and offset carbon emissions on every order.</p>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-square overflow-hidden rounded-xl border bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop"
              alt="Gift packaging with natural elements"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block w-40 rounded-xl border bg-white p-4 shadow-sm">
            <div className="text-xs text-neutral-500">Sample Scent Notes</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 px-2.5 py-1 text-xs ring-1 ring-emerald-100">Cedarwood</span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 px-2.5 py-1 text-xs ring-1 ring-emerald-100">Moss</span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-800 px-2.5 py-1 text-xs ring-1 ring-emerald-100">Sea Salt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftPackaging;
