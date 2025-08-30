import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import GiftPackaging from './components/GiftPackaging';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <GiftPackaging />
      </main>
      <footer className="border-t mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Trail & Ember Co. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-800 transition-colors">Shipping & Returns</a>
            <a href="#" className="hover:text-neutral-800 transition-colors">Sustainability</a>
            <a href="#" className="hover:text-neutral-800 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
