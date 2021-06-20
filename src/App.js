import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieListView from './components/MovieListView'

const App = () => {
  const { movies, listView } = useStoreState((store) => store)
  const [searchTerm, setSearchTerm] = React.useState('')
  const toggle = useStoreActions(store => store.toggle)

  console.log('toggle: ', toggle)

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
    // setMovies(movies_data)
  }, [])
  return (
    <div>
      <div>
        <div className="nav-bar">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
              <Link to="/favourites">View Favourites</Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => { setSearchTerm(event.target.value) }} />
            </Form>
          </Navbar>
        </div>
      </div>
      <div className="movie-container">
        {
          movies && movies.length > 0 && movies.filter(item => {
            if (searchTerm === '') {
              return item
            } else if (item.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          })
            .map(movie => <MovieListView key={movie.imdbID} data={movie} poster={movie.Poster} title={movie.Title} />)
        }
      </div >
    </div>
  )

}

export default App
