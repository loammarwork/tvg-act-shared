import { IsNotEmpty, IsString } from 'class-validator';

export class ReconfirmHolderStandardRequestBodyDTO {
  @IsString()
  @IsNotEmpty()
  reference: string;
}
