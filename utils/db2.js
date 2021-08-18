const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jeremy:roverROVER123@cluster0.i52nc.mongodb.net/firstdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is Connected')
})