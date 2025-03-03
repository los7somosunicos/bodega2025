import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty({message: 'Nombr es requerido'})
    name: string;

}
