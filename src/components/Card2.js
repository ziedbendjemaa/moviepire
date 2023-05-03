import React from 'react'

const Card2 = ({filem}) => {
    let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <div className='movie'>
    <div>
      <p>{filem.release_date}</p>
    </div>
    <div>
      <img src={img_path+filem.poster_path } alt={filem.title} />
    </div>
    <div>
      <span>{filem.vote_average}</span>
      <h3>{filem.title}</h3>
    </div>
  </div>
  )
}

export default Card2