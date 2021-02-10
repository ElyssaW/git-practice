import logo from './logo.svg';
import './App.css';
import MyName from './MyName'
import Chassity from './components/Chassity'
import Jeff from './Jeff'
import Elyssa from './Elyssa'

function App() {
  return (
    <div className="App">
      <MyName />
      <Chassity />
      <Jeff />
      <Elyssa />

      <About name='Chassity' desc='I like to do fun things.' />
      <About name='Jeff' desc='I like to code, workout, and play video games.' />
      <About name='Jason' desc='I like playing videogame and reading' />
      <About name='Elyssa' desc='I like playing videogame, cooking, and drawing' />
    </div>
  )
}

export default App;