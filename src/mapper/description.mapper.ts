export type DescriptionMapperType =
  | 'How to redeem'
  | 'Description'
  | 'Highlights'
  | 'Overview'
  | 'Aligibility'
  | 'Usage Validity'
  | 'Additional Info'
  | 'Highlights'
  | 'Questions'
  | 'Addition Detail'
  | 'Ticket Type'
  | 'Ticket Validity'
  | 'Excludes'
  | 'Includes'
  | 'Important Info'
  | 'Advanced Tips'
  | 'Redeem Info'
  | 'Direct Entrance'
  | 'Guiding Options'
  | 'Feature Groups';

export const DescriptionMapper: Record<string, DescriptionMapperType> = {
  /* Extranet */
  how_to_redeem: 'How to redeem',
  description: 'Description',
  highlight: 'Highlights',
  overview: 'Overview',
  aligibility: 'Aligibility',
  usageValidity: 'Usage Validity',
  additionalInfo: 'Additional Info',
  /* Extranet */

  /* GlobalTix */
  // highlights: 'Highlights',
  inclusions: 'Includes',
  howToUse: 'How to redeem',
  questions: 'Questions',
  operatingHours: 'Addition Detail',
  ticketFormat: 'Ticket Type',
  ticketValidity: 'Ticket Validity',
  /* GlobalTix */

  /* HotelBeds */
  excluded: 'Excludes',
  included: 'Includes',
  importantInfo: 'Important Info',

  redeemInfo: 'Redeem Info',
  directEntrance: 'Direct Entrance',
  //level activity
  featureGroups: 'Feature Groups',
  guidingOptions: 'Guiding Options',
  advancedTips: 'Advanced Tips',
  highlights: 'Highlights',
  /* HotelBeds */
} as const;
