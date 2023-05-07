"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCMSMapper = exports.CategoryMapper = void 0;
const category_en_mapper_1 = require("./category-en.mapper");
const category_th_mapper_1 = require("./category-th.mapper");
function CategoryMapper(lang, key) {
    if (lang === 'th') {
        return category_th_mapper_1.CategoryMapperTH[key] || category_en_mapper_1.CategoryMapperEN[key];
    }
    return category_en_mapper_1.CategoryMapperEN[key];
}
exports.CategoryMapper = CategoryMapper;
function CategoryCMSMapper(lang, key) {
    if (lang === 'th') {
        return category_th_mapper_1.CategoryCMSMapperTH[key] || category_en_mapper_1.CategoryCMSMapperEN[key];
    }
    return category_en_mapper_1.CategoryCMSMapperEN[key];
}
exports.CategoryCMSMapper = CategoryCMSMapper;
//# sourceMappingURL=category.mapper.js.map