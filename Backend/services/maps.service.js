const axios = require('axios');
module.exports.getAddressCoordinate = async(address) => {
    const apiKey = process.env.GOOGLE_MAP_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        }else{
            throw new Error('Unable to retrieve coordinates');
        }
    }catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw new Error('Error fetching coordinates');
    }
}


module.exports.getDistanceAndTime = async (origin, destination) => {
    if(!origin || !destination) {
        throw new Error('Origin and destination are required');
    }
    const apiKey = process.env.GOOGLE_MAP_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{

        const response = await axios.get(url);
        if(response.data.status === 'OK') {

            if(response.data.rows[0].elements[0].status !== 'OK') {
                throw new Error('Unable to retrieve distance and time');
            }

            return response.data.rows[0].elements[0];


        }else{
            throw new Error('Unable to retrieve distance and time');
        }

    }catch (error) {
        console.error('Error fetching distance and time:', error.message);
        throw new Error('Error fetching distance and time');
    }
}


module.exports.getSuggestions = async (input) => {
    if(!input) {
        throw new Error('Input is required');
    }
    const apiKey = process.env.GOOGLE_MAP_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK') {
            return response.data.predictions;
        }else{
            throw new Error('Unable to retrieve suggestions');
        }
    }catch (error) {
        console.error('Error fetching suggestions:', error.message);
        throw new Error('Error fetching suggestions');
    }
};