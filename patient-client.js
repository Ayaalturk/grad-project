const baseUrl = "http://localhost:3000";

async function addPatient(patientData){
    const repsonse = await fetch(`${baseUrl}/newpatient`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(patientData)
    });
    return repsonse;
}


async function getPatient(patientTitle){
    let url = `${baseUrl}/getpatient`;
    if(patientTitle) {
        url += `/?name=${patientTitle}`;
    }
    const response = await fetch(url);
    return response;
}



