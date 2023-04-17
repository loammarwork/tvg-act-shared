import { IsString, IsNotEmpty, IsISO8601 } from 'class-validator';

export class DetailStandardRequestDTO {
  @IsString()
  @IsNotEmpty()
  activityId: string;

  @IsISO8601()
  @IsNotEmpty()
  from: string;

  @IsISO8601()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  language: string;
}
