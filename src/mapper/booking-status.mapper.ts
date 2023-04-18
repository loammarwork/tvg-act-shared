import { BookingStatus } from '../types/booking-status.type';

export const BookingStatusMapper: Record<string, (typeof BookingStatus)[keyof typeof BookingStatus]> = {
  PRECONFIRMED: 'PRECONFIRMED',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELED',
  CANCELED: 'CANCELED',
  FAILED: 'FAILED',
};
