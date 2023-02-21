import React from 'react'
import Users from './components/Users'
import SingleUser from './components/SingleUser'
import {useEffect, useState} from 'react'


function App() {

  const [users, setUsers] = useState([])
  const [singleUser, setSingleUser] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    }
    getData()
  }) 

  const handleSetUser = async (id) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const user = await response.json()
      setSingleUser(user)
  }

  const handleSingleUserStateChange = () => {
    setSingleUser(null)
  }

  if(!singleUser) return <Users users={users} handleSetUser={handleSetUser} />

  return <SingleUser singleUser={singleUser}
  handleSingleUserStateChange={handleSingleUserStateChange}
  />

  
  
}

export default App;
