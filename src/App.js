import './App.css';
import Header from './Component/Header'
import Navbar from './Component/Navbar';
import HomePage from './Page/HomePage';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='container pt-5'>
        <HomePage/>
      </div>
      <Header/>
    </>
  );
}

export default App;
