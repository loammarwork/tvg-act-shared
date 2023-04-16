export class SegmentSearchStandardResponseDTO {
  segmentName: string;
  segmentValues: string;
}

export class AmountFromSearchStandardResponseDTO {
  amount: number;
  nettAmount: number;
  boxOfficeAmount: number;
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
  type: 'CANCEL.CONDITION' | 'NON.REFUNDABLE' | 'FREE.CANCELLATION';
  note: string;
}

export class location {
  country: {
    name: string;
    destination: {
      name: string;
    };
  };
}

export class ActivitySearchStandardResponseDTO {
  activityId: string;
  activityName: string;
  activityType: string;
  location: string;
  segments: SegmentSearchStandardResponseDTO[];
  currency: string;
  targetMarket: any[];
  amountFrom: AmountFromSearchStandardResponseDTO[];
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
