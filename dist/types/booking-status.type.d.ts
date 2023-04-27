export declare const BookingStatus: {
    readonly HOLD: "VENDOR_CONFIRMATION";
    readonly PRECONFIRMED_SUCCESS: "PRECONFIRMED";
    readonly PRECONFIRMED_FAILED: "PRECONFIRM_FAILED";
    readonly CONFIRMED_SUCCESS: "CONFIRMED";
    readonly CONFIRMED_FAILED: "CONFIRM_FAILED";
    readonly CONFIRM_EXPIRED: "CONFIRMATION_EXPIRED";
    readonly PAYMENT_EXPIRED: "PAYMENT_EXPIRED";
    readonly VENDOR_REFUSED: "VENDOR_REFUSED";
    readonly CANCELLED: "CANCELLED";
};
export type BookingStatusType = (typeof BookingStatus)[keyof typeof BookingStatus];
