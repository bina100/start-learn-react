import React, { Component, useEffect, useState } from "react"
import DiceItem from "./diceItem"

export default function AppGameDice() {
    const [random, setRandom] = useState(1)
    const [coins, setCoins] = useState(5)
    const [res, setRes] = useState("")
    const [color, setColor] = useState(false)
    useEffect(() => {
        onRoll()
    }, [])

    const onRoll = () => {
        if (coins <= 0) {
            setCoins(0);
            alert("You need to buy more coins!");
        } else {
            setCoins(coins - 1)

            let rnd = Math.random() * 6;
            rnd = Math.ceil(rnd);
            setRandom(rnd)
            // document.querySelector('img').src = `images/dice${rnd}.jpg`;

            //win
            if (rnd >= 5) {
                setCoins(coins + 2)
                setRes("You Win 2 coins")
                setColor(true)
                // document.querySelector("#id_win_or_lose").innerHTML = "You Win 2 coins";
                // document.querySelector("#id_win_or_lose").style.color = "green";
            }
            // lose
            else {
                setRes("You Lose 1 coins")
                setColor(false)
                setCoins(coins - 1)
            }
        }
    }
    return (

        <div class="container m-5 d-grid text-center">
            <h1 class="text-info mt-2">Hello Player</h1>
            <h2 id="id_win_or_lose" style={{ color: color ? "green" : "red" }}>{res}</h2>
            <DiceItem random={random} />
            <h4>coins: <span id="id_coins">{coins}</span></h4>
            <button onClick={onRoll} id="id_btn" class="rounded-3 bg-info p-2 px-4">Roll</button>


        </div>
    )

}