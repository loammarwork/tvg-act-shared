export declare const BookingStatus: {
    readonly HOLD: "VENDOR_CONFIRMATION";
    readonly PRECONFIRMED_SUCCESS: "PRECONFIRMED";
    readonly PRECONFIRMED_FAILED: "PRECONFIRM_FAILED";
    readonly CONFIRMED_SUCCESS: "CONFIRMED";
    readonly CONFIRMED_FAILED: "CONFIRM_FAILED";
    readonly CONFIRM_EXPIRED: "CONFIRMATION_EXPIRED";
    readonly VENDOR_REFUSED: "VENDOR_REFUSED";
    readonly CANCELLED: "CANCELLED";
};
export declare enum BookingStatusCode {
    HOLD = 7,
    PRECONFIRMED_SUCCESS = 4,
    PRECONFIRMED_FAILED = 5,
    CONFIRMED_SUCCESS = 0,
    CONFIRMED_FAILED = 1,
    CONFIRM_EXPIRED = 3,
    VENDOR_REFUSED = 8,
    CANCELLED = 6
}
export declare const PaymentStatus: {
    PAYMENT_PENDING: string;
    PAYMENT_SUCCESS: string;
    PAYMENT_EXPIRED: string;
    PAYMENT_FAILED: string;
};
export declare enum PaymentStatusCode {
    PAYMENT_PENDING = 2,
    PAYMENT_SUCCESS = 0,
    PAYMENT_EXPIRED = 3,
    PAYMENT_FAILED = 1
}
export type BookingStatusType = (typeof BookingStatus)[keyof typeof BookingStatus];
