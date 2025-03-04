import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Length, Min } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  @Length(3, 50)
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsString()
  @Length(3, 50)
  @IsOptional()
  description?: string;

  @IsUUID()
  @IsNotEmpty({ message: 'La categoría es requerida' })
  categoryId: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;
}
