const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudApp', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to db successfully')
}).catch( (e) => {
    console.log(e);
})

module.exports = {
    mongoose
}