import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsISO8601, IsArray, IsOptional, IsNumber, IsObject, ValidateNested } from 'class-validator';

export class PreconfirmHolderStandardRequestBodyDTO {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  title: string;

  @IsString()
  email: string;

  @IsString()
  address: string;

  @IsString()
  zipCode: string;

  @IsString({ each: true })
  phones: string[];

  @IsString()
  nationality: string;
}

export class PreconfirmActivityDetailRequestBodyDTO {
  @IsString()
  rateKey: string;
  @IsString()
  @IsOptional()
  showTime: string | null;
}

export class PreconfirmQuestionRequestBodyDTO {
  @IsString()
  code: string;
  @IsString()
  text: string;
}

export class PreconfirmAnswerRequestBodyDTO {
  @ValidateNested()
  @Type(() => PreconfirmQuestionRequestBodyDTO)
  question: PreconfirmQuestionRequestBodyDTO;
  @IsString()
  answer: string;
}

export class PreconfirmPaxAmountRequestBodyDTO {
  @IsString()
  paxType: string;
  @IsNumber()
  amount: number;
  @IsNumber()
  nettAmount: number;
  @IsNumber()
  @IsOptional()
  minPurchaseQty: number | null;
  @IsNumber()
  @IsOptional()
  maxPurchaseQty: number | null;
  @IsObject()
  @IsOptional()
  amountDetails: object | null;
}
export class PreconfirmPaxRequestBodyDTO {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsString()
  title: string;
  @IsString()
  email: string;
  @IsString()
  phoneNo: string;
  @IsString()
  nationality: string;
  @ValidateNested()
  @Type(() => PreconfirmPaxAmountRequestBodyDTO)
  paxAmount: PreconfirmPaxAmountRequestBodyDTO;
}
export class PreconfirmActivityStandardRequestBodyDTO {
  @IsISO8601()
  serviceDate: string;
  activityDetail: PreconfirmActivityDetailRequestBodyDTO;
  @ValidateNested({ each: true })
  @Type(() => PreconfirmAnswerRequestBodyDTO)
  @IsOptional()
  answers?: (PreconfirmAnswerRequestBodyDTO | null)[];
  @ValidateNested()
  @Type(() => PreconfirmPaxRequestBodyDTO)
  paxes: PreconfirmPaxRequestBodyDTO;
}

export class PreconfirmStandardRequestBodyDTO {
  @IsString()
  bookingRef: string;
  @ValidateNested()
  @Type(() => PreconfirmHolderStandardRequestBodyDTO)
  bookingHolder: PreconfirmHolderStandardRequestBodyDTO;
  @ValidateNested({ each: true })
  @Type(() => PreconfirmActivityStandardRequestBodyDTO)
  activities: PreconfirmActivityStandardRequestBodyDTO[];
}
