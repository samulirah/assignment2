import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [characters, setcharacters] = useState([])
  const [query, setquery] = useState("")

  useEffect(() => {

    const FetchData = async () => {
      try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        setcharacters(data.results)
      } catch (error) {
        console.error(error)
      }
    }
    
    FetchData()
  }, [query])

  return (
    <div className="App">

      <header>
      <h3> Search for your favorite character </h3>
      </header>
      
      <div className='search'>
        <input type="text" 
        placeholder='search for a character (example: Pickle Rick)' 
        className="charinput"
        onChange={event => setquery(event.target.value)}
        value={query}
        />
      </div>

      <div className='results'>
        {characters.map(character => (
          <div>
            {character.name}
            </div>
        ))}
      </div>

    </div>
  );
}

export default App;
