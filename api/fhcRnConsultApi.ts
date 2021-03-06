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
import { XHR } from "./XHR"
import { ConsultCurrentSsinResponse } from "../model/ConsultCurrentSsinResponse"
import { RnConsultPersonMid } from "../model/RnConsultPersonMid"
import { RnConsultRegisterPersonResponseDto } from "../model/RnConsultRegisterPersonResponseDto"
import { RnConsultSearchPersonBySsinResponseDto } from "../model/RnConsultSearchPersonBySsinResponseDto"
import { RnConsultSearchPersonPhoneticallyResponseDto } from "../model/RnConsultSearchPersonPhoneticallyResponseDto"
import { VerifyIdResponse } from "../model/VerifyIdResponse"

export class fhcRnConsultApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>

  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.XHRError): never {
    throw e
  }

  /**
   *
   * @summary consultCurrentSsin
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param ssin ssin
   */
  consultCurrentSsinUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    ssin: string
  ): Promise<ConsultCurrentSsinResponse> {
    let _body = null

    const _url =
      this.host +
      `/rnconsult/history/${encodeURIComponent(String(ssin))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new ConsultCurrentSsinResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary registerPerson
   * @param body mid
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   */
  registerPersonUsingPOST1(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    body?: RnConsultPersonMid
  ): Promise<RnConsultRegisterPersonResponseDto> {
    let _body = null
    _body = body

    const _url = this.host + `/rnconsult` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new RnConsultRegisterPersonResponseDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary searchPersonBySsin
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param ssin ssin
   */
  searchPersonBySsinUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    ssin: string
  ): Promise<RnConsultSearchPersonBySsinResponseDto> {
    let _body = null

    const _url =
      this.host +
      `/rnconsult/bySsin/${encodeURIComponent(String(ssin))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new RnConsultSearchPersonBySsinResponseDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary searchPersonPhonetically
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param dateOfBirth dateOfBirth
   * @param lastName lastName
   * @param firstName firstName
   * @param middleName middleName
   * @param matchingType matchingType
   * @param gender gender
   * @param countryCode countryCode
   * @param cityCode cityCode
   * @param tolerance tolerance
   * @param limit limit
   */
  searchPersonPhoneticallyUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    dateOfBirth: number,
    lastName: string,
    firstName?: string,
    middleName?: string,
    matchingType?: string,
    gender?: string,
    countryCode?: number,
    cityCode?: string,
    tolerance?: number,
    limit?: number
  ): Promise<RnConsultSearchPersonPhoneticallyResponseDto> {
    let _body = null

    const _url =
      this.host +
      `/rnconsult/phonetically/${encodeURIComponent(String(dateOfBirth))}/${encodeURIComponent(
        String(lastName)
      )}` +
      "?ts=" +
      new Date().getTime() +
      (firstName ? "&firstName=" + encodeURIComponent(String(firstName)) : "") +
      (middleName ? "&middleName=" + encodeURIComponent(String(middleName)) : "") +
      (matchingType ? "&matchingType=" + encodeURIComponent(String(matchingType)) : "") +
      (gender ? "&gender=" + encodeURIComponent(String(gender)) : "") +
      (countryCode ? "&countryCode=" + encodeURIComponent(String(countryCode)) : "") +
      (cityCode ? "&cityCode=" + encodeURIComponent(String(cityCode)) : "") +
      (tolerance ? "&tolerance=" + encodeURIComponent(String(tolerance)) : "") +
      (limit ? "&limit=" + encodeURIComponent(String(limit)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new RnConsultSearchPersonPhoneticallyResponseDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary verifyId
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param ssin ssin
   * @param cardNumber cardNumber
   * @param barCoded barCoded
   */
  verifyIdUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    ssin?: string,
    cardNumber?: string,
    barCoded?: string
  ): Promise<VerifyIdResponse> {
    let _body = null

    const _url =
      this.host +
      `/rnconsult/verifyId` +
      "?ts=" +
      new Date().getTime() +
      (ssin ? "&ssin=" + encodeURIComponent(String(ssin)) : "") +
      (cardNumber ? "&cardNumber=" + encodeURIComponent(String(cardNumber)) : "") +
      (barCoded ? "&barCoded=" + encodeURIComponent(String(barCoded)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new VerifyIdResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
