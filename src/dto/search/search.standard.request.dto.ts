import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDate, IsObject, ValidateNested } from 'class-validator';

export class PaginationSearchStandardRequestDTO {
  itemsPerPage: number;
  page: number;
}

export class SearchStandardRequestDTO {
  @IsString()
  @IsNotEmpty()
  keyword: string;

  @IsDate()
  @IsNotEmpty()
  from: string;

  @IsDate()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => PaginationSearchStandardRequestDTO)
  pagination: PaginationSearchStandardRequestDTO;
}
