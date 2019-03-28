import axios from 'axios';

key='';


export default axios.create({
    baseURL: '',
    params: {
        part: '',
        key: Key,
        maxResults: '5'
    }
})