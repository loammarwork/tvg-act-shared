import { BookingStatus } from '../../types/booking-status.type';
import { CancellationType, RefundType } from '../../types/cancellation-type';
export interface CancellationPolicy {
    type: CancellationType;
    cancelBefore: string | null;
    refund: {
        type: RefundType;
        value: number;
    };
    notes: string[];
}
export declare class ReconfirmActivityResponseDTO {
    status: BookingStatus;
    activityReference: string;
    activityId: string;
    activityName: string;
    comments: {
        type: string;
        text: string;
    }[];
    package: {
        packageId: string;
        packageName: string;
    };
    paxes: {
        customerId: string;
        name: string;
        middlename: string;
        surname: string;
        title: string;
        age: number;
        nationality: string;
        paxType: string;
        passport: string;
    }[];
    answers: {
        question: {
            code: string;
            text: string;
        };
        answer: string;
    }[];
    dateFrom: string;
    dateTo: string;
    cancellationPolicies: CancellationPolicy[];
    amountDetail: {
        paxAmounts: {
            paxType: string;
            amount: number;
        }[];
        totalAmount: {
            amount: number;
        };
    };
    providerInformation: {
        name: string;
    };
    supplier: {
        name: string;
        vatNumber: string;
    };
}
export declare class ReconfirmBookingHolder {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    nationality: string;
    email: string;
    phones: string[];
}
export declare class ReconfirmDataStandardResponseDTO {
    bookingReference: string;
    clientReference: string;
    currency: string;
    amount: number;
    status: BookingStatus;
    bookingHolder: ReconfirmBookingHolder;
    activities: ReconfirmActivityResponseDTO[];
    creationDate: string;
}
export declare class ReconfirmStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: ReconfirmDataStandardResponseDTO;
}
