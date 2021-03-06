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
import { LocationDeclarationType } from "./LocationDeclarationType"

import { decodeBase64 } from "./ModelHelper"

export class CivilStateInfoDeclarationType {
  constructor(json: JSON | any) {
    Object.assign(this as CivilStateInfoDeclarationType, json)
  }

  civilStateCode?: number
  expiryDate?: Date
  inceptionDate?: Date
  location?: LocationDeclarationType
  partnerSsin?: string
}
