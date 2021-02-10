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
      <About name='Jason' desc='I like playing videogame and reading' />
    </div>
  )
}

export default App;