const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectToDatabase } = require('../db');
const router = express.Router();
router.post('/register', async (req,res,next) => {
  try {
    const {name,email,password}=req.body || {};
    if (!name || !email || typeof password !== 'string' || password.length < 8) return res.status(400).json({error:'Name, email and password (8+ chars) required'});
    const db=await connectToDatabase(); const users=db.collection('users');
    const normalizedEmail=String(email).trim().toLowerCase();
    const existing=await users.findOne({email:normalizedEmail});
    if(existing) return res.status(409).json({error:'Email already registered'});
    const passwordHash=await bcrypt.hash(password,12);
    await users.insertOne({name,email:normalizedEmail,passwordHash});
    res.status(201).json({message:'User registered successfully'});
  } catch(e) {next(e);}
});
router.post('/login', async(req,res,next)=>{
  try {
    const {email,password}=req.body || {};
    if(typeof email!=='string' || typeof password!=='string') return res.status(400).json({error:'Email and password required'});
    const db=await connectToDatabase();
    const user=await db.collection('users').findOne({email:email.trim().toLowerCase()});
    if(!user || !(await bcrypt.compare(password,user.passwordHash))) return res.status(401).json({error:'Invalid credentials'});
    if(!process.env.JWT_SECRET) throw new Error('JWT_SECRET required');
    const token=jwt.sign({sub:user._id.toString(),email:user.email},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.json({message:'Login successful',token});
  }catch(e){next(e);}
});
module.exports=router;
