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

export class MycarenetError {
  constructor(json: JSON | any) {
    Object.assign(this as MycarenetError, json)
  }

  code?: string
  detailCode?: string
  detailSource?: string
  faultCode?: string
  faultSource?: string
  locFr?: string
  locNl?: string
  msgEn?: string
  msgFr?: string
  msgNl?: string
  path?: string
  regex?: string
  subCode?: string
  uid?: string
  value?: string
}
