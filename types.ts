export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceStart: number;
  durationMin: number;
  icon: string;
  extendedDescription?: string;
  features?: string[];
}

export interface BookingSlot {
  time: string;
  available: boolean;
}

export interface BookingState {
  serviceId: string | null;
  date: Date | null;
  timeSlot: string | null;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export enum Step {
  SERVICE = 0,
  DATE = 1,
  DETAILS = 2,
  CONFIRMATION = 3
}