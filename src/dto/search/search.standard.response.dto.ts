import { CancellationType } from '../../types/cancellation-type';

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

export class CancellationPolicy {
  type: CancellationType;
  notes: string[];
}

// startingPoints -> Attraction,Meeting Point,HOTEL_PICKUP,Meeting Hotel Pickup,Hotel Pickup,MEETING_POINT
// meetingPoint ->  LANDMARK, ADDRESS, OTHER

export class ActivitySearchStandardResponseDTO {
  activityId: string;
  activityName: string;
  activityType: string;
  country: string;
  destination: string;
  latitude: number;
  longitude: number;
  duration: number | null;
  categories: string[];
  currency: string;
  targetMarket: string[]; //['EUR','THA']
  amountFrom: AmountFromSearchStandardResponseDTO;
  images: ImageSearchStandardResponseDTO[];
  cancellationPolicy: CancellationPolicy;
  isOpenDated: boolean;
  isInstantConfirmation: boolean;
  isBestSeller: boolean;
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
