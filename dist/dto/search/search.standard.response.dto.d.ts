import { CancellationType } from '../../types/cancellation-type';
export declare class SegmentSearchStandardResponseDTO {
    segmentName: string;
    segmentValues: string[];
}
export declare class AmountFromSearchStandardResponseDTO {
    amount: number;
    nettAmount: number;
}
export declare class UrlImageSearchStandardResponseDTO {
    imageSize: 'SMALL' | 'MEDIUM' | 'LARGE';
    resource: string;
}
export declare class ImageSearchStandardResponseDTO {
    imageType: string;
    urls: UrlImageSearchStandardResponseDTO[];
}
export declare class CancellationPolicy {
    type: CancellationType;
    notes: string[];
}
export declare class ActivitySearchStandardResponseDTO {
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
    targetMarket: string[];
    amountFrom: AmountFromSearchStandardResponseDTO;
    images: ImageSearchStandardResponseDTO[];
    cancellationPolicy: CancellationPolicy;
    isOpenDated: boolean;
    isInstantConfirmation: boolean;
    isBestSeller: boolean;
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
