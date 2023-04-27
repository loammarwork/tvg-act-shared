import { BookingStatusType } from '../../types/booking-status.type';

export class CancelActivityResponseDTO {
  status: BookingStatusType;
  activityReference: string;
  activityId: string;
  activityName: string;
  comments: { type: string; text: string }[]; //hotelbed comments->type(=CONTRACT_REMARKS).text
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
  dateFrom: string; //iso date
  dateTo: string; //iso date
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

export class CancelBookingHolder {
  name: string;
  middlename: string;
  surname: string;
  title: string;
  nationality: string;
  email: string;
  phones: string[];
}
export class CancelDataStandardResponseDTO {
  bookingReference: string;
  clientReference: string;
  currency: string;
  amount: number;
  status: BookingStatusType;
  bookingHolder: CancelBookingHolder;
  activities: CancelActivityResponseDTO[];
  creationDate: string; //iso date;
  cancellationDate: string; //iso date;
  cancelValuationAmount: number;
}
export class CancelStandardResponseDTO {
  success: boolean;
  identifier: string;
  data: CancelDataStandardResponseDTO;
}
