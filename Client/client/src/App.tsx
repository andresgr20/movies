import React from 'react';
import logo from './logo.svg';
import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [movies,setMovies] = useState();

  const getMovies = async () => {
    try{
      const response = await api.get("/api/v1/movies")
      setMovies(response.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
