import { Type } from 'class-transformer';
import { IsString, IsISO8601, IsOptional, IsNumber, IsObject, ValidateNested, IsArray, ArrayMinSize } from 'class-validator';

export class PreconfirmHolderStandardRequestBodyDTO {
  @IsString()
  name: string;

  @IsString()
  middlename: string;

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

  @IsArray()
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
  amountDetails: any;
}
export class PreconfirmPaxRequestBodyDTO {
  @IsString()
  name: string;
  @IsString()
  middlename: string;
  @IsString()
  surname: string;
  @IsString()
  title: string;
  @IsString()
  email: string;
  @IsString({ each: true })
  phones: string[];
  @IsString()
  nationality: string;
  @ValidateNested()
  @Type(() => PreconfirmPaxAmountRequestBodyDTO)
  paxAmount: PreconfirmPaxAmountRequestBodyDTO;
}
export class PreconfirmActivityStandardRequestBodyDTO {
  @IsISO8601()
  serviceDate: string;
  @ValidateNested()
  @Type(() => PreconfirmActivityDetailRequestBodyDTO)
  activityDetail: PreconfirmActivityDetailRequestBodyDTO;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PreconfirmAnswerRequestBodyDTO)
  @IsOptional()
  answers?: (PreconfirmAnswerRequestBodyDTO | null)[];
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => PreconfirmPaxRequestBodyDTO)
  paxes: PreconfirmPaxRequestBodyDTO[];
}

export class PreconfirmStandardRequestBodyDTO {
  @IsString()
  clientReference: string;
  @ValidateNested()
  @Type(() => PreconfirmHolderStandardRequestBodyDTO)
  bookingHolder: PreconfirmHolderStandardRequestBodyDTO;
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => PreconfirmActivityStandardRequestBodyDTO)
  activities: PreconfirmActivityStandardRequestBodyDTO[];
}

export class PreconfirmStandardRequestHeaderDTO {
  @IsString()
  'x-api-key': string;
}
