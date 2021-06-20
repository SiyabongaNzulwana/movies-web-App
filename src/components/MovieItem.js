import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Card, Button } from 'react-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'

const MovieItem = (props) => {
  // const { favourites } = useStoreState((store) => store)
  const favourites = useStoreState((state) => state)
  const addFavourites = useStoreActions(store => store.addFavourites)

 
  // const tailoredFavourites = []

  // favourites.favourites.forEach(element => {
  //   tailoredFavourites.push(element.title)
  // });

  // console.log('tailoredFavourites::: ', tailoredFavourites)


  const { Poster, Title, Type, Year, Genre, Plot } = props.data
  let splittedGenre = Genre.split(' ')
  if (splittedGenre.length > 3) {
    splittedGenre.splice(3)
  }

  const shadow = {
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)"
  }

  return (
    <div className="each-movie">
      <CardDeck style={styles.card}>
        <Card style={shadow} >
          <Button variant="primary" style={{ position: "absolute" }} onClick={()=> addFavourites(Title)}>+ Add</Button>
          <Card.Img variant="top" src={Poster} style={styles.image} />
          <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Text>{Type}</Card.Text>
            <Card.Text>{Year}</Card.Text>

          </Card.Body>
          <Card.Footer>
            <small styles={{ flexWrap: 'wrap' }}>Genre: {splittedGenre} </small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <div className="about-movie">
        <p>Details</p>
        <p>{Plot}</p>
      </div>
    </div>
  )
}

export default MovieItem

const styles = {
  image: {
    width: '100%',
    height: '15vw',
    objectFit: 'cover',
  },
  card: {
    padding: 10,
    width: 300,
    borderRad: 10,
  }
}
