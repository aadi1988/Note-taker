const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8081;
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');

//to render html files.
app.use(express.static(path.join(__dirname,'public')));

//middleware to parse response body from webpage
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//call notesRoutes.js that has the routes for get, update, delete notes 
app.use('/api', apiRoutes);
//call index.js that has the routes for rendering html 
app.use('/', htmlRoutes);

//start the server
app.listen(PORT, () => console.log(`Started server on port ${PORT}`));