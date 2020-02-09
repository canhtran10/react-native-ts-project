import {INCREMENT, INCREMENT_ASYNC} from "../Type";

export function loadMessage(data: any) {
  return {type: INCREMENT, data};
}

/**
 * Action for Saga
 * @param data
 * @returns {{data: *, type: string}}
 */
export function loadMessages(data: any) {
  return {type: INCREMENT_ASYNC, data};
}
