const mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema({



  maxArticles:{
    type:String,
  },


  dateInsertion_DB:{
    type:String,
  }
 
});

const Footer_Collection = mongoose.model('Footer_Collection', FooterSchema);

module.exports = Footer_Collection;
