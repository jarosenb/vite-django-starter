import React, {Suspense} from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';



/*

function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="container p-10">
      hello world from app!
      <div className="h-60 w-60 bg-green-200 flex justify-center items-center">
        flex <Component/>
      </div>
    </div>
  )
}

export default App
*/

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

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
  const Common = React.lazy(() => import('_common/Common'))
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Common/>
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
