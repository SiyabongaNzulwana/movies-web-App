import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const MovieListView = (props) => {
  const { Poster, Title, Type, Year } = props.data
  return (
    <ul>
      <ListGroup>
        <ListGroup.Item variant="info">{<img className="image" src={Poster} alt={Title} />} <span style={styles.title}>{Title}</span><span style={styles.type}>{Type}</span><span style={styles.year}>{Year}</span></ListGroup.Item>
        <Button variant="dark">Add To Favourites</Button>
      </ListGroup>
    </ul>
  )
}

export default MovieListView

const styles = {
  title : {
    fontWeight: 'normal',
    fontSize: 22,
    fontColor: '#000',
  },
  type : {
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: 'sans-serif',
    fontColor: '#000',
  },
  year : {
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: 'sans-serif',
    fontColor: '#000',
  }
}
