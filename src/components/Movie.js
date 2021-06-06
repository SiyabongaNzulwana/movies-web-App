import React from 'react'

const Movie = (props) => {
  const { Poster, Title, Type, Year } = props.data
  console.log('props: ', props.data)
  return (
    <div className="movie">
      {<img src={Poster} alt={Title} />}
      <div className="movie-info">
        <h3>{Title}</h3>
        <span>{Type}   {Year}</span>
        </div>
    </div>

  )
}

export default Movie
