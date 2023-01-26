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
 * @interface Subtitle
 */
export interface Subtitle {
    /**
     * Whether the subtitle is auto generated.
     * @type {boolean}
     * @memberof Subtitle
     */
    autoGenerated?: boolean;
    /**
     * The language code of the subtitle.
     * @type {string}
     * @memberof Subtitle
     */
    code?: string;
    /**
     * The mime type of the subtitle.
     * @type {string}
     * @memberof Subtitle
     */
    mimeType?: string;
    /**
     * The URL of the subtitle.
     * @type {string}
     * @memberof Subtitle
     */
    url?: string;
}
