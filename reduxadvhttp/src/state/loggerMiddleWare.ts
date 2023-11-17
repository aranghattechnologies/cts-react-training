import axios from "axios"

export const logger = store => next => action => {
    axios.post("http://localhost:8080/logs", 
    { date : new Date(),
      action : action.type,
      payload : action.payload ? action.payload : "No Payload"
    }).then(response => console.log(response.data))
    .catch(error => console.log(error));
}