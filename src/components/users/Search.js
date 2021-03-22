import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class Search extends Component {
     state={
         text:''
     }

     static propTypes = {
         searchUsers:PropTypes.func.isRequired,
         clearUsers:PropTypes.func.isRequired,
         setAlert:PropTypes.func.isRequired,

}

     searchHandler=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }

     formHandler=(e)=>{
         e.preventDefault();
         if(this.state.text===""){
            this.props.setAlert('Please Enter text to search','light')

         }
         else{
            console.log('form not submitted')
            console.log(this.state.text);
            this.props.searchUsers(this.state.text);
            this.setState({text:''});

         }
        
         
     }
    render() {
        
        return (
            <div>
                <form onSubmit={this.formHandler} className='form'>
                    <input placeholder='Search users...' onChange={this.searchHandler} value={this.state.text} name='text' type="text"/>
                    <button className='btn btn-dark btn-block' type="submit">Search</button>
                    
                </form>
                {this.props.showClear && <button onClick={this.props.clearUsers} className="btn btn-light btn-block">Clear</button> }
                
            </div>
        )
    }
}

export default Search
