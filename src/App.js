import logo from './logo.svg';
import './App.css';
import AppBitcoin from './component_hm/appBitcoin';
import AppGameDice from './component_hm/appDice';

function App() {
  return (
    <div className="App">
     {/* <AppBitcoin/>
     <hr/> */}
     <AppGameDice/>
    </div>
  );
}

export default App;
