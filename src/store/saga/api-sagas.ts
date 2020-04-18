import axios from 'axios'

export function getHotels() {
    return axios.get('./tempData/hotels.json').then((response: any) => response)
}

export function getFilters() {
    return axios.get('./tempData/filters.json').then((response: any) => response)
}

export function getHotelsData() {
    return axios.get('./tempData/hotels.json').then((response: any) => response)
}