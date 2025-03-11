import { IsString, IsUUID, IsInt, IsBoolean, IsOptional, IsDate, IsNotEmpty, Min, Matches } from 'class-validator';

export class LoanDto {
  @IsUUID()
  @IsNotEmpty()
  assetId: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsDate()
  loanDate: Date;

  @IsBoolean()
  returned: boolean;

  @IsOptional()
  @IsDate()
  returnedAt?: Date;

  @IsString()
  fullName: string;

  @IsString()
  dui: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{4}$/, { message: 'El número de teléfono debe tener el formato xxxx-xxxx' })
  contact?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
