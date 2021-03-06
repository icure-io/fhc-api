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

import { decodeBase64 } from "./ModelHelper"

export class NameType {
  constructor(json: JSON | any) {
    Object.assign(this as NameType, json)
  }

  first?: string
  lang?: string
  last?: string
  middle?: string
  modificationDate?: string
  origin?: NameType.OriginEnum
  value?: string
}
export namespace NameType {
  export type OriginEnum = "BCSS_KSZ" | "RN_RR"
  export const OriginEnum = {
    BCSSKSZ: "BCSS_KSZ" as OriginEnum,
    RNRR: "RN_RR" as OriginEnum
  }
}
