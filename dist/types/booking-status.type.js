"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStatusCode = exports.BookingStatus = void 0;
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
//# sourceMappingURL=booking-status.type.js.map