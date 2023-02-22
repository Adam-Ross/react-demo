import {useState} from 'react'
const UserInput = ({changeUserNameState}) => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        changeUserNameState(text)
        setText('') 
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default UserInput