"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatusCode = exports.PaymentStatus = exports.BookingStatusCode = exports.BookingStatus = void 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["HOLD"] = "VENDOR_CONFIRMATION";
    BookingStatus["PRECONFIRMED_SUCCESS"] = "PRECONFIRMED";
    BookingStatus["PRECONFIRMED_FAILED"] = "PRECONFIRM_FAILED";
    BookingStatus["CONFIRMED_SUCCESS"] = "CONFIRMED";
    BookingStatus["CONFIRMED_FAILED"] = "CONFIRM_FAILED";
    BookingStatus["CONFIRM_EXPIRED"] = "CONFIRMATION_EXPIRED";
    BookingStatus["VENDOR_REFUSED"] = "VENDOR_REFUSED";
    BookingStatus["CANCELLED"] = "CANCELLED";
})(BookingStatus = exports.BookingStatus || (exports.BookingStatus = {}));
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
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAYMENT_PENDING"] = "PENDING";
    PaymentStatus["PAYMENT_SUCCESS"] = "SUCCESS";
    PaymentStatus["PAYMENT_EXPIRED"] = "EXPIRED";
    PaymentStatus["PAYMENT_FAILED"] = "FAILED";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var PaymentStatusCode;
(function (PaymentStatusCode) {
    PaymentStatusCode[PaymentStatusCode["PAYMENT_PENDING"] = 2] = "PAYMENT_PENDING";
    PaymentStatusCode[PaymentStatusCode["PAYMENT_SUCCESS"] = 0] = "PAYMENT_SUCCESS";
    PaymentStatusCode[PaymentStatusCode["PAYMENT_EXPIRED"] = 3] = "PAYMENT_EXPIRED";
    PaymentStatusCode[PaymentStatusCode["PAYMENT_FAILED"] = 1] = "PAYMENT_FAILED";
})(PaymentStatusCode = exports.PaymentStatusCode || (exports.PaymentStatusCode = {}));
//# sourceMappingURL=booking-status.type.js.map