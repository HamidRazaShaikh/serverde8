var express = require ('express');
var Applicant = express.router();
var Schema = require('./schema');
var ApplicantInfo = Schema.ApplicantInfo;


Applicant.post('/add' ,function (req,res) {
    var info = new ApplicantInfo (req.body);
    info.save( function (error,data) {
        res.send({error : error , data : data})
        console.log(data);
        console.log(error);
    })

});

Applicant.get('/get',function (req,res) {
    ApplicantInfo.find().exec(function (error,data) {
        res.send ({error : error , data : data});
        console.log(data);
        console.log(error);
    })
})

module.exports = applicant;