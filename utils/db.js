const mongoose = require('mongoose')

mongoose.connect('tba', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is Connected')
})
