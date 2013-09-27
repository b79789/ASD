function(doc) {
  if (doc._id.substr(0,8) === "Estimate") {
    emit(doc._id);
  }
};