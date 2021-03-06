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
import { CDMEDICATION } from "./CDMEDICATION"
import { PackageType } from "./PackageType"
import { PresentationType } from "./PresentationType"
import { RouteType } from "./RouteType"
import { StrengthType } from "./StrengthType"
import { TextType } from "./TextType"

import { decodeBase64 } from "./ModelHelper"

export class MedicationType {
  constructor(json: JSON | any) {
    Object.assign(this as MedicationType, json)
  }

  batch?: string
  cd?: CDMEDICATION
  inn?: TextType
  instructionforoverdosing?: TextType
  instructionforpatient?: TextType
  instructionforreimbursement?: TextType
  issubstitutionallowed?: boolean
  magistral?: TextType
  numberofpackage?: number
  _package?: PackageType
  presentation?: PresentationType
  quantityperpackage?: number
  route?: RouteType
  strength?: StrengthType
  tradename?: string
}
