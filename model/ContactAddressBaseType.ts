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
import { BestIdentifierType } from "./BestIdentifierType"
import { LocalizedDescriptionType } from "./LocalizedDescriptionType"

import { decodeBase64 } from "./ModelHelper"

export class ContactAddressBaseType {
  constructor(json: JSON | any) {
    Object.assign(this as ContactAddressBaseType, json)
  }

  addressRegionalCode?: BestIdentifierType
  boxNumber?: string
  cityCode?: string
  cityNames?: Array<LocalizedDescriptionType>
  cityRegionalCode?: BestIdentifierType
  countryCode?: number
  countryIsoCode?: string
  countryNames?: Array<LocalizedDescriptionType>
  houseNumber?: string
  inceptionDate?: Date
  postalCode?: string
  regionCode?: string
  regionNames?: Array<LocalizedDescriptionType>
  streetCode?: string
  streetNames?: Array<LocalizedDescriptionType>
  streetRegionalCode?: BestIdentifierType
  typeCode?: number
  typeDescriptions?: Array<LocalizedDescriptionType>
}
