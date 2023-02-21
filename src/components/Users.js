import React from 'react'
import UserItem from './UserItem'
const Users = ({users, handleSetUser}) => {
    return users.map((user) => (
        <UserItem user={user}
         key={user.id}
         handleSetUser={handleSetUser}
        />
    ))
}

export default Users