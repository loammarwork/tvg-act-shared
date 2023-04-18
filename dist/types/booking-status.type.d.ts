export declare const BookingStatus: {
    readonly PRECONFIRMED: "PRECONFIRMED";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELED: "CANCELED";
    readonly FAILED: "FAILED";
};
export declare const BookingStatusMapper: Record<string, (typeof BookingStatus)[keyof typeof BookingStatus]>;
export type BookingStatusType = (typeof BookingStatus)[keyof typeof BookingStatus];
