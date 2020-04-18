import { all } from 'redux-saga/effects'
import { hotelWatcherSaga } from './hotelSaga'
import { filterWatcherSaga } from './filterSaga'
export default function* rootSaga() {
    yield all([
        hotelWatcherSaga(),
        filterWatcherSaga()
    ])
}