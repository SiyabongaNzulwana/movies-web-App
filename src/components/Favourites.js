import React, { useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Favourites = () => {
  const { movies, listView } = useStoreState((store) => store)
  const favourites = useStoreState((state) => state)
  const addFavourites = useStoreActions(store => store.addFavourites)
  const [tailoredMovies, setTailoredMovies] = useState([])

  
  React.useEffect(()=> {
    const getTailoredMovies =()=> {
      if (favourites){
        favourites.favourites.forEach((item) => {
          const newMovieList = movies.filter((movie) => movie.Title === item.title)
          setTailoredMovies(newMovieList)
        })
      }
    }
    getTailoredMovies()
  }, [addFavourites])


  console.log('tailoredMovies::: ', tailoredMovies)

  return (
    <div>
      <h1>FAVOURITES</h1>
    </div>
  )
}

export default Favourites
