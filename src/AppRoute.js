import React from 'react';
import HomePage from './pages/Home'
import EventDetail from './pages/EventDetail'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/detailevent/:id' component={EventDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoute;