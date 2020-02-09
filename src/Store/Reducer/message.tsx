import {INITIAL_STORE} from '../default';
import {INCREMENT} from '../Type';

export const messages = (state = INITIAL_STORE.messages, action: any) => {
  switch (action.type) {
    case INCREMENT:
      console.log('INCREMENT reducer');
      return state;

    default:
      //console.log('state', state);
      return state
  }
};
