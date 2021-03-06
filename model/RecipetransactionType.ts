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
import { RecipeCDTRANSACTION } from "./RecipeCDTRANSACTION"
import { RecipeauthorType } from "./RecipeauthorType"
import { RecipebasicIDKMEHR } from "./RecipebasicIDKMEHR"
import { RecipetransactionheadingType } from "./RecipetransactionheadingType"
import { XMLGregorianCalendar } from "./XMLGregorianCalendar"

import { decodeBase64 } from "./ModelHelper"

export class RecipetransactionType {
  constructor(json: JSON | any) {
    Object.assign(this as RecipetransactionType, json)
  }

  author?: RecipeauthorType
  cd?: RecipeCDTRANSACTION
  date?: XMLGregorianCalendar
  heading?: RecipetransactionheadingType
  id?: RecipebasicIDKMEHR
  iscomplete?: boolean
  isvalidated?: boolean
  time?: XMLGregorianCalendar
}
