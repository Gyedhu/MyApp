/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { UserDetailCreateNestedManyWithoutUsersInput } from "./UserDetailCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PostCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PostCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PostCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: () => UserDetailCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserDetailCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserDetailCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userDetails?: UserDetailCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
