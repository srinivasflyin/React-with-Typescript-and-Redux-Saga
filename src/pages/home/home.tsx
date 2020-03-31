/* eslint-disable import/first */
import React, { Component, lazy, Suspense } from 'react'
import { FilterClass, Props, HotelObj } from '../../shared/classesAndInterfaces'
//import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux';
import { getFilters, getHotels } from '../../store/actions'
const Hotel = lazy(() => import('../../components/hotel'))
const Filters = lazy(() => import('../../components/filters'))


class Home extends Component<Props>{
    public filterObj: FilterClass = { countries: [], cities: [] };
    public hotels: Array<HotelObj> = []
    constructor(props: Props) {
        super(props)
        this.filterObj['countries'] = []
        this.filterObj['cities'] = []
    }
    render() {
        return (<div>
            <Suspense fallback={<h1>Still Loading…</h1>}>
            <Filters filters={this.filterObj} />
            <Hotel hotels={this.hotels} />
            </Suspense>
        </div>)
    }
    componentDidMount() {
        this.props.getFilters()
        this.props.getHotels()
    }
}

export default connect(null, { getFilters, getHotels })(Home)
