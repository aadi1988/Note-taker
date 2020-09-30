const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
//const notesArr = [];


//console.log(notes);
//app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);


app.listen(PORT, () => console.log(`Started server on port ${PORT}`));