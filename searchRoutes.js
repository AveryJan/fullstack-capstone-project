const express = require('express');
const { connectToDatabase } = require('../db');
const router = express.Router();
const escapeRegex = value => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
router.get('/', async (req, res, next) => {
  try {
    const db = await connectToDatabase();
    const filter = {};
    if (req.query.category) filter.category = { $regex: `^${escapeRegex(req.query.category)}$`, $options: 'i' };
    if (req.query.q) filter.name = { $regex: escapeRegex(req.query.q), $options: 'i' };
    const gifts = await db.collection('gifts').find(filter).toArray();
    res.json(gifts);
  } catch (err) { next(err); }
});
module.exports = router;
