const { response } = require("express");

function addNewPatient() {
    const namestr = document.getElementById("name").value;
    const uniIDstr = document.getElementById("uniID").value;
    const sectionstr = document.getElementById("section").value;
    const addressstr = document.getElementById("address").value;
    const dobstr = document.getElementById("dob").value;
    const phoneNostr = document.getElementById("phoneNo").value;

    const patientData = { name: namestr, pid: uniIDstr, Address: addressstr, 
    phone: phoneNostr, speciallty: sectionstr, dob: dobstr};
    addPatient(patientData)
    .then(response => {
        if(response.ok) {
            alert('added my man celebrate, go nuts');
        } else {
            alert('ERRORRRRRRRRR U beautiful stupid HEHE');
        }
    })

    .catch(error => {
        console.log(error)
    })

}