import { PartialType } from '@nestjs/mapped-types';
import { LoanDto } from './create-loan.dto';

export class UpdateLoanDto extends PartialType(LoanDto) {}
