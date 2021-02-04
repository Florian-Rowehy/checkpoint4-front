import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from './Component/Navbar';
import HomePage from './Page/HomePage';
import  {BrowserRouter , Switch, Route} from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import authAPI from './Service/authAPI';

authAPI.setup();

class App extends React.Component {
  state = {
    categories: [],
    departements: [],
    classifications: [],
    articles: [],
  }

  componentDidMount() {
    const url = "http://localhost:8000/api";
    axios.get(url+'/categories')
            .then(res => res.data['hydra:member'])
            .then(
              data => {
                this.setState({categories: data})
              }
              )
            .catch(e=>{console.log(e);})
    ;
    axios.get(url+'/article_classifications')
            .then(res => res.data['hydra:member'])
            .then(
              data => {
                this.setState({classifications: data})
              }
              )
            .catch(e=>{console.log(e);})
    ;
    axios.get(url+'/articles')
            .then(res => res.data['hydra:member'])
            .then(
              data => {
                this.setState({articles: data})
              }
              )
            .catch(e=>{console.log(e);})
    ;
  }

  render() {
    return (
      <BrowserRouter >
        <Navbar/>
        <main>
          <Switch>
            <Route 
              exact path='/' 
              render={()=><HomePage categories={this.state.categories} classifications={this.state.classifications} />}
            />
            <Route 
              exact path='/women' 
              render={()=><HomePage categories={this.state.categories} classifications={this.state.classifications} />}
            />
            <Route 
              exact path='/men' 
              render={()=><HomePage categories={this.state.categories} classifications={this.state.classifications} />}
            />
            <Route 
              exact path='/kids' 
              render={()=><HomePage categories={this.state.categories} classifications={this.state.classifications} />}
            />
            <Route 
              exact path='/boys' 
              render={()=><HomePage categories={this.state.categories} classifications={this.state.classifications} />}
            />
            <Route 
              exact path='/girls' 
              render={()=><HomePage categories={this.state.categories} classifications={this.state.classifications} />}
            />
            <Route 
              exact path='/login' 
              component={LoginPage} 
            />
          </Switch>
        </main>
      </BrowserRouter >
    );
  }
}

export default App;