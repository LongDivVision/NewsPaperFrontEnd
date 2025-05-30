import axios from "axios"

let politicalCandidateService = {

    endpoint: "https://api.remotebootcamp.dev/api/entities/"
}

politicalCandidateService.add = (payload) => {
    const config = {
method: 'POST',
url: politicalCandidateService.endpoint + "politicalcandidates",
data: payload,
crossDomain: true,
headers: {"Content-Type":"application/json"}

    }

    return axios (config)
}

politicalCandidateService.get = (id) => {
    const config = {
        method: 'GET',
        url: politicalCandidateService.endpoint + "politicalcandidates/"+id,
        crossDomain: true,
        headers: {"Content-Type":"application/json"}

    }

    return axios (config)
}

export default politicalCandidateService;

/*
1. I am going to need to log-in on the bootcamp api
2. I am going to need to make an https request / ajax call that posts 
something to the Entity API
3. I am not sure if I am going to need to pass state as a 'prop' and call it payload. 
4. The axios promis should return something that has a transaction ID. 
5. That Id is connected to the person in the form and I can use that to render the card?

*/

