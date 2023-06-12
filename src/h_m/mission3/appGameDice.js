import React, { Component } from "react"
import DiceClass from "./diceClass";

export default class AppGameDice extends Component {
    state = { random:1,coins: 5, res:"", color: false }

    componentDidMount() {
        this.onRoll()
    }

    onRoll=()=> {
        if (this.state.coins <= 0) {
            this.setState({coins: 0});
            alert("You need to buy more coins!");
        } else {
            this.setState({coins: this.state.coins--});

            let rnd  = Math.random() * 6;
            rnd = Math.ceil(rnd);
            this.setState({random:rnd})
            // document.querySelector('img').src = `images/dice${rnd}.jpg`;

            //win
            if (rnd >= 5) {
                this.setState({coins: this.state.coins+2,res:"You Win 2 coins", color: true});
                // document.querySelector("#id_win_or_lose").innerHTML = "You Win 2 coins";
                // document.querySelector("#id_win_or_lose").style.color = "green";
            }
            // lose
            else {
                this.setState({res:"You Lose 1 coins", color: false, coins:this.state.coins-1})
  }
        }
    }
    render() {
        return (

            <div class="container m-5 d-grid text-center">
                <h1 class="text-info mt-2">Hello Player</h1>
                    <h2 id="id_win_or_lose" style={{color:this.state.color?"green": "red"}}>{this.state.res}</h2>
                    <DiceClass random={this.state.random}/>
                    <h4>coins: <span id="id_coins">{this.state.coins}</span></h4>
                    <button onClick={this.onRoll} id="id_btn" class="rounded-3 bg-info p-2 px-4">Roll</button>


            </div>
        )
    }
}