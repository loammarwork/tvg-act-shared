"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatusCode = exports.PaymentStatus = exports.BookingStatusCode = exports.BookingStatus = void 0;
exports.BookingStatus = {
    HOLD: 'VENDOR_CONFIRMATION',
    PRECONFIRMED_SUCCESS: 'PRECONFIRMED',
    PRECONFIRMED_FAILED: 'PRECONFIRM_FAILED',
    CONFIRMED_SUCCESS: 'CONFIRMED',
    CONFIRMED_FAILED: 'CONFIRM_FAILED',
    CONFIRM_EXPIRED: 'CONFIRMATION_EXPIRED',
    VENDOR_REFUSED: 'VENDOR_REFUSED',
    CANCELLED: 'CANCELLED',
};
var BookingStatusCode;
(function (BookingStatusCode) {
    BookingStatusCode[BookingStatusCode["HOLD"] = 7] = "HOLD";
    BookingStatusCode[BookingStatusCode["PRECONFIRMED_SUCCESS"] = 4] = "PRECONFIRMED_SUCCESS";
    BookingStatusCode[BookingStatusCode["PRECONFIRMED_FAILED"] = 5] = "PRECONFIRMED_FAILED";
    BookingStatusCode[BookingStatusCode["CONFIRMED_SUCCESS"] = 0] = "CONFIRMED_SUCCESS";
    BookingStatusCode[BookingStatusCode["CONFIRMED_FAILED"] = 1] = "CONFIRMED_FAILED";
    BookingStatusCode[BookingStatusCode["CONFIRM_EXPIRED"] = 3] = "CONFIRM_EXPIRED";
    BookingStatusCode[BookingStatusCode["VENDOR_REFUSED"] = 8] = "VENDOR_REFUSED";
    BookingStatusCode[BookingStatusCode["CANCELLED"] = 6] = "CANCELLED";
})(BookingStatusCode = exports.BookingStatusCode || (exports.BookingStatusCode = {}));
exports.PaymentStatus = {
    PAYMENT_PENDING: 'PENDING',
    PAYMENT_SUCCESS: 'SUCCESS',
    PAYMENT_EXPIRED: 'EXPIRED',
    PAYMENT_FAILED: 'FAILED',
};
var PaymentStatusCode;
(function (PaymentStatusCode) {
    PaymentStatusCode["PAYMENT_PENDING"] = "2";
    PaymentStatusCode["PAYMENT_SUCCESS"] = "0";
    PaymentStatusCode["PAYMENT_EXPIRED"] = "3";
    PaymentStatusCode["PAYMENT_FAILED"] = "1";
})(PaymentStatusCode = exports.PaymentStatusCode || (exports.PaymentStatusCode = {}));
//# sourceMappingURL=booking-status.type.js.map