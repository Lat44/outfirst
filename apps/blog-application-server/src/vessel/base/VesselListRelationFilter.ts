/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VesselWhereInput } from "./VesselWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VesselListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VesselWhereInput,
  })
  @ValidateNested()
  @Type(() => VesselWhereInput)
  @IsOptional()
  @Field(() => VesselWhereInput, {
    nullable: true,
  })
  every?: VesselWhereInput;

  @ApiProperty({
    required: false,
    type: () => VesselWhereInput,
  })
  @ValidateNested()
  @Type(() => VesselWhereInput)
  @IsOptional()
  @Field(() => VesselWhereInput, {
    nullable: true,
  })
  some?: VesselWhereInput;

  @ApiProperty({
    required: false,
    type: () => VesselWhereInput,
  })
  @ValidateNested()
  @Type(() => VesselWhereInput)
  @IsOptional()
  @Field(() => VesselWhereInput, {
    nullable: true,
  })
  none?: VesselWhereInput;
}
export { VesselListRelationFilter as VesselListRelationFilter };
