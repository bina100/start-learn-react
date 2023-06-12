import React, { Component } from "react"
import BitcoinClass from "./bitcoinClass"
import axios from "axios"
export default class AppBitcoin extends Component {

    state = { ar: [] }

    componentDidMount() {
        this.doApi()
    }
    doApi = async () => {
        let url = "http://fs1.co.il/bus/bitcoin.php"
        let resp = await axios.get(url)
        this.setState({ ar: resp.data })
    }

    render() {
        return (
            <div className="col-md-4">
                <h1>Welcome to bitcoin</h1>
                {
                    this.state.ar.map(item => {
                        return (
                            <BitcoinClass key={item._id} item={item} />
                        )
                    })
                }
            </div>)
    }
}