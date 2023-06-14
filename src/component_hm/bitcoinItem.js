import React from "react"
export default function BitcoinItem(props) {
    const item = props.item;

    return (
        <div className="w-50 border">
            <img src={`https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${item.id}.png`} />
            <h2>{item.name}</h2>
            <span>value: {Number(item.price_usd).toFixed(2)}</span>
        </div>
    )

}