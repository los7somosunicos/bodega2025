import {  IsNotEmpty, IsString, Length } from "class-validator";

export class CreateAssetDto {
    @IsString()
    @Length(3, 50)
    @IsNotEmpty({message: 'El nombre es requerido'})
    name: string;

    @IsString()
    @Length(3, 50)
    description?: string;

    @IsString()
    @IsNotEmpty({message: 'La categoría es requerida'})
    categoryId: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    available: number;
}
