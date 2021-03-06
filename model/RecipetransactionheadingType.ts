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
import { RecipeCDHEADING } from "./RecipeCDHEADING"
import { RecipebasicIDKMEHR } from "./RecipebasicIDKMEHR"
import { RecipeitemType } from "./RecipeitemType"

import { decodeBase64 } from "./ModelHelper"

export class RecipetransactionheadingType {
  constructor(json: JSON | any) {
    Object.assign(this as RecipetransactionheadingType, json)
  }

  cd?: RecipeCDHEADING
  id?: RecipebasicIDKMEHR
  items?: Array<RecipeitemType>
}
