export type ItemCategory = 'all' | 'bread' | 'pastry' | 'beverage' | 'pantry';

export type OvenStatus = 'hot' | 'available' | 'sold_out';

export interface TraceabilityInfo {
  farm: string;
  location: string;
  miller: string;
  millingMethod: string;
  extractionRate: string;
  grainVariety: string;
  soilNotes?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'bread' | 'pastry' | 'beverage' | 'pantry';
  price: number;
  description: string;
  fermentationHours?: number;
  hydrationPercent?: number;
  ingredients: string[];
  allergens: string[];
  ovenStatus: OvenStatus;
  statusLabel?: string;
  traceability?: TraceabilityInfo;
  badge?: string;
  isPopular?: boolean;
}

export interface DailySchedule {
  day: string;
  dayShort: string;
  isOpen: boolean;
  hours: string;
  ovenBatches: string[];
  specialtyBreads: {
    name: string;
    description: string;
    status: OvenStatus;
  }[];
}

export interface MillPartner {
  id: string;
  name: string;
  region: string;
  specialty: string;
  bio: string;
  grainsSupplied: string[];
  millingStyle: string;
  relationshipYears: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
