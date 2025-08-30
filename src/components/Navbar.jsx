import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">Trail & Ember Co.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#shop" className="text-neutral-600 hover:text-neutral-900">Shop</a>
          <a href="#about" className="text-neutral-600 hover:text-neutral-900">About</a>
          <a href="#gifts" className="text-neutral-600 hover:text-neutral-900">Gifts</a>
        </nav>
        <button className="relative inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-neutral-50">
          <ShoppingCart className="h-4 w-4" />
          <span>Cart</span>
          <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-emerald-600 px-1 text-xs text-white">0</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
