import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty({message: 'Nombre es requerido'})
    name: string;

}
