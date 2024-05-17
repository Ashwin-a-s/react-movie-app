import React from 'react'
import Card from './Card'

const Cards = ({movies}  = "hulk") => {

  return (
      <>
        <div className='text-white p-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
              {
                movies.map((movie,index) =>(
                  <Card key={index} movie={movie}/>
                ))
              }
          </div>
        </div>
      </>
         
  )
}

export default Cards