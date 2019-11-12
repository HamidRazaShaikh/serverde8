var mongoose =  require ('mongoose');

var  ApplicantSchema = new mongoose.schema ({

    name : {type : string , required : true},
    father : {type : string , required : true},
    education : {type : string , required : true},
    email : {type : string , required : true},
    cell : {type : number , required : true},

});

exports.ApplicantInfo = mongoose.model ('applicant info' ,ApplicantSchema);
