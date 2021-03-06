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
import { Telecom } from "./Telecom"

import { decodeBase64 } from "./ModelHelper"

export class Address {
  constructor(json: JSON | any) {
    Object.assign(this as Address, json)
  }

  addressType?: Address.AddressTypeEnum
  street?: string
  houseNumber?: string
  postboxNumber?: string
  postalCode?: string
  city?: string
  country?: string
  telecoms?: Array<Telecom>
}
export namespace Address {
  export type AddressTypeEnum =
    | "home"
    | "work"
    | "vacation"
    | "hospital"
    | "clinic"
    | "hq"
    | "other"
    | "diplomatic"
    | "reference"
    | "postal"
    | "temporary"
  export const AddressTypeEnum = {
    Home: "home" as AddressTypeEnum,
    Work: "work" as AddressTypeEnum,
    Vacation: "vacation" as AddressTypeEnum,
    Hospital: "hospital" as AddressTypeEnum,
    Clinic: "clinic" as AddressTypeEnum,
    Hq: "hq" as AddressTypeEnum,
    Other: "other" as AddressTypeEnum,
    Diplomatic: "diplomatic" as AddressTypeEnum,
    Reference: "reference" as AddressTypeEnum,
    Postal: "postal" as AddressTypeEnum,
    Temporary: "temporary" as AddressTypeEnum
  }
}
