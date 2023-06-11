import React, { Component } from "react"
import InputDate from "./inputDate"
import ViewDate from "./viewDate"
export default class AppDate extends Component {

state = {deadline: "2023-0-01"}
changeDate = (_newDae) =>{
    this.setState({deadline:_newDae})
}
    render() {
        return (
            <div className="container">
                <ViewDate deadline={this.state.deadline}/>
                <InputDate changeDate={this.changeDate}/>
            </div>)
    }
}