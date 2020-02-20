import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC} from "../Type";

export interface Props {
    INCREMENT_ASYNC?: String,
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* incrementAsync(value: Number) {
    try {
        yield delay(2000);
        yield put({type: INCREMENT, value});

    } catch (e) {

    }
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

function* decrementAsync(value: Number) {
    try {
        yield delay(2000);
        yield put({type: DECREMENT, value});
    } catch (e) {

    }
}

export function* watchDecrementAsync() {
    yield takeLatest(DECREMENT_ASYNC, decrementAsync);
}
