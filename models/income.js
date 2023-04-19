const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    
    Invoice_ID:{
        type :String,
        required:true
    },
    Description:{
        type :String,
        required:true
    },
    Date:{
        type :Date,
        required:true
    },
    Amount:{
        type :Number,
        required:true
    },
    Type:{
        type :String,
        required:true
    }

})

module.exports = mongoose.model('Incomes',incomeSchema);