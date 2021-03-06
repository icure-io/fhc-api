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
import { AltKeystoresList } from "../model/AltKeystoresList"
import { BoxInfo } from "../model/BoxInfo"
import { DocumentMessage } from "../model/DocumentMessage"
import { Message } from "../model/Message"

export class fhcEhboxApi {
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
   * @summary deleteMessages
   * @param body messageIds
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param source source
   */
  deleteMessagesUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    source: string,
    body?: Array<string>
  ): Promise<boolean> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/ehbox/move/from/${encodeURIComponent(String(source))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary getFullMessage
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param boxId boxId
   * @param messageId messageId
   */
  getFullMessageUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    boxId: string,
    messageId: string
  ): Promise<Message> {
    let _body = null

    const _url =
      this.host +
      `/ehbox/${encodeURIComponent(String(boxId))}/${encodeURIComponent(String(messageId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new Message(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary getFullMessage
   * @param body alternateKeystores
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param boxId boxId
   * @param messageId messageId
   */
  getFullMessageUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    boxId: string,
    messageId: string,
    body?: AltKeystoresList
  ): Promise<Message> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/ehbox/${encodeURIComponent(String(boxId))}/${encodeURIComponent(String(messageId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new Message(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary getInfos
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   */
  getInfosUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string
  ): Promise<BoxInfo> {
    let _body = null

    const _url = this.host + `/ehbox` + "?ts=" + new Date().getTime()
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new BoxInfo(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary loadMessages
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param boxId boxId
   * @param limit limit
   */
  loadMessagesUsingGET1(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    boxId: string,
    limit: number
  ): Promise<Array<Message>> {
    let _body = null

    const _url =
      this.host +
      `/ehbox/${encodeURIComponent(String(boxId))}` +
      "?ts=" +
      new Date().getTime() +
      (limit ? "&limit=" + encodeURIComponent(String(limit)) : "")
    let headers = this.headers
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new Message(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary loadMessages
   * @param body alternateKeystores
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param boxId boxId
   * @param limit limit
   */
  loadMessagesUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    boxId: string,
    limit: number,
    body?: AltKeystoresList
  ): Promise<Array<Message>> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/ehbox/${encodeURIComponent(String(boxId))}` +
      "?ts=" +
      new Date().getTime() +
      (limit ? "&limit=" + encodeURIComponent(String(limit)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new Message(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary moveMessages
   * @param body messageIds
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param source source
   * @param destination destination
   */
  moveMessagesUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    source: string,
    destination: string,
    body?: Array<string>
  ): Promise<boolean> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/ehbox/move/from/${encodeURIComponent(String(source))}/to/${encodeURIComponent(
        String(destination)
      )}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary sendMessage
   * @param body message
   * @param xFHCKeystoreId X-FHC-keystoreId
   * @param xFHCTokenId X-FHC-tokenId
   * @param xFHCPassPhrase X-FHC-passPhrase
   * @param publicationReceipt publicationReceipt
   * @param receptionReceipt receptionReceipt
   * @param readReceipt readReceipt
   */
  sendMessageUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    publicationReceipt: boolean,
    receptionReceipt: boolean,
    readReceipt: boolean,
    body?: DocumentMessage
  ): Promise<boolean> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/ehbox` +
      "?ts=" +
      new Date().getTime() +
      (publicationReceipt
        ? "&publicationReceipt=" + encodeURIComponent(String(publicationReceipt))
        : "") +
      (receptionReceipt
        ? "&receptionReceipt=" + encodeURIComponent(String(receptionReceipt))
        : "") +
      (readReceipt ? "&readReceipt=" + encodeURIComponent(String(readReceipt)) : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    xFHCKeystoreId && (headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId)))
    xFHCTokenId && (headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId)))
    xFHCPassPhrase && (headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase)))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }
}
