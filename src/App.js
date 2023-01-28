import logo from './logo.svg';
import './App.css';
import {PruebasComponets} from './Components/PruebasComponets';
import {AjaxComponent} from './Components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasComponets/>

        <AjaxComponent/>
      </header>
    </div>
  );
}

export default App;
