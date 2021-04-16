// Functionals import
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Components import
import ErrorPage from '../ErrorPage';
import Footer from '../Footer';
import ForgetPassword from '../ForgetPassword'
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import SignUp from '../SignUp';
import Welcome from '../Welcome';
// Esthetics import
import '../../assets/App.css';
import { IconContext } from 'react-icons'


function App() {
  return (
    <Router>
      <IconContext.Provider value= {{ style: { verticalAlign: 'middle'} }}>
        <Header/>

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgetpassword" component={ForgetPassword}/>
          <Route component={ErrorPage} />
        </Switch>

        <Footer/>
      </IconContext.Provider>
    </Router>
  );
}

export default App;
