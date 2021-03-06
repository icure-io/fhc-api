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

export class IDINSURANCE {
  constructor(json: JSON | any) {
    Object.assign(this as IDINSURANCE, json)
  }

  s?: IDINSURANCE.SEnum
  sl?: string
  sv?: string
  value?: string
}
export namespace IDINSURANCE {
  export type SEnum = "ID_INSURANCE" | "LOCAL"
  export const SEnum = {
    IDINSURANCE: "ID_INSURANCE" as SEnum,
    LOCAL: "LOCAL" as SEnum
  }
}
