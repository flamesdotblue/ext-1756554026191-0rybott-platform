import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506818144585-74b29c980d4b?q=80&w=1974&auto=format&fit=crop"
          alt="Mist over a pine forest at sunrise"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-white/20 to-white/0" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-40 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
            Hand-poured • Clean burn • Inspired by National Parks
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
            Bring the trail home with nature-inspired candles
          </h1>
          <p className="mt-4 text-neutral-700 max-w-xl">
            Small-batch soy candles crafted to evoke the crisp air of Yosemite mornings, Zion sandstone at dusk, and the mossy hush of Olympic forests.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center rounded-md bg-emerald-600 text-white px-5 py-3 text-sm font-medium hover:bg-emerald-700 transition-colors">
              Explore Scents
            </a>
            <a href="#gifts" className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
              Gift Options
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
