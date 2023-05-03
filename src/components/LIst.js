
import React from 'react'


const LIst = ({movie}) => {
   
    let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <div className='movie'>
    <div>
      <p>{movie.release_date}</p>
    </div>
    <div>
      <img src={img_path+movie.poster_path } alt={movie.title} />
    </div>
    <div>
      <span>{movie.vote_average}</span>
      <h3>{movie.title}</h3>
    </div>
  </div>
  )
}

export default LIst