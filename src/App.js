import './App.css';
import React, { useEffect, useState } from 'react';
import GlobalSalesChart from './components/charts/DisplayPlatformStats';

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
    <div>
     <GlobalSalesChart videoGames={games}/>
    </div>
  );
}

export default App;
