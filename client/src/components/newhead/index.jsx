import React from 'react'
import { useNavigate  } from 'react-router-dom'

const NewHeader = () => {
    const navigate  = useNavigate();

    function handleLogout() {
    // await auth.signOut()
    navigate.push("/login", { replace: true })
  }
  return (
    <div style={{ backgroundColor: '', display: 'flex'}}>
        <div>
            ChatGpt
        </div>
        <div onClick={handleLogout}>
            Logout
        </div>
    </div>
  )
}

export default NewHeader