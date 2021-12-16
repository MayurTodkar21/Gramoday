const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Report = require('./model/gramoday')
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.get('/reports', async(req, res) =>{
    const reports = await Report.find({})
    console.log(reports)
    res.render('report', { reports })
})
app.get('/reports/new', (req,res)=>{
    res.render("new");
})
app.get('/search', (req,res)=>{
    res.render("search");
})
app.get('/reports/:id', async(req,res) =>{
    const { id } = req.params;
    const query = await Report.find({cmdtyID: id})
    res.render('searchreport', {query});
    
})
app.post('/search', async(req,res)=>{
    id = req.body.search;
    res.redirect(`/reports/${id}`);
})
app.post('/reports', async(req,res)=> {
    const newReport = new Report(req.body);
    newReport.reportID =uuid();
    newReport.submission = "success";
    await newReport.save()
        
    console.log(newReport)
    res.redirect(`/${newReport._id}`);
})
app.get('/:_id', async(req,res)=>{
    const report = await Report.findById(req.params._id);
    res.render('confirmation', {report});
})
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})
