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
import { AddressType } from "./AddressType"
import { BirthResponseType } from "./BirthResponseType"
import { CivilStatesResponseType } from "./CivilStatesResponseType"
import { DeceaseResponseType } from "./DeceaseResponseType"
import { GenderType } from "./GenderType"
import { NationalitiesType } from "./NationalitiesType"
import { NobilityTitleType } from "./NobilityTitleType"
import { PersonNameResponseType } from "./PersonNameResponseType"

import { decodeBase64 } from "./ModelHelper"

export class PersonResponseType {
  constructor(json: JSON | any) {
    Object.assign(this as PersonResponseType, json)
  }

  address?: AddressType
  birth?: BirthResponseType
  civilStates?: CivilStatesResponseType
  decease?: DeceaseResponseType
  gender?: GenderType
  name?: PersonNameResponseType
  nationalities?: NationalitiesType
  nobilityTitle?: NobilityTitleType
  register?: string
  ssin?: string
}