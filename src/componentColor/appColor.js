import React, { Component } from "react"
import ColorClass from "./colorClass"
export default class AppColor extends Component {

state = {color:"gray"}
  
handleClick = (_newColor)=>{
this.setState({color: _newColor})
}
    render() {
        return (
            <div className="col-md-4">
                <h1 style={{color: this.state.color}}>Welcome to custom</h1>
                <ColorClass handleClick={this.handleClick}/>
            </div>)
    }
}