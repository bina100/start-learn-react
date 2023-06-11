import React, { Component } from "react"
export default class Message extends Component {
    render() {
        return (
            <div className="message" style={{ background: this.props.bg, border: "2px solid blue" }}>
                <h2>Message: {this.props.msg}</h2>
            </div>)
    }
}