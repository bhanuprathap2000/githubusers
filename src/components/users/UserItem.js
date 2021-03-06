import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
 function UserItem(props){
    const {login,avatar_url,html_url}=props.user;
  

        
        return (
            <div className='card text-center'>

            <img src={avatar_url} className='round-img'  style={{width:'60px'}} />
             <div>{login}</div>

            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
            </div>
                
            </div>
        )
    
}

UserItem.propTypes = {

    user:PropTypes.object.isRequired,

}

export default UserItem
