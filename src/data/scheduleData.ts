import { DailySchedule } from '@/types';

export const WEEKLY_SCHEDULE: DailySchedule[] = [
  {
    day: 'Wednesday',
    dayShort: 'Wed',
    isOpen: true,
    hours: '7:00 AM – 3:00 PM',
    ovenBatches: ['6:30 AM (Country & Rye)', '10:30 AM (Morning Pastry & Baguettes)'],
    specialtyBreads: [
      {
        name: 'Signature Country Boule',
        description: 'Hard red wheat & stone-ground spelt blend.',
        status: 'hot'
      },
      {
        name: '100% Heritage Whole Rye (Rugbrød)',
        description: 'Sprouted rye berries, roasted sunflower seeds.',
        status: 'available'
      },
      {
        name: 'Wild Bramble Morning Buns',
        description: 'Cardamom sugar, wild berry reduction.',
        status: 'hot'
      }
    ]
  },
  {
    day: 'Thursday',
    dayShort: 'Thu',
    isOpen: true,
    hours: '7:00 AM – 3:00 PM',
    ovenBatches: ['6:30 AM (Country & Spelt)', '11:00 AM (Pastries & Twists)'],
    specialtyBreads: [
      {
        name: 'Signature Country Boule',
        description: 'Daily staple 28-hr cold fermented loaf.',
        status: 'available'
      },
      {
        name: 'Golden Spelt & Sesame Batard',
        description: 'Cold-fermented ancient hull grain with nutty toasted crust.',
        status: 'available'
      },
      {
        name: 'Savory Leek & Gruyère Twists',
        description: 'Cave-aged Gruyère and sweet garden leeks.',
        status: 'available'
      }
    ]
  },
  {
    day: 'Friday',
    dayShort: 'Fri',
    isOpen: true,
    hours: '7:00 AM – 4:00 PM',
    ovenBatches: ['6:00 AM (Hearth Breads)', '9:30 AM (Miche & Galettes)', '1:00 PM (Afternoon Hearth)'],
    specialtyBreads: [
      {
        name: 'Roasted Garlic & Rosemary Miche',
        description: 'Slow-confit Ontario garlic cloves and fresh garden rosemary.',
        status: 'available'
      },
      {
        name: 'Weekly Red Fife Heritage Boule',
        description: '19th-century Canadian landrace grain with wild honey aroma.',
        status: 'hot'
      },
      {
        name: 'Signature Country Boule',
        description: 'Triple-batch bake for weekend dinner preparations.',
        status: 'available'
      }
    ]
  },
  {
    day: 'Saturday',
    dayShort: 'Sat',
    isOpen: true,
    hours: '8:00 AM – 4:00 PM',
    ovenBatches: ['6:30 AM (Hearth Staples)', '10:00 AM (Pastry Overdrive)', '12:30 PM (Weekend Loaves)'],
    specialtyBreads: [
      {
        name: '100% Heritage Whole Rye (Rugbrød)',
        description: 'Dense dark Scandinavian loaf, weekend brunch favorite.',
        status: 'available'
      },
      {
        name: 'Roasted Garlic & Rosemary Miche',
        description: 'Confit garlic and garden rosemary sourdough.',
        status: 'available'
      },
      {
        name: 'Orchard Plum & Honey Galette',
        description: 'Free-form pastry with Niagara plums and wildflower honey.',
        status: 'sold_out'
      },
      {
        name: 'Wild Bramble Morning Buns',
        description: 'Double batch baked fresh throughout the morning.',
        status: 'hot'
      }
    ]
  },
  {
    day: 'Sunday',
    dayShort: 'Sun',
    isOpen: true,
    hours: '8:00 AM – 2:00 PM',
    ovenBatches: ['7:00 AM (Sunday Hearth & Buns)'],
    specialtyBreads: [
      {
        name: 'Signature Country Boule',
        description: 'Warm hearth loaves bagged at opening.',
        status: 'hot'
      },
      {
        name: 'Golden Spelt & Sesame Batard',
        description: 'Limited Sunday morning run.',
        status: 'available'
      },
      {
        name: 'Brown Butter & Rye Choc-Chip Cookies',
        description: 'Smoked sea salt and single-origin dark chocolate.',
        status: 'available'
      }
    ]
  },
  {
    day: 'Monday',
    dayShort: 'Mon',
    isOpen: false,
    hours: 'Ovens Cooling / Starter Maintenance',
    ovenBatches: ['Starter feeding and 36-hr rye fermentation incubation.'],
    specialtyBreads: [
      {
        name: 'Ovens Idle',
        description: 'The kitchen rests while long-fermentation starters feed.',
        status: 'sold_out'
      }
    ]
  },
  {
    day: 'Tuesday',
    dayShort: 'Tue',
    isOpen: false,
    hours: 'Grain Milling & Flour Deliveries',
    ovenBatches: ['Fresh grain intake from Fergus and Tavistock stone mills.'],
    specialtyBreads: [
      {
        name: 'Flour Intake Day',
        description: 'Granite-stone milled whole grain arrives from local partners.',
        status: 'sold_out'
      }
    ]
  }
];
