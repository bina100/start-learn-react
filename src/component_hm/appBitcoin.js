import React, { useEffect, useState } from "react"
import axios from "axios"
import BitcoinItem from "./bitcoinItem"
export default function AppBitcoin() {

    const [ar, setAr] = useState([])
    useEffect(() => {
        doApi()

    }, [])

    const doApi = async () => {
        let url = "http://fs1.co.il/bus/bitcoin.php"
        let resp = await axios.get(url)
        setAr(resp.data)
    }

    return (
        <div className="col-md-4">
            <h1>Welcome to bitcoin</h1>
            {
                ar.map(item => {
                    return (
                        <BitcoinItem key={item._id} item={item} />
                    )
                })
            }
        </div>)

}