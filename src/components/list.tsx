
import React, { Component } from 'react';
import { ListProps, HotelObj } from '../shared/classesAndInterfaces'
import Item  from './item'

function List(props: ListProps) {
    const hotels = props.items.map((hotel: HotelObj) => {
        return (<div key={hotel.name}> <Item item={hotel}/> </div>)
    })
    return (<div>{hotels}</div >)
}
export default List




