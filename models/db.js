const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/InventoryDB' , {useNewUrlParser: true} , (err)=>{
    if (!err) {console.log('mongoDB connection is ok')}
    else {console.log('error in DB connection : ' + err)};
});

require('./product.model');