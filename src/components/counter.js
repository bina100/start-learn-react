import React, { Component } from "react"
export default class Counter extends Component {
    state = { counter: 4 }

    onPlusClick = () => {
        let counter = this.state.counter
        this.setState({ counter: (counter >= 5) ? 0 : counter + 1 })
    }
    onMinusClick = () => {
        let counter = this.state.counter
        this.setState({ counter: (counter <=0) ? 5 : counter - 1 })
    }

    render() {
        return (
            <div className="col-md-4">
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.onMinusClick}>Minus</button>
                <button onClick={this.onPlusClick}>Plus</button>
            </div>)
    }
}