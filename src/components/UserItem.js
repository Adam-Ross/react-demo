const UserItem = ({user, handleSetUser}) => {

    const handleClick = (e) => {
        const id = e.target.id
        handleSetUser(id)
    }

    return (
        <>
            <h1 id={user.id} onClick={handleClick}>{user.name}</h1>
        </>
    )
}

export default UserItem