//library
import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

//komponent halaman
import Registrasi from './pages/registrasi/Registrasi';
import Login from './pages/Login/Login';
import lupaPassword from './pages/lupa-password/LupaPassword';
import NotFound from './pages/404/NotFound';
import PrivateRouter from './pages/Private/PrivateRouter';
import PrivateRoute from './components/PrivateRoute'

// komponent firebase
import FirebaseProvider from './components/FirebaseProvider';

//komponent import material ui
import CssBaseLine from '@material-ui/core/cssBaseLine';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './components/config/theme'

function App() {
  return (
    <>
    <CssBaseLine />
    <ThemeProvider theme={theme}>
   
    <FirebaseProvider>
      <Router>
            <Switch>
              <PrivateRoute path="/" exact component={PrivateRouter}/>
              <PrivateRoute path="/setting" component={PrivateRouter}/>
              <PrivateRoute path="/product" component={PrivateRouter}/>
              <PrivateRoute path="/transactions" component={PrivateRouter}/>
              <Route path="/registrasi" component={Registrasi}/>
              <Route path="/login" component={Login}/>
              <Route path="/lupa-password" component={lupaPassword}/>
              <Route component={NotFound    }/>
            </Switch>
      </Router>
    </FirebaseProvider>
    </ThemeProvider>
    </>
      

  );
}

export default App;
