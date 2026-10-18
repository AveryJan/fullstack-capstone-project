import React,{useState} from 'react';
const API=import.meta.env.VITE_API_BASE || 'http://localhost:5000';
export default function RegisterPage(){
 const[name,setName]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[message,setMessage]=useState('');
 async function register(e){e.preventDefault();try{
  const response=await fetch(`${API}/api/auth/register`,{
   method:'POST', headers:{'Content-Type':'application/json'},
   body:JSON.stringify({name,email,password})
  }); const data=await response.json();setMessage(data.message||data.error||'Unexpected response');
 }catch(e){setMessage('Registration failed');}}
 return <main><h1>Create an account</h1><form onSubmit={register}><input aria-label="Name" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required/><input aria-label="Email" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/><input aria-label="Password" type="password" minLength="8" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/><button>Register</button></form><p role="status">{message}</p></main>;
}
