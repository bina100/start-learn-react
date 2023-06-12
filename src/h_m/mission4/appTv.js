import React, { Component } from "react"
import TvItem from "./tvItem"
import axios from "axios"

export default class AppItem extends Component {

    state = { ar: [] }
    componentDidMount() {
        this.doApi()
    }

    doApi = async () => {
        let url = "http://fs1.co.il/bus/tv.php"
        let resp = await axios.get(url)
        this.setState({ ar: resp.data })
    }
    render() {
        return (
            <div>
                <h1>List of vod</h1>
                <div className="row g-3">{
                    this.state.ar.map(item => {
                        return (
                            <TvItem key={item.id} item={item} />

                        )
                    })
                }</div>
            </div>

        )
    }
}