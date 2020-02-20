import {all, fork} from 'redux-saga/effects';
import {watchIncrementAsync, watchDecrementAsync} from './counter';

export default function* rootSaga() {
    yield all([
        fork(watchDecrementAsync),
        (watchIncrementAsync)
    ]);
}
