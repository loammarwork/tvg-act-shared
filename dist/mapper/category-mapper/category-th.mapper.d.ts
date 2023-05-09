export type TargetCategoryTH = 'Tour' | 'Attractions & Tickets' | 'Tours & Sightseeing' | 'Food & Drinks' | 'Relax Spa & Beauty' | 'Transport' | 'Health' | 'Sim card & Wifi' | 'Theme parks & Water parks' | 'Museums & Galleries' | 'Zoo & Farms' | 'Musical theatre' | 'Full-day tours' | 'Muti-day tours' | 'Nature & Wildlife Tours' | 'Heritage & Cultural tours' | 'Cruises| sailing & Water tours' | 'Restaurant & Dining Vouchers' | 'Dinner Cruises' | '0 - 3 Hours' | '3 - 5 Hours' | '5 - 7 Hours' | '1 - 3 Days' | '3+ Days' | 'Other' | 'Sport Activities' | 'Workshop Activities';
export declare const CategoryTHValueToKeyCMS: {
    'Attractions & tickets': string;
    'Food & drinks': string;
    Health: string;
    'Relax Spa & Beauty': string;
    'Tours & Sightseeing': string;
    Transport: string;
    'Wifi & sim card': string;
};
export type CategoryMapperTypeRecordTH<T> = Record<string, T>;
export declare const CategoryMapperTH: CategoryMapperTypeRecordTH<Array<TargetCategoryTH>>;
export type CategoryMapperTHType = keyof typeof CategoryMapperTH;
export declare const CategoryCMSMapperTH: {
    'activities.categoty.attractions.and.tickets': string;
    'activities.categoty.food.and.drinks': string;
    'activities.categoty.health': string;
    'activities.categoty.relax_spa.and.beauty': string;
    'activities.categoty.tours.and.sightseeing': string;
    'activities.categoty.transport': string;
    'activities.categoty.wifi.and.sim_card': string;
};
