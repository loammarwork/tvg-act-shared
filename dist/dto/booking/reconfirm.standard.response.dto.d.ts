import { BookingStatusType } from '../../types/booking-status.type';
export declare class ReconfirmDataStandardResponseDTO {
    reference: string;
    currency: string;
    amount: number;
    status: BookingStatusType;
    gatewayResponse: any;
}
export declare class ReconfirmStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: ReconfirmDataStandardResponseDTO;
}
