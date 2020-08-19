/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ConsultRnPlainAddressDto } from "./ConsultRnPlainAddressDto"
import { StandardAddressType } from "./StandardAddressType"

export class ConsultRnAddressDto {
  constructor(json: JSON | any) {
    Object.assign(this as ConsultRnAddressDto, json)
  }

  modificationDate?: string
  origin?: ConsultRnAddressDto.OriginEnum
  plainAddress?: ConsultRnPlainAddressDto
  standardAddress?: StandardAddressType
}
export namespace ConsultRnAddressDto {
  export type OriginEnum = "BCSS_KSZ" | "RN_RR"
  export const OriginEnum = {
    BCSSKSZ: "BCSS_KSZ" as OriginEnum,
    RNRR: "RN_RR" as OriginEnum
  }
}
