import React, { Component } from 'react'
import  { FilterClass }  from '../shared/classesAndInterfaces' 
import List   from '../components/list'
 export class Hotel extends Component {
    public hotels: Array<any> = [{
        country: 'Austrailia',
        city: 'perth',
        imgUrl:
          "hotel1.jpg",
        name: "Hilton Dubai Al Habtoor City"
      },
      {
        country: 'Austrailia',
        city: 'perth',        
        imgUrl:
          "hotel2.jpg",
        name: "Sea View Hotel Dubai"
      }];
    public filteredHotels: Array<any> = this.hotels;
    constructor(props: FilterClass) {
        super(props)
    }
    componentDidMount() {
        this.getHotels()
    }
    getHotels() {
        //this.hotels = this.$store.getters.GET_HOTELS;
        if (this.filteredHotels.length === 0) {
          this.filteredHotels = JSON.parse(JSON.stringify(this.hotels));
        }
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
          return (<div>
            <List items={this.filteredHotels} />
          </div>)
      }
}
