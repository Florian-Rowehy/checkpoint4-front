import './App.css';
import Header from './Component/Header'
import Navbar from './Component/Navbar';
import HomePage from './Page/HomePage';
import  {BrowserRouter , Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <main className='container pt-5'>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </main>
      <Header/>
    </BrowserRouter >
  );
}

export default App;