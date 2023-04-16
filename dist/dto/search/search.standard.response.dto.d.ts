export declare class SegmentSearchStandardResponseDTO {
    segmentName: string;
    segmentValues: string;
}
export declare class AmountFromSearchStandardResponseDTO {
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
}
export declare class UrlImageSearchStandardResponseDTO {
    imageSize: 'SMALL' | 'MEDIUM' | 'LARGE';
    resource: string;
}
export declare class ImageSearchStandardResponseDTO {
    imageType: string;
    urls: UrlImageSearchStandardResponseDTO[];
}
export declare class freeCancellationSearchStandardResponseDTO {
    type: 'FREE.CANCELLATION' | 'CANCEL.CONDITION' | 'NON.REFUNDABLE';
    note: string;
}
export declare class LocationSearchStandardResponseDTO {
    country: {
        name: string;
        destination: {
            name: string;
        };
    };
    geolocation: {
        latitude: number;
        longitude: number;
    };
}
export declare class ActivitySearchStandardResponseDTO {
    activityId: string;
    activityName: string;
    activityType: string;
    location: LocationSearchStandardResponseDTO;
    duration: number;
    segments: SegmentSearchStandardResponseDTO[];
    currency: string;
    targetMarket: any[];
    amountFrom: AmountFromSearchStandardResponseDTO[];
    images: ImageSearchStandardResponseDTO[];
    freeCancellation: freeCancellationSearchStandardResponseDTO;
}
export declare class PaginationSearchStandardRequestDTO {
    itemsPerPage: number;
    page: number;
    totalItems: number;
    itemsCount: number;
}
export declare class SearchStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: ActivitySearchStandardResponseDTO[];
    pagination: PaginationSearchStandardRequestDTO;
}
