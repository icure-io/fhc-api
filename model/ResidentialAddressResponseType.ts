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
import { NameType } from "./NameType"

import { decodeBase64 } from "./ModelHelper"

export class ResidentialAddressResponseType {
  constructor(json: JSON | any) {
    Object.assign(this as ResidentialAddressResponseType, json)
  }

  boxNumber?: string
  cityCode?: string
  cityNames?: Array<NameType>
  countryCode?: string
  countryNames?: Array<NameType>
  houseNumber?: string
  postalCode?: string
  startDate?: Date
  streetCode?: string
  streetNames?: Array<NameType>
}
