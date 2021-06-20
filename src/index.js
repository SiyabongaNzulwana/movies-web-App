import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './index.css'
import App from './App'
import Movie from './components/Movie'
import Favourites from './components/Favourites'
import reportWebVitals from './reportWebVitals'
import { StoreProvider } from 'easy-peasy'
import store from './store'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/movie" component={Movie} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Routing />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
