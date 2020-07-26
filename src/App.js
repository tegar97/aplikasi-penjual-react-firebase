//library
import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

//komponent halaman
import Registrasi from './pages/registrasi/Registrasi';
import Login from './pages/Login/Login';
import lupaPassword from './pages/lupa-password/LupaPassword';
import NotFound from './pages/404/NotFound';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registrasi" component={Registrasi}/>
        <Route path="/login" component={Login}/>
        <Route path="/lupa-password" component={lupaPassword}/>
        <Route component={NotFound   }/>
      </Switch>

    </Router>
  );
}

export default App;
