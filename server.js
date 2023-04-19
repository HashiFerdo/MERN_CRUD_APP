const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express();


mongoose.set('strictQuery', false);

//import routes
const postRoutes = require('./routes/posts');
const incomeRoutes = require('./routes/income');
const cors = require('cors');

//app middleware
app.use(bodyParser.json());
app.use(cors());


//communicate with the server
//route middleware
app.use(postRoutes);
app.use(incomeRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Admin:Admin123@picozen.cv5bguz.mongodb.net/CGrow?retryWrites=true&w=majority';


mongoose.connect(DB_URL)
.then(()=>{
    
    console.log('DB Connected  ');
    
})
.catch((err)=>console.log('DB Connection error',err))

//app eka listen karanna one menn me port eke run wenna kiyala
app.listen(PORT, () =>{
    console.log(`App is running on port ${PORT}`)
});