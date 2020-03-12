import {all } from 'redux-saga/effects'
import { hotelWatcherSaga } from './hotelSaga'
import {filterWatcher} from './filterSaga'
export default function* rootSaga() {
    yield all([
        hotelWatcherSaga(),
        filterWatcher()
    ])
}