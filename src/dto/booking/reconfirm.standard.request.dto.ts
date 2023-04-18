import { IsNotEmpty, IsString } from 'class-validator';

export class ReconfirmStandardRequestBodyDTO {
  @IsString()
  @IsNotEmpty()
  bookingReference: string;
}
