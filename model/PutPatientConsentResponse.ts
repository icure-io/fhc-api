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
import { AcknowledgeType } from "./AcknowledgeType"
import { ResponseType } from "./ResponseType"

import { decodeBase64 } from "./ModelHelper"

export class PutPatientConsentResponse {
  constructor(json: JSON | any) {
    Object.assign(this as PutPatientConsentResponse, json)
  }

  acknowledge?: AcknowledgeType
  response?: ResponseType
}
