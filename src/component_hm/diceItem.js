import React from "react"

export default function DiceItem(props) {
    return (
        <>
            <img src={`/images/dice${props.random}.jpg`} className='w-25 text-center me-2 border' />
        </>

    )

}