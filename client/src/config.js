// client/src/config.js
const config = {
    API_BASE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://nyayasetu1-0.onrender.com/api'
      : 'http://localhost:3001/api'
  };
  
  export default config;