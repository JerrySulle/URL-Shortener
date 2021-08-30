const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@cluster0.i52nc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is Connected')
})