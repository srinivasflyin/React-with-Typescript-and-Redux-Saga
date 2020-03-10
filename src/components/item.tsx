

import props from "prop-types";
import React from 'react'
import {ItemProps } from '../shared/classesAndInterfaces'
export default function Item(props: ItemProps) {
    return (<div><img src={getImgUrl(props.item.imgUrl)} alt={props.item.name}/><span>{props.item.name}</span></div>)
}

function getImgUrl(imageUrl: string): string {
    return require(`../assets/hotelImages/${imageUrl}`)
}






