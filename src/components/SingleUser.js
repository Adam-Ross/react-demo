const SingleUser = ({singleUser, setSingleUserToNull}) => {

    const handleClick = () => {
        setSingleUserToNull()
    }

    return (
        <>
            <h1>{singleUser.name}</h1>
            <button onClick={handleClick}>Back</button>
        </>
    )
}

export default SingleUser