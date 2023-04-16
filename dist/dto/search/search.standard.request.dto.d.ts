export declare class PaginationSearchStandardRequestDTO {
    itemsPerPage: number;
    page: number;
}
export declare class SearchStandardRequestDTO {
    keyword: string;
    from: string;
    to: string;
    language: string;
    pagination: PaginationSearchStandardRequestDTO;
}
