import {createStore, applyMiddleware} from 'redux';
import reducer from './Reducer'; //Import the reducer

//Saga Middleware
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
import rootSaga from './Saga';

// Connect our store to the reducers
export default createStore(reducer, applyMiddleware(saga));

//run saga
saga.run(rootSaga);
