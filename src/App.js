import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import movies_data from '../src/movies_data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = React.useState('')

  useEffect(() => {
    // const getMovies = async () => {
    //   fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-key": "30a69956a4msh64f2641af591e92p1e08d9jsncce44dc60d35",
    //       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
    //     }
    //   })
    //     .then(async response => {
    //       const data = await response.json();
    //       console.log('the data: ', data)
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // }
    // getMovies()
    setMovies(movies_data)
  }, [])
  return (
    <div className="movie-container">
      <Navbar className="search">
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={(event) => { setSearchTerm(event.target.value) }} />
          <Button type="submit">Submit</Button>
        </Form>
        <div className="toggle-views"><Button type="submit">toggle view</Button></div>
      </Navbar>
      {
        movies.length && movies.filter(item => {
          if (searchTerm === '') {
            return item
          } else if (item.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
          }
        })
          .map( movie => <Movie key={movie.imdbID} data={movie} poster={movie.poster} title={movie.title} /> )
      }
    </div>
  )

}

export default App
