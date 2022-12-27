import axios from "axios";

const Axios = axios.create({
  baseURL: //"https://us-central1-clone-fcc92.cloudfunctions.net/api",
    "http://localhost:5001/envagle-beauty/us-central1/api", //The API (cloud function) URL

});

export default Axios;
