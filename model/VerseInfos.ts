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

export class VerseInfos {
  constructor(json: JSON | any) {
    Object.assign(this as VerseInfos, json)
  }

  agreementRenewalMax?: number
  agreementTerm?: number
  agreementTermUnit?: string
  agreementYearMax?: number
  andClauseNum?: number
  chapterName?: string
  checkBoxInd?: string
  createdTms?: Date
  createdUserId?: string
  endDate?: Date
  id?: number
  legalReference?: string
  maxPackageNumber?: number
  maximumAgeAuthorized?: number
  maximumAgeAuthorizedUnit?: string
  maximumContentQuantity?: number
  maximumContentUnit?: string
  maximumDurationQuantity?: number
  maximumDurationUnit?: string
  maximumStrengthQuantity?: number
  maximumStrengthUnit?: string
  minCheckNum?: number
  minimumAgeAuthorized?: number
  minimumAgeAuthorizedUnit?: string
  modificationDate?: Date
  modificationStatus?: string
  otherAddedDocumentInd?: string
  paragraphName?: string
  purchasingAdvisorQualList?: string
  requestType?: string
  sexRestricted?: string
  startDate?: Date
  textFr?: string
  textNl?: string
  verseLevel?: number
  verseNum?: number
  verseSeq?: number
  verseSeqParent?: number
  verseType?: string
  verses?: Array<VerseInfos>
}
