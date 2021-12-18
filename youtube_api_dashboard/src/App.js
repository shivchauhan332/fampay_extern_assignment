import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import Cards from './Components/Cards'
import Header from './Components/Header'
function App() {

  const [apiURL, setApiURL] = useState("http://localhost:8000/api/get-videos");
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      setData(response.data);
    })
  }, [apiURL])

  return (
    <div className="App">
      <div
        id="main-wrapper"
        data-theme="light"
        data-layout="vertical"
        data-header-position="fixed"
        data-boxed-layout="full"
      >
        <Header />
        <div className="page-wrapper d-block">
          <div className="page-content container-fluid">
            <Cards data={data.results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
