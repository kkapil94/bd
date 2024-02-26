import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

export class EstimateTimelineDto {
  @IsNotEmpty()
  @IsString()
  from: Date;

  @IsNotEmpty()
  @IsString()
  to: Date;
}

export class BudgetAndTimelineDto {
  @IsNotEmpty()
  @IsString()
  itemizedCostStructure: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EstimateTimelineDto)
  estimateTimeline: EstimateTimelineDto;

  @Optional()
  @IsString()
  otherDetails: string;
}
