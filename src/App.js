import {
  browserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDeFouylt from'./templates/Defoult'
import TemplatePage from './templates/Page'

import Customers from './pages/Customers'
import Home from './pages/home'

const App = () => {
   return (
    <TemplateDeFouylt>
      <Router>
        <Switch>
          <Route path="/customers">
            <TemplatePage titloe="Clientes" component={Customers}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDeFouylt>
   )
}

export default App;
