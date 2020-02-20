import {INITIAL_STORE} from '../default';
import {DECREMENT, INCREMENT} from '../Type';

export const counter = (state = INITIAL_STORE.counter, action: any) => {
    switch (action.type) {
        case INCREMENT:
            console.log('INCREMENT reducer');
            state.number++;
            break;

        case DECREMENT:
            state.number--;
            break;
    }
    console.log('state', state);
    return state
};
