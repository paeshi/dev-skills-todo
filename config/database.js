// establish a connection to mongoDb
const mongoose = require('mongoose');
const connectionURI = (process.env.DATABASE_URI)

// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
