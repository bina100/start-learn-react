import React, { Component } from "react"
import axios from "axios"
import ToyItem from "./toyItem"
export default class ToysList extends Component {

    state = { ar: [] }

    componentDidMount() {
        console.log("hhh")
        this.doApi()
    }
    doApi = async () => {
        let url = "https://toysstor.onrender.com/toys"
        let resp = await axios.get(url)
        console.log(resp.data)
        this.setState({ ar: resp.data })
    }

    render() {
        return (
            <div className="col-md-4">
                <h1>Welcome to toys list</h1>
                {
                    this.state.ar.map(item => {
                        return (
                            <ToyItem key={item._id} item={item} />
                        )
                    })
                }
            </div>)
    }
}