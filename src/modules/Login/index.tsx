import React from 'react'
import USC from '../../assets/usc_tc_bunzel.jpg'
import LOGO from '../../assets/usc_logo.png'
import { colors } from '../../constants/colors'
import { populate } from '../../db/populate'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { db } from '../../db/db'
import { User } from '../../db/db'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const users = await db.user.toArray();
    console.log('otin 8=D');

    
    const studentUser = users.find(user => user.email === email && user.password === password && user.type === 'STUDENT');
    
    if (studentUser) {
      console.log('Logged in as student');
      navigate('/landing');
    } else {
      console.log('Invalid email or password');
    }
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{flex: 1}}>
        <img src={USC} style={{height: '100vh', width: '45vw'}}></img>
      </div>
      
      <div style={{flex: 1, width: '51vw', justifyContent: 'center', alignContent: 'center'}}>
        <center><img src={LOGO} style={{paddingTop: '20px', width: '420px', height: 'auto'}}></img></center>
        <form onSubmit={(e) => onSubmit(e)}>
          <div style={{flex: 1}}>
            <h3>Login</h3>
            <p style={{margin: '3px', fontWeight: 'bold'}}>Email</p>
            <input value={email} type='email' name='email' required onChange={(t) => setEmail(t.target.value)}  style={{height: 30, paddingLeft: 10, width: '95%', backgroundColor: colors.secondary}}></input>
            <p style={{margin: '3px', fontWeight: 'bold'}}>Password</p>
            <input value={password} type='password' name='password' required onChange={(t) => setPassword(t.target.value)}style={{height: 30, paddingLeft: 10, width: '95%', backgroundColor: colors.secondary}}></input>
          </div>
          <div style={{marginTop: 40, display: 'flex', justifyContent: 'center'}}>
            <button >Login</button>
          </div>
        </form>
        
        <p style={{marginTop: '10%', display: 'flex', justifyContent: 'center'}}>
          2023 © UNIVERSITY OF SAN CARLOS
        </p>
        <p style={{marginTop: '1px', display: 'flex', justifyContent: 'center'}}>
          SYSTEM ANALYSIS BORROWING MODULE
        </p>
      </div>
    </div>
  )
}

export default Login