import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import NotFound from './NotFound'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import JobOfferPage from './components/JobOfferPage';
import Footer from './components/Footer'
import JobInnerPage from './components/JobInnerPage';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/jobs"><JobOfferPage /></Route>
            <Route exact path="/jobs/:id"><JobInnerPage /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
