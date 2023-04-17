export class DetailStandardResponseDTO {
  success: boolean;
  identifier: string;
  data: Data;
}

export interface Data {
  activityId: string;
  activityName: string;
  activityType: string;
  location: Location;
  routes: any[];
  scheduling: Scheduling;
  segments: Segment[];
  currency: string;
  termsAndConditions: any[];
  freeCancellation: FreeCancellation;
  activityDetails: ActivityDetail[];
  geoLocation: GeoLocation;
  images: Image[];
  isOpenDated: boolean;
  isBestSeller: boolean;
  amountFrom: AmountFrom;
  packages: Package[];
}

export interface Location {
  country: Country;
}

export interface Country {
  name: string;
  destination: Destination;
  address: string;
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
  from: string | null; // ISO8601
  to: string | null; // ISO8601
  openingTime: string; //00:00
  closeTime: string | null; //00:00
  weekDays: string[]; //['Wednesday','Friday']
  lastAdmissionTime: string | null; //00:00
}

export interface Closed {
  weekDays: string[];
}

export interface Segment {
  segmentName: string;
  segmentValues: string[];
}

export interface FreeCancellation {
  type: 'FREE.CANCELLATION' | 'CANCEL.CONDITION' | 'NON.REFUNDABLE';
  note: string;
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
  boxOfficeAmount: number;
}

export interface Package {
  extraDatas: any[];
  packageId: string;
  packageName: string;
  packageDetails: PackageDetail[];
  amountsFrom: AmountsFrom[];
  ticketValidity: any;
  duration: number | null;
  scheduling: {
    duration: number | null;
    closed: [] | null;
  };
  opened: Opened2[];
  isFavorite: boolean;
  redeemStart: any;
  redeemEnd: any;
  operationDates: OperationDate[];
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
  boxOfficeAmount: number;
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
  targetMarket: any[];
  amountFrom: AmountFrom2;
}

export interface OperationDetail {
  showTime: any;
  allotment: Allotment;
  sellOnTime: any;
  paxAmounts: PaxAmount[];
  requiredTargets: any[];
  resourceData: ResourceData;
}

export interface Allotment {
  remaining: string;
  limit: string;
}

export interface PaxAmount {
  paxType: string;
  amount: number;
  requiredTarget: any;
  targetMarkets: any[];
  nettAmount: number;
  boxOfficeAmount: number;
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
  cancellationPolicy: CancellationPolicy;
}

export interface CancellationPolicy {
  cancelBefore: string;
  freeCancellation: FreeCancellation2;
}

export interface FreeCancellation2 {
  type: 'FREE.CANCELLATION' | 'CANCEL.CONDITION' | 'NON.REFUNDABLE';
  note: string;
}

export interface AmountFrom2 {
  paxType: string;
  amount: number;
  nettAmount: number;
  boxOfficeAmount: number;
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
