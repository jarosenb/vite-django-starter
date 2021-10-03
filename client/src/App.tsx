import React, {Suspense} from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

export default function BasicExample() {
  return (
      <div>
        <ul>
          <li>
            <Link to="/test">Home</Link>
          </li>
          <li>
            <Link to="/test/about">About</Link>
          </li>
          <li>
            <Link to="/test/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/test">
            <Home />
          </Route>
          <Route path="/test/about">
            <About />
          </Route>
          <Route path="/test/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
  );
}

// You can think of these components as "pages"
// in your app.
function Home() {
  const LazyLoader = React.lazy(() => import('_common/LazyLoader'))
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoader/> hi
      </Suspense>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
