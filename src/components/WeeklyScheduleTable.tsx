'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Flame, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '@/data/scheduleData';

export default function WeeklyScheduleTable() {
  const [selectedDay, setSelectedDay] = useState<string>('Wednesday');

  const currentDayData = WEEKLY_SCHEDULE.find((d) => d.day === selectedDay) || WEEKLY_SCHEDULE[0];

  return (
    <div className="bg-white rounded-2xl border border-oatmeal-dark shadow-sm p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-oatmeal">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-crust-subtle border border-crust/30 text-crust text-xs font-mono font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-crust" />
            <span>Hearth Precision Matrix</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rye">
            Weekly Bake Rotation
          </h2>
          <p className="text-xs sm:text-sm text-rye-muted mt-1 max-w-xl">
            Heritage landrace grains require dedicated fermentation curves. Explore our day-by-day specialty hearth loaves and scheduled batch discharges.
          </p>
        </div>
      </div>

      {/* Day Selector Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
        {WEEKLY_SCHEDULE.map((schedule) => {
          const isSelected = schedule.day === selectedDay;
          return (
            <button
              key={schedule.day}
              type="button"
              onClick={() => setSelectedDay(schedule.day)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium shrink-0 transition-all flex flex-col items-center gap-1 border ${
                isSelected
                  ? 'bg-rye text-hearth border-rye shadow-md ring-2 ring-crust scale-[1.02]'
                  : 'bg-hearth border-oatmeal-dark/60 text-rye hover:bg-oatmeal/60 hover:border-oatmeal-dark'
              }`}
            >
              <span className="font-serif font-bold text-sm tracking-wide">{schedule.dayShort}</span>
              <span
                className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  isSelected
                    ? 'bg-crust/20 text-crust font-semibold'
                    : schedule.isOpen
                    ? 'bg-emerald-50 text-emerald-800 font-medium'
                    : 'bg-stone-100 text-stone-500 font-normal'
                }`}
              >
                {schedule.isOpen ? 'Bake Day' : 'Idle'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Day Timetable Box */}
      <div className="bg-hearth p-5 rounded-xl border border-oatmeal flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2.5 rounded-lg bg-bramble-subtle text-bramble shrink-0">
            <Calendar className="w-5 h-5 text-bramble" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-rye">
              {currentDayData.day} Hearth Timetable
            </h3>
            <p className="text-xs text-rye-muted mt-0.5">
              Studio Operating Hours:{' '}
              <strong className="text-rye font-mono font-semibold">{currentDayData.hours}</strong>
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-oatmeal text-xs font-mono text-rye shadow-sm">
          <Clock className="w-4 h-4 text-crust shrink-0" />
          <span>Primary Discharge: <strong className="text-crust-hover">{currentDayData.ovenBatches[0]}</strong></span>
        </div>
      </div>

      {/* Specialty Loaves Grid for this Day */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-rye-muted flex items-center gap-1.5">
          <span>Scheduled Hearth Offerings for {currentDayData.day}</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentDayData.specialtyBreads.map((bread, idx) => {
            const isHot = bread.status === 'hot';
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-oatmeal-dark/50 bg-white hover:border-crust transition-all shadow-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h5 className="font-serif font-bold text-rye text-base leading-snug">
                      {bread.name}
                    </h5>
                    {isHot && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-crust-subtle text-crust border border-crust/30 shrink-0">
                        <Flame className="w-3 h-3 text-crust animate-pulse" /> Hot Discharge
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-rye-muted leading-relaxed">
                    {bread.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Note for Idle Days */}
      {!currentDayData.isOpen && (
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-3 text-xs text-stone-700">
          <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-stone-900">Kitchen Fermentation & Intake Phase</p>
            <p className="mt-0.5 text-stone-600 leading-relaxed">
              The hearth ovens are resting while natural 36-hour mother sourdough cultures are refreshed and fresh cold stone-ground flour bags arrive from local millers.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
