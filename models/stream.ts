/* tslint:disable */
/* eslint-disable */
/**
 * Piped API
 * This is an API specification for Piped API instances.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kavin@kavin.rocks
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface Stream
 */
export interface Stream {
    /**
     * The URL of the stream.
     * @type {string}
     * @memberof Stream
     */
    url?: string;
    /**
     * The format of the stream.
     * @type {string}
     * @memberof Stream
     */
    format?: StreamFormatEnum;
    /**
     * The quality of the stream.
     * @type {string}
     * @memberof Stream
     */
    quality?: string;
    /**
     * The mime type of the stream.
     * @type {string}
     * @memberof Stream
     */
    mimeType?: string;
    /**
     * The codec of the stream.
     * @type {string}
     * @memberof Stream
     */
    codec?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Stream
     */
    videoOnly?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    bitrate?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    initStart?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    initEnd?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    indexStart?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    indexEnd?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    fps?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum StreamFormatEnum {
    MPEG4 = 'MPEG_4',
    V3GPP = 'v3GPP',
    WEBM = 'WEBM',
    M4A = 'M4A',
    WEBMAOPUS = 'WEBMA_OPUS'
}

