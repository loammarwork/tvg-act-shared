"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatusCode = exports.PaymentStatus = void 0;
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
//# sourceMappingURL=payment-status.type.js.map