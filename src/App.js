import './App.css';
import React, { useEffect, useState } from 'react';
import 

function App() {

  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getVideoGames();
  }, []);

  async function getVideoGames(){
    try{
      debugger;
      const response = await axios.get('');
      console.log(response.data)
      setVideoGames(response.data);
    } catch(ex){
      console.log('ERROR in getVideoGames EXCEPTION: ${ex}')
    }
  }

  return (
    <div>
     <DisplayPlatformStats videoGames={videoGames}/>
    </div>
  );
}

export default App;
