let coins = 5;

window.onload= function(){
    document.querySelector("#id_coins").innerHTML = coins;
}
function onRoll(){
if(coins<=0){
    coins = 0;
    alert("You need to buy more coins!");
} else{
    coins--;

    let rnd = Math.random()*6;
    rnd = Math.ceil(rnd);
    document.querySelector('img').src = `images/dice${rnd}.jpg`;

    //win
    if(rnd >=5){
        coins+=2;
        document.querySelector("#id_win_or_lose").innerHTML = "You Win 2 coins";
        document.querySelector("#id_win_or_lose").style.color = "green";
    }
    // lose
    else{
        document.querySelector("#id_win_or_lose").innerHTML = "You Lose 1 coins";
        document.querySelector("#id_win_or_lose").style.color = "red";
    }
    document.querySelector("#id_coins").innerHTML = coins;
}
}