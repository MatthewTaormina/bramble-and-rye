'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Clock, ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <aside aria-label="Daily Hearth Status" className="bg-rye text-hearth text-xs md:text-sm py-2 px-4 border-b border-rye-light/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-mono tracking-wide">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crust opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-crust"></span>
          </span>
          <span className="text-crust font-semibold uppercase tracking-wider text-[11px]">
            Hearth Status:
          </span>
          <span className="text-hearth/90">
            Batch 2 Country Boules & Morning Buns fresh from the oven.
          </span>
        </div>

        <div className="flex items-center gap-4 text-[12px]">
          <span className="hidden md:inline-flex items-center gap-1 text-hearth/70">
            <Clock className="w-3.5 h-3.5 text-crust" />
            Next hearth discharge: 10:30 AM
          </span>
          <Link
            href="/order"
            className="inline-flex items-center gap-1 font-medium text-crust hover:text-hearth transition-colors group underline-offset-4 hover:underline"
          >
            <span>Pre-order for Warm Pickup</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
