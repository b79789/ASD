function(doc) {
  if (doc._id.substr(0,9) === "Estimate1") {
    emit(doc._id.substr(8),{
    	"formFirstName": doc.formFirstName,
    	"formLastName": doc.formLastName,
    	"formEmail": doc.formEmail,
    	"formPhone": doc.formPhone
    
    });
  }
};