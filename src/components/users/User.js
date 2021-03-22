import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'
 class User extends Component {


    static propTypes={
        loading: PropTypes.bool,
        user:PropTypes.object.isRequired,
        getUsers:PropTypes.func.isRequired,
        getUsersRepos:PropTypes.func.isRequired,
    }
     componentDidMount() {
         this.props.getUsers(this.props.match.params.login);
         this.props.getUsersRepos(this.props.match.params.login)


     }
    render() {
        const {name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            following,
            followers,
            public_repos,
            public_gists,
            hireable
}=this.props.user;

 const {loading}=this.props;
   if(loading){
       return <Spinner/>
   }
        return (<Fragment>
        <Link className='btn btn-light' to='/'>Back to Search</Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className='round-img' style={{width:'150px'}} alt=""/>
                    <h1>{name}</h1>
                    <p>Location- {location}</p>
                </div>
               <div> {bio && <Fragment> <h1>Bio</h1> {bio}</Fragment> }
               <a className='btn btn-dark my-1' href={html_url}>Visit Github Profile</a>
               
               </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Follwers- {followers}</div>
                <div className="badge badge-secondary">Follwing- {following}</div>
                <div className="badge badge-light">Public Repos- {public_repos}</div>
                <div className="badge badge-dark">Public Gists- {public_gists}</div>
            </div>
            <Repos repos={this.props.repos}/>
        </Fragment>)
    }
}

export default User
