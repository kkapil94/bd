import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ClientDetailsDto } from './client-details.dto';
import { Type } from 'class-transformer';
import { BudgetAndTimelineDto } from './bud-and-time.dto';

export class CreateJobDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ClientDetailsDto)
  clientDetails: ClientDetailsDto;

  @IsNotEmpty()
  @IsString({ each: true })
  services: string[];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BudgetAndTimelineDto)
  budgetAndTimeline: BudgetAndTimelineDto;
}
