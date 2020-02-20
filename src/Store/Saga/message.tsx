import {put, takeEvery, takeLatest} from 'redux-saga/effects'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
    yield delay(2000)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* decrementAsync() {
    yield delay(2000)
    yield put({type: 'DECREMENT'})
}

export function* watchIDerementAsync() {
    yield takeLatest('DECREMENT_ASYNC', decrementAsync)
}
