


var express = require('express');
var router = express.Router();
const Footer = require('../models/footer_Model.js');




  // GET all articles
  router.get('/Allfooters', async (req, res) => {
    try {
      const footers = await Footer.find();
      res.status(200).json(footers);
    } catch (error) {
      console.error('Error retrieving footers:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });


  module.exports = router;