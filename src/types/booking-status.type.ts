export const BookingStatus = {
  PRECONFIRMED: 'PRECONFIRMED',
  CONFIRMED: 'CONFIRMED',
  CANCELED: 'CANCELED',
  FAILED: 'FAILED',
} as const;

export const BookingStatusMapper: Record<string, (typeof BookingStatus)[keyof typeof BookingStatus]> = {
  PRECONFIRMED: 'PRECONFIRMED',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELED',
  CANCELED: 'CANCELED',
  FAILED: 'FAILED',
};

export type BookingStatusType = (typeof BookingStatus)[keyof typeof BookingStatus];
