export type TargetCategoryEN = 'Tour' | 'Attractions & Tickets' | 'Tours & Sightseeing' | 'Food & Drinks' | 'Relax Spa & Beauty' | 'Transport' | 'Health' | 'Wifi & Sim card' | 'Theme parks & Water parks' | 'Museums & Galleries' | 'Zoo & Farms' | 'Musical theatre' | 'Full-day tours' | 'Muti-day tours' | 'Nature & Wildlife Tours' | 'Heritage & Cultural tours' | 'Cruises| sailing & Water tours' | 'Restaurant & Dining Vouchers' | 'Dinner Cruises' | '0 - 3 Hours' | '3 - 5 Hours' | '5 - 7 Hours' | '1 - 3 Days' | '3+ Days' | 'Other' | 'Sport Activities' | 'Workshop Activities';
export declare const CategoryENValueToKeyCMS: {
    'Attractions & Tickets': string;
    'Food & Drinks': string;
    Health: string;
    'Relax Spa & Beauty': string;
    'Tours & Sightseeing': string;
    Transport: string;
    'Wifi & Sim card': string;
};
export type CategoryMapperTypeRecordEN<T> = Record<string, T>;
export declare const CategoryMapperEN: CategoryMapperTypeRecordEN<Array<TargetCategoryEN>>;
export type CategoryMapperENType = keyof typeof CategoryMapperEN;
export declare const CategoryCMSMapperEN: {
    'activities.categoty.attractions.and.tickets': string;
    'activities.categoty.food.and.drinks': string;
    'activities.categoty.health': string;
    'activities.categoty.relax_spa.and.beauty': string;
    'activities.categoty.tours.and.sightseeing': string;
    'activities.categoty.transport': string;
    'activities.categoty.wifi.and.sim_card': string;
};
