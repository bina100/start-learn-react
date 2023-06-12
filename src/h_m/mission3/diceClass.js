import React, { Component } from "react"

export default class DiceClass extends Component {

    render() {
        return (
            <>
                <img src={`/images/dice${this.props.random}.jpg`} className='w-25 text-center me-2 border'/>
            </>

        )
    }
}