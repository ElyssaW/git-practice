import logo from './logo.svg';
import './App.css';
import MyName from './MyName'
import Chassity from './components/Chassity'
import Jeff from './Jeff'
import Elyssa from './Elyssa'
import About from './About.js'

function App() {
  return (
    <div className="App">
      <MyName />
      <Chassity />
      <Jeff />
      <Elyssa />

      <About name='Chassity' desc='I like to do fun things.' />
    </div>
  )
}

export default App;
