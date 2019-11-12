var express = require ('express');
var applicant = express.Router();
var Schema = require('./schema');
var ApplicantInfo = Schema.ApplicantInfo;


applicant.post('/add' ,function (req,res) {
    var applicant = new ApplicantInfo (req.body);
    applicant.save( function (error,data) {
        res.send({error : error , data : data})
        console.log(data);
        console.log(error);
    })

});

applicant.get('/get',function (req,res) {
    ApplicantInfo.find().exec(function (error,data) {
        res.send ({error : error , data : data});
        console.log(data);
        console.log(error);
    })
})

module.exports = applicant;