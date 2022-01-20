import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
        //eslint-disable-next-line
    }, [])

    const handleLogin = () => {
        axios.post('http://localhost:3000/login', {
            email:email,
            password:password
        }).then(res => {
            console.log("res =>",res)
            if(res.data.name){
                localStorage.setItem('user',JSON.stringify(res.data))
                navigate('/')
            }else{
                alert('Invalid Credentials')
            }
        }).catch(err => {
            console.log("error =>",err)
        })
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="inputBox" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className="appButton" type="button">Login</button>
        </div>
    )
}

export default Login