require('dotenv').config();
const express=require('express');
const cors=require('cors');
const giftRoutes=require('./routes/giftRoutes');
const searchRoutes=require('./routes/searchRoutes');
const authRoutes=require('./routes/authRoutes');
const app=express();
app.use(cors({origin:process.env.FRONTEND_ORIGIN || 'http://localhost:3000'}));
app.use(express.json());
app.get('/health',(_req,res)=>res.json({status:'ok'}));
app.use(giftRoutes);
app.use('/api/search',searchRoutes);
app.use('/api/auth',authRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({error:'Internal server error'});});
if(require.main===module){app.listen(process.env.PORT||5000,()=>console.log('GiftLink API listening'));}
module.exports=app;
