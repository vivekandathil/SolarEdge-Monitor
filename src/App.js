import React from 'react';
import logo from './logo.svg';
import './App.css';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const request = "https://monitoringapi.solaredge.com/site/891311/details?api_key=U2MHUG9XZHB2JUQ9882Z7JVNK9S04OH2";

function App() {

  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    fetch(proxyUrl + request)
      .then((res) => console.log(res))
  }, []);

  return (
    <div className="App">
      <h3>{JSON.stringify(response)}</h3>
    </div>
  );
}

export default App;
