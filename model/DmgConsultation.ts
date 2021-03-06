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
import { CommonOutput } from "./CommonOutput"
import { HcpartyType } from "./HcpartyType"
import { MycarenetConversation } from "./MycarenetConversation"
import { MycarenetError } from "./MycarenetError"

import { decodeBase64 } from "./ModelHelper"

export class DmgConsultation {
  constructor(json: JSON | any) {
    Object.assign(this as DmgConsultation, json)
  }

  appliesTo?: string
  birthday?: number
  commonOutput?: CommonOutput
  complete?: boolean
  deceased?: number
  errors?: Array<MycarenetError>
  firstName?: string
  from?: number
  hcParty?: HcpartyType
  inss?: string
  io?: string
  lastName?: string
  mutuality?: string
  mycarenetConversation?: MycarenetConversation
  payment?: boolean
  reference?: string
  regNrWithMut?: string
  sex?: string
  to?: number
  valueHash?: string
}
