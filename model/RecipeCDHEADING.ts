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

export class RecipeCDHEADING {
  constructor(json: JSON | any) {
    Object.assign(this as RecipeCDHEADING, json)
  }

  dn?: string
  l?: string
  s?: RecipeCDHEADING.SEnum
  sl?: string
  sv?: string
  value?: string
}
export namespace RecipeCDHEADING {
  export type SEnum = "CD_HEADING" | "CD_HEADING_LAB" | "CD_SITE" | "LOCAL" | "CD_HEADING_REG"
  export const SEnum = {
    CDHEADING: "CD_HEADING" as SEnum,
    CDHEADINGLAB: "CD_HEADING_LAB" as SEnum,
    CDSITE: "CD_SITE" as SEnum,
    LOCAL: "LOCAL" as SEnum,
    CDHEADINGREG: "CD_HEADING_REG" as SEnum
  }
}
