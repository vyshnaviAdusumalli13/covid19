import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Vaccination from './components/Vaccination'
import StateWiseCases from './components/StateWiseCases'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/vaccination" component={Vaccination} />
      <Route exact path="/state/:stateCode" component={StateWiseCases} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
