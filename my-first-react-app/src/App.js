import logo from './assets/logo.svg'
import './App.css';

function App() {
  let name = 'Mario'

  const changeName = () => { 
    name = 'Luigi'
    console.log('luigi')
  }

  return (
    <div className="App">
      <h2>It's a me {name}</h2>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
