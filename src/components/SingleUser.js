const SingleUser = ({singleUser, handleSingleUserStateChange}) => {

    const handleChange = () => {
        handleSingleUserStateChange()
    }

    return (
        <>
            <h1>{singleUser.name}</h1>
            <button onClick={handleChange}>Back</button>
        </>
    )
}

export default SingleUser