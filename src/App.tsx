import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">C'EST LE BLIND TEST</h1>
      </header>
      <div className="App-images">
        <p>ET ALORS CENTRALISATION CA EN EST OU ?</p>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
