import React from 'react';
import './App.css';
import Header from './components/Header';
import Carausol from './components/Carausol';
import Footer from './components/Footer';
import Team from './components/Team';
import Journey from './components/Journey';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/" component={Carausol} />
          <Route exact path="/teamDetails" component={Team} />
          <Route exact path="/journey" component={Journey} />
          <Redirect to="/" />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
