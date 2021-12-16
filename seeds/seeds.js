const mongoose = require('mongoose');
const Report = require('../model/gramoday')
const {v4: uuid} = require('uuid');
uuid();

mongoose.connect('mongodb://localhost:27017/Gromoday',{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(() =>{
        console.log("Connection open")
    })
    .catch(err => {
        console.log("oh no errot")
        console.log(err)
    })

//const p = new Report({
//    reportID : uuid(),
//    userid : "user-2",
//    marketID : "market-1",
//    marketName: "Vashi Navi Mumbai",
//    cmdtyID: "cmdty-1",
//    cmdtyName: "Potato",
//    priceUnit: "Quital",
//    convFctr:100,
//    minPrice: 1600,
//    maxPrice: 1800,
//
//})
//p.save().then(p => {
//    console.log(p)
//})
//.catch(e => {
//    console.log(e)
//})

const seedReports = [
    {
        reportID : uuid(),
        userid : "user-2",
        marketID : "market-1",
        marketName: "Vashi Navi Mumbai",
        cmdtyID: "cmdty-1",
        cmdtyName: "Potato",
        priceUnit: "Quital",
        convFctr:100,
        minPrice: 1600,
        maxPrice: 1800,

    },
    {
        reportID : uuid(),
        userid : "user-2",
        marketID : "market-1",
        marketName: "Vashi Navi Mumbai",
        cmdtyID: "cmdty-1",
        cmdtyName: "Lady's Finger",
        priceUnit: "Quital",
        convFctr:100,
        minPrice: 1000,
        maxPrice: 900,
    },
    {
        reportID : uuid(),
        userid : "user-3",
        marketID : "market-1",
        marketName: "Dombivali",
        cmdtyID: "cmdty-1",
        cmdtyName: "Potato",
        priceUnit: "Quintal",
        convFctr:100,
        minPrice: 4000,
        maxPrice: 600,

    },
    {
        reportID : uuid(),
        userid : "user-3",
        marketID : "market-4",
        marketName: "Byculla",
        cmdtyID: "cmdty-1",
        cmdtyName: "Tomato",
        priceUnit: "Quintal",
        convFctr:100,
        minPrice: 600,
        maxPrice: 800,

    },

]
Report.insertMany(seedReports)
    .then(res =>{
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
