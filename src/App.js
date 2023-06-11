import logo from './logo.svg';
import './App.css';
import AppHw from './components/appHw';
import AppDate from './componentDate/appDate';
import ShopList from './componentLoop/shoopList';
import AppColor from './componentColor/appColor';

function App() {
  return (
    <div className="App">
      <h1 className='text-danger'></h1>
      <hr />
      <AppHw />
      <hr />
      <AppDate />
      <hr />
      <ShopList />
      <hr />
      <AppColor />
      <hr />
    </div>
  );
}

export default App;
