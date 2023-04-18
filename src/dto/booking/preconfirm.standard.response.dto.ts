import { BookingStatusType } from '../../types/booking-status.type';

export class PreconfirmDataStandardResponseDTO {
  reference: string;
  currency: string;
  amount: number;
  status: BookingStatusType;
  gatewayResponse: any;
}
export class ReconfirmStandardResponseDTO {
  success: boolean;
  identifier: string;
  data: PreconfirmDataStandardResponseDTO;
}
