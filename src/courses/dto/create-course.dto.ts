import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDTO {
  @ApiProperty({
    description: 'Nome do curso',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Descrição do curso',
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'Conteúdos contidos no curso',
  })
  @IsString({ each: true })
  readonly tags: string[];
}
