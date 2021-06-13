import React, { useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import {Switch, Route} from 'react-router-dom';
import Browse from './pages/Browse';
import UserProfile from './pages/UserProfile';
import axios from 'axios';
import { User } from './models/user';


const App = () =>{
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        axios.get('https://localhost:5001/api/users').then(response => {
            setUsers(response.data);
        console.log(response);
        })
    }, [])
  return (
    <div>
      <GlobalStyle />
      <Nav users={users} isLogged={isLogged} setIsLogged={setIsLogged}/>
      <Switch>
      <Route path="/" exact component={HomePage}>
      </Route>
      <Route path="/login" exact >
        <Login isLogged= {isLogged} setIsLogged={setIsLogged} /> 
      </Route>
       <Route path="/inregistrare" exact component={Register}>
       </Route>  
       <Route path="/fotografi" exact component={Browse}>
       </Route>
       <Route path="/profil/:username" exact component={UserProfile}>
       </Route>
      </Switch>
    </div>
  );
}

export default App;
