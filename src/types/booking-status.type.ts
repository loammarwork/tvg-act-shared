export enum BookingStatus {
  HOLD = 'VENDOR_CONFIRMATION',
  PRECONFIRMED_SUCCESS = 'PRECONFIRMED',
  PRECONFIRMED_FAILED = 'PRECONFIRM_FAILED',
  CONFIRMED_SUCCESS = 'CONFIRMED',
  CONFIRMED_FAILED = 'CONFIRM_FAILED',
  CONFIRM_EXPIRED = 'CONFIRMATION_EXPIRED',
  VENDOR_REFUSED = 'VENDOR_REFUSED',
  CANCELLED = 'CANCELLED',
}

export enum BookingStatusCode {
  HOLD = 7,
  PRECONFIRMED_SUCCESS = 4,
  PRECONFIRMED_FAILED = 5,
  CONFIRMED_SUCCESS = 0,
  CONFIRMED_FAILED = 1,
  CONFIRM_EXPIRED = 3,
  VENDOR_REFUSED = 8,
  CANCELLED = 6,
}
