import React,{useState} from 'react';
const API=import.meta.env.VITE_API_BASE || 'http://localhost:5000';
export default function LoginPage(){
 const[email,setEmail]=useState(''),[password,setPassword]=useState(''),[message,setMessage]=useState('');
 async function login(e){e.preventDefault();try{
  const response=await fetch(`${API}/api/auth/login`,{
   method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+(sessionStorage.getItem('giftlink_token')||'')},
   body:JSON.stringify({email,password})
  }); const data=await response.json();if(response.ok&&data.token) sessionStorage.setItem('giftlink_token',data.token);
  setMessage(data.message||data.error||'Unexpected response');
 }catch(e){setMessage('Login failed');}}
 return <main><h1>Log in</h1><form onSubmit={login}><input aria-label="Email" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/><input aria-label="Password" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/><button>Log in</button></form><p role="status">{message}</p></main>;
}
