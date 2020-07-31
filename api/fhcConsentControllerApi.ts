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
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class fhcConsentControllerApi {
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

  handleError(e: XHR.XHRError) {
    throw e
  }

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
  ): Promise<models.ConsentMessageDto | any> {
    let _body = null

    const _url =
      this.host +
      "/consent/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.ConsentMessageDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
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
  ): Promise<models.ConsentMessageDto | any> {
    let _body = null

    const _url =
      this.host +
      "/consent/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") +
      (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.ConsentMessageDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  revokePatientConsentUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    existingConsent: models.ConsentTypeDto,
    eidCardNumber?: string,
    isiCardNumber?: string
  ): Promise<models.ConsentMessageDto | any> {
    let _body = null
    _body = existingConsent

    const _url =
      this.host +
      "/consent/revoke/{patientSsin}" +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") +
      (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.ConsentMessageDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}