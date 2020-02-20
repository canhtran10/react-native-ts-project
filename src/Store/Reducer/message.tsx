import {INITIAL_STORE} from '../default';
import {DECREMENT, INCREMENT} from '../Type';

export const counter = (state = INITIAL_STORE.counter, action: any) => {
    switch (action.type) {
        case INCREMENT:
            console.log('INCREMENT reducer');
            return state.number++;

        case DECREMENT:
            return state.number--;
    }
    console.log('state', state);
    return state
};
