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
import { ConsentMessageDto } from "../model/ConsentMessageDto"
import { ConsentTypeDto } from "../model/ConsentTypeDto"

export class fhcConsentApi {
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
   * @summary getPatientConsent
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param hcpFirstName hcpFirstName
   * @param hcpLastName hcpLastName
   * @param patientSsin patientSsin
   * @param patientFirstName patientFirstName
   * @param patientLastName patientLastName
   */
  getPatientConsentUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    patientSsin: string,
    patientFirstName: string,
    patientLastName: string
  ): Promise<ConsentMessageDto> {
    let _body = null

    const _url =
      this.host +
      `/consent/${encodeURIComponent(String(patientSsin))}` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpFirstName ? "&hcpFirstName=" + encodeURIComponent(String(hcpFirstName)) : "") +
      (hcpLastName ? "&hcpLastName=" + encodeURIComponent(String(hcpLastName)) : "") +
      (patientFirstName
        ? "&patientFirstName=" + encodeURIComponent(String(patientFirstName))
        : "") +
      (patientLastName ? "&patientLastName=" + encodeURIComponent(String(patientLastName)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new ConsentMessageDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary registerPatientConsent
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param hcpFirstName hcpFirstName
   * @param hcpLastName hcpLastName
   * @param patientSsin patientSsin
   * @param patientFirstName patientFirstName
   * @param patientLastName patientLastName
   * @param eidCardNumber eidCardNumber
   * @param isiCardNumber isiCardNumber
   */
  registerPatientConsentUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    patientSsin: string,
    patientFirstName: string,
    patientLastName: string,
    eidCardNumber?: string,
    isiCardNumber?: string
  ): Promise<ConsentMessageDto> {
    let _body = null

    const _url =
      this.host +
      `/consent/${encodeURIComponent(String(patientSsin))}` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpFirstName ? "&hcpFirstName=" + encodeURIComponent(String(hcpFirstName)) : "") +
      (hcpLastName ? "&hcpLastName=" + encodeURIComponent(String(hcpLastName)) : "") +
      (patientFirstName
        ? "&patientFirstName=" + encodeURIComponent(String(patientFirstName))
        : "") +
      (patientLastName ? "&patientLastName=" + encodeURIComponent(String(patientLastName)) : "") +
      (eidCardNumber ? "&eidCardNumber=" + encodeURIComponent(String(eidCardNumber)) : "") +
      (isiCardNumber ? "&isiCardNumber=" + encodeURIComponent(String(isiCardNumber)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new ConsentMessageDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary revokePatientConsent
   * @param body existingConsent
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param hcpNihii hcpNihii
   * @param hcpSsin hcpSsin
   * @param hcpFirstName hcpFirstName
   * @param hcpLastName hcpLastName
   * @param eidCardNumber eidCardNumber
   * @param isiCardNumber isiCardNumber
   */
  revokePatientConsentUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    eidCardNumber?: string,
    isiCardNumber?: string,
    body?: ConsentTypeDto
  ): Promise<ConsentMessageDto> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/consent/revoke` +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + encodeURIComponent(String(hcpNihii)) : "") +
      (hcpSsin ? "&hcpSsin=" + encodeURIComponent(String(hcpSsin)) : "") +
      (hcpFirstName ? "&hcpFirstName=" + encodeURIComponent(String(hcpFirstName)) : "") +
      (hcpLastName ? "&hcpLastName=" + encodeURIComponent(String(hcpLastName)) : "") +
      (eidCardNumber ? "&eidCardNumber=" + encodeURIComponent(String(eidCardNumber)) : "") +
      (isiCardNumber ? "&isiCardNumber=" + encodeURIComponent(String(isiCardNumber)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new ConsentMessageDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
