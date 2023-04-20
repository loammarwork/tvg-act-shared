import { BookingStatusType } from '../../types/booking-status.type';
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
export declare class PreconfirmActivityResponseDTO {
    status: BookingStatusType;
    activityReference: string;
    activityCode: string;
    activityName: string;
    comments: {
        type: string;
        text: string;
    }[];
    package: {
        packageCode: string;
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
    } | null;
    supplier: {
        name: string;
        vatNumber: string;
    } | null;
    files: string[];
}
export declare class PreconfirmBookingHolder {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    nationality: string;
    email: string;
    phones: string[];
}
export declare class PreconfirmDataStandardResponseDTO {
    bookingReference: string;
    clientReference: string;
    currency: string;
    amount: number;
    status: BookingStatusType;
    bookingHolder: PreconfirmBookingHolder;
    activities: PreconfirmActivityResponseDTO[];
    creationDate: string;
}
export declare class PreconfirmStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: PreconfirmDataStandardResponseDTO;
}
