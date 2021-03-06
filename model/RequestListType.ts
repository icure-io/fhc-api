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
import { AuthorType } from "./AuthorType"
import { IDKMEHR } from "./IDKMEHR"
import { Paginationrequestinfo } from "./Paginationrequestinfo"

import { decodeBase64 } from "./ModelHelper"

export class RequestListType {
  constructor(json: JSON | any) {
    Object.assign(this as RequestListType, json)
  }

  author?: AuthorType
  breaktheglass?: string
  date?: Date
  id?: IDKMEHR
  maxrows?: number
  paginationinfo?: Paginationrequestinfo
  time?: Date
}
