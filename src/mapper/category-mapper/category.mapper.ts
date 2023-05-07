import { CategoryCMSMapperEN, CategoryMapperEN } from './category-en.mapper';
import { CategoryCMSMapperTH, CategoryMapperTH } from './category-th.mapper';

export function CategoryMapper(lang: string, key: string) {
  if (lang === 'th') {
    return CategoryMapperTH[key] || CategoryMapperEN[key];
  }
  return CategoryMapperEN[key];
}

//suppose value recieve activitystandard.category.attraction and lang en result is Attractions & Tickets for search in mongodb
export function CategoryCMSMapper(lang: string, key: string) {
  if (lang === 'th') {
    return CategoryCMSMapperTH[key] || CategoryCMSMapperEN[key];
  }
  return CategoryCMSMapperEN[key];
}
