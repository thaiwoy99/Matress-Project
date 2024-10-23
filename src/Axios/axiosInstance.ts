 import axios from "axios"

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_API_URL}/api` ,
    headers: {"Content-Type" : "application/json",
        'Accept': 'application/json', // Ensure you're accepting JSON

    },
    
  });
  
  export default axiosInstance