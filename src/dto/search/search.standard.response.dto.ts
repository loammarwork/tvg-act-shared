export class SegmentSearchStandardResponseDTO {
  segmentName: string;
  segmentValues: string[];
}

export class AmountFromSearchStandardResponseDTO {
  amount: number;
  nettAmount: number;
}

export class UrlImageSearchStandardResponseDTO {
  imageSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  resource: string;
}

export class ImageSearchStandardResponseDTO {
  imageType: string;
  urls: UrlImageSearchStandardResponseDTO[];
}

export class freeCancellationSearchStandardResponseDTO {
  type: 'FREE.CANCELLATION' | 'CANCEL.CONDITION' | 'NON.REFUNDABLE';
  note: string;
}

// startingPoints -> Attraction,Meeting Point,HOTEL_PICKUP,Meeting Hotel Pickup,Hotel Pickup,MEETING_POINT
// meetingPoint ->  LANDMARK, ADDRESS, OTHER
export class LocationSearchStandardResponseDTO {
  country: {
    // สำหรับ HotelBeds เอาจากด้านบนสุดเพราะมีเสมอ
    name: string;
    destination: {
      name: string;
    };
  };
  geolocation: {
    latitude: number;
    longitude: number;
  } | null;
}

export class ActivitySearchStandardResponseDTO {
  activityId: string;
  activityName: string;
  activityType: string;
  location: LocationSearchStandardResponseDTO;
  duration: number | null;
  segments: SegmentSearchStandardResponseDTO[];
  currency: string;
  targetMarket: string[]; //['EUR','THA']
  amountFrom: AmountFromSearchStandardResponseDTO;
  images: ImageSearchStandardResponseDTO[];
  freeCancellation: freeCancellationSearchStandardResponseDTO;
}

export class PaginationSearchStandardRequestDTO {
  itemsPerPage: number;
  page: number;
  totalItems: number;
  itemsCount: number;
}

export class SearchStandardResponseDTO {
  success: boolean;
  identifier: string;
  data: ActivitySearchStandardResponseDTO[];
  pagination: PaginationSearchStandardRequestDTO;
}
