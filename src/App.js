import './App.css';
// import { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// reference /Users/Ben/SEIR/lectures/w08d03/react-router/react-bitcoin-router

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Music from './Components/Music/Music';
import Songs from './Components/Songs/Songs';
import Plants from './Components/Plants/Plants';
import SinglePlant from './Components/SinglePlant/SinglePlant';


function App() {
  // const [token, setToken] = useState(''); // use for auth

  // Register
  // Login

  return (
    <div className="App">
      <header className="App-header">
        <Link className="bitingRentHeaderLink" to="/">
          <h1 className="bitingRentHeader">BitingRent</h1>
        </Link>
        <img src="https://i.imgur.com/4CbaLZT.png" alt="My Face"/>

        <nav>
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/about">About</Link>
          <Link className="App-link" to="/music">Music</Link>
          <Link className="App-link" to="/songs">Songs</Link>
          <Link className="App-link" to="/plants">Plants</Link>
        </nav>
      </header>
      <body>
        <Switch> 
        {/* SWITCH WILL RETURN THE FIRST THING IT FINDS THAT FITS. /PLANTS/:ID MUST BE BEFORE /PLANTS*/}
          <Route exact path ="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/songs" component={Songs} />
          <Route path="/music" component={Music} />
          <Route exact path="/plants/:id" render={routerProps =>
            <SinglePlant {...routerProps} />
          } />
          <Route path="/plants" component={Plants} />
        </Switch>
        <br/>
      </body>
        <footer className="bitingRentFooter"> created by BitingRent</footer>
    </div>
  );
}

export default App;
