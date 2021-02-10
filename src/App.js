import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MyName from './MyName'
import Chassity from './components/pages/Chassity'
import Jeff from './Jeff'
import Elyssa from './Elyssa'
import Woo from './Woo'
import About from './About'
import GrinchYoga from './GrinchYoga'
import { useState } from 'react';

import Home from './components/pages/Home'
import Header from './components/partials/Header'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/elyssa" component={Elyssa} />
        <Route path="/jason" component={MyName} />
        <Route path="/jeffrey" component={Jeff} />
        <Route path="/chassity" component={Chassity} />
        <MyName />
        <Chassity />
        <Jeff />
        <Elyssa />

        <Woo />

        <About name='Chassity' desc='I like to do fun things.' />
        <About name='Jeff' desc='I like to code, workout, and play video games.' />
        <About name='Jason' desc='I like playing videogame and reading' />
        <About name='Elyssa' desc='I like playing videogame, cooking, and drawing' />
      </div>
    </Router>
    <div className="App">
      <MyName />
      <Chassity />
      <Jeff />
      <Elyssa />
      
      <Woo />
      <GrinchYoga />

      <About name='Chassity' desc='I like to do fun things.' />
      <About name='Jeff' desc='I like to code, workout, and play video games.' />
      <About name='Jason' desc='I like playing videogame and reading' />
      <About name='Elyssa' desc='I like playing videogame, cooking, and drawing' />
    </div>
  )
}

export default App;