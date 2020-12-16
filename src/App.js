import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ClientComponent from "./ClientComponent";

function App() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setLoadClient(prevState => !prevState)}>
         {loadClient ? 'Stop' : 'Start'} Client
        </button>
        {loadClient ? <ClientComponent /> : null}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
