'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Wheat, MapPin, Clock, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-rye text-hearth border-t border-rye-light/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-hearth flex items-center justify-center text-rye">
                <Wheat className="w-4 h-4 text-bramble" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-hearth">
                Bramble & Rye
              </span>
            </div>
            <p className="text-sm text-hearth/80 leading-relaxed">
              Rooted in Grain, Baked for the Neighborhood. Bridging traditional 28–36 hour slow
              fermentation with traceable regional stone-milled grains.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-mono text-crust border border-crust/40 rounded px-2.5 py-1 bg-rye-light/30">
                &ldquo;Flour, water, sea salt, wild sourdough starter. That is all.&rdquo;
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-hearth mb-4">
              Explore the Hearth
            </h3>
            <ul className="space-y-2.5 text-sm text-hearth/80">
              <li>
                <Link href="/menu" className="hover:text-crust transition-colors">
                  Our Breads & Daily Pastry
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-crust transition-colors">
                  Weekly Bake Rotation & Schedule
                </Link>
              </li>
              <li>
                <Link href="/sourcing" className="hover:text-crust transition-colors">
                  Regional Mill Partners & Farmers
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-crust transition-colors">
                  Studio Location & Oven Timings
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-crust transition-colors">
                  Catering & Large Bread Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Studio Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-hearth mb-4">
              Hearth & Studio
            </h3>
            <div className="space-y-3 text-sm text-hearth/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-crust shrink-0 mt-0.5" />
                <span>
                  142 Heritage Mill Lane<br />
                  Elora / Fergus Region, ON
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-crust shrink-0 mt-0.5" />
                <div>
                  <p>Wednesday – Friday: 7:00 AM – 3:00 PM</p>
                  <p>Saturday: 8:00 AM – 4:00 PM</p>
                  <p>Sunday: 8:00 AM – 2:00 PM</p>
                  <p className="text-xs text-hearth/60 mt-1">Mon & Tue: Starter feeding & grain intake</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grain Dispatch Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-hearth mb-2">
              Weekly Grain Dispatch
            </h3>
            <p className="text-xs text-hearth/80 mb-4 leading-relaxed">
              Receive Thursday notifications on rotating heritage landrace grains, limited oven batches, and weekend galette specials.
            </p>
            {subscribed ? (
              <div className="p-3 bg-rye-light/60 rounded border border-crust/40 text-xs text-crust">
                ✓ Subscribed! Welcome to the weekly grain dispatch.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="space-y-2">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <div className="flex">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="baker@neighborhood.ca"
                    className="w-full bg-rye-light/60 border border-hearth/20 text-hearth placeholder:text-hearth/40 text-xs px-3 py-2.5 rounded-l focus:outline-none focus:ring-1 focus:ring-crust"
                  />
                  <button
                    type="submit"
                    className="bg-bramble hover:bg-bramble-hover text-hearth text-xs font-semibold px-4 py-2.5 rounded-r transition-colors"
                  >
                    Join
                  </button>
                </div>
                <p className="text-[11px] text-hearth/50">
                  Zero spam. Pure grain updates. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-rye-light/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-hearth/60">
          <p>© {new Date().getFullYear()} Bramble & Rye Hearth Bakery. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>WCAG 2.1 AA Compliant</span>
            <span>AODA Accessible</span>
            <span>Cloudflare Pages Edge Deployed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
