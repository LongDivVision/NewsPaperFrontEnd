import axios from "axios"


let loginService = {
    endpoint: "https://api.remotebootcamp.dev/api/users/login"
}

loginService.user = (payload) => {
    const config = {
method: "POST",
url: loginService.endpoint,
data: payload,
crossDomain: true,
headers: {"Content-Type":"application/json"}
}

return axios (config)
}


export default loginService