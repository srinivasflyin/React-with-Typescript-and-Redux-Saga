import React, { Component } from 'react'
import  { FilterClass, AppState, HotelProps }  from '../shared/classesAndInterfaces' 
import List   from '../components/list'
import { connect } from 'react-redux'
  class Hotel extends Component<HotelProps> {
    public hotels: Array<any> = []
    public filteredHotels: Array<any> = [];
    constructor(props: HotelProps) {
        super(props)
    }
      searchHotels(filters: FilterClass) {
        const htlValues: Array<any> = [];
    
        if (Object.keys(filters.countries).length > 0 || Object.keys(filters.cities).length > 0) {
          this.hotels.forEach(item => {
            if (
              filters.countries.includes(item.country) ||
              filters.cities.includes(item.city)
            ) {
              htlValues.push(item);
            }
          });
          this.filteredHotels = JSON.parse(JSON.stringify(htlValues));
        } else {
          this.filteredHotels = JSON.parse(JSON.stringify(this.hotels));
        }
      }
      render () {
           //this.hotels = this.$store.getters.GET_HOTELS;
        if (this.filteredHotels.length === 0) {
            this.filteredHotels = JSON.parse(JSON.stringify(this.props.hotels));
          }
          return (<div>
            <List items={this.filteredHotels} />
          </div>)
      }
}


const mapStateToProps = (state: AppState) => {
    return {
        hotels: state.hotels
    }
}

export default connect(mapStateToProps, null)(Hotel)
