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
import { UserDetailWhereInput } from "./UserDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDetailWhereInput)
  @IsOptional()
  @Field(() => UserDetailWhereInput, {
    nullable: true,
  })
  every?: UserDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDetailWhereInput)
  @IsOptional()
  @Field(() => UserDetailWhereInput, {
    nullable: true,
  })
  some?: UserDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDetailWhereInput)
  @IsOptional()
  @Field(() => UserDetailWhereInput, {
    nullable: true,
  })
  none?: UserDetailWhereInput;
}
export { UserDetailListRelationFilter };