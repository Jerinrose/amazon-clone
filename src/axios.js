import axios from 'axios';

const instance =axios.create({
      baseUrl:"http://localhost:5001/clone-1903b/us-central1/api"  //the API
});

export default instance;