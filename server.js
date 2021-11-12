const express = require('express'); // express is a function 
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const Database = require('./Database'); // required the exported database class 
// making an object of Database
const db = new Database(); // new instance/object of Database 

app.use(cors()); // cors allows us to make api calls out of range of our server
app.use(bodyParser.json()); // json is the format of file when we send data for api 
app.use(bodyParser.urlencoded({extended: false}));


// create POST API to be able to create a new note

app.post('/newpatient', (req,res)=> {

    const body = req.body; // data sent by client ( content of note )
    console.log('body : ',body);
    db.addPatient(body) // sychronous code in addNote
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send(err);
    })
});

app.get('/getpatient', (req,res)=> {
    db.getPatient()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
     res.status(500).send(err);
    })

})



const port = 3000;

app.listen(port, ()=> {
    console.log(`server has started on port ${port}...`);
    // connect to db when server started
    db.connect();
});

