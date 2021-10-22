import React from 'react'
import './App.css'
import { ErrorPage, LoginPage, DashboardPage } from './pages'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
