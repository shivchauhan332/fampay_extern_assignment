import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import Cards from './Components/Cards'
import Header from './Components/Header'
import PaginationComponent from './Components/Pagination'
function App() {
  const baseApiURL = "http://localhost:8000/api/get-videos?";
  const [apiURL, setApiURL] = useState(baseApiURL);
  const [data, setData] = useState([]);
  const [sortQueryParam, setSortQueryParam] = useState("")
  const [searchQueryParam, setSearchQueryParam] = useState("")
  const [count, setCount] = useState(0);
  const [activePageIndex, setActivePageIndex] = useState(1);
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      setData(response.data);
      setCount(response.data.count)
    })
  }, [apiURL])

  const sortButtonHandler = (query) => {
    // Calling setApiURL first as it is an asynchronous function and we want the get request to be executed first
    setApiURL(baseApiURL + query + searchQueryParam + "&page="+activePageIndex);
    setSortQueryParam(query)
  }

  const handleClickPagination = (index) => {
    console.log("index set to " +index)
    setApiURL(baseApiURL + sortQueryParam + searchQueryParam + "&page="+index);
    setActivePageIndex(index)
  }

  const searchHandler = (searchQuery) => {
    setApiURL(baseApiURL + sortQueryParam + "&search="+searchQuery + "&page="+activePageIndex);
    setSearchQueryParam("&search="+searchQuery)
  }
  return (
    <div className="App">
      <div
        id="main-wrapper"
        data-theme="light"
        data-layout="vertical"
        data-header-position="fixed"
        data-boxed-layout="full"
      >
        <Header sortButtonHandler={sortButtonHandler} searchHandler={searchHandler}/>
        <div className="page-wrapper d-block">
          <div className="page-content container-fluid">
            <h5 className="mb-3">Showing {count} results</h5>
            <Cards data={data.results} />

            <div style={{ marginLeft: "35%" }}><PaginationComponent count={count}
              activePageIndex={activePageIndex}
              handleClick={handleClickPagination} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
