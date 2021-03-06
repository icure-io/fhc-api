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
import { Results } from "./Results"
import { VaccinationStatusType } from "./VaccinationStatusType"

import { decodeBase64 } from "./ModelHelper"

export class AddVaccinationsResponseType {
  constructor(json: JSON | any) {
    Object.assign(this as AddVaccinationsResponseType, json)
  }

  patientId?: string
  results?: Array<Results>
  status?: VaccinationStatusType
}
