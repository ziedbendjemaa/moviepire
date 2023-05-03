
import { useEffect, useState } from 'react';
import './App.css';
import Card1 from './components/Card1';
import LIst from './components/LIst';


let api_key="&api_key=b184f37be3376e1de47a400c8fd69c1a";
let base_url="https://api.themoviedb.org/3";
let url = base_url+"/discover/movie?sort_by=popularity.desc"+api_key;

function App() {
  const [movie, setMovie] = useState([]);
  const [url_set, setUrl] = useState(url)
  

  useEffect(() => {
   fetch(url_set).then(res=>res.json()).then(data=>{
    
    setMovie(data.results);
   })
  }, [url_set])
  
  return (
    <div className="App">
      <h1>MoviePire</h1>
      <div className='search'>
        <input placeholder='Search for movies'
        value="" onChange={(e)=> (e.target.value)} />
      

      </div>
      <div className='container'>
    {
      movie.map((el,i)=><LIst movie={el} key={i}/>)

    }
    <Card1/>
    </div>
    </div>
  );
}

export default App;
