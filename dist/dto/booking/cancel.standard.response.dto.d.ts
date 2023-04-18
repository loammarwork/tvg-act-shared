import { BookingStatusType } from '../../types/booking-status.type';
export declare class CancelDataStandardResponseDTO {
    reference: string;
    status: BookingStatusType;
    gatewayResponse: any;
}
export declare class CancelStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: CancelDataStandardResponseDTO;
}
