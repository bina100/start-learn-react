import './App.css';
import AppTv from './api_component/appTv';
import AppHooks from './hooks_component/appHooks';
import ToysList from './hw_component/toysList';
import AppWeather from './weather_copmonent/appWeather';

function App() {
  return (
    <div className="App">
      {/* <ToysList/> */}
      <hr/>
      <AppHooks/>
      <hr/>
      <AppTv/>
      <hr/>
      <AppWeather/>
    </div>
  );
}

export default App;
