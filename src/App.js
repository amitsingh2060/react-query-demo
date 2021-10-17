import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./component/HomePage";
import RQHero from "./component/RQHero";
import SuperHero from "./component/SuperHero";
import  {QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import RQid from "./component/RQid";
//  as
const queryClient = new QueryClient
console.log(queryClient,"mmmmmm");
function App() { 
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
       <div className='mainn'>
          
            <div>
            <p>
              <Link to='/'>
                Home
              </Link>
            </p>
            </div>
            <div>
            <p>
              <Link to='/super'>
                Super Hero
              </Link>
            </p>
            </div>
            <div>
            <p>
              <Link to='/hero'>
                RQ super hero
              </Link>
            </p>
            </div>
          
        </div>
        
      <Switch>
       <Route path='/hero/:heroId'>
            <RQid/>
       </Route>
        <Route exact  path="/">
          <HomePage />
        </Route>
        <Route path="/super">
          <SuperHero  data={50}/>
        </Route>
        <Route path="/hero">
          <RQHero />
        </Route>
      </Switch>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>

  );
}

export default App;
