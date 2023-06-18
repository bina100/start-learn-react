import React, { useContext, useState } from 'react'
import { random } from 'lodash'
import { AppContext } from '../context/context'

function AppCasino() {
    const { coins, setCoins } = useContext(AppContext)
    const [num, setNum] = useState(1)
    const [msg, setMsg] = useState("click tostart")
    const dice_ar = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg",]

    const onRollClick = () => {
        if (coins == 0) {
            return alert("go to the bank bring money")
        }
        setCoins(coins - 1)
        setMsg("You lose")
        let rnd = random(0, 5)
        setNum(rnd)
        if (rnd >= 4) {
            setCoins(coins + 1)
            setMsg("You win!")
        }
    }
    return (
        <div className='container col-md-4 mx-auto py-4 border'>
            <img src={"/images/" + dice_ar[num]} alt='dice' className='w-50' />
            <div>
                <button onClick={onRollClick} className='btn btn-info'>Roll dice</button>
                <h2>{msg}</h2>
                <h3>coins {coins}</h3>
            </div>
        </div>
    )
}

export default AppCasino
