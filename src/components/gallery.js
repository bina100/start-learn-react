import React, { Component } from "react"
export default class Gallery extends Component {
    state = { counter: 0 }
pics_ar = ["cake3", "orange5", "pic2", "pic3"]
    onNextClick = () => {
        let counter = this.state.counter
        this.setState({ counter: (counter <this.pics_ar.length-1) ?  counter + 1 :0})
    }
    onBackClick = () => {
        let counter = this.state.counter
        this.setState({ counter: (counter >0) ? counter - 1 : this.pics_ar.length-1 })
    }

    render() {
        return (
            <div className="col-md-4">
                <img src={"/images/"+this.pics_ar[this.state.counter]+".jpg"} style={{width: "150px"}}/>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.onBackClick}>Back</button>
                <button onClick={this.onNextClick}>Next</button>
            </div>)
    }
}