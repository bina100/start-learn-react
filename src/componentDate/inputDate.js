import React, { Component } from "react"
export default class InputDate extends Component {

    inputRef = React.createRef()

    onChangeDate = () =>{
        let input_val = this.inputRef.current.value
        this.props.changeDate(input_val)
    }
    render() {
        return (
            <div className="col-md-4">
                <input ref={this.inputRef} className="form-control" type="date" defaultValue="2024-01-01"/>
                <button onClick={this.onChangeDate} className="btn btn-info">Change</button>
            </div>)
    }
}