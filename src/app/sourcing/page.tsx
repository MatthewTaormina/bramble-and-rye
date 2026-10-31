'use client';

import React, { useState } from 'react';
import { MILL_PARTNERS, HERITAGE_GRAINS } from '@/data/partnersData';
import { Compass, MapPin, Wheat, Check, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function SourcingPage() {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>(MILL_PARTNERS[0].id);

  const selectedPartner = MILL_PARTNERS.find((p) => p.id === selectedPartnerId) || MILL_PARTNERS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-bramble" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-bramble">
            Traceable Agricultural Supply Chain
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rye tracking-tight">
          Sourcing &amp; Regional Mill Partners
        </h1>
        <p className="text-sm sm:text-base text-rye-muted leading-relaxed">
          Flour is not a generic commodity—it is a fresh, living seasonal agricultural crop. We work exclusively with independent stone mills across Southern Ontario whose granite millstones operate cold to protect fragile wheatgerm oils, enzymatic vigor, and distinct grain terroir.
        </p>
      </div>

      {/* Sourcing Core Principles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-hearth-soft rounded-xl border border-oatmeal space-y-2.5">
          <span className="text-xs font-mono font-bold uppercase text-crust">01. Cold Stone Milling</span>
          <h2 className="font-serif text-xl font-bold text-rye">Sub-38°C Natural Friction</h2>
          <p className="text-xs text-rye-muted leading-relaxed">
            Standard industrial roller mills generate extreme friction heat that denatures delicate proteins and strips volatile grain aromatics. Our partners grind cold on Austrian runner stones.
          </p>
        </div>

        <div className="p-6 bg-hearth-soft rounded-xl border border-oatmeal space-y-2.5">
          <span className="text-xs font-mono font-bold uppercase text-bramble">02. 100% Regional Grains</span>
          <h2 className="font-serif text-xl font-bold text-rye">Within 150 Kilometers</h2>
          <p className="text-xs text-rye-muted leading-relaxed">
            From the Grand River basin to Tavistock sand-loams, our grains travel short distances directly from farm gate to bakery hearth, keeping food dollars circulating locally.
          </p>
        </div>

        <div className="p-6 bg-hearth-soft rounded-xl border border-oatmeal space-y-2.5">
          <span className="text-xs font-mono font-bold uppercase text-rye">03. Unbleached &amp; Whole</span>
          <h2 className="font-serif text-xl font-bold text-rye">Zero Synthetic Additives</h2>
          <p className="text-xs text-rye-muted leading-relaxed">
            No potassium bromate, no chlorine dioxide bleaching agents, and no synthetic malted barley enzymes. We rely solely on the natural vitality of living wheat.
          </p>
        </div>
      </section>

      {/* Interactive Regional Partner Grid */}
      <section className="bg-hearth-paper rounded-2xl border border-oatmeal p-6 md:p-10 space-y-8">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-crust">
            Partner Directory
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rye mt-1">
            The Millers &amp; Farmers We Trust
          </h2>
          <p className="text-xs sm:text-sm text-rye-muted mt-1 max-w-xl">
            Select a regional partner to inspect their milling mechanisms, farm locations, and the grain varieties they mill for Bramble &amp; Rye.
          </p>
        </div>

        {/* Partner Selector Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {MILL_PARTNERS.map((partner) => {
            const isSelected = partner.id === selectedPartnerId;
            return (
              <button
                key={partner.id}
                type="button"
                onClick={() => setSelectedPartnerId(partner.id)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'bg-rye text-hearth border-rye shadow'
                    : 'bg-hearth border-oatmeal text-rye hover:bg-oatmeal/50'
                }`}
              >
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-crust mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{partner.region}</span>
                </div>
                <h3 className="font-serif font-bold text-sm leading-snug">
                  {partner.name}
                </h3>
                <span
                  className={`text-[11px] block mt-1 ${
                    isSelected ? 'text-hearth/70' : 'text-rye-muted'
                  }`}
                >
                  {partner.specialty}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Partner Detailed Profile */}
        <div className="bg-hearth p-6 sm:p-8 rounded-xl border border-oatmeal space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-oatmeal">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1 rounded bg-crust-subtle text-crust">
                  <Wheat className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs text-crust font-semibold">
                  Partner Profile • {selectedPartner.relationshipYears} Years of Partnership
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-rye">
                {selectedPartner.name}
              </h3>
              <p className="text-xs text-rye-muted mt-0.5">
                Location: {selectedPartner.region}
              </p>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-[11px] font-mono uppercase text-rye-muted block">
                Milling Mechanism
              </span>
              <span className="text-xs font-semibold text-bramble font-mono">
                {selectedPartner.millingStyle}
              </span>
            </div>
          </div>

          <p className="text-sm text-rye leading-relaxed">
            {selectedPartner.bio}
          </p>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-rye-muted mb-2">
              Heritage Grains Supplied to Our Ovens:
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedPartner.grainsSupplied.map((grain, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-oatmeal text-rye font-mono text-xs border border-oatmeal-dark"
                >
                  {grain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Grain Varietal Guide */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-crust">
            The Landrace Revival
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rye mt-1">
            Heritage Grain Varietal Profiles
          </h2>
          <p className="text-xs sm:text-sm text-rye-muted mt-1 max-w-2xl">
            Each grain variety imparts distinct crust blister colors, crumb elasticity, and tasting notes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HERITAGE_GRAINS.map((grain, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-oatmeal bg-hearth-soft hover:border-crust/50 transition-colors space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-rye">
                  {grain.name}
                </h3>
                <span className="text-[11px] font-mono font-semibold text-bramble bg-bramble-subtle px-2 py-0.5 rounded border border-bramble/20">
                  {grain.extraction}
                </span>
              </div>

              <div className="text-xs space-y-1.5 text-rye-muted">
                <p>
                  <strong className="text-rye">Terroir / Origin:</strong> {grain.origin}
                </p>
                <p>
                  <strong className="text-rye">Aromatic Profile:</strong> {grain.flavorNotes}
                </p>
                <p>
                  <strong className="text-rye">Best Utilized In:</strong> {grain.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="text-center bg-rye text-hearth p-8 sm:p-12 rounded-2xl space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">
          Taste the Difference Regional Heritage Flour Makes
        </h2>
        <p className="text-xs sm:text-sm text-hearth/80 max-w-xl mx-auto leading-relaxed">
          Our stone-milled flours are also available by the 2kg bag for home bakers, alongside freshly fed jars of our 7-year living dark rye mother starter.
        </p>
        <div className="pt-2">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-crust hover:bg-crust-hover text-rye font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow-sm"
          >
            <span>Order Heritage Flour Bags</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
