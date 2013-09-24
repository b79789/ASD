function(doc) {
  if (doc._id.substr(0,8) === "Estimate") {
    emit(doc._id.substr(7),{
    	"formFirstName": doc.formFirstName,
    	"formLastName": doc.formLastName,
    	"formEmail": doc.formEmail,
    	"formPhone": doc.formPhone
    
    });
  }
};