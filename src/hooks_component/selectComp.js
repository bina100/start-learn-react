import React, { useState } from 'react'

export default function SelectComp() {
    const [color, setColor] = useState("silver")
    const colors_ar = ["red", "blue", "green", "orange"]

    return (
        <div>
            <h2 style={{ background: color }}>Select your favorite color: {color}</h2>
            <select onChange={(e)=>{setColor(e.target.value)}}>
                {colors_ar.map((item) => {
                    return <option key={item} value={item} >{item}</option>
                })}
            </select>
        </div>
    )
}
