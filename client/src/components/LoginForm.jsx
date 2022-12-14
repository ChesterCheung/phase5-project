import React, {useState, useContext} from 'react'
import { UserContext } from '../context/user'

const LoginForm = ({setShowLogin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const style ={display: "flex", justifyContent: "center", alignItems: "center"}
    const myStyle={
        backgroundImage: 
          "url('https://parktacular.b-cdn.net/wp-content/uploads/2016/01/Traderjoes.png')",
        height:'100vh',
        marginTop:'-15px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}),
        })
        .then((response)=> {
            if (response.ok) {
              response.json().then((u) => setUser(u))
            }
          })
    }

  return (
        <div className="container" style={myStyle} >
            <h1 style={style}>Login</h1>
            <form onSubmit={handleSubmit}>
                <div style={style}>
                    <label>Username</label>
                    <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <input style={style} type="submit" value="Login" />
                </div>
            </form>
            <div style={style}>
                <label >Don't have an account?</label>
                <button onClick={() => setShowLogin(false)} style={style}>Sign up</button>
            </div>
        </div>
  )
}

export default LoginForm

