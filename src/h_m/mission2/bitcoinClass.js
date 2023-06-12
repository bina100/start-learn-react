import React, { Component } from "react"
export default class BitcoinClass extends Component {

    render() {
        console.log(this.props.item)
        return (
            <div className="w-50 border">
                <img src={`https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${this.props.item.id}.png`}/>
               <h2>{this.props.item.name}</h2>
               <span>value: {Number(this.props.item.price_usd).toFixed(2)}</span>
            </div>
        )
    }
}