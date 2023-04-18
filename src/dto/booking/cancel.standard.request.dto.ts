import { IsNotEmpty, IsString } from 'class-validator';

export class CancelStandardRequestBodyDTO {
  @IsString()
  @IsNotEmpty()
  bookingReference: string;
}
