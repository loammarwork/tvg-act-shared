import { BookingStatusType } from '../../types/booking-status.type';

export class PreconfirmActivityResponseDTO {
  status: BookingStatusType;
  activityReference: string;
  activityCode: string;
  activityName: string;
  comments: { type: string; text: string }[]; //hotelbed comments->type(=CONTRACT_REMARKS).text
  package: {
    packageCode: string;
    packageName: string;
  };
  paxes: {
    customerId: string;
    name: string;
    middlename: string;
    surname: string;
    age: number;
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
  dateFrom: string; //iso date
  dateTo: string; //iso date
  cancellationPolicy: {
    cancelBefore: string; //iso date,
    freeCancellation: {
      type: 'FREE.CANCELLATAION' | 'NON.REFUNDABLE' | 'CANCEL.CONDITION';
      note: string;
    };
  };
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

export class PreconfirmBookingHolder {
  name: string;
  middlename: string;
  surname: string;
  title: string;
  email: string;
  phones: string[];
}
export class PreconfirmDataStandardResponseDTO {
  bookingReference: string;
  clientReference: string;
  currency: string;
  amount: number;
  status: BookingStatusType;
  bookingHolder: PreconfirmBookingHolder;
  activities: PreconfirmActivityResponseDTO[];
  creationDate: string; //iso date;
}
export class PreconfirmStandardResponseDTO {
  success: boolean;
  identifier: string;
  data: PreconfirmDataStandardResponseDTO;
}
