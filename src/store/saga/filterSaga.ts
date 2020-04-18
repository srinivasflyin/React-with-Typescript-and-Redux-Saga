import {put, call,takeEvery } from 'redux-saga/effects'
import {FILTER_DATA_REQUESTED, SET_FILTERS } from '../types'
import {getFilters}  from './api-sagas'
export function* filterWatcherSaga () {
 yield takeEvery(FILTER_DATA_REQUESTED, filterWorker)
}


function* filterWorker(action: any) {
    const { data } =  yield call (getFilters)
    yield put({
        type: SET_FILTERS,
        filters: data
    })
}