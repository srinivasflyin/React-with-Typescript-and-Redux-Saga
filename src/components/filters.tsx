

import React, { Component, forwardRef} from 'react'
import { Country, City, Countryandcity, FilterClass, AppState } from '../shared/classesAndInterfaces'
import { connect } from 'react-redux'
interface Props {
    filters: FilterClass;
}
class Filters extends Component<Props> {
    public countries: Array<Country> = []
    public cities: Array<City> = []
    public filters: Countryandcity = { countries: [], cities: [] }
    public filterComponent: any;
    constructor(props: Props) {
        super(props)
        this.filters['countries'] = []
        this.filters['cities'] = []
    }
    render() {
        const Li = this.props.filters.countries.map((item)=>{
        return (<li key={item.name}>{item.name}</li>)
        })
        return (<div>
            {Li}
        </div>)
    }
}

const mapStateToProps = (state: AppState) => {
    console.log('state========', state)
    return {
        filters: state.filters,
    }
}
export default connect(mapStateToProps, null)(Filters) 