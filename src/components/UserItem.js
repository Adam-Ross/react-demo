const UserItem = ({user, changeSingleUserState}) => {

    const handleClick = (e) => {
        const id = e.target.id
        changeSingleUserState(id)
    }

    return (
        <h1 id={user.id} onClick={handleClick}>{user.name}</h1>
    )
}

export default UserItem