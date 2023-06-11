import React, { Component } from "react"
export default class ViewDate extends Component {
    state = { days: 999 }

    componentDidMount() {
        console.log("did mount")
        this.calcDays(this.props.deadline)
    }

    componentDidUpdate(_oldProps, _oldState) {
        console.log("did update")

        if (_oldProps.deadline != this.props.deadline) {
            console.log(_oldProps, this.props)
            this.calcDays(this.props.deadline)

        }
        console.log(this.state.days)
    }

    calcDays = (_newDate) => {
        let time = Date.parse(_newDate) - Date.now()
        console.log(Date.now())

        let newDays = Math.floor(time / (1000 * 60 * 60 * 24))
        this.setState({ days: newDays })
    }
    render() {
        return (
            <div className="col-md-4">
                <h2>Countdown to:{this.props.deadline}</h2>
                <h3>Days:{this.state.days}</h3>
            </div>)
    }
}