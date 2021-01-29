import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    // baseURL: ' https://itunes.apple.com/search?term=',
    headers: {
        Authorization:'Client-ID M39mWqoPe7zkn4chJ2h6SROKD9NwIBPEPcDWEbPMNBk' 
    }
});