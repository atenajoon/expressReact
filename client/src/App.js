import logo from './logo.svg';
import './App.css';
import Members from './components/members/members';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcom to React-Express Project!
        </p>
      </header>
      <Members />
    </div>
  );
}

export default App;
