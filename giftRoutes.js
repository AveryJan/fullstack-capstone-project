const express = require('express');
const { connectToDatabase } = require('../db');
const router = express.Router();
router.get('/api/gifts', async (req,res,next) => {
  try { const db = await connectToDatabase(); const gifts = await db.collection('gifts').find({}).toArray(); res.json(gifts); }
  catch (e) { next(e); }
});
router.get('/api/gifts/:id', async (req,res,next) => {
  try { const db = await connectToDatabase(); const id=Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({error:'Invalid ID'});
    const gift=await db.collection('gifts').findOne({id});
    if (!gift) return res.status(404).json({error:'Gift not found'});
    res.json(gift);
  } catch (e) { next(e); }
});
module.exports=router;
