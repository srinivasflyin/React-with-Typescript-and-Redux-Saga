export interface FilterClass {
    countries: Array<any>;
    cities: Array<any>;
}

export class City {
    name = ''
    country = ''
    id = 0

}

export class Country {
    name = ''
    id = 0

}
export class HotelObj {
    country = ''
    city = ''
    imgUrl = ''
    name = ''
}

export class ListProps {
    items: Array<HotelObj> = []
}
export class ItemProps {
    item: HotelObj = {
        country: '',
        city: '',
        imgUrl: '',
        name: ''
    };
}

export interface HotelProps {
    hotels: Array<HotelObj>;
}
export class Countryandcity {
    countries: Array<Country> = []
    cities: Array<City> = []
}

export interface AppState {
    hotels: Array<HotelObj>;
    filters: FilterClass;
}



export interface State {

}
export interface Props {
    getHotels: Function;
    getFilters: Function;
    filters: FilterClass;
    hotels: Array<HotelObj>;

}