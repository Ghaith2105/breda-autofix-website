import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'apk',
    title: 'APK Keuring',
    description: 'Official Dutch periodic vehicle inspection to ensure safety and environmental standards.',
    priceStart: 39.95,
    durationMin: 60,
    icon: 'ShieldCheck',
    extendedDescription: 'The APK (Algemene Periodieke Keuring) is a mandatory inspection in Europe for vehicles to ensure they meet safety and environmental standards. Our certified judges perform a thorough check of your vehicle to ensure you are safe on the road. We check brakes, suspension, lights, tires, and emissions.',
    features: ['Official RDW Report', 'Emission Testing', 'Safety Systems Check', 'Light Alignment', 'Brake Performance Test']
  },
  {
    id: 'maintenance-small',
    title: 'Small Service (Kleine Beurt)',
    description: 'Oil change, filter replacement, and essential fluid top-ups.',
    priceStart: 165,
    durationMin: 90,
    icon: 'Wrench',
    extendedDescription: 'Regular maintenance is key to a long-lasting vehicle. The small service focuses on the essentials: refreshing the engine oil and filter, and checking all vital fluids. We also perform a visual safety inspection of the underside of the car.',
    features: ['High-quality Synthetic Oil (up to 4L)', 'Oil Filter Replacement', 'Fluid Level Top-up (Coolant, Brake, Washer)', 'Battery Check', 'Tire Pressure Adjustment']
  },
  {
    id: 'maintenance-large',
    title: 'Large Service (Grote Beurt)',
    description: 'Comprehensive check-up including brakes, spark plugs, filters, and engine diagnostics.',
    priceStart: 325,
    durationMin: 180,
    icon: 'Car',
    extendedDescription: 'Our most comprehensive maintenance package. In addition to everything in the small service, we replace air and cabin filters, spark plugs (for petrol cars), and fuel filters (if applicable). We also inspect the braking system, suspension, and exhaust in detail.',
    features: ['All Filters Replaced', 'Spark Plug Replacement', 'Detailed Brake Inspection', 'Gearbox Oil Check', 'Diagnostic Scan', 'Service Light Reset']
  },
  {
    id: 'tires',
    title: 'Tire Change & Balancing',
    description: 'Seasonal tire swap (Summer/Winter) including wheel balancing.',
    priceStart: 50,
    durationMin: 45,
    icon: 'Disc',
    extendedDescription: 'Driving with the right tires for the season is crucial for safety. We swap your summer/winter set efficiently. Every tire change includes electronic balancing to prevent vibrations and ensure a smooth ride. We also inspect your tires for uneven wear or damage.',
    features: ['Demounting & Mounting', 'Electronic Wheel Balancing', 'Valve Replacement', 'Tire Pressure Check', 'Tire Storage Options Available']
  },
  {
    id: 'ac',
    title: 'Airco Service',
    description: 'Refill and cleaning of your air conditioning system.',
    priceStart: 99,
    durationMin: 60,
    icon: 'Wind',
    extendedDescription: 'A functioning air conditioning system keeps you cool in summer and demists windows in winter. Over time, refrigerant leaks out. We recover the old gas, vacuum test the system for leaks, and refill it with fresh refrigerant and compressor oil.',
    features: ['Refrigerant Recovery', 'Leak Detection Test', 'System Refill', 'Compressor Oil Top-up', 'Odor Treatment (Optional)']
  },
  {
    id: 'diagnostics',
    title: 'Engine Diagnostics',
    description: 'Computerized readout of engine error codes and troubleshooting.',
    priceStart: 65,
    durationMin: 45,
    icon: 'Activity',
    extendedDescription: 'Warning light on your dashboard? Our advanced diagnostic computers can communicate with your car\'s ECU to read error codes. We interpret these codes to pinpoint the exact issue, whether it\'s engine, transmission, or electronics related, and provide a repair plan.',
    features: ['OBD-II Error Code Readout', 'Live Data Analysis', 'System Reset', 'Printed Diagnostic Report', 'Repair Quotation']
  }
];

export const MOCK_TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
];