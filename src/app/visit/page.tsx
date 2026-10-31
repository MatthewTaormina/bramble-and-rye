'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Flame, Users, CalendarCheck, CheckCircle2, Send, Info } from 'lucide-react';

export default function VisitPage() {
  const [workshopSubmitted, setWorkshopSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedWorkshop, setSelectedWorkshop] = useState('sourdough-foundations');

  const handleWorkshopSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWorkshopSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-bramble" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-bramble">
            Studio Location &amp; Hearth Schedule
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rye tracking-tight">
          Location &amp; Hearth Hours
        </h1>
        <p className="text-sm sm:text-base text-rye-muted leading-relaxed">
          Step into our bakery and cafe space. Watch loaves being hand-shaped on white oak flour benches and loaded into stone-deck hearth ovens using long wooden peel paddles.
        </p>
      </div>

      {/* Hours & Oven Times Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Studio Operating Hours */}
        <div className="bg-hearth-soft p-6 sm:p-8 rounded-xl border border-oatmeal space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-oatmeal">
            <span className="p-2 bg-crust-subtle text-crust rounded-full">
              <Clock className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold text-rye">
                Weekly Studio Hours
              </h2>
              <p className="text-xs text-rye-muted">
                Front cafe doors open promptly at posted times
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            {[
              { days: 'Wednesday – Friday', hours: '7:00 AM – 3:00 PM', status: 'Full Espresso & Hearth' },
              { days: 'Saturday', hours: '8:00 AM – 4:00 PM', status: 'Weekend Special Galettes' },
              { days: 'Sunday', hours: '8:00 AM – 2:00 PM', status: 'Morning Loaf Pickups' },
              { days: 'Monday & Tuesday', hours: 'Ovens Idle', status: 'Starter Maintenance & Flour Delivery' },
            ].map((schedule, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg bg-hearth border border-oatmeal text-xs"
              >
                <div>
                  <span className="font-bold text-rye block text-sm">
                    {schedule.days}
                  </span>
                  <span className="text-rye-muted text-[11px]">
                    {schedule.status}
                  </span>
                </div>
                <span className="font-mono font-semibold text-rye text-right">
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-oatmeal rounded border border-oatmeal-dark text-xs text-rye-muted flex items-start gap-2">
            <Info className="w-4 h-4 text-crust shrink-0 mt-0.5" />
            <span>
              Tip: Best selection of warm specialty loaves is between <strong>7:30 AM and 11:30 AM</strong>.
            </span>
          </div>
        </div>

        {/* Live Oven Batch Schedules */}
        <div className="bg-hearth-soft p-6 sm:p-8 rounded-xl border border-oatmeal space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-oatmeal">
            <span className="p-2 bg-bramble-subtle text-bramble rounded-full">
              <Flame className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold text-rye">
                Daily Oven Peeling Times
              </h2>
              <p className="text-xs text-rye-muted">
                When fresh crusts emerge hot from the deck
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-lg bg-hearth border border-oatmeal space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-crust uppercase text-[11px]">
                  Batch 1: 6:30 AM
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Opening Wave
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-rye">
                Country Boules &amp; Wild Bramble Morning Buns
              </h3>
              <p className="text-rye-muted leading-relaxed">
                Pulled directly before doors open. Bagged warm with blistered ears and flaky caramelized pastry layers.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-hearth border border-oatmeal space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-bramble uppercase text-[11px]">
                  Batch 2: 10:30 AM
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Midday Wave
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-rye">
                100% Rye Rugbrød &amp; Roasted Garlic Miches
              </h3>
              <p className="text-rye-muted leading-relaxed">
                Dense heritage loaves requiring long baking cycles. Ready for lunch sandwiches and afternoon table bread.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location, Directions & Social Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Physical Address & Directions */}
        <div className="bg-hearth p-6 sm:p-8 rounded-xl border border-oatmeal space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-oatmeal">
            <span className="p-2 bg-oatmeal text-rye rounded-full">
              <MapPin className="w-5 h-5 text-bramble" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold text-rye">
                Find the Hearth
              </h2>
              <p className="text-xs text-rye-muted">
                In the heart of the Grand River agricultural corridor
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-rye leading-relaxed">
            <p>
              <strong>Bramble &amp; Rye Bakery &amp; Cafe</strong><br />
              142 Heritage Mill Lane<br />
              Elora / Fergus Region, ON N0B 1S0
            </p>

            <div className="p-3 bg-oatmeal-light rounded border border-oatmeal space-y-1 text-xs">
              <p><strong>Parking:</strong> Free customer lot behind the mill stone courtyard.</p>
              <p><strong>Cyclists:</strong> Dedicated bike racks adjacent to the garden seating terrace.</p>
              <p><strong>Accessibility:</strong> Ground floor zero-step entrance with push-button automatic doors and accessible washroom facilities (AODA compliant).</p>
            </div>
          </div>
        </div>

        {/* Device-Light Social Ethos */}
        <div className="bg-hearth p-6 sm:p-8 rounded-xl border border-oatmeal space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-oatmeal">
            <span className="p-2 bg-oatmeal text-rye rounded-full">
              <Users className="w-5 h-5 text-crust" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold text-rye">
                Device-Light Atmosphere
              </h2>
              <p className="text-xs text-rye-muted">
                A shared sanctuary for grain and conversation
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-rye-muted leading-relaxed">
            To cultivate a tranquil neighborhood space, our cafe seating is intentionally device-light. We offer no public Wi-Fi or laptop outlets in the main dining room, encouraging patrons to enjoy the aroma of baking bread, quiet reading, and unhurried conversation.
          </p>

          <div className="pt-2 text-xs font-mono text-rye-muted border-t border-oatmeal">
            &ldquo;Linger over coffee, listen to the crackle of cooling loaves, and taste the grain.&rdquo;
          </div>
        </div>
      </div>

      {/* Community Workshop Registration */}
      <section className="bg-rye text-hearth p-8 sm:p-12 rounded-2xl border border-rye-light/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-crust">
              Hands-On Baking Classes
            </span>
            <h2 className="font-serif text-3xl font-bold text-hearth">
              Weekend Sourdough &amp; Heritage Grain Workshops
            </h2>
            <p className="text-sm text-hearth/80 leading-relaxed">
              Join our head bakers on Sunday afternoons for an intimate 3-hour masterclass. Learn sourdough starter maintenance, fermentation temperature control, hand mixing, and Dutch oven baking techniques at home.
            </p>

            <div className="text-xs text-hearth/70 space-y-1.5 pt-2">
              <p>✓ Includes a jar of our active 7-year dark rye mother starter</p>
              <p>✓ 2kg bag of stone-ground heritage spelt flour</p>
              <p>✓ Banneton proofing basket and baker’s scoring lame</p>
            </div>
          </div>

          <div className="bg-hearth text-rye p-6 sm:p-8 rounded-xl border border-oatmeal">
            {workshopSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-rye">
                  Spot Reserved!
                </h3>
                <p className="text-xs text-rye-muted max-w-xs mx-auto">
                  We’ve sent the workshop syllabus and confirmation details to <strong>{email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setWorkshopSubmitted(false)}
                  className="text-xs text-bramble font-semibold underline underline-offset-4"
                >
                  Register another guest
                </button>
              </div>
            ) : (
              <form onSubmit={handleWorkshopSubmit} className="space-y-4 text-xs">
                <h3 className="font-serif text-base font-bold text-rye">
                  Register for Next Workshop
                </h3>

                <div>
                  <label htmlFor="ws-name" className="font-medium text-rye block mb-1">
                    Your Name
                  </label>
                  <input
                    id="ws-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3 py-2 bg-hearth-paper border border-oatmeal-dark rounded text-rye focus:outline-none focus:ring-1 focus:ring-bramble"
                  />
                </div>

                <div>
                  <label htmlFor="ws-email" className="font-medium text-rye block mb-1">
                    Email Address
                  </label>
                  <input
                    id="ws-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@domain.ca"
                    className="w-full px-3 py-2 bg-hearth-paper border border-oatmeal-dark rounded text-rye focus:outline-none focus:ring-1 focus:ring-bramble"
                  />
                </div>

                <div>
                  <label htmlFor="ws-type" className="font-medium text-rye block mb-1">
                    Select Masterclass Session
                  </label>
                  <select
                    id="ws-type"
                    value={selectedWorkshop}
                    onChange={(e) => setSelectedWorkshop(e.target.value)}
                    className="w-full px-3 py-2 bg-hearth-paper border border-oatmeal-dark rounded text-rye focus:outline-none focus:ring-1 focus:ring-bramble"
                  >
                    <option value="sourdough-foundations">Sourdough Foundations: 80% Hydration Country Boule ($125)</option>
                    <option value="heritage-rye">Scandinavian 100% Rye Rugbrød &amp; Seeds ($135)</option>
                    <option value="croissant-lamination">Artisanal Lamination: Morning Buns &amp; Galettes ($145)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-bramble hover:bg-bramble-hover text-hearth font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Reserve Workshop Spot</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
