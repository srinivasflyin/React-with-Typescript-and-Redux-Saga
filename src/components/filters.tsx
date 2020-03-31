

import React, { Component } from 'react'
import { AppState, FilterProps } from '../shared/classesAndInterfaces'
import { connect } from 'react-redux'

class Filters extends Component<FilterProps> {
    render() {
        const Li = this.props.filters.countries.map((item) => {
            return (<li key={item.name}>{item.name}</li>)
        })
        return (<div>
            {Li}
        </div>)
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        filters: state.filters,
    }
}
export default connect(mapStateToProps, null)(Filters) 