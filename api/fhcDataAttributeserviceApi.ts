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
import { DaasResponse } from "../model/DaasResponse"

export class fhcDataAttributeserviceApi {
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
   * @summary getDinRoutingInfo
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param nihii nihii
   * @param ssin ssin
   * @param dateOfBirth dateOfBirth
   * @param from from
   * @param to to
   * @param cause cause
   * @param prolongation prolongation
   * @param total total
   */
  getDinRoutingInfoUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    nihii: string,
    ssin: string,
    dateOfBirth: number,
    from: number,
    to: number,
    cause: string,
    prolongation: boolean,
    total: boolean
  ): Promise<DaasResponse> {
    let _body = null

    const _url =
      this.host +
      `/daas/din/${encodeURIComponent(String(nihii))}/${encodeURIComponent(String(ssin))}` +
      "?ts=" +
      new Date().getTime() +
      (dateOfBirth ? "&dateOfBirth=" + encodeURIComponent(String(dateOfBirth)) : "") +
      (from ? "&from=" + encodeURIComponent(String(from)) : "") +
      (to ? "&to=" + encodeURIComponent(String(to)) : "") +
      (cause ? "&cause=" + encodeURIComponent(String(cause)) : "") +
      (prolongation ? "&prolongation=" + encodeURIComponent(String(prolongation)) : "") +
      (total ? "&total=" + encodeURIComponent(String(total)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new DaasResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}