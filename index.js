const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data'); // Import of the data from './data.json'

const MONGODB_URI = 'mongodb://localhost/recipeApp';

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to the database: "${x.connections[0].name}"`);
  })
  .then(x => {
    return Recipe.findOneAndUpdate({ title: 'The Rigatoni alla Genovese' }, { duration: 100 });
  })
  .then(update => {
    console.log(update);
  })
  .then(x => {
    return Recipe.deleteOne({ title: 'Carrot Cake' });
  })
  .then(remove => {
    console.log(remove);
  })
  .then(x => {
    return mongoose.connection.close();
  })
  .then(disconnect => {
    console.log('closing out');
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
