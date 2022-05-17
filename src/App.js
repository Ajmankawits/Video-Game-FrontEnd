import './App.css';
import React, { useEffect, useState } from 'react';
import GlobalSalesChart from './components/charts/DisplayPlatformStats';
import axios from "axios";
import GameTable from './components/GameTable/GameTable';
import NavBar from './components/NavBar/NavBar';
import SampleQuestion from './components/charts/SampleQuestion';

function App() {

  const [games, setVideoGames] = useState([]);
  
  async function getVideoGames(){
    try{
      debugger;
      const response = await axios.get('https://localhost:7260/api/games');
      setVideoGames(response.data);
    } catch(ex){
      console.log('ERROR in getVideoGames EXCEPTION: ${ex}')
    }
  };
  //useEffect will run when the page loads
  useEffect(() => {
    getVideoGames();
  }, []);


  return (
    <div className="App">
      <nav style={{display: "flex", justifyContent: "space-evenly"}} className=" navbar navbar-expand-lg navbar-light bg-light">
        <div className="title">
        <img className="con-icon" src="https://i.imgur.com/AkxEsYC.png?1"/>

      <h1 >Video Games</h1>
</div>
      <NavBar games ={games} setVideoGames = {setVideoGames} getVideoGames={setVideoGames}/>
      </nav>
      <GlobalSalesChart  videosGames = {games}/>
      <GameTable games={games} setVideoGames = {setVideoGames}/>
      <div className="custom-chart">
      <SampleQuestion videosGames = {games}/>
      </div>
    </div>
  );
}

export default App;
