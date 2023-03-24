import './App.css';
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseInit';

function App(){
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState(0);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const moviesRef = collection(db, "movies");

  const createMovie = async () => {
    await addDoc(moviesRef, {
      title: title,
      desc: desc,
      year: year
    });
  }

  useEffect(() => {
    const getMovies = async () => {
        const data = await getDocs(moviesRef);
        setMovies(data.docs.map(movie => ({...movie.data(), id: movie.id})));
    }

    getMovies()
  }, []);

  
  if(loading) {
    return <h1>Loading...</h1>
  } 

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter title" 
        onChange={(e)=> {setTitle(e.target.value)}} 
      />
      <input 
        type="number"
        placeholder="Year" 
        onChange={(e)=> {setYear(e.target.value)}} 
      />
      <input 
        type="text" 
        placeholder="Enter description" 
        onChange={(e)=> {setDesc(e.target.value)}} 
      />


      <button onClick={createMovie}>Create Movie</button>

      {movies.map(movie => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.desc}</p>
        </li>
      ))}
  
    </div>
  );
}

export default App;