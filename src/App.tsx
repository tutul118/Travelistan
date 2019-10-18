import React from 'react';
import Home from './components/Home'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import './App.css';
import Pokemon from './components/Pokemon';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Travelistan</h1>
      </header>

      <Breadcrumb>
      <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to="/login">Login</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to="/contactus">ContactUs</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to="/pokemon">Pokemon</Link></BreadcrumbItem>
      
      
      </Breadcrumb>

      <Switch>
        <Route exact path ="/home">
          <Home />
        </Route>

        <Route exact path ="/login">
          <Login />
        </Route>

        
        <Route exact path ="/contactus">
          <ContactUs />
        </Route>

        <Route exact path ="/pokemon">
          <Pokemon />
        </Route>
        
        
      </Switch>


    </div>
    </BrowserRouter>
  );
}

export default App;
