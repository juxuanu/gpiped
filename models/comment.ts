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
 * @interface Comment
 */
export interface Comment {
    /**
     * The name of the author of the comment.
     * @type {string}
     * @memberof Comment
     */
    author?: string;
    /**
     * The thumbnail/avatar of the author of the comment.
     * @type {string}
     * @memberof Comment
     */
    thumbnail?: string;
    /**
     * The ID of the comment.
     * @type {string}
     * @memberof Comment
     */
    commentId?: string;
    /**
     * The text of the comment.
     * @type {string}
     * @memberof Comment
     */
    commentText?: string;
    /**
     * The relative time the comment was made.
     * @type {string}
     * @memberof Comment
     */
    commentedTime?: string;
    /**
     * The relative URL of the author of the comment.
     * @type {string}
     * @memberof Comment
     */
    commentorUrl?: string;
    /**
     * The parameter used as the nextpage to fetch replies for this comment.
     * @type {string}
     * @memberof Comment
     */
    repliesPage?: string;
    /**
     * The number of likes the comment has.
     * @type {number}
     * @memberof Comment
     */
    likeCount?: number;
    /**
     * The number of replies the comment has.
     * @type {number}
     * @memberof Comment
     */
    replyCount?: number;
    /**
     * Whether the comment was hearted by the video's uploader.
     * @type {boolean}
     * @memberof Comment
     */
    hearted?: boolean;
    /**
     * Whether the comment was pinned by the video's uploader.
     * @type {boolean}
     * @memberof Comment
     */
    pinned?: boolean;
    /**
     * Whether the author of the comment is verified.
     * @type {boolean}
     * @memberof Comment
     */
    verified?: boolean;
}
