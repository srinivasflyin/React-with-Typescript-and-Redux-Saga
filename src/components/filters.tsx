

import React, { Component } from 'react'
import { Country, City, Countryandcity, FilterClass, AppState } from '../shared/classesAndInterfaces'
import { countryData, cityData } from '../shared/filterData'
import { connect } from 'react-redux'
interface Props {
    filters: FilterClass
}
class Filters extends Component<Props> {
    public countries: Array<Country> = []
    public cities: Array<City> = []
    public filters: Countryandcity = { countries: [], cities: [] }
    constructor(props: Props) {
        super(props)
        this.countries = countryData()
        this.cities = cityData()
        this.filters['countries'] = []
        this.filters['cities'] = []

    }
    componentDidMount() {
        console.log('77777777777777777777777777777777777777777')
    }
    render() {
        return (<div>
        </div>)
    }
}

const mapStateToProps = (state: AppState) => {
    console.log('7777777777777777777', state)
    return {
        hotels: state.hotels
    }
}
export default connect(mapStateToProps, null)(Filters) 