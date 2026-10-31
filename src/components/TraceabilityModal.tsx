'use client';

import React from 'react';
import { X, Wheat, MapPin, Gauge, ShieldCheck, Sprout } from 'lucide-react';
import { MenuItem } from '@/types';

interface TraceabilityModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function TraceabilityModal({ item, onClose }: TraceabilityModalProps) {
  if (!item || !item.traceability) return null;
  const { traceability } = item;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="traceability-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rye/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-hearth rounded-lg border border-oatmeal-dark max-w-lg w-full p-6 shadow-2xl relative text-rye overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent badge */}
        <div className="flex items-center justify-between border-b border-oatmeal pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-crust-subtle text-crust">
              <Wheat className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-rye-muted block">
                Regional Grain Verification
              </span>
              <h2 id="traceability-title" className="font-serif text-lg font-bold text-rye">
                {item.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-rye-muted hover:text-rye hover:bg-oatmeal transition-colors"
            aria-label="Close traceability details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="space-y-4 text-sm">
          <div className="bg-oatmeal-light p-3.5 rounded border border-oatmeal">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-bramble shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rye-muted block">
                  Farm & Geographic Origin
                </span>
                <p className="font-medium text-rye">{traceability.farm}</p>
                <p className="text-xs text-rye-muted">{traceability.location}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-hearth-soft p-3 rounded border border-oatmeal">
              <span className="text-xs font-semibold uppercase tracking-wider text-rye-muted block mb-1">
                Miller Partner
              </span>
              <p className="font-medium text-rye">{traceability.miller}</p>
            </div>

            <div className="bg-hearth-soft p-3 rounded border border-oatmeal">
              <span className="text-xs font-semibold uppercase tracking-wider text-rye-muted block mb-1">
                Extraction Rate
              </span>
              <p className="font-medium text-crust-hover font-mono">{traceability.extractionRate}</p>
            </div>
          </div>

          <div className="bg-hearth-soft p-3 rounded border border-oatmeal">
            <div className="flex items-start gap-2">
              <Gauge className="w-4 h-4 text-crust shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rye-muted block">
                  Milling Method
                </span>
                <p className="text-xs text-rye leading-relaxed">{traceability.millingMethod}</p>
              </div>
            </div>
          </div>

          {traceability.soilNotes && (
            <div className="bg-hearth-soft p-3 rounded border border-oatmeal">
              <div className="flex items-start gap-2">
                <Sprout className="w-4 h-4 text-bramble shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-rye-muted block">
                    Soil Health & Farming Ethics
                  </span>
                  <p className="text-xs text-rye leading-relaxed">{traceability.soilNotes}</p>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-oatmeal flex items-center justify-between text-xs text-rye-muted">
            <span className="flex items-center gap-1.5 text-bramble font-medium">
              <ShieldCheck className="w-4 h-4" /> 100% Traceable Ontario Supply Chain
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-rye text-hearth rounded hover:bg-rye-light transition-colors font-medium text-xs"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
