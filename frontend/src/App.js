import './App.css';
import NavigationBar from './components/NavBar';
import LandingPage from './views/LandingPage'
import Match from './views/Match'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/match">
            <Match />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
