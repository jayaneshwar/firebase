import React, {useState,useEffect} from 'react'
import { collection,getDocs } from 'firebase/firestore'
import { db } from './firebase'

export default function MovieList() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])
    
    useEffect(() => {
        console.log(movies)
    },[movies])
    
    function getMovies() {
        const movieRef = collection(db, 'movies')
        getDocs(movieRef).then(response => {
            const movs = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
            setMovies(movs)
            
        }).catch(error => console.log(error.message))
    }
    return (
      <div>
        <h1>Movies List</h1>
        <div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.data.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}
