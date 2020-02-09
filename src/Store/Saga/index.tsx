import {all} from 'redux-saga/effects';
import {helloSaga, watchIncrementAsync} from './message';

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ]);
}
