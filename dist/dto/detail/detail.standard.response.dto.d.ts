import { CancellationType, RefundType } from '../../types/cancellation-type';
export declare class DetailStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: Activity;
}
export interface Activity {
    activityId: string;
    activityName: string;
    activityType: string;
    location: Location;
    locationDetail: LocationDetail;
    segments: Segment[];
    currency: string;
    termsAndConditions: any[];
    cancellationPolicy: CancellationTitlePolicy;
    activityDetails: ActivityDetail[];
    scheduling: Scheduling;
    routes: Route[];
    guidingOptions: GuidingOptions;
    images: Image[];
    isOpenDated: boolean;
    isBestSeller: boolean;
    packages: Package[];
}
export interface LocationDetail {
    endPoints: EndPoint[];
    startingPoints: StartingPoint[];
}
export interface EndPoint {
    type: string;
    description: string;
}
export interface StartingPoint {
    type: string;
    meetingPoint: MeetingPoint;
    pickupInstructions?: {
        description: string;
    }[];
}
export interface MeetingPoint {
    type: string;
    geolocation: Geolocation;
    address: string;
    country: Country2;
    city: string;
    description: string;
}
export interface GuidingOptions {
    guideType: string;
    included: boolean;
    groupType?: string;
    tips?: string;
    maxGroupSize?: number;
}
export interface Location {
    country: Country;
    geolocation: {
        latitude: number;
        longitude: number;
    } | null;
}
export interface Country {
    name: string;
    destination: Destination;
    address: string;
}
export interface Country2 {
    code: string;
    name: string;
    destinations: Destination2[];
}
export interface Destination2 {
    code: string;
    name: string;
}
export interface Destination {
    name: string;
}
export interface Scheduling {
    duration: number | null;
    opened: Opened[] | null;
    closed: Closed[] | null;
}
export interface Opened {
    from: string | null;
    to: string | null;
    openingTime: string;
    closeTime: string | null;
    weekDays: string[];
    lastAdmissionTime: string | null;
}
export interface Closed {
    weekDays: string[];
}
export interface Segment {
    segmentName: string;
    segmentValues: string[];
}
export interface CancellationTitlePolicy {
    type: 'FREE.CANCELLATION' | 'CANCEL.CONDITION' | 'NON.REFUNDABLE';
    note: string[];
}
export interface ActivityDetail {
    title: string;
    key: string;
    content: string[];
}
export interface GeoLocation {
    latitude: number;
    longitude: number;
}
export interface Image {
    imageType: string;
    urls: Url[];
}
export interface Url {
    imageSize: string;
    resource: string;
}
export interface AmountFrom {
    amount: number;
    nettAmount: number;
}
export interface Point {
    type: string;
    order: number;
    stop: boolean;
    pointOfInterest: {
        type: string;
        geolocation: GeoLocation;
        address: string;
        country: {
            code: string;
        };
        city: string;
        zip: string;
        description: string;
    };
}
export interface Route {
    duration: number | null;
    description: string;
    timeFrom: string;
    timeTo: string;
    points: Point[];
}
export interface ExtraData {
    code: string;
    text: string;
    required: boolean;
}
export interface Package {
    packageId: string;
    packageName: string;
    packageDetails: PackageDetail[];
    extraDatas: ExtraData[];
    amountsFrom: AmountsFrom[];
    duration: number | null;
    isFavorite: boolean;
    redeemStart: string | null;
    redeemEnd: string | null;
    operationDates: OperationDate[];
    ticketValidity: any;
}
export interface PackageDetail {
    title: string;
    key: string;
    content: string[];
}
export interface AmountsFrom {
    priceName: string;
    amount: number;
    nettAmount: number;
    amountDetails: AmountDetails;
}
export interface AmountDetails {
    paxType: string;
    ageFrom: number;
    ageTo: number;
}
export interface Opened2 {
    openingTime: string;
    closeTime: string;
    lastAdmissionTime: any;
    weekDays: string[];
}
export interface OperationDate {
    date: string;
    day: string;
    operationDetails: OperationDetail[];
    targetMarkets: {
        code: string;
        nationalities: {
            name: string;
            code: string;
        }[];
    }[];
    amountFrom: AmountFrom2;
}
export interface OperationDetail {
    showTime: string | null;
    allotment: Allotment;
    sellOnTime: any;
    paxAmounts: PaxAmount[];
    requiredTargets: {
        code: string;
        name: string;
    }[];
    resourceData: ResourceData;
}
export interface Allotment {
    remaining: string;
    limit: string;
}
export interface PaxAmount {
    paxType: string;
    amount: number;
    requiredTarget: {
        name: string;
        code: string;
    }[];
    nettAmount: number;
    minPurchaseQty: any;
    maxPurchaseQty: any;
    remaining: string;
    amountDetails: AmountDetails2;
}
export interface AmountDetails2 {
    paxType: string;
    ageFrom: number;
    ageTo: number;
}
export interface ResourceData {
    rateKey: string;
    cancellationPolicies: CancellationPolicy[];
}
export interface CancellationPolicy {
    type: CancellationType;
    cancelBefore: string | null;
    refund: {
        type: RefundType;
        value: number;
    };
    note: string[];
}
export interface AmountFrom2 {
    paxType: string;
    amount: number;
    nettAmount: number;
    minPurchaseQty: any;
    maxPurchaseQty: any;
    remaining: string;
    amountDetails: AmountDetails3;
}
export interface AmountDetails3 {
    paxType: string;
    ageFrom: number;
    ageTo: number;
}
