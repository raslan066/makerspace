const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gettingstarted', {useNewUrlParser: true});
const deneme = require('./students')
new deneme({
    name:"deneme",
    lastName:"deneme2",
}).save(function (err,data) {
    if (err) return handleError(err);
    // saved!
    console.log(data)
  });