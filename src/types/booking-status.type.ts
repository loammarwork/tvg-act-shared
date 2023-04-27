export const BookingStatus = {
  HOLD: 'VENDOR_CONFIRMATION',
  PRECONFIRMED_SUCCESS: 'PRECONFIRMED',
  PRECONFIRMED_FAILED: 'PRECONFIRM_FAILED',
  CONFIRMED_SUCCESS: 'CONFIRMED',
  CONFIRMED_FAILED: 'CONFIRM_FAILED',
  CONFIRM_EXPIRED: 'CONFIRMATION_EXPIRED',
  PAYMENT_EXPIRED: 'PAYMENT_EXPIRED',
  VENDOR_REFUSED: 'VENDOR_REFUSED',
  CANCELLED: 'CANCELLED',
} as const;

export type BookingStatusType = (typeof BookingStatus)[keyof typeof BookingStatus];
