import React from 'react'

const Card = ({movie}) => {
  return (
    <div className='flex flex-col items-center bg-black p-4 rounded-md w-auto space-y-1'>
    <img className="w-auto rounded-md" src={movie.Poster}/>
    <h1 className='text-white font-bold text-xl'>
        {movie.Title}
    </h1>
    <p className='text-lg'>{movie.Year}</p>
    <p className='text-lg'>{movie.Type}</p>
  </div>
  )
}

export default Card