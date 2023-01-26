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
 * @interface StreamItem
 */
export interface StreamItem {
    /**
     * The duration of the video in seconds.
     * @type {number}
     * @memberof StreamItem
     */
    duration: number;
    /**
     * The thumbnail of the video.
     * @type {string}
     * @memberof StreamItem
     */
    thumbnail: string;
    /**
     * The title of the video.
     * @type {string}
     * @memberof StreamItem
     */
    title: string;
    /**
     * The date in unix epoch the video was uploaded.
     * @type {number}
     * @memberof StreamItem
     */
    uploaded?: number;
    /**
     * The relative date the video was uploaded on.
     * @type {string}
     * @memberof StreamItem
     */
    uploadedDate?: string | null;
    /**
     * The avatar of the channel of the video.
     * @type {string}
     * @memberof StreamItem
     */
    uploaderAvatar?: string | null;
    /**
     * The name of the channel of the video.
     * @type {string}
     * @memberof StreamItem
     */
    uploaderName?: string;
    /**
     * The relative URL of the channel of the video.
     * @type {string}
     * @memberof StreamItem
     */
    uploaderUrl?: string;
    /**
     * Whether or not the channel has a verified badge.
     * @type {boolean}
     * @memberof StreamItem
     */
    uploaderVerified?: boolean;
    /**
     * The relative URL to the video.
     * @type {string}
     * @memberof StreamItem
     */
    url: string;
    /**
     * The number of views the video has.
     * @type {number}
     * @memberof StreamItem
     */
    views?: number;
}
