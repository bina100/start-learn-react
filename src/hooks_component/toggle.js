import React, { useState } from 'react'

export default function Toggle() {
    const [showInfo, setShowInfo] = useState(false);

    const onShowInfo = () => {
        setShowInfo(!showInfo)
    }
    const para2 = () => {
        return <p className='text-center text-danger'>
            para2 somthing para 2 somthind
        </p>
    }

    return (
        <div>
            <h2>Info about somthing</h2>
            <button className='btn btn-info' onClick={onShowInfo}>{(showInfo) ? "hide" : "show"} info</button>
            {/* {showInfo ? <p>Lorem input1 bla bla bla bla....</p> : ""} */}
            {showInfo && <p>Lorem input2 bla bla bla bla....</p>}
            {para2()}
        </div>
    )
}
