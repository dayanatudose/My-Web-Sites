import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import {Switch, Route} from 'react-router-dom';
import Browse from './pages/Browse';



const App = () =>{
  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
       <Route path="/inregistrare" exact>
        <Register />
       </Route>  
       <Route path="/fotografi" exact>
        <Browse />
       </Route>
      </Switch>
    </div>
  );
}

export default App;
