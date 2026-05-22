import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class criarLivroDto {
  @IsString({ message: 'O titúlo deve ser uma string' })
  @IsNotEmpty({ message: 'O titúlo é obrigatório' })
  @MinLength(3, { message: 'O titúlo deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O titúlo deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }

    return value;
  })
  titulo: string;

  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @MinLength(3, { message: 'A descrição deve ter pelo menos 3 caracteres' })
  @MaxLength(500, { message: 'A descrição deve ter no máximo 500 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }

    return value;
  })
  descricao: string;

  @IsNotEmpty({ message: 'O id_Autor é obrigatório' })
  @Type(() => Number)
  id_Autor: number;
}
