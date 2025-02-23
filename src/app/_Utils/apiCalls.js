'use-client '
const { headers } = require("next/headers");

const host= 'http://localhost:80';

exports.callApi = async (url, method, data) => {
    const headers = { 'Content-Type': 'application/json' };

    // Add Authorization header if authToken exists
    const authToken = sessionStorage?.getItem('authToken');
    if (authToken) {
        headers['Authorization'] = authToken;
    }

    const options = {
        method,
        headers,
    };

    // Add body for POST requests
    if (method === 'POST' && data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        // Handle non-2xx responses
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            const errorMessage = errorData?.error || 'An unexpected error occurred';
            throw errorMessage;
        }

        // Parse and return response JSON
        return await response.json();
    } catch (error) {
       
        throw error; // Rethrow the error for the caller to handle
    }
};


exports.isAuth=()=>{    
    console.log(sessionStorage.getItem('authToken'));
    const authToken = sessionStorage.getItem('authToken');
    const tokenExpiration = sessionStorage.getItem('tokenExpiration');
    if (authToken && tokenExpiration) {
        const currentTime = new Date().getTime();
  
        if (currentTime > tokenExpiration) {
          // Token expired, remove it and redirect to login
          sessionStorage.removeItem('authToken');
          sessionStorage.removeItem('tokenExpiration');
          return false;
        } 
    }
    if (!authToken) {
        return false
    }
    return true;

}