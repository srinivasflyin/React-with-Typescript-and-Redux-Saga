import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { SET_HOTELS, SET_FILTERS } from './types'
import { HotelObj } from '../shared/classesAndInterfaces'
import axios from 'axios'
export function setHotels(hotels: Array<HotelObj>) {
    return {
        type: SET_HOTELS,
        hotels
    }
}



export function getHotels() {
    return function (dispatch: ThunkDispatch<{}, {}, AnyAction>) {
        return axios.get('./tempData/hotels.json').then((response) => {
            const hotels = response.data
            dispatch({ type: SET_HOTELS, hotels })
        })

    }
}

export function getFilters() {
    return function (dispatch: ThunkDispatch<{}, {}, AnyAction>) {
        return axios.get('./tempData/filters.json').then((response: any) => {
            const filters = response.data
            dispatch({
                type: SET_FILTERS,
                filters
            })
        })
    }
}