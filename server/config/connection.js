const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mram:runnersRun5!@atlascluster.ipjheyc.mongodb.net/?retryWrites=true&w=majority" || 'mongodb://127.0.0.1:27017/programming-thoughts');

module.exports = mongoose.connection;
