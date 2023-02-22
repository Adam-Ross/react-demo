import UserItem from './UserItem'

const Users = ({users, changeSingleUserState}) => {
    
    return users.map((current) => (
        <UserItem user={current}
         key={current.id}
         changeSingleUserState={changeSingleUserState}
         />
    ))
}

export default Users


