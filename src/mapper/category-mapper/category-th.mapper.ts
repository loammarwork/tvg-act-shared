export type TargetCategoryTH =
  | 'Tour'
  | 'Attractions & Tickets'
  | 'Tours & Sightseeing'
  | 'Food & Drinks'
  | 'Relax Spa & Beauty'
  | 'Transport'
  | 'Health'
  | 'Wifi & Sim card'
  | 'Theme parks & Water parks'
  | 'Museums & Galleries'
  | 'Zoo & Farms'
  | 'Musical theatre'
  | 'Full-day tours'
  | 'Muti-day tours'
  | 'Nature & Wildlife Tours'
  | 'Heritage & Cultural tours'
  | 'Cruises| sailing & Water tours'
  | 'Restaurant & Dining Vouchers'
  | 'Dinner Cruises'
  | '0 - 3 Hours'
  | '3 - 5 Hours'
  | '5 - 7 Hours'
  | '1 - 3 Days'
  | '3+ Days'
  | 'Other'
  | 'Sport Activities'
  | 'Workshop Activities';

//prettier-ignore
export const CategoryTHValueToKeyCMS = {
    'Attractions & Tickets': 'activities.categoty.attractions.and.tickets',
    'Food & Drinks': 'activities.categoty.food.and.drinks',
    'Health': 'activities.categoty.health',
    'Relax Spa & Beauty': 'activities.categoty.relax_spa.and.beauty',
    'Tours & Sightseeing': 'activities.categoty.tours.and.sightseeing',
    'Transport': 'activities.categoty.transport',
    'Wifi & Sim card': 'activities.categoty.wifi.and.sim_card',
  };

export type CategoryMapperTypeRecordTH<T> = Record<string, T>;
export const CategoryMapperTH: CategoryMapperTypeRecordTH<Array<TargetCategoryTH>> = {
  //GlobalTix
  ['F&B']: ['Food & Drinks'],
  ['Attraction']: ['Attractions & Tickets'],
  ['WiFi & SIM Card']: ['Wifi & Sim card'],
  ['Others']: ['Other'],
  ['Lifestyle']: ['Sport Activities', 'Workshop Activities'],
  //['Entertainment']: ['Workshop Activities'],
  ['Events']: ['Other'],
  ['Tours']: ['Tours & Sightseeing'],
  ['Transportation']: ['Transport'],
  ['Novelty & Excitement']: ['Other'],
  //['Dining']: ['Other'],
  ['Sustainability']: ['Other'],
  ['Wellness']: ['Relax Spa & Beauty'],

  //HotelBed
  ['City tours']: ['Tours & Sightseeing'],
  ['Amusement Parks']: ['Attractions & Tickets'],
  ['Tickets & Attraction Passes']: ['Attractions & Tickets'],
  ['Art & culture']: ['Workshop Activities'],
  ['Shows, sports and special events']: ['Sport Activities'],
  ['Gastronomy & nightlife']: ['Food & Drinks'],
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
  ['Evening']: ['Food & Drinks', 'Other'],
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
  ['Food & Drink']: ['Food & Drinks'],
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
  ['Mini cruises']: ['Food & Drinks'],
  ['City Break']: ['Tours & Sightseeing'],
  ['Sun and Beach']: ['Tours & Sightseeing'],
  ['Cultural tours']: ['Tours & Sightseeing'],
  ['Pilgrimage / Religion']: ['Tours & Sightseeing'],
  ['Gastronomy tours']: ['Food & Drinks'],
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
  ['Plaza Premium Lounge']: ['Food & Drinks'],
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

  //Extranet
  ['Show Performance']: ['Attractions & Tickets'],
  ['Historical']: ['Attractions & Tickets'],
  ['Museum/Gallery']: ['Attractions & Tickets'],
  ['Park Nature & Animals']: ['Attractions & Tickets'],
  ['Theme & Water Park']: ['Attractions & Tickets'],
  ['Observation']: ['Attractions & Tickets'],
  ['City tour']: ['Tours & Sightseeing'],
  ['Cruise']: ['Food & Drinks'],
  ['Cruise, Day Trips']: ['Attractions & Tickets'],
  ['Day Trips']: ['Full-day tours', 'Tours & Sightseeing'],
  ['Island Tours']: ['Tours & Sightseeing'],
  ['Private Tours, Sightseeing']: ['Tours & Sightseeing'],
  ['Private Tours']: ['Tour', 'Tours & Sightseeing'],
  ['Sightseeing']: ['Tour', 'Tours & Sightseeing'],
  ['Water Activities']: ['Transport'],
  ['Massage & Spa']: ['Relax Spa & Beauty'],
  ['Salon & Beauty']: ['Relax Spa & Beauty'],
  ['Chinese Food']: ['Food & Drinks'],
  ['Italian Food']: ['Food & Drinks'],
  ['Japanese Food']: ['Food & Drinks'],
  ['Thai Authentic Food']: ['Food & Drinks'],
  ['Dining']: ['Food & Drinks'],
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
export type CategoryMapperTHType = keyof typeof CategoryMapperTH;

export const CategoryCMSMapperTH = {
  'activities.categoty.attractions.and.tickets': 'สถานที่ท่องเที่ยว และตั๋ว',
  'activities.categoty.food.and.drinks': 'อาหาร และเครื่องดื่ม',
  'activities.categoty.health': 'สุขภาพ',
  'activities.categoty.relax_spa.and.beauty': 'รีแลกซ์สปา & ความงาม',
  'activities.categoty.tours.and.sightseeing': 'ทัวร์ & เที่ยวชมสถานที่',
  'activities.categoty.transport': 'ขนส่ง',
  'activities.categoty.wifi.and.sim_card': 'ซิมการ์ด & ไวไฟ',
};
