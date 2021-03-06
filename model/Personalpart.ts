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
import { CDCARENETPERSONALPART } from "./CDCARENETPERSONALPART"
import { IDKMEHR } from "./IDKMEHR"
import { XMLGregorianCalendar } from "./XMLGregorianCalendar"

import { decodeBase64 } from "./ModelHelper"

export class Personalpart {
  constructor(json: JSON | any) {
    Object.assign(this as Personalpart, json)
  }

  cd?: CDCARENETPERSONALPART
  date?: XMLGregorianCalendar
  id?: IDKMEHR
  time?: XMLGregorianCalendar
}
