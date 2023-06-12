import logo from './logo.svg';
import './App.css';
import AppBitcoin from './h_m/mission2/appBitcoin';
import AppGameDice from './h_m/mission3/appGameDice';
import AppItem from './h_m/mission4/appTv';

function App() {
  return (
    <div className="App">
      <h2>Mission2</h2>
     <AppBitcoin/>
     <hr/>
     <AppGameDice/>
     <hr/>
     <AppItem/>
     <hr/>
    </div>
  );
}

export default App;
