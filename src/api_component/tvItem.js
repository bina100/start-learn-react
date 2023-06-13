import React, { useState } from 'react'

export default function TvItem(props) {
    const [showInfo, setShowInfo] = useState(false)

    let item = props.item

    return (
        <div className='col-md-4'>
            <div class="card shadow">
                <img class="card-img-top" src={`/images/${item.image}`} className='w-50 border' alt="Card image cap" />
                <div class="card-body">
                    <h4>{item.name}</h4>
                    <div>Genere: {item.genere}</div>
                    {/* <div>Views: {item.views.toLocalString()}</div> */}
                    <button onClick={()=>{setShowInfo(!showInfo)}}>show/hide more info</button>
                    {showInfo && <p>{item.descrption}</p>}
                </div>
            </div>
        </div>
    )
}

