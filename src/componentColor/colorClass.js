import { Button } from "bootstrap"
import React, { Component } from "react"
export default class ColorClass extends Component {

    render() {
        return (
            <div>
                <button onClick={()=>{this.props.handleClick("red")}}>
                    Red
                </button>
                <button onClick={()=>{this.props.handleClick("blue")}}>
                    Blue
                </button>
                <button onClick={()=>{this.props.handleClick("green")}}>
                    Green
                </button>
            </div>
        )
    }
}