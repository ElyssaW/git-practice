import logo from './logo.svg';
import './App.css';
import MyName from './MyName'
import Chassity from './components/Chassity'
import Jeff from './Jeff'
import Elyssa from './Elyssa'
import Woo from './Woo'
import About from './About'
<<<<<<< HEAD
import GrinchYoga from './GrinchYoga'
=======
import { useState } from 'react';
>>>>>>> 4b05ccc2b047ba887065049a7378ee34ab7fa8ab

function App() {

  return (
    <div className="App">
      <MyName />
      <Chassity />
      <Jeff />
      <Elyssa />
      
      <Woo />
<<<<<<< HEAD
      <GrinchYoga />
=======

      <About name='Chassity' desc='I like to do fun things.' />
      <About name='Jeff' desc='I like to code, workout, and play video games.' />
      <About name='Jason' desc='I like playing videogame and reading' />
      <About name='Elyssa' desc='I like playing videogame, cooking, and drawing' />
>>>>>>> 4b05ccc2b047ba887065049a7378ee34ab7fa8ab
    </div>
  )
}

export default App;