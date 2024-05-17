import React from 'react'
import Cards from '../components/Cards.jsx'
import {useState,useEffect} from 'react';


const HomePage = (event) => {
   //bd788a2f
   const apiUrl = 'http://www.omdbapi.com?apikey=bd788a2f';
   //const res = await fetch(`${apiUrl}&s=${title}`);
   const[movieName,setMovieName] = useState("");
   const [movies,setMovies] = useState([]);

  const submitBtn = async(event) =>{
    event.preventDefault();
    const res = await fetch(`${apiUrl}&s=${movieName}`);
    const data = await res.json();
    setMovies(data.Search);
  }

  return (
  <>
    <div className='text-white container m-auto max-w-2xl'>
        <h1 className='text-3xl font-bold text-center m-10'>
            MovieMania
        </h1>
        <form className='flex space-x-2 p-4' onSubmit={submitBtn}>
            <input className='border-2 border-black rounded-md w-full py-2 text-black'
            placeholder='eg.hulk ' type="text" 
            value={movieName}
            onChange={(e) =>{setMovieName(e.target.value)}}/>

            <button className='px-4 py-2 border-white border-1 rounded font-bold bg-gray-700 hover:bg-gray-500' type='submit' >Search</button>
        </form>
        </div>
        {
          movies ? (
            <Cards movies={movies}/>
          ) : 
          <h1 className='text-center text-white font-bold text-3xl'>Not Found</h1>
        }
        
    
    </>
  )
}
export default HomePage