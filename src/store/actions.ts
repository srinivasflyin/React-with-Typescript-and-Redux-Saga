import { HOTEL_DATA_REQUESTED, FILTER_DATA_REQUESTED } from './types'
export function getHotels() {
    return { type: HOTEL_DATA_REQUESTED }
}

export function getFilters() {
    return {
        type: FILTER_DATA_REQUESTED
    }
}