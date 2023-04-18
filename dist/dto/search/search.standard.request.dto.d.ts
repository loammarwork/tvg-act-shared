export declare class PaginationSearchStandardRequestBodyDTO {
    itemsPerPage: number;
    page: number;
}
export declare class SearchStandardRequestBodyDTO {
    keyword: string;
    from: string;
    to: string;
    language: string;
    pagination: PaginationSearchStandardRequestBodyDTO;
}
