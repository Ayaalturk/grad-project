const mongoose = require('mongoose');
const Patient = require('../schemas/patient-schema')


class Database {
    constructor() {

        // url has connection string that detects db name and location 
        this.Url = "mongodb+srv://Maryam:1234@clinic.gyi0b.mongodb.net/OurClinic?retryWrites=true&w=majority"; // localhost: location, 27017: port, notaty: name of db
    }

    connect() {
        mongoose.connect(this.Url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('database connected successfully')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // to add collections 
    // must build a schema that defines the info of collection that i want to put data in ( my notes )
    addPatient(patient) {
        return new Promise((resolve, reject) => {

          
            let newPatient = new Patient(patient);
            newPatient.save() // returns a promise 
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err);
                });

                // changed the addNote to asynchronous code by making return something 
        })

    
    }
 
    getPatient(){
        return new Promise((resolve, reject) => {
         Patient.find({})
         .then(data => {
             resolve(data);
         })
         .catch(err => {
             reject(err);
         })
     })
            
        }
}






// must export to use it outside 

module.exports = Database;