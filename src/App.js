import React, {useState} from 'react'


function App() {

  // hooks
  const [loggedIn, setLoggedIn] = useState(false)

  if(loggedIn) {
    return <h1>Welcome back</h1>
  }

  const handleLogIn = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <div>
      <h1>Access denied</h1>
      <button onClick={handleLogIn}>Log in</button>
    </div>
  )
}

export default App;
