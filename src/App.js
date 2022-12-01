import './App.css';
import Home from './components/Home';
import { Route, Switch, Redirect } from "react-router-dom"
import Rent from './components/Rent';
import Sale from './components/Sale';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Details from './components/Details';

function App() {
  return (
    
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/rent" exact>
        <Rent />
      </Route>
      <Route path="/sale" exact>
        <Sale />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/details" exact>
        <Details />
      </Route>
    </Switch>
    
    
  );
}

export default App;
