import { GET_HOTELS, SET_HOTELS, SET_FILTERS } from './types'
//import { setHotels } from './actions'
import { AppState } from '../shared/classesAndInterfaces'
import { Reducer } from 'redux'

let initialState: AppState = {
    hotels: [],
    filters: { countries: [], cities: [] }
};

const RootReducer: Reducer = function (state = initialState, action: any) {
    switch (action.type) {
        case SET_FILTERS:
           return Object.assign({}, state, { filters: { ...action.filters } })
        case GET_HOTELS:
            return state.hotels;
        case SET_HOTELS:
           return   Object.assign({}, state, { 
                hotels: [...state.hotels,...action.hotels]
            })
        default:
            return state;
    }
}
export default RootReducer
//export type RootReducer = ReturnType<typeof rootReducer>