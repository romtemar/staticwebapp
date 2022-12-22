import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const sendRequest = async () => {
    await axios.get('https://rmaik-test-apim1.azure-api.net/echo/resource-cached?param1=sampl', {
      headers: {
        'Ocp-Apim-Subscription-Key':'c0ff31679a7545748b9389713142660a'
      }
    }).then((response) => {
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
