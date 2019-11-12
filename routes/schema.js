var mongoose =  require ('mongoose');

var  ApplicantSchema = new mongoose.Schema ({

    name : {type : String , required : true},
    father : {type : String , required : true},
    education : {type : String , required : true},
    email : {type : String , required : true},
    cell : {type : Number, required : true},

});

exports.ApplicantInfo = mongoose.model ('applicant' ,ApplicantSchema);
