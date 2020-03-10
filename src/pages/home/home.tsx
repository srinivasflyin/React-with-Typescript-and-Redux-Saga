import React, { Component } from 'react'
import { FilterClass, State,Props, AppState } from '../../shared/classesAndInterfaces'
import { RouteComponentProps } from 'react-router-dom'
import { Hotel } from '../../components/hotel';
import Filters  from '../../components/filters';
import { connect } from 'react-redux';
import { getFilters, getHotels } from '../../store/actions'

class Home extends Component<Props, State>{
    public filterObj: FilterClass = { countries: [], cities: [] };
    constructor(props: Props) {
        super(props)
        this.filterObj['countries'] = []
        this.filterObj['cities'] = []
    }
    render() {
        return (<div><Filters  filters={this.filterObj}/> <Hotel /></div>)
    }
    componentDidMount() {
        this.props.getFilters()
        this.props.getHotels()
        //this.filterObj = this.
    }
}


export default connect(null, { getFilters, getHotels })(Home)
