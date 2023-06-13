import React, { Component } from "react"
import axios from "axios"

export default class ToyItem extends Component {


    render() {
        let item = this.props.item
        return (
            <div className="d-flex">
                <div>
                <h2>{item.name}</h2>
                <p>{item.info}</p>
                <div>Price: {item.price}</div>
                </div>
                <img src={item.img_url}/>
            </div>)
    }
}