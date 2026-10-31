'use client';

import React, { useState } from 'react';
import WeeklyScheduleTable from '@/components/WeeklyScheduleTable';
import { useCart } from '@/context/CartContext';
import { MENU_ITEMS } from '@/data/menuData';
import {
  Clock,
  Calendar,
  ShieldCheck,
  Send,
  CheckCircle2,
  ShoppingBag,
  Sparkles,
  Flame,
  ArrowRight,
  PackageCheck
} from 'lucide-react';

export default function OrderPage() {
  const { addToCart, setIsCartOpen, totalItems, subtotal } = useCart();
  const [cateringSubmitted, setCateringSubmitted] = useState(false);
  const [cateringName, setCateringName] = useState('');
  const [cateringEmail, setCateringEmail] = useState('');
  const [cateringDate, setCateringDate] = useState('');
  const [cateringLoaves, setCateringLoaves] = useState('20-50');
  const [cateringNotes, setCateringNotes] = useState('');

  const breadItems = MENU_ITEMS.filter((i) => i.category === 'bread');

  const handleCateringSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCateringSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Header Banner */}
      <div className="bg-hearth-paper border border-oatmeal-dark rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-oatmeal-dark text-xs font-mono font-semibold text-bramble shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-bramble" />
            <span>Hearth Timetable &amp; Online Pre-Orders</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rye tracking-tight leading-tight">
            Daily Bread Schedule &amp; Pre-Orders
          </h1>

          <p className="text-sm sm:text-base text-rye-muted leading-relaxed">
            Because naturally leavened bread requires up to 36 hours from mixing to bake, daily oven yields are limited. Review our weekly schedule below or reserve loaves ahead for morning collection.
          </p>

          {/* Quick Pre-order Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bramble hover:bg-bramble-hover text-hearth text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-bramble focus:ring-offset-2"
            >
              <ShoppingBag className="w-4 h-4 text-hearth" />
              <span>View Daily Bag ({totalItems} items • ${subtotal.toFixed(2)})</span>
            </button>
            <span className="text-xs font-mono text-rye-muted">
              ✓ Loaves bagged warm straight from the deck
            </span>
          </div>
        </div>
      </div>

      {/* Weekly Schedule Component */}
      <section aria-labelledby="schedule-section-title">
        <h2 id="schedule-section-title" className="sr-only">Weekly Bake Rotation Schedule</h2>
        <WeeklyScheduleTable />
      </section>

      {/* Pre-Order Warm Loaf Reservation Grid */}
      <section className="bg-white rounded-2xl border border-oatmeal-dark shadow-sm p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-oatmeal">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-crust-subtle border border-crust/30 text-crust text-xs font-mono font-semibold mb-2">
              <PackageCheck className="w-3.5 h-3.5 text-crust" />
              <span>Next-Day Warm Loaf Reservations</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rye">
              Reserve Tomorrow’s Hearth Breads
            </h2>
            <p className="text-xs sm:text-sm text-rye-muted mt-1 max-w-xl">
              Loaves reserved online are scored and fired for your designated morning collection window to guarantee peak crust crackle and crumb moisture.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-rye hover:bg-rye-light text-hearth text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm self-start sm:self-auto shrink-0"
          >
            <ShoppingBag className="w-4 h-4 text-crust" />
            <span>Open Pre-Order Bag</span>
          </button>
        </div>

        {/* Quick Bread Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {breadItems.map((loaf) => {
            const isSoldOut = loaf.ovenStatus === 'sold_out';
            return (
              <div
                key={loaf.id}
                className={`flex flex-col justify-between p-6 rounded-xl border transition-all ${
                  isSoldOut
                    ? 'bg-oatmeal/20 border-oatmeal-dark/50 opacity-75'
                    : 'bg-hearth/50 border-oatmeal-dark hover:border-crust hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      {loaf.badge && (
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-crust mb-1">
                          {loaf.badge}
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-lg text-rye leading-snug">
                        {loaf.name}
                      </h3>
                    </div>
                    <span className="font-mono text-base font-bold text-rye shrink-0">
                      ${loaf.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-crust-hover mb-2">
                    {loaf.subtitle}
                  </p>

                  <p className="text-xs text-rye-muted leading-relaxed line-clamp-3 mb-4">
                    {loaf.description}
                  </p>

                  {loaf.fermentationHours && (
                    <div className="flex items-center gap-2 text-[11px] font-mono text-rye-muted mb-4">
                      <span className="bg-white px-2 py-0.5 rounded border border-oatmeal shadow-2xs">
                        {loaf.fermentationHours}h Ferment
                      </span>
                      {loaf.hydrationPercent && (
                        <span className="bg-white px-2 py-0.5 rounded border border-oatmeal shadow-2xs">
                          {loaf.hydrationPercent}% Hydration
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-oatmeal flex items-center justify-between">
                  <span className="text-[11px] font-medium text-rye-muted">
                    {isSoldOut ? 'Sold out for today' : 'Fires 5:00 AM tomorrow'}
                  </span>

                  <button
                    type="button"
                    disabled={isSoldOut}
                    onClick={() => addToCart(loaf)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      isSoldOut
                        ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                        : 'bg-bramble hover:bg-bramble-hover text-hearth shadow-sm hover:shadow'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{isSoldOut ? 'Sold Out' : 'Reserve'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Catering & Large Order Inquiry */}
      <section className="bg-rye text-hearth rounded-2xl border border-rye-light/50 p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-crust">
              Special Events &amp; Wholesaling
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-hearth leading-tight">
              Catering &amp; Large Hearth Loaf Inquiries
            </h2>
            <p className="text-sm text-hearth/80 leading-relaxed">
              Planning a wedding, neighborhood gathering, or private dinner? We prepare custom bake sheets of Country Boules, Scandinavian Rugbrød, and morning pastries.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-hearth/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-crust shrink-0" />
                <span>Minimum 48 hours notice required for levain scaling</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-crust shrink-0" />
                <span>Custom heritage flour blends available upon request</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-crust shrink-0" />
                <span>Warm insulated transportation packaging provided</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white text-rye p-6 sm:p-8 rounded-2xl border border-oatmeal-dark shadow-2xl">
            {cateringSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-rye">
                  Inquiry Received!
                </h3>
                <p className="text-xs text-rye-muted max-w-xs mx-auto leading-relaxed">
                  Our head baker will review oven capacity and reply to <strong className="text-rye">{cateringEmail}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setCateringSubmitted(false)}
                  className="text-xs text-bramble font-semibold underline underline-offset-4 hover:text-bramble-hover"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleCateringSubmit} className="space-y-4 text-xs">
                <h3 className="font-serif text-lg font-bold text-rye pb-2 border-b border-oatmeal">
                  Large Order Request Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cat-name" className="font-semibold text-rye block mb-1">
                      Your Name
                    </label>
                    <input
                      id="cat-name"
                      type="text"
                      required
                      value={cateringName}
                      onChange={(e) => setCateringName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-hearth-paper border border-oatmeal-dark rounded-lg text-rye placeholder:text-rye-muted/50 focus:outline-none focus:ring-2 focus:ring-bramble focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="cat-email" className="font-semibold text-rye block mb-1">
                      Email Address
                    </label>
                    <input
                      id="cat-email"
                      type="email"
                      required
                      value={cateringEmail}
                      onChange={(e) => setCateringEmail(e.target.value)}
                      placeholder="jane@domain.ca"
                      className="w-full px-3.5 py-2.5 bg-hearth-paper border border-oatmeal-dark rounded-lg text-rye placeholder:text-rye-muted/50 focus:outline-none focus:ring-2 focus:ring-bramble focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cat-date" className="font-semibold text-rye block mb-1">
                      Target Date
                    </label>
                    <input
                      id="cat-date"
                      type="date"
                      required
                      value={cateringDate}
                      onChange={(e) => setCateringDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-hearth-paper border border-oatmeal-dark rounded-lg text-rye focus:outline-none focus:ring-2 focus:ring-bramble focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="cat-loaves" className="font-semibold text-rye block mb-1">
                      Estimated Loaves / Pastries
                    </label>
                    <select
                      id="cat-loaves"
                      value={cateringLoaves}
                      onChange={(e) => setCateringLoaves(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-hearth-paper border border-oatmeal-dark rounded-lg text-rye focus:outline-none focus:ring-2 focus:ring-bramble focus:border-transparent transition-all"
                    >
                      <option value="10-20">10 – 20 items</option>
                      <option value="20-50">20 – 50 items</option>
                      <option value="50-100">50 – 100 items</option>
                      <option value="100+">100+ items</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="cat-notes" className="font-semibold text-rye block mb-1">
                    Event Notes &amp; Preferred Bread Types
                  </label>
                  <textarea
                    id="cat-notes"
                    rows={3}
                    value={cateringNotes}
                    onChange={(e) => setCateringNotes(e.target.value)}
                    placeholder="E.g., 15 Country Boules and 20 Wild Bramble Morning Buns for morning brunch..."
                    className="w-full px-3.5 py-2.5 bg-hearth-paper border border-oatmeal-dark rounded-lg text-rye placeholder:text-rye-muted/50 focus:outline-none focus:ring-2 focus:ring-bramble focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-bramble hover:bg-bramble-hover text-hearth font-bold uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-bramble focus:ring-offset-2"
                >
                  <Send className="w-4 h-4 text-hearth" />
                  <span>Send Large Order Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
