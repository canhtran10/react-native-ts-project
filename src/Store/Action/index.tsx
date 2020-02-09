import {INCREMENT_ASYNC, DECREMENT_ASYNC} from "../Type";

export function increment(number: any) {
  return {type: INCREMENT_ASYNC, number};
}

export function decrement(data: any) {
  return {type: DECREMENT_ASYNC, data};
}
