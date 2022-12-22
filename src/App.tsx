import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const apimUrl = 'https://rmaik-test-apim.azure-api.net/api/weather';
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=2401b4c393ad70dc5a8e56b9805ba118`;

  const sendRequest = () => {
    axios.get(apimUrl).then((response) => {
      console.log(response.data);
      console.log(response.status);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={sendRequest}
        >
          Send Request
        </button>
      </header>
    </div>
  );
}

export default App;
