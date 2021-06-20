import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieItem from './MovieItem'

const Movie = (props) => {
  const { movies, listView } = useStoreState((store) => store)
  const [searchTerm, setSearchTerm] = React.useState('')
  const toggle = useStoreActions(store => store.toggle)

  return (
    <div>
      <div className="nav-bar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Link variant="outline-info" to="/favourites">View Favourites</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => { setSearchTerm(event.target.value) }} />
          </Form>
        </Navbar>
      </div>
      <div className="card-container">
        {
          movies && movies.length > 0 && movies.filter(item => {
            if (searchTerm === '') {
              return item
            } else if (item.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
          })
            .map(movie => <MovieItem key={movie.imdbID} data={movie} poster={movie.Poster} title={movie.Title} type={movie.Type} year={movie.Year} />)
        }
      </div>
    </div>

  )
}

export default Movie