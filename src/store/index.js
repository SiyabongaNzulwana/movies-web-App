import { createStore, action } from 'easy-peasy'
import movie_data from '../movies_data.json'

const store = createStore({
  movies: movie_data,
  listView: false,
  favourites: [],
  //Actions
  toggle: action(() => store.listView = !store.listView),
  addFavourites: action((state, payload) => {
    state.favourites.push({title: payload})
    console.log('mamam',state.favourites)
  }),
})

export default store
