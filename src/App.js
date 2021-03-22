import React, {Fragment, Component} from 'react'
import './App.css';
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User'

class App extends Component {
  state={
    loading:false,
    users:[],
    user:{},
    repos:[],
    alert:null,
  }


  searchUsers= async (text)=>{
       
    this.setState({loading:true})

     const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

      this.setState({users:res.data.items,loading:false})
  



  }

  clearUsers=()=>{
    this.setState({users:[],loading:false})
  }

   setAlert=(msg,type)=>{
     
     this.setState({alert:{msg,type}});

     setTimeout(()=>{this.setState({alert:null})},3000)

   }

   getUsers= async (username)=>{

    this.setState({loading:true})

     const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

      this.setState({user:res.data,loading:false})
  
             
       
   }

   getUsersRepos= async (username)=>{

    this.setState({loading:true})

     const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

      this.setState({repos:res.data,loading:false})
  
             
       
   }

  render(){

    return (
      <div className="App">
      <Router>
      <Navbar title='Github Finder' icon='fab fa-github'/>
        <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>
        <Route exact path='/' render={(props)=>(
          <Fragment>
           <Search setAlert={this.setAlert} clearUsers={this.clearUsers} searchUsers={this.searchUsers} showClear={this.state.users.length>0?true:false}/>
        
        {/* <UserItem/> */}
        <Users loading={this.state.loading} users={this.state.users}/>
          </Fragment>
        )}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' render={(props)=>(<User {...props}  repos={this.state.repos} getUsersRepos={this.getUsersRepos} getUsers={this.getUsers} user={this.state.user} loading={this.state.loading}  />)}/>
        </Switch>
       

        </div>
        </Router>
      </div>
     
    );

  }
 
}

export default App;
