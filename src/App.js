import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from './Component/Navbar';
import HomePage from './Page/HomePage';
import  {BrowserRouter , Switch, Route} from 'react-router-dom';
import ItemsPage from './Page/ItemsPage';

class App extends React.Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/categories')
            .then(res => res.data['hydra:member'])
            .then(
              data => {
                console.log(data);
                this.setState({categories: data})
              }
              )
            .catch(e=>{console.log(e);})
  }

  render() {
    return (
      <BrowserRouter >
        <Navbar/>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/items' component={ItemsPage}/>
          </Switch>
        </main>
      </BrowserRouter >
    );
  }
}

export default App;