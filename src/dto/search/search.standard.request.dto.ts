import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsObject, ValidateNested, IsISO8601 } from 'class-validator';

export class PaginationSearchStandardRequestBodyDTO {
  itemsPerPage: number;
  page: number;
}

export class SearchStandardRequestBodyDTO {
  @IsString()
  @IsNotEmpty()
  keyword: string;

  @IsISO8601()
  @IsNotEmpty()
  from: string;

  @IsISO8601()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => PaginationSearchStandardRequestBodyDTO)
  pagination: PaginationSearchStandardRequestBodyDTO;
}
