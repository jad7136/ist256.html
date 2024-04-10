import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./movie.js"
import React from 'react';
import './movie.css';
function App() {
  return (
    <div className="App">
      <h1>List of movies</h1>
      <div className= "movies">
      <div>
        <Movie/>
      </div>
        <div>
          <Movie/>
        </div>
        <div>
          <Movie/>
        </div>
      </div>
    </div>
  );
}

export default App;
