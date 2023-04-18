import { BookingStatusType } from '../../types/booking-status.type';

export class ReconfirmDataStandardResponseDTO {
  reference: string;
  currency: string;
  amount: number;
  status: BookingStatusType;
  gatewayResponse: any;
}
export class ReconfirmStandardResponseDTO {
  success: boolean;
  identifier: string;
  data: ReconfirmDataStandardResponseDTO;
}
