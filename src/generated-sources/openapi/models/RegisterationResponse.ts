/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Team } from './Team';
import {
    TeamFromJSON,
    TeamFromJSONTyped,
    TeamToJSON,
} from './Team';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface RegisterationResponse
 */
export interface RegisterationResponse {
    /**
     * 
     * @type {User}
     * @memberof RegisterationResponse
     */
    user?: User;
    /**
     * 
     * @type {Team}
     * @memberof RegisterationResponse
     */
    team?: Team;
}

/**
 * Check if a given object implements the RegisterationResponse interface.
 */
export function instanceOfRegisterationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RegisterationResponseFromJSON(json: any): RegisterationResponse {
    return RegisterationResponseFromJSONTyped(json, false);
}

export function RegisterationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
        'team': !exists(json, 'team') ? undefined : TeamFromJSON(json['team']),
    };
}

export function RegisterationResponseToJSON(value?: RegisterationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserToJSON(value.user),
        'team': TeamToJSON(value.team),
    };
}

