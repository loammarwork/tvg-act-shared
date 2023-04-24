"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentMapper = exports.ERPCategoryMapperCode = exports.TargetSegment = void 0;
exports.TargetSegment = {
    AttractionAndTicket: 'Attractions & Tickets',
    TourAndSightSeeing: 'Tours & Sightseeing',
    FoodAndDrink: 'Food & Drink',
    RelaxSpaAndBeauty: 'Relax Spa & Beauty',
    Transport: 'Transport',
    Health: 'Health',
    WifiAndSimCard: 'Wifi & Sim card',
    ThemeParksAndWaterParks: 'Theme parks & Water parks',
    MuseumsAndGalleries: 'Museums & Galleries',
    ZooAndFarms: 'Zoo & Farms',
    MusicalTheatre: 'Musical theatre',
    Tour: 'Tour',
    FullDayTour: 'Full-day tours',
    MultiDayTour: 'Muti-day tours',
    NatureAndWildlifeTours: 'Nature & Wildlife Tours',
    HeritageAndCulturalTours: 'Heritage & Cultural tours',
    CruisesSailingAndWaterTours: 'Cruises, sailing & Water tours',
    RestaurantAndDiningVouchers: 'Restaurant & Dining Vouchers',
    DinnerCruises: 'Dinner Cruises',
    D0_3_Hours: '0 - 3 Hours',
    D3_5_Hours: '3 - 5 Hours',
    D5_7_Hours: '5 - 7 Hours',
    D1_3_Days: '1 - 3 Days',
    More_3_Days: '3+ Days',
    Other: 'Other',
    SportActivities: 'Sport Activities',
    WorkShopActivities: 'Workshop Activities',
};
exports.ERPCategoryMapperCode = {
    'Attractions & Tickets': 'AttractionAndTicket',
    'Tours & Sightseeing': 'TourAndSightSeeing',
    'Food & Drink': 'FoodAndDrink',
    'Relax Spa & Beauty': 'RelaxSpaAndBeauty',
    Transport: 'Transport',
    Health: 'Health',
    'Wifi & Sim card': 'WifiAndSimCard',
    'Sport Activities': 'SportActivities',
    'Workshop Activities': 'WorkShopActivities',
    Other: 'Other',
    'Theme parks & Water parks': 'Other',
    'Museums & Galleries': 'Other',
    'Zoo & Farms': 'Other',
    'Musical theatre': 'Other',
    Tour: 'Transport',
    'Full-day tours': 'Other',
    'Muti-day tours': 'Other',
    'Nature & Wildlife Tours': 'Other',
    'Heritage & Cultural tours': 'Other',
    'Cruises, sailing & Water tours': 'Other',
    'Restaurant & Dining Vouchers': 'Other',
    'Dinner Cruises': 'Other',
    '0 - 3 Hours': 'Other',
    '3 - 5 Hours': 'Other',
    '5 - 7 Hours': 'Other',
    '1 - 3 Days': 'Other',
    '3+ Days': 'Other',
};
exports.SegmentMapper = {
    ['Events']: ['Other'],
    ['Attraction']: ['Attractions & Tickets'],
    ['Tours']: ['Tours & Sightseeing'],
    ['F&B']: ['Food & Drink'],
    ['Transportation']: ['Transport'],
    ['WiFi & SIM Card']: ['Wifi & Sim card'],
    ['Lifestyle']: ['Sport Activities', 'Workshop Activities'],
    ['Others']: ['Other'],
    ['City tours']: ['Tours & Sightseeing'],
    ['Amusement Parks']: ['Attractions & Tickets'],
    ['Tickets & Attraction Passes']: ['Attractions & Tickets'],
    ['Art & culture']: ['Workshop Activities'],
    ['Shows, sports and special events']: ['Sport Activities'],
    ['Gastronomy & nightlife']: ['Food & Drink'],
    ['Outdoor activities & Adventure']: ['Tours & Sightseeing'],
    ['Day Trips & Excursions']: ['Tours & Sightseeing'],
    ['Zoo, Aquarium & Nature']: ['Attractions & Tickets'],
    ['Classes']: ['Workshop Activities'],
    ['Spa & Wellness']: ['Relax Spa & Beauty', 'Health'],
    ['Transport & Rentals']: ['Transport'],
    ['Air, Helicopter & Balloon Tours']: ['Tours & Sightseeing'],
    ['Cruise & Water Tours']: ['Tours & Sightseeing'],
    ['Travel Services']: ['Tours & Sightseeing'],
    ['Tour & activities']: ['Tours & Sightseeing'],
    ['Specialist tours']: ['Tours & Sightseeing'],
    ['Bundle']: ['Other'],
    ['Multiday']: ['Other'],
    ['Flexible']: ['Other'],
    ['Full day']: ['Tours & Sightseeing'],
    ['Half-day morning']: ['Tours & Sightseeing'],
    ['Half-day afternoon']: ['Tours & Sightseeing'],
    ['Evening']: ['Food & Drink', 'Other'],
    ['Families with kids']: ['Workshop Activities', 'Other'],
    ['Adult only']: ['Other'],
    ['Couples']: ['Other'],
    ['Families']: ['Other'],
    ['Senior']: ['Other'],
    ['Youth']: ['Other'],
    ['Shopping, markets and souks']: ['Tours & Sightseeing'],
    ['Collection']: ['Workshop Activities'],
    ['Culture & Sights']: ['Tours & Sightseeing'],
    ['Nature']: ['Tours & Sightseeing'],
    ['Time Out']: ['Other'],
    ['Entertainment']: ['Workshop Activities'],
    ['Food & Drink']: ['Food & Drink'],
    ['Activities']: ['Workshop Activities'],
    ['Ocean College']: ['Attractions & Tickets'],
    ['MyMagic+']: ['Attractions & Tickets'],
    ['Theme Park']: ['Attractions & Tickets'],
    ['Adult Only']: ['Other'],
    ['Loud & Lively']: ['Other'],
    ['Designed for Couples']: ['Workshop Activities'],
    ['Great for Groups']: ['Workshop Activities'],
    ['Perfect for Families']: ['Workshop Activities'],
    ['Easy']: ['Workshop Activities'],
    ['Moderate']: ['Workshop Activities'],
    ['Strenuous']: ['Workshop Activities'],
    ['Short']: ['Workshop Activities'],
    ['Overnight']: ['Workshop Activities'],
    ['Go out']: ['Other'],
    ['Go local']: ['Other'],
    ['Go active']: ['Other'],
    ['Go relax']: ['Other'],
    ['Go extra']: ['Other'],
    ['Self-drive tours']: ['Tours & Sightseeing'],
    ['Private tours']: ['Tours & Sightseeing'],
    ['Seat in coach scheduled departures']: ['Transport'],
    ['Mini cruises']: ['Food & Drink'],
    ['City Break']: ['Tours & Sightseeing'],
    ['Sun and Beach']: ['Tours & Sightseeing'],
    ['Cultural tours']: ['Tours & Sightseeing'],
    ['Pilgrimage / Religion']: ['Tours & Sightseeing'],
    ['Gastronomy tours']: ['Food & Drink'],
    ['Safari, 4x4, quad']: ['Tours & Sightseeing'],
    ['Ski, snow']: ['Sport Activities'],
    ['Trekking']: ['Sport Activities'],
    ['Adventure']: ['Sport Activities'],
    ['Nature and wildlife']: ['Tours & Sightseeing'],
    ['Motorcycle tours']: ['Sport Activities'],
    ['Mountain biking']: ['Sport Activities'],
    ['Cycling']: ['Sport Activities'],
    ['Golf']: ['Sport Activities'],
    ['Multisport']: ['Sport Activities'],
    ['Spa and Wellness']: ['Relax Spa & Beauty'],
    ['Educational tours']: ['Tours & Sightseeing'],
    ['Rail tours']: ['Other'],
    ['2-3 days']: ['Other'],
    ['4-7 days']: ['Other'],
    ['8-14 days']: ['Other'],
    ['15-21 days']: ['Other'],
    ['More than 21 days']: ['Other'],
    ['Volunteers']: ['Other'],
    ['Big Bus']: ['Transport'],
    ['City Sightseeing Worldwide']: ['Tours & Sightseeing'],
    ['Urban Adventures']: ['Tours & Sightseeing'],
    ['Context']: ['Tours & Sightseeing'],
    ['Gray Line']: ['Tours & Sightseeing'],
    ['Lip Smacking Tours']: ['Tours & Sightseeing'],
    ['Premium Tours']: ['Tours & Sightseeing'],
    ['Walks of Paris']: ['Tours & Sightseeing'],
    ['Walks of Italy']: ['Tours & Sightseeing'],
    ['Walks USA']: ['Tours & Sightseeing'],
    ['Evan Evans']: ['Tours & Sightseeing'],
    ['Key Tours']: ['Tours & Sightseeing'],
    ['Pink Jeep']: ['Tours & Sightseeing', 'Sport Activities'],
    ['Plaza Premium Lounge']: ['Food & Drink'],
    ['Maverick']: ['Other'],
    ['City Wonders']: ['Tours & Sightseeing'],
    ['Papillon']: ['Tours & Sightseeing'],
    ['Landsea Tours']: ['Tours & Sightseeing'],
    ['Golden Tours – Gray Line London']: ['Tours & Sightseeing'],
    ['Travel Curious']: ['Tours & Sightseeing'],
    ['Service date']: ['Other'],
    ['Seasonal']: ['Other'],
    ['Private']: ['Other'],
    ['Small group']: ['Other'],
    ['Tailor-made']: ['Tours & Sightseeing'],
    ['Shore excursions']: ['Other'],
    ['Skip the line-Fast track']: ['Attractions & Tickets'],
    ['Wheelchair accessible']: ['Transport', 'Health'],
    ['Safe2Stay']: ['Health'],
    ['Show Performance']: ['Attractions & Tickets'],
    ['Historical']: ['Attractions & Tickets'],
    ['Museum/Gallery']: ['Attractions & Tickets'],
    ['Park Nature & Animals']: ['Attractions & Tickets'],
    ['Theme & Water Park']: ['Attractions & Tickets'],
    ['Observation']: ['Attractions & Tickets'],
    ['City tour']: ['Tours & Sightseeing'],
    ['Cruise']: ['Food & Drink'],
    ['Cruise, Day Trips']: ['Attractions & Tickets'],
    ['Day Trips']: ['Full-day tours', 'Tours & Sightseeing'],
    ['Island Tours']: ['Tours & Sightseeing'],
    ['Private Tours, Sightseeing']: ['Tours & Sightseeing'],
    ['Private Tours']: ['Tour', 'Tours & Sightseeing'],
    ['Sightseeing']: ['Tour', 'Tours & Sightseeing'],
    ['Water Activities']: ['Transport'],
    ['Massage & Spa']: ['Relax Spa & Beauty'],
    ['Salon & Beauty']: ['Relax Spa & Beauty'],
    ['Chinese Food']: ['Food & Drink'],
    ['Italian Food']: ['Food & Drink'],
    ['Japanese Food']: ['Food & Drink'],
    ['Thai Authentic Food']: ['Food & Drink'],
    ['Dining']: ['Food & Drink'],
    ['City tour guide']: ['Tours & Sightseeing'],
    ['Historical tour guide']: ['Tours & Sightseeing'],
    ['Adventure guide']: ['Tours & Sightseeing'],
    ['0 - 3 hours']: ['Tours & Sightseeing', 'Other'],
    ['3 - 5 hours']: ['Tours & Sightseeing', 'Other'],
    ['5 - 7 hours']: ['5 - 7 Hours', 'Other'],
    ['1 to 3 days']: ['1 - 3 Days', 'Other'],
    ['3+ days']: ['3+ Days', 'Other'],
    ['Morning ( 6.00 - 12.00)']: ['Other'],
    ['Afternoon (12.00 - 17.00)']: ['Other'],
    ['Evening (17.00 - 24.00)']: ['Other'],
    ['Adults (Ages 12 or Above)']: ['Other'],
    ['Children (Ages 3–11 years)']: ['Other'],
    ['Senior (Ages 60 years or Above)']: ['Other'],
    ['Thai Residence Only']: ['Other'],
};
//# sourceMappingURL=segment.mapper.js.map