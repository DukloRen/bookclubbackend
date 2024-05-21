import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  gender?: "M" | "F";

  @IsNotEmpty()
  birth_date: string;
}
