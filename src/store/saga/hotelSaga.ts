import { takeEvery, call, put, all } from 'redux-saga/effects'
import { SET_HOTELS, HOTEL_DATA_REQUESTED } from '../types'
import { getFilters, getHotels } from './api-sagas'

export function* hotelWatcherSaga() {
    yield takeEvery(HOTEL_DATA_REQUESTED, hotelWorkerSaga)
}

function* hotelWorkerSaga(action: any) {
    try {
        const { data } = yield call(getHotels)
        yield put({ type: SET_HOTELS, hotels: data.hotels })
    } catch (e) {

    }
}

