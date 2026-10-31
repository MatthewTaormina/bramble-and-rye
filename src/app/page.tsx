import React from 'react';
import Link from 'next/link';
import { ArrowRight, Flame, Wheat, Clock, Award, Shield, Compass, Sparkles } from 'lucide-react';
import LiveOvenBoard from '@/components/LiveOvenBoard';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hearth-paper border-b border-oatmeal pt-12 pb-16 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oatmeal border border-oatmeal-dark text-xs font-mono font-medium text-rye">
              <span className="w-2 h-2 rounded-full bg-bramble animate-pulse" />
              <span>Hearth Fire Active Since 4:30 AM</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rye tracking-tight leading-[1.15]">
              Rooted in Grain, Baked for the Neighborhood.
            </h1>

            <p className="text-base sm:text-lg text-rye-muted leading-relaxed font-sans max-w-2xl">
              Bramble &amp; Rye bridges traditional 28-to-36-hour sourdough fermentation with contemporary cafe hospitality. Sourced exclusively from small Ontario granite stone millers, our hearth boules revive heirloom grain aromatics with total farm-level traceability.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-xs font-semibold uppercase tracking-wider bg-bramble hover:bg-bramble-hover text-hearth transition-all shadow-sm group focus:outline-none focus:ring-2 focus:ring-bramble focus:ring-offset-2"
              >
                <span>Pre-Order Warm Bread</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded text-xs font-semibold uppercase tracking-wider bg-hearth hover:bg-oatmeal text-rye border border-oatmeal-dark transition-colors"
              >
                View Full Menu
              </Link>
            </div>

            {/* Quick Microcopy Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-oatmeal">
              <div>
                <span className="block font-mono text-xl font-bold text-rye">28–36h</span>
                <span className="text-[11px] text-rye-muted uppercase tracking-wider">Cold Ferment</span>
              </div>
              <div>
                <span className="block font-mono text-xl font-bold text-rye">100%</span>
                <span className="text-[11px] text-rye-muted uppercase tracking-wider">Regional Grains</span>
              </div>
              <div>
                <span className="block font-mono text-xl font-bold text-rye">&lt; 38°C</span>
                <span className="text-[11px] text-rye-muted uppercase tracking-wider">Granite Milled</span>
              </div>
              <div>
                <span className="block font-mono text-xl font-bold text-rye">4</span>
                <span className="text-[11px] text-rye-muted uppercase tracking-wider">Simple Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live From The Oven Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveOvenBoard />
      </section>

      {/* The Hearth Philosophy Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-crust">
            The Process Behind Every Crumb
          </span>
          <h2 className="font-serif text-3xl font-bold text-rye mt-1.5">
            Why Our Fermentations Run Slow
          </h2>
          <p className="text-sm text-rye-muted mt-2">
            No commercial fast-acting yeasts, no dough conditioners, no synthetic enzymes. Real bread requires time, temperature, and living microbial ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-hearth-soft border border-oatmeal hover:border-crust/50 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-crust-subtle text-crust flex items-center justify-center">
              <Clock className="w-5 h-5 text-crust" />
            </div>
            <h3 className="font-serif text-xl font-bold text-rye">
              Extended 28–36h Fermentation
            </h3>
            <p className="text-xs sm:text-sm text-rye-muted leading-relaxed">
              Cold retarding allows lactic acid bacteria to gently break down complex starches and gluten proteins, unlocking deep nutty sweetness and natural digestibility.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-hearth-soft border border-oatmeal hover:border-crust/50 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-bramble-subtle text-bramble flex items-center justify-center">
              <Wheat className="w-5 h-5 text-bramble" />
            </div>
            <h3 className="font-serif text-xl font-bold text-rye">
              Granite Runner Stone Milling
            </h3>
            <p className="text-xs sm:text-sm text-rye-muted leading-relaxed">
              Partnering with mills in Fergus and Tavistock whose Austrian granite stones rotate under 38°C to retain live wheatgerm oils and aromatic carotene pigments.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-hearth-soft border border-oatmeal hover:border-crust/50 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-oatmeal text-rye flex items-center justify-center">
              <Compass className="w-5 h-5 text-rye" />
            </div>
            <h3 className="font-serif text-xl font-bold text-rye">
              Traceable Landrace Varieties
            </h3>
            <p className="text-xs sm:text-sm text-rye-muted leading-relaxed">
              Reviving Ontario’s 19th-century Red Fife landrace wheat, ancient hulled spelt, and biodynamic winter rye for unmatched caramelized crust nuances.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Loaf Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rye text-hearth rounded-2xl overflow-hidden border border-rye-light/50 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-crust">
                Signature Hearth Highlight
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-hearth">
                100% Heritage Whole Rye (Rugbrød)
              </h2>
              <p className="text-sm text-hearth/80 leading-relaxed">
                Sprouted whole rye berries, roasted sunflower and pumpkin kernels, fermented with our mature 7-year dark rye mother starter. Dense, aromatic, sliceable, and holds fresh moisture for over a week.
              </p>

              <div className="py-2 space-y-1.5 text-xs text-hearth/70">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-crust" />
                  <span>Farm Origin: Oak Manor Heritage Fields, Tavistock, ON</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-crust" />
                  <span>36-Hour Continuous Microbial Fermentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-crust" />
                  <span>100% Whole Meal Extraction (Zero Sifting)</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/order"
                  className="px-5 py-2.5 bg-crust hover:bg-crust-hover text-rye font-semibold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  Reserve Next Batch
                </Link>
                <Link
                  href="/sourcing"
                  className="text-xs font-medium text-hearth hover:text-crust underline underline-offset-4"
                >
                  Read Miller Story
                </Link>
              </div>
            </div>

            <div className="bg-rye-dark/60 p-6 rounded-xl border border-rye-light/30 space-y-4 font-mono text-xs">
              <div className="text-crust uppercase font-bold tracking-wider text-[11px] pb-2 border-b border-rye-light/40">
                Batch Log #842-RYE
              </div>
              <div className="flex justify-between">
                <span className="text-hearth/60">Grain Variety:</span>
                <span className="text-hearth font-semibold">100% Winter Rye (Secale cereale)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-hearth/60">Mother Levain Age:</span>
                <span className="text-hearth font-semibold">7 Years Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-hearth/60">Hydration Ratio:</span>
                <span className="text-hearth font-semibold">95% Hydration</span>
              </div>
              <div className="flex justify-between">
                <span className="text-hearth/60">Bake Schedule:</span>
                <span className="text-hearth font-semibold">Wednesdays &amp; Saturdays</span>
              </div>
              <div className="pt-2 text-hearth/50 text-[11px] italic">
                &ldquo;Slice thin, top with cultured butter or smoked fish.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Atmosphere & Audience Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-oatmeal-light rounded-xl border border-oatmeal p-8 sm:p-10">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-bramble">
              The Bramble &amp; Rye Atmosphere
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rye">
              Earthy Minimalism Meets Lived-In Hospitality
            </h2>
            <p className="text-xs sm:text-sm text-rye-muted leading-relaxed">
              Warm lime-washed plaster walls, reclaimed white oak tables, rough stoneware ceramics, and an open hearth kitchen where you can watch dough shaping and oven peel loading firsthand.
            </p>
            <div className="pt-4">
              <Link
                href="/visit"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-bramble hover:text-bramble-hover underline underline-offset-4"
              >
                <span>View Studio Hours &amp; Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
