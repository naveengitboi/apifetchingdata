import { useState } from "react";
import './App.css'
function App() {
  const [data, setData] = useState('Hello')
  const url = `https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec14b9c38amsh9669f07d91a6a2ep1d850djsn63f2b94698f6',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  return (
    <div className="App">
      <input type="search" placeholder="search for a movie" />
      <div className="container">
        <div className="movieContainer">
          <p className="year">2016</p>
          <img src="" alt="" />
          <div className="content">
            <h1 className="movieName">Avengers</h1>
            <p className="gener">Gener <span>movie</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
