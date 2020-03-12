import { GET_HOTELS, GET_FILTERS, HOTEL_DATA_REQUESTED, FILTER_DATA_REQUESTED } from './types'
import { HotelObj } from '../shared/classesAndInterfaces'
export function getHotels() {
    return { type: HOTEL_DATA_REQUESTED }
}

export function getFilters() {
    return {
        type: FILTER_DATA_REQUESTED
    }
}