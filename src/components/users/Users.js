import React from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import PropTypes from 'prop-types'
//we will be getting data from the github api which is array of objects
 function Users ({loading,users}) {
           
     if(loading){
         return <Spinner/>

     }
        else{
        return (
            <div style={userStyle}>
                {users.map((item)=>{
                   return ( <ul>

                   <UserItem key={item.id} user={item}/>

                    </ul>)
                } )}
            </div>
        )
            }
    
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}

Users.propTypes={
    loading:PropTypes.bool.isRequired,
    users:PropTypes.array.isRequired,
}

export default Users
