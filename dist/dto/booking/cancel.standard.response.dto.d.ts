import { BookingStatus } from '../../types/booking-status.type';
export declare class CancelActivityResponseDTO {
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
export declare class CancelBookingHolder {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    nationality: string;
    email: string;
    phones: string[];
}
export declare class CancelDataStandardResponseDTO {
    bookingReference: string;
    clientReference: string;
    currency: string;
    amount: number;
    status: BookingStatus;
    bookingHolder: CancelBookingHolder;
    activities: CancelActivityResponseDTO[];
    creationDate: string;
    cancellationDate: string;
    cancelValuationAmount: number;
}
export declare class CancelStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: CancelDataStandardResponseDTO;
}
