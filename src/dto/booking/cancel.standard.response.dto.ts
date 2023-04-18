import { BookingStatusType } from '../../types/booking-status.type';

export class CancelDataStandardResponseDTO {
  reference: string;
  status: BookingStatusType;
  gatewayResponse: any;
}
export class CancelStandardResponseDTO {
  success: boolean;
  identifier: string;
  data: CancelDataStandardResponseDTO;
}
