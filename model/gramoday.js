const mongoose = require('mongoose');
const {v4: uuid} = require('uuid');
uuid();
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    
        reportID: String,
        userID: String,
        marketID : String,
        marketName : String,
        cmdtyID: String,
        marketType: String,
        cmdtyName: String,
        priceUnit: String,
        convFctr: Number,
        minPrice: Number,
        maxPrice: Number,
        submission: String,
    

})
const Report = mongoose.model('Report', reportSchema)

module.exports =  Report;