import {
  browserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDeFouylt from'./templates/Defoult'
import Home from './pages/home';

const App = () => {
   return (
    <TemplateDeFouylt>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDeFouylt>
   )
}

export default App;
