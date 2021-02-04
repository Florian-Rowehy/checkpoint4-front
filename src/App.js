import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import HomePage from './Page/HomePage';
import  {BrowserRouter , Switch, Route} from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import authAPI from './Service/authAPI';
import articlesAPI from './Service/articlesAPI';
import classificationsAPI from './Service/classificationsAPI';
import categoriesAPI from './Service/categoriesAPI';

authAPI.setup();

class App extends React.Component {
  state = {
    categories: [],
    departements: [],
    classifications: [],
    articles: [],
    isAuthenticated: false,
  }

  setIsAuthenticated(bool) {
    this.setState({isAuthenticated: bool});
  }
  
  componentDidMount() {
    categoriesAPI
      .findAll()
      .then(data =>{this.setState({categories: data})})
      .catch(e=>{console.log(e);})
    ;
    classificationsAPI
      .findAll()
      .then(data => {this.setState({classifications: data})})
      .catch(e=>{console.log(e);})
    ;
    articlesAPI
      .findAll()
      .then(data => {this.setState({articles: data})})
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
              render={()=><LoginPage setIsAuthenticated={this.setIsAuthenticated.bind(this)} />}
            />
          </Switch>
        </main>
      </BrowserRouter >
    );
  }
}

export default App;