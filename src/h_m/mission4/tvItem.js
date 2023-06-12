import React, { Component } from "react"

export default class TvItem extends Component {

    render() {
        return (
            <div className="col-md-4">
                <div className="shadow p-2 overflow-hidden h-100">
                    <img src={`/images/${this.props.item.image}`} className="w-50" />
                    <h4>{this.props.item.name}</h4>
                    <div>Genere: {this.props.item.genere}</div>

                </div>
            </div>

        )
    }
}